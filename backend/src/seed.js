const sequelize = require("./config/db");
const Artists = require("./models/Artist");
const Event = require("./models/Event");

const seedDatabase = async () => {
  try {
    // connect & recreate tables
    await sequelize.sync({ force: true });

    // Artists
    await Artists.bulkCreate([
      {
        name: "Hamid El Kasri",
        image: "",
        description: "Famous Gnawa artist from Morocco",
        schedule: "20:00 - 21:00",
      },
      {
        name: "Mustapha Baqbou",
        image: "",
        description: "Renowned Gnawa singer",
        schedule: "21:15 - 22:15",
      },
      {
        name: "Hind Ennaira",
        image: "",
        description: "Talented Gnawa performer",
        schedule: "22:30 - 23:30",
      },
      {
        name: "Asmaa Hamzaoui",
        image: "",
        description: "Popular Gnawa artist",
        schedule: "23:45 - 00:45",
      },
    ]);

    //  Event
    await Event.create({
      name: "La Grande Soirée Gnawa",
      location: "Agadir, Morocco",
      date: new Date("2025-12-15 18:00:00"),
      description:
        "A cultural Gnawa night featuring the most famous Moroccan Gnawa artists.",
    });

    console.log(" Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error(" Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();

