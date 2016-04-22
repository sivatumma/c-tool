var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "I was examined and informed that my baby is in breech position. What does it mean when a baby is breech?",
    "answer" : "A breech presentation occurs when the baby’s buttocks, feet, or both are near birth canal to come out first during birth. The incidence is about 20% at 28th week and drops to 5% at 34th week and to 3–4% at term. This means , the breech presentation in the beginning may spontaneously correct to vertex presentation. For further queries, ask your doctor."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "Why my baby is in reverse position ( breech ) in the uterus?",
    "answer" : "It is not always known why a baby is breech. Some factors that may contribute to a baby being in a breech presentation include the following: You have been pregnant before. There is more than one fetus in the uterus (twins or more). There is too much or too little amniotic fluid. The uterus is not normal in shape or has abnormal growths such as fibroids. The placenta covers all or part of the opening of the uterus (placenta previa). The baby is preterm. Occasionally babies with certain birth defects will not turn into the head-down position before birth. However, most babies in a breech presentation are otherwise normal. For further queries, ask your doctor."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "How can the doctor tell if my baby is in breech position ?",
    "answer" : "Your health care provider may be able to tell which way your baby is facing By placing his or her hands at certain points on your abdomen. By feeling where the baby’s head, back, and buttocks are, it may be possible to find out what part of the baby is presenting near the birth canal first. An ultrasound exam or pelvic exam may be used to confirm it. For further queries, ask your doctor."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "What is external cephalic version (ECV)?",
    "answer" : "External cephalic version (ECV) is an attempt to turn the baby so that he or she is head down. It can improve your chance of having a vaginal birth. If the baby is breech and you are between 36 weeks and 38 weeks of pregnancy, your doctor may suggest ECV. For further queries, ask your doctor."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "When will ECV not be attempted?",
    "answer" : "ECV will not be done if you are carrying more than one baby, if there are concerns about the health of the baby, you have certain abnormalities of the reproductive system, or the placenta is in the wrong place. or has detached from the wall of the uterus (placental abruption). For further queries, ask your doctor."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "How is ECV performed?",
    "answer" : "The health care provider performs ECV by placing his or her hands on your abdomen. Firm pressure is applied to the abdomen so that the baby rolls into a head-down position. Two people may be needed to perform ECV. Ultrasound also may be used to help guide the turning. The baby’s heart rate is checked with fetal monitoring before and after ECV. If any problems arise with you or the baby, ECV will be stopped right away. ECV usually is done near a delivery room. If a problem occurs, a cesarean delivery can be performed quickly, if necessary."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "What complications can occur with ECV?",
    "answer" : "Complications may include the following: Premature rupture of membranes Changes in the baby’s heart rate Placental abruption Preterm labor"
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "How successful are attempts at ECV?",
    "answer" : "More than one half of attempts at ECV succeed. However, some babies who are successfully turned with ECV move back into a breech presentation. If this happens, ECV may be tried again. ECV tends to be harder to do as the time for birth gets closer. As the baby grows bigger, there is less room for him or her to move."
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "My baby is not in a breech position How is the delivery planned?",
    "answer" : "Today, most breech babies are born by planned cesarean delivery. A planned vaginal birth of a single breech baby may be considered in some situations. Both vaginal birth and cesarean birth carry certain risks when a baby is breech. However, the risk of complications is higher with a planned vaginal delivery than with a planned cesarean delivery."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "What complications can occur during a vaginal birth of a breech baby?",
    "answer" : "In a breech presentation, the body comes out first, leaving the baby’s head to be delivered last. The baby’s body may not stretch the cervix enough to allow room for the baby’s head to come out easily. There is a risk that the baby’s head or shoulders may become wedged against the bones of the mother’s pelvis. Another problem that can happen during a vaginal breech birth is a prolapsed umbilical cord. It can slip into the vagina before the baby is delivered. If there is pressure put on the cord or it becomes pinched, it can decrease the flow of blood and oxygen through the cord to the baby."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "What complications can occur during a cesarean delivery?",
    "answer" : "A cesarean delivery is major surgery. Like any major surgery, cesarean delivery may be complicated by infection, bleeding, or injury to internal organs. The type of anesthesia used sometimes causes problems. Having a cesarean delivery also can lead to serious problems in future pregnancies, such as rupture of the uterus and complications involving the placenta. With each cesarean delivery, these risks increase."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "What things do I need to consider if I want to have a vaginal birth and my baby is breech?",
    "answer" : "If you are thinking about having a vaginal birth and your baby is breech, your health care provider will review the risks and benefits of vaginal birth and cesarean birth in detail. You usually need to meet certain guidelines specific to your hospital. The experience of your health care provider in delivering breech babies vaginally also is an important factor."
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "Baby Position",
    "doctorName" : "Raja Sekhar",
    "question" : "What is vertex presentation?",
    "answer" : "In the last weeks of pregnancy, babies usually move so that their heads are positioned to come out of the vagina first during birth. This is called a vertex presentation"
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
  qanda.category = "Pre, Peri & Post Natal";
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};