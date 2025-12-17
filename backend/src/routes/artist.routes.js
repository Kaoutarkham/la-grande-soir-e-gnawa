const express = require("express");
const router = express.Router();
const {
  getArtists,
  getArtistById,
} = require("../controllers/artist.controller");

router.get("/", getArtists);
router.get("/:id", getArtistById);

module.exports = router;
