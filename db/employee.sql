CREATE DATABASE employee_trackerdb;

CREATE TABLE department (
id INT NOT NULL IDENTITY(1,1),
name VARCHAR(45) NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL IDENTITY(1,1),
title VARCHAR(30),
salary DECIMAL,
department_id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL IDENTITY(1,1) ,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NUll,
manager_id INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO department
(name)
VALUES
('Front End');

INSERT INTO department
(name)
VALUES
('Grocery');

INSERT INTO department
(name)
VALUES
('Non Foods');

INSERT INTO role
(title, salary, department_id)
VALUES
('clerk', 18000, 1);

INSERT INTO role
(title, salary, department_id)
VALUES
('lead', 25000, 2);

INSERT INTO role
(title, salary, department_id)
VALUES
('manager', 50000, 3);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
('Mike', 'Jackson', 1);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
('Jim', 'Davis', 1);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
('Sally', 'Roads', 2, 1);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
('Pete', 'Baker', 3, 2);