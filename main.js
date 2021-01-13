const express = require("express");
const bodyParser = require("body-parser");
const home = require("./routes/routes");
const path = require("path");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
