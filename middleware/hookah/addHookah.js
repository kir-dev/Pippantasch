var Hookah = function () {
    return function (req, res, next) {
        dal.Hookah.create({
            owner: req.body.name,
            roomNumber: req.body.roomNumber,
            type: req.body.type,
            price: req.body.price,
            available: req.body.available
        }, function () {
            return next();
        });
    };
};

module.exports = addCoal;