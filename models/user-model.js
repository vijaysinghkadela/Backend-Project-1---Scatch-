const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch", (error) => {
  if (error) {
    console.log("Error connecting to database:", error);
  } else {
    console.log("Connected to database successfully");
  }
});

const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("User", userSchema);
