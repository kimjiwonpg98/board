`use strict`;

const db = require("../dbConfig/dbConfig");

const output = {
  home: (req, res, next) => {
    const sql = `SELECT * FROM boards`;
    db.query(sql, (err, rows) => {
      res.render("./home.ejs", { title: "게시판 리스트", rows: rows });
    });
  },
};

module.exports = {
  output,
  process,
};
