var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "SKIN",
    "doctorName" : "Dr.RAJASEKHAR",
    "question" : "I am 28 year old and about to reach 29. I delivered a baby girl two months back. My hair started shedding after delivery. Is it permanent?",
    "answer" : "The hair thickens during the time of pregnancy due to harmones. After pregnancy,all those harmones revert to their normal levels. So, you suffer hair loss. This phenomenon is normal and temporary. Hair regrows in 6-15 months."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "SKIN",
    "doctorName" : "Dr.RAJASEKHAR",
    "question" : "What are the pigmentary changes of pregnancy?",
    "answer" : "The most common pigmentary changes of pregnancy are hyperpigmentation and melasma. Hyperpigmentation is most noticeable on the areolae, nipples, genital skin, armpits and inner thighs. Melasma (mask of pregnancy) affects the face in 70% of pregnant women and one third of nonpregnant women taking oral contraceptives. Although the cheeks alone can be affected, the entire central face is involved in most patients."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "SKIN",
    "doctorName" : "Dr.RAJASEKHAR",
    "question" : "I was diagnosed with melasma . Now I am 28 weeks pregnant. Is it going to remain for my entire life?",
    "answer" : "Melasma is expected to improve or resolve postpartum ( after delivery ), and treatment during pregnancy is not recommended. Your dermatologist will review treatment options if it persists after delivery."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "SKIN",
    "doctorName" : "Dr.RAJASEKHAR",
    "question" : "Can stretch marks be prevented?",
    "answer" : "Stretch marks (striae) are common during pregnancy. They can be reduced in severity. The risk factors of stretch marks are: younger maternal age, genetic susceptibility, excessive weight gain, occurrence in previous pregnancy, and concurrent use of corticosteroids. Stretch marks are seen on lower abdomen, groin , inner thighs, buttocks, breasts. Prevention of stretch marks may be achieved with avoidance of excessive or rapid weight gain, following a nutritious diet, keeping skin well hydrated and using an effective moisturizer daily on the areas that are prone to develop stretch marks. If they are very severe , please consult your doctor."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "SKIN",
    "doctorName" : "Dr.RAJASEKHAR",
    "question" : "Is psoriasis expected to worsen in pregnancy?",
    "answer" : "Psoriasis may improve during pregnancy. The pustular (a lesion filled with pus ) form of the disease can be triggered by pregnancy and is then called impetigo herpetiformis. Pustular psoriasis needs to be treated promptly as it has been associated with significant fetal risks, such as stillbirth, neonatal death and fetal abnormalities secondary to placental insufficiency."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "SKIN",
    "doctorName" : "Dr.RAJASEKHAR",
    "question" : "Is acne expected to worsen in pregnancy?",
    "answer" : "The course of acne in pregnancy is unpredictable. A study indicates that 41% of women reported improvement and 29% worsening during pregnancy. Some patients may develop acne for the first time in pregnancy or in the postpartum period. Treatment for acne is given according to the patient’s needs and should be determined by a dermatologist."
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
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};