myApp.controller('homeController',
    ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            $scope.modal = {
              "title": "Modal title goes here",
              "content": "Modal content goes here!"
            };

            // Sample Directive data
            $scope.customer = {
                name: 'Tom'
            };
            
        }
]);