var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var trainingSchema = new Schema({
    category: String,
    date: Date,
    duration: String,
    comment: String
}, {collection: "trainings"});

var TrainingSchema = mongoose.model('TrainingSchema', trainingSchema);

module.exports = TrainingSchema;
