function dummyData() {
    var medicationData = dietPlanData = exercisePlanData = {
        userID: "",
        userRating: 3.5,
        date: new Date(),
        medicines: [{
            medicineName: "Super Medicin",
            intakeMethod: "Oral",
            quantity: "", // Think again
            dosage: {
                quantity: 20,
                uom: "mg"
            },
            shape: "hexagon",
            color: "#f4f4f4",
            schedules: [{
                datetime: new Date(),
                compliance: false,
                reminderType: "Jingle1",
                reminderToggle: true
            }],
        }, {
            medicineName: "Super Medicin",
            intakeMethod: "Oral",
            quantity: "", // Think again
            dosage: {
                quantity: 20,
                uom: "mg"
            },
            shape: "hexagon",
            color: "#f4f4f4",
            schedules: [{
                datetime: new Date(),
                compliance: false,
                reminderType: "Jingle1",
                reminderToggle: true
            }],
        }, {
            medicineName: "Super Medicin",
            intakeMethod: "Oral",
            quantity: "", // Think again
            dosage: {
                quantity: 20,
                uom: "mg"
            },
            shape: "hexagon",
            color: "#f4f4f4",
            schedules: [{
                datetime: new Date(),
                compliance: false,
                reminderType: "Jingle1",
                reminderToggle: true
            }],
        }, {
            medicineName: "Super Medicin",
            intakeMethod: "Oral",
            quantity: "", // Think again
            dosage: {
                quantity: 20,
                uom: "mg"
            },
            shape: "hexagon",
            color: "#f4f4f4",
            schedules: [{
                datetime: new Date(),
                compliance: false,
                reminderType: "Jingle1",
                reminderToggle: true
            }],
        }]
    };
    var dietPlanData = {
        userID: "30311",
        date: new Date(),
        nutritionalAdvice: "Eat high fiber foods",
        recommendedCalories: 1900,
        foods: [{
            timeOfDay: "Early Morning",
            schedule:new Date(),    //  derive intelligently from the above timeOfDay
            calorificValue: 40,
            compliance: false,
            reminder: true,
            changes: [{
                name: "",
                qty: ""
            }],
            items: [{
                name: "Vegetable Salad",
                qty: "1 bowl"
            },{
                name:"Phulkas",
                qty:2
            },{
                name:"Ridgegourd Curry",
                qty:"1 cup"
            },{
                name:"Ladiesfinger phugath",
                qty:"1 cup"
            },{
                name:" red gram dal ( thin watery)",
                qty:"1 Cup"
            }]
        }]
    };
    return {
        medicationData: medicationData,
        dietPlanData: dietPlanData,
        exercisePlanData: exercisePlanData
    };
}
module.exports = dummyData;