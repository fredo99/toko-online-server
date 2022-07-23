var express = require("express");
var router = express.Router();
const { login } = require("../controllers/authController");

router.post("/login", login);
// router.get("/logout", logout);

module.exports = router;
