const config = require('config');
const express = require('express');
const app = express();

const mongoose = require('./initializers/mongo_connection')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


require('./config/routes')(app);


app.use(function(err, req, res, next) {
    console.error('error handeler:', err);
    if (err) {
      res.status(err.status || 500).json({ message:err.message || "", error: err.errors || err });
    } else {
      res.status(500).json({ message: 'something went wrong' });
    }
  });

global.__dirname = __dirname;
app.listen(process.env.PORT || config.port, () => {
  console.log(
    'optcentral node app listening on port =====|    ' +
      (process.env.PORT || config.port)
  );
});

process.on('unhandledRejection', (err, p) => {
  console.log('An unhandledRejection occurred');
  console.log(`Rejected Promise: ${p}`);
  console.log(`Rejection: ${err}`);
});
