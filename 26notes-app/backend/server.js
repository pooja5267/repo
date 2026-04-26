const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/notesDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Note = require("./models/Note");

app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post("/notes", async (req, res) => {
  const { subject, title, link, description } = req.body;

  const newNote = new Note({
    subject,
    title,
    link,
    description
  });

  await newNote.save();
  res.json({ message: "Note added" });
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});