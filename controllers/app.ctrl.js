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
            var fixed_apps = _.map(apps, function(app) {
                return {
                    title: (app.basics && app.basics.title),
                    hours: (app.basics && app.basics.hours) || null,
                    days: (app.basics && app.basics.days) || null,
                    type: (app.basics && app.basics.type) || null,
                    tags: (app.basics && app.basics.tags) || null,
                    categories: (app.basics && app.basics.categories) || null,
                    rating: (app.meta && app.meta.rating) || null,
                    description: (app.details && app.details.description) || null,
                    itinerary: (app.details && app.details.itinerary) || null
                }
            });

            HttpHelper.success(res, fixed_apps, 'Returning apps');
        }
    })

};