const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Selamat datang di platform kelas santai MERN pertemuan 2!");
});

module.exports = router;
