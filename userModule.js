const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    firstName:{
        type:String,
        
    },
    lastName:{
        type:String,
     
    },
    address:{
        type:String,
        
    },
    email:{
        type:String,
        
        unique:true

    },
    mobile:{
        type :String,
        unique:true

    },
    DOB:{
        type:String,
       
    },
    password:{
        type:String,
       
    }



},{timestamps:true})

module.exports = mongoose.model('User',userModel)