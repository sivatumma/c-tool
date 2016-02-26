var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var recipeSchema = new Schema({
	name: String,
	[{
		cuisine: String,
		subCusine: String,
		recipeType: String,
	}],
	ingredients: [{
		name: String,
		qty: Number
		uom: String
	}],
});

var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;