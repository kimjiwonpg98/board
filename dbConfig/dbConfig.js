const mysql = require("mysql");

const dbConfig = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "dhakdlrjf11",
  database: "idu-market-DB",
});

dbConfig.connect();

module.exports = dbConfig;
