(function() {
    'use strict';

    angular
        .module('app', [
            'ngRoute', 'app.trainings'
        ]
    )
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: '../views/trainings.html',
                    controller: 'trainingsCtrl'
                }).when('/createTraining', {
                    templateUrl: 'views/createTraining.html',
                    controller: 'trainingsCtrl'
                }).when('/deleteTraining', {
                    templateUrl: 'views/deleteTraining.html',
                    controller: 'trainingsCtrl'
                }).otherwise({ redirectTo: '/' });
        })
}());

