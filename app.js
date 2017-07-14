var app = angular.module("GitHub", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',{
            templateUrl: './views/main.html',
            controller: 'MainCtrl'
        })
        .when('/addIssue',{
            templateUrl: './views/addIssue.html',
            controller: 'AddIssueCtrl'
        })
        .otherwise({redirectTo:'/'});
            $locationProvider.html5Mode(true);
        });
app.controller('MainCtrl',function ($scope, $http) {
    $http.get('https://api.github.com/repos/facebook/react/issues')
        .then(function (response) {
            $scope.gitData = response.data;
        })
});

app.controller('AddIssueCtrl',function ($scope) {
    $scope.mesage = "Maiasdas Controller";
});
