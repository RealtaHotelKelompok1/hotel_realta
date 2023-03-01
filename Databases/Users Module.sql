-- ===========SCHEMA MODULE USERS ==============
CREATE SCHEMA users;

-- RUN 1

-- CREATE TABLE roles
CREATE TABLE users.roles(
	role_id SERIAL,
	role_name VARCHAR(35),
	CONSTRAINT pk_role_id PRIMARY KEY (role_id)
);

-- CREATE TABLE users
CREATE TABLE users.users(
	user_id SERIAL,
	user_full_name VARCHAR(55),
	user_type VARCHAR(15),
	user_company_name VARCHAR(255),
	user_email VARCHAR(256),
	user_phone_number VARCHAR(25),
	user_isverified INT DEFAULT NULL,
	user_modified_date TIMESTAMP DEFAULT now(),
	CONSTRAINT pk_user_id PRIMARY KEY (user_id),
	CONSTRAINT u_user_phone_number UNIQUE (user_phone_number),
	CONSTRAINT u_user_email UNIQUE (user_email)
);

-- RUN 2
-- CREATE TABLE user_members
CREATE TABLE users.user_members(
	usme_user_id INT PRIMARY KEY,
	usme_memb_name VARCHAR(15),
	usme_promote_date TIMESTAMP,
	usme_points INT,
	usme_type VARCHAR(15),
	CONSTRAINT fk_usme_user_id FOREIGN KEY (usme_user_id)
		REFERENCES users.users(user_id) 
			ON DELETE CASCADE
			ON UPDATE CASCADE,
	CONSTRAINT fk_useme_memb_name FOREIGN KEY (usme_memb_name)
		REFERENCES master.members(memb_name)
			ON DELETE CASCADE
			ON UPDATE CASCADE
);

-- CREATE TABLE user_profiles
CREATE TABLE users.user_profiles(
	uspro_id SERIAL PRIMARY KEY,
	uspro_national_id VARCHAR(20),
	uspro_birth DATE,
	uspro_photo TEXT DEFAULT 'user.png',
	uspro_job_title VARCHAR(50),
	uspro_marital_status CHAR(1),
	uspro_gender CHAR(1),
	uspro_addr_id INT,
	uspro_user_id INT,
	FOREIGN KEY (uspro_addr_id)
		REFERENCES master.address(addr_id)
			ON DELETE CASCADE
			ON UPDATE CASCADE,
	FOREIGN KEY (uspro_user_id)
		REFERENCES users.users(user_id)
			ON DELETE CASCADE
			ON UPDATE CASCADE
);

-- CREATE TABLE user_roles
CREATE TABLE users.user_roles(
	usro_user_id INT,
	usro_role_id INT,
	CONSTRAINT pk_usro_user_id PRIMARY KEY (usro_user_id),
	CONSTRAINT fk_usro_user_id FOREIGN KEY (usro_user_id)
		REFERENCES users.users(user_id)
			ON DELETE CASCADE
			ON UPDATE CASCADE,
	CONSTRAINT fk_usro_role_id FOREIGN KEY (usro_role_id)
		REFERENCES users.roles(role_id)
			ON DELETE RESTRICT
			ON UPDATE CASCADE
);


-- CREATE TABLE user_password
CREATE TABLE users.user_password(
	uspa_user_id INT PRIMARY KEY,
	uspa_passwordHash VARCHAR(128),
	uspa_passwordSalt VARCHAR(10),
	CONSTRAINT fk_uspa_user_id FOREIGN KEY (uspa_user_id)
		REFERENCES users.users(user_id)
			ON DELETE CASCADE
			ON UPDATE CASCADE
);

-- CREATE TABLE user_bonus_points
CREATE TABLE users.user_bonus_points(
	ubpo_id SERIAL PRIMARY KEY,
	ubpo_user_id INT,
	ubpo_total_points INT,
	ubpo_bonus_type CHAR(1),
	ubpo_create_on TIMESTAMP,
	FOREIGN KEY (ubpo_user_id)
		REFERENCES users.users(user_id)
			ON DELETE CASCADE
			ON UPDATE CASCADE
);