var getTobaccos = function () {
    return function (req, res, next) {
        dal.Tobacco.find({}).then(function (tobaccos) {
            req.tobaccos = tobaccos;
            return next();
        });
    };
};

module.exports = getTobaccos;