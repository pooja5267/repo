const mongoose = require("mongoose");

// Step 1: Define Schema
const studentSchema = new mongoose.Schema({
    name: String,
    department: String,
    year: String
});

// Step 2: Create Model
module.exports = mongoose.model("Student", studentSchema);