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


        var createTraining = function(newTraining/*, $location*/){
            //console.log(newTraining);
            return $http.post('/createTraining', newTraining)
                .success(function (data) {
                    console.log("training created");
                    //$location.path('/trainings')
                    console.log(data);
                })
                .error(function (data) {
                    console.log("Error");
                    console.log(data);
                });
        }


        /*var deleteTraining = function(id){
            return $http.delete('/deleteTraining/' + id)
                .then(function(response){
                    return response.data
                });
        }*/
        var deleteTraining = function(id){
            //console.log("id1: " + id)//id is undefined
            return $http.post('/deleteTraining', {id: id})
                .success(function (data) {
                    console.log("training deleted");
                    console.log(data);
                    getTrainings();
                })
                .error(function (data) {
                    console.log("Error!!");
                    console.log(data);
                });
        }

        return {
            getTrainings: getTrainings,
            createTraining: createTraining,
            deleteTraining: deleteTraining
        }
    }

    angular.module('app')
        .factory('trainingsService', trainingsService);

})();

