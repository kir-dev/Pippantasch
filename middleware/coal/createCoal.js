var createCoal = function () {
    return function (req, res, next) {
        if (req.body.name && 
            req.body.roomNumber && 
            req.body.price && 
            req.body.count) {
            dal.Coal.create({
                owner: req.body.name,
                roomNumber: req.body.roomNumber,
                price: req.body.price,
                count: req.body.count
            }, function () {
                return next();
            });
        }
    };
};

module.exports = createCoal;