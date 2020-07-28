const express = require('express');
const router = express.Router();
const ingredientsRoute = require('./ingredients');
const foodsRoute = require('./foods')
const daysRoute = require('./days')
const foodIngredientsRoute = require('./food_ingredients')
const inventoryRoute = require('./inventory')
const mealsRoute = require('./meals')
const templatesRoute = require('./templates')

router.use('/ingredients', ingredientsRoute);
router.use('/foods', foodsRoute);
router.use('/days', daysRoute);
router.use('/inventory', inventoryRoute);
router.use('/meals', mealsRoute);
router.use('/templates', templatesRoute);

module.exports = router;
