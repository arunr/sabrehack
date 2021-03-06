twystMerchant.controller('ConsoleCtrl', function($scope, $rootScope, $timeout, $log, $rootScope, $state,  $cookies, resUser, authenticated, twystRESTSvc) {
    // Template for the outlet
    $timeout(function() {
        $scope.user = (resUser && resUser.data && resUser.data) || null;
        $scope.username = ($scope.user && $scope.user.first_name) || " ";
    });

    $rootScope.$on('$stateChangeError', function(error) {
        console.log(error);
    });

    // Function to show toasts
    //function showToast(message) {
    //    $scope.toastPosition = {
    //        bottom: false,
    //        top: true,
    //        left: false,
    //        right: true
    //    };
    //
    //    $scope.getToastPosition = function() {
    //        return Object.keys($scope.toastPosition)
    //            .filter(function(pos) {
    //                return $scope.toastPosition[pos];
    //            })
    //            .join(' ');
    //    };
    //
    //    $mdToast.show(
    //        $mdToast.simple()
    //            .content(message)
    //            .position($scope.getToastPosition())
    //            .hideDelay(3000)
    //    );
    //}

    if (!authenticated) {x
        showToast("Please sign-in to continue!");
        $state.go('home');
    } else {
        showToast('Logged in successfully!');
    }

    $scope.getOutlets = function() {
        twystRESTSvc.outlets().then(function(data) {
            $scope.outlets = data.data.outlets;
            console.log(data);
        }, function(err) {
            console.log(err);
        })
    };

    $scope.view = function(id) {
        $scope.outlet = $scope.outlets[id];
        $state.go('console.view');
    };

    $scope.types=['trip', 'activity', 'list'];
    $scope.itinerary = [];


    $scope.app = {
        basics : {
            title: null,
        }
    };

    $scope.action = {
        rewards: {},
        points: 0
    };



    $scope.save = function() {
        console.log($scope);
        twystRESTSvc.save($scope.app).then(function(success) {
            $scope.save = $scope.save || {};
            $scope.save.outlet = true;
            $scope.save.data = success;
        }, function(err) {
            console.log(err);
            $scope.save = $scope.save || {};
            $scope.save.outlet = false;
            $scope.save.data = err;
        });
    };

    // For the tags
    var self = this;
    self.readonly = false;
    self.tags = [];

    // For the menu
    $scope.items = [];
    $scope.addItem = function() {
        $scope.itinerary.push({
            day_num: "",
            details:""
        });
    };

    var sections = [],
        selected = null,
        previous = null;
    $scope.sections = sections;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
        previous = selected;
        selected = sections[current];
    });
    $scope.addTab = function (title, view) {
        view = view || title + " Content View";
        sections.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
        var index = sections.indexOf(tab);
        sections.splice(index, 1);
    };

});
