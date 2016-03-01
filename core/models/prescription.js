var prescriptionSchema = new Schema({
	module.exports = Presccription;
{
patientsName: String,
adress: String,
age: Number,
gender: String,
height: Number,
weight: Number,
typeOfDecease:[{String}],
allergies: String,
patientCondition: String,
PharmaceuticalName: String,
BrandName: String
Dosage: String,
Frequency: Number,
Instructions: String,
StartDate: Number,
EndDate: Number,
doseRegimen: Number,
RelatedConditions: String,
SubstitutionPermitted: [{String}],
prerequisite: String,
Refill: Number,
InstructionToPatient: String,
InstructionToPharmacist: String,
InternalNotes: String,
}]
});
var Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Presccription;