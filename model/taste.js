module.exports = function (mongoose) {
    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;

    var Taste = new Schema({
        _id: {
            type: ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },
        name: String
    }, {
        timestamps: true
    });

    return Taste;
};