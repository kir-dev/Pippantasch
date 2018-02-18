var getCoals = function () {
    return function (req, res, next) {
        dal.Coal.find({}).then(function (coals) {
            req.coals = coals;
            return next();
        });
    };
};

module.exports = getCoals;