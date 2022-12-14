const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/auth");

router.post("/signin", signin);

router.post("/signup", signup);

module.exports = router;
