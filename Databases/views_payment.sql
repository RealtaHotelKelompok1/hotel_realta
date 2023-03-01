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
			-- TODO: Tambahin buat outside Top Up & Orders
			CASE
				WHEN p.patr_type = 'TP'
				THEN (
					SELECT "paymentName" 
					FROM payment.user_payment_methods
					WHERE "accountNumber" = p.patr_target_id::text
					)
				ELSE 'Realta Group'
			END
		) "targetPaymentName",
		p.patr_trx_number_ref	"transactionRef",
		p.patr_user_id			"userId",
		u.user_full_name		"userFullName"
	FROM payment.payment_transaction p
	JOIN users.users u ON u.user_id = p.patr_user_id
)

-- View: Order menu + facility name + hotel name
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