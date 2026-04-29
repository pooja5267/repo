const mongoose = require ("mongoose");

const feedbackschema  = new mongoose.Schema({
    name: String,
    subject : String,
    feedback : String
});

module.exports = mongoose.model("feedback", feedbackschema);