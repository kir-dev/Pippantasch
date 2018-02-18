var express = require('express');
var router = express.Router();

var getCoals = require('../middleware/coal/getCoals');
var createCoal = require('../middleware/coal/createCoal');
var buyCoal = require('../middleware/coal/buyCoal');

router.get('/', getCoals(), function (req, res, next) {
    res.json(req.coals);
});

router.post('/', createCoal(), function(req, res) {
    res.sendStatus(204);
});

router.post('/:id/vasarlas', buyCoal(), function(req, res) {
    res.sendStatus(204);
});

module.exports = router;