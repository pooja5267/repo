const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/rentalDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Model
const Booking = require("./models/Booking");

// 📋 AVAILABLE ITEMS API

// ➕ ADD BOOKING
app.post("/add-booking", async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save();
    res.send("Booking Successful");
});

// 📥 GET BOOKINGS
app.get("/bookings", async (req, res) => {
    const data = await Booking.find();
    res.json(data);
});

// Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});