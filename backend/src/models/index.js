const sequelize = require("../config/db");
const Artist = require("./Artist");
const Booking = require("./Booking");
const Event = require("./Event");

// Define relationships here
Booking.belongsTo(Artist, { foreignKey: "artist_id" });
Artist.hasMany(Booking, { foreignKey: "artist_id" });

// Export all models
module.exports = {
  sequelize,
  Artist,
  Booking,
  Event,
};
