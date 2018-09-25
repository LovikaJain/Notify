var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../Config');

var Tags = new Schema({
  tagId: {type: String, trim: true},
  tagName: {
      type: String, 
      enum: [
          Work,
          Promotional,
          Social,
          Other
      ]
    },
  tagDescription: {type: Number, trim: true},
  validFrom: {type: Date, trim: true},
  validThru: {type: Date, trim: true}
});

module.exports = mongoose.model('Tags', Tags);