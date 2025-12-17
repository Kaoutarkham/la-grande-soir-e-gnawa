const { Event } = require("../models");

exports.getEventInfo = async (req, res) => {
  try {
    const event = await Event.findOne();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
