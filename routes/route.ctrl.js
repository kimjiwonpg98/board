`use strict`;

const db = require("../dbConfig/dbConfig");

const output = {
  home: (req, res, next) => {
    const sql = `SELECT board_no, 
    student_no, 
    board_title,
    board_hit,
    date_format(board_in_date, '%Y.%m.%d %H:%i') board_in_date,
    date_format(board_update_date, '%Y.%m.%d %H:%i') board_update_date 
    FROM boards`;
    db.query(sql, (err, rows) => {
      res.render("./home.ejs", { title: "게시판 리스트", rows: rows });
    });
  },
  write: (req, res) => {
    res.render("./write.ejs");
  },
};

const process = {
  write: (req, res, next) => {},
};

module.exports = {
  output,
  process,
};
