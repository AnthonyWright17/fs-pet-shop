DROP TABLE if EXISTS pets;

CREATE TABLE pets (
  pet_id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  age integer,
  kind VARCHAR(50)
);