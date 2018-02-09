var buyTobacco = function (id) {
    return function (req, res, next) {
        dal.Tobacco.findById(req.params.id, function (err, doc) {
            doc.stock--;
            if (doc.stock <= 0) {
                doc.remove();
                return next();
            }
            doc.save();
            return next();
        });
    };
};

module.exports = buyTobacco;