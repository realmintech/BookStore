const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bookStore");
    console.log("Mongodb is connected successfully");
  } catch (error) {
    console.log("Mongodb connection failed");
    process.exit(1);
  }
};

module.exports = connectDB;
