CREATE DATABASE userdb;
use userdb;

CREATE TABLE leads (
  name VARCHAR(20),
  mobile VARCHAR(10)
);

INSERT INTO leads
  (name, mobile)
VALUES
  ('Venky', '8390188283'),
  ('John', '9876543210');
