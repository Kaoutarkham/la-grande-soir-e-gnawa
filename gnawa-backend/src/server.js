import app from "./app.js";
import sequelize from "./config/database.js";

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("DB sync error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
