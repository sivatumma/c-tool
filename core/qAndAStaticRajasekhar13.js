var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Hi, I want to know how pregnancy begins. Can you explain me?",
    "answer" : "Fertilization, the union of an egg and a sperm into a single cell, is the first step in a complex series of events that leads to pregnancy. Fertilization takes place in the fallopian tube ( a tube arising from uterus ). Over the next few days, the single cell divides into multiple cells. At the same time, the small cluster of dividing cells moves through the fallopian tube to the lining of the uterus. There it implants and starts to grow."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Are there any different names called embryo and fetus?",
    "answer" : "From implantation ( attachment of that single cell to the inner wall of uterus until the end of the eighth week of pregnancy, the baby is called an embryo. From the ninth week of pregnancy until birth, it is called a fetus."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is the placenta?",
    "answer" : "The placenta is formed from some of these rapidly dividing cells. The placenta functions as a life-support system during pregnancy. Oxygen, nutrients, and hormones from the mother are transferred across the placenta to reach the baby, and waste products from the baby are transferred to the mother for removal."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How will my uterus change during pregnancy?",
    "answer" : "During pregnancy, the lining of your uterus thickens and its blood vessels enlarge to provide nourishment to the fetus. As pregnancy progresses, your uterus expands to make room for the growing baby. By the time your baby is born, your uterus will have expanded to many times its normal size."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Hi I am 23 weeks pregnant now. How many days should I wait to to deliver my baby?",
    "answer" : "A normal pregnancy lasts about 40 weeks from the first day of your last menstrual period (LMP). Pregnancy is assumed to start 2 weeks after the first day of the LMP. Therefore, an extra 2 weeks is counted at the beginning of your pregnancy when you are not actually pregnant. Pregnancy “ officially” lasts 10 months (40 weeks)—not 9 months—because of these extra weeks. So , you have to wait till your 38 weeks of gestation."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens during 1–4 weeks of pregnancy?",
    "answer" : "The dividing fertilized egg moves down the fallopian tube toward the uterus. At about 5 days after fertilization, the cluster of dividing cells enters the uterus. At about 8–9 days after fertilization, the cluster of cells (now called a blastocyst) attaches to the lining of the uterus."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens during 5–8 weeks of pregnancy?",
    "answer" : "The placenta begins to form. 1) The brain and spinal cord begin to form. 2) The tissues that will form the heart begin to beat. The heartbeat can be detected during an ultrasound exam at about 6 weeks of pregnancy. 3) Buds for limbs appear with paddle-like hands and feet. 4) The eyes, ears, and nose begin to develop. Eyelids form, but remain closed. 5) The genitals begin to develop. 6) By the end of the eighth week, all major organs and body systems have begun to develop"
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens during 9–12 weeks of pregnancy?",
    "answer" : "Buds for future teeth appear. Fingers and toes start to form. Soft nails begin to form. Bones and muscles begin to grow. The intestines begin to form. The backbone is soft and can flex. The skin is thin and transparent. The hands are more developed than the feet. The arms are longer than the legs."
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens during 13–16 weeks of pregnancy?",
    "answer" : "Eyebrows, eyelashes, and fingernails form. Arms and legs can flex. External sex organs are formed. The placenta is fully formed. The outer ear begins to develop. The fetus can swallow and hear. The neck is formed. Kidneys are functioning and begin to produce urine. In male fetuses, the testicles begin to descend from the abdomen. Genitals become either male or female at week 14."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens during 17–20 weeks of pregnancy?",
    "answer" : "The sucking reflex develops. If the hand floats to the mouth, the fetus may suck his or her thumb. The skin is wrinkled, and the body is covered with a waxy coating (vernix) and fine hair (lanugo). The fetus is more active. You may be able to feel him or her move. The fetus sleeps and wakes regularly. Nails grow to the tips of the fingers. The gallbladder begins producing bile, which is needed to digest nutrients. In female fetuses, the eggs have formed in the ovaries. It may be possible to tell the sex of the baby on an ultrasound exam."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens during 21–24 weeks of pregnancy?",
    "answer" : "Real hair begins to grow. The brain is rapidly developing. The eyes begin to open. Finger and toe prints can be seen. The lungs are fully formed but not yet functioning"
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens during 25–28 weeks of pregnancy?",
    "answer" : "The eyes can open and close and sense changes in light. Lanugo begins to disappear. The fetus kicks and stretches. The fetus can make grasping motions and responds to sound. Lung cells begin to make surfactant."
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens during 29–32 weeks of pregnancy?",
    "answer" : "With its major development finished, the fetus gains weight very quickly. Bones harden, but the skull remains soft and flexible for delivery. The different regions of the brain are forming. Taste buds develop, and the fetus can taste sweet and sour. The fetus may now hiccup."
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens during 33–36 weeks of pregnancy?",
    "answer" : "The fetus usually stays in a head-down position in preparation for birth. The brain continues to develop. The skin is less wrinkled. The lungs are maturing and getting ready to function outside the uterus. Sleeping patterns develop."
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens during 37–40 weeks of pregnancy?",
    "answer" : "The fetus drops lower into the pelvis. More fat accumulates, especially around the elbows, knees, and shoulders. The fetus gains about 1/2 pound per week during this last month of pregnancy"
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "FETAL DEVELOPMENT",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "When will be the heart beat of fetus detected in ultrasound?",
    "answer" : "At about 6 weeks, your baby's heart beat can usually be detected."
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