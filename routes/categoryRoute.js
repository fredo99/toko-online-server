var express = require("express");
var router = express.Router();
const {
  getAll,
  getById,
  createCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.get("/", getAll);
router.get("/:id", getById);
router.post("/create", createCategory);
router.post("/delete/:id", deleteCategory);

module.exports = router;
