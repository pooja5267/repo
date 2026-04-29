const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");

const app=express();
app.use(cors());

app.use(express.json());
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/feedbackDB")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

///models
const Feedback = require("./models/feedback");

app.post("/add-feedback", async(req,res)=>{
    const data = new Feedback(req.body);
    await data.save();
    res.send("Feedback Added Successfully");
});

app.get("/feedbacks" , async(req,res)=>{
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
});

app.listen(3000,()=>
{
    console.log("Server running on http://localhost:3000");
})