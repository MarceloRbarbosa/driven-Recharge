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
cpf TEXT NOT NULL UNIQUE,
NOME TEXT NOT NULL UNIQUE
)

CREATE TABLE phones (
id SERIAL PRIMARY KEY,
number TEXT NOT NULL UNIQUE,
carrier_id INT NOT NULL,
user_id INT NOT NULL,
descricao TEXT NOT NULL,
FOREIGN KEY (carrier_id) REFERENCES carriers(id),
FOREIGN KEY (user_id) REFERENCES users(id)
)

CREATE TABLE recharge (
id SERIAL PRIMARY KEY,
phone_id INT NOT NULL,
user_id INT NOT NULL,
create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (phone_id) REFERENCES phones(id),
FOREIGN KEY (user_id) REFERENCES users(id)
)