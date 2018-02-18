module.exports = function (mongoose) {
    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;

    var Coal = new Schema({
        _id: {
            type: ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },
        owner: String,
        roomNumber: Number,
        count: Number,
        price: Number
    }, {
        timestamps: true
    });

    return Coal;
};