var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var questionAndAnswerSchema = new Schema({
	doctorName: String, // Who Created this basically
	question: String,
	answer: String,
	keywords:String,
	views: Number,
	dislikes: Number,
	likes: Number,
	comments: String,
	createdBy:String
});
var QandA = mongoose.model('QandA', questionAndAnswerSchema);
module.exports = QandA;