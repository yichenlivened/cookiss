'use strict';

angular.module('cookiss.others', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/others', {
    templateUrl: 'others/others.html',
    controller: 'othersCtrl'
  });
}])

.controller('othersCtrl', [function() {

}]);