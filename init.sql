CREATE TABLE park(
   id_park SERIAL,
   location VARCHAR(200) ,
   PRIMARY KEY(id_park)
);

CREATE TABLE users(
   id_user SERIAL,
   email VARCHAR(100)  NOT NULL,
   password VARCHAR(50)  NOT NULL,
   id_park INTEGER NOT NULL,
   PRIMARY KEY(id_user),
   UNIQUE(email),
   FOREIGN KEY(id_park) REFERENCES park(id_park)
);

CREATE TABLE dinosaur(
   id_dinosaur SERIAL,
   breed VARCHAR(50) ,
   name VARCHAR(50) ,
   id_park INTEGER NOT NULL,
   PRIMARY KEY(id_dinosaur),
   FOREIGN KEY(id_park) REFERENCES park(id_park)
);

CREATE TABLE ticket(
   id_ticket SERIAL,
   dates DATE NOT NULL,
   type VARCHAR(50)  NOT NULL,
   id_park INTEGER NOT NULL,
   PRIMARY KEY(id_ticket),
   FOREIGN KEY(id_park) REFERENCES park(id_park)
);

CREATE TABLE visitor(
   id_visitor SERIAL,
   first_name VARCHAR(50) ,
   last_name VARCHAR(50)  NOT NULL,
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
