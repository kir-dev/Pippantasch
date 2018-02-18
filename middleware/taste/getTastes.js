var getTastes = function () {
    return function (req, res, next) {
        dal.Taste.find({}).then(function (tastes) {
            req.tastes = tastes;
            return next();
        });
    };
};

module.exports = getTastes;