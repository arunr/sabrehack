'use strict';
/*jslint node: true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
  var models = ['account.mdl', 'user.mdl', 'auth_token.mdl', 'auth_code.mdl', 'app.mdl'];
  var model = '';
  models.forEach(function(m) {
    model = require('../models/' + m);
  });
};
mongoose.model('App').schema.add({
  'basics.publisher': {type: Schema.ObjectId, ref: 'User'}
});