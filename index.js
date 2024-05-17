const express = require("express");
const mongoose = require("mongoose");

const app = express();

// konek database
mongoose.connect("mongodb://localhost/kelas_santai", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Koneks database error: " + err);
});

db.once("open", () => {
  console.log("Terhubung ke database");
});

// untuk body parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./src/routes/index");
const mahasiswaRouter = require("./src/routes/mahasiswa");

app.use("/", indexRouter);
app.use("/mahasiswas", mahasiswaRouter);

app.listen(3000, () => {
  console.log("Server berjalan di port 3000 / http://localhost:3000");
});
