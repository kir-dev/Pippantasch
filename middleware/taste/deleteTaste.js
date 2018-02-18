var deleteTaste = function (id) {
    return function (req, res, next) {
        dal.Taste.delete(taste => taste._id === id, function () {
            return next();
        });
    };
};

module.exports = deleteTaste;