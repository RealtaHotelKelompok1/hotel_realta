CREATE SCHEMA payment;

CREATE TABLE payment.entities (
	entity_id				serial			PRIMARY KEY
);

CREATE TABLE payment.bank (
	bank_entity_id		  	int 		    PRIMARY KEY,
	bank_code			  	varchar(10) 	UNIQUE,
	bank_name			  	varchar(55) 	UNIQUE,
	bank_modified_date		timestamp,
	CONSTRAINT bank_entity_id_fk
		FOREIGN KEY (bank_entity_id) REFERENCES payment.entity(entity_id) ON UPDATE CASCADE
);

CREATE TABLE payment.payment_gateaway (
	paga_entity_id		  	int				PRIMARY KEY,
	paga_code			  	varchar(10)		UNIQUE,
	paga_name			  	varchar(55)		UNIQUE,
	paga_modified_date		timestamp,
	CONSTRAINT paga_entity_id
		FOREIGN KEY (paga_entity_id) REFERENCES payment.entity(entity_id) ON UPDATE CASCADE
);

CREATE TABLE payment.user_accounts (
	usac_entity_id		    int,
	usac_user_id		    int,
	usac_account_number	  	varchar(25) UNIQUE,
	usac_saldo			    numeric,
	usac_type			    varchar(15), -- debet | cc | payment
	usac_expmonth		    smallint,
	usac_expyear		    smallint,
	usac_modified_date	  	timestamp,
	usac_card_holder_name	varchar(50),
	usac_secured_key		varchar,
	CONSTRAINT user_accounts_pk
		PRIMARY KEY (usac_entity_id, usac_user_id),
	CONSTRAINT usac_entity_id_fk
		FOREIGN KEY (usac_entity_id) REFERENCES payment.entity(entity_id) ON UPDATE CASCADE,
	CONSTRAINT usac_user_id_fk
		FOREIGN KEY (usac_user_id) REFERENCES users.users(user_id) ON UPDATE CASCADE
);

CREATE TABLE payment.payment_transaction (
	patr_id				serial		  	PRIMARY KEY,
	patr_trx_number		varchar(55)		UNIQUE,
	patr_debet			numeric,
	patr_credit			numeric,
	patr_type			char(3),
	patr_note			varchar(255),
	patr_modified_date	timestamp,
	patr_order_number	varchar(55), 
	patr_trx_number_ref	varchar(55) 	UNIQUE,
	patr_source_id		int,
	patr_target_id		int,
	patr_user_id		int,
  CONSTRAINT patr_user_id_fk
		FOREIGN KEY (patr_user_id) REFERENCES users.users(user_id) ON UPDATE CASCADE
);


------------------------------ VIEW ------------------------------
CREATE OR REPLACE VIEW payment.user_transactions AS (
	SELECT 
		p.patr_id 				"transactionId",
		p.patr_trx_number 		"transactionNumber",
		TO_CHAR(patr_modified_date, 'DD Mon YYYY') "trxDate",
		TO_CHAR(patr_modified_date, 'HH12:MI AM') "trxTime",
		(
			CASE
				WHEN p.patr_type = 'ORM'
				THEN (
					SELECT orme_is_paid
					FROM resto.order_menus
					WHERE orme_order_number = p.patr_order_number
				)
				WHEN p.patr_type = 'BO'
				THEN (
					SELECT boor_is_paid
					FROM booking.booking_orders
					WHERE boor_order_number = p.patr_order_number
				)
				ELSE 'Completed'
			END
		) AS "status",
		p.patr_debet			"debit",
		p.patr_credit			"credit",	
		p.patr_type				"transactionType",
		p.patr_note				"transactionNote",
		p.patr_order_number		"orderNumber",
		p.patr_source_id		"sourceNumber",
		p.patr_target_id		"targetNumber",
		(
			SELECT "paymentName" 
			FROM payment.user_payment_methods
			WHERE "accountNumber" = p.patr_target_id::text
		) "targetPaymentName",
		p.patr_trx_number_ref	"transactionRef",
		p.patr_user_id			"userId",
		u.user_full_name		"userFullName"
	FROM payment.payment_transaction p
	JOIN users.users u ON u.user_id = p.patr_user_id
)

------------------------------------------------------------
CREATE VIEW payment.user_payment_methods
AS (
	SELECT
		acc.usac_user_id 	"userId",
		u.user_full_name 	"fullName",
		acc.usac_type		"paymentType",
		(
			CASE
				WHEN acc.usac_type <> 'Fintech'
				THEN b.bank_name
			ELSE
				dr.paga_name
			END
		) AS "paymentName",
		acc.usac_account_number		"accountNumber",
		acc.usac_card_holder_name	"cardHolderName",
		acc.usac_saldo				"balance",
		acc.usac_expmonth			"expMonth",
		acc.usac_expyear			"expYear",
		acc.usac_secured_key		"securedKey"
	FROM payment.user_accounts acc
	LEFT JOIN payment.payment_gateaway dr on acc.usac_entity_id = dr.paga_entity_id
	LEFT JOIN payment.bank b on acc.usac_entity_id = b.bank_entity_id
	LEFT JOIN users.users u on acc.usac_user_id = u.user_id
)

------------------------------------------------------------
CREATE VIEW resto.order_per_faci_and_hotel
AS (
	SELECT
		o.orme_order_number,
		d.omde_id,
		o.orme_total_amount,
		o.orme_pay_type,
		o.orme_cardnumber,
		o.orme_is_paid,
		m.reme_name,
		f.faci_name,
		h.hotel_name
	FROM resto.order_menu_detail d
	JOIN resto.order_menus o ON o.orme_id = d.omde_orme_id
	JOIN resto.resto_menus m ON m.reme_id = d.omde_reme_id
	JOIN hotel.facilities f ON f.faci_id = m.reme_faci_id
	JOIN hotel.hotels h ON f.faci_hotel_id = h.hotel_id
	ORDER BY o.orme_id
)