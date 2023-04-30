
const Sequelize = require('sequelize');

const sequelize = new Sequelize('simsdb', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

sequelize
  .sync({ force: false }) // Удаляем таблицу и создаем ее заново
  .then(() => console.log('Таблица пользователей создана'))
  .catch((err) => console.log(err));
  
module.exports = User;