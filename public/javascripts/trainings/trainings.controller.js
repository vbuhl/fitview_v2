(function () {
"use strict";
    angular.module('app.trainings', [])
        .controller('trainingsCtrl', trainingsCtrl);

    function trainingsCtrl(trainingsService, $scope){
        //var vm = this;
        //vm.createTraining = createTraining;
        var modeltrainings = function(result){
            console.log(result);
            $scope.trainings = result;
        }

        trainingsService.getTrainings()
            .then(modeltrainings);

        $scope.createTraining = function(){
            console.log("Test create training ", this);
            var newTraining = {
                category: this.category,
                date: this.date,
                duration: this.duration,
                comment: this.comment,
            }
            trainingsService.createTraining(newTraining);
        }

    }
})();