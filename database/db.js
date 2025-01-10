const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://adesinamariam7:O3po07VIlxd1nW6D@cluster0.nxyd7.mongodb.net/"
    );
    console.log("Mongodb is connected successfully");
  } catch (error) {
    console.log("Mongodb connection failed");
    process.exit(1);
  }
};

module.exports = connectDB;
