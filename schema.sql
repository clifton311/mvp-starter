DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

USE MVP;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  email varchar(255) NOT NULL,
  age INT(10),
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
