var addCoal = function () {
    return function (req, res, next) {
        dal.Coal.create({
            owner: req.body.name,
            roomNumber: req.body.roomNumber,
            type: req.body.type,
            price: req.body.price,
            stock: req.body.stock
        }, function () {
            return next();
        });
    };
};

module.exports = addCoal;