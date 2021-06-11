const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var MusicianSchema = new Schema({
   name:{
       type:String,
       required: true
   },
   musicianType:{
       type:String
   }
})


module.exports = mongoose.model('musician',MusicianSchema);