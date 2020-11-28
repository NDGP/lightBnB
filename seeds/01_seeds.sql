

INSERT INTO users ( id, name, email, password) VALUES
(1, 'bob', 'bob@bob.com', '$2a$10$FB');
INSERT INTO users ( id, name, email, password) VALUES
(2, 'andy', 'andy@bob.com', 'BOAVhpuLvpOREQVmvmezD4ED');
INSERT INTO users ( id, name, email, password) VALUES
(3, 'stan', 'stan@bob.com', '.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO properties (id, owner_id, title, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (1, 1, 'Simy Home', 'https://i.pinimg.com/originals/4e/6d/b0/4e6db0d9e99ce36e32a36860e00451e6.jpg', 'https://i.pinimg.com/originals/e0/fd/de/e0fdde31f12d285f52cb4a1e3cba2d5c.jpg',100,1, 0, 4, 'notacontrystan','sim street','simcity', 'simtario', 'N64Y2K', 'true'),
(2, 2, 'Elegant-Apple-Tree Underwood', 'https://upload.wikimedia.org/wikipedia/en/0/0c/Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg', 'https://s.abcnews.com/images/Business/ht_house_dahmer_kb_131119_33x16_992.jpg',666,1, 1, 1, 'Imaeatyoustan','deadend','abadplace', 'michigan', 'I3AE7U', 'true'),
(3, 3, 'Elrons House of Pancakes','https://i.kym-cdn.com/entries/icons/mobile/000/016/729/large.jpg' , 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/08/scientology-building-hollywood-paul-mounce-getty-1068x712.jpg',100000 ,420, 69, 420, 'Teegeeack','easy','spaceship','ofpeace', 'J0IN0S', 'true');

INSERT INTO reservations (guest_id, property_id, start_date, end_date) 
VALUES (1, 1, '2018-09-11', '2018-09-26'),
(2, 2, '2019-01-04', '2019-02-01'),
(3, 3, '2021-10-01', '2021-10-14');

INSERT INTO property_reviews (id, guest_id, property_id, rating, message)
VALUES (1, 1, 1, 5, 'messages'),
(3, 3, 3, 3, 'messages');

