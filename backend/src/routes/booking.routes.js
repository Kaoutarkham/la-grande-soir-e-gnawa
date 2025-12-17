const express = require("express");
const router = express.Router();
const {
  getBookingByCode,
  getBookingsByEmail,
  createBooking,
} = require("../controllers/booking.controller");

router.get("/:code", getBookingByCode);
router.get("/email/:email", getBookingsByEmail);
router.post("/", createBooking);

module.exports = router;
