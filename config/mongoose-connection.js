const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(() => {
    dbgr("Connected to database successfully");
  })
  .catch((error) => dbgr("Error connecting to database:", error));


module.exports = mongoose.connection;