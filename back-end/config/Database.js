import { Sequelize } from 'sequelize';
const db = new Sequelize('point_of_sales2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
