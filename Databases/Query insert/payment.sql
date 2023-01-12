----------------------- Function and Stored Procedure -----------------------
-----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION payment.getEntityId()
RETURNS int
AS $$

BEGIN
	RETURN (
		SELECT setval('payment."entities_entity_id_seq"',
					  (SELECT COALESCE(MAX(entity_id), 1) FROM payment.entities) + 1
		)
	);

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

CREATE OR REPLACE PROCEDURE payment.InsertUserAccounts(
	EntityID		int,
	UserID			int,
	AccountType		text,
	Balance			int,
	ExpMonth		int DEFAULT 0,
	ExpYear			int DEFAULT 0
)
AS $$

BEGIN
	INSERT INTO payment.user_accounts(
		usac_entity_id,
		usac_user_id,
		usac_account_number,
		usac_type,
		usac_saldo,
		usac_expmonth,
		usac_expyear
	)
		VALUES (
			(CASE 
				WHEN AccountType = 'Payment'
					THEN (
						SELECT paga_entity_id 
						FROM payment.payment_gateaway
						WHERE paga_entity_id = EntityID
					)
				ELSE (
					SELECT bank_entity_id 
					FROM payment.bank 
					WHERE bank_entity_id = EntityID)
			END),
			UserID,
			FLOOR(RANDOM() * POWER(CAST(10 as BIGINT), 25))::text,
			AccountType,
			Balance,
			(CASE WHEN AccountType = 'Payment' THEN 0 ELSE ExpMonth END),
			(CASE WHEN AccountType = 'Payment' THEN 0 ELSE ExpYear END)
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

----------------------- Insert Payment Gateaway -----------------------

CALL payment.InsertPaymentGateaway('39358', 'OVO');
CALL payment.InsertPaymentGateaway('70001', 'GOPAY');
CALL payment.InsertPaymentGateaway('3901', 'DANA');
CALL payment.InsertPaymentGateaway('09110', 'LinkAja');
CALL payment.InsertPaymentGateaway('122', 'ShopeePay');

----------------------- Insert User Accounts --------------------------
-- 	EntityID		int,
-- 	UserID			int,
-- 	AccountType		text,
-- 	Balance			int,
-- 	ExpMonth		int,
-- 	ExpYear			int
CALL payment.InsertUserAccounts(1, 1, 'Debit Card', 1000000, 8, 25)
CALL payment.InsertUserAccounts(25, 2, 'Payment', 182937)
CALL payment.InsertUserAccounts(21, 2, 'Payment', 50000)
