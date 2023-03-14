const dotenv = require("dotenv");
const mongoose =require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env' });
require('./db/conn');
//const User =require('./model/userSchema');

app.use(express.json());

//we link the router files to make our route easy
app.use(require('./router/auth'));

const PORT=process.env.PORT;

// mongoose.connect(DB,{
//     useNewUrlParser: true
// }).then(()=>{
//     console.log(`connection successful`);
// }).catch((err)=>console.log(`no connection`));
//DATABASE = mongodb://127.0.0.1

//Middleware
const middleware =(req,res,next)=>{
console.log('Hello my middleware');
next();
}

//middleware();

// app.get('/',(req,res)=>{
// res.send(`Hello form the server app.js`);
// });

// app.get('/About',middleware,(req,res)=>{
//     res.send(`Hello about the server`);
// });

// app.get('/signin',(req,res)=>{
//     res.send(`Hello form the server`);
// });

// app.get('/signup',(req,res)=>{
//     res.send(`Hello form the server`);
// });

// app.get('/phone',(req,res)=>{
//     res.send(`Hello form the server`);
// });

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
});
