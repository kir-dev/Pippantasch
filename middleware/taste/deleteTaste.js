var deleteTaste = function (id) {
    return function (req, res, next) {
        dal.Taste.findById(req.params.id, function (err, taste) {
            taste.remove();
            return next();
        });
    };
};

module.exports = deleteTaste;