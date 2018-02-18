var buyTobacco = function () {
    return function (req, res, next) {
        dal.Tobacco.findById(req.params.id, function (err, tobacco) {
            if(tobacco === null){
                return next();
            }

            if (tobacco.count <= 1) {
                tobacco.remove();
                return next();
            }
            
            tobacco.count--;
            tobacco.save();
            return next();
        });
    };
};

module.exports = buyTobacco;