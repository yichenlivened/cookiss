'use strict';

// Declare app level module which depends on views, and components
angular.module('cookiss', [
  'ngRoute',
  'cookiss.homepage',
  'cookiss.others'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homepage'});
}]);
