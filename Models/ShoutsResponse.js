var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../Config');

var ShoutResponse = new Schema({
  shoutId: {type: Schema.ObjectId, ref: 'Shout'},
  receiverId: {type: Number, trim: true, required: true},
  senderId: {type: Number, trim: true},
  isForwarded: {type: Boolean, trim: true},
  isStarMarked: {type: Number, trim: true}, 
  responseReceivedTime: {type: Date, trim: true},
  validFrom: {type: Date, trim: true},
  validThru: {type: Date, trim: true}
});

module.exports = mongoose.model('ShoutResponse', ShoutResponse);

