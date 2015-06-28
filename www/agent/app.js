var sabreHack = angular.module("sabreHack", [])
    .controller('mainCtrl', function($scope, $http, $q) {
        $scope.cities =  ['AMS',
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
        $scope.submit = function() {
            $http.post('/api/v1/login', $scope.user).then(function(data) {
                $scope.logged_in = true;
                $scope.publisher = data.data.data.user;
            }, function(err) {
                $scope.logged_in = false;
            });
        };

        $scope.saveapp = function() {
            $scope.app.basics.publisher = $scope.publisher;
            $http.post('/api/v1/apps', $scope.app).then(function(data) {
                $scope.saved = $scope.saved || {};
                $scope.saved.status = true;
                $scope.saved.data = data;
            }, function(err) {
                $scope.saved = $scope.saved || {};
                $scope.saved.status = false;
                $scope.saved.data = err;
            });
        }

        $scope.app = $scope.app || {};
        $scope.app.details = $scope.app.details || {};
        $scope.app.details.itinerary = $scope.app.details.itinerary || [];
        $scope.app.details.flights = $scope.app.details.flights || [];
        $scope.addStep = function() {
            $scope.app.details.itinerary.push({
                day_num:"",
                detaisl: ""
            })
        };

        $scope.getHotels = function() {
            $scope.hotels = $scope.hotels || [];
            $http.get('http://dev.jellyfishsurpriseparty.com/polygonToHotel/' + $scope.hotelva).then(function(data) {
                var props = data.data.properties;
                var promises = props.map(function(h){
                    return $http.get('http://dev.jellyfishsurpriseparty.com/hotel/' + h);
                });
                $q.all(promises).then(function(data) {
                    console.log(data);

                    var h = data.map(function(d) {
                        return {
                            name: d.data.hotelName,
                            id: d.data.hotelCode,
                            rate: d.data.minRate
                        }
                    });
                    $scope.hotels = h;
                }, function(err) {
                    console.log(err);
                });

            }, function(err) {
                console.log(err);
            });
        };

        $scope.selected_events = [];
        $scope.getEvents = function() {
            console.log($scope.locationva);
            $scope.events = $scope.events || [];
            $http.get('/api/v1/events/' + $scope.locationva.id).then(function(data) {
                $scope.events = data.data.data.data.tours;
                console.log($scope.events);


            }, function(err) {
                console.log(err);
            });
        };

        $scope.getLocations = function() {
            console.log("CALLED");
            $http.get('/api/v1/locations').then(function(data) {
                var locs = data.data.data.data.locations;
                $scope.locations = locs.map(function(l) {
                    return {
                        name: l.name,
                        id: l.location_id
                    }
                });
                console.log($scope.locations);
            }, function(err) {
                console.log(err);
            });
        };
        $scope.getLocations();

        $scope.removeStep = function(i) {
            $scope.app.details.itinerary.splice(i,1)
        }
    });