const { Artist } = require("../models");

// Get all artists
exports.getArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.status(200).json({
      success: true,
      data: artists,
    });
  } catch (error) {
    console.log("Error fetching artists:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching artists",
      error: error.message,
    });
  }
};

// Get artist by id
exports.getArtistById = async (req, res) => {
  try {
    const artistId = req.params.id;
    const artist = await Artist.findByPk(artistId);

    if (!artist) {
      return res.status(404).json({
        success: false,
        message: "Artist not found",
      });
    }

    res.status(200).json({
      success: true,
      data: artist,
    });
  } catch (error) {
    console.log("Error fetching artist:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching artist",
      error: error.message,
    });
  }
};
