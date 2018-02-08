//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var TobaccoSchema = new Schema({
    id: Schema.Types.ObjectId,
    type: String,
    owner: String,
});

var TobaccoModel = mongoose.model('TobaccoModel', TobaccoSchema );