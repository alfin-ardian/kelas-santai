const express = require("express");
const router = express.Router();

const mahasiswaController = require("../controllers/mahasiswaController");

// method get
// router.get("/", (req, res) => {
//   res.send("Get list all data mahasiswa");
// });
router.get("/", mahasiswaController.getAllMahasiswa);
router.post("/", mahasiswaController.addDataMahasiswa);
router.put("/:id", mahasiswaController.updateDataMahasiswa);
router.delete("/:id", mahasiswaController.deleteDataMahasiswa);

// method post
// router.post("/", (request, res) => {
//   const { name, email } = request.body;
//   res.send(
//     `Mahasiswa dengan nama: ${name} dan email: ${email} berhasil ditambahkan`
//   );
// });

// method put
// router.put("/:id", (req, res) => {
//   const Id = req.params.id;
//   res.send(`Mahasiswa dengan id : ${Id} berhasil diupdate`);
// });

// method delete
// router.delete("/:id", (req, res) => {
//   const Id = req.params.id;
//   res.send(`Mahasiswa dengan id : ${Id} berhasil dihapus`);
// });

module.exports = router;
