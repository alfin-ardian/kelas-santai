const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nim: {
    type: String,
    required: true,
    unique: true,
  },
  tanggal_lahir: {
    type: Date,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
});

const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);

module.exports = Mahasiswa;
