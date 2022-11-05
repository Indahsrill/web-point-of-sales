import Products from '../models/ProductModel.js';

//getProducts
export const getProducts = async(req, res) => {
  try {
    const response = await Products.findAll({
      attributes: ['kode', 'kategoriId', 'nama', 'harga', 'stok'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//getProductById
export const getProductById = async(req, res) => {
  try {
    const response = await Products.findOne({
      attributes: ['kode', 'kategoriId', 'nama', 'harga', 'stok' ],
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//createProduct
export const createProduct = async (req, res) => {
  const {kode, kategoriId, nama, harga, stok } = req.body;
  try {
    await Products.create({
      kode: kode,
      kategoriId: kategoriId,
      nama: nama,
      harga: harga,
      stok: stok,
    });
    res.status(201).json({ msg: 'create produk berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//updateProduct
export const updateProduct = (req, res) => {};

//deleteProduct
export const deleteProduct = async (req, res) => {
  const product = await Products.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: 'Produk tidak ditemukan' });

  try {
    await Product.destroy({
      where: {
        id: product.id,
      },
    });
    res.status(200).json({ msg: 'Delete Produk Berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
