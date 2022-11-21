const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

module.exports = connectDB;