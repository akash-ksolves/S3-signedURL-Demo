const mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB");
});

module.exports = conn;
