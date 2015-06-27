'use strict';
/*jslint node: true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
  var models = ['account.mdl', 'auth_token.mdl', 'auth_code.mdl', 'app.mdl'];
  var model = '';
  models.forEach(function(m) {
    model = require('../models/' + m);
  });
};
