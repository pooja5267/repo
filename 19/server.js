const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Model
const Task = require("./models/Task");


app.post("/add-task", async (req, res) => {
    const task = new Task({ title: req.body.title });
    await task.save();
    res.send("Task Added");
});

app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});


app.put("/complete-task/:id", async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, { completed: true });
    res.send("Task Completed");
});

// SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});