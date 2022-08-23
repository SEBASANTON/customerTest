const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Client = db.define('client', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
  fname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
module.exports = { Client };
