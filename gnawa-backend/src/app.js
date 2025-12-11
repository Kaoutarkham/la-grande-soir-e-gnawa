import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import artistRoutes from "./routes/artistRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/artists", artistRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/event", eventRoutes);

export default app;
