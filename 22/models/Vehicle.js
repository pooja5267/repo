const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    name: String,
    type: String,   
    price: String,
    details: String
});

module.exports = mongoose.model("Vehicle", vehicleSchema);