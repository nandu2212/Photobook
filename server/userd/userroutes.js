const express = require("express");
const postalmodal=require("../userd/userschema");

const app=express();



app.post("/",(req,res)=>{
console.log(req.body)

    const DateStr = new Date();
    const day = DateStr.getDate();
    const month = DateStr.getMonth();
    const year = DateStr.getFullYear();
    const date = `${day}/${month}/${year}`;

postalmodal.create({Date:date,Name:req.body.Name,location:req.body.location,description:req.body.description,postimage:req.body.basefile}).then(()=>{
    res.status(201).send("post added successfully")
}).catch((err)=>{
    res.status(401).send(err)
})
})

app.get("/add",(req,res)=>{
    postalmodal.find().then((userdata)=>{
        res.send(userdata)
    })
})
module.exports=app;