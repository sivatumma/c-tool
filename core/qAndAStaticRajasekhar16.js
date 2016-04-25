var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "Anaemia",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 20 year old and I am 14 weeks pregnant. I was informed by my physician that I don’t have enough haemoglobin. What is that?",
    "answer" : "Anaemia is a condition in which haemoglobin concentration is less than 10mg/dl. Haemoglobin is the carrier of oxygen to various cells of human body for proper functioning of body parts."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "Anaemia",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens to fetus when a pregnant woman is suffering from anaemia?",
    "answer" : "When your haemoglobin is decreased, the oxygen carried to body parts also decreased. Then the fetus do not get enough iron to grow. This may lead to : Hypoxia during birth ( inability to breathe properly ) Preterm birth - Small for gestational age baby (IUGR) - Birth anoxia - Intrauterine death / still birth - Low mean weight - Infection - Cognitive and affective dysfunctions - Iron deficiency anemia - Hypertension (in later life)"
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "Anaemia",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 31 year old and I am 28 weeks pregnant. Why am I being given iron and folic acid tablets ?",
    "answer" : "Actually, the pregnant women need more iron during second half of the pregnancy. This is the time the fetus uses the iron reserves of mother for its development. There are some complications to both mother and fetus if mother has severe anaemia. The iron and folic acid tablets are prescribed during pregancy to increase the iron deposits and haemoglobin concentration."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "Anaemia",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Is there a risk to mother during pregnancy in case of less haemoglobin?",
    "answer" : "Yes there are risks for mother during pregnancy like: Preeclampsia ( increased blood pressure and other conditions) - Abruptio placentae ( bleeding in uterus with seperation of placenta ) - Preterm labor - Cardiac failure (especially at 30-32 weeks) - Infections"
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "Anaemia",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens to mother if she has severe anaemia during delivery?",
    "answer" : "During delivery the mother loses blood. If the mother is anaemic before delivery , she may face complications. The following complications may occur in case of severe anaemia. 1) uterine inertia ( absence of uterine contractions during delivery ) 2) post partum haemorrhage ( bleeding after delivery ) 3) Cardiac failure ( heart failure ) 4) Shock ( fatigue,fainting due to decreased blood volume )"
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "Anaemia",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "When does it cause more harm for mother in pregnancy time? Is it before /after/during delivery?",
    "answer" : "The risk periods for mother are: 30-32 weeks of pregnancy During labor Immediately following delivery Puerperium ( a phase after delivery)"
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "Anaemia",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How do I know If I have anaemia?",
    "answer" : "In mild anaemia, you may have weakness, fatigue (tired), lassitude, indigestion and loss of appetite ( not hungry ) In severe anaemia , you may have palpitation ( awareness of own heart beat ), breathlessness, giddiness, edema and general anasarca ( swelling of the whole body )"
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "Anaemia",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the foods that inhibit the iron absorption?",
    "answer" : "The list of foods given below inhibit the absorption of iron. Phytates ( rich in legumes , nuts etc) Calcium ( rich in milk and milk products ) Tannins ( rich in spices, tamarind, legumes , turmeric…etc.,) Tea and coffee Herbal drinks Fortified iron supplements"
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "Anaemia",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the normal lab blood tests done to detect anemia?",
    "answer" : "The normal blood tests done to evaluate anemia are: 1) RBC (Red Blood Cell ) count 2) Haemoglobin % 3) Hematocrit 4) MCV (Mean corpuscular volume ) 5) MCH ( Mean Corpuscular Haemoglobin ) 6) MCHC (Mean corpuscular Haemoglobin Concentration ) 7) Peripheral blood smear"
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