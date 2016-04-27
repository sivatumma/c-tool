var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/*************************************************************
	category & suitableForDisease are used for similar meanings 
	in the context of a Tip

*/
var tipSchema = new Schema({
	tip: String,
	suitableForDisease: {
		type:String,
		default:"Both"
	},
	sutableForTime:{
		type:String,
		default:"Mornings"
	},
	delivered: Boolean,
    views: Number,
    ignores: Number,
	createdBy:String
});

tipSchema.add({suitableForTime:String});

tipSchema.add({category:String,subCategory:String,tipDescription:String});

tipSchema.add({
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

var Tip = mongoose.model('Tip', tipSchema);
module.exports = Tip;