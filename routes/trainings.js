var express = require('express');
var router = express.Router();
var trainingModel = require('../data/trainingsModel');

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
    db.collection('trainings').insertOne({
        "category": req.body.category,
        "date": req.body.date,
        "duration": req.body.duration,
        "comment": req.body.comment,
    }, function(err, result){
        console.log("document inserted into the trainings collection");
        res.send(200);
    });
});

/* POST remove training. */
/*router.post('/removeTraining', function(req, res){
    var collection = db.collection("trainings");
    MessageModel.remove({_id:req.body.id}, function(err, records){
        if(err){
            console.log("Error" + err);
            res.send(400);
        }
        else{
            console.log("training Removed");
            res.send(200);
        }
    });
});*/

module.exports = router;
