var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var treatmentSchema = new Schema({
name: String,
age: Number,
weight: Number,
overallHealth: String,
medicalHistory: String,
medications: Boolean,

deceaseName: String,
levels :[{
          level1: Number,
          level2: Number,
        ]}
treatment:[{
          medications: String,
          nutrition: String,
          physicalActivity: String,
          }]

challenges:[{
             weightloss: Number,
             foodDiet: String,
            }]
reconsulting: [{
       schedulings: Number,
           }]

var Treatment = mongoose.model('Recipe', treatmentSchema);
module.exports = Treatment;
}]
)};