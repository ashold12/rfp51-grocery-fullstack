const mysql = require("mysql");

const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: "",
});

connection.connect();

module.exports = connection;
