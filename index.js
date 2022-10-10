const express = require("express")
const postController = require("./post")
const mongoose = require("mongoose")
const cors=require("cors")
const app = express()

app.listen(process.env.PORT  || 4000,()=>{
    console.log("server started at post:4000")
})
app.use(express.json());
app.use(express.urlencoded(false));
app.use(cors())
// const DB ="mongodb://localhost/post"
const DB="mongodb+srv://root:root-password@cluster0.cuoye2u.mongodb.net/test"
mongoose.connect(DB).then(()=>{
    console.log("Connection Success")
}).catch((err)=>{
    console.log(err.massage)
})

app.get("/",(req,res)=>{
    res.send("Welcome to instaclone app : server side code")
})

// middleware
app.use("/post",postController)