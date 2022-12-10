const mongooose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongooose.connect(db, {
      useNewURLParser: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    //exit process with faliure
    process.exit(1);
  }
};

module.exports = connectDB;
