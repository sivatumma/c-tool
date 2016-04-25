var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is Hypothyroidism?",
    "answer" : "The thyroid is a small gland located in your neck that produces an important hormone for controlling growth, heat production, and the ability to get pregnant. If the thyroid gland produces too little thyroid hormone, a medical condition called hypothyroidism occurs."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "My doctor told me that I have hypothyroidism. Is there anything special I need to do now that I am pregnant?",
    "answer" : "With proper care and treatment, you have every chance of having a healthy pregnancy and birth. Ask how he or she plans to treat your hypothyroidism during pregnancy. Take your thyroid medication each day as directed. Be careful not to miss a dose."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How often do I have to check my thyroid levels?",
    "answer" : "Have your blood thyroid levels (TSH, T3 and T4) checked at least every 3 months, or more often as needed to keep them in normal range during pregnancy"
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can low thyroid levels increase a baby’s risk of low IQ?",
    "answer" : "Babies born to mothers with untreated hypothyroidism during pregnancy are four times more likely to have low IQ or other learning difficulties. However, when the mother’s thyroid levels are within normal range, her children have IQ test scores similar to children born to mothers without thyroid problems."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I worry about taking any medicine during pregnancy. Is it really safe to take my thyroid hormone pill?",
    "answer" : "It is not only safe, but very important to take your thyroid replacement medication during pregnancy. These medications replace the normal hormones you need for a healthy pregnancy. Without enough thyroid hormone, there is a higher risk of miscarriage, high blood pressure, preterm labor, and problems with the baby’s brain development."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can I take my thyroid medication with my prenatal vitamin, or with food?",
    "answer" : "Prenatal vitamins, iron supplements, antacids, and certain foods interfere with the body’s absorption of thyroid hormone. When you are pregnant your body must get enough thyroid hormone. Take your thyroid medication on an empty stomach at least one hour before or two hours after meals. Do not take prenatal vitamins or antacids within two hours of your thyroid medication. Be consistent. If you cannot take your thyroid pill without food, it is better to take it every day with food than to miss some days. If you can’t keep your thyroid pill down because of morning sickness, be sure to tell your care provider."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I have heard about the many benefits of breastfeeding. Can I nurse my baby while taking thyroid medication?",
    "answer" : "Yes, nursing is the healthiest choice for feeding your baby. Mothers continue to take thyroid medication and check their blood thyroid levels while nursing. With the correct dose, thyroid medication will not harm your baby. With a normal amount of thyroid hormone, your body will make plenty of breast milk for your baby."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Will my baby have hypothyroidism too?",
    "answer" : "All babies are tested for hypothyroidism soon after birth. Hypothyroidism is very rare in infants and children. If thyroid disease is passed on genetically, it usually does not appear until later in life."
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I really want to have a drug-free pregnancy, and I'm suspicious of anything that might hurt the baby. Should I stop taking my thyroid medication?",
    "answer" : "It is good that you determined to have a normal pregnancy. But, if you have a disorder out weighing your and your baby's health, you definitely have to use medication. Stopping thyroid medication is dangerous to you and the fetus. So, please continue your thyroid medication as advised by your doctor."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the symtoms of hypothyroidism?",
    "answer" : "Symptoms of hypothyroidism in pregnancy include extreme fatigue, cold intolerance, muscle cramps, constipation, and problems with memory or concentration."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "Hypothyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How am I treated for hypothyroidism during pregnancy?",
    "answer" : "Hypothyroidism is treated with synthetic thyroid hormone called thyroxine—a medication which is identical to the T4 made by the thyroid. Women with preexisting hypothyroidism will need to increase their prepregnancy dose of thyroxine to maintain normal thyroid function. Synthetic thyroxine is safe and necessary for the well-being of the fetus if the mother has hypothyroidism."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How does pregnancy normally affect thyroid function?",
    "answer" : "Two pregnancy-related hormones—human chorionic gonadotropin (hCG) and estrogen—cause increased thyroid hormone levels in the blood. Made by the placenta, hCG is similar to TSH and mildly stimulates the thyroid to produce more thyroid hormone. Increased estrogen produces higher levels of thyroid-binding globulin, also known as thyroxine-binding globulin, a protein that transports thyroid hormone in the blood"
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How is the thyroid function helpful to fetus? When does thyroid function strat in the fetus?",
    "answer" : "Thyroid hormone is critical to normal development of the baby’s brain and nervous system. During the first trimester, the fetus depends on the mother’s supply of thyroid hormone, which comes through the placenta. At around 12 weeks, the baby’s thyroid begins to function on its own."
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What causes hyperthyroidism in pregnancy?",
    "answer" : "Hyperthyroidism in pregnancy is usually caused by Graves’ disease and occurs in about one of every 500 pregnancies.1 Graves’ disease is an autoimmune disorder. Normally, the immune system protects people from infection by identifying and destroying bacteria, viruses, and other potentially harmful foreign substances. But in autoimmune diseases, the immune system attacks the body’s own cells and organs"
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am a 28 weeks pregnant lady. I have severe vomiting. Does that cause thyroid problem?",
    "answer" : "Severe vomiting is called as hyperemesis gravidarum which continues even beyond 12 weeks. Rarely, hyperthyroidism in pregnancy is caused by hyperemesis gravidarum—severe nausea and vomiting that can lead to weight loss and dehydration. This extreme nausea and vomiting is believed to be triggered by high levels of hCG, which can also lead to temporary hyperthyroidism that goes away during the second half of pregnancy."
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How does hyperthyroidism affect the mother?",
    "answer" : "Uncontrolled hyperthyroidism during pregnancy can lead to congestive heart failure preeclampsia—a dangerous rise in blood pressure in late pregnancy thyroid storm—a sudden, severe worsening of symptoms"
  },
  "17" : {
    "itemNumber" : 17,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How does hyperthyroidism affect the fetus?",
    "answer" : "Uncontrolled hyperthyroidism during pregnancy can lead to: Miscarriage Premature birth Low birth weight Hyperthyroidism in a newborn can result in rapid heart rate, which can lead to heart failure; early closure of the soft spot in the skull; poor weight gain; irritability; and sometimes an enlarged thyroid that can press against the windpipe and interfere with breathing."
  },
  "18" : {
    "itemNumber" : 18,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the symptoms of hyperthyroidism in pregnancy?",
    "answer" : "Doctors diagnose hyperthyroidism in pregnant women by reviewing symptoms and doing blood tests to measure TSH, T3, and T4 levels. Some symptoms of hyperthyroidism are common features in normal pregnancies, including increased heart rate, heat intolerance, and fatigue. Other symptoms are more closely associated with hyperthyroidism: rapid and irregular heartbeat, a slight tremor, unexplained weight loss or failure to have normal pregnancy weight gain, and the severe nausea and vomiting associated with hyperemesis gravidarum."
  },
  "19" : {
    "itemNumber" : 19,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the blood tests done to diagnose hyperthyroidism in pregnancy?",
    "answer" : "TSH test- Thyroid stimulating Harmone. T3 and T4 test- Triiodo tyronine, thyroxine TSI test"
  },
  "20" : {
    "itemNumber" : 20,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How is hyperthyroidism treated during pregnancy?",
    "answer" : "During pregnancy, mild hyperthyroidism, in which TSH is low but free T4 is normal, does not require treatment. More severe hyperthyroidism is treated with antithyroid medications, which act by interfering with thyroid hormone production. Antithyroid medications cross the placenta in small amounts and can decrease fetal thyroid hormone production, so the lowest possible dose should be used to avoid hypothyroidism in the baby."
  },
  "21" : {
    "itemNumber" : 21,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 30 years old and I am pregnant. I heard that there is some radioactive treatment for thyroid disorder.Can I take that treatment?",
    "answer" : "Radioactive iodine treatment is not an option for pregnant women because it can damage the fetal thyroid gland. Rarely, surgery to remove all or part of the thyroid gland is considered for women who cannot tolerate antithyroid medications."
  },
  "22" : {
    "itemNumber" : 22,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Does anti thyroid drugs have any side effects during pregnancy?",
    "answer" : "Stop your antithyroid medication and call your health care provider right away if you develop any of the following signs and symptoms while taking antithyroid medications: fatigue weakness vague abdominal pain ( unable to locate the area of abdominal pain ) loss of appetite ( loss of hunger ) a skin rash or itching easy bruising yellowing of the skin or whites of the eyes, called jaundice persistent sore throat fever"
  },
  "23" : {
    "itemNumber" : 23,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can I breast feed my baby after delivery even though I am taking anti thyroid medications?",
    "answer" : "Studies have shown that mothers taking antithyroid medications may safely breastfeed. However, they should take only moderate doses, less than 10−20 milligrams daily, of the antithyroid medication methimazole. Doses should be divided and taken after feedings, and the infants should be monitored for side effects. Women requiring higher doses of the antithyroid medication to control hyperthyroidism should not breastfeed."
  },
  "24" : {
    "itemNumber" : 24,
    "subCategory" : "Hyperthyroidism",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What kind of anti-thyroid drugs can I take?",
    "answer" : "Propylthiouracil, methimazole are the anti thyroid drugs that can be taken during pregnancy."
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