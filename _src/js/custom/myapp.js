'use strict';

// App definition + dependencies
var myApp = angular.module('myApp', [
    'ngRoute'
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