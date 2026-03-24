const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({

sender:String,

receiver:String,

message:String,

createdAt:Date

})

module.exports = mongoose.model("Message",MessageSchema)
