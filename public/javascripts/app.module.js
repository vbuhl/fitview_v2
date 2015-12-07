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
                    controller: 'trainingsCtrl as vm'
                }).when('/createTraining', {
                    templateUrl: 'views/createTraining.html',
                    controller: 'trainingsCtrl as vm'
                }).otherwise({ redirectTo: '/' });
        })
}());

/*(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'app.foodclubs'])
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'views/foodclubs.html',
                    controller: 'foodclubsCtrl as vm'
                }).when('/createFoodclub', {
                    templateUrl: 'views/createFoodclub.html',
                    controller: 'foodclubsCtrl as vm'
                }).otherwise({ redirectTo: '/' });
        })
})();*/
