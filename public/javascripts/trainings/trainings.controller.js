(function () {
"use strict";
    angular.module('app.trainings', [])
        .controller('trainingsCtrl', trainingsCtrl);

    function trainingsCtrl(trainingsService, $scope, $location){
        //var vm = this;
        //vm.createTraining = createTraining;
        var modeltrainings = function(result){
            console.log(result);
            $scope.trainings = result;
        }

        trainingsService.getTrainings()
            .then(modeltrainings);

        $scope.createTraining = function(){
            //console.log("Test create training ", this);
            var newTraining = {
                category: this.category,
                date: this.date,
                duration: this.duration,
                comment: this.comment,
            }
            trainingsService.createTraining(newTraining);
            $location.path('/trainings');
            //console.log("path" + l);
            /*var defaultForm = {
                category : "",
                date : "",
                duration: "",
                comment: ""
            };
            $scope.trainingform.$setPristine();
            $scope.comment = "";*/

        }


        /*$scope.deleteTraining = function(){
            trainingsService.deleteTraining($scope.trainings.id);
            console.log('training is now deleted');
        };*/

        $scope.deleteTraining = function(id){
            //console.log("Testing delete training", this);
            trainingsService.deleteTraining(id)
                .then(trainingsService.getTrainings()
                    .then(function(result){
                        console.log(result);
                        $scope.trainings = result;
                    }));
        }
    }
})();