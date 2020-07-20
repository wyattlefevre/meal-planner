const express = require('express');
const bodyParser = require('body-parser');
const apiRoute = require('./routes/api');

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/api', apiRoute);

console.log('listening on port 3000');
app.listen('3000');
