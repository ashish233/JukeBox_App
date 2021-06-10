const musicinasModel = require("../../models/Musicians");

module.exports.index = async (req, res) => {
  try {
    var getMusicansData = await musicinasModel.find({});

    if (getMusicansData) {
      res.json({ data: getMusicansData, message: "Musician Information" });
    }
  } catch (e) {
    res.json({ message: "something went wrong", status: false });
  }
}

module.exports.show = async (req, res) => {
  try {
    var musicianId = req.params.musicianId;
    var getMusicansData = await musicinasModel.findOne({_id:musicianId});

    if (getMusicansData) {
      res.json({ data: getMusicansData, message: "Musician Information" });
    }
  } catch (e) {
    res.json({ message: "something went wrong", status: false });
  }
}

module.exports.create = async (req, res) => {
  try {
    console.log(req.body);
    var { name, musicianType } = req.body;
    if (name && name.length < 3) {
      return res.json({
         status:false,
         message: "name should be greater than 3 char" });
    }

    var obj = new musicinasModel({
      name,
      musicianType,
    });

    obj.save((err, result) => {
      res.json({
        status: true,
        data: result,
        message: "Musician data added",
      });
    });
  } catch (e) {
    console.log(e);
    res.json({ message: "something went wrong", status: false });
  }
}


module.exports.update = async (req,res)=>{
    try{
        var { name, musicianType } = req.body;
        var musicianId = req.params.musicianId;
        if (name && name.length < 3) {
        return res.json({
            status:false,
            message: "name should be greater than 3 char" });
        }
        var updatedData = await musicinasModel.updateOne({_id:musicianId},{$set:{name,musicianType},new:true});
         
        if(updatedData.nModified==1){
            res.json({ status:true, message: "Musician Information Updated" });
        }
        else{
            res.json({ status:false, message: "Musician Information Not NUpdated" });
        }

    }
    catch(e){
        res.json({ message: "something went wrong", status: false });
    }

}