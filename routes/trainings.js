var express = require('express');
var router = express.Router();
var trainingModel = require('../data/trainingsModel');
var mongoose = require('mongoose');


//get trainings
router.get('/trainings', function(req, res, next) {
    trainingModel.find(function(err, collection){
        if(err){
            console.error(err);
        }
        //console.log(collection);
        res.json(collection);
    });
});
/* POST create training. */
router.post('/createTraining', function(req, res) {
   var db = mongoose.connection;
    db.collection('trainings').insertOne({
        "category": req.body.category,
        "date": req.body.date,
        "duration": req.body.duration,
        "comment": req.body.comment,
    }, function(err, result){
        console.log(err);
        console.log("document inserted into trainings");
        res.sendStatus(200);
    });
    /*var trainingtest = [{
        "category": "crossfit",
        "date": "2015-09-09",
        "duration": "1:30",
        "comment": "testing hardcoded2"}];
    trainingModel.create(
        trainingtest
    , function(err, result){
        console.log("document inserted into the trainings collection");
        res.sendStatus(200);
    })*/
});

/* POST delete training. */
router.post('/deleteTraining', function(req, res){
    //var collection = db.collection("trainings");
    trainingModel.remove({_id:req.body.id}, function(err, records){
        if(err){
            console.log("Error " + err);
            res.sendStatus(400);
        }
        else{
            console.log("training deleted");
            res.sendStatus(200);
        }
    });
});


module.exports = router;
