

let mongoose = require("mongoose");
const musicAlbumsModel = require("../models/Musicians");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Musician', () => {
    beforeEach((done) => { //Before each test we empty the database
        musicAlbumsModel.remove({}, (err) => {
           done();
        });
    });

  describe('/GET Musician', () => {
      it('it should GET all the Musician', (done) => {
        chai.request(server)
            .get('/musician')
            .end((err, res) => {
                   res.should.have.status(200);
                   res.body.status.should.be.eql(true)
                   res.body.data.should.be.a('array');
                  console.log("All test passed")
              done();
            });
      });
  });


  describe('/Post Musician', () => {
    it('it should add musician details in database', (done) => {
      var musician = {
        "name":"As",
        "musicianType":"Vocalist"
      }
      chai.request(server)
          .post('/musician')
          .send(musician)
          .end((err, res) => {
            console.log(res.body)
            console.log(res.body.message)
                 res.should.have.status(200);
                 res.body.should.have.property('status');
                 res.body.status.should.be.eql(true)
            done();
          });
    });
});



});