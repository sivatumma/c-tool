var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "How does multiple pregnancy occur?",
    "answer" : "A twin, triplet, or higher-order pregnancy (four or more babies) is called multiple pregnancy. If more than one egg is released during the menstrual cycle and each is fertilized by a sperm, more than one embryo may implant and grow in your uterus. This type of pregnancy results in fraternal twins (or more). When a single fertilized egg splits, it results in multiple identical embryos. This type of pregnancy results in identical twins (or more). Identical twins are less common than fraternal twins."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "Does fertility drugs cause twin pregnancy? What are some causes of multiple pregnancy?",
    "answer" : "The use of fertility drugs to induce ovulation often causes more than one egg to be released from the ovaries and can result in twins, triplets, or more. In vitro fertilization can lead to a multiple pregnancy if more than one embryo is transferred to the uterus. Identical multiples also may result if the fertilized egg splits after transfer. Women older than 35 years are more likely to release two or more eggs during a single menstrual cycle than younger women. Therefore, they are more likely than younger women to become pregnant with multiples"
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "I am feeling more giddiness. Is this due to multiple pregnancy?",
    "answer" : "Women who are pregnant with multiples may have more severe morning sickness or breast tenderness than women who are pregnant with a single baby. They also may gain weight more quickly. Most multiple pregnancies are discovered during an ultrasound exam."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "Do I need to gain extra weight if I am pregnant with multiples?",
    "answer" : "It generally is recommended that women who are pregnant with multiples gain more weight than women who are pregnant with one baby. An extra 300 calories a day is needed for each fetus. For instance, if you are pregnant with twins, you need an extra 600 calories a day. For triplets and higher-order pregnancies, weight gain should be individualized."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "Should I exercise if I am pregnant with multiples?",
    "answer" : "Staying active during multiple pregnancy is important for your health, but you may need to avoid strenuous exercise. Try low-impact exercise, such as swimming, prenatal yoga, and walking. You should aim for 30 minutes of exercise a day. If problems arise during your pregnancy, it may be recommended that you avoid exercise."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "Is the risk of complications higher if I am pregnant with multiples?",
    "answer" : "The risk of certain complications is higher if you are pregnant with multiples. You most likely will have more frequent prenatal care visits with your obstetrician. Starting in your second trimester, you may have ultrasound exams every 4–6 weeks. If a problem is suspected, you may have special tests, such as a nonstress test or biophysical profile, and more frequent ultrasound exams."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "What is the most common complication of multiple pregnancy?",
    "answer" : "The most common complication of multiple pregnancy is preterm birth. More than one half of all twins are born preterm. Higher-order multiples are almost always born preterm. Babies born before 37 weeks of pregnancy may have an increased risk of short-term and long-term health problems, including problems with breathing, eating, and staying warm. Other problems, such as learning and behavioral disabilities, may appear later in childhood or even in adulthood. Very preterm babies (those who are born before 32 weeks of pregnancy) can die or have severe health problems, even with the best of care."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "After an ultrasound, my doctor said that my twins are Mo/Di. What does that mean?",
    "answer" : "Early in a multiple pregnancy, an ultrasound exam is done to find out whether each baby has its own chorion (chorionicity) and amniotic sac (amnionicity). There are three types of twins: Dichorionic–diamniotic—Twins who have their own chorions and amniotic sacs. They typically do not share a placenta and can be fraternal or identical. Monochorionic–diamniotic—Twins who share a chorion but have separate amniotic sacs. They share a placenta and are identical. Monochorionic–monoamniotic—Twins who share one chorion and one amniotic sac. They share a placenta and are identical."
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "What are the risks associated with monochorionic babies?",
    "answer" : "Monochorionic babies have a higher risk of complications than those with separate placentas. One problem that can occur in monochorionic–diamniotic babies is twin–twin transfusion syndrome (TTTS). In TTTS, the blood flow between the twins becomes unbalanced. One twin donates blood to the other twin. The donor twin has too little blood, and the recipient twin has too much blood. The earlier TTTS occurs in the pregnancy, the more serious the outcomes for one or both babies. Although monochorionic–monoamniotic babies are rare, this type of pregnancy is very risky. The most common problem is an umbilical cord complication. Women with this type of pregnancy are monitored more frequently and are likely to have their babies by cesarean delivery."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "I had high B.P during my last pregnancy.If I have twins in the next pregnancy, does this multiple pregnancy have any effect on my blood pressure?",
    "answer" : "Preeclampsia is a blood pressure disorder that usually starts after 20 weeks of pregnancy or after childbirth. It occurs more often in multiple pregnancies than in singleton pregnancies. It also tends to occur earlier and is more severe in multiple pregnancies. Preeclampsia can damage many organs in your body, most commonly your kidneys, liver, brain, and eyes. Preeclampsia that worsens and causes seizures is called eclampsia. When preeclampsia occurs during pregnancy, the babies may need to be delivered right away, even if they are not fully grown."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "Does multiple pregnancy cause any diabetes to me?",
    "answer" : "Women carrying multiples have a high risk of gestational diabetes. This condition can increase the risk of preeclampsia and of developing diabetes later in life. The newborns may have breathing problems or low blood sugar levels. Diet, exercise, and sometimes medication can reduce the risk of these complications."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "I heard that in twin pregnancies one fetus grows well than the other.Is it true?",
    "answer" : "It is not always true. There are some instances where a fetus in twin pregnancies restrict the growth of other fetus. Multiples are more likely to have growth problems than single babies. Multiples are called discordant if one fetus is much smaller than the others. Discordant growth is common with multiples. It does not always signal a problem. Sometimes, though, a fetus’s restricted growth may be caused by an infection, TTTS, or a problem with the placenta or umbilical cord. If growth restriction is suspected in one or both babies, frequent ultrasound exams may be done to track how the babies are growing."
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "Are tests for genetic disorders as accurate in multiple pregnancies?",
    "answer" : "Screening tests for genetic disorders that use a sample of the mother’s blood (serum screening tests) are not as sensitive in multiple pregnancy. It is possible to have a positive screening test result when no problem is present in either baby. Diagnostic tests for birth defects include chorionic villus sampling and amniocentesis. These tests are harder to perform in multiples because each fetus must be tested. There also is a small risk of loss of one or all of the fetuses. Results of these tests may show that one fetus has a disorder, while the others do not."
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "How can multiple pregnancy affect delivery?",
    "answer" : "The chance of needing a cesarean delivery is higher with multiples. In some cases, twins can be delivered by vaginal birth. How your babies are born depends on the following: 1) Number of babies and the position, weight, and health of each baby 2) Your health and how your labor is going 3) Your obstetrician’s experience"
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "Can multiple pregnancy affect my risk of postpartum depression?",
    "answer" : "Having multiples might increase your risk of postpartum depression. If you have intense feelings of sadness, anxiety, or despair that prevent you from being able to do your daily tasks, let your obstetrician or other member of your health care team know."
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "Twins",
    "doctorName" : "Raja Sekhar",
    "question" : "Can I breastfeed if I have multiples?",
    "answer" : "Yes, but it may take some practice. Your milk supply will increase to the right amount. You will need to eat healthy foods and drink plenty of liquids. Lactation specialists are available at many hospitals and in your community to help you work out any problems you may have"
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