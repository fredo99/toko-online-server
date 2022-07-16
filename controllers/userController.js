const User = require("../models/User");
const db = require("../config/database");
const { QueryTypes } = require("sequelize");

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
        const result = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
        });
      }
      if (!result) {
        res.json({ message: "Data gagal ditambahkan" });
      }
      res.json({ data: result, message: "Data berhasil ditambahkan" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
