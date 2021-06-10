var mongoose = require('mongoose');
Schema = mongoose.Schema;
   
var musicAlbumSchema = new Schema({
    albumName:{
        type:String,
    },
    dateOfRelease:{
        type:Date
    },
    genre:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    musicians: [
         { type: mongoose.Schema.Types.ObjectId,
          ref: "musician"
         }
      ]

})

module.exports = mongoose.model('musicAlbum',musicAlbumSchema)