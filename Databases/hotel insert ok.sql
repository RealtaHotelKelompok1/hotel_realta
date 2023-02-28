-- INSERT TABLE MASTER
insert into master.regions values
(1,'Asia'),
(2,'Africa'),
(3,'Autralia'),
(4,'Antartica'),
(5,'Europe'),
(6,'Green LAnd'),
(7,'Nourt America'),
(8,'South America');

insert into master.country values(1,'Indonesia',1),
(2,'Malaysia',1),
(3,'Jepang',1),
(4,'Tiongkok',1),
(5,'Singapura',1),
(6,'Africa',2),
(7,'Nigeria',2),
(8,'Ghana',2),
(9,'Kenya',2),
(10,'Maroko',2),
(11,'New South Wales',3),
(12,'Northern Teorritory',3),
(13,'South Australia',3),
(14,'Tasmania',3),
(15,'Victoria',3),
(16,'German',5),
(17,'Francies',5),
(18,'Holand',5),
(19,'Belgia',5),
(20,'Swises',5);

insert into master.provinces values(1,'Jakarta',1),
(2,'DKI Jakarta',1),
(3,'Jawa Barat',1),
(4,'Jawa Tengah',1),
(5,'Jawa Timur',1),
(6,'Bali',1),
(7,'Banten',1),
(8,'Sumatera Utara',1),
(9,'Sumatera Selatan',1),
(10,'Sumatera Barat',1),
(11,'Bengkulu',1),
(12,'Riau',1),
(13,'Jambi',1),
(14,'Kalimantan Barat',1),
(15,'Kalimantan Timur',1),
(16,'Kalimantan Selatan',1),
(17,'Kalimantan Tengah',1),
(18,'Kalimantan Utara',1),
(19,'Sulawesi Barat',1),
(20,'Sulawesi Utara',1);

insert into master.address
values(1,'jln.sukagalih','jln.sukajadi',14006,'"{Pasteur:Kota Bandung}"',3),
(2,'jln.Mekar','jln.melati',14006,'"{Cimahi:Kota Cimahi}"',3),
(3,'jln.Sukabungah','jln.suksuka',14006,'"{Leuwi Panjang:Kota Bandung}"',3),
(4,'jln.Melati','jln.jamika',12655,'"{Jamika:Kota Bandung}"',3),
(5,'jln.Kamboja','jln.kopo',10206,'"{Kopo:Kota Bandung}"',3),
(6,'jln.Sudirman','jln.sejahtera',14706,'"{Cipaganti:Kota Bandung}"',3),
(7,'jln.Merdeka','jln.Asia Afrika',16606,'"{Alun-Alun:Kota Bandung}"',3),
(8,'jln.Dangdeur','jln.Sarijadi',11006,'"{Sarijadi:Kota Bandung}"',3),
(9,'jln.GegerKalong','jln.Sukasari',18006,'"{Polban:Kota Bandung}"',3),
(10,'jln.SetiaBudi','jln.Ledeng',14006,'"{Ledeng:Kota Bandung}"',3),
(11,'jln.Dago','jln.DepatiUkur',14006,'"{Monumen Gasibu:Kota Bandung}"',3),
(12,'jln.BuahBatu','jln.DayeuhKolot',14006,'"{DayeuhKolot:Kota Bandung}"',3),
(13,'jln.Banjaran','jln.Pangalengan',14006,'"{Pangalengan:Kota Bandung}"',3),
(14,'jln.Soreang','jln.Sabilulungan',14006,'"{Soreang:Kota Bandung}"',3),
(15,'jln.AhmadYadi','jln.Holis',14006,'"{Holis:Kota Bandung}"',3),
(16,'jln.SuryaSumantri','jln.LemahNeneut',14006,'"{Maranatha:Kota Bandung}"',3),
(17,'jln.Citatah','jln.Citatah5',18899,'"{StoneGarden: Kab.Bandung}"',3),
(18,'jln.Rajamandala','jln.Raya Raja Saleh',15606,'"{Raja Saleh: kab.Bandung}"',3),
(19,'jln.Kapten Iskandar','jln.IPTEK WORD',16788,'"{Parahyangan City : Kab.Bandung}"',3),
(20,'jln.Cimindi','jln.Cibabat',16300,'"{Cibabat : Kota Bandung}"',3);

insert into master.category_group
values(1,'Restaurant','Facility','HaveFun','Res.jpg','https://hotel_realta/facility/restaurant/res.jpg'),
(2,'Room','Facility','HaveFun','Room.jpg','https://hotel_realta/facility/room/room.jpg'),
(3,'Meeting-Room','Facility','HaveFun','Meet-Room.jpg','https://hotel_realta/facility/Meeting_Room/res.jpg'),
(4,'GYM','Facility','HaveFun','Gym.jpg','https://hotel_realta/facility/Gym/Gym.jpg'),
(5,'Aula','Facility','HaveFun','Aula.jpg','https://hotel_realta/facility/Aula/aula.jpg'),
(6,'SwimmingPool','Facility','HaveFun','SMP.jpg','https://hotel_realta/facility/SwimmingPool/SMP.jpg'),
(7,'Balroom','Facility','HaveFun','BR.jpg','https://hotel_realta/facility/Balroom/BR.jpg');

INSERT INTO master.policy (poli_name, poli_description)
VALUES 
('Check-in Policy', 'Check-in time is at 2:00 PM, early check-in is subject to availability'),
('Cancellation Policy', 'Cancellations must be made 48 hours prior to arrival to avoid charges'),
('Pet Policy', 'Pets are not allowed in the hotel'),
('Smoking Policy', 'Smoking is not permitted inside the hotel'),
('Child Policy', 'Children under 12 years old stay for free when using existing bedding'),
('Extra Bed Policy', 'Extra beds are available for an additional charge'),
('Wifi Policy', 'Complimentary WiFi is available in all guest rooms'),
('Parking Policy', 'Valet parking is available for a fee'),
('Food Policy', 'All-day dining is available in the hotel restaurant'),
('Check-out Policy', 'Check-out time is at 12:00 PM, late check-out is subject to availability'),
('Payment Policy', 'We accept all major credit cards and cash'),
('Fitness Policy', 'Complimentary access to the fitness center is available for guests'),
('Pool Policy', 'The pool is open from 6:00 AM to 10:00 PM'),
('Spa Policy', 'Spa treatments must be booked in advance'),
('Luggage Policy', 'Luggage storage is available for a fee'),
('Business Policy', 'Business center services are available for guests'),
('Group Policy', 'Group rates are available for parties of 10 or more'),
('Disability Policy', 'Disability-friendly rooms are available upon request'),
('Alcohol Policy', 'Alcoholic beverages are available for purchase in the hotel');

INSERT INTO master.price_items (prit_name, prit_price, prit_description, prit_type, prit_modified_date)
VALUES 
('Room Rate', 120.99, 'Price per night for standard room', 'Room', NOW()),
('Extra Bed', 20.99, 'Price for extra bed per night', 'Bed', NOW()),
('Breakfast', 8.99, 'Price for breakfast per person per day', 'Food', NOW()),
('Lunch', 12.99, 'Price for lunch per person per day', 'Food', NOW()),
('Dinner', 15.99, 'Price for dinner per person per day', 'Food', NOW()),
('Spa Treatment', 50.99, 'Price for spa treatment per hour', 'Spa', NOW()),
('Fitness Access', 5.99, 'Price for access to fitness center per day', 'Fitness', NOW()),
('Parking Fee', 10.99, 'Price for valet parking per day', 'Parking', NOW()),
('Early Check-in', 25.99, 'Price for early check-in', 'Check-in', NOW()),
('Late Check-out', 25.99, 'Price for late check-out', 'Check-out', NOW()),
('Luggage Storage', 2.99, 'Price for luggage storage per bag per day', 'Storage', NOW()),
('Business Center Service', 4.99, 'Price for business center service per hour', 'Business', NOW()),
('Room Service', 7.99, 'Price for room service per order', 'Service', NOW()),
('Pool Access', 2.99, 'Price for access to pool per day', 'Pool', NOW()),
('Alcoholic Beverage', 6.99, 'Price for alcoholic beverage per glass', 'Alcohol', NOW());

INSERT INTO master.members (memb_name, memb_description) 
VALUES
('SILVER', 'Akses ke fasilitas hotel dasar'),
('GOLD', 'Akses ke fasilitas dasar dan premium hotel, termasuk sarapan gratis dan upgrade kamar'),
('VIP', 'Akses ke semua fasilitas hotel, termasuk layanan concierge yang didedikasikan dan diskon eksklusif'),
('WIZARD', 'Akses prioritas ke semua fasilitas dan layanan hotel,  concierge pribadi  kamar 24 jam');

INSERT INTO master.service_task (seta_name, seta_seq)
VALUES 
('Cleaning Room', 1),
('Making Bed', 2),
('Restocking Amenities', 3),
('Restocking Minibar', 4),
('Laundry Service', 5),
('Room Service', 6),
('Housekeeping Inspection', 7),
('Deep Cleaning', 8),
('Linen Replacement', 9),
('Pool Maintenance', 10),
('Spa Maintenance', 11),
('Gym Maintenance', 12),
('Lobby Cleaning', 13),
('Public Area Cleaning', 14),
('Landscaping Maintenance', 15),
('Pest Control', 16),
('Fire Safety Inspection', 17),
('Elevator Maintenance', 18),
('Security Patrol', 19),
('Front Desk Assistance', 20);


-- INSERT TABLE USERS
-- INSERT TO TABLE users.roles
INSERT INTO users.roles(role_id,role_name)
VALUES (1,'Guest'),
(2,'Manager'),
(3,'Office Boy'),
(4,'Admin'),
(5,'User');


-- INSERT TO TABLE users.users
INSERT INTO users.users(
user_id,
user_full_name,
user_type,
user_company_name,
user_email,
user_phone_number,
user_modified_date
) VALUES 
(1,
'Faqih Pratama Muhti',
'T', --Travel Agent
'muhtiTravel',
'faqihpratamamuhti@gmail.com',
'+6281212499837',
'2023/01/08 03:00:00'
), 
(2,
'Fadli Pratama Muhti',
'C', --Corporate
'MuhtiCorporate',
'fadlipratamamuhti@gmail.com',
'+6289342968303',
'2023/01/08 02:00:00'
), 
(3,
'Firly Isnaeni Muhti',
'I', --Individual
'muhtiIndividual',
'firlyisnaenimuhti@gmail.com',
'+6283920429405',
'2023/01/07 01:00:00'
), 
(4,
'Fitrya Muhti',
'T', --Travel Agent
'muhtiTravel',
'fitryamuhti@gmail.com',
'+6285830596205',
'2023/01/06 00:00:00'
), 
(5,
'Uzumaki Naruto',
'C', --Corporate
'shinobiCorporate',
'uzumakinaruto@gmail.com',
'+6284320985945',
'2023/01/05 23:00:00'
), 
(6,
'Uchiha Sasuke',
'I', --Individual
'shinobiIndividual',
'uchihasasuke@gmail.com',
'+6286565748375',
'2023/01/04 22:00:00'
), 
(7,
'Orochimaru',
'T', --Travel Agent
'shinobiTravel',
'orochimaru@gmail.com',
'+6281029384756',
'2023/01/03 21:00:00'
), 
(8,
'Kakashi Hatake',
'C', --Corporate
'shinobiCorporate',
'kakashihatake@gmail.com',
'+6288745095382',
'2023/01/02 20:00:00'
), 
(9,
'Uchiha Itachi',
'I', --Individual
'shinobiIndividual',
'uchihaitachi@gmail.com',
'+6288473994839',
'2023/01/01 19:00:00'
), 
(10,
'Senju Tsunade',
'T', --Travel Agent
'shinobiTravel',
'senjutsunade@gmail.com',
'+62846392058396',
'2023/01/02 18:00:00'
), 
(11,
'Uzumaki Nagato',
'C', --Corporate
'shinobiCorporate',
'uzumakinagato@gmail.com',
'+6284590567834',
'2023/01/03 17:00:00'
), 
(12,
'Uchiha Obito',
'I', --Individual
'shinobiIndividual',
'uchihaobito@gmail.com',
'+6281212495467',
'2023/01/04 16:00:00'
), 
(13,
'Sai',
'T', --Travel Agent
'shinobiTravel',
'sai@gmail.com',
'+6281211234837',
'2023/01/05 15:00:00'
), 
(14,
'Yahiko',
'C', --Corporate
'shinobiCorporate',
'yahiko@gmail.com',
'+6281234499837',
'2023/01/06 14:00:00'
), 
(15,
'Hoshigaki Kisame',
'I', --Individual
'shinobiIndividual',
'hoshigakikisame@gmail.com',
'+6281214321837',
'2023/01/07 13:00:00'
), 
(16,
'Jiraiya',
'T', --Travel Agent
'shinobiTravel',
'jiraiya@gmail.com',
'+6281212497654',
'2023/01/08 12:00:00'
), 
(17,
'Senju Tobirama',
'C', --Corporate
'shinobiCorporate',
'senjutobirama@gmail.com',
'+6284538798967',
'2023/01/07 11:00:00'
), 
(18,
'Uchiha Shisui',
'I', --Individual
'shinobiIndividual',
'uchihashisui@gmail.com',
'+6281456799837',
'2023/01/06 10:00:00'
), 
(19,
'Yakushi Kabuto',
'T', --Travel Agent
'shinobiTravel',
'yakushikabuto@gmail.com',
'+6285634344526',
'2023/01/05 09:00:00'
), 
(20,
'Namikaze Minato',
'C', --Corporate
'shinobiCorporate',
'namikazeminato@gmail.com',
'+62812124934627',
'2023/01/04 08:00:00'
), 
(21,
'Hyuuga Neji',
'I', --Individual
'shinobiIndividual',
'hyuuganeji@gmail.com',
'+62835462897685',
'2023/01/03 07:00:00'
), 
(22,
'Momochi Zabuza',
'T', --Travel Agent
'shinobiTravel',
'momochizabuza@gmail.com',
'+6285634123456',
'2023/01/05 09:00:00'
), 
(23,
'Senju Hashirama',
'C', --Corporate
'shinobiCorporate',
'senjuhashirama@gmail.com',
'+62812124912345',
'2023/01/04 08:00:00'
), 
(24,
'Hyuuga Neji',
'I', --Individual
'shinobiIndividual',
'hyuuganeji@gmail.com',
'+62835462899837',
'2023/01/03 07:00:00'
);

-- INSERT TO TABLE users.user_roles
INSERT INTO users.user_roles
(usro_user_id,usro_role_id)
VALUES
--Travel Agency
--Corporate
--Individual
(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1),
(11,1),
(12,1),
(13,2),
(14,2),
(15,2),
(16,3),
(17,3),
(18,3),
(19,4),
(20,4),
(21,4),
(22,5),
(23,5),
(24,5);

-- INSERT TO TABLE users.user_password
INSERT INTO users.user_password
(
uspa_user_id,
uspa_passwordHash,
uspa_passwordSalt
)
VALUES
(1,md5('password'),'md5'),
(2,md5('password'),'md5'),
(3,md5('password'),'md5'),
(4,md5('password'),'md5'),
(5,md5('password'),'md5'),
(6,md5('password'),'md5'),
(7,md5('password'),'md5'),
(8,md5('password'),'md5'),
(9,md5('password'),'md5'),
(10,md5('password'),'md5'),
(11,md5('password'),'md5'),
(12,md5('password'),'md5'),
(13,md5('password'),'md5'),
(14,md5('password'),'md5'),
(15,md5('password'),'md5'),
(16,md5('password'),'md5'),
(17,md5('password'),'md5'),
(18,md5('password'),'md5'),
(19,md5('password'),'md5'),
(20,md5('password'),'md5'),
(21,md5('password'),'md5'),
(22,md5('password'),'md5'),
(23,md5('password'),'md5'),
(24,md5('password'),'md5');

-- INSERT TO TABLE users.user_members
INSERT INTO users.user_members
(
usme_user_id,
usme_memb_name,
-- SILVER / GOLD / VIP / WIZARD
usme_promote_date,usme_points,
usme_type -- default / expired
)
VALUES
(1,'WIZARD','2023/01/01',12,'default'),
(2,'WIZARD','2023/01/01',11,'default'),
(3,'WIZARD','2023/01/01',10,'default'),
(4,'VIP','2023/01/01',12,'default'),
(5,'VIP','2023/01/01',11,'default'),
(6,'VIP','2023/01/01',10,'default'),
(7,'GOLD','2023/01/01',12,'default'),
(8,'GOLD','2023/01/01',11,'default'),
(9,'GOLD','2023/01/01',10,'default'),
(10,'SILVER','2023/01/01',12,'default'),
(11,'SILVER','2023/01/01',11,'default'),
(12,'SILVER','2023/01/01',10,'default'),
(13,'WIZARD','2023/01/01',12,'default'),
(14,'WIZARD','2023/01/01',11,'default'),
(15,'WIZARD','2023/01/01',10,'default'),
(16,'VIP','2023/01/01',12,'default'),
(17,'VIP','2023/01/01',11,'default'),
(18,'VIP','2023/01/01',10,'default'),
(19,'GOLD','2023/01/01',12,'default'),
(20,'GOLD','2023/01/01',11,'default'),
(21,'GOLD','2023/01/01',10,'default'),
(22,'SILVER','2023/01/01',12,'default'),
(23,'SILVER','2023/01/01',11,'default'),
(24,'SILVER','2023/01/01',10,'default');

-- INSERT TO TABLE users.user_bonus_points
INSERT INTO users.user_bonus_points
(
ubpo_user_id,
ubpo_total_points,
ubpo_bonus_type, -- ubpo_bonus_type :
-- R : Rating
-- P : Promote
ubpo_create_on
)
VALUES
(1,32,'R','2023/01/09'),
(2,31,'R','2023/01/09'),
(3,30,'R','2023/01/09'),
(4,32,'P','2023/01/08'),
(5,31,'P','2023/01/08'),
(6,30,'P','2023/01/08'),
(7,32,'R','2023/01/07'),
(8,31,'R','2023/01/07'),
(9,30,'R','2023/01/07'),
(10,32,'P','2023/01/06'),
(11,31,'P','2023/01/06'),
(12,30,'P','2023/01/06'),
(13,32,'R','2023/01/05'),
(14,31,'R','2023/01/05'),
(15,30,'R','2023/01/05'),
(16,32,'P','2023/01/04'),
(17,31,'P','2023/01/04'),
(18,30,'P','2023/01/04'),
(19,32,'R','2023/01/03'),
(20,31,'R','2023/01/03'),
(21,30,'R','2023/01/03'),
(22,32,'P','2023/01/02'),
(23,31,'P','2023/01/02'),
(24,30,'P','2023/01/02');

-- INSERT TO TABLE user_profiles
INSERT INTO users.user_profiles(
uspro_id,
uspro_national_id, -- NO. KTP
uspro_birth,
uspro_job_title,
uspro_marital_status, -- M / S => Married / Singel
uspro_gender, -- F / M => Female / Male
uspro_addr_id,
uspro_user_id
)
VALUES
(1,'345678910111213','1995/01/12','Full-Stack Developer','S','M',1,1),
(2,'345678910111214','195/01/12','Mechanical Engineer','M','M',1,2),
(3,'345678910111215','2004/01/04','Accountant','S','F',1,3),
(4,'345678910111216','2013/09/29','Chef','M','F',1,4),
(5,'345678910111217','1996/01/11','UI/UX Designer','S','M',1,5),
(6,'345678910111218','1997/02/12','Database Administrator','M','M',2,6),
(7,'345678910111219','1998/03/13','IT Support','S','M',3,7),
(8,'345678910111220','1999/04/14','Data Analyst','M','M',4,8),
(9,'345678910111221','1995/05/15','Doctor','S','F',5,9),
(10,'345678910111222','1996/06/16','Librarian','M','M',6,10),
(11,'345678910111223','1997/01/17','Entrepreneur','M','M',7,11),
(12,'345678910111224','1998/08/18','Public Relations','S','M',8,12),
(13,'345678910111225','1999/09/19','Programmer','M','M',9,13),
(14,'345678910111226','1995/10/20','Data Analyst','M','M',10,14),
(15,'345678910111227','1991/01/21','Database Administrator','M','M',11,15),
(16,'345678910111228','1992/02/22','Mechanical Engineer','S','M',12,16),
(17,'345678910111229','1993/03/23','Electrical Engineer','M','M',13,17),
(18,'345678910111230','1994/04/24','IT Support','S','M',14,18),
(19,'345678910111231','1995/05/25','Software Engineer','M','M',15,19),
(20,'345678910111232','1996/06/26','Data Analyst','M','M',16,20),
(21,'345678910111233','1997/07/27','IT Suppurt','S','M',17,21),
(22,'345678910111234','1998/08/28','Database Administrator','M','M',18,22),
(23,'345678910111235','1999/09/29','Chef','S','M',19,23),
(24,'345678910111236','2000/10/30','Doctor','M','M',20,24);

-- INSERT TABLE HOTEL

INSERT INTO hotel.hotels(hotel_name, hotel_description,hotel_rating_star,hotel_phonenumber, hotel_modified_date, hotel_addr_id) 
values('Hotel Realta 1','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain.',4,'08788798761','1970-01-01 00:00:00',1),
('Hotel Realta 2','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain.',3,'08788798762','1990-01-01 00:00:00',2),
('Hotel Realta 3','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain.',3,'08788798763','1990-01-01 00:00:00',3),
('Hotel Realta 4','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain.',3,'08788798764','1990-01-01 00:00:00',4),
('Hotel Realta 5','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain.',3,'08788798765','1990-01-01 00:00:00',5);
-- facilities

INSERT INTO hotel.facilities (faci_name, faci_description, faci_max_number, faci_measure_unit, faci_room_number, faci_startdate, faci_endate, faci_low_price, faci_hight_price, 
faci_rate_price, faci_discount, faci_tax_rate, faci_modified_date, faci_hotel_id, faci_cagro_id)
VALUES 
	
	 ('Restaurant timur1', 'Lorem ', 50, 'people', 'RT0001 ', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',1,1),
     ('Restaurant timur2', 'restorant center with state-of-the-art equipment', 25, 'people', 'RT0002', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,1),
	 ('Restaurant timur3', ' restornt Large outdoor swimming pool', 50, 'people', 'RT0003', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',3,1),
     ('Restaurant timur4', 'restoran center with state-of-the-art equipment', 25, 'people', 'RT0004', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,1),
	 ('Restaurant timur5', 'restoran outdoor swimming pool', 50, 'people', 'RT0005', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',5,1),
     ('Restaurant tengah1', 'Lorem ', 50, 'people', 'RT0006 ', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',1,1),
	 ('Restaurant tengah2', 'restorant center with state-of-the-art equipment', 25, 'people', 'RT0007', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,1),
	 ('Restaurant tengah3', ' restornt Large outdoor swimming pool', 50, 'people', 'RT0008', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',3,1),
     ('Restaurant tengah4', 'restoran center with state-of-the-art equipment', 25, 'people', 'RT0009', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,1),
	 ('Restaurant tengah5', 'restoran outdoor swimming pool', 50, 'people', 'RT0010', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',5,1),
	 ('Restaurant barat1', 'Lorem ', 50, 'people', 'RT0011 ', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',1,1),
     ('Restaurant barat2', 'restorant center with state-of-the-art equipment', 25, 'people', 'RT0012', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,1),
	 ('Restaurant barat3', ' restornt Large outdoor swimming pool', 50, 'people', 'RT0013', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',3,1),
     ('Restaurant barat4', 'restoran center with state-of-the-art equipment', 25, 'people', 'RT0014', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,1),
	 ('Restaurant barat5', 'restoran outdoor swimming pool', 50, 'people', 'RT0015', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',5,1),
      ('Ubud Hideaway', 'room center with state-of-the-art equipment', 25, 'beds', 'R0001', '2021-01-01', '2021-12-31', 350000, 700000, 500000, 50000, 0.1, '2021-01-01',1,2),
	 ('Puncak Highland Lodge', 'room outdoor swimming pool', 50, 'beds', 'R0002', '2021-01-01', '2021-12-31',  550000, 700000, 500000, 75000, 0.1, '2021-01-01',2,2),
     ('Bunaken Breeze3', 'room center with state-of-the-art equipment', 25, 'beds', 'R0003', '2021-01-01', '2021-12-31', 850000, 900000, 70000, 75000, 0.1, '2021-01-01',3,2),
	 ('Sumba Safari Tent', 'room outdoor swimming pool', 50, 'beds', 'R0004', '2021-01-01', '2021-12-31', 550000, 700000, 500000, 75000, 0.1, '2021-01-01',4,2),
     ('Batik Deluxe Room', 'room center with state-of-the-art equipment', 25, 'beds', 'R0005', '2021-01-01', '2021-12-31', 650000, 800000, 700000, 75000, 0.1, '2021-01-01',5,2),
	 ('meeting-room1', 'meeting room outdoor swimming pool', 50, 'people', 'MR0001', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',1,3),
     ('meeting-room2', 'meeting roomcenter with state-of-the-art equipment', 25, 'people', 'MR0002', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,3),
	 ('meeting-room3', 'meeting roomLarge outdoor swimming pool', 50, 'people', 'MR0003', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',3,3),
     ('meeting-room4', 'meeting room center with state-of-the-art equipment', 25, 'people', 'MR0004', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,3),
	 ('meeting-room5', 'meeting room outdoor swimming pool', 50, 'people', 'MR0005', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',5,3),
     ('GYM1', 'Fitness center with state-of-the-art equipment', 25, 'people', 'G0001', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',1,4),
	 ('GYM2', 'fitnes Large outdoor swimming pool', 50, 'people', 'G0002', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',2,4),
     ('GYM3', 'Fitness center with state-of-the-art equipment', 25, 'people', 'G0003', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',3,4),
	 ('GYM4', 'fitnes Large outdoor swimming pool', 50, 'people', 'G0004', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',4,4),
     ('GYM5', 'Fitness center with state-of-the-art equipment', 25, 'people', 'G0005', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',5,4),
	 ('Aula1', 'aula center with state-of-the-art equipment', 25, 'people', 'AU0001', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',1,5),
	 ('Aula2', 'aula center with state-of-the-art equipment', 25, 'people', 'AU0002', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,5),
	 ('Aula3', 'aula center with state-of-the-art equipment', 25, 'people', 'AU0003', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',3,5),
	 ('Aula4', 'aula center with state-of-the-art equipment', 25, 'people', 'AU0004', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,5),
	 ('Aula5', 'aula center with state-of-the-art equipment', 25, 'people', 'AU0005', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',5,5),
	 ('SwimingPool1', 'SwimingPoolcenter with state-of-the-art equipment', 25, 'people', 'SP0001', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',1,6),
	 ('SwimingPool2', 'SwimingPools center with state-of-the-art equipment', 25, 'people', 'SP0002', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,6),
	 ('SwimingPool3', 'SwimingPool center with state-of-the-art equipment', 25, 'people', 'SP0003', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',3,6),
	 ('SwimingPool4', 'SwimingPool center with state-of-the-art equipment', 25, 'people', 'SP0004', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,6),
	 ('SwimingPool5', 'SwimingPool center with state-of-the-art equipment', 25, 'people', 'SP0005', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',5,6),
	 ('Balroom1', 'Balroom with state-of-the-art equipment', 25, 'people', 'BR0001', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',1,7),
	 ('Balroom2', 'Balroom with state-of-the-art equipment', 25, 'people', 'BR0002', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,7),
	 ('Balroom3', 'Balroom with state-of-the-art equipment', 25, 'people', 'BR0003', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',3,7),
	 ('Balroom4', 'Balroomcenter with state-of-the-art equipment', 25, 'people', 'BR0004', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,7),
	 ('Balroom5', 'Balroom center with state-of-the-art equipment', 25, 'people', 'BR0005', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',5,7),
	('Raja Ampat Room', 'room center with state-of-the-art equipment', 5, 'beds', 'R0006', '2021-01-01', '2021-12-31', 350000, 450000, 400000, 50000, 0.1, '2021-01-01',1,2),
	('Merbabu Suite', 'room center with state-of-the-art equipment', 4, 'beds', 'R0007', '2021-01-01', '2021-12-31', 450000, 550000, 500000, 75000, 0.1, '2021-01-01',1,2),
	('Borobudur Chamber', 'room center with state-of-the-art equipment', 5, 'beds', 'R0008', '2021-01-01', '2021-12-31', 350000, 450000, 400000, 50000, 0.1, '2021-01-01',2,2),
	('Komodo Retreat', 'room center with state-of-the-art equipment', 5, 'beds', 'R0009', '2021-01-01', '2021-12-31', 400000, 550000, 470000, 75000, 0.1, '2021-01-01',2,2),
	('Bali Cliff Villa', 'room center with state-of-the-art equipment', 5, 'beds', 'R0010', '2021-01-01', '2021-12-31', 450000, 550000, 400000, 50000, 0.1, '2021-01-01',3,2),
	('Bromo Lodge', 'room center with state-of-the-art equipment', 5, 'beds', 'R0011', '2021-01-01', '2021-12-31', 550000, 750000, 600000, 50000, 0.1, '2021-01-01',3,2),
	('Tana Toraja Suite', 'room center with state-of-the-art equipment', 5, 'beds', 'R0012', '2021-01-01', '2021-12-31', 650000, 750000, 500000, 50000, 0.1, '2021-01-01',4,2),
	('Gili Island Bungalow', 'room center with state-of-the-art equipment', 5, 'beds', 'R0013', '2021-01-01', '2021-12-31', 450000, 550000, 400000, 50000, 0.1, '2021-01-01',4,2),
	('Mentawai Hut', 'room center with state-of-the-art equipment', 5, 'beds', 'R0014', '2021-01-01', '2021-12-31', 150000, 300000, 2000000, 50000, 0.1, '2021-01-01',5,2),
	('Wayang Kulit Room', 'room center with state-of-the-art equipment', 5, 'beds', 'R0015', '2021-01-01', '2021-12-31', 250000, 350000, 250000, 75000, 0.1, '2021-01-01',5,2);

-- facility_photo

INSERT INTO hotel.facility_photos (fapho_faci_id, fapho_thumbnail_filename, fapho_photo_filename, fapho_primary,
fapho_url, fapho_modifield_date)
VALUES 
(16, 'RoomHotel1', 'RoomHotel1.png', '1', './img/room1.png', '2022-01-01'),
(17, 'RoomHotel2', 'RoomHotel2.png', '1', './img/room2.png', '2022-01-01'),
(18, 'RoomHotel3', 'RoomHotel3.png', '1', './img/room3.png', '2022-01-01'),
(19, 'RoomHotel4', 'RoomHotel4.png', '1', './img/room4.png', '2022-01-01'),
(20, 'RoomHotel5', 'RoomHotel5.png', '1', './img/room5.png', '2022-01-01'),
(1, 'Restaurant timur1', 'Restauranttimur1.png', '0', './img/Restauranttimur1.png', '2022-01-01'),
(2, 'Restaurant timur2', 'Restauranttimur2.png', '0', './img/Restauranttimur2.png', '2022-01-01'),
(3, 'Restaurant timur3', 'Restauranttimur3.png', '0', './img/Restauranttimur3.png', '2022-01-01'),
(4, 'Restaurant timur4', 'Restauranttimur4.png', '0', './img/Restauranttimur4.png', '2022-01-01'),
(5, 'Restaurant timur5', 'Restauranttimur5.png', '0', './img/Restauranttimur5.png', '2022-01-01'),
(6, 'Restaurant tengah1', 'Restaurant tengah1.png', '0', './img/Restaurant tengah1.png', '2022-01-01'),
(7, 'Restaurant tengah2', 'Restaurant tengah2.png', '0', './img/Restaurant tengah2.png', '2022-01-01'),
(8, 'Restaurant tengah3', 'Restaurant tengah3.png', '0', './img/Restaurant tengah3.png', '2022-01-01'),
(9, 'Restaurant tengah4', 'Restaurant tengah4.png', '0', './img/Restaurant tengah4.png', '2022-01-01'),
(10,'Restaurant tengah5', 'Restaurant tengah5.png', '0', './img/Restaurant tengah5.png', '2022-01-01'),
(11, 'Restaurant barat1', 'Restaurant barat1.png', '0', './img/Restaurant barat1.png', '2022-01-01'),
(12, 'Restaurant barat2', 'Restaurant barat2.png', '0', './img/Restaurant barat2.png', '2022-01-01'),
(13, 'Restaurant barat3', 'Restaurant barat3.png', '0', './img/Restaurant barat3.png', '2022-01-01'),
(14, 'Restaurant barat4', 'Restaurant barat4.png', '0', './img/Restaurant barat4.png', '2022-01-01'),
(15, 'Restaurant barat5', 'Restaurant barat5.png', '0', './img/Restaurant barat5.png', '2022-01-01'),
(21, 'meeting room1', 'meetingRoom1.png', '0', './img/meetingRoom1.png', '2022-01-01'),
(22, 'meeting room2', 'meetingRoom2.png', '0', './img/meetingRoom2.png', '2022-01-01'),
(23, 'meeting room3', 'meetingRoom3.png', '0', './img/meetingRoom3.png', '2022-01-01'),
(24, 'meeting room4', 'meetingRoom4.png', '0', './img/meetingRoom4.png', '2022-01-01'),
(25, 'meeting room5', 'meetingRoom5.png', '0', './img/meetingRoom5.png', '2022-01-01'),
(26, 'Gym1', 'Gym1.png', '0', './img/Gym1.png', '2022-01-01'),
(27, 'Gym2', 'Gym2.png', '0', './img/Gym2.png', '2022-01-01'),
(28, 'Gym3', 'Gym3.png', '0', './img/Gym3.png', '2022-01-01'),
(29, 'Gym4', 'Gym4.png', '0', './img/Gym4.png', '2022-01-01'),
(30,'Gym5', 'Gym5.png', '0', './img/Gym5.png', '2022-01-01'),
(31, 'Aula1', 'Aula1.png', '0', './img/Aula1.png', '2022-01-01'),
(32, 'Aula2', 'Aula2.png', '0', './img/Aula2.png', '2022-01-01'),
(33, 'Aula3', 'Aula3.png', '0', './img/Aula3.png', '2022-01-01'),
(34, 'Aula4', 'Aula4.png', '0', './img/Aula4.png', '2022-01-01'),
(35,'Aula5', 'Aula5.png', '0', './img/Aula5.png', '2022-01-01'),
(36, 'SwimingPool1', 'SwimingPool1.png', '0', './img/SwimingPool1.png', '2022-01-01'),
(37, 'SwimingPool2', 'SwimingPool2.png', '0', './img/SwimingPool2.png', '2022-01-01'),
(38, 'SwimingPool3', 'SwimingPool3.png', '0', './img/SwimingPool3.png', '2022-01-01'),
(39, 'SwimingPool4', 'SwimingPool4.png', '0', './img/SwimingPool4.png', '2022-01-01'),
(40,'SwimingPool5', 'SwimingPool5.png', '0', './img/SwimingPool5.png', '2022-01-01'),
(41, 'BallRoom1', 'BallRoom1.png', '0', './img/BallRoom1.png', '2022-01-01'),
(42, 'BallRoom2', 'BallRoom2.png', '0', './img/BallRoom2.png', '2022-01-01'),
(43, 'BallRoom3', 'BallRoom3.png', '0', './img/BallRoom3.png', '2022-01-01'),
(44, 'BallRoom4', 'BallRoom4.png', '0', './img/BallRoom4.png', '2022-01-01'),
(45,'BallRoom5', 'BallRoom5.png', '0', './img/BallRoom5.png', '2022-01-01'),
(46, 'RoomHotel1A', 'RoomHotel1A.png', '0', './img/room1A.png', '2022-01-01'),
(47, 'RoomHotel1B', 'RoomHotel1B.png', '0', './img/room1B.png', '2022-01-01'),
(48, 'RoomHotel2A', 'RoomHotel2A.png', '0', './img/room2A.png', '2022-01-01'),
(49, 'RoomHotel2B', 'RoomHotel2B.png', '0', './img/room2B.png', '2022-01-01'),
(50, 'RoomHotel3A', 'RoomHotel3A.png', '0', './img/room3A.png', '2022-01-01'),
(51, 'RoomHotel3B', 'RoomHotel3B.png', '0', './img/room3B.png', '2022-01-01'),
(52, 'RoomHotel4A', 'RoomHotel4A.png', '0', './img/room4A.png', '2022-01-01'),
(53, 'RoomHotel4B', 'RoomHotel4B.png', '0', './img/room4B.png', '2022-01-01'),
(54, 'RoomHotel5A', 'RoomHotel5A.png', '0', './img/room5A.png', '2022-01-01'),
(55, 'RoomHotel5B', 'RoomHotel5B.png', '0', './img/room5B.png', '2022-01-01'),
(46, 'RoomHotel1AP', 'RoomHotel1AP.png', '1', './img/room1AP.png', '2022-01-01'),
(47, 'RoomHotel1BP', 'RoomHotel1BP.png', '1', './img/room1BP.png', '2022-01-01'),
(48, 'RoomHotel2AP', 'RoomHotel2AP.png', '1', './img/room2AP.png', '2022-01-01'),
(49, 'RoomHotel2BP', 'RoomHotel2BP.png', '1', './img/room2BP.png', '2022-01-01'),
(50, 'RoomHotel3AP', 'RoomHotel3AP.png', '1', './img/room3AP.png', '2022-01-01'),
(51, 'RoomHotel3BP', 'RoomHotel3BP.png', '1', './img/room3BP.png', '2022-01-01'),
(52, 'RoomHotel4AP', 'RoomHotel4AP.png', '1', './img/room4AP.png', '2022-01-01'),
(53, 'RoomHotel4BP', 'RoomHotel4BP.png', '1', './img/room4BP.png', '2022-01-01'),
(54, 'RoomHotel5AP', 'RoomHotel5AP.png', '1', './img/room5AP.png', '2022-01-01'),
(55, 'RoomHotel5BP', 'RoomHotel5BP.png', '1', './img/room5BP.png', '2022-01-01'),
(16, 'RoomHotel1NP', 'RoomHotel1NP.png', '0', './img/room1NP.png', '2022-01-01'),
(17, 'RoomHotel2NP', 'RoomHotel2NP.png', '0', './img/room2NP.png', '2022-01-01'),
(18, 'RoomHotel3NP', 'RoomHotel3NP.png', '0', './img/room3NP.png', '2022-01-01'),
(19, 'RoomHotel4NP', 'RoomHotel4NP.png', '0', './img/room4NP.png', '2022-01-01'),
(20, 'RoomHotel5NP', 'RoomHotel5NP.png', '0', './img/room5NP.png', '2022-01-01'),
(1, 'Restaurant timur1P', 'Restauranttimur1P.png', '1', './img/Restauranttimur1P.png', '2022-01-01'),
(2, 'Restaurant timur2P', 'Restauranttimur2P.png', '1', './img/Restauranttimur2P.png', '2022-01-01'),
(3, 'Restaurant timur3P', 'Restauranttimur3P.png', '1', './img/Restauranttimur3P.png', '2022-01-01'),
(4, 'Restaurant timur4P', 'Restauranttimur4P.png', '1', './img/Restauranttimur4P.png', '2022-01-01'),
(5, 'Restaurant timur5P', 'Restauranttimur5P.png', '1', './img/Restauranttimur5P.png', '2022-01-01'),
(6, 'Restaurant tengah1P', 'Restaurant tengah1P.png', '1', './img/Restaurant tengah1P.png', '2022-01-01'),
(7, 'Restaurant tengah2P', 'Restaurant tengah2P.png', '1', './img/Restaurant tengah2P.png', '2022-01-01'),
(8, 'Restaurant tengah3P', 'Restaurant tengah3P.png', '1', './img/Restaurant tengah3P.png', '2022-01-01'),
(9, 'Restaurant tengah4P', 'Restaurant tengah4P.png', '1', './img/Restaurant tengah4P.png', '2022-01-01'),
(10,'Restaurant tengah5P', 'Restaurant tengah5P.png', '1', './img/Restaurant tengah5P.png', '2022-01-01'),
(11, 'Restaurant barat1P', 'Restaurant barat1P.png', '1', './img/Restaurant barat1P.png', '2022-01-01'),
(12, 'Restaurant barat2P', 'Restaurant barat2P.png', '1', './img/Restaurant barat2P.png', '2022-01-01'),
(13, 'Restaurant barat3P', 'Restaurant barat3P.png', '1', './img/Restaurant barat3P.png', '2022-01-01'),
(14, 'Restaurant barat4P', 'Restaurant barat4P.png', '1', './img/Restaurant barat4P.png', '2022-01-01'),
(15, 'Restaurant barat5P', 'Restaurant barat5P.png', '1', './img/Restaurant barat5P.png', '2022-01-01'),
(21, 'meeting room1P', 'meetingRoom1P.png', '1', './img/meetingRoom1P.png', '2022-01-01'),
(22, 'meeting room2P', 'meetingRoom2P.png', '1', './img/meetingRoom2P.png', '2022-01-01'),
(23, 'meeting room3P', 'meetingRoom3P.png', '1', './img/meetingRoom3P.png', '2022-01-01'),
(24, 'meeting room4P', 'meetingRoom4P.png', '1', './img/meetingRoom4P.png', '2022-01-01'),
(25, 'meeting room5P', 'meetingRoom5P.png', '1', './img/meetingRoom5P.png', '2022-01-01'),
(26, 'Gym1P', 'Gym1P.png', '1', './img/Gym1P.png', '2022-01-01'),
(27, 'Gym2P', 'Gym2P.png', '1', './img/Gym2P.png', '2022-01-01'),
(28, 'Gym3P', 'Gym3P.png', '1', './img/Gym3P.png', '2022-01-01'),
(29, 'Gym4P', 'Gym4P.png', '1', './img/Gym4P.png', '2022-01-01'),
(30,'Gym5P', 'Gym5P.png', '1', './img/Gym5P.png', '2022-01-01'),
(31, 'Aula1P', 'Aula1P.png', '1', './img/Aula1P.png', '2022-01-01'),
(32, 'Aula2P', 'Aula2P.png', '1', './img/Aula2P.png', '2022-01-01'),
(33, 'Aula3P', 'Aula3P.png', '1', './img/Aula3P.png', '2022-01-01'),
(34, 'Aula4P', 'Aula4P.png', '1', './img/Aula4P.png', '2022-01-01'),
(35,'Aula5P', 'Aula5P.png', '1', './img/Aula5P.png', '2022-01-01'),
(36, 'SwimingPool1P', 'SwimingPool1P.png', '1', './img/SwimingPool1P.png', '2022-01-01'),
(37, 'SwimingPool2P', 'SwimingPool2P.png', '1', './img/SwimingPool2P.png', '2022-01-01'),
(38, 'SwimingPool3P', 'SwimingPool3P.png', '1', './img/SwimingPool3P.png', '2022-01-01'),
(39, 'SwimingPool4P', 'SwimingPool4P.png', '1', './img/SwimingPool4P.png', '2022-01-01'),
(40,'SwimingPool5P', 'SwimingPool5P.png', '1', './img/SwimingPool5P.png', '2022-01-01'),
(41, 'BallRoom1P', 'BallRoom1P.png', '1', './img/BallRoom1P.png', '2022-01-01'),
(42, 'BallRoom2P', 'BallRoom2P.png', '1', './img/BallRoom2P.png', '2022-01-01'),
(43, 'BallRoom3P', 'BallRoom3P.png', '1', './img/BallRoom3P.png', '2022-01-01'),
(44, 'BallRoom4P', 'BallRoom4P.png', '1', './img/BallRoom4P.png', '2022-01-01'),
(45,'BallRoom5P', 'BallRoom5P.png', '1', './img/BallRoom5P.png', '2022-01-01');




-- faci_preice
INSERT INTO hotel.facility_price_history (faph_faci_id, faph_startdate, faph_enddate, faph_low_price, faph_high_price,
faph_discount, faph_tax_rate, faph_modified_date, faph_user_id)
VALUES (1, '2021-01-01', '2021-03-31', 25, 35, 10, 0.1, '2021-01-01',1),
(2, '2021-04-01', '2021-06-30', 30, 40, 15, 0.08, '2021-01-01',2),
(3, '2021-01-01', '2021-03-31', 20, 30, 5, 0.05, '2021-01-01',3),
(4, '2021-04-01', '2021-06-30', 25, 35, 10, 0.1, '2021-01-01',4),
(5, '2021-01-01', '2021-03-31', 25, 35, 10, 0.1, '2021-01-01',5),
(6, '2021-04-01', '2021-06-30', 30, 40, 15, 0.08, '2021-01-01',6),
(7, '2021-01-01', '2021-03-31', 20, 30, 5, 0.05, '2021-01-01',7),
(8, '2021-04-01', '2021-06-30', 25, 35, 10, 0.1, '2021-01-01',8),
(9, '2021-01-01', '2021-03-31', 25, 35, 10, 0.1, '2021-01-01',9),
(10, '2021-04-01', '2021-06-30', 30, 40, 15, 0.08, '2021-01-01,',10),
(11, '2021-01-01', '2021-03-31', 20, 30, 5, 0.05, '2021-01-01',11),
(12, '2021-04-01', '2021-06-30', 25, 35, 10, 0.1, '2021-01-01',12),
(13, '2021-01-01', '2021-03-31', 25, 35, 10, 0.1, '2021-01-01',13),
(14, '2021-04-01', '2021-06-30', 30, 40, 15, 0.08, '2021-01-01',14),
(15, '2021-01-01', '2021-03-31', 20, 30, 5, 0.05, '2021-01-01',15),
(16, '2021-04-01', '2021-06-30', 25, 35, 10, 0.1, '2021-01-01',16),
(17, '2021-01-01', '2021-03-31', 25, 35, 10, 0.1, '2021-01-01',17),
(18, '2021-04-01', '2021-06-30', 30, 40, 15, 0.08, '2021-01-01',18),
(19, '2021-01-01', '2021-03-31', 20, 30, 5, 0.05, '2021-01-01',19),
(20, '2021-04-01', '2021-06-30', 25, 35, 10, 0.1, '2021-01-01',20);

-- hotel review
INSERT INTO hotel.hotel_reviews (hore_user_review, hore_rating, hore_created_on, hore_hotel_id, hore_user_id)
VALUES ('Great hotel, friendly staff, and clean rooms', 4, '2021-01-01', 1,1),
('The location was perfect and the views from the room were amazing', 4, '2021-01-02', 2,2),
('The breakfast was delicious and the staff was extremely helpful',5, '2021-01-03', 3,3),
('The room was clean and comfortable, the service was excellent', 4, '2021-01-04', 4,4),
('The hotel was in a great location, close to restaurants and shops', 5, '2021-01-05', 5,5),
('The room was a bit small but overall it was a great stay', 4, '2021-01-06', 3,6),
('The staff was friendly and helpful, the room was comfortable', 5, '2021-01-07', 4,7),
('The hotel was clean and well-maintained, the staff was friendly', 4, '2021-01-08', 2,8),
('The view from the room was amazing, the bed was comfortable', 5, '2021-01-09', 2,9),
('The hotel was in a great location, close to restaurants and shops', 4, '2021-01-10', 4,10),
('The room was clean and comfortable, the staff was friendly', 5, '2021-01-11',2,11),
('Great hotel, friendly staff, and clean rooms', 4, '2021-01-01', 1,12),
('The location was perfect and the views from the room were amazing', 5, '2021-01-02', 2,13),
('The breakfast was delicious and the staff was extremely helpful', 4, '2021-01-03', 4,14),
('The room was clean and comfortable, the service was excellent', 5, '2021-01-04', 4,15),
('The hotel was in a great location, close to restaurants and shops', 4, '2021-01-05', 5,16),
('The room was a bit small but overall it was a great stay', 5, '2021-01-06', 2,17),
('The staff was friendly and helpful, the room was comfortable', 4, '2021-01-07', 3,18),
('The hotel was clean and well-maintained, the staff was friendly', 5, '2021-01-08', 4,19),
('The view from the room was amazing, the bed was comfortable', 4, '2021-01-09', 5,20);

-- INSERT TABLE HUMANRESOURCE
-- insert to job_role
INSERT INTO humanresource.job_role(joro_name, joro_modified_date) VALUES 
('Direktur Utama', NOW()),
('Direktur Keuangan', NOW()),
('Direktur Personalia', NOW()),
('Direktur Teknik', NOW()),
('Direktur Operasional', NOW()),
('Manajer Keuangan', NOW()),
('Manajer Personalia', NOW()),
('Manajer Operasional', NOW()),
('Manajer Teknik', NOW()),
('Administrasi dan Gudang', NOW()),
('Staff', NOW());

-- insert data employee
INSERT INTO humanresource.employee(emp_national_id, emp_birth_date, emp_marital_status, emp_gender, 
								   emp_hire_date, emp_salaried_flag, emp_vacation_hours, emp_sickleave_hours, 
								   emp_current_flag, emp_photo, emp_modified_date, emp_emp_id, emp_joro_id) VALUES 
('3525015201880002', '1995-12-12', 'M', 'M', '2020-01-01', 0, 1, 1, 1, 'default.png', NOW(), null, 1),
('3525010510930001', '1995-02-22', 'M', 'M', '2021-06-11', 0, 1, 1, 1, 'default.png', NOW(), 1, 1),
('3525016005650004', '1991-05-23', 'S', 'F', '2020-06-17', 0, 1, 1, 1, 'default.png', NOW(), 2, 2),
('3525015306780002', '1996-01-25', 'M', 'M', '2021-05-18', 0, 1, 1, 1, 'default.png', NOW(), 3, 5),
('3525016501830002', '1994-03-15', 'M', 'F', '2020-01-16', 0, 1, 1, 1, 'default.png', NOW(), 4, 6),
('3525011506830001', '1995-08-18', 'S', 'M', '2022-07-20', 0, 1, 1, 1, 'default.png', NOW(), 5, 2),
('3525017006650078', '1996-08-19', 'S', 'M', '2021-09-22', 0, 1, 1, 1, 'default.png', NOW(), 6, 5),
('3525017006620060', '1992-06-11', 'M', 'M', '2021-12-25', 0, 1, 1, 1, 'default.png', NOW(), 7, 8),
('3525017006950028', '1998-05-15', 'S', 'M', '2020-11-24', 0, 1, 1, 1, 'default.png', NOW(), 8, 9),
('3525013006580042', '1994-04-08', 'M', 'M', '2020-06-24', 0, 1, 1, 1, 'default.png', NOW(), 9, 10),
('3525013006580043', '1997-03-06', 'S', 'F', '2021-05-19', 0, 1, 1, 1, 'default.png', NOW(), 10, 11),
('3525015212920003', '1995-05-16', 'M', 'M', '2020-02-11', 0, 1, 1, 1, 'default.png', NOW(), 11, 5),
('3525010609510002', '1996-07-15', 'S', 'F', '2022-04-15', 0, 1, 1, 1, 'default.png', NOW(), 12, 11),
('3525017006750042', '1991-08-25', 'S', 'M', '2020-03-11', 0, 1, 1, 1, 'default.png', NOW(), 13, 11),
('3525017006540043', '1990-05-22', 'M', 'M', '2021-06-22', 0, 1, 1, 1, 'default.png', NOW(), 14, 10),
('3525010505720003', '1995-04-02', 'S', 'F', '2021-08-16', 0, 1, 1, 1, 'default.png', NOW(), 15, 10),
('3525013006640036', '1993-05-08', 'M', 'M', '2020-11-02', 0, 1, 1, 1, 'default.png', NOW(), 16, 10),
('3525016401830001', '1996-06-06', 'S', 'F', '2022-12-18', 0, 1, 1, 1, 'default.png', NOW(), 17, 9),
('3525015306880002', '1997-08-01', 'M', 'M', '2020-05-11', 0, 1, 1, 1, 'default.png', NOW(), 18, 6),
('3525013006740032', '1990-07-08', 'S', 'F', '2021-06-12', 0, 1, 1, 1, 'default.png', NOW(), 19, 9);

-- insert to shift
INSERT INTO humanresource.shift(shift_name, shift_start_time, shift_end_time) VALUES
('Early Morning', '2020-05-06 05:00:00', '2020-05-06  10:00:00'),
('Morning', '2020-05-06 08:00:00', '2020-05-06 13:00:00'),
('Afternoon', '2020-05-06 12:00:00', '2020-05-06 17:00:00'),
('Evening', '2020-05-06 16:00:00', '2020-05-06 21:00:00'),
('Night', '2020-05-06 20:00:00', '2020-05-06 01:00:00'),
('Graveyard', '2020-05-06 22:00:00', '2020-05-06 07:00:00'),
('Weekend Early Morning', '2020-05-06 06:00:00', '2020-05-06 11:00:00'),
('Weekend Morning', '2020-05-06 09:00:00', '2020-05-06 14:00:00'),
('Weekend Afternoon', '2020-05-06 13:00:00', '2020-05-06 18:00:00'),
('Weekend Evening', '2020-05-06 17:00:00', '2020-05-06 22:00:00'),
('Weekend Night', '2020-05-06 21:00:00', '2020-05-06 02:00:00'),
('Weekend Graveyard', '2020-05-06 23:00:00', '2020-05-06 08:00:00'),
('Holiday Early Morning', '2020-05-06 07:00:00', '2020-05-06 12:00:00'),
('Holiday Morning', '2020-05-06 10:00:00', '2020-05-06 15:00:00'),
('Holiday Afternoon', '2020-05-06 14:00:00', '2020-05-06 19:00:00'),
('Holiday Evening', '2020-05-06 18:00:00', '2020-05-06 23:00:00'),
('Holiday Night', '2020-05-07 22:00:00', '2020-05-06 03:00:00'),
('Holiday Graveyard', '2020-05-07 00:00:00', '2020-05-07 05:00:00'),
('Special Event', '2020-05-08 00:00:00', '2020-05-09 00:00:00');

-- insert to department
INSERT INTO humanresource.department(dept_name, dept_modified_date) VALUES
('Human Resources', '2020-01-01'),
('Accounting', '2020-01-02'),
('Marketing', '2020-01-03'),
('Sales', '2020-01-04'),
('Customer Service', '2020-01-05'),
('IT', '2020-01-06'),
('Engineering', '2020-01-07'),
('Operations', '2020-01-08'),
('Legal', '2020-01-09'),
('Research and Development', '2020-01-10'),
('Product Management', '2020-01-11'),
('Finance', '2020-01-12'),
('Supply Chain', '2020-01-13'),
('Logistics', '2020-01-14'),
('Purchasing', '2020-01-15'),
('Manufacturing', '2020-01-16'),
('Quality Assurance', '2020-01-17'),
('Training', '2020-01-18'),
('Safety', '2020-01-19'),
('Environmental', '2020-01-20');

-- insert to  humanresource.employee_department_history
INSERT INTO humanresource.employee_department_history (edhi_emp_id, edhi_start_date, edhi_end_date, edhi_modified_date, edhi_dept_id, edhi_shift_id)
VALUES 
(1, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-05-02 00:00:00', 1, 1),
(2, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-06-02 00:00:00', 2, 2),
(3, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-07-02 00:00:00', 4, 3),
(4, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-04-02 00:00:00', 5, 1),
(5, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-05-02 00:00:00', 6, 2),
(6, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-04-02 00:00:00', 2, 3),
(7, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-06-02 00:00:00', 4, 1),
(8, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-07-02 00:00:00', 5, 2),
(9, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-04-02 00:00:00', 2, 3),
(10, '2022-01-02 00:00:00', '2022-06-05 23:59:59', '2022-06-02 00:00:00', 3, 1),
(11, '2022-01-02 00:00:00', '2022-06-05 23:59:59', '2022-04-02 00:00:00', 4, 2),
(12, '2022-01-02 00:00:00', '2022-07-05 23:59:59', '2022-03-02 00:00:00', 5, 3),
(13, '2022-01-02 00:00:00', '2022-07-05 23:59:59', '2022-02-02 00:00:00', 6, 4),
(14, '2022-01-02 00:00:00', '2022-07-05 23:59:59', '2022-08-02 00:00:00', 7, 5),
(15, '2022-01-02 00:00:00', '2022-09-02 23:59:59', '2022-09-02 00:00:00', 8, 6),
(16, '2022-01-02 00:00:00', '2022-09-02 23:59:59', '2022-04-02 00:00:00', 9, 4),
(17, '2022-01-02 00:00:00', '2022-09-02 23:59:59', '2022-08-02 00:00:00', 2, 3),
(18, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 5, 1),
(19, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-06-02 00:00:00', 2, 5),
(20, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 6, 6);

-- insert to humanresource.employee_pay_history
INSERT INTO humanresource.employee_pay_history (ephi_emp_id, ephi_rate_change_date, ephi_rate_salary,
ephi_pay_frequence, ephi_modified_date)
VALUES
(1, '2021-01-01', 50000, 12, '2021-01-01 12:00:00'),
(2, '2021-01-02', 55000, 12, '2021-01-02 12:00:00'),
(3, '2021-01-03', 60000, 12, '2021-01-03 12:00:00'),
(4, '2021-01-04', 65000, 12, '2021-01-04 12:00:00'),
(5, '2021-01-05', 70000, 12, '2021-01-05 12:00:00'),
(6, '2021-01-06', 75000, 12, '2021-01-06 12:00:00'),
(7, '2021-01-07', 80000, 12, '2021-01-07 12:00:00'),
(8, '2021-01-08', 85000, 12, '2021-01-08 12:00:00'),
(9, '2021-01-09', 90000, 12, '2021-01-09 12:00:00'),
(10, '2021-01-10', 95000, 12, '2021-01-10 12:00:00'),
(11, '2021-01-11', 100000, 12, '2021-01-11 12:00:00'),
(12, '2021-01-12', 105000, 12, '2021-01-12 12:00:00'),
(13, '2021-01-13', 110000, 12, '2021-01-13 12:00:00'),
(14, '2021-01-14', 115000, 12, '2021-01-14 12:00:00'),
(15, '2021-01-15', 120000, 12, '2021-01-15 12:00:00'),
(16, '2021-01-16', 125000, 12, '2021-01-16 12:00:00'),
(17, '2021-01-17', 130000, 12, '2021-01-17 12:00:00'),
(18, '2021-01-18', 135000, 12, '2021-01-18 12:00:00'),
(19, '2021-01-19', 140000, 12, '2021-01-19 12:00:00'),
(20, '2021-01-20', 145000, 12, '2021-01-20 12:00:00');

-- INSERT TO humanresource.work_orders
INSERT INTO humanresource.work_orders (woro_start_date, woro_status, woro_user_id)
VALUES ('2021-01-01 12:00:00', 'CLOSED', 1),
('2021-01-02 12:00:00', 'OPEN', 2),
('2021-01-03 12:00:00', 'CLOSED', 3),
('2021-01-04 12:00:00', 'OPEN', 4),
('2021-01-05 12:00:00', 'CLOSED', 5),
('2021-01-06 12:00:00', 'OPEN', 6),
('2021-01-07 12:00:00', 'CANCELLED', 7),
('2021-01-08 12:00:00', 'OPEN', 8),
('2021-01-09 12:00:00', 'CANCELLED', 9),
('2021-01-10 12:00:00', 'OPEN', 10),
('2021-01-11 12:00:00', 'CANCELLED', 11),
('2021-01-12 12:00:00', 'CANCELLED', 12),
('2021-01-13 12:00:00', 'CLOSED', 13),
('2021-01-14 12:00:00', 'CANCELLED', 14),
('2021-01-15 12:00:00', 'CLOSED', 15),
('2021-01-16 12:00:00', 'CANCELLED', 16),
('2021-01-17 12:00:00', 'CLOSED', 17),
('2021-01-18 12:00:00', 'OPEN', 18),
('2021-01-19 12:00:00', 'CLOSED', 19),
('2021-01-20 12:00:00', 'OPEN', 20);

-- INSERT TO humanresource.work_order_detail 
INSERT INTO humanresource.work_order_detail (wode_task_name, wode_status, wode_start_date, wode_end_date, wode_notes,wode_emp_id, wode_seta_id, wode_faci_id, wode_woro_id)
VALUES ('Task 1', 'In Progress', '2021-01-01 12:00:00', '2021-01-02 12:00:00', 'Note 1', 1, 1, 1, 1),
('Task 2', 'Completed', '2021-01-03 12:00:00', '2021-01-04 12:00:00', 'Note 2', 2, 2, 2, 2),
('Task 3', 'In Progress', '2021-01-05 12:00:00', '2021-01-06 12:00:00', 'Note 3', 3, 3, 3, 3),
('Task 4', 'Completed', '2021-01-07 12:00:00', '2021-01-08 12:00:00', 'Note 4', 4, 4, 4, 4),
('Task 5', 'In Progress', '2021-01-09 12:00:00', '2021-01-10 12:00:00', 'Note 5', 5, 5, 5, 5),
('Task 6', 'Completed', '2021-01-11 12:00:00', '2021-01-12 12:00:00', 'Note 6', 6, 6, 6, 6),
('Task 7', 'In Progress', '2021-01-13 12:00:00', '2021-01-14 12:00:00', 'Note 7', 7, 7, 7, 7),
('Task 8', 'Completed', '2021-01-15 12:00:00', '2021-01-16 12:00:00', 'Note 8', 8, 8, 8, 8),
('Task 9', 'In Progress', '2021-01-17 12:00:00', '2021-01-18 12:00:00', 'Note 9', 9, 9, 9, 9),
('Task 10', 'Completed', '2021-01-19 12:00:00', '2021-01-20 12:00:00', 'Note 10', 10, 10, 10, 10),
('Task 11', 'In Progress', '2021-01-21 12:00:00', '2021-01-22 12:00:00', 'Note 11', 11, 11, 11, 11),
('Task 12', 'Completed', '2021-01-23 12:00:00', '2021-01-24 12:00:00', 'Note 12', 12, 12, 12, 12),
('Task 13', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 13', 13, 13, 13, 13),
('Task 14', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 14', 14, 14, 14, 14),
('Task 15', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 15', 15, 15, 15, 15),
('Task 16', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 16', 16, 16, 16, 16),
('Task 17', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 17', 17, 17, 17, 17),
('Task 18', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 18', 18, 18, 18, 18),
('Task 19', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 19', 19, 19, 19, 19),
('Task 20', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 20', 20, 20, 20, 20);

-- INSERT TABLE RESTO
--order_menus

INSERT INTO resto.order_menus (

orme_order_number ,
orme_order_date,
orme_total_item , 
orme_total_discount, 
orme_total_amount, 
orme_pay_type, 
orme_cardnumber , 
orme_is_paid , 
orme_modified_date, 
orme_user_id )

VALUES 
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P', '2023-02-12', 1 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P', '2023-02-12', 2 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 3),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '1111111111', 'B','2023-02-12', 4),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 5 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 6 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '1111111111', 'P','2023-02-12', 7 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'B','2023-02-12', 8 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 9 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '1111111111', 'P','2023-02-12', 10 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'B','2023-02-12', 11 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 12 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 13 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '1111111111', 'P','2023-02-12', 14 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'B','2023-02-12', 15 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 16 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '1111111111', 'P','2023-02-12', 17 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'B','2023-02-12', 18 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 19 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'B','2023-02-12', 20 );
-- Resto_Menus --

-- 1 Restoran Sumatera
-- 2 Restoran Jawa
-- 3 Restoran Timur

INSERT INTO resto.resto_menus(
	reme_faci_id,
	reme_name,
	reme_description,
	reme_price,
	reme_status,
	reme_modified_date
) VALUES 

( 2,'Batagor', 'Batagor merupakan makanan khas jakarta yang sangat Lezat dan Bergizi', 22000, 'available', '2023-02-12' ),
( 2,'Soto Betawi', 'Soto Betawi merupakan soto yang khas dari daerah DKI Jakarta yang sangat Lezat dan Bergizi', 26000, 'available', '2023-02-12' ),
( 1,'Pempek', 'Pempek merupakan makanan khas Palembang, Sumatera Selatan yang sangat Lezat dan Bergizi', 21000, 'empty', '2023-02-12' ),
( 2,'Gudeg', 'Gudeg merupakan makanan khas Yogyakarta yang sangat Lezat dan Bergizi', 23000, 'available', '2023-02-12' ),
( 2,'Taucho', 'Taucho merupakan makanan khas Cianjur yang sangat Lezat dan Bergizi', 29000, 'available', '2023-02-12' ),
( 1,'Laksan', 'Laksan merupakan makanan khas Palembang yang sangat Lezat dan Bergizi', 27000, 'available', '2023-02-12' ),
( 1,'Mie Gomak', 'Mie Gomak merupakan makanan khas Medan, Sumatera Utara yang sangat Lezat dan Bergizi', 21000, 'available', '2023-02-12' ),
( 1,'Asam Keueng', 'Asam Keueng merupakan makanan khas Aceh yang sangat Lezat dan Bergizi', 20000, 'available', '2023-02-12' ),
( 1,'Rendang', 'Rendang merupakan makanan khas Padang, Sumatera Barat yang sangat Lezat dan Bergizi', 29000, 'available', '2023-02-12' ),
( 1,'Pengdap', 'Pengdap merupakan makanan khas Bengkulu yang sangat Lezat dan Bergizi', 24000, 'available', '2023-02-12' ),
( 1,'Gulai Belacan', 'Gulai Belacan merupakan makanan khas Pekan Baru, Riau yang sangat Lezat dan Bergizi', 26000, 'available', '2023-02-12' ),
( 1,'Tempoyak', 'Tempoyak merupakan makanan khas Jambi yang sangat Lezat dan Bergizi', 22000, 'empty', '2023-02-12' ),
( 1,'Seruit', 'Seruit merupakan makanan khas Lampung yang sangat Lezat dan Bergizi', 29000, 'available', '2023-02-12' ),
( 2,'Peuyeum', 'Peuyeum merupakan makanan khas Bandung yang sangat Lezat dan Bergizi', 20000, 'available', '2023-02-12' ),
( 2,'Lumpia', 'Lumpia merupakan makanan khas Semarang yang sangat Lezat dan Bergizi', 21000, 'available', '2023-02-12' ),
( 2,'Rujak Cingur', 'Rujak Cingur merupakan makanan khas Surabaya yang sangat Lezat dan Bergizi', 25000, 'empty', '2023-02-12' ),
( 2,'Rawon Dengkul', 'Rawon Dengkul merupakan makanan khas Malang yang sangat Lezat dan Bergizi', 28000, 'available', '2023-02-12' ),
( 3,'Papeda', 'Papeda merupakan makanan khas Papua yang sangat Lezat dan Bergizi', 24000, 'available', '2023-02-12' ),
( 3,'Ayam Betutu', 'Ayam Betutu merupakan makanan khas Bali yang sangat Lezat dan Bergizi', 25000, 'available', '2023-02-12' ),
( 3,'Sate bulayak', 'Sate bulayak merupakan makanan khas Lombok, Nusa Tenggara Barat yang sangat Lezat dan Bergizi', 27000, 'empty', '2023-02-12' );


-- Resto Menus Photos --

INSERT INTO resto.resto_menu_photos (

	remp_thumbnail_filename,
	remp_photo_filename,
	remp_primary,
	remp_url, 
	remp_reme_id  --ngambil dari reme_id tabel resto_menus
) VALUES
('Batagor', 'batagor.jpg', '1', 'batagor.com', 1 ), --1
('Soto Betawi', 'soto-betawi.jpg', '1', 'soto-betawi.com', 2 ), --2
('Pempek', 'pempek.jpg', '1', 'pempek.com', 3 ), --3
('Gudeg', 'gudeg.jpg', '1', 'gudeg.com', 4 ), --4
('Taucho', 'taucho.jpg', '1', 'taucho.com', 5 ), --5
('Laksan', 'laksan.jpg', '1', 'laksan.com', 6 ), --6
('Mie Gomak', 'miegomak.jpg', '1', 'miegomak.com', 7 ), --7
('Asam Keueng', 'asamkeueng.jpg', '1', 'asamkeueng.com', 8 ), --8
('Rendang', 'rendang.jpg', '1', 'rendang.com', 9 ), --9
('Pengdap', 'pengdap.jpg', '1', 'pengdap.com', 10 ), --10
('Gulai Balacan', 'gulaibalacan.jpg', '1', 'gulaibelacan.com', 11 ),
('Tempoyak', 'tempoyak.jpg', '1', 'tempoyak.com', 12 ),
('Seruit', 'seruit.jpg', '1', 'seruit.com', 13 ),
('Peuyeum', 'peuyeum.jpg', '1', 'peuyeum.com', 14 ),
('Lumpia', 'lumpia.jpg', '1', 'lumpia.com', 15 ),
('Rujak Cingur', 'rujakcingur.jpg', '1', 'rujakcingur.com', 16 ),
('Rawon Dengkul', 'rawondengkul.jpg', '1', 'rawondengkul.com', 17 ),
('Papeda', 'papeda.jpg', '1', 'papeda.com', 18 ),
('Ayam Betutu', 'ayambetutu.jpg', '1', 'ayambetutu.com', 19 ),
('Ayam bulayak', 'ayambulayak.jpg', '1', 'ayambulayak.com', 20 );


-- order_menu_detail

INSERT INTO resto.order_menu_detail (

    orme_price,
    orme_qty,
    orme_subtotal,
    orme_discount,
    omde_orme_id, --ngambil dari orme_id tabel order_menus
    omde_reme_id --ngambil dari reme_id tabel resto_menus
) VALUES
( 10000, 10, 100000, 3000, 1,1 ), --1
( 10000, 10, 100000, 3000, 2,2 ), --2
( 10000, 10, 100000, 3000, 3,3 ), --3
( 10000, 10, 100000, 3000, 1,4 ), --4
( 10000, 10, 100000, 3000, 2,5 ), --5
( 10000, 10, 100000, 3000, 3,6 ), --6
( 10000, 10, 100000, 3000, 1,7 ), --7
( 10000, 10, 100000, 3000, 2,8 ), --8
( 10000, 10, 100000, 3000, 3,9 ),
( 10000, 10, 100000, 3000, 1,10 ),
( 10000, 10, 100000, 3000, 2,11 ),
( 10000, 10, 100000, 3000, 3,12 ),
( 10000, 10, 100000, 3000, 1,13 ),
(10000, 10, 100000, 3000, 2,14 ),
( 10000, 10, 100000, 3000, 3,15 ),
(10000, 10, 100000, 3000, 1,16 ),
( 10000, 10, 100000, 3000, 2,17 ),
( 10000, 10, 100000, 3000, 3,18 ),
( 10000, 10, 100000, 3000, 1,19 ),
( 10000, 10, 100000, 3000, 2,20 );