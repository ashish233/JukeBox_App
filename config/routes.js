  const musicAlbumsController = require('../api/controllers/musicAlbums_controller');
  const musiciansController = require('../api/controllers/musicians_controller');

module.exports = function(app) {

// musician api's
 app.post('/musician',musiciansController.create);   
 app.get('/musician',musiciansController.index);   
 app.get('/musician/:musicianId',musiciansController.show)
 app.put('/musician/:musicianId',musiciansController.update)

// music ablum api's

app.post('/musicAlbum',musicAlbumsController.create);   
app.get('/getInfoByMuscian',musicAlbumsController.getInfoByMuscian);   
app.get('/getInfoByMusicAlbum',musicAlbumsController.getInfoByMusicAlbum);   


 
}