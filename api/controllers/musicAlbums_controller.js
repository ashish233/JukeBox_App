const musicAlbumsModel = require("../../models/musicAlbums");

/*
 4. API to retrieve the list of Music albums for a specified musician sorted by Price in
  ascending order (i.e Lowest first)
*/

// module.exports.index = async (req, res) => {
//   try {
//      const musicianId = req.query.musicianId; 
//     var getMusicanData = await musicAlbumsModel.find({musicians:{$in:musicianId}}).sort({price:1}).populate('musicians');

//     if (getMusicanData) {
//       res.json({ data: getMusicanData, message: "Music Album Information" });
//     }
//   } catch (e) {
//       console.log(e);
//     res.json({ message: "something went wrong", status: false });
//   }
// }


// 5. API to retrieve the list of musicians for a specified music album sorted by musician's
// Name in ascending order.

module.exports.index = async (req, res) => {
    try {
       const musicAlblumId = req.query.musicAlblumId; 
       console.log("musicAlblumId")
       //_id:{$in:musicAlblumId}
      var getMusicanData = await musicAlbumsModel.find({}).populate({path:'musicians',options:{ sort:{'musicians.name':-1}}});
        console.log("getMusicanData",getMusicanData)
      if (getMusicanData) {
        res.json({ data: getMusicanData, message: "Music Album Information" });
      }
    } catch (e) {
        console.log(e);
      res.json({ message: "something went wrong", status: false });
    }
  }



module.exports.create = async (req, res) => {
  try {
    console.log(req.body);
    var { albumName,dateOfRelease,genre,price,description,musicians} = req.body;
    
    if(albumName.length < 5) {
      return res.json({
         status:false,
         message: "album name should be greater than 5 char" });
    }
    
    if(dateOfRelease && (dateOfRelease==undefined || dateOfRelease==null || dateOfRelease=="")){
        return res.json({
            status:false,
            message: "release date is missing" });
    }

    if (price && (price<100 || price>1000)) {
        return res.json({
           status:false,
           message: "price should be in between 100 to 1000" });
      }

    if(musicians && musicians.length==0){
        return res.json({
            status:false,
            message: "pls pass the musician information" });
    }


    var obj = new musicAlbumsModel({
    albumName,dateOfRelease,genre,price,description,musicians
    });
    console.log(obj);
    obj.save((err, result) => {
        console.log(err)
      res.json({
        status: true,
        data: result,
        message: "Music Album data added",
      });
    });
  } catch (e) {
    console.log(e);
    res.json({ message: "something went wrong", status: false });
  }
}


module.exports.update = async (req,res)=>{
    try{
         var { albumName,dateOfRelease,genre,price,description,musicians} = req.body;
        var musicAlblumId = req.params.musicAlblumId;
       
        if(albumName && albumName.length < 5) {
            return res.json({
               status:false,
               message: "album name should be greater than 5 char" });
          }
          
          if(dateOfRelease && (dateOfRelease==undefined || dateOfRelease==null || dateOfRelease=="")){
              return res.json({
                  status:false,
                  message: "release date is missing" });
          }
      
          if (price && (price<100 || price>1000)) {
              return res.json({
                 status:false,
                 message: "price should be in between 100 to 1000" });
            }
      
          if(musicians && musicians.length==0){
              return res.json({
                  status:false,
                  message: "pls pass the musician information" });
          }


        var updatedData = await musicAlbumsModel.updateOne({_id:musicAlblumId},{$set:req.body});
         
        if(updatedData.nModified==1){
            res.json({ status:true, message: "Music Ablum Information Updated" });
        }
        else{
            res.json({ status:false, message: "Music Ablum Information Not NUpdated" });
        }

    }
    catch(e){
        res.json({ message: "something went wrong", status: false });
    }

}