'use strict';
/*jslint node: true */

var mustBe = require('mustbe').routeHelpers();

var mongoose = require('mongoose');
var passport = require('passport');
module.exports = function(app) {

    (function AccountRoutes() {
        var AccountCtrl = require('../controllers/account.ctrl');
        app.post('/api/v1/login', function(req, res, next) {
                next();
            }, passport.authenticate('account'),
            AccountCtrl.login);

        app.post('/api/v1/register', AccountCtrl.create_user);
        //app.get('/api/v4/authcode/:phone', AccountCtrl.create_authcode);
        //app.post('/api/v4/authcode', AccountCtrl.verify_authcode_and_create_account);
        app.get('/api/v1/logout', AccountCtrl.logout);

    })();

    (function AppRoutes() {
        var AppCtrl = require('../controllers/app.ctrl');
        app.get('/api/v1/apps', AppCtrl.get);
        app.get('/api/v1/apps/:id', AppCtrl.getapp);
        app.post('/api/v1/apps', AppCtrl.saveapp);
    })();

    (function SabreRoutes() {
        app.get('/api/v1/flights', function(req, res) {
            var Sabre = require('./sabre.cfg');
            var HttpHelper = require('../common/http.hlpr');
            HttpHelper.success(res, null, null);
        });

        app.get('/api/v1/cities', function(req, res) {
            var HttpHelper = require('../common/http.hlpr');
            var cities = ['AMS',
                'BCN',
                'BER',
                'BRU',
                'BUD',
                'CPH',
                'DOH',
                'DUB',
                'DXB',
                'EDI',
                'FRA',
                'GEV',
                'HAM',
                'IST',
                'MAD',
                'MOW',
                'MCO',
                'MUC',
                'MXP',
                'OSL',
                'ROM',
                'RUH',
                'SIN',
                'STO',
                'WAW',
                'ZRH',
                'SFO',
                'LAX',
                'BOS',
                'ORD',
                'DCA',
                'DFW',
                'LAS',
                'MIA',
                'LGA',
                'ATL',
                'LHR',
                'IAH',
                'SEA'];
            HttpHelper.success(res, cities, "Cities list");
        });

        app.get('/api/v1/hotels', function(req, res) {
            var rest = require('restler');
            var HttpHelper = require('../common/http.hlpr');
            rest.get('http://dev.jellyfishsurpriseparty.com/hotel/rates/1730/2015-06-27/2015-06-29').on('complete', function(data) {
                HttpHelper.success(res, data, "Hotels");
            });
        });

        app.get('/api/v1/locations', function(req, res) {
            var rest = require('restler');
            var HttpHelper = require('../common/http.hlpr');
            rest.get('http://api-hackathon.getyourguide.com/1/locations?cnt_language=en&currency=EUR', {
                headers: {
                    'X-Access-Token':'TOQlyctkTh0xPyMces4eZLY2J5U2P7KdVxroimbRMLxJWMWm'
                }
            }).on('complete', function(data) {
                HttpHelper.success(res, data, "Locations");
            });
        });
        app.get('/api/v1/tours', function(req, res) {
            var rest = require('restler');
            var HttpHelper = require('../common/http.hlpr');
            rest.get('http://api-hackathon.getyourguide.com/1/locations?cnt_language=en&currency=EUR', {
                headers: {
                    'X-Access-Token':'TOQlyctkTh0xPyMces4eZLY2J5U2P7KdVxroimbRMLxJWMWm'
                }
            }).on('complete', function(data) {
                HttpHelper.success(res, data, "Locations");
            });
        });

        app.get('/api/v1/events/:location', function(req, res) {
           // 862
            var param = req.params.location;
            console.log(param);
            var rest = require('restler');
            var HttpHelper = require('../common/http.hlpr');
            rest.get('http://api-hackathon.getyourguide.com/1/tours?location=' + param + '&cnt_language=en&currency=EUR', {
                headers: {
                    'X-Access-Token':'TOQlyctkTh0xPyMces4eZLY2J5U2P7KdVxroimbRMLxJWMWm'
                }
            }).on('complete', function(data) {
                HttpHelper.success(res, data, "Tours");
            });
        });
    })();

    //(function RecoRoutes() {
    //  var RecoCtrl = require('../controllers/reco.ctrl');
    //  app.get('/api/v4/recos', RecoCtrl.get);
    //})();
    //
    //(function EventRoutes() {
    //  var EventCtrl = require('../controllers/event.ctrl');
    //  app.get('/api/v4/events', function(req, res) {
    //    res.status(405).send({message: 'Not yet implemented'});
    //  });
    //  app.get('/api/v4/events/:event_id', function(req, res) {
    //    res.status(405).send({message: 'Not yet implemented'});
    //  });
    //  app.post('/api/v4/events', EventCtrl.new);
    //  // PROXIES -- DO VERIFICATION INLINE
    //  app.post('/api/v4/checkin', EventCtrl.new);
    //  app.post('/api/v4/gift', EventCtrl.new);
    //  app.post('/api/v4/follow', EventCtrl.new);
    //
    //})();
    //
    //
    //(function OutletRoutes() {
    //  var OutletCtrl = require('../controllers/outlet.ctrl');
    //  app.post('/api/v4/outlets', mustBe.authorized('outlet.create', OutletCtrl.new));
    //  app.put('/api/v4/outlets/:outlet_id', mustBe.authorized('outlet.update', OutletCtrl.update));
    //
    //  // Anonymous route
    //  app.get('/api/v4/outlets/:outlet_id', OutletCtrl.get);
    //  app.get('/api/v4/outlets', mustBe.authorized('outlet.view', OutletCtrl.all));
    //  app.delete('/api/v4/outlets/:outlet_id', mustBe.authorized('outlet.remove', OutletCtrl.remove));
    //
    //})();
    //
    (function UserRoutes() {
      var UserCtrl = require('../controllers/user.ctrl');
      app.get('/api/v1/user', UserCtrl.get_profile);
      //app.put('/api/v4/profile', UserCtrl.update_profile);
      //app.put('/api/v4/friends', UserCtrl.update_friends);
      //
      //app.get('/api/v4/coupons', UserCtrl.get_coupons);
    })();
};


/*
 ROUTES I NEED FOR THE WEB & PHONE APP

 2. Discover related:
 GET /api/v4/outlets?token=123&lat=123&long=123&datetime=123 - Get outlets for me
 GET /api/v4/outlets?q=latte,coffee - Search
 GET /api/v4/users/me - Get my user account
 GET /api/v4/users/123 - Get a user account info
 POST /api/v4/events - Post an event
 GET /api/v4/events?token=123&lat=123&long=123 - Get events
 GET /api/v4/events/123 - Get a particular event
 GET /api/v4/outlets/123
 POST /api/v4/friends
 GET /api/v4/friends
 PROFILE routes

 3. Proxies:
 GET /api/v4/wallet - Return the coupons for this user
 POST /api/v4/checkin
 POST /api/v4/follow
 POST /api/v4/share
 POST /api/v4/gift

 4. Other than this -
 - Event processors
 - Job framework
 - Mail / SMS framework
 */

/*
 ROUTES I NEED FOR THE MERCHANT APP

 POST /api/v4/outlets

 */
