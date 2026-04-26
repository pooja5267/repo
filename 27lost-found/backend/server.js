const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/lostFoundDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Item = require("./models/Item");

app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/items", async (req, res) => {
  const { name, description, location, contact, type } = req.body;

  const newItem = new Item({
    name,
    description,
    location,
    contact,
    type
  });

  await newItem.save();
  res.json({ message: "Item added" });
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});