var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../Config');

var UserContact = new Schema({
  userId: {type: Schema.ObjectId, ref: 'User'},
  conatctName: {type: String, trim: true},
  contactNumber: {type: Number, trim: true},
  syncTime: {type: Date, trim: true},
  isOnboarded: {type: Boolean, trim: true}
});

module.exports = mongoose.model('UserContact', UserContact);