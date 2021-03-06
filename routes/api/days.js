var express = require('express');
var router = express.Router();
const db = require('../../database');
const queries = require('../../database/queries');

router.get('/', (req, res) => {
  console.log('get');
  // db.select()
  //   .from('days')
  //   .orderBy('number')
  //   .then((data) => res.send(data));
  queries.days.getAll().then((data) => res.send(data));
});

router.post('/', (req, res) => {
  console.log('post', req.body);
  db.insert(req.body)
    .returning('*')
    .into('days')
    .then((data) => {
      res.send(data);
    });
});

router.patch('/:id', function (req, res) {
  db('days')
    .where({ id: req.params.id })
    .update(req.body)
    .returning('*')
    .then((data) => res.send(data));
  //SELECT * FROM days WHERE id = ourId
});

router.put('/:id', function (req, res) {
  db('days')
    .where({ id: req.params.id })
    .update({
      id: req.body.id,
      name: req.body.name,
      number: req.body.number,
    })
    .returning('*')
    .then((data) => res.send(data));
  //SELECT * FROM days WHERE id = ourId
});

router.delete('/:id', function (req, res) {
  db('days')
    .where({ id: req.params.id })
    .del()
    .then(function () {
      res.json({ success: true });
    });
});

router.get('/:id', function (req, res) {
  db('days')
    .where({ id: req.params.id })
    .select()
    .then(function (data) {
      res.send(data);
    });
});

module.exports = router;
