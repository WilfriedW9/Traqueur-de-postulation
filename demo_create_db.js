const mysql = require('mysql');

const con = mysql.createConnection({
  host: "3006",
  user: "BigMe",
  password: "12345"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});