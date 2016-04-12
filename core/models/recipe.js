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

recipeSchema.virtual('totals').get(function () {
  return {
		NAME: "Totals",
		qty: 1,
		uom: "gm",
		"MOISTURE_GM": 273.1,
		"PROTEIN_GM": 273.1,
		"FAT_GM": 273.1,
		"MINERALS_GM": 273.1,
		"FIBER_GM": 273.1,
		"CARBOHYDRATES_GM": 273.1,
		"ENERGY_KCALS": 273.1,
		"CALCIUM_MG": 273.1,
		"PHOSPHOROUS_MG": 273.1,
		"IRON_MG": 273.1,

		"CAROTENE_Vit_A_microgram": 273.1,
		"THIAMINE_Vit_B1_mg": 273.1,
		"RIBOFLAVIN_VIT_B2_mg": 273.1,
		"NIACIN_VIT_B3_mg": 273.1,
		"TOTAL_B6_mg": 273.1,
		"Folic_Acid_Free": 273.1,
		"Folic_Acid_Total": 273.1,
		"VITAMIN_C_mg": 273.1,
		"CHOLINE_mg": 273.1,
		"Na_mg": 273.1,
		"K_mg": 273.1,
		"Zn_mg": 273.1,
		"Total_Saturates_Percent": 273.1,
		"Total_Monounsaturate_Percent": 273.1,
		"Total_Polyunsaturate_Percent": 273.1,
	};
});

recipeSchema.add({
    servingUnit:String,
    diseaseFriendly:String,
    giIndex: String,
    foodType:String,
    mealType:String,
    cuisine:String,
    createdAt:{
        type: Date,
        default: Date.now
    }

});
    

recipeSchema.methods.totalEnergy = function() {

};

var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;