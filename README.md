# JukeBox Application


  JukeBox application is intended to maintain a catalog of music albums by various musicians.


## Dependency

- Express
- Mongoose
- Config
- Chai
- Chai-http

## Installation

JukeBox requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/ashish233/JukeBox_App.git
cd JukeBox_App
npm i
npm start
```

## REST API Details

-  Add musician
 api : http://localhost:3000/musician
 method : POST 
 require parameters : {name((Mandatory)), musicianType}


-  Add music Ablums 
 api : http://localhost:3000/musicAlbum
 method : POST 
 require body parameters : {albumName(Mandatory), dateOfRelease(Mandatory), genre, price, description, musicians}

- API to retrieve the list of Music albums for a specified musician sorted by Price in
ascending order
 api :  http://localhost:3000/getInfoByMuscian
 method : GET
 require query parameters : multiple musicianId with comma separated values

- API to retrieve the list of Musicians for a specified music album sorted by musician's name in ascending order.
 api :  http://localhost:3000/getInfoByMusicAlbum
 method : GET
 require query parameters : multiple musicAlbumId with comma separated values





