const inquirer = require("inquirer");
const consoleT = require("console.table");
const mysql = require("mysql2");

//mysql connection to the js
const db_1 = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

//kicks off the program
function init() {
  console.log("");
  console.log("Welcome, Employee Tracker database.");
  setTimeout(() => {
    homeMenu();
  }, 1000);
}

//home function that prompts the options
function homeMenu() {
  inquirer
    .prompt({
      type: "list",
      name: "menu",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee",
        "Exit",
      ],
    })
    .then(({ menu }) => {
      if (menu === "View all departments") {
        viewDepartments();
      } else if (menu === "View all roles") {
        viewRoles();
      } else if (menu === "View all employees") {
        viewEmployees();
      } else if (menu === "Add a department") {
        addDepartment();
      } else if (menu === "Add a role") {
        addRole();
      } else if (menu === "Add an employee") {
        addEmployee();
      } else if (menu === "Update an employee") {
        updateRole();
      } else if (menu === "Exit") {
        endProgram();
      }
    });
}

//function that allows to view departments
const viewDepartments = () => {
  db_1.query(
    `SELECT d_id AS id, department_name AS name FROM department`,
    (err, rows) => {
      if (err) {
        console.error(err);
      }
      console.table(rows);
      setTimeout(() => {
        init();
      }, 1000);
    }
  );
};

//function that allows to view roles
const viewRoles = () => {
  db_1.query(
    `SELECT r_id AS id, title AS title, department_name AS department, salary AS salary FROM employee_role
    LEFT JOIN department ON employee_role.department_id = department.d_id`,
    (err, rows) => {
      if (err) {
        console.error(err);
      }
      console.table(rows);
      setTimeout(() => {
        init();
      }, 1000);
    }
  );
};

// function that allows to view employee
const viewEmployees = () => {
  db_1.query(
    `SELECT e.e_id as id, concat(e.first_name,' ', e.last_name) AS employee, e.title AS title, e.salary AS salary, e.department_name AS department, 
    CASE WHEN e.manager_id = e.e_id THEN concat('N/A') ELSE concat(m.first_name, ' ', m.last_name) END AS manager 
    FROM (SELECT * FROM employee LEFT JOIN employee_role ON employee.employee_role_id = employee_role.r_id LEFT JOIN department ON employee_role.department_id = department.d_id) AS e, employee m 
    WHERE m.e_id = e.manager_id`,
    (err, rows) => {
      if (err) {
        console.error(err);
      }
      console.table(rows);
      setTimeout(() => {
        init();
      }, 1000);
    }
  );
};

//add departments function, does not work - tried my best
//   const addDepartment = () => {
//     inquirer
//       .prompt([{
//         type: "input",
//         name: "newDepartment",
//         message: "Add a department:",
//       },
//     ])
//     .then(({newDepartment}) => {
//         const sql = "INSERT INTO department (department_name) VALUES (?)";
//         const query = [newDepartment];
//         db_1.query(sql, query, (err, rows) => {
//             if (err) {
//                 console.error(err.message);
//             }
//         })
//     })
//     db_1.query(`INSERT INTO department`)
//   }

module.exports = init;
