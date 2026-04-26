const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: String,
    itemName: String,
    duration: String
});


module.exports = mongoose.model("Booking", bookingSchema);