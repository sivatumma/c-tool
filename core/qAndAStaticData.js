var _ = require('underscore');
var qAndAModels = [];

var qandas = [
{
    "category" : "Symptoms",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "How Do I Know if I Have High Blood Pressure?",
    "answer" : "High blood pressure often doesn't have any symptoms, so you usually don't feel it. For that reason, hypertension is usually diagnosed by a health care professional during a routine checkup. If you have a close relative with hypertension, or other risk factors, it is especially important to pay attention to your blood pressure reading.\n\nIf your blood pressure is extremely high, you may have unusually strong headaches, chest pain, difficulty breathing, or poor exercise tolerance. If you have any of these symptoms, seek a doctor's opinion promptly.",
    "consultNow" : "Yes"
  },
{
    "category" : "Genetical",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Im 35 yr old male with positive history of Hypertension in family. How can I lower the risk of developing high blood pressure?",
    "answer" : "Yes Hypertension is a hereditary diesease. Please consult doctor and undergo Lipid profile related tests and know about risk factors for developing Hyprertension and ways to reduce risk of developing Hypertension. Also a healthy lifestyle and a sensible diet are important. One of the most important things is to keep weight under control. Less weight means lower blood pressure, and it also means less diabetes, less stress on muscles and joints and less stress on the heart.",
    "consultNow" : "Yes"
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What is the relationship between blood pressure and body weight?",
    "answer" : "Blood pressure rises as body weight increases. Losing even 10 pounds can lower blood pressure -- and it has the greatest effect for those who are overweight and already have hypertension. If you are overweight or obese, work with your health care provider to develop a plan to help you lower your weight and maintain a healthy weight. Aim to reduce your weight by 7 to 10 percent over six months, which can lower your risk for health problems. After that, you may have to continue to lose weight to get to a healthy weight.",
    "consultNow" : "Yes"
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am a 50 year old Hypertensive person. Please tell me some ways to reduce salt in my diet?",
    "answer" : "Older adults should limit their sodium (salt) intake to 1,500 mg a day. That's about 2/3 of a teaspoon of salt. Here are tips to reduce salt in your diet.\nBuy fresh, plain frozen, or canned “with no salt added” vegetables. Choose foods packed in water instead of broth or salt.\nUse fresh poultry, fish, and lean meat, rather than canned or processed types.\nUse herbs, spices, and salt-free seasoning blends in cooking and at the table.\nYou can also consult our dietician for low salt food recipes.",
    "consultNow" : "Yes"
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Can Hypertension treated without medications?",
    "answer" : "It is rare for hypertension to disappear by itself. The general rule is that blood pressure gets higher with time and the risk of complications goes up also. So one should visit the doctor immidiately.",
    "consultNow" : "Yes"
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 42 years male and have diabetes. Do I have to be more careful to control my high blood pressure?",
    "answer" : "As diabetes itself increases the risk of cardiovascular complications, blood pressure (which can further increase risk) needs careful attention.",
    "consultNow" : "yes"
  },
{
    "category" : "Treatment",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What is the treatment goal for high blood pressure?",
    "answer" : "In most cases, the goal is probably to keep your blood pressure below 140/90 mmHg (130/80 if you have diabetes or chronic kidney disease). Normal blood pressure is less than 120/80. Ask your doctor what your blood pressure goal should be.\nIf you have high blood pressure, you will need to treat it and control it for life. This means making lifestyle changes, and, in some cases, taking prescribed medicines, and getting ongoing medical care.",
    "consultNow" : "yes"
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Can blood pressure medication make me feel somewhat sick?",
    "answer" : "These days drugs are safe and generally free of major side effects, but no drug is completely free of side effects in all patients.\nThere are a variety of other symptoms that can result from blood pressure medications and if these appear in the days or weeks after treatment has begun you should consult your doctor. However, do not stop medications yourself without medical advice, as sometimes the blood pressure will rebound to very high levels that can be dangerous.",
    "consultNow" : "No"
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 36 yrs old and have high blood pressure, should I talk with my doctor if I am thinking about getting pregnant?",
    "answer" : "It is important to talk to your doctor if you have high blood pressure and are planning a pregnancy. This is because high blood pressure can create problems during pregnancy for both mother and baby.\n\nBlood pressure can be treated during pregnancy, but only certain drugs can be used and your doctor knows best which drugs are safe and which should be avoided.",
    "consultNow" : "Yes"
  },
{
    "category" : "Medication",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "How can I remember to take my medications as prescribed?",
    "answer" : "It is important that you take your blood pressure medication the same time each day. Here are a few tips to make this easier to remember.\nPut “sticky” notes in visible places to remind yourself to take your high blood pressure drugs. You can put notes on the refrigerator, on the bathroom mirror, or on the front door.\nPlace your drugs in a weekly pillbox, available at most pharmacies.\nTry to link taking your medication with something else that you do regularly, like brushing your teeth.\nKeep your high blood pressure drugs on the nightstand next to your side of the bed.\nIf you have a smartphone, find out about texting services and applications (apps) that can send reminiders.",
    "consultNow" : "No"
  },
{
    "category" : "Medication",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am suffering from hypertension fron 2 years. I am regularly exercising and following healthy diet. Will I have to take blood pressure medications all my life?",
    "answer" : "Most people with high blood pressure have what is known as essential hypertension. It is caused by genetics; bad diet, especially a high salt diet; obesity; lack of exercise; and excessive alcohol intake. A very small proportion of people have hypertension due to another disease. Kidney problems, some endocrine abnormalities and some drugs (such as arthritis medicines and birth control pills) can cause what is known as secondary hypertension. Secondary hypertension is best treated by treating the underlying problem. It is possible for a person with mild hypertension on a mild to moderate blood pressure medication to reach a healthy blood pressure by changing some factors in his or her life, so that blood pressure medication is no longer needed. This should only be done slowly and under a physician's supervision.",
    "consultNow" : "yes"
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am a 82 kilo, male. I am suffering from blood pressure, and my last recorded blood pressure was 130/90.My doctor advised me to get a Lipid profile test done, and the results showed that it was borderline but on the higher side. Do I need to start B.P medication on regular basis.",
    "answer" : "You may require the medictions for a short period as your cholesterol and BP are just borderline high. You must control your weight and improve your lifestyle to avoid any long term requirement of medications. For weight management you can join our weight management programe.",
    "consultNow" : "yes"
  },
{
    "category" : "Diagnosis",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "My husband's Lipid profile was slightly abnormal during a recent test, he has never had any health problems so far. He is 30 years old. His B.P was 136/84. He is not much serious about these findings. How can I help him?",
    "answer" : "Lipid profiles show whether you're at risk for coronary heart disease (CHD). your husbands values are slightly deranged or borderline, he needs to be careful but there is no reason to panic. He needs to raise his HDL or good cholesterol. He should modify his diet and increase his level of physical activity. Keep going for regular check-ups. Even after all the efforts if situation remains same upto next 3 months then take doctor's advice for sure.",
    "consultNow" : "yes"
  },
{
    "category" : "Diagnosis",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I had gone for a Lipid profile test last year. That time everything was controlled. At what regular intervals Lipid profile should be repeated?",
    "answer" : "If you have no risk factors (obesity, diabetes, High BP, etc.) for heart disease you need a lipid profile only once every five years. If you have been diagnosed with any of the risk factors or your previous lipid profile shows high cholesterol, you should get a complete lipid profile once or twice a year.",
    "consultNow" : "No"
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "My Father is suffering from Hypertension. His B.P is 160/90 mostly. He is not taking any medications. Please advice some name of the medicine if required?",
    "answer" : "There are hundreds of medicine for B.P which can only be given after evaluting B.P and cardiac assessment. Better you should take advice from our specialists.",
    "consultNow" : "yes"
  },
{
    "category" : "Diet / Exercise",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "If I need to lose weight, what's a good approach?",
    "answer" : "For loosing weight effectively, It’s best to work out some combination of both eating less and being more physically active. Remember to be aware of serving sizes. It’s not only what you eat that adds calories, but also how much. As you lose weight, be sure to follow a healthy eating plan that includes a variety of foods.\n\nFor more information about losing weight or maintaining your weight, join our weight management program.",
    "consultNow" : "yes"
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 65 yrs old female taking regularly B.P medicines for last 5 yrs. My uricacid reading is 6.5. Do I require to take medicine for uric acid?",
    "answer" : "Although your uric acid levels are slightlly on the higher side, but you should take advice from specialist for symptomatically assessment, as well for other medical issues. However avoid alcohol and drink plenty of water to avoid any futher rise in the levels.",
    "consultNow" : "yes"
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 45 yrs old male. Only on few days in a month, I feel as bp is high. Do I require any regular medications?",
    "answer" : "An episodic rise of B.P could be stress related so follow some relaxation techniques for one month and keep a regular gaze on your B.P readings. Also follow DASH diet( Dietary Approaches to Stop Hypertension). This is an eating plan rich in fruits, vegetables, whole grains, fish, poultry, nuts, legumes, and low-fat dairy. Every 3-6 months go for regular cardiac health checkup.",
    "consultNow" : "yes"
  },
{
    "category" : "Medication",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am running from hypertension & my BP remains at 150-160. I am taking Telma H. I feel heaviness in my head. What should I do?",
    "answer" : "The heaviness of head that you feel could be due to increased blood pressure, kindly get your bp checked for the next 3 days to know your exact status and follow up with doctor accordingly.",
    "consultNow" : "yes"
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 40 yr male with high cholesterol and high alkaline phosphate. Sometimes my B.P is 140/90. kindly suggest best medical advice.",
    "answer" : "It seems you could be hypertensive. Follow your B.P for next 5 days. However high alkaline phosphate needs to be evaluated and followed up with an ultrasound of the abdomen. For high cholestrol please improve your eating habbits, lifestyle and weight (if higher).\nFor further queries and specific management depending on your report , please take consultation and review with our specialist.",
    "consultNow" : "yes"
  },
{
    "category" : "Medication",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Are There any Drugs that Cause High Blood Pressure?",
    "answer" : "Some drugs that you take for another condition may increase blood pressure. These include amphetamines, methylphenidate (Concerta, Metadate, Methylin, Ritalin), corticosteroids, hormones (including birth control pills), certain migraine medications, cyclosporine, and erythropoietin.\nAlso, many over-the-counter medications that contain pseudoephedrine and ephedrine (for example, allergy and cold medicines and appetite suppressants) can increase blood pressure.\nDon't stop taking any prescribed medication, including high blood pressure drugs, without talking to your doctor.",
    "consultNow" : "yes"
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am a vegetarian patient of high bp and high triglyceride. Please guide me how to increase good chlorestrol((HDL)?",
    "answer" : "In case your HDL (good cholesterol) is low and you want to increase the same, following is recommended:\n1.avoid smoking\n2.exercise and lose weight\n3.alcohol to be taken in moderation\n If you don’t drink alcohol, don’t start just to try raising your HDL levels.\n4.Monounsaturated and polyunsaturated fats found in olive, peanut and canola oils tend to improve HDL’s anti-inflammatory abilities. Nuts, fish and other foods containing omega-3 fatty acids are other good choices for improving your LDL cholesterol to HDL cholesterol ratio.\n\nFor a detailed assessment we recommend a detailed evaluation and review of your lipid profile report as well as blood pressure recordings through a video consultation",
    "consultNow" : "yes"
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "When Should I Call My Doctor About High Blood Pressure?",
    "answer" : "If you are diagnosed with high blood pressure, it's important to see your doctor on a regular basis. He or she can answer your questions during these visits.\n\nHowever, there may be other times when you may need to speak to your doctor. For instance:\n\nIf you aren't responding to the prescribed treatment and your blood pressure is still high\nIf you are having any side effects from the blood pressure medication; if this happens, your doctor may wish to adjust the dosage of the medication or put you on another medication.",
    "consultNow" : "yes"
  },
{
    "category" : "Diagnosis",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 37yr old female suffering from hypertension. Problem found with lipid profile. Not taking any BP medicines. Please suggest the best medical advice.",
    "answer" : "A detailed video consultation is recommended. Though following should be kept in mind:\nlow salt diet\nplenty of water\nexercise\navoid oily/fatty/spicy food intake of fruits and vegetables\nhave small frequent meals\navoid red meat",
    "consultNow" : "Yes"
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What Type of Diet Should I Follow if I Have High Blood Pressure",
    "answer" : "A healthy diet, such as the DASH (Dietary Approaches to Stop Hypertension) diet, is effective in helping to lower high blood pressure. The DASH diet calls for a certain number of daily servings from various food groups, including fruits, vegetables, and whole grains. Consult our Dietician for proper diet chart.",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What Causes High Blood Pressure?",
    "answer" : "While the cause of high blood pressure in most people remains unclear, inactivity, poor diet, obesity, older age, and genetics -- can all contribute to the development of hypertension.",
    "consultNow" : "yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What Is Systolic and Diastolic Blood Pressure?",
    "answer" : "The force of blood against the wall of the arteries is called Blood Pressure. The blood pressure reading is measured in millimeters of mercury (mmHg) and is written as systolic pressure over the Diastolic pressure.\nSystolic pressure means the pressure while the heart beats. \nDiastolic pressure is measured as the heart relaxes.\nNormal Blood pressure is less than 120 mm Hg systolic and less than 80 mm Hg diastolic.",
    "consultNow" : "yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What Is a Normal and Abnormal Blood Pressure?",
    "answer" : "Normal blood pressure is systolic pressure less than 120 and diastolic pressure less than 80 mmHg.\n\"Prehypertension\" is systolic pressure of 120-139 or diastolic pressure of 80-89 mmHg.\nStage 1 Hypertension is systolic pressure of 140-159 or diastolic pressure of 90-99 mmHg.\nStage 2 Hypertension is systolic pressure of 160 or greater or diastolic pressure of 100 or greater.",
    "consultNow" : "yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Is hypertension inevitable? The natural result of aging?",
    "answer" : "For years, Physicians were taught in medical school that blood pressure normally increases with age.\nBut in recent years anthropologists have found a wide variety of primitive people who consumed diets with little or no added salt and whose blood pressure did not rise with age. They included Eskimos, the Masai of Africa, New Guinea Highlanders, and African Bushman. Among these populations, hypertension was virtually unknown. Scientists observed that the only time blood pressure rose with age was when people from these normally hypertension-free populations abandoned their traditional diets and starting eating modern diets dense with calories and full of highly salted foods. So Lifestyle is main core of having or not having Hypertension in elder ages.",
    "consultNow" : "No"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Who is most likely to get high blood pressure?",
    "answer" : "Your chances of getting high blood pressure are higher if you\nare overweight or obese\nare a man over the age of 45 or a woman over the age of 55\nhave a family history of high blood pressure\nhave pre-hypertension, with a reading of 120-139/80-89 mmHg\nare Indian/African American.",
    "consultNow" : "No"
  },
{
    "category" : "Diagnosis",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What can I do to prepare to have my blood pressure taken?",
    "answer" : "A blood pressure test is easy and painless and can be done in a health care provider’s office or clinic. Here’s how to prepare for the test.\n\nDon’t drink coffee or smoke cigarettes for 30 minutes prior to the test.\nGo to the bathroom before the test. A full bladder can change the reading.\nSit for 5 minutes before the test.\nThe Blood Pressure Wallet Card. - Click to enlarge in new window.\nClick for more information\nYou should have at least three readings taken on different days to accurately measure your blood pressure.",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What Health Problems Are Associated With High Blood Pressure(HBP)?",
    "answer" : "Several potentially serious health conditions are linked to high blood pressure. HBP can lead to headaches, being tired all the time, blurred vision, nosebleeds, ringing in the ears, chest pain, irregular heartbeat, feeling of confusion off and on and heart failure. Very high blood pressure, if untreated, could eventually lead to heart attack or stroke.",
    "consultNow" : ""
  },
{
    "category" : "Medication",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "My mother is diagnosed with hypertension last week. She is already an arthritic patient. Can she still take vitamins/ supplements- like calcium tablets for the bones, glucosamine tablets for joint pain also?",
    "answer" : "Patients with hypertension can still take supplements such as vitamins, glucosamine, and calcium.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Are there any factors that contribute to high blood pressure?",
    "answer" : "Although you may not know the exact cause of your high blood pressure, there are several factors that may contribute to it. Some of these factors are beyond your control, but some can be controlled by changing certain aspects of your lifestyle.\nThe factors you can't control that may contribute to your high blood pressure:\nHeredity\nAge\nGender (Men are generally more likely to have hypertension.) Pregnancy \nFactors within your control that can affect your blood pressure include:\nObesity\nLack of physical activity\nExercise\nSalt (sodium) consumption\nSmoking\nStress management\nAlcohol consumption Oral contraceptive use",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am recently diagnosed with hypertension. Is there a cure for hypertension?",
    "answer" : "Hypertension can't be cured, but there’s a very good chance that with lifestyle treatment (the right diet, losing weight, regular exercise) you can get hypertension under control and significantly lower your risk of developing life-threatening diseases.",
    "consultNow" : ""
  },
{
    "category" : "Habbits/Lifestyle",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am hypertensive. How much alcohol intake is safe for me?",
    "answer" : "both men and women are safest not to drink regularly more than 14 units per week, to keep health risks from drinking alcohol to a low level, and that if you do drink as much as 14 units per week, it is best to spread this evenly over 3 days or more.\nDrinking alcohol to excess can cause other serious health conditions, such as cardiomyopathy (where the heart muscle is damaged and can’t work as efficiently as it used to) and arrhythmias (abnormal heart rhythms). Some of these conditions can increase your risk of stroke.",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Does blood pressure change?",
    "answer" : "Blood pressure can be quite variable, even in the same person. Blood pressure goes up and down with different normal daily activities. For example, exercise, changes in posture and even talking changes blood pressure. Blood pressure tends to be higher during the day than at night and higher in the winter than in the summer. Blood pressure also rises when we grow older, particularly systolic blood pressure. Before adulthood, blood pressure rises in parallel with height. In adult years, weight and blood pressure are closely related. When weight goes up, blood pressure tends to go up and we can lower blood pressure by losing weight.",
    "consultNow" : ""
  },
{
    "category" : "Habbits/Lifestyle",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 45 yr male and occasionaly take wine. How does alcohol affect my heart?",
    "answer" : "There is a very clear link between regularly drinking too much alcohol and having high blood pressure. Over time, high blood pressure (hypertension) puts strain on the heart muscle and can lead to cardiovascular disease (CVD), which increases your risk of heart attack and stroke.\nThose who drink regularly and consume more than the lower risk guidelines are likely to be advised to cut down or stop drinking completely.",
    "consultNow" : "Yes"
  },
{
    "category" : "Habbits/Lifestyle",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I’m hypertensive and few days had heart surgery. When can I drink alcohol again?",
    "answer" : "In hospital, your medications are adjusted to control your blood pressure, but you aren’t drinking alcohol at that time. Back home, if you start drinking regularly again and your blood pressure changes, you should consult General Physician, who can alter your medications.\nYour doctor will often advise you when it’s safe to start drinking alcohol again, from a medical perspective.",
    "consultNow" : "Yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 60yrs male. About 5 years back I was on medication for hypertension. At that point of time my Bp was 130/80\nI changed my life style. I had been exercising for 1.5 hr daily. My B.P came to 120/80. I had disregarded my medication for 4 years now. Daily I still check my own Bp which is now 118/70.\nMy question is it ok with this result without my medication. I am feeling fine now with good muscle mass.",
    "answer" : "High blood pressure is regarded as having a blood pressure (BP) of > 140/90 on multiple occasions, on different days in a clinic setting. A blood pressure of 130/80 in the clinic is considered “high normal” and does not usually need medicine.\nAt home, when you are more relaxed, the BP should be lower (vs the clinic one) and should be below 135/85. Your BP of 118/70 at home is normal.\nSo it seems you do not have high blood pressure, and need not be on medication. But do continue to monitor your BP Regular exercise and eating a healthy diet certainly can lower your risk of getting high blood pressure in the future.",
    "consultNow" : "Yes"
  },
{
    "category" : "Habbits/Lifestyle",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am a hypertensive person having 105kg weight. My age is 46 yrs. Can I take alcohol.",
    "answer" : "Often, people only associate calories with food, forgetting that many alcoholic drinks are high in calories. \n\nIn its purest form, alcohol contains around 7kcal per gram. One unit of alcohol is around 8g, which is 56kcal or the equivalent calories of one custard cream. In comparison, carbohydrates contain 4kcal per gram. Your drink or mixer may also have added sugars, increasing the number of calories it contains. \n\nRegularly consuming too many calories can lead to weight gain and therefore obesity, which is a risk factor for heart attack, stroke and type 2 diabetes.\n\nAlcohol can also make you eat more than you usually would, or make less healthy food choices.",
    "consultNow" : ""
  },
{
    "category" : "Treatment",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What Is the Treatment for High Blood Pressure?",
    "answer" : "High blood pressure treatment usually involves making lifestyle changes and, if necessary, drug therapy. Consult our doctors for lifestyle coaching and medications if required.\n\nLifestyle changes for high blood pressure include:\n\nLosing weight\nQuitting smoking\nEating a healthy diet, such as the DASH diet, which is high in fruits, vegetables, lean protein and whole grains and low in salt and fat\nReducing the amount of salt in your diet\nRegular aerobic exercise (such as brisk walking)\nLimiting alcohol consumption\nSeeking treatment for sleep apnea",
    "consultNow" : "Yes"
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "My lipid test showsVLDL - 58.3,Triglyceride---293,BP - 165/101.I am not using any medicine till date. My age is 50. Please advise.",
    "answer" : "Normal VLDL cholesterol level is approximately one fifth (or 20%) of your triglycerides level and should be less than 40 mg/dL. VLDL is the bad cholesterol as it mobilizes the cholesterol from the liver depositing it in your blood vessels. High levels may be associated with increased risk for heart disease and stroke. Normal triglycerides measure 150 mg/dL or less. Triglycerides measured at 200 to 499 mg/dL are high. Your blood pressure values are high. It is advisable to consult soon our specialist.",
    "consultNow" : "Yes"
  },
{
    "category" : "Treatment",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am a 36 year old male. I am having bit depression, hypertension, palpitation and anxiety. My ECG, 2D echo, cortisol and lipid profile are normal. I need your kind advice.",
    "answer" : "The tests you have gone through are used to rule out a particular cause for significant hypertension.\nYou have not mentioned anything about your BP levels and whether they are really significantly high. Other details are also required as of your weight, your lifestyle and your family history.\nThere can be a possibility of hyperthyroidism which would cause all these features in a normal looking adult.\nAlso, you should get a psychological evaluation done. Alternating depression and anxiety shows that you are under severe stress and tension due to some cause.\nThe BP being high might just be a sign of that stress.\nPlease get a thyroid function test done and look for a more common cause. Medications will help a lot.\nConsult a cardiologist online for further help.",
    "consultNow" : "Yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 28 year old and weigh 72 kg. My blood pressure is on a higher side with readings around 150/90 always. I have a history of depression and ADHD (attention deficit hyperactivity disorder). I am currently on medication for depression and blood pressure. Now, I have been referred to a cardiologist by my psychiatrist for further investigations for high blood pressure. Could the high blood pressure be a side effect of my psychiatric medicines? Or is it something else? I have been under psychiatric medicines for the past 10-12 years.",
    "answer" : "At 28 years of age, cause of high BP is not like of old age which is mostly idiopathic (unknown cause due to aging). Your consultant might check for any cardiac or renal causes.\nAt young age, there can be secondary cause for high BP like renal hypertension. Psychiatric medicines may affect heart rate, but not that significantly to affect BP and benefit of psychiatric drugs is more important than small side effects. So go ahead with your doctor's advice. Go for regular jogging or brisk walk 20-30 minutes every day and avoid sedentary lifestyle.",
    "consultNow" : "No"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "For the past 7 days I am having mild palpitations both morning and evening. Since,5 years, I am taking tablet Metolar 50 mg for BP. On my doctor's advice I went for ECG, ECHO and also thyroid tests. I even got lipid profile, kidney and liver function tests done and all the tests came normal. Though, all my tests are normal, I still feel some discomfort. I am very much concerned. When I got a regular check up of my BP was normal. Now my doctor has asked me to take BP tablet regularly. Kindly advice.",
    "answer" : "With all the normal laboratory reports, palpitations in the morning and evenings may be just due to anxiety.\nAnxiety is considered to be the biggest cause of palpitations. I suggest you to consult a cardiologist and get a complete physical examination done.\nHe may advice you for an EKG (electrocardiogram) and run few tests accordingly.",
    "consultNow" : "Yes"
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Why should blood pressure be measured on at least three separate occasions to diagnose hypertension in older individuals?",
    "answer" : "There are many factors that can impact blood pressure measurements in older individuals. For example, white-coat hypertension is common among older individuals, where blood pressure temporarily increases in patients due to the stress of being seen by a healthcare provider. At least one type of home blood pressure monitoring is recommended to rule out this phenomenon. Other factors that can affect blood pressure in older individuals include taking measurements while patient is standing vs. sitting, as well as the time allowed for the patient to rest before taking blood pressure.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Why is hypertension so common in older individuals?",
    "answer" : "As arteries harden with age, systolic blood pressure increases, which measures the amount of pressure exerted on arteries and vessels by blood pumping through the body. The normal range for systolic blood pressure is 90-120mmHg in adults, and under 140mmHg in older individuals.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What is the difference between hypertension and prehypertension?",
    "answer" : "Those considered “prehypertensive” have blood pressure levels greater than what’s considered “normal,” but not high enough to be considered hypertensive. For most adults, normal blood pressure is a systolic (top number) less than 120 and a diastolic (bottom number) less than 80.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Can mental health affect heart health?",
    "answer" : "Yes. Although there’s still much to learn, research suggests there is a close connection between mental and cardiovascular health. Studies have shown that patients with a mental illness, like depression, are at increased risk for heart disease. It’s also possible that having heart disease increases risk for depression and can worsen outcomes. It’s important to discuss all aspects of health, including mental health, with your doctor.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "How can I help reduce stress levels?",
    "answer" : "There are many methods for reducing stress, including exercise, meditation and deep breathing. Stress can affect adults in different ways, so it is important to try different stress reduction approaches in order to find one that works best for you.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 38 yrs male having hypertension. How much exercise do I need to do?",
    "answer" : "Optimum exercise levels for adults includes:\n150 minutes of moderate-intensity or 75 minutes of vigorous exercise (or a combination of the two) each week.\nActivity spread across the week with periods of aerobic exercise of at least 10 minutes at a time.\nMuscle strengthening activities 2 or more days a week.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 44 yrs housewife. People with high blood pressure have nervousness, sweating, difficulty sleeping and their face becomes flushed. I don’t have those symptoms so I must not have high blood pressure.",
    "answer" : "No, this is not right. Many people have high blood pressure for years without knowing it. High blood pressure is often called \"the silent killer\" because it has no symptoms, so you may not be aware that it's damaging your arteries, heart and other organs. Don't make the mistake of assuming symptoms will alert you to the problem of high blood pressure. Everybody needs to know their blood pressure numbers. Diagnosis should only be made by a healthcare professional.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 55 yrs old businessman. I have high blood pressure and my doctor checks it for me so I don’t need to check it at home, too.",
    "answer" : "Because blood pressure can fluctuate, home monitoring and recording of blood pressure readings can provide your healthcare provider with valuable information to determine whether you really have high blood pressure and, if you do, whether your treatment plan is working. It's important to take the readings at the same time each day, such as morning and evening, or as your healthcare professional recommends.",
    "consultNow" : ""
  }
];

var qandas1 = [
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What is Diabetes",
    "answer" : "In people with diabetes, blood glucose levels are higher than normal because the body does not produce enough insulin and often cannot use insulin properly.\n\n Insulin is a hormone needed for glucose to enter the cells and be converted to energy.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What are the major types of Diabetes",
    "answer" : "There are two main types of diabetes: type 1 and type 2 diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What happens in case of Type 1 Diabetes",
    "answer" : "•Occurs when the pancreas does not produce insulin.\n•Represents 10–15 per cent of all cases of diabetes.\n•Usually the onset is abrupt and symptoms are obvious.\n•Symptoms can include excessive thirst and urination, unexplained weight\n•loss, weakness, fatigue and blurred vision.\n•Half of new cases occur in people aged 15 years or over.\n•Latent autoimmune diabetes in adults (LADA) is a slow onset form of type 1 diabetes occurring in adults over 30 years of age. LADA is frequently misdiagnosed as type 2 diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What happens in case of Type 2 Diabetes",
    "answer" : "Occurs when either the insulin is not working effectively (insulin resistance) or the pancreas does not produce sufficient insulin (or a combination of both).\n•Represents 85–90 per cent of all cases of diabetes.\n•Usually develops in adults over the age of 45 years but it is increasingly occurring at a younger age.\n•Is more likely to develop in people with a family history or from particular ethnic backgrounds.\n•Symptoms may be similar to those for type 1 diabetes. Other symptoms of type 2 diabetes include; frequent infections (thrush, urinary tract or skin infections), slow wound healing. Many people with type 2 diabetes do not have any symptoms or they may be very mild.\n•In early stages type 2 diabetes can usually be managed with a healthy lifestyle and regular medical checks but eventually medications and/or insulin may be required.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What is the difference between type 1 and type 2 diabetes",
    "answer" : "Type 1 diabetes is an autoimmune condition. Usually the onset is abrupt and symptoms are obvious. Type 1 diabetes is more commonly diagnosed in children and young adults but can occur at any age. Type 1 diabetes is always treated with insulin.\n\nType 2 diabetes is the form of diabetes that is related to ageing, family history and lifestyle factors (overweight and inactivity). It occurs when the insulin is not working effectively (insulin resistance) or the pancreas does not produce sufficient insulin (or a combination of both). Most people with diabetes have type 2. It usually develops in adults over the age of 45 years but it is increasingly occurring at a younger age.\n\n Type 2 diabetes is treated with healthy eating, exercise and weight control. Tablets and insulin may also be required.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What is pre-diabetes",
    "answer" : "Impaired glucose tolerance (IGT) and impaired fasting glucose (IFG) are both conditions where blood glucose levels are higher then normal but not high enough for a diagnosis of type 2 diabetes. The term 'pre-diabetes' is also sometimes used to describe these conditions.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What are the symptoms of diabetes",
    "answer" : "Symptoms of type 1 diabetes can include excessive thirst and urination, unexplained weight loss, weakness and fatigue.\n\n Symptoms of type 2 are similar to those for type 1 diabetes. However, some people with type 2 diabetes do not have any symptoms at all. For others the first indication may be a complication of diabetes such as a heart attack, vision problems, or a foot ulcer.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Is Diabetes a serious problem?",
    "answer" : "Diabetes is serious. Diabetes can cause serious complications. For example: \n•People with diabetes are up to two times more likely to develop heart disease and stroke.\n•Diabetic retinopathy causes 17 per cent of all blindness and vision impairment and is the most common form of blindness in adults 20–74 years.\n•The rate of lower limb amputation is 15 times higher in people with diabetes than those without diabetes.\n•Diabetes is the leading cause of kidney failure. People with diabetes develop kidney damage at three times the rate of those who do not have diabetes.\n\n People with diabetes are at similar risk of death to smokers. Over five years people with diabetes are twice as likely to die as people with normal glucose tolerance.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Who is most at risk of Type 2 Diabetes",
    "answer" : "People with one or more of the following risk factors are at increased risk of type 2 diabetes: \n•People who are inactive.\n•People who have a family history of type 2 diabetes.\n•People who are overweight or obese.\n•People with pre-diabetes this is where the glucose (sugar) levels in the body are higher than they should be, but not high enough to be diagnosed with diabetes. Not all people with pre-diabetes will develop diabetes but those that do have pre-diabetes are at high risk of developing the condition.\n•People with high blood pressure and/or high fat levels in the blood or a history of cardiovascular disease. Aboriginal and Torres Strait Islander people.\n•People from the following ethnic backgrounds: Pacific Island, Maori, Asian (including the Indian sub-continent), Middle Eastern, North African or Southern European.\n•Women who have had diabetes during pregnancy (gestational diabetes).\n•Women who have polycystic ovarian syndrome and who are overweight. People who smoke\n•People taking antipsychotic medication.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What is gestational diabetes?",
    "answer" : "Gestational diabetes is a form of diabetes that occurs in around five per cent of pregnant females. In the majority of women it disappears after the birth. Gestational diabetes significantly increases a woman's risk of developing type 2 diabetes.\n\n If a woman has had gestational diabetes in previous pregnancies she is more at risk of developing gestational diabetes in subsequent pregnancies. Women with a history of gestational diabetes usually do not perceive that they will develop diabetes, despite knowing the risks associated with gestational diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 40 yrs male. Are men more prone to developing Type 2 diabetes?",
    "answer" : "Men have a higher incidence of diabetes than females. More men than women are overweight or obese, increasing their risk of developing type 2 diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 30 yrs girl. My mother has diabetes. What can I do to prevent diabetes?",
    "answer" : "Maintaining a healthy weight, being physically active and following a healthy eating plan can reduce a person's risk of developing type 2 diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I am 45 yrs male recently diagnosed with Diabetes. I have started taking treatment, just want to know can diabetes be cured?",
    "answer" : "There is no cure for diabetes. Diabetes can be successfully managed.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "My mother is taking all the medicines advised by her family physicianHow can diabetes be managed?",
    "answer" : "People with diabetes need to work with a team of health care professionals, which includes their doctor, diabetes educator and dietitian. They should also work closely with their doctor for regular checks of eyes, kidneys, feet, blood pressure, blood lipids, body weight and blood glucose levels.\n\n Maintaining a healthy lifestyle can also help reduce the risk of developing the complications of diabetes. This means being physically active most days, maintaining a healthy weight, adopting healthy eating with fruit, vegetables and low fat foods and not smoking.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "How can type 2 diabetes be managed?",
    "answer" : "Some people with type 2 diabetes can manage their condition with regular physical activity, healthy eating and loss of excess weight. Others may need tablets and/or insulin injections as well.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "How can type 1 diabetes be managed?",
    "answer" : "People with type 1 diabetes need insulin for the rest of their lives.",
    "consultNow" : ""
  },
{
    "category" : "diagnostics",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "How can I check if I have diabetes?",
    "answer" : "Diabetes can only be diagnosed with a blood glucose test ordered by a GP or specialist and performed at a laboratory.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Are people with diabetes at higher risk for gum disease?",
    "answer" : "Yes. People with diabetes are at a higher risk for gum disease and other dental problems. Diabetes may weaken your mouth and body's germ-fighting powers and high blood glucose levels can make gum disease worse. At the same time, gum disease may make blood glucosethe main sugar found in the blood and the body's main source of energy. Also called blood sugar.X levels harder to control.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "In addition to gum disease, what other oral health problems can develop for people with diabetes?",
    "answer" : "While gum disease is the most common problem, having diabetes also makes you prone to other mouth problems such as oral infections, thrush, poor healing and dry mouth. Remember, good dental care can result in a healthy mouth and a smile that will last a lifetime.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Will a poorly controlled blood glucose level have any affect on developing gum disease?",
    "answer" : "Yes. High blood glucose levels make gum disease get worse. Like all infections, gum disease can be a factor in causing blood sugar1. A class of carbohydrates with a sweet taste, including glucose, fructose and sucrose. 2. A term used to refer to blood glucose.X to rise and make diabetes harder to control.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Should I tell my dentist and hygienist that I have diabetes?",
    "answer" : "Yes. People with diabetes have special needs. Keep your dentist and dental hygienist informed of any changes in your condition and any medication(s) you might be taking. Postpone any non-emergency dental procedures if your blood sugar is not in good control.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "How do I know if I have serious gum disease, though I know about my diabetes?",
    "answer" : "Often there are no signs of serious gum disease. You may not know you have it until you have some serious damage. Regular dental visits are your best weapon.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What's the first stage of gum disease, in case of diabetics?",
    "answer" : "The first stage of gum disease is gingivitis and if ignored, can develop into the more severe form of gum disease, known as periodontitis. When this happens, you may need gum surgery to save your teeth.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What are the signs of gingivitis and/or serious gum disease in diabetics?",
    "answer" : "Some of the possible signs of gingivitis and/or serious gum disease include: Bleeding and red, swollen, or tender gums Gums that have pulled away from the teeth. Pus between the teeth and gums (when you press on the gums) Bad breath Permanent teeth that are loose or moving away from each other Changes in the way your teeth fit when you bite Changes in the fit of partial dentures or bridges If you have any of the above, see your dentist.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "At what age does gum disease generally start in diabetics?",
    "answer" : "Gum disease can start at any age. Children and teenagers who have diabetes are at greater risk for gum disease than those who don't have diabetes.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "How can I help prevent dental problems associated with diabetes?",
    "answer" : "First and foremost, control your blood glucose level. Then take good care of your teeth and gums, along with regular dental check-ups every six months.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What are the additional oral care tips for those with diabetes?",
    "answer" : "Have a dental checkup every six months, or as often as indicated by a professional. Tell your dentist or hygienest that you have diabetes and any other medical condition. Brush for two minutes a day with a toothpaste with an antigingival/antibacterial ingredient to help prevent gingivitis. Contact your dentist or hygienist if you experience any of these signs of gum disease: Gums that bleed or are red, puffy or swollen, or sore Gums that have pulled away from the teeth Changes in the way your teeth fit together when you bite Pus that appears between your teeth and your gums Constant bad breath or a bad taste in your mouth.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What causes type 2 diabetes?",
    "answer" : "There is no simple answer to what causes type 2 diabetes. While eating sugar, for example, doesn't cause diabetes, eating large amounts of sugar and other rich, fatty foods, can cause weight gain. Most people who develop diabetes are overweight. Scientists do not fully understand why obesity increases someone's chances of developing diabetes, but they believe obesity is a major factor leading to type 2 diabetes. Current research should help explain why the disorder occurs and why obesity is such an important risk factor. \n\nA major cause of diabetes is insulin resistance. Scientists are still searching for the causes of insulin resistance, but they have identified two possibilities. The first could be a defect in insulin receptors on cells. Like an appliance that needs to be plugged into an electrical outlet, insulin has to bind to a receptor to function. Several things can go wrong with receptors. There may not be enough receptors for insulin to bind to, or a defect in the receptors may prevent insulin from binding. \n\nA second possible cause involves the process that occurs after insulin plugs into the receptor. Insulin may bind to the receptor, but the cells don't read the signal to metabolize the sugar. Scientists are studying cells to see why this might happen. \n\nPoints to Remember \n• In people with type 2 diabetes, insulin doesn't lower blood sugar, a condition called insulin resistance. \n• Obesity is a risk factor for diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Can your menstrual cycle affect glucose levels?",
    "answer" : "Yes, it is common for women to have hormone fluctuations the week before their period, and those can affect glucose control. After ovulating, estrogen and progesterone rise. “Estrogen can make women more sensitive to insulin and cause hypoglycemia. Progesterone can do the converse,” say experts. Glucose levels often return to their usual patterns after the first few days of the menstrual cycle. So check your glucose levels and analyze your monthly fluctuations to know your patterns. Then devise a management plan for these days.",
    "consultNow" : ""
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What are the best foods to eat before and after exercising, for diabetics?",
    "answer" : "Foods that contain carbohydrate are quick and easy to digest for energy. Eat foods like bread, crackers, pretzels, dry cereal, 100 percent fruit juice, or sports drink with calories. But if weight loss is a goal and you aren’t at risk of hypoglycemia, just drink water after exercise.",
    "consultNow" : ""
  },
{
    "category" : "diagnostics",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "How often should I replace my glucose meter?",
    "answer" : "The only reason to replace your meter is if you determine it is not working correctly with its strips. To check, use the control solution that comes with your meter.It’s an essential monitoring supply that many people don’t know about or use\n\nTo use control solution, put a drop (similar to the amount of blood you need) on a strip and do a test. Your vial of strips gives you a glucose range in which the result should fall. If it's in the range, your meter and strips are working correctly. If not, contact the manufacturer, which will offer advice and possibly a free replacement meter. Use control solution each time you open a new box of strips or any time you suspect your meter or strips aren’t working together when blood is on the meter, and before allowing anyone else to use it. Consider upgrading your meter ever five or so years because there is so much innovation.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Why are women with diabetes pre-disposed to developing recurrent yeast infections?",
    "answer" : "The glucoseThe food you eat gets digested and broken down into a sugar your body's cells can use. This is glucose, one of the simplest forms of sugar (that is a class of carbohydrates with a sweet taste, including glucose, fructose and sucrose). Sugar is the perfect trigger to encourage and grow yeast within your body.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What are the complications of using birth control pills while having diabetes?",
    "answer" : "Birth control pills may raise your BG levels. Using them for longer than a year or 2 may also increase your risk of complications. For instance, if you develop high blood pressure while on the pill, you increase the chance that eye or kidney disease will worsen.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Will menopause affect my diabetes?",
    "answer" : "Yes. The changes in hormonal levels and balance, may lead to BG levels that could out of control. Women with diabetes are also at risk of developing premature menopause and consequent increased risks of cardiovascular diseases.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Can I drink alcohol, despite my diabetes?",
    "answer" : "Yes, adults with diabetes can drink alcohol and should follow the same guidelines as the general public—an average of up to one drink per day for women and up to two drinks per day for men, with no more than three or four drinks in any single day for women and men, respectively. Research shows moderate alcohol consumption has minimal short- or long-term effects on glucose levels in people with type 1 or 2 diabetes.\n\nAlthough alcoholic drinks are made from grains or fruits (starches or sugars) through the processes of fermentation and distillation, alcohol cannot be changed into glucose,experts say. Also, alcohol is the only nutrient that doesn’t require insulin to be broken down for energy; carbohydrate, protein, and fat do. However, drinking more than recomended dose per day over the time has been shown to make glucose control a challenge.\n\nFor people who take insulin or another blood glucose-lowering medication that can cause hypoglycemia, eat some food when drinking alcohol. A cautionary note to people with type 1 diabetes: Significant alcohol intake can cause hypoglycemia a number of hours later, so regularly check blood sugar levels when you drink.",
    "consultNow" : ""
  },
{
    "category" : "Medicine",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Are there any diabetes medications that have a higher incidence of side effects amongst women who use them?",
    "answer" : "Yes, the oral medications classified as thiazolidinediones (TZDs) may cause women who are not ovulating and haven't gone through menopause to begin ovulating again, enabling them to conceive. Also, oral contraceptives may be less effective when taking this medication.",
    "consultNow" : ""
  },
{
    "category" : "diagnostics",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Is their a time frame that women with diabetes should follow for check-ups such as gynecological exams?",
    "answer" : "Check-ups should be performed on a regular, consistent basis to ensure that the diabetes is not negatively affecting the reproductive organs. Your health care provider will determine how often you should visit with him/her depending on your overall health.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Can women with diabetes breastfeed their babies?",
    "answer" : "Unless your health care team advises you otherwise, yes. Breast milk provides the best nutrition for babies and breastfeeding is recommended for all mothers with either preexisting diabetes or gestational diabetes.",
    "consultNow" : ""
  },
{
    "category" : "diagnostics",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I had diabetes before I was pregnant. Now that I am pregnant, how often should I monitor my BG levels?",
    "answer" : "Most health care professionals recommend that a woman with pre-existing diabetes (both type 1 & type 2) who becomes pregnant monitor her BG levels up to 8 times daily. In terms of your day-to-day routine, you should probably monitor: before each meal, 1 or 2 hours after each meal, at bedtime, occasionally at 2-3 a.m.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What are some of the symptoms of women's sexual health issues related to diabetes?",
    "answer" : "Lack of interest in sex (libido), pain or discomfort during intercourse, and decreased production of vaginal lubrication to name a few.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Will my children inherit diabetes from me?",
    "answer" : "It all depends on risk factors that include: no diabetes in the family—11% chance of type 2 diabetes by age 70 and 1% chance of type 1 diabetes by age 50. One parent with type 1 diabetes—6% chance of type 1 diabetes (father with type 1 diabetes), 4% chance of type 1 diabetes (mother with diabetes who was younger that 25 when the child was born) and 1% chance of type 1 diabetesa condition characterized by high blood glucose levels caused by a total lack of insulin. Occurs when the body's immune system attacks the insulin-producing beta cells in the pancreas and destroys them. The pancreas then produces little or no insulin. Type 1 diabetes develops most often in young people but can appear in adults.X (mother with diabetes who was older than 25 when the child was born).",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "What should my blood sugar be when I wake up (fasting) and before meals? What about after?",
    "answer" : "For most people with diabetes, the National Diabetes Association recommends a fasting or before-meals blood glucose (or blood sugar) goal of 70–130 mg/dl. One to two hours after eating, a postprandial blood sugar reading at or under 180 mg/dl is recommended.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Does a diagnosis of type 2 diabetes mean I will have to go on insulin?",
    "answer" : "No. People with type 2 diabetes may or may not ever need to take insulin injections, depending on several factors, including the timing of diagnosis. Research indicates that if type 2 diabetes is treated early and blood sugar is controlled initially and over the years, the pancreas is more likely to produce enough insulin longer. But a person who lives with type 2 upward of 15 years is unlikely to continue to make sufficient insulin.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I was recently diagnosed with type 2 diabetes. Do I need to see an endocrinologist?",
    "answer" : "“While diabetes is an endocrine disease and falls under the specialty of an endocrinologist though most people with type 2 diabetes, especially in the early years visit Medicine specialist. Make sure your doctor keeps up-to-date and provides you with care in sync with current guidelines. Be active in your care and ask questions. If your sugar levels are not under control or some complications are coming up, then you should definitely visit an Endocrinologist.",
    "consultNow" : ""
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Why is it OK for diabetics to eat fruit when it’s full of carbohydrate? Are some fruits better to eat than others?",
    "answer" : "The calories in all fruits (fresh, frozen, dried, and canned without added sugar) are mainly carbohydrate with a bit of protein. People with diabetes need to eat a certain amount of carbs every day for energy and essential nutrients. Healthy sources of carbs include fruits, as well as vegetables, whole grains, legumes (beans), and low-fat dairy foods.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "How can I learn to accept my diabetes?",
    "answer" : "Accepting that you have diabetes is largely an act of cognition—a realignment of what you view as real and vital to your existence and how it can impact your life. Diabetes becomes an integral part of a person’s life. “While we all wish it would simply go away, this isn’t possible. Expert's advice: Accept that diabetes will, for the rest of your life, be there. And it’s a very treatable disease, which places few restrictions on you if you follow treatment recommendations.",
    "consultNow" : ""
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "My husband has type 2 diabetes and is a truck driver. What foods can he take on the road?",
    "answer" : "Preplanning and having healthy snacks at the ready are keys to helping you eat healthy on the road. Experts suggest fresh fruit, small containers or cans of fruit (no syrup), fat-free yogurt, part-skim cheese (sticks, slices, and cubes), sugar-free pudding cups, nuts (any type), whole wheat crackers or pretzels, peanut butter, baby carrots, and 100-calorie snack packs (buy them or create your own). Also, drink plenty of water and no-calorie drinks.",
    "consultNow" : ""
  },
{
    "category" : "Medicine",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Will isulin make me gain weight?",
    "answer" : "The reason we need insulin—as a hormone made in our bodies or as a medication—is to push glucose into cells for energy. Insulin’s job is to process calories. For this reason, it can—but doesn’t have to—cause weight gain. To prevent weight gain: Practice portion control. Burn extra calories with exercise. If your blood sugar has been high for a while prior to starting insulin, you’ve likely been excreting calories in your urine instead of fueling your body. This won’t happen once your blood sugar is under control. If you experience hypoglycemia (low blood sugar), treat it with just 15 grams of carb",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Why is weight loss so important? What’s the best way for a person with type 2 to lose weight?",
    "answer" : "Weight loss is vital, particularly just after a diagnosis of type 2 or prediabetes. Weight loss increases insulin sensitivity, allowing cells to more effectively use the insulin the body continues to make. Losing just 10–20 pounds can accomplish a boatload of benefits. Among them are improved blood sugar, blood pressure, and cholesterol levels and possibly taking fewer medications or lower doses. To lose weight slowly and steadily, change your lifestyle. The pounds you keep off over time are the most important to living a long life.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "I have diabetes since 5 yrs. Few times my sugar levels suddenly go down. Should I go for some tests to know more about glucose levels and should I always carry glucose tablets?",
    "answer" : "Your risk for hypoglycemia depends on the category of blood glucose-lowering medication(s) you take, not your type of diabetes. Some medications can cause hypoglycemia, including insulin; those in the sulfonylurea category, such as glyburide (Diabeta, Glynase, Micronase), glipizide (Glucotrol), and glimepiride (Amaryl); and those in the glinide category, such as repaglinide (Prandin) and nateglinide (Starlix). If you take one of these medications, always carry treatment. Most of the commonly used blood glucose-lowering medications for type 2 diabetes don’t cause hypoglycemia.",
    "consultNow" : ""
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Is it true that complications of diabetes can be delayed and even prevented?",
    "answer" : "Yes! Research shows that the earlier your diabetes is diagnosed and the sooner you start to aggressively get your blood sugar, blood pressure, and cholesterol into target ranges, the healthier you can be over the years. To stay healthy and detect any complications early, make sure your health care provider orders all the tests and checks you need. Let your provider know if you have any signs or symptoms of a potential problem.",
    "consultNow" : ""
  },
{
    "category" : "Medicine",
    "Name of doctor" : "Dr.Priyanka",
    "question" : "Will I need to be on insulin the rest of my life? Why can’t I take pills instead?",
    "answer" : "If you have type 2 diabetes and were put on insulin, it’s likely you need it to bring your blood sugar down farther than pills could. In this case, you’ll likely need to take insulin injections the rest of your life. If, however, you started taking insulin when you had an infection, needed surgery, or were hospitalized for a medical reason, your need for insulin may be temporary. These situations raise stress, and stress can raise blood sugar levels. When the stress abates, you may be able to taper or stop taking insulin and get back to your previous medication regimen.",
    "consultNow" : ""
  }
];
qandas1.forEach(function(qanda){
  qanda.consultNow = qanda.category.toLowerCase() == 'yes';
  qAndAModels.push(qanda);
});
console.log(qAndAModels.length);


module.exports = function() {
    return qAndAModels;
};