'use strict';
twystMerchant.factory('twystRESTSvc', function ($rootScope, $http, $log, $q, $cookies) {
    var twystRESTSvc = {};

    twystRESTSvc.login = function(user) {
        var deferred = $q.defer();
        $http.post('/api/v1/login', user).then(function(data) {
            deferred.resolve(data.data);
        }, function(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };

    twystRESTSvc.profile = function() {
        var deferred = $q.defer();
        var token = $cookies.get('token');

        if (token) {
            $http.get('/api/v1/user?token=' + token).then(function(data) {
                deferred.resolve(data.data);
            }, function(err) {
                deferred.reject(err);
            })
        } else {
            deferred.reject('No auth token provided');
        }
        return deferred.promise;
    };

    twystRESTSvc.outlets = function() {
        var deferred = $q.defer();
        var token = $cookies.get('token');

        if (token) {
            $http.get('/api/v1/outlets?token=' + token).then(function(data) {
                deferred.resolve(data.data);
            }, function(err) {
                deferred.reject(err);
            })
        } else {
            deferred.reject('No auth token provided');
        }

        return deferred.promise;
    }

    twystRESTSvc.save = function(o) {
        var deferred = $q.defer();
        $http.post('/api/v1/apps', o).then(function(data) {
            deferred.resolve(data);
        }, function(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    return twystRESTSvc;
});