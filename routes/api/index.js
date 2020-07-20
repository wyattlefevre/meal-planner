const express = require('express');
const router = express.Router();
const ingredientsRoute = require('./ingredients');

router.use('/ingredients', ingredientsRoute);

module.exports = router;
