const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://woody:nq07LZLZiIt7mfJw@backend.6fvc5gt.mongodb.net/wooody",
  );

  console.log("DB connected Succesfully");
}

module.exports = connectDB;
