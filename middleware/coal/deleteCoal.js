var deleteCoal = function () {
    return function (req, res, next) {
        dal.Coal.findById(req.params.id, function (err, tobacco) {
            tobacco.remove();
            return next();
        });
    };
};

module.exports = deleteCoal;