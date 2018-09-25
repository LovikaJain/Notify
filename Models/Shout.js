var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../Config');

var Shout = new Schema({
  shoutId: {type: Number, trim: true},
  title: {type: String, trim: true, required: true},
  description: {type: String, trim: true},
  pictureLink: {type: String, trim: true, default: null},
  tagId: {type: Schema.ObjectId, ref: 'Tags'},
  responseTime: {type: Date, trim: true},
  startTime: {type: Date, trim: true},
  endMe: {type: Date, trim: true},
  creatorId: {type: String, trim: true},
  location: {
    latitude : {type: Number},
    longitude: {type: Number},
    landmark: {type: String}
  },
  validFrom: {type: Date, trim: true},
  validThru: {type: Date, trim: true}
});

module.exports = mongoose.model('Shout', Shout);