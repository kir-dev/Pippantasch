var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pipa');

var Taste = require('./taste');
var Tobacco = require('./tobacco');
var Coal = require('./coal');

mongoose.model('Taste', Taste(mongoose));
mongoose.model('Tobacco', Tobacco(mongoose));
mongoose.model('Coal', Coal(mongoose));

module.exports = mongoose.models;