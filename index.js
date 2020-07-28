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

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
