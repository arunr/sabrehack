'use strict';
/*jslint node: true */

var keygen = require('keygenerator');
var mongoose = require('mongoose');
var _ = require('underscore');
require('../models/app.mdl.js');
var App = mongoose.model('App');
var Q = require('q');
var HttpHelper = require('../common/http.hlpr');

module.exports.get = function(req, res) {
    App.find({}, function(err, apps) {
        if (err || apps.length === 0) {
            HttpHelper.error(res, err || true, 'Failed to get apps');
        } else {
            HttpHelper.success(res, apps, 'Returning apps');
        }
    })

};