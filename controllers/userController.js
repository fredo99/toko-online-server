const User = require("../models/User");
const { QueryTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await User.findAll();
      res.json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await User.findAll({ where: { id: id } });
      res.json({ data: result, message: "Data berhasil ditemukan" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const user = await User.findAll({
        where: {
          email: req.body.email,
        },
      });
      if (user.length > 0) {
        res.json({ message: "Email sudah terdaftar" });
      } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const result = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          role: req.body.role,
        });
      }
      if (result) {
        res.json({ data: result, message: "Data berhasil ditambahkan" });
      } else {
        res.json({ message: "Data gagal ditambahkan" });
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
