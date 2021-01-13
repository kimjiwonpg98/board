`use strict`;

const express = require("express");
const router = express.Router();
const ctrl = require("./route.ctrl");

router.get("/", ctrl.output.home);
router.get("/write", ctrl.output.write);

module.exports = router;
