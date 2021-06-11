var mongoose = require('mongoose');
Schema = mongoose.Schema;
   
var musicAlbumSchema = new Schema({
    albumName:{
        type:String,
        required: true
    },
    dateOfRelease:{
        type:Date,
        required: true
    },
    genre:{
        type:String
    },
    price:{
        type:Number,
        required: true
    },
    description:{
        type:String
    },
    musicians: [
         { type: mongoose.Schema.Types.ObjectId,
          ref: "musician",
          required: true
         }
      ]

})

module.exports = mongoose.model('musicAlbum',musicAlbumSchema)