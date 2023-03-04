const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobNo: Number,
  password: String,
});

module.exports = mongoose.model("lists", userSchema);
