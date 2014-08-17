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