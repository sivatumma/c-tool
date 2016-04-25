var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I have a 7-year-old daughter and am expecting my second child. I think I have conceived last week. I do not want this child.Are there any medicines by which I can abort my child, without undergoing surgery or going to a hospital?",
    "answer" : "You cannot terminate the pregnancy on your own by taking medicines. This may cause serious illness to you and you may also suffer from severe blood loss. Consult your doctor and take a decision accordingly."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Is there a procedure to terminate the pregnancy in India?",
    "answer" : "Yes, there is a legal procedure to terminate the pregnancy. Any doctor cannot terminate the pregnancy It needs the advice of atleast two doctors. Termination of pregnancy can be done only in government or government recognised hospitals under the supervision of 2 doctors."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is a miscarriage?",
    "answer" : "A miscarriage is the loss of a pregnancy before 24 weeks, with most miscarriages actually occurring during the first 12 weeks of pregnancy. Unfortunately, miscarriage is very common, affecting one in five pregnancies."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How many types of miscarriages are there?",
    "answer" : "There are different types of miscarriages:- 1) silent (missed) miscarriage – Some women have no symptoms at all and the miscarriage is only diagnosed by the absence of the fetal heart when they are given an ultrasound scan. 2) Incomplete miscarriage – Some women will bleed and may have pain. An ultrasound will show remaining products still within the womb. 3) Complete miscarriage – Some women will bleed and may have pain, then it settles. An ultrasound will shows an empty womb cavity. 4) Blighted ovum – Some women have no symptoms at all and the miscarriage is only diagnosed by the presence of an empty sac within the womb when they are given an ultrasound scan."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the signs that I’m having a miscarriage?",
    "answer" : "1) Spotting (finding spots of blood on your underpants or toilet tissue after urinating) or bleeding is sometimes the first sign of miscarriage. 2) Aabdominal pain, which can feel crampy or persistent as well as mild or sharp. 3) low back pain or pelvic pressure. 4) The bleeding and cramping may get worse shortly before you pass the “products of conception” – that is, the placenta and the embryonic or fetal tissue, which will look greyish and may include blood clots. If you can, save this tissue in a clean container because your doctor may want to examine it or send it to a laboratory for testing. 5) Some may pass blood clots or tissue-like material. Other unfortunate women may find tiny arms and legs, which can be horrific and shocking. 6) Some miscarriages are discovered only during a routine antenatal clinic or scan visit."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Does spotting indicate miscarriage?",
    "answer" : "Spotting is common early in pregnancy and may or may not be a sign of a problem with the baby. However, 50% of the time it is actually a symptom of a serious problem such as a miscarriage, an ectopic pregnancy or in vary rare cases a molar pregnancy."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What does the doctor do in case of a miscarriage?",
    "answer" : "An abdominal examination is usually combined with an internal (pelvic) examination. 1) In this way, it is possible to determine if the bleeding is a sign of a pregnancy that is destined to miscarry or one that may continue. 2) An ultrasound scan is the most useful investigation. This is performed through the abdomen or through the vagina and gives precise information about whether the pregnancy is continuing or not."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "If I have a miscarriage, do I have to undergo surgery?",
    "answer" : "Not always. You will usually be given the option of either conservative management or a D&C (dilatation and curettage)/evacuation of retained products of conception (ERPC). The decision will be reached after full discussion with you, depending on several clinical factors"
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Is there anything a woman can do to prevent a pregnancy loss?",
    "answer" : "Most of the time, a woman cannot do anything to prevent a miscarriage. Getting preconception care and prenatal care before becoming pregnant and during pregnancy can help prevent some complications before they occur."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What lifestyle factors can increase risk for pregnancy loss or stillbirth?",
    "answer" : "Pregnant women who use illicit drugs,2 smoke,3 drink alcohol,4 or have more than 200 milligrams of caffeine every day (about the amount in a 12-ounce cup of coffee)5 may increase their risk of miscarriage. The consumption of less than 200 milligrams of caffeine per day does not seem to be related to risk of miscarriage or preterm birth. Additionally, pregnant women who use illicit drugs, smoke, or drink alcohol increase their risk of stillbirth. The risk of stillbirth is increased in women who are obese.6 Women who are obese should discuss losing weight with their health care provider before attempting to conceive."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "Miscarriage",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How soon after a pregnancy loss can a woman try again for another infant?",
    "answer" : "It is typically safe for a woman to conceive after one normal menstrual cycle has occurred following a pregnancy loss. However, it is best to wait until she is physically and emotionally ready to become pregnant again and until any tests recommended by a health care provider to determine the cause of the miscarriage have been completed."
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