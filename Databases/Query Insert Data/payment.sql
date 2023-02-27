----------------------- Function and Stored Procedure -----------------------
-----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION payment.getEntityId()
RETURNS int
AS $$

BEGIN
	RETURN (
		SELECT setval('payment."entities_entity_id_seq"',
					  (SELECT COALESCE(MAX(entity_id), 0) FROM payment.entities) + 1
		)
	);

END; $$
LANGUAGE plpgsql;

----

CREATE OR REPLACE FUNCTION payment.getTransactionNumber(transactionID int, transactionType text, transactionDate text DEFAULT NOW())
RETURNS text
AS $$
BEGIN
	RETURN CONCAT(TransactionType, '#', TO_CHAR(transactionDate::date, 'YYYYMMDD'), '-', TO_CHAR(TransactionID, 'FM0000'));
END; $$
LANGUAGE plpgsql;

-----------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE payment.InsertPaymentGateaway (
	Code	text,
	Name	text
)
AS $$

DECLARE
	ID int;
	
BEGIN
	ID := payment.getEntityId();
	INSERT INTO payment.entities(entity_id)
		VALUES (ID);
	INSERT INTO payment.payment_gateaway(paga_entity_id, paga_code, paga_name)
		VALUES (ID, Code, Name);
	
END; $$
LANGUAGE plpgsql;

-----------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE payment.InsertBank(
	Code	text,
	Name	text
)
AS $$

DECLARE
	ID int;
	
BEGIN
	ID := payment.getEntityId();
	INSERT INTO payment.entities(entity_id)
		VALUES (ID);
	INSERT INTO payment.bank(bank_entity_id, bank_code, bank_name)
		VALUES (ID, Code, Name);

END; $$
LANGUAGE plpgsql;

-----------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE payment.InsertUserAccount (
	UserID			int,
	AccountType		text,
	CardHolderName	text,
	SecuredKey		text,
	Balance			numeric,
	EntityName		text,
	AccountNumber	text DEFAULT NULL,
	ExpMonth		int DEFAULT NULL,
	ExpYear			int DEFAULT NULL
)
AS $$

DECLARE
	EntityID 	int;

BEGIN
	IF LOWER(AccountType) NOT LIKE 'fintech' THEN 
		EntityID := (
			SELECT bank_entity_id
			FROM payment.bank
			WHERE bank_name = EntityName
		);
		
	ELSEIF LOWER(EntityName) = 'goto' THEN
		EntityID := (
			SELECT paga_entity_id
			FROM payment.payment_gateaway
			WHERE paga_code = '256'
		);
		AccountNumber := CONCAT(522, (
			SELECT user_phone_number
			FROM users.users
			WHERE user_id = UserID
		))::text;
		
	ELSEIF LOWER(EntityName) = 'dompet realta' THEN
		EntityID := (
			SELECT paga_entity_id
			FROM payment.payment_gateaway
			WHERE paga_code = '255'
		);
		AccountNumber := CONCAT(225, (
			SELECT user_phone_number
			FROM users.users
			WHERE user_id = UserID
		))::text;
		Balance := 0;

	END IF;

	INSERT INTO payment.user_accounts(
		usac_user_id,
		usac_entity_id,
		usac_account_number,
		usac_expmonth,
		usac_expyear,
		usac_saldo,
		usac_type,
		usac_card_holder_name,
		usac_secured_key
	) VALUES (
		UserID,
		EntityID,
		AccountNumber,
		ExpMonth,
		ExpYear,
		Balance,
		AccountType,
		CardHolderName,
		SecuredKey
	);
END; $$
LANGUAGE plpgsql;

-----------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE payment.InsertBookingPaymentTransaction (
	UserID			  int, 
	OrderID			  text,
	PaymentType		text,
	Amount			  int,
	SourceNumber	numeric,
	TargetNumber	numeric
)
AS $$

DECLARE
	TransactionID int := (SELECT COALESCE(MAX(patr_id) + 1, 1) FROM payment.payment_transaction);
	OrderType text = SUBSTRING(OrderID, '(.*)#');
	TransactionType text;
	TransactionDate text;
	TransactionNumber text;
	TransactionNumberRef text;
	Debit int := 0;
	Credit int := 0;
	Note text;

	HotelFacilityName text;
	HotelName text;

BEGIN
	CASE
		WHEN OrderType = 'MENUS'
			THEN
				TransactionType := 'ORM';
				Credit := Amount;
				HotelFacilityName := (
					SELECT DISTINCT facilityName FROM hotel.order_per_faci_and_hotel WHERE orderNumber = OrderID
				);
				HotelName := (
					SELECT DISTINCT hotelName FROM hotel.order_per_faci_and_hotel WHERE orderNumber = OrderID
				);
				Note := CONCAT('Resto payment ', OrderID, ' at ', HotelFacilityName, ', ', HotelName);
				UPDATE resto.order_menus SET orme_is_paid = 'P' WHERE orme_order_number = OrderID;
		WHEN OrderType = 'BO'
			THEN
				TransactionType := 'TRB';
				Credit := Amount;
				HotelName := (
					SELECT hotel_name
					FROM booking.booking_orders bo
					JOIN hotel.hotels h ON bo.boor_hotel_id = h.hotel_id
					WHERE boor_order_number = OrderID
				);
				Note := CONCAT('Room booking ', OrderID, ' at ', HotelName);
				UPDATE booking.booking_orders SET boor_is_paid = 'P' WHERE boor_order_number = OrderID;
	END CASE;
	
	TransactionDate := (SELECT SUBSTRING(OrderID, '#(.*)-'))::date; -- Extract order date from order number 'MENUS#..' or 'BO#..'
	TransactionNumber := payment.getTransactionNumber(TransactionID, TransactionType, TransactionDate);
	TransactionNumberRef := FLOOR(RANDOM() * POWER(CAST(10 as BIGINT), 15))::text;
	
-- 	IF PaymentType = 'Dompet Realta' THEN
		UPDATE payment.user_accounts SET usac_saldo = usac_saldo - Amount WHERE usac_account_number = SourceNumber;
-- 	END IF;
	
	INSERT INTO payment.payment_transaction (
		patr_user_id,
		patr_id,
		patr_trx_number,
		patr_type,
		patr_note,
		patr_order_number,
		patr_source_id,
		patr_target_id,
		patr_trx_number_ref,
		patr_debet,
		patr_credit
	) VALUES (
		UserID,
		TransactionID,
		TransactionNumber,
		TransactionType,
		Note,
		OrderID,
		SourceNumber,
		TargetNumber,
		TransactionNumberRef,
		Debit, 
		Credit 
	); 

END; $$ 
LANGUAGE plpgsql;
 
--------------------------------------

CREATE OR REPLACE PROCEDURE payment.InsertPaymentTransaction(
	TrxUserID			int,
	TransactionType		text,
	Amount				numeric,
	SourceNumber		text,
	TargetNumber		text
)
AS $$

DECLARE
	TransactionID int := (SELECT COALESCE(MAX(patr_id) + 1, 1) FROM payment.payment_transaction);
	TransactionNumber text := payment.getTransactionNumber(TransactionID, TransactionType);
	PaymentName text := (
		SELECT "paymentName" FROM payment.user_payment_methods WHERE "accountNumber" = SourceNumber
	);
	TransactionNumberRef text := FLOOR(RANDOM() * POWER(CAST(10 as BIGINT), 15))::text;
	Credit int := 0;
	Debit int := 0;
	OrderNumber text;
	Note text;

BEGIN
	-- Top up
	IF TransactionType = 'TP' THEN
		Debit := Amount;
		OrderNumber := CONCAT(PaymentName, '_', TO_CHAR(NOW()::date, 'YYYYMMDD'), TransactionNumberRef);
		Note := CONCAT('Dompet Realta top up From ', PaymentName, ', ', SourceNumber); 
		UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric - Amount) WHERE usac_account_number = SourceNumber;
		UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric + Amount) WHERE usac_account_number = TargetNumber;
		
	-- Refund
	ELSEIF TransactionType = 'RF' THEN
		Debit := Amount;
		OrderNumber := CONCAT('RFND', '_', TO_CHAR(NOW()::date, 'YYYYMMDD'), TransactionNumberRef);
		Note := CONCAT('Refund to ', TargetNumber);
		UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric + Amount) WHERE usac_account_number = TargetNumber;
		
	-- Repayment
	ELSE
		Credit := Amount;
		OrderNumber := CONCAT('RPYM', '_', TO_CHAR(NOW()::date, 'YYYYMMDD'), TransactionNumberRef);
		Note := CONCAT('Repayment from ', PaymentName, SourceNumber);
		UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric - Amount) WHERE usac_account_number = TargetNumber;
	END IF;
	
	INSERT INTO payment.payment_transaction (
		patr_user_id,
		patr_id,
		patr_trx_number,
		patr_type,
		patr_note,
		patr_source_id,
		patr_target_id,
		patr_trx_number_ref,
		patr_debet,
		patr_credit,
		patr_order_number
	) VALUES (
		TrxUserID,
		TransactionID,
		TransactionNumber,
		TransactionType,
		Note,
		SourceNumber::numeric,
		TargetNumber::numeric,
		TransactionNumberRef,
		Debit,
		Credit,
		OrderNumber
	);

END; $$
LANGUAGE plpgsql;

-----------------------------------------------------------------------------

----------------------- Insert Bank -----------------------
CALL payment.InsertBank('002', 'BRI');
CALL payment.InsertBank('014', 'BCA');
CALL payment.InsertBank('008', 'Mandiri');
CALL payment.InsertBank('009', 'BNI');
CALL payment.InsertBank('022', 'CIMB Niaga');
CALL payment.InsertBank('200', 'BTN');
CALL payment.InsertBank('213', 'BTPN');
CALL payment.InsertBank('013', 'Permata');
CALL payment.InsertBank('147', 'Muamalat');
CALL payment.InsertBank('016', 'Maybank Indonesia');
CALL payment.InsertBank('153', 'Sinarmas');
CALL payment.InsertBank('547', 'BTPN Syariah');
CALL payment.InsertBank('011', 'Danamon');
CALL payment.InsertBank('950', 'Commonwealth');
CALL payment.InsertBank('019', 'Panin Bank');
CALL payment.InsertBank('023', 'UOB Indonesia');
CALL payment.InsertBank('046', 'DBS Indonesia');
CALL payment.InsertBank('490', 'Bank Neo Commerce');
CALL payment.InsertBank('542', 'Bank Jago');
CALL payment.InsertBank('212', 'Bank Woori Saudara Indonesia 1906');

-- select * from payment.bank
----------------------- Insert Payment Gateaway -----------------------

CALL payment.InsertPaymentGateaway('256', 'GoTo');

-- select * from payment.payment_gateaway
----------------------- Insert User Accounts --------------------------
-- 	EntityID		int,
-- 	UserID			int,
-- 	AccountType		text,
-- 	Balance			int,
-- 	ExpMonth		int,
-- 	ExpYear			int

-- select *from payment.user_accounts
CALL payment.InsertUserAccounts(1, 1, 'Debit Card', 1000000, 4, 25);
CALL payment.InsertUserAccounts(3, 2, 'Debit Card', 3456, 8, 27);
CALL payment.InsertUserAccounts(3, 3, 'Debit Card', 12425678, 3, 23);
CALL payment.InsertUserAccounts(25, 4, 'Payment', 31245);
CALL payment.InsertUserAccounts(21, 5, 'Payment', 875434);
CALL payment.InsertUserAccounts(22, 6, 'Payment', 42363);
CALL payment.InsertUserAccounts(21, 7, 'Payment', 9871324);
CALL payment.InsertUserAccounts(23, 8, 'Payment', 432789);
CALL payment.InsertUserAccounts(24, 9, 'Payment', 8430300);
CALL payment.InsertUserAccounts(11, 10, 'Debit Card', 1500200, 8, 25);
CALL payment.InsertUserAccounts(13, 11, 'Debit Card', 3456, 7, 26);
CALL payment.InsertUserAccounts(13, 12, 'Debit Card', 12425678, 2, 22);
CALL payment.InsertUserAccounts(15, 13, 'Debit Card', 1000000, 8, 25);
CALL payment.InsertUserAccounts(20, 14, 'Debit Card', 3456, 5, 25);
CALL payment.InsertUserAccounts(19, 15, 'Debit Card', 12425678, 11, 24);
CALL payment.InsertUserAccounts(18, 16, 'Debit Card', 1000000, 6, 25);
CALL payment.InsertUserAccounts(17, 17, 'Debit Card', 3456, 11, 23);
CALL payment.InsertUserAccounts(16, 18, 'Debit Card', 12425678, 9, 21);
CALL payment.InsertUserAccounts(15, 19, 'Debit Card', 3456, 12, 26);
CALL payment.InsertUserAccounts(14, 20, 'Debit Card', 12425678, 1, 22);
CALL payment.InsertUserAccounts(25, 21, 'Payment', 31245);
CALL payment.InsertUserAccounts(24, 22, 'Payment', 875434);
CALL payment.InsertUserAccounts(23, 23, 'Payment', 42363);
CALL payment.InsertUserAccounts(22, 24, 'Payment', 9871324);
CALL payment.InsertUserAccounts(21, 2, 'Payment', 432789);
CALL payment.InsertUserAccounts(23, 10, 'Payment', 8430300);

----------------------- Insert Payment Transaction -----------------------
-- VA HOTEL: 326625809

-- select * from payment.payment_transaction
-- select * from resto.order_menus
-- select * from payment.user_accounts

select * from payment.user_accounts order by usac_user_id
CALL payment.InsertUserAccount(2, 'Debit Card', 'BCA', '7515272613', 8, 24)
CALL payment.InsertUserAccount(1, 'Dompet Realta')

--  Payment Transaction: Order Menu at Restaurant
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0001', 23000);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0002', 100293);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0003', 593029);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0004', 34500);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0005', 122200);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0006', 350994);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0007', 1285600);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0008', 359282);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0009', 46000);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0010', 76864);

-- Payment Transaction: Room Booking at Hotel
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);

-- Payment Transaction: Top Up
CALL payment.InsertPaymentTransaction('TP', 300000, '751527261');

-- Payment Transaction: Refund
CALL payment.InsertPaymentTransaction('RF', 250000, '383667679');

-- Payment Transaction: Repayment
CALL payment.InsertPaymentTransaction('RPY', 50000, '264253607');

select * from payment.user_transactions

select * from hotel.order_per_faci_and_hotel

select * from payment.user_accounts

select * from payment.payment_transaction

select * from payment.user_payment_methods

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

ALTER TABLE payment.payment_transaction
ALTER COLUMN patr_source_id type numeric;

ALTER TABLE payment.payment_transaction
ALTER COLUMN patr_target_id type numeric;
