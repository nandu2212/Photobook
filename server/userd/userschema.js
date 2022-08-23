const mongoose=require("mongoose");

const postschema=new mongoose.Schema({
Name:{
    type:String,
    required:true},

location:{
type:String,
required:true
},
description:String,
postimage:{
    type:String,
    required:true
},
Date:String

})
const postalmodal=mongoose.model("postdata",postschema)
module.exports= postalmodal;