const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: String,
    item: String,        // Bike / Laptop / Camera
    duration: String,    // e.g., 2 days
    contact: String
});

module.exports = mongoose.model("Booking", bookingSchema);