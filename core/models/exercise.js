var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var exerciseSchema = new Schema({
    name: String,
    time: String,
    weight: Number,
    caloriesBurn: Number,
    sutableFor: String,
    createdBy: String
});
exerciseSchema.add({
    reviews: [{
        reviewer: String,
        reviewerFlag: {
            type: String,
            enum: "Junk,Duplicate,Final".split(',')
        },
        reviewerSuggestions: String,
        reviewAcknowledged: Boolean
    }]
});

exerciseSchema.add({met:Number});

exerciseSchema.add({
    reviewer: String,
    reviewerFlag: {
        type: String,
        enum: "Junk,Duplicate,Final".split(',')
    },
    reviewerSuggestions: String,
    reviewAcknowledged: Boolean
});

var Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;