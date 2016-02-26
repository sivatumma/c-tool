var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var exerciseSchema = new Schema({
	{
		name: String,
		time: String,
		caloriesConsumed: Number,
	}
	sutableFor: [String],
});

var Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;