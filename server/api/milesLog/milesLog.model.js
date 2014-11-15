'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MileslogSchema = new Schema({
  date: Date,
  numOfMiles: Number,
  desc: String
});

module.exports = mongoose.model('Mileslog', MileslogSchema);