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

  content: (req, res, next) => {
    let idx = req.params.id;
    const sql = `SELECT board_title, board_content, board_hit, date_format(board_in_date, '%Y.%m.%d %H:%i') board_in_date FROM boards WHERE board_no = ?`;
    const update = `UPDATE boards SET board_hit = board_hit + 1 WHERE board_no = ?`;
    db.beginTransaction((err) => {
      if (err) console.log(err);
      
      db.query(update, [parseInt(idx)], (err, rows) => {
        if (err) console.log(err);
        db.query(sql, [parseInt(idx)], (err, rows) => {
          res.render("./content.ejs", { rows: rows });
        });
      });
      
    })
    
  },
};

const process = {
  write: (req, res) => {
    const data = req.body;

    let sql = `INSERT INTO boards(student_no, board_title, board_content, board_code_no, board_hit) 
    VALUES(?,?,?,3,0)`;
    const params = [data.studentNo, data.title, data.textarea];
    db.query(sql, params, (err, rows) => {
      if (err) throw err;
    });
  },
  
};

module.exports = {
  output,
  process,
};
