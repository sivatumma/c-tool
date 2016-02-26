var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var questionAndanswerSchema = new Schema({
name: String,
questionBy:
[{
     name: String,
     views: Number,
answerBy:
[{
     name: String,
     views: Number,
  disLikes: Number,
     likes: Number,
  comments: String,
}]
}]
vat QuestionandAnswer = mongoose.model('QuestionandAnswer', questionandanswerSchema);
module.exports = QuestionandAnswer;
)};  	