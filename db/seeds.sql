INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4),
       ("Sales Person", 90000, 4),
       ("Lead Engineer", 170000, 1),
       ("Software Engineer", 130000, 1),
       ("Account Manager", 110000, 2),
       ("Accountant", 90000, 2),
       ("Legal Team Lead", 250000, 3);

INSERT INTO employee (first_name, last_name, employee_role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
       ("Mike", "Jordan", 2, 1),
       ("Robert", "Jones", 3, 1),
       ("Sean", "Carter", 4, NULL),
       ("Jordan", "Choke", 5, 4),
       ("Arnold", "Jenkins", 6, 4),
       ("Sarah", "Nissan", 7, 1);
