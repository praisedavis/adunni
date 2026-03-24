const mongoose = require("mongoose")

const ScriptSchema = new mongoose.Schema({

title:String,

author:String,

genre:String,

logline:String,

fileUrl:String,

rating:Number,

views:Number

})

module.exports = mongoose.model("Script",ScriptSchema)
