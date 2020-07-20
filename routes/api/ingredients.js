var express = require('express');
var router = express.Router();
const db = require('../../database');

router.get('/', (req, res) => {
  console.log('get');
  db.select()
    .from('ingredients')
    .orderBy('id')
    .then((data) => res.send(data));
});

router.post('/', (req, res) => {
  console.log('post');
  db.insert(req.body)
    .returning('*')
    .into('ingredients')
    .then((data) => {
      res.send(data);
    });
});

module.exports = router;
