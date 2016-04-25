var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "ASTHMA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 19 year old woman with 24 weeks pregnancy. I am an asthamatic patient. Is there any risk to me and my baby?",
    "answer" : "Yes there are risks to the mother and baby if asthma is not controlled."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "ASTHMA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the complications of asthma in a pregnant woman?",
    "answer" : "Preeclampsia ( a condition in which there is hypertension and increased excretion of proteins in urine ) Pregnancy-induced hypertension Uterine hemorrhage ( bleeding in uterus ) Preterm labor ( labor pains started even before the competion of months ) Premature birth Congenital anomalies Fetal growth restriction Low birth weight Neonatal hypoglycemia, seizures ( fits ), tachypnea ( increased respiratory rate ),"
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "ASTHMA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Does a pregnant woman having asthma has any effect on infant's weight?",
    "answer" : "This risk of giving birth to a small or preterm infant appears to be small and may be minimized by good control of asthma. Studies have indicated that low-birth-weight infants are more common in women with daily symptoms or low expiratory flow than in women without asthma."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "ASTHMA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is the risk to mother in case if she is asthmatic?",
    "answer" : "Asthma can also lead to the following morbidities in pregnant women: Respiratory failure and the need for mechanical ventilation Barotrauma Complications of (parenteral) steroid use Death can also occur."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "ASTHMA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the symptoms of asthma?",
    "answer" : "Cough Shortness of breath Chest tightness Noisy breathing Nocturnal awakenings ( sudden wakening at night ) Personal or family history of other atopic disease (eg, hay fever, eczema)"
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "ASTHMA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "My wife is 8 weeks pregnant woman. She is a healthy woman and never had asthma.But her mother is an asthmatic patient. Are there any chances for my wife to get asthma during pregnancy?",
    "answer" : "Asthma contracts due to the combination of genes and environmental factors. As your mother in law has asthma, there are chances for your wife to get effected with asthma. Please consult the doctor when there are symptoms."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "ASTHMA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What causes asthma?",
    "answer" : "Asthma many times is due to interaction of genetic predisposition and environmental factors. The possible causing factors are: 1) Pollens, house-dust mites, cockroach antigen ( foreign body ), animal dander, molds, and stings of bees. 2) Irritants, including cigarette smoke, wood smoke, air pollution, strong odors, occupational dust, and chemicals. 3) Medical conditions, including viral respiratory infections, sinusitis, esophageal reflux ( reversal of acid ), and worm infestations 4) Drugs and chemicals, including aspirin, nonsteroidal anti-inflammatory drugs ( pain killers ), beta blockers, Exercise, 5)Cold air 6) Menses 7) Emotional stress"
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "ASTHMA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the anti-asthmatic drugs that I can take during pregnancy?",
    "answer" : "The drugs which you can take safely for asthma during pregnancy are: Salbutamol / Salmeterol Ipratropium bromide Beclomethasone Budesonide Sodium cromoglycate"
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "ASTHMA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the anti-asthmatic drugs that I should not take during pregnancy?",
    "answer" : "The anti-asthmatic drugs that are not safe durng pregnancy are: Theophylline, Ketotifen,Montelukast, Zafirlukast"
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