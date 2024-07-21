const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
 
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("User", userSchema);
