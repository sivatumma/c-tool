var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var tipSchema = new Schema({
	tip: String,
	sutableForDecease: {
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

var Tip = mongoose.model('Tip', tipSchema);
module.exports = Tip;