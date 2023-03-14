const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req , res) => {
    res.send(`Hello world from the server router js`);
});


//using promises
// router.post('/register', (req, res)=>{
//     const {name,email,phone,work,password,cpassword}=req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({error: "Please fill the field properly"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }

//         const user = new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"});
//         }).catch((err)=>res.status(500).json({error:"failed to register"}));
//     }).catch(err=>{console.log(err);});
//     //console.log(name);
//     //console.log(email);
//     //res.json({ message: req.body});
//     //res.send("mera register page");
// });

//Async-await
router.post('/register', async (req, res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "Please fill the field properly"});
    }
    try {
       const userExist = await User.findOne({email:email});
    if(userExist){
        return res.status(422).json({error: "Email already exist"});
    }else if(password!=cpassword) {
        return res.status(422).json({error: "password are not matching"});
    }else{
        const user = new User({name,email,phone,work,password,cpassword});

        await user.save();
        res.status(201).json({message:"user registered successfully"});
    }
  
    } catch (err) {
    console.log(err);
    }
});

//login route

router.post('/signin',async (req,res)=>{
    // console.log(req.body);
    // res.json({message:"awesome"})
    try {
        let token;
        const {email,password}=req.body;
        if(!email || !password) {
            return res.status(400).json({error:"Plz filled the data"})
        }

        const userLogin =await User.findOne({email:email});
        if(userLogin) {
            const isMatch = await bcrypt.compare(password,userLogin.password);

            token = await userLogin.generateAuthToken();
            //console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+2589200000),
                httpOnly:true
            });
            if(!isMatch){
              res.status(400).json({error:"Invalid credentials"})
        } else {
            res.json({message: "user signin successfully"});
        }
    } else {
        res.status(400).json({error:"Invalid credentials"});
    }
    } catch(err) {
        console.log(err);
    }
});

//about page
router.get('/about', authenticate, (req,res)=>{
    console.log('Hello my about');
    res.send(req.rootUser);
});

module.exports = router;