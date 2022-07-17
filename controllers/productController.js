const Product = require("../models/Product");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Product.findAll();
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
      const result = await Product.findAll({ where: { id: id } });
      res.json({ data: result, message: "Data berhasil ditemukan" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const result = await Product.create(req.body);
      res.json({ data: result, message: "Data berhasil ditambahkan" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
