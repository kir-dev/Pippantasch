var express = require('express');
var router = express.Router();

var getTastes = require('../middleware/taste/getTastes');
var createTaste = require('../middleware/taste/createTaste');

router.get('/', getTastes(), function (req, res) {
    res.json(req.tastes);
});

router.post('/', createTaste(), function(req, res) {
    res.sendStatus(204);
});

module.exports = router;