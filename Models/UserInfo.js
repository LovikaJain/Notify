var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../Config');

var UserInfo = new Schema({
  userId: {type: Schema.ObjectId, ref: 'User'},
  name: {type: String, trim: true},
  gender: {type: String, trim: true},
  pictureLink: {type: String, trim: true, default: null},
  validFrom: {type: Date, trim: true},
  validThru: {type: Date, trim: true}
});

module.exports = mongoose.model('UserInfo', UserInfo);