var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../Config');

var User = new Schema({
  phoneNumber: {type: Number, trim: true, required: true},
  password: {type: String, trim: true},
  userId: {type: String, trim: true},
  validFrom: {type: Date, trim: true},
  validThru: {type: Date, trim: true}
});

module.exports = mongoose.model('User', User);