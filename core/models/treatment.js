var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var treatmentSchema = new Schema({
name: String,
age: Number,
weight: Number,
overallHealth: String,
medicalHistory: String,
category: String,
treatmentPlanType: String,
[{
treatmentPlanSubType: String,
description: String,
Name: String
}]
Date: Number,
[{
startDate: Number,
endDate: Number,
}]
careType: String,
goals:[{
             weightloss: Number,
             foodDiet: String,
            }]
recuringSchedule: [{
       schedulings: Number,
           }]

var Treatment = mongoose.model('Treatment', treatmentSchema);
module.exports = Treatment;
}]
)};