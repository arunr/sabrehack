'use strict';
/*jslint node: true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./app.mdl');
var App = mongoose.model('App');

var User = new Schema({
  activities: [],
  apps: [{
      status: String,
      app: {type: Schema.ObjectId, ref: 'App'}
  }],
  first_name : String,
  last_name : String,
  email: String,
    role: {type: String, enum:['publisher', 'user']},
    publisher_name: {type: String},
  created_at: Date
});

module.exports = mongoose.model('User', User);

