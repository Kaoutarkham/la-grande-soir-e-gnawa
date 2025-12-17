const { Booking, Artist } = require("../models");

exports.createBooking = async (req, res) => {
  try {
    const { email, artist_id } = req.body;
    const code = "BK" + Math.floor(Math.random() * 1000000);
    const booking = await Booking.create({ email, artist_id, code });

    const bookingWithArtist = await Booking.findByPk(booking.id, {
      include: Artist,
    });

    res.status(201).json(bookingWithArtist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookingByCode = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      where: { code: req.params.code },
      include: Artist,
    });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookingsByEmail = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { email: req.params.email },
      include: Artist,
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
