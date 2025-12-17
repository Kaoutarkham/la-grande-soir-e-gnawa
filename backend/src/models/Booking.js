const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Booking = sequelize.define("Booking", {
  code: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Booking;
