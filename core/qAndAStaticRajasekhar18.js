var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "HEART DISEASE",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are changes to the heart and blood vessels during pregnancy?",
    "answer" : "During pregnancy, changes occur to the heart and blood vessels. These changes put extra stress on a woman’s body and require the heart to work harder. Increase in blood volume. During the first trimester, the amount of blood in the body increases by 40 to 50 percent and remains high. Increase in cardiac output. Cardiac output refers to the amount of blood pumped by the heart each minute. During pregnancy, the output increases by 30 to 40 percent because of the increase in blood volume. Increase in heart rate. It is normal for the heart rate to increase by 10 to 15 beats per minute during pregnancy. Decrease in blood pressure. Blood pressure may decrease by 10 mmHg during pregnancy. This drop can be due to hormone changes and because there is more blood directed toward the uterus. Most of the time, the decrease does not cause symptoms and no treatment is needed. Your healthcare provider will check your blood pressure during your prenatal appointments and will tell you if blood pressure changes are cause for concern."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "HEART DISEASE",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "When I was 10 years old , I was diagnosed with heart disease. Now I am 25 year old married female and planning to conceive. Does the heart disease have any effect on my pregnancy?",
    "answer" : "You can conceive. Prior to that,"
  }
};


// for (k in qandasRajasekhar){
//   console.log(count++, qandasRajasekhar[k]);
// }
// return;

for (var key in qandasRajasekhar) {
  count++;
  var qanda = qandasRajasekhar[key];
  qanda.consultNow = false;
  // qanda.consultDoctorType = qanda.category.split(' ')[1];
  qanda.category = "Pre Natal";
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);module.exports = function() {
  return qAndAModels;
};