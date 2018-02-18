var createTaste = function () {
    return function (req, res, next) {
        dal.Taste.create({
            name: req.body.tasteName
        }, function () {
            return next();
        });
    };
};

module.exports = createTaste;