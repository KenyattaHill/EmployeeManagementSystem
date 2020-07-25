DROP DATABASE IF EXISTS employee_trackerdb;

CREATE DATABASE employee_trackerdb;

USE employee_trackerdb;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(45) NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL,
department_id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT ,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NUll,
manager_id INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO department
(name)
VALUES
('Front End'), ('Grocery'), ('Non Foods');

INSERT INTO role
(title, salary, department_id)
VALUES
('clerk', 18000, 1), ('lead', 25000, 2), ('manager', 50000, 3);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
('Mike', 'Jackson', 1),
('Jim', 'Davis', 1),
('Sally', 'Roads', 2, 1),
('Pete', 'Baker', 3, 2);