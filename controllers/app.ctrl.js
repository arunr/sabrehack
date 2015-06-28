'use strict';
/*jslint node: true */

var keygen = require('keygenerator');
var mongoose = require('mongoose');
var _ = require('underscore');
require('../models/app.mdl.js');
var App = mongoose.model('App');
var Q = require('q');
var HttpHelper = require('../common/http.hlpr');
var Sabre = require('../config/sabre.cfg');
var rest = require('restler');



function get_flight_info(from, to, start, end) {
    var deferred = Q.defer();

        Sabre.get('/v1/shop/flights?origin=' + from + '&destination=' + to + '&departuredate=2015-06-29&returndate=2015-07-12&limit=2', {}, function(err,data) {

        if (err || !data) {
            deferred.reject(null);
        } else {
            var d = _.extend({}, JSON.parse(data));
            var fares = _.map(d['PricedItineraries'], function(fare) {
                return {
                    name: from + "-" + to,
                    price: fare['AirItineraryPricingInfo']['ItinTotalFare']['FareConstruction']['Amount'] + ''
                }
            });

            deferred.resolve(fares);
        }
    });

    return deferred.promise;
}

function get_hotel_info(location) {
    var deferred = Q.defer();
    rest.get('http://dev.jellyfishsurpriseparty.com/hotel/rates/1730/2015-06-27/2015-06-29').on('complete', function(data) {
        deferred.resolve(data); // auto convert to object
    });
    return deferred.promise;
}

function get_events(location) {
    var deferred = Q.defer();
    rest.get('http://api-hackathon.getyourguide.com/1/locations/16/tours?cnt_language=en&currency=EUR', {
        headers: {
            'X-Access-Token':'TOQlyctkTh0xPyMces4eZLY2J5U2P7KdVxroimbRMLxJWMWm'
        }
    }).on('complete', function(data) {
        deferred.resolve(data);
    });
    return deferred.promise;
}

module.exports.getapp = function(req, res) {
    App.findOne({_id: req.params.id}, function(err, app) {
        if (err || !app) {
            HttpHelper.error(res, err || true, 'Failed to get apps');
        } else {
            var fixed_app = {
                title: (app.basics && app.basics.title),
                hours: (app.basics && app.basics.hours) || null,
                days: (app.basics && app.basics.days) || null,
                type: (app.basics && app.basics.type) || null,
                tags: (app.basics && app.basics.tags) || null,
                categories: (app.basics && app.basics.categories) || null,
                rating: (app.meta && app.meta.rating) || null,
                description: (app.details && app.details.description) || null,
                itinerary: (app.details && app.details.itinerary) || null
            };

            if (app.details.flights.length !== 0) {
                var from = app.details.flights[0].from;
                var to = app.details.flights[0].to;
                get_flight_info(from, to, null, null).then(function(data) {
                    fixed_app.flights = data;

                    get_hotel_info().then(function(data) {
                        console.log(data);
                        if (!data.code === 'NotFound') {
                            fixed_app.hotels = {
                                name : data.hotelName,
                                price: data.rates[0].nightlyRates[0] + ''
                            };
                        }

                        get_events().then(function(data) {
                            var attractions = _.map(data.data.tours, function(tour) {
                               return {
                                   name : tour.title,
                                   price: (tour.price && tour.price.values && tour.price.values.amount) + ''
                               }
                            });
                            fixed_app.attractions = attractions.slice(0,3);
                            HttpHelper.success(res, fixed_app, 'Returning app');

                        }, function(err) {
                            HttpHelper.success(res, fixed_app, 'Returning app');
                        });
                    }, function(err) {
                        HttpHelper.success(res, fixed_app, 'Returning app');

                    })
                }, function(err) {
                    HttpHelper.success(res, fixed_app, 'Returning app');

                    //HttpHelper.error(res, err, "Yo");
                }).fail(function(err) {
                    HttpHelper.success(res, fixed_app, 'Returning app');

                    //HttpHelper.error(res, err, "Bo");
                    console.log(err);
                }) ;
            } else {
                HttpHelper.success(res, fixed_app, 'Returning app');

            }
        }
    });
};

module.exports.get = function(req, res) {
    App.find({}).populate('basics.publisher').exec(function(err, apps) {
        if (err || apps.length === 0) {
            HttpHelper.error(res, err || true, 'Failed to get apps');
        } else {
            var fixed_apps = _.map(apps, function(app) {
                return {
                    id: app._id,
                    title: (app.basics && app.basics.title),
                    hours: (app.basics && app.basics.hours) || null,
                    days: (app.basics && app.basics.days) || null,
                    type: (app.basics && app.basics.type) || null,
                    tags: (app.basics && app.basics.tags) || null,
                    categories: (app.basics && app.basics.categories) || null,
                    rating: (app.meta && app.meta.rating) || null,
                    description: (app.details && app.details.description) || null,
                    itinerary: (app.details && app.details.itinerary) || null,
                    publisher: (app.basics && app.basics.publisher && app.basics.publisher.publisher_name) || null
                }
            });

            HttpHelper.success(res, fixed_apps, 'Returning apps');
        }
    })

};

module.exports.saveapp = function(req, res) {
    var created_app = _.extend({}, req.body);
    var app = new App(created_app);
    console.log(app);
    app.save(function(err, a) {
        if (err || !a) {
            HttpHelper.error(res, err, null);
        } else {
            HttpHelper.success(res, a, null);

        }
    });
};