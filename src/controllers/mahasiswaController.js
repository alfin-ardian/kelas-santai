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

// post data mahasiswa
const addDataMahasiswa = async (req, res) => {
  const mahasiswa = new Mahasiswa({
    name: req.body.name,
    nim: req.body.nim,
    tanggal_lahir: req.body.tanggal_lahir,
    email: req.body.email,
  });

  try{
    const newMahasiswa = await mahasiswa.save();
    res.status(201).json({ message: 'Berhasil tambah data mahasiswa', data: newMahasiswa});
  }catch (e) {
    res.status(500).json({ message: e.message });
  };
};

// Update data mahasiswa
const updateDataMahasiswa = async (req, res) => {
  try{
    // 1. cari data mahasiswa di database
    const mahasiswa = await Mahasiswa.findById(req.params.id);

    if(!mahasiswa) return res.status(404).json({message: 'data mahasiswa tidak ditemukan'});

    
    if(req.body.name != null){
      mahasiswa.name = req.body.name;
    }

    if(req.body.nim != null){
      mahasiswa.nim = req.body.nim;
    }

    if(req.body.tanggal_lahir != null){
      mahasiswa.tanggal_lahir = req.body.tanggal_lahir;
    }
    if(req.body.email != null){
      mahasiswa.email = req.body.email;
    }

    const updateDataMahasiswa = await mahasiswa.save();
    res.json({message: 'Berhasil update data', data: updateDataMahasiswa});

  }catch (e) {
    res.status(404).json({message: e.message});
  };
};

// delete data mahasiswa
const deleteDataMahasiswa = async (req, res) => {
  try{
    // 1. cari data mahasiswa di database
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if(!mahasiswa) return res.status(404).json({message: 'Data mahasiswa tidak ditemukan'});

    await Mahasiswa.deleteOne({_id: req.params.id});
    res.json({message: 'Data mahasiswa berhasil dihapus'});
  }catch (e) {
    res.status(500).json({message: e.message});
  }
};

module.exports = {
  getAllMahasiswa,
  addDataMahasiswa,
  updateDataMahasiswa,
  deleteDataMahasiswa
};
