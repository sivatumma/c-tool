var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var exerciseSchema = new Schema({
	tip: String,
	sutableFor: [String],
	delivered: Boolean,
    [{
      view: Number,
    ignore: Number,
    }]
});

var Tip = mongoose.model('Tip', tipSchema);
module.exports = Tip;