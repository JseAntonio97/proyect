

  CREATE DATABASE express3;

  --using database
  use express3;
--fecha_nacimiento DATETIME  ,
  ---creatting table
--CREATE TABLE persona { persona int NOT NULL AUTO_INCREMENT, nombre varchar(255), apellido1 varchar(255), apellido2 varchar(255) } 
  ------------
id INT AUTO_INCREMENT PRIMARY KEY,
  CREATE TABLE persona(

id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(50)NOT NULL,
apellido_paterno VARCHAR(50)NOT NULL,
apellido_materno VARCHAR(50)NOT NULL,
estado_civil VARCHAR(50)NOT NULL,
telefono VARCHAR(10)

  );

  --tp show all tables
  SHOW TABLES;

  --describe las tablas
  describe persona;