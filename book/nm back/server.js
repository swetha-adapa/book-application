const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./schema');
const postModal=require('./postSchema');
const {checkExistingUser, generatePasswordHash} = require("./utility");
const jwt = require('jsonwebtoken');

const multer=require("multer")
const bcrypt = require("bcryptjs");
const salt=10;
const cors = require('cors')
const app =express();
require('dotenv').config();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));



  

mongoose.connect('mongodb://localhost/book',()=>{
    console.log('connected to DB')
}),
    (err)=>console.log(err)


    app.listen(process.env.PORT || 3005,(err)=>{
        if(!err){
            console.log('server started at 3005')
        }
      })

    app.post("/", (req, res)=> {
        userModel.find({email: req.body.email}).then((userData)=> {
            
            if(userData.length) {
                bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                    if(val) {
                        const authToken = jwt.sign(userData[0].email, process.env.SECRET_KEY);
                        res.status(200).send({authToken});
                    } else {
                        console.log("Invalid Password")
                        res.status(400).send("Invalid Password");
                    }
                })
            } else {
                res.status(400).send("Unauthorized user");
            }
        })
    });

    app.post("/register", async (req, res)=> {
        if(await checkExistingUser(req.body.email)) {
            res.status(400).send("email exist. Please try with different email");
        } else {
            generatePasswordHash(req.body.password).then((passwordHash)=> {
                userModel.create({email: req.body.email,password: passwordHash})
                                .then(()=> { 
                                    res.status(200).send(`${req.body.email} added successfully`); 
                                }).catch((err)=> {
                                    res.status(400).send(err.message)
                })
            });
        }
        
    });







    
const postinfo={}
const storage=multer.diskStorage({
 destination: function(req,file,cb){
    cb(null,"./images/uploads")
 },
 filename: function(req,file,cb){
    postinfo.path=file.originalname
    const dateInfo=Date().split(" ")
    const date=dateInfo[2] +" "+dateInfo[1]+" "+ dateInfo[3]
    console.log(date)
    postinfo.date=date
    cb(null,file.originalname)
 }
})
const upload=multer({storage:storage})
app.post("/upload",upload.single("file"),async(req,res)=>{
    const data=new postModal({
        title:req.body.title,
        isbn:req.body.isbn,
        author:req.body.author,
        description:req.body.desc,
        date:req.body.date,
        publisher:req.body.publisher,

        path:postinfo.path,
        date:postinfo.date
    })
    const result= await data.save()
    console.log(result)
})
app.get("/posts",(req,res)=>{
    postModal.find().then((data)=>{
        res.status(200).send(data)
    })
})
