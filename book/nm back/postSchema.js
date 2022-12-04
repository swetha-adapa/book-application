const mongoose =require("mongoose")
const postSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    author:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    }
    
})
const postModal=mongoose.model("posts",postSchema)
module.exports=postModal