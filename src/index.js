const express = require("express");
const app = express();
require('dotenv').config();
let mongoose = require('mongoose');
let userModel = require('../userModule');
let cors = require('cors');
const jwt = require('jsonwebtoken');
let verifyToken = require("../auth/auth")

app.use(express.json())
app.use(cors())
mongoose.connect(`${process.env.MONGO_URL}`).then((val)=>{
    console.log("MONGODB IS CONNECTED SUCCESSFULLY")
}).catch((err)=>{
    console.log(err)
})

app.get('/site',(req,res)=>{
    return res.status(200).send('work perfectly')
})
app.post("/register", async (req, res) => {
    try {
        let data = req.body;
        if(!data){
            return res.status(400).send("please provide your details")
        }
        let insertData = await userModel.create(data);    
        let User = {
            "_id": insertData._id,
            "name": insertData.name,
            "email": insertData.email
        }
        jwt.sign(User,`${process.env.JWT_KEY}`,{expiresIn:"2h"},(err,token)=>{

            if(err){
                return res.status(400).send({result:"SOME INTERNAL SERVER ERROR OCCURRED, PLEASE TRY AFTER SOME TIME "})
            }
            return res.status(200).send({User,auth : token})

        })
    }
    catch (err) {
        return res.status(500).send(err)
    }
})

app.post("/login",async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email) {
            return res.status(400).send("please provide email address")
        }
        if (!password) {
            return res.status(400).send("please provide password")
        }
        let User = await userModel.findOne(req.body).select("-password");
        if (User) {
            jwt.sign({User},`${process.env.JWT_KEY}`,{expiresIn:"2h"},(err,token)=>{

                if(err){
                    return res.status(400).send({result:"SOME INTERNAL SERVER ERROR OCCURRED, PLEASE TRY AFTER SOME TIME "})
                }
                return res.status(200).send({User,auth : token})

            })
            
        }
        else {
            return res.status(404).send({result:"user not found"})
        }
    }
    catch (err) {
        return res.status(500).send(err)
    }

})

app.put("/user/:id",verifyToken, async (req, resp) => {
    try{
    let result = await userModel.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    return resp.status(200).send(result)
    }
    catch(err){
        return resp.status(500).send({status:false,message:err})
    }
});



app.listen(process.env.PORT,(err,val)=>{
    if(!err){
        console.log(`SERVER RUN ON PORT NO ${process.env.PORT}`)
    }
})