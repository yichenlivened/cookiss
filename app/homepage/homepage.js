'use strict';

angular.module('cookiss.homepage', ['ngRoute','angularMoment'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homepage', {
    templateUrl: 'homepage/homepage.html',
    controller: 'homepageCtrl'
  });
}])

.controller('homepageCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.currentTime = moment();
  var tick = function() {
    $scope.currentTime = moment();
    $scope.minutes = moment().get('minute');
    $timeout(tick, 1000);
  };
  $timeout(tick, 1000);
}]);