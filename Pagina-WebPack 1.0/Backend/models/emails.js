const mysql = require('mysql2');

let conexion = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  database: 'suscripciondb',
  user: 'root',
  password: '',
});

conexion.connect(function(error) {
  if (error) {
    console.log("Ocurrio un error", error)
  } else {
    console.log("Connected..!!");
  }
});

module.exports = conexion;