`use strict`;

const db = require("../dbConfig/dbConfig");

const output = {
  home: (req, res) => res.render("./home.ejs"),
};

const process = {
  create: (req, res) => {
    const data = req.body;
  },
};

module.exports = {
  output,
  process,
};
