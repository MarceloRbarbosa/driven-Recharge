CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);

CREATE TABLE users (
id SERIAL PRIMARY KEY,
document TEXT NOT NULL UNIQUE,
name TEXT NOT NULL 
)

CREATE TABLE phones (
id SERIAL PRIMARY KEY,
phone_number TEXT NOT NULL UNIQUE,
carrier_id INT NOT NULL,
user_id INT NOT NULL,
description TEXT NOT NULL,
FOREIGN KEY (carrier_id) REFERENCES carriers(id),
FOREIGN KEY (user_id) REFERENCES users(id)
)

CREATE TABLE recharge (
id SERIAL PRIMARY KEY,
phone_id INT NOT NULL,
amount DECIMAL(10, 2) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (phone_id) REFERENCES phones(id)
)