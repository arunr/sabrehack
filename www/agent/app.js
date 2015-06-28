var sabreHack = angular.module("sabreHack", [])
    .controller('mainCtrl', function($scope, $http) {
        $scope.submit = function() {
            $http.post('/api/v1/login', $scope.user).then(function(data) {
                $scope.logged_in = true;
            }, function(err) {
                $scope.logged_in = false;
            });
        };

        $scope.saveapp = function() {
            console.log("CALLED SAVEAPP");
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
    });