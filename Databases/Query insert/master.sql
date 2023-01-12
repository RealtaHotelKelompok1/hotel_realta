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
(16,'jln.SuryaSumantri','jln.LemahNeneut',14006,'"{Maranatha:Kota Bandung}"',3);
(17,'jln.Citatah','jln.Citatah5',18899,'"{StoneGarden: Kab.Bandung}"',3),
(18,'jln.Rajamandala','jln.Raya Raja Saleh',15606,'"{Raja Saleh: kab.Bandung}"',3),
(19,'jln.Kapten Iskandar','jln.IPTEK WORD',16788,'"{Parahyangan City : Kab.Bandung}"',3),
(20,'jln.Cimindi','jln.Cibabat',16300,'"{Cibabat : Kota Bandung}"',3)

insert into master.category_group
values(1,'Restaurant','Facility','HaveFun','Res.jpg','https://hotel_realta/facility/restaurant/res.jpg'),
(2,'Room','Facility','HaveFun','Room.jpg','https://hotel_realta/facility/room/room.jpg'),
(3,'Meeting-Room','Facility','HaveFun','Meet-Room.jpg','https://hotel_realta/facility/Meeting_Room/res.jpg'),
(4,'GYM','Facility','HaveFun','Gym.jpg','https://hotel_realta/facility/Gym/Gym.jpg'),
(5,'Aula','Facility','HaveFun','Aula.jpg','https://hotel_realta/facility/Aula/aula.jpg'),
(6,'SwimmingPool','Facility','HaveFun','SMP.jpg','https://hotel_realta/facility/SwimmingPool/SMP.jpg'),
(7,'Balroom','Facility','HaveFun','BR.jpg','https://hotel_realta/facility/Balroom/BR.jpg');

INSERT INTO master.policy (poli_name, poli_description)
VALUES ('Check-in Policy', 'Check-in time is at 2:00 PM, early check-in is subject to availability'),
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
VALUES ('Room Rate', 120.99, 'Price per night for standard room', 'Room', NOW()),
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
VALUES ('Cleaning Room', 1),
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