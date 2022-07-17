var RajaOngkir = require("node-rajaongkir").Starter(
  "2db7eee041ed53144e6018d39f1b7a3d"
);

module.exports = {
  getProvinces: async (req, res) => {
    const req_province = req.query.prov;
    RajaOngkir.getProvinces()
      .then(function (result) {
        // Aksi ketika data Provinsi berhasil ditampilkan
        // const province = result.getProvince(result.results[0].province_id);
        // const province = RajaOngkir.getProvince(req_province);
        res
          .status(200)
          .json({ data: result, message: "Data berhasil ditampilkan" });
      })
      .catch(function (error) {
        // Aksi ketika error terjadi
        res.status(500).json(error.message);
      });
  },
  getProvince: async (req, res) => {
    const { id } = req.params;
    // console.log("id", id);
    RajaOngkir.getProvince(id)
      .then(function (result) {
        // Aksi ketika data Provinsi berhasil ditampilkan
        res
          .status(200)
          .json({ data: result, message: "Data berhasil ditampilkan" });
      })
      .catch(function (error) {
        // Aksi ketika error terjadi
        res.status(500).json(error.message);
      });
  },
};
