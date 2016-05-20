var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/one', {
            templateUrl: 'pages/one.html',
            controller: 'mainController'
        })
        .when('/two', {
            templateUrl: 'pages/two.html',
            controller: 'mainController'
        })
        .when('/three', {
            templateUrl: 'pages/three.html',
            controller: 'mainController'
        })
        .when('/four', {
            templateUrl: 'pages/four.html',
            controller: 'mainController'
        })

    .when('/five', {
        templateUrl: 'pages/five.html',
        controller: 'mainController'
    })

    .when('/six', {
        templateUrl: 'pages/six.html',
        controller: 'mainController'
    })

    .when('/seven', {
        templateUrl: 'pages/seven.html',
        controller: 'mainController'
    })

    .when('/eight', {
        templateUrl: 'pages/eight.html',
        controller: 'mainController'
    })

    .when('/nine', {
        templateUrl: 'pages/nine.html',
        controller: 'mainController'
    })
});

app.controller('mainController', function ($scope) {
    $scope.message = "Test Text";
});