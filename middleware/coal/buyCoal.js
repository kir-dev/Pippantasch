var buyCoal = function () {
    return function (req, res, next) {
        dal.Coal.findById(req.params.id, function (err, coal) {
            if(coal === null){
                return next();
            }

            if (coal.count <= 1) {
                coal.remove();
                return next();
            }
            
            coal.count--;
            coal.save();
            return next();
        });
    };
};

module.exports = buyCoal;