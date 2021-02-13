/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

USE groceryList;

CREATE TABLE groceryList (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NUll,
  count INT NOT NULL,
  PRIMARY KEY (id)
);