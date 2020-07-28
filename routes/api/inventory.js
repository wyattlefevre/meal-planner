var express = require('express');
var router = express.Router();
const db = require('../../database');

router.get('/', (req, res) => {
  console.log('get');
  db.select()
    .from('inventory')
    .orderBy('id')
    .then((data) => res.send(data));
});

router.post('/', (req, res) => {
  console.log('post', req.body);
  db.insert(req.body)
    .returning('*')
    .into('inventory')
    .then((data) => {
      res.send(data);
    });
});

router.patch('/:id', function (req, res) {
  db('inventory')
    .where({ id: req.params.id })
    .update(req.body)
    .returning('*')
    .then((data) => res.send(data));
  //SELECT * FROM inventory WHERE id = ourId
});

router.put('/:id', function (req, res) {
  db('inventory')
    .where({ id: req.params.id })
    .update({
      id: req.body.id,
      ingredient_id: req.body.ingredient_id,
      ingredient_servings: req.body.ingredient_servings,
    })
    .returning('*')
    .then((data) => res.send(data));
  //SELECT * FROM inventory WHERE id = ourId
});

router.delete('/:id', function (req, res) {
  db('inventory')
    .where({ id: req.params.id })
    .del()
    .then(function () {
      res.json({ success: true });
    });
});

router.get('/:id', function (req, res) {
  db('inventory')
    .where({ id: req.params.id })
    .select()
    .then(function (data) {
      res.send(data);
    });
});

module.exports = router;
