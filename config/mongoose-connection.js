const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/scatch")
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((error) => console.error("Error connecting to database:", error));


module.exports = mongoose.connection;