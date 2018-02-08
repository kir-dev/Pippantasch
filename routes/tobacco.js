var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json([{
        id: 0,
        price: 500,
        type: 'Almás-fahéjas',
        stock: 6,
        owner: {
            name: 'Józsika',
            room: 1319
        }
    },{
        id: 1,
        price: 499,
        type: 'Málnás',
        stock: 10,
        owner: {
            name: 'Bástya',
            room: 1001
        }
    }]);
});

router.post('/', function(req, res) {
    //add new tobacco
});


router.post('/:id/buy', function(req, res) {
    

});

module.exports = router;