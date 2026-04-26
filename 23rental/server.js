const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/rentalDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Item = require("./models/Item");
const Booking = require("./models/Booking");

async function seedItems() {
    const count = await Item.countDocuments();
    if (count === 0) {
        await Item.insertMany([
            { name: "Bike", category: "Vehicle" },
            { name: "Laptop", category: "Electronics" },
            { name: "Camera", category: "Electronics" }
        ]);
        console.log("Items Seeded");
    }
}
seedItems();

app.get("/", async (req, res) => {
    const items = await Item.find();
    res.render("index", { items });
});

app.get("/book/:id", async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render("book", { item });
});

app.post("/book", async (req, res) => {
    const { name, itemName, duration } = req.body;

    const booking = new Booking({
        name,
        itemName,
        duration
    });

    await booking.save();
    res.redirect("/bookings");
});

app.get("/bookings", async (req, res) => {
    const bookings = await Booking.find();
    res.render("bookings", { bookings });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});