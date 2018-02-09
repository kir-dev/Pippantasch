var deleteHookah = function (id) {
    return function (req, res, next) {
        dal.Hookah.delete(h => h.id === id, function () {
            return next();
        });
    };
};

module.exports = deleteHookah;