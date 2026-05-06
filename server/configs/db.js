const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("DataBase Connected");
  } catch (error) {
    console.log("Error connecting DB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
