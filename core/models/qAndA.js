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

questionAndAnswerSchema.add({category:String, subCategory:String, consultNow:Boolean,consultDoctorType:String});
questionAndAnswerSchema.add({
    reviews: [{
        reviewer: String,
        reviewerFlag: {
            type: String,
            enum: "Junk,Duplicate,Final".split(',')
        },
        reviewerSuggestions: String,
        reviewAcknowledged: Boolean
    }]
});

var QandA = mongoose.model('QandA', questionAndAnswerSchema);
module.exports = QandA;