var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var exerciseSchema = new Schema({
	name: String,
	time: String,
	weight: Number,
	caloriesBurn: Number,
	sutableFor: String,
	createdBy:String
});

var Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;