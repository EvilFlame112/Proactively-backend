const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Booking = sequelize.define('Booking', {
    date: { type: DataTypes.DATEONLY, allowNull: false },
    timeSlot: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Booking;
