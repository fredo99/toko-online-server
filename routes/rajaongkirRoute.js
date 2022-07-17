var express = require("express");
var router = express.Router();
const {
  getProvinces,
  getProvince,
} = require("../controllers/rajaongkirController");

router.get("/provinces", getProvinces);
router.get("/province/:id", getProvince);

module.exports = router;
