const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/vehicleDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Model
const Vehicle = require("./models/Vehicle");

// ➕ Add Vehicle
app.post("/add-vehicle", async (req, res) => {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.send("Vehicle Added");
});

// 📥 Get Vehicles
app.get("/vehicles", async (req, res) => {
    const data = await Vehicle.find();
    res.json(data);
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});