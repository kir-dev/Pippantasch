var deleteTobacco = function () {
    return function (req, res, next) {
        dal.Tobacco.findById(req.params.id, function (err, tobacco) {
            tobacco.remove();
            return next();
        });
    };
};

module.exports = deleteTobacco;