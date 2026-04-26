const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/feedbackDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Feedback = require("./models/Feedback");

// Routes

app.get("/feedback", async (req, res) => {
  const data = await Feedback.find();
  res.json(data);
});


app.post("/feedback", async (req, res) => {
  const { name, subject, message } = req.body;

  const newFeedback = new Feedback({ name, subject, message });
  await newFeedback.save();

  res.json({ message: "Feedback added" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});