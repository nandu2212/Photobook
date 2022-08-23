const express=require("express");
const mongoose=require("mongoose")
const post=require("./userd/userroutes")
const cors=require("cors")
// const multer = require("multer")();


const app=express()
app.listen(process.env.PORT ||5004,(err)=>{
    if(!err){
        console.log("server started")
    }
})

app.use(express.json({limit:'30mb'}));
app.use(express.urlencoded({limit:"30mb",extended:false}))
// app.use(multer.array());
app.use(cors());


//database connection
const url="mongodb+srv://insta:insta@instagram.fcb6e.mongodb.net/instaclone?retryWrites=true&w=majority"
mongoose.connect(url,()=> {
    console.log("Connected to db")
}, (err)=> {
    console.log(err);
});

app.get("/",(req,res)=>{
    res.send("base route")
})

//middle ware
app.use("/post",post)