'use strict';
/*jslint node: true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./app.mdl');
var Outlet = mongoose.model('App');

var User = new Schema({
  activities: [],
  outlets: [{type: Schema.ObjectId, ref: 'App'}],
  created_at: Date
});

module.exports = mongoose.model('User', User);
