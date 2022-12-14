import { Sequelize } from 'sequelize';
import db from '../config/Database.js';


const { DataTypes } = Sequelize;

const SaldoLogout = db.define(
  'SaldoLogout',
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    saldo: {
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


export default SaldoLogout;
