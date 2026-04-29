const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app= express();
app.use(cors());
app.use(express.json());

app.use(express.static("public"));
mongoose.connect("mongodb://127.0.0.1:27017/contactDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Contact = require("./models/Contacts");
app.post("/add-contact", async (req , res)=>{
    const contact = new Contact({
        name : req.body.name,
        phone : req.body.phone, 
        email : req.body.email
    });
    await contact.save();
    res.send("Contact Added");

});

app.get("/contacts", async(req ,res)=>{
    const contacts = await Contact.find();
    res.json(contacts);
});

app.listen(3000,()=>{
    console.log("Server running on http://Localhost:3000");
    
});
