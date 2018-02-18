var createTobacco = function () {
    return function (req, res, next) {
        console.log(req.body);
        if (req.body.name && 
            req.body.roomNumber && 
            req.body.taste && 
            req.body.price && 
            req.body.count) {
            dal.Tobacco.create({
                owner: req.body.name,
                roomNumber: req.body.roomNumber,
                taste: req.body.taste,
                price: req.body.price,
                count: req.body.count
            }, function () {
                return next();
            });
        }
    };
};

module.exports = createTobacco;