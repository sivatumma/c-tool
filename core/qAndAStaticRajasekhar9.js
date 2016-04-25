var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "X-ray",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can X ray be taken during pregnancy?",
    "answer" : "A pregnant woman should not undergo any X-ray studies unless the benefits of x-rays outweigh the risk of mother losing life. The X-rays have the potential of causing malformations in the fetus . Diagnostic range of radiation exposure( < 5Rads ) is not associated with any significant congenital malformations. The mother should not be exposed to radiations in the first trimester."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "CT-SCAN",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "A 26 year old and 18 weeks pregnant woman suffered a head injury Her head was scanned under CT. Is there a danger to the baby? I heard that pregnant women should not be exposed to radiation. Is this a medical negligence?",
    "answer" : "The pregnant women should not be exposed to radiation unless it is emergency. CT scan to the brain with minimal radiation and shielding the abdomen can prevent the hazards to fetus. In your case, CT was done to rule out emergency and to save the life of mother. So this is not medical negligence. Radiation can be done if the mother's life is at risk."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "MRI",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Is MRI dangerous to pregnant ladies?",
    "answer" : "MRI does not use any ionising radiation. So, MRI studies can be done if necessary.MRI is biologically safe. MRI produces sounds and electro magnetic waves which may disturb the fetus."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "ULTRASOUND",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "My wife is 33 months pregnant. She is undergoing many ultrasound scans since her conception. Does it cause any harm to baby?",
    "answer" : "Ultra sound doesn't use any radiation. It is the routine equipment used to assess the fetal well being. It is the safest one."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "ULTRASOUND",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Are there any differences in ultra sound scan?",
    "answer" : "There are several types of ultrasound that doctors use during pregnancy: Transabdominal (standard) ultrasound. ( A Probe is used to run over your abdomen to see through) Transvaginal ultrasound. ( a lond slender probe is used to visualise the uterus which can't be seen transabdominally ) Doppler imaging. 3D ultrasound. 4D ultrasound. Fetal echocardiogram."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "ULTRASOUND",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What Can an Ultrasound Show?",
    "answer" : "Prenatal ultrasound can help reveal: Your stage of pregnancy and due date. How many babies you’re carrying. Your baby’s heart rate and heart function. Your baby’s position inside the uterus such as head-down or breech ( buttocks down ). Certain birth defects or conditions such as Down syndrome. Your baby’s anatomy, movements and size. Reproductive growths in the mother such as ovarian cysts and uterine fibroids. The placenta’s location. The amount of amniotic fluid."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "ULTRASOUND",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens During a Pregnancy Ultrasound?",
    "answer" : "During a standard, transabdominal ultrasound, you will lie back with your shirt pulled above your belly. The ultrasound technician applies a water-based jelly on your abdomen, then moves the probe gently back and forth across your skin. Your technician may need to press the wand down at times for more accurate readings, but it doesn’t hurt."
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
  qanda.category = "Diabetes";
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};