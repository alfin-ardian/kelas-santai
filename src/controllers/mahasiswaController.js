const Mahasiswa = require("../models/mahasiswa");

// get all data
const getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAllMahasiswa,
};
