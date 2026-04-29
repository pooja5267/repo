const mongoose = require("mongoose");
 const contactschema = new mongoose.Schema({
    name : String,
    phone: String ,
    email : String
 });
  module.exports = mongoose.model("Contact",contactschema);