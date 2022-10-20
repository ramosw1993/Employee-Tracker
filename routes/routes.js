const express = ("express");
const index = ("./utils/index.js");
const { Router } = require('express');
const init = require('./utils');

const routes = require("express").Router();

//gets the database and returns the table selected - departments
routes.get('/api/employee_db', (req, res) => {
    const sql = `SELECT department FROM department_name`;
    
    db.query(sql, viewDepartments(), (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  //gets the database and returns the table selected - employee role
  routes.get('/api/employee_db', (req, res) => {
    const sql = `SELECT title FROM employee_role`;
    
    db.query(sql, viewRoles(), (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  //gets the database and returns the table selected - view
  routes.get('/api/employee_db', (req, res) => {
    const sql = `SELECT concat(first_name,' ', last_name) FROM employee`;
    
    db.query(sql, viewEmployees(), (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  //gets the database and ... not completed
  routes.get('/api/employee_db', (req, res) => {
    const sql = `INSERT INTO department`;
    
    db.query(sql, addDepartment(), (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  module.exports = routes;