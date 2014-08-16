'use strict';

// App definition + dependencies
var myApp = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'mgcrea.ngStrap'
    ]);

// Route definition 
myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })
            .otherwise({
				redirectTo: '/home'
			});
}]);
myApp.controller('homeController',
    ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            $scope.modal = {
              "title": "Modal Title Goes Here",
              "content": "Hello Modal<br />This is a multiline message!"
            };
        }
]);