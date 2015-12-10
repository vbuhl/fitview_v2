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

        //not working
        var createTraining = function(newTraining){
            console.log(newTraining);
            return $http.post('/createTraining', newTraining)
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

