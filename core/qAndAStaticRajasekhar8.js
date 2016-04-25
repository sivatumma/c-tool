var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is gestational diabetes?",
    "answer" : "Gestational diabetes is a condition in which the mother develops diabetes during pregnancy in due course of time due to harmonal action. Increase in the sugar levels in the blood during pregnancy."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How can I get Diabetes in pregnancy?",
    "answer" : "The harmones ( human placental lactogen and cortisol ) act against the insulin . Normally to keep the mother in euglycaemic (normal glucose levels ) state ,the pancreas release more insulin. When this mechanism of pancreas producing insulin fails, glucose level in the blood increases causing diabetes."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 21 year old pregnant woman. I am a normal healthy woman . Do I get Diabetes?",
    "answer" : "This may happen in a normal individual or in a person having risk factors like 1) obesity 2) family history of diabetes or gestational diabetes 3) previous unexplained still birth 4) Previous delivery of a baby weighing > 4.5 kg 5) Diabetic individual 6) Lack of physical activity Because of this, routine tests during antenatal care include blood sugar tests."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens to the mother if Gestational diabetes is not \ncontrolled?",
    "answer" : "The maternal complications of mother are: Nephropathy ( kidney disease ), retinopathy (eye disease ), Hyperglycemia ( increased sugar levels ), Hypoglycemia ( decreased sugar levels ), Coronary artery disease ( heart disease ), infections, pre eclampsia ( fits during pregnancy) , formation of clots in the blood vessels, may remain continuously as a diabetic even after delivery."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens to the baby if gestational diabetes is not controlled ?",
    "answer" : "The following may happen : 1) Over birth weight of the baby ( > 4.5 kg ) due to which the baby looks larger . This condition is called Macrosomia. The large size of the baby may cause obstructed labour for which obstetricians opt for caesarian section. 2) There may be cardiac congenital abnormalities or neural tube defects. 3) Hypoglycemia, hypomagnesemia ( low magnesium levels in the blood ),polycythemia , hypocalcemia ( low calcium levels in the blood ) 4) birth injuries in normal deliveries, respiratory distress syndrome ...,etc"
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What test is done to check the glucose levels in blood during pregnancy?",
    "answer" : "Oral Glucose Tolerance Test (OGTT) is done to check the levels of glucose in blood."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How is OGTT done? What precautions are to be taken?",
    "answer" : "The person should be fasting for the past 10 to 12 hours prior to the test. The night before the test, the person should not eat or drink anything except water (from 8 p.m to 8 a.m). The individual undergoing test will be given 50g or 75g or 100g glucose solution to drink in the morning. The blood sample is taken one hour and two hours after drinking soluion to check the glucose level."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are things a woman with type 1 or type 2 diabetes can do to help prevent problems during pregnancy?",
    "answer" : "A woman can work to keep her blood sugar in control before and during pregnancy. Other tips: Plan your pregnancy, if possible Work to achieve and maintain a healthy body weight before pregnancy Eat healthy foods Be physically active 150 minutes per week (10 minutes at a time is fine, such as a brisk walk) Talk with your doctor about whether your current medications will be appropriate if you become pregnant Monitor your blood sugar often. Control and treat low blood sugar right away (e.g., eating a glucose tablet or candy or drinking juice or regular soda) Limit excess weight gain during pregnancy Follow up with your doctor regularly"
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What causes a woman to get gestational diabetes?",
    "answer" : "Many—but not all—women with gestational diabetes are overweight or obese before getting pregnant. Other potential causes of gestational diabetes include: Family history of diabetes Having twins Nonwhite race Having gestational diabetes during a previous pregnancy Older age (more than 25 years old)"
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Am I going to remain as a diabetic even after delivery?",
    "answer" : "Get tested for diabetes 6 to 12 weeks after your baby is born, and then every 1 to 3 years. For most women with gestational diabetes, the diabetes goes away soon after delivery. When it does not go away, the diabetes is called type 2 diabetes. Even if the diabetes does go away after the baby is born, half of all women who had gestational diabetes develop type 2 diabetes later. It's important for a woman who has had gestational diabetes to continue to exercise and eat a healthy diet after pregnancy to prevent or delay getting type 2 diabetes. She should also remind her doctor to check her blood sugar every 1 to 3 years."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the lower limits for my sugars?",
    "answer" : "As a general guide a fasting sugar below 3.5 mmol/l (63 mgs/dl), a one hour after meal value of 4.5 mmol/l (81 mgs/dl) or a two hour after meal value of 4.0 mmol/l (72 mgs/dl) would be considered low and if on therapy would prompt a reduction in the insulin. If you are not on treatment and get low numbers like these then no intervention is required, these values are likely within the normal range albeit at the lower end."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How is gestational diabetes diagnosed?",
    "answer" : "Gestational diabetes is usually diagnosed between the 24th and 28th week of pregnancy (when insulin resistance usually begins). If you have had gestational diabetes before, or if your doctor is concerned about your risk of developing gestational diabetes, the test may be performed before the 13th week of pregnancy. Oral Glucose Tolerance Test (OGTT) is done to check the levels of glucose in blood."
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Do I need to take insulin if I have gestational diabetes?",
    "answer" : "Based on your blood glucose monitoring results, your doctor will tell you if you need to take insulin injections during pregnancy. If insulin is prescribed for you, your doctor, nurse, or diabetes educator will teach you how to give yourself insulin injections. As your pregnancy progresses, the placenta will make more pregnancy hormones, and larger doses of insulin may be needed to control your blood sugar. Your doctor will adjust your insulin dosage based on your blood glucose"
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is hypoglycaemia?",
    "answer" : "Reduced blood glucose levels in the blood is called as hypoglycaemia."
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the symptoms of hypoglycaemia?",
    "answer" : "Symptoms of hypoglycemia include: Confusion Dizziness Feeling shaky Headaches Sudden hunger Sweating Weakness"
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What can I do if there is hypoglycaemia?",
    "answer" : "Hypoglycemia is a serious problem that needs to be treated right away. If you think you are having a low blood sugar reaction: Check your blood sugar if you can. If your blood sugar is less than 60 mg/dl, eat a food that contains sugar, such as ½ cup of orange or apple juice; 1 cup of skim milk; 4-6 pieces of hard candy (not sugar-free); ½ cup regular soft drink; or 1 tbsp. of honey, brown sugar, or corn syrup. Fifteen minutes after eating one of the foods listed above, check your blood sugar. If it is still less than 60 mg/dl, eat another one of the food choices above. If it is more than 45 minutes until your next meal, eat a bread and protein source to prevent another reaction. Record all low blood sugar reactions in your log book, including the date, the time of day the reaction occurred, and how you treated it."
  },
  "17" : {
    "itemNumber" : 17,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Since I have gestational diabetes, does it mean my baby will have diabetes?",
    "answer" : "Gestational diabetes does not cause your baby to have diabetes. Your child’s risk of developing diabetes is related to family history, body weight, eating habits, and exercise. Give your baby a healthy start by breastfeeding him or her."
  },
  "18" : {
    "itemNumber" : 18,
    "subCategory" : "Gestational diabetes",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What drugs can I take in case of high blood glucose levels in blood during pregnancy?",
    "answer" : "Most of the oral anti-hyperglycaemia drugs are not safe during pregnancy. So, the best drug in severe gestational diabetes is insulin. The doctor starts insulin based on your glucose levels in the blood."
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