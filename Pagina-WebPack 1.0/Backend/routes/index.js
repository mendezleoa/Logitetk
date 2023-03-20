const express = require('express');
const router = express.Router();
const bd = require('../models/emails');
const mysql = require('mysql2');

let conexion = bd

router.post('/', function (req, res, next) {
  console.log(req.body)
  let post = req.body;
  let query = conexion.query('INSERT INTO users SET ?', post, function (error, results, fields) {
    if (error) throw error;
  });
  console.log(query.sql);
});

module.exports = router;