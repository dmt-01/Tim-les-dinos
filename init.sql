CREATE TABLE park(
   id_park SERIAL,
   location VARCHAR(200),
   PRIMARY KEY(id_park)
);

CREATE TABLE users(
   id_user SERIAL,
   email VARCHAR(100) NOT NULL,
   password VARCHAR(50) NOT NULL,
   id_park INTEGER NOT NULL,
   PRIMARY KEY(id_user),
   UNIQUE(email),
   FOREIGN KEY(id_park) REFERENCES park(id_park)
);

CREATE TABLE dinosaur(
   id_dinosaur SERIAL,
   breed VARCHAR(50),
   name VARCHAR(50),
   id_park INTEGER NOT NULL,
   PRIMARY KEY(id_dinosaur),
   FOREIGN KEY(id_park) REFERENCES park(id_park)
);

CREATE TABLE ticket(
   id_ticket SERIAL,
   dates DATE NOT NULL,
   type VARCHAR(50) NOT NULL,
   id_park INTEGER NOT NULL,
   PRIMARY KEY(id_ticket),
   FOREIGN KEY(id_park) REFERENCES park(id_park)
);

CREATE TABLE visitor(
   id_visitor SERIAL,
   first_name VARCHAR(50),
   last_name VARCHAR(50) NOT NULL,
   years INTEGER,
   PRIMARY KEY(id_visitor)
);

CREATE TABLE reserve(
   id_ticket INTEGER,
   id_visitor INTEGER,
   dates DATE,
   quantity INTEGER,
   PRIMARY KEY(id_ticket, id_visitor),
   FOREIGN KEY(id_ticket) REFERENCES ticket(id_ticket),
   FOREIGN KEY(id_visitor) REFERENCES visitor(id_visitor)
);

INSERT INTO
   park (location)
VALUES
   ('Isla Nublar'),
   ('Isla Sorna'),
   ('San Diego Exhibit');

INSERT INTO
   users (email, password, id_park)
VALUES
   ('john.hammond@jurassic.com', 'amber123', 1),
   ('muldoon@jurassic.com', 'raptorRulez', 1),
   ('sarah.harding@jurassic.com', 'trexQueen', 2),
   ('ian.malcolm@jurassic.com', 'chaosTheory', 3);

INSERT INTO
   dinosaur (breed, name, id_park)
VALUES
   ('Tyrannosaurus Rex', 'Rexy', 1),
   ('Velociraptor', 'Blue', 1),
   ('Brachiosaurus', 'Longneck', 1),
   ('Spinosaurus', 'Spiny', 2),
   ('Stegosaurus', 'Spike', 2),
   ('Pteranodon', 'Skywing', 3);

INSERT INTO
   ticket (dates, type, id_park)
VALUES
   ('2025-06-01', 'Standard', 1),
   ('2025-06-01', 'VIP', 1),
   ('2025-06-02', 'Standard', 2),
   ('2025-06-05', 'Family', 3),
   ('2025-06-07', 'VIP', 3);

INSERT INTO
   visitor (first_name, last_name, years)
VALUES
   ('Alan', 'Grant', 55),
   ('Ellie', 'Sattler', 45),
   ('Tim', 'Murphy', 12),
   ('Lex', 'Murphy', 14),
   ('Kelly', 'Curtis', 16),
   ('Billy', 'Brennan', 32);

INSERT INTO
   reserve (id_ticket, id_visitor, dates, quantity)
VALUES
   (1, 1, '2025-06-01', 1),
   (1, 2, '2025-06-01', 2),
   (2, 3, '2025-06-01', 1),
   (3, 4, '2025-06-02', 2),
   (4, 5, '2025-06-05', 3),
   (5, 6, '2025-06-07', 1);