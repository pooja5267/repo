const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


const Student = require("./models/Student");

app.post("/add-student", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send("Student Added Successfully");
});


app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});