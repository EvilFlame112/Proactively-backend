const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Speaker = sequelize.define('Speaker', {
    expertise: { type: DataTypes.STRING, allowNull: false },
    pricePerSession: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = Speaker;
