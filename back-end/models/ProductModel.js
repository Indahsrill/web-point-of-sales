import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Kategori from '../models/KategoriModel.js';


const { DataTypes } = Sequelize;

const Products = db.define(
  'Product',
  {
    kode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    kategoriId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Kategori.hasMany(Products);
Products.belongsTo(Kategori, { foreignKey: 'kategoriId' });

export default Products;
