'use strict';

// App definition + dependencies
var myApp = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'mgcrea.ngStrap'
    ]);

// Route definition 
myApp.config(['$routeProvider', '$locationProvider', 
    function ($routeProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);
        
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

            // Sample Directive data
            $scope.customer = {
                name: 'Tom'
            };
            
        }
]);

myApp.directive('sampleDirective',
        function () {
            return {
                restrict: 'AE', // attribute or element
                //scope: {}, // isolate scope
                template: '<h1>{{ customer.name }}</h1>'
            }
        }
);
