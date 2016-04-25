var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is high blood pressure?",
    "answer" : "Blood pressure is the force of blood pushing against blood vessel walls. The heart pumps blood into the arteries (blood vessels) that carry the blood throughout the body. High blood pressure, also called hypertension, means that the pressure in the arteries is above the normal range."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am not a B.P patient.I am still 24 years old and I am pregnant. Why are they checking my B.P? What is pregnancy-induced hypertension (PIH )?",
    "answer" : "Pregnancy-induced hypertension (PIH)—which may also be called pre-eclampsia, toxemia, or toxemia of pregnancy—is a pregnancy complication characterized by high blood pressure, swelling due to fluid retention, and protein in the urine. Though you are not a hypertensive ( high b.p )patient, some females are prone to high B.P during pregnancy which may cause complications to you and the fetus. So, it is a routine to check B.P in pregnancy."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "When can I be effected by pregnancy-induced hypertension (PIH )?",
    "answer" : "Pregnancy-induced hypertension (PIH) affects approximately one out of every 14 pregnant women. Although PIH more commonly occurs during first pregnancies, it can also occur in subsequent pregnancies. PIH is also more common in pregnant teens and in women over age 40. Many times, PIH develops during the second half of pregnancy, usually after the 20th week, but it can also develop at the time of delivery or right after delivery."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am an overweight pregnant female.Am I prone to develop PIH?",
    "answer" : "A woman is more likely to develop PIH if she: Is under age 20 or over age 35 Has a history of chronic hypertension Has a previous history of PIH Has a female relative with a history of PIH Is underweight or overweight Has diabetes before becoming pregnant Has an immune system disorder, such as lupus or rheumatoid arthritis Has kidney disease Has a history of alcohol, drug, or tobacco use Is expecting twins or triplets"
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the symptoms of PIH?",
    "answer" : "Rapid or sudden weight gain, High blood pressure, Protein in the urine, and Swelling (in the hands, feet, and face) are all signs of PIH. Some swelling is normal during pregnancy. However, if the swelling doesn't go away and is accompanied by some of the above symptoms, be sure to see your doctor right away. Other symptoms of PIH include abdominal pain, severe headaches, a change in reflexes, spots before your eyes, reduced output of urine or no urine, blood in the urine, dizziness, or excessive vomiting and nausea."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How is PIH diagnosed?",
    "answer" : "During routine prenatal tests, your weight gain, blood pressure and urine protein are monitored. If you have symptoms of PIH, additional blood tests may be ordered, which would show abnormal results if PIH is present."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is non stress test?",
    "answer" : "If PIH is suspected, a non-stress test may be performed to monitor the baby. During the non-stress test, an ultrasound transducer records the baby's heart rate, and a pressure transducer (called the toco transducer) records uterine activity. Each time you feel the baby move, you make a mark on a graph paper that displays the fetal heart rate and uterine activity."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How is PIH treated?",
    "answer" : "If PIH is mild, it can be treated at home. If you have been diagnosed with PIH and your doctor recommends home treatment, you will need to maintain a quiet, restful environment with limited activity or bed rest on your left side. It is important that you follow the diet and fluid intake guidelines from your health care provider and maintain your scheduled appointments. If PIH becomes worse, you will need to be admitted to the hospital where you can be closely monitored. Your health care provider will work with you to maintain the health of you and your baby. In severe cases, the baby may have to be delivered. High blood pressure is treated with medication, and magnesium sulphate is given through an IV to prevent seizures."
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens if PIH is not monitored and controlled?",
    "answer" : "PIH can prevent the placenta from receiving enough blood, which can cause low birth weight in your baby. Although these complications are rare, PIH may cause the following: Placental abruption ( abruptio placenta), a complication that occurs when the placenta pulls away from the wall of the uterus, causing maternal bleeding and fetal distress Seizures in the mother Temporary kidney failure Liver problems Blood clotting problems Early delivery of premature baby"
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "When should I be apprehensive or when should I consult my doctor?",
    "answer" : "If you notice any of the following: Rapid weight gain (5 pounds in 5 days) Swelling or puffiness in your fingers, feet, face, or eyelids Numbness in your hands or feet Headache that is not relieved by taking acetaminophen (Tylenol®) Abdominal pain, especially in the upper abdomen or to the right Blurry vision, spots before your eyes that don’t resolve Ringing in your ears Decrease in fetal movement Uterine contractions Unrelieved nausea or vomiting Vaginal bleeding Any other symptom that causes concern"
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Does PIH improve after delivery?",
    "answer" : "A woman's blood pressure usually returns to normal after delivery. Sometimes, however, blood pressure may remain high, requiring treatment with medication. Your health care provider will work with you after your pregnancy to prescribe an appropriate medication."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is preeclampsia?",
    "answer" : "Pre-eclampsia is a condition unique to human pregnancy. It is diagnosed by the elevation of the expectant mother’s blood pressure usually after the twentieth week of pregnancy combined with the appearance of excessive protein in her urine."
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is Eclampsia?",
    "answer" : "Eclampsia is a very serious complication of preeclampsia characterized by one or more seizures during pregnancy or in the post-partum period. In the developed world, eclampsia is rare and usually treatable if appropriate intervention is promptly sought. Left untreated, eclamptic seizures can result in coma, brain damage, and possibly maternal or infant death."
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is HELLP syndrome?",
    "answer" : "HELLP syndrome is one of the most severe forms of preeclampsia and occurs in 5-12% of preeclamptic patients. It can lead to substantial injury to the mother’s liver, a breakdown of her red blood cells and lowered platelet count. HELLP stands for: hemolysis, elevated liver enzymes, and lowered platelets. HELLP syndrome may initially be mistaken for the flu or gallbladder problems, because the pains may feel similar and it can occur before the classic symptoms of preeclampsia appear. The most important thing to remember with HELLP syndrome and preeclampsia is to listen to your body. If you don't feel right or have any of the symptoms, contact your doctor immediately."
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "When does preeclampsia occur in a pregnancy?",
    "answer" : "Preeclampsia can appear at any time during pregnancy, delivery and up to six weeks post-partum, though it most frequently occurs in the final trimester and resolves within 48 hours of delivery. Preeclampsia can develop gradually, or come on quite suddenly, even flaring up in a matter of hours, though the signs and symptoms may have gone undetected for weeks or months."
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can preeclampsia occur after the baby is born?",
    "answer" : "In some instances, preeclampsia does not appear until during the delivery, or the 48 hours that follow, but it has been known to occur up to six weeks post-partum. While obviously not dangerous for the baby, post-partum preeclampsia is still critical for the mother. Nearly 80% of women who die from Preeclampsia die post-partum. Sleep deprivation, post-partum depression, more attention on the newborn, and a lack of familiarity with normal post-partum experiences all contribute to more easily ignoring or missing indicators of a problem. Any of the signs and symptoms described above should be cause for concern, and you should immediately contact your doctor if you experience any of them."
  },
  "17" : {
    "itemNumber" : 17,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is the cure for pre-ecclampsia?",
    "answer" : "Currently, the only “cure” for preeclampsia begins with delivery of the baby and placenta. When preeclampsia develops, the mother and her baby are monitored carefully. There are medications and treatments that may prolong the pregnancy, which can increase the baby's chances of health and survival. Once the course of preeclampsia has begun, it cannot be reversed and the health of the mother must be constantly weighed against the health of the baby. In some cases, the baby must be delivered immediately, regardless of gestational age, to save the mother's or baby's life."
  },
  "18" : {
    "itemNumber" : 18,
    "subCategory" : "PIH",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Will I get preeclampsia again?",
    "answer" : "If you're planning on becoming pregnancy again after experiencing preeclampsia in a previous pregnancy, you may have some concerns. Here's what you can expect: If my first pregnancy was normal... If you had a normal first pregnancy, your risk of having preeclampsia in the next pregnancy is very low. However, If you have other risk factors (such as advanced maternal age, excess weight, family history of hypertension), you should be watchful and alert to early warning signs."
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