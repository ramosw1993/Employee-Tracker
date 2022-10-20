const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const consoleT= require("console.table");
const init = require('./utils/');

const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

db.connect(err => {
  if (err) throw err;
  console.log('');
  console.log('Database connected.');
  setTimeout(() => {
    init();
  }, 500);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


