'use strict';
/*jslint node: true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./app.mdl');
var Outlet = mongoose.model('App');

var User = new Schema({
  activities: [],
  apps: [{type: Schema.ObjectId, ref: 'App'}],
  first_name : String,
  last_name : String,
  email: String,
  created_at: Date
});

module.exports = mongoose.model('User', User);
