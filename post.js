const express = require("express")

const postModal = require("./model")
const router = express.Router()
router.get("/users",(req,res)=>{
    postModal.find().then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })})

router.post("/user",(req,res)=>{
     postModal.create({  name: req.body.name,
        location: req.body.location,
        likes:req.body.likes,
        description: req.body.description,
        postImage:req.body.postImage,
        date:req.body.date
        }).then((data)=>{
            res.json(data)
        })
})
module.exports = router;