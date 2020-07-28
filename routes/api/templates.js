var express = require('express');
var router = express.Router();
const db = require('../../database');

router.get('/', (req, res) => {
  console.log('get');
  db.select()
    .from('templates')
    .orderBy('id')
    .then((data) => res.send(data));
});

router.post('/', (req, res) => {
  console.log('post', req.body);
  db.insert(req.body)
    .returning('*')
    .into('templates')
    .then((data) => {
      res.send(data);
    });
});

router.patch('/:id', function (req, res) {
  db('templates')
    .where({ id: req.params.id })
    .update(req.body)
    .returning('*')
    .then((data) => res.send(data));
  //SELECT * FROM templates WHERE id = ourId
});

router.put('/:id', function (req, res) {
  db('templates')
    .where({ id: req.params.id })
    .update({
      id: req.body.id,
      food_id: req.body.food_id,
      day_id: req.body.day_id,
      meal_id: req.body.meal_id,
      food_servings: req.body.food_servings,
    })
    .returning('*')
    .then((data) => res.send(data));
  //SELECT * FROM templates WHERE id = ourId
});

router.delete('/:id', function (req, res) {
  db('templates')
    .where({ id: req.params.id })
    .del()
    .then(function () {
      res.json({ success: true });
    });
});

router.get('/:id', function (req, res) {
  db('templates')
    .where({ id: req.params.id })
    .select()
    .then(function (data) {
      res.send(data);
    });
});

module.exports = router;
