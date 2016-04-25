var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can I take paracetamol during pregnancy?",
    "answer" : "Paracetamol is relatively safe during pregnancy. But itshould be taken only as advised by the doctor. During pregnancy its better to avoid over the counter drugs. Take all the medications only if they have been advised by the doctor."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 30 years old woman with 28 weeks of pregnancy. This is my second pregnancy. I have the habit of taking diclofenac ( pain killer ) for leg pains. Can I use it now?",
    "answer" : "Avoid using in third trimester of pregnancy (may cause premature closure of ductus arteriosus) if >30 weeks after gestation. During lactation this drug is excreted in breast milk. So, not recommended"
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is meant by anti emetics?",
    "answer" : "The drugs which can prevent the occurrence of vomitings."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "A friend of mine gave me a drug used by her for vomitings. I am 26 years old pregnant woman . May I use that drug?",
    "answer" : "During pregnancy, some medicines should not be used due to their adverse effects against the fetus. Use only those prescribed by a qualified doctor. Vomiting is very common complaint during pregnancy . This will be resolved by the end of first trimester."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What kind of drugs can be used to relieve vomitings in pregnanacy?",
    "answer" : "All drugs used by normal people cannot be used by pregnant women. Drugs like Domperidone and Ondonsetron cannot be used because of its adverse effects on fetus. Druga like promethazine, prochlorpherazine ,meatclopromide, dicyclomine can be used for vomitings in pregnant women."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What kind of drugs can be taken for constipation?",
    "answer" : "It is always better not to use drugs during pregnancy . Constipation is a common problem during pregnancy. Instead of using drugs to relieve constipation ,add fibre containg foods. You can also use the formulations containing Isaphagul or lactulose. If constipation is bothering you , better to consult your doctor instead of straining."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can I take aspirin during pregnancy?",
    "answer" : "No, aspirin should not be taken during pregnancy. It is unsafe to both mother and fetus"
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am a 29 year old female. I suffered four miscarriages in the last 6 years. After that , I am suffering from depression and was advised to use anti depressant drugs. Now I am planning to conceive.What kind of drugs should I not use?",
    "answer" : "The anti depressants containing the below given formulations are unsafe during pregnancy: Trimipramine , Dothiepin ,Sertraline, Paroxetine, Citalopram,Trazodone, Venlafaxrne,Moclobemide The antidepressant drugs which you can use are: Amitriptyline, Imipramine,Clomipramine, Fluoxetine All these are the actual name of the drugs seen under the company given name over the tablet strip."
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What kind of anti coagulants are safe during pregnancy?",
    "answer" : "The anti coagulants that can be used during pregnancy are: Heparin (unfractionated) Heparin (LMW)"
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can I use warfarin during pregnancy?",
    "answer" : "No, warfarin (coumadin ) cannot be used during pregnancy. It is unsafe and a teratogenic (causing birth defects) drug ."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "Drugs in pregnancy",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Hi, I am a pregnant woman. I have a white discharge from 4 days. I was diagnosed with a fungal disease.What kind of anti-fungals can I use?",
    "answer" : "Drugs like clotrimazole, nystatin, are safe during pregnancy. Drugs like ketoconazole,amphotericin B, Itraconazole, Griseofulvin are contraindicated in pregnancy."
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