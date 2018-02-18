var express = require('express');
var router = express.Router();

var getTobaccos = require('../middleware/tobacco/getTobaccos');
var createTobacco = require('../middleware/tobacco/createTobacco');
var buyTobacco = require('../middleware/tobacco/buyTobacco');
var deleteTobacco = require('../middleware/tobacco/deleteTobacco');

router.get('/', getTobaccos(), function (req, res, next) {
    res.json(req.tobaccos);
});

router.post('/', createTobacco(), function (req, res) {
    res.sendStatus(204);
});

router.post('/:id/vasarlas', buyTobacco(), function (req, res) {
    res.sendStatus(204);
});

router.delete('/:id', deleteTobacco(), function (req, res) {
    res.sendStatus(204);
});

module.exports = router;