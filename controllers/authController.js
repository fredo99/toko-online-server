const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/index");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    const check_user = await User.findOne({ where: { email: email } });

    if (check_user) {
      const verif_password = await bcrypt.compare(
        password,
        check_user.password
      );
      if (verif_password) {
        const token = jwt.sign(
          {
            User: {
              id: check_user.id,
              username: check_user.username,
              email: check_user.email,
              name: check_user.name,
              role: check_user.role,
              avatar: check_user.avatar,
            },
          },
          config.jwtKey,
          { expiresIn: "1d" }
        );
        res.status(200).json({
          data: token,
          error: false,
          message: "Login berhasil",
        });
      } else {
        res.status(400).json({
          error: true,
          message: "Password Anda salah",
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: "Email Anda Tidak Terdaftar",
      });
    }
  },
};
