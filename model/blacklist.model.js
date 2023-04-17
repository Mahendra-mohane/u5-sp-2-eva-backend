const mongoose=require("mongoose")
const blacklistSchema=mongoose.Schema({
    token:String
})
const BlacklistModel=mongoose.model("black",blacklistSchema)
module.exports=BlacklistModel