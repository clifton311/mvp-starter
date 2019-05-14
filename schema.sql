DROP DATABASE IF EXISTS chinese;

CREATE DATABASE chinese;

USE chinese;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
