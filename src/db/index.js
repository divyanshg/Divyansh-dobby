const mongoose = require("mongoose");
const atob = require("atob");

const connectDB = async () => {
  await mongoose.connect(atob(process.env.MONGO_URI), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

module.exports = connectDB;
