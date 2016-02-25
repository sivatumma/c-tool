typeOfDecease:[{String}],
allergies: String,
pmh: String,
patientCondition: String,
drugName: String,
drugStrength: String,
quantityOfMedicine: Number
dossageFrom: Number,
doseRegimen: Number,
quantityPrescribed: Number,
directionForUse: String,
formOfMedicine: {String}]
ped: Number
}
repeatsToUse: [{
timeOfDay: String,
have: Boolean,
prerequisite: String,
}]
});
var Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Presccription;
