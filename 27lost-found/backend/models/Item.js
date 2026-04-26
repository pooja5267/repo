const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  contact: String,
  type: String   // Lost or Found
});

module.exports = mongoose.model("Item", itemSchema);