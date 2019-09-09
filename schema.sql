DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

USE MVP;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50),
  lastName varchar(50),
  userName varchar (50),
  email varchar(255),
  password varchar(50),
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
