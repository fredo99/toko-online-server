const Category = require("../models/Category");
const Product = require("../models/Product");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Category.findAll({ include: [Product] });
      res
        .status(200)
        .json({ data: result, message: "Data berhasil ditampilkan" });
    } catch (err) {
      res.json({ message: err.message });
    }
  },
  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const category = await Category.findAll({
        where: { id: id },
      });
      if (!category || category.length === 0) {
        res.status(400).json({ message: "Data Category tidak ditemukan" });
      } else {
        const result = await Category.findAll({
          where: { id: id },
          include: [{ model: Product }],
        });
        if (!result || !result[0].products[0]) {
          res
            .status(400)
            .json({ data: category, message: "Data Product tidak ditemukan" });
        } else {
          res.json({ data: result, message: "Data berhasil ditemukan" });
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createCategory: async (req, res) => {
    try {
      const result = await Category.create(req.body);
      res.json({ data: result, message: "Data berhasil ditambahkan" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Category.destroy({
        where: { id: id },
      });
      res.status(200).json({ message: "Data berhasil dihapus" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
