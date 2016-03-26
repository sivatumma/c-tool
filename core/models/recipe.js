var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var recipeSchema = new Schema({
	name: String,
	cuisine: String,
	subCusine: String,
	recipeType: String,
	ingredients: [{
		NAME: String,
		qty: Number,
		uom: String,
		"MOISTURE_GM": Number,
		"PROTEIN_GM": Number,
		"FAT_GM": Number,
		"MINERALS_GM": Number,
		"FIBER_GM": Number,
		"CARBOHYDRATES_GM": Number,
		"ENERGY_KCALS": Number,
		"CALCIUM_MG": Number,
		"PHOSPHOROUS_MG": Number,
		"IRON_MG": Number,

		"CAROTENE_Vit_A_microgram": Number,
		"THIAMINE_Vit_B1_mg": Number,
		"RIBOFLAVIN_VIT_B2_mg": Number,
		"NIACIN_VIT_B3_mg": Number,
		"TOTAL_B6_mg": Number,
		"Folic_Acid_Free": Number,
		"Folic_Acid_Total": Number,
		"VITAMIN_C_mg": Number,
		"CHOLINE_mg": Number,
		"Na_mg": Number,
		"K_mg": Number,
		"Zn_mg": Number,
		"Total_Saturates_Percent": Number,
		"Total_Monounsaturate_Percent": Number,
		"Total_Polyunsaturate_Percent": Number,
	}],
	createdBy: String,
});

recipeSchema.add({
    servingUnit:String,
    diseaseFriendly:String,
    giIndex: String,
    foodType:String,
    mealType:String,
    cuisine:String

});
    

recipeSchema.methods.totalEnergy = function() {

};

var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;