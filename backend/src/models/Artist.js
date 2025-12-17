const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Artist = sequelize.define("Artist", {
  name: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  schedule: { type: DataTypes.TEXT },
});

module.exports = Artist;
