var getTobaccos = function () {
    return function (req, res, next) {
        dal.Tobacco.find({}).populate('taste').then(function (tobaccos) {
            console.log(tobaccos[tobaccos.legth-1]);
            req.tobaccos = tobaccos;
            return next();
        });
    };
};

module.exports = getTobaccos;