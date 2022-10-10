const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name: {
        type:String,
      
    },
    location : {
        type:String,
        
    },
    likes :{
        type:Number,
        default:40
    },
    description : {
        type:String,
        
    },
    postImage : {
        type:String,     
    },
    date:{
        type:String,     
    }
})

const  postModal = mongoose.model("post",postSchema)

module.exports = postModal;