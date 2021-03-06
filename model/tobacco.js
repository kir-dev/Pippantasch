module.exports = function (mongoose) {
    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;

    var Tobacco = new Schema({
        _id: {
            type: ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },
        taste: { type: Schema.Types.ObjectId, ref: 'Taste' },
        owner: String,
        roomNumber: Number,
        count: Number,
        price: Number
    }, {
        timestamps: true
    });

    return Tobacco;
};