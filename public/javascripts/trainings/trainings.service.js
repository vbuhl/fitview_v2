(function () {
    "use strict";


    var trainingsService = function($http){
        var getTrainings = function(){
            return $http.get('trainings',
                {header : {'Content-Type' : 'application/json; charset=UTF-8'}
                }).then(function(response) {
                    return response.data;
                });
        };

        //not working on 3000 or 4000
        var createTraining = function(newTraining){
            return $http.post('http://localhost:4000/createTraining', newTraining)
                .success(function (data) {
                    console.log("training created");
                    console.log(data);
                })
                .error(function (data) {
                    console.log("Error");
                    console.log(data);
                });
        }
        return {
            getTrainings: getTrainings,
            createTraining: createTraining
        }
    }

    angular.module('app')
        .factory('trainingsService', trainingsService);

})();

/*(function () {
    'use strict'

    var foodclubsService = function($http){

        var getFoodclubs = function(){
            return $http.get('foodclubs',
                {header : {'Content-Type' : 'application/json; charset=UTF-8'}
                }).then(function(response) {
                    return response.data;
                });
        };

        var createFoodclub = function(newDish){
            return $http.post('http://localhost:4000/createFoodclub', newDish)
                .success(function (data) {
                    console.log("Dish created");
                    console.log(data);
                })
                .error(function (data) {
                    console.log("Error");
                    console.log(data);
                });
        }

        return {
            getFoodclubs: getFoodclubs,
            createFoodclub: createFoodclub
        }
    }

    angular.module('app')
        .factory('foodclubsService', foodclubsService);
})();*/
