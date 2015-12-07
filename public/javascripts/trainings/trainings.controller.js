(function () {
"use strict";
    angular.module('app.trainings', [])
        .controller('trainingsCtrl', trainingsCtrl);

    function trainingsCtrl(trainingsService){
        var vm = this;
        vm.createTraining = createTraining;
        vm.trainings = trainingsService.getTrainings()
            .then(function(result){
                console.log(result);
                vm.trainings = result;
            });

        function createTraining(){
            console.log("Test create training");
            var newTraining = {
                category: vm.category,
                date: vm.date,
                duration: vm.duration,
                comment: vm.comment,
            }
            trainingsService.createTraining(newTraining);
        }

    }
})();
/*(function () {
    'use strict';

    angular.module('app.foodclubs', [])
        .controller('foodclubsCtrl', foodclubsController);

    function foodclubsController(foodclubsService){
        var vm = this;
        vm.createFoodclub = createFoodclub;
        vm.foodclubs = foodclubsService.getFoodclubs()
            .then(function(result){
                console.log(result);
                vm.foodclubs = result;
            });

        function createFoodclub(){
            console.log("Test create foodclub");
            var newDish = {
                month: vm.month,
                year: vm.year,
                place: vm.place,
                dish: vm.dish,
                dessert: vm.dessert,
                missing: vm.missing,
                guests: vm.guests
            }
            foodclubsService.createFoodclub(newDish);
        }


    }
})();*/
