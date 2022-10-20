DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS employee_role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
  d_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(100) NOT NULL
);

CREATE TABLE employee_role (
  r_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY(department_id)
  REFERENCES department(d_id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  e_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  employee_role_id INT,
  manager_id INT,
  FOREIGN KEY (employee_role_id)
  REFERENCES employee_role(r_id)
  ON DELETE CASCADE,
  FOREIGN KEY (manager_id)
  REFERENCES employee(e_id)
  ON DELETE SET NULL
);
