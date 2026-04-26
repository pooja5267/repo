const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/complaintDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Complaint = require("./models/Complaint");

// Routes
app.get("/complaints", async (req, res) => {
  const data = await Complaint.find();
  res.json(data);
});

app.post("/complaints", async (req, res) => {
  const { name, issue, category } = req.body;

  const newComplaint = new Complaint({
    name,
    issue,
    category
  });

  await newComplaint.save();
  res.json({ message: "Complaint submitted" });
});

app.put("/complaints/:id", async (req, res) => {
  await Complaint.findByIdAndUpdate(req.params.id, {
    status: "Resolved"
  });
  res.json({ message: "Updated" });
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});