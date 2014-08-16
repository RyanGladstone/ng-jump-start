myApp.controller('homeController',
    ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            $scope.modal = {
              "title": "Modal Title Goes Here",
              "content": "Hello Modal<br />This is a multiline message!"
            };
        }
]);