const mysql = require("mysql");
require("dotenv").config();

const dbConfig = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: "marketdb",
});

dbConfig.connect();

module.exports = dbConfig;
