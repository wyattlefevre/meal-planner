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
  console.log('post', req.body);
  db.insert(req.body)
    .returning('*')
    .into('ingredients')
    .then((data) => {
      res.send(data);
    });
});

router.patch('/:id', function (req, res) {
  db('ingredients')
    .where({ id: req.params.id })
    .update(req.body)
    .returning('*')
    .then((data) => res.send(data));
  //SELECT * FROM ingredients WHERE id = ourId
});

router.put('/:id', function (req, res) {
  db('ingredients')
    .where({ id: req.params.id })
    .update({
      id: req.body.id,
      name: req.body.name,
      serving_size: req.body.serving_size,
      description: req.body.description,
      unit: req.body.unit,
      calories: req.body.calories,
      carb: req.body.carb,
      protein: req.body.protein,
      fat: req.body.fat,
    })
    .returning('*')
    .then((data) => res.send(data));
  //SELECT * FROM ingredients WHERE id = ourId
});

router.delete('/:id', function (req, res) {
  db('ingredients')
    .where({ id: req.params.id })
    .del()
    .then(function () {
      res.json({ success: true });
    });
});

router.get('/:id', function (req, res) {
  db('ingredients')
    .where({ id: req.params.id })
    .select()
    .then(function (data) {
      res.send(data);
    });
});

module.exports = router;
