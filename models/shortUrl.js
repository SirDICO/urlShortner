
const mongoose = require('mongoose')
const shortId = require('shortid')


const shortUrlSchema = new mongoose.Schema({
   full: {
    type:String,
    required: true
   },
   short:{
    type: String,
    required: true,
    default: shortId.generate
   },
   customName:{
      type:String,
      unique:true,
      minLength:4,
      maxLength:15
   },
   clicks: {
   type:Number,
   required:true,
   default: 0
   }

},{timestamps: true});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);