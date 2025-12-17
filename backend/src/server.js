const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");

// Routes
const artistRoutes = require("./routes/artist.routes");
const bookingRoutes = require("./routes/booking.routes");
const eventRoutes = require("./routes/event.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/artists", artistRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/event", eventRoutes);

// Test route
app.get("/", (req, res) => {
  res.send(`Server is running on http://localhost:${process.env.PORT}`);
});

// Database connection + server start
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
