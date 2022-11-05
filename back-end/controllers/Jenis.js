import Jenis from '../models/JenisModel.js'


//getJenis
export const getJenis = async (req, res) => {
  try {
    const response = await Jenis.findAll({
      attributes: ['kode', 'jenis'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//getJenisById
export const getJenisById = async (req, res) => {
    try {
        const response = await Jenis.findOne({
          attributes: ['kode', 'jenis'],
          where: {
            kode: req.params.id,
          },
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
    };

//createJenis
export const createJenis = async (req, res) => {
    const { kode, jenis } = req.body;
    try {
      await Jenis.create({
        kode: kode,
        jenis: jenis,
      });
      res.status(201).json({ msg: 'Buat jenis berhasil' });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
};

//updateJenis
export const updateJenis = async (req, res) => {
  const jenis = await Jenis.findOne({
    where: {
      kode: req.params.id,
    },
  });
  try {
    await Jenis.update(
      {
        kode: kode,
        jenis: jenis
      },
      {
        where: {
          id: jenis.id,
        },
      }
    );
    res.status(200).json({ msg: 'Update Jenis Berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

//deleteJenis
export const deleteJenis = async (req, res) => {
    const jenis = await Jenis.findOne({
        where: {
          uuid: req.params.id,
        },
      });
      if (!jenis) return res.status(404).json({ msg: 'Jenis tidak ditemukan' });
    
      try {
        await Jenis.destroy({
          where: {
            id: jenis.id,
          },
        });
        res.status(200).json({ msg: 'Delete Jenis Berhasil' });
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
}

