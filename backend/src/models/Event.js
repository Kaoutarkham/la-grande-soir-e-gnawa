const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Event = sequelize.define("Event", {
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING },
  date: { type: DataTypes.DATE },
  description: { type: DataTypes.TEXT },
});

module.exports = Event;
