var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var nutritiveSchema = new Schema({
	NAME: String,
	MOISTURE_GM: Number,
	PROTEIN_GM: Number,
	FAT_GM: Number,
	MINERALS_GM: Number,
	FIBER_GM: Number,
	CARBOHYDRATES_GM: Number,
	ENERGY_KCALS: Number,
	CALCIUM_MG: Number,
	PHOSPHOROUS_MG: Number,
	IRON_MG: Number,
	CAROTENE_Vit_A_microgram: Number,
	THIAMINE_Vit_B1_mg: Number,
	RIBOFLAVIN_VIT_B2_mg: Number,
	NIACIN_VIT_B3_mg: Number,
	TOTAL_B6_mg: Number,
	Folic_Acid_Free: Number,
	Folic_Acid_Total: Number,
	VITAMIN_C_mg: Number,
	CHOLINE_mg: Number,
	Na_MG: Number,
	K_MG: Number,
	Zn_MG: Number,
	Total_Saturates_Percent: Number,
	Total_Monounsaturate_Percent: Number,
	Total_polyunsaturate_Percent: Number
});

var Nutritive = mongoose.model('Nutritive', nutritiveSchema);
module.exports = Nutritive;