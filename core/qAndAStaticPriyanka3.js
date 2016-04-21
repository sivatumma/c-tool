var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasPriyanka = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "I am a 45 year old healthy man and have been recently experiencing lack of sleep. Is it true that sleep deprivation can cause high blood pressure?",
    "answer" : "Possibly. It's thought that sleeping fewer than six hours a night could be linked to increased blood pressure. People who sleep five hours or less a night may be at higher risk of developing high blood pressure or worsening already high blood pressure. There's also an increased risk of high blood pressure for people who sleep between five and six hours a night. It's thought that sleep helps your blood regulate stress hormones and helps your nervous system remain healthy. Over time, a lack of sleep could hurt your body's ability to regulate stress hormones, leading to high blood pressure. It is best to consult your doctor regarding preventing the same.",
    "consultNow" : ""
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My spouse has a very disturbed sleep, which disturbs mine to quiet an extent. Since he is already hypertensive, I worry if this sleep inconviniences would lead to high blood pressure in my case as well.",
    "answer" : "Sleeping seven to eight hours a night may play a role in the treatment and prevention of high blood pressure. Talk to your doctor for tips on getting better sleep, especially if your spouse has high blood pressure. One possible, treatable cause of your lack of sleep contributing to high blood pressure is obstructive sleep apnea — a sleep disorder in which you repeatedly stop and start breathing during sleep. Talk with your doctor if you feel tired even after a full night's sleep, especially if you snore. Obstructive sleep apnea may be the cause, and it can increase your risk of high blood pressure, as well as heart problems and other health issues.",
    "consultNow" : ""
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "I have been suffering from high blood pressure for long and need to take a long distance flight. Is it true that my condition could worsen when on board?",
    "answer" : "Hypertension symptoms worsen in very high altitudes . This worsening condition is hypoxia, meaning a significant decrease in the oxygen carried in the blood. In high altitudes, a person suffering from hypertension experiences blood being rushed through his body without enough oxygen to supply all of the body's parts. Consult your doctor for further clarifications.",
    "consultNow" : ""
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My hypertensive mother is aged 65 and needs to fly overseas. What are the possible difficulties she might experience in her maiden international flight because of this condition?",
    "answer" : "Hypertension sufferers might experience difficulty breathing and blood clots in their legs on flights longer than two hours. These sufferers also might experience swelling and bloating from retaining fluid. The swelling and fluid retention is caused by the damage to the blood vessels in the kidneys. This damage from the blood rushing through the vessel makes the kidney fail to eliminate waste and fluids from the body. Fluid instead leaks out and builds in the limbs, torso and face. It is best to consult with her doctor before letting her board the flight.",
    "consultNow" : ""
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "I am 36 and recently detected for border line hypertension, what precautions should I take befor taking my overseas flight?",
    "answer" : "Travelers can avoid the symptoms of hypoxia by standing and moving around the plane every two hours as permitted and staying away from salty snacks, since salt will encourage swelling and fluid retention and increase blood pressure. Take an ice pack along to relieve the pain and swelling during the flight. Sit so that your blood can circulate: Do not cross your legs and flex your limbs periodically during the flight. Avoiding alcohol and sedatives will help alleviate the pain and swelling. Any traveler with hypertension should see their doctor during the trip-planning stage to discuss their options, which might include a change in medication and the need for therapeutic oxygen.",
    "consultNow" : ""
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My wife is 7 months pregnant and has developed high blood pressure recently. Is it ok for her to travel by air?",
    "answer" : "Pregnant women with preeclampsia (pregnancy induced hypertension) and high blood pressure patients traveling against doctor’s orders should avoid air travel. The altitude could make their disease fatal or cause complications that are difficult to address in the air. Preeclampsia patients also put their unborn babies at risk.",
    "consultNow" : ""
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Does blood pressure have a daily pattern? I've noticed that my blood pressure is always lower in the morning than at night.",
    "answer" : "Blood pressure has a daily pattern. Blood pressure is normally lower at night while you're sleeping. Your blood pressure starts to rise a few hours before you wake up. Your blood pressure continues to rise during the day, usually peaking in the middle of the afternoon. Then in the late afternoon and evening, your blood pressure begins dropping again. It is best to record the pattern and consult with your doctor regarding the same.",
    "consultNow" : ""
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My blood pressure measurements at home are always higher than at my doctor's office. Am I doing something wrong?",
    "answer" : "Blood pressure measurements that are higher at your home than at your doctor's office could be caused by a decrease in stress at your doctor's office or an error in measuring your blood pressure at home. The opposite, higher blood pressure at your doctor's office than at your home, is often called white-coat hypertension. This means that the stress or anxiety of being in your doctor's office causes your blood pressure to be higher than it normally is at home, where you feel more at ease. Having lower blood pressure measurements at the doctor's office than at home is called masked hypertension. Masked hypertension can occur if a calm, quiet environment at your doctor's office is less stressful than the environment at home — leading to a lower blood pressure reading at the doctor's office. Likewise, use of alcohol, caffeine or cigarettes at home can increase blood pressure. Be sure that your home blood pressure monitor is accurate and that you're using the correct technique. If you're not sure, ask your doctor. He or she may ask you to bring the home blood pressure monitor to the office. You may measure your blood pressure in one arm with the home monitor while your doctor measures your blood pressure in the other arm with the office equipment. Still, some people consistently get different blood pressure readings outside the doctor's office — even when blood pressure is measured correctly and repeatedly. If your home blood pressure readings are accurate and consistently higher than those at your doctor's office, your doctor will likely manage your blood pressure based on the higher readings.",
    "consultNow" : ""
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My job pressure mae me stay anxious most of the times. Can anxiety cause high blood pressure?",
    "answer" : "Anxiety doesn't cause long-term high blood pressure (hypertension). But episodes of anxiety can cause dramatic, temporary spikes in your blood pressure. If those temporary spikes occur frequently, such as every day, they can cause damage to your blood vessels, heart and kidneys, as can chronic high blood pressure. In addition, when you have anxiety you're more likely to resort to other unhealthy habits that can increase your blood pressure, such as: •Smoking •Drinking alcoholic beverages •Overeating Some medications to treat anxiety and other mental health conditions, such as serotonin and norepinephrine reuptake inhibitors (SNRIs), can also increase your blood pressure. If you have trouble controlling your anxiety or if anxiety interferes with daily activities, talk to your doctor or a mental health provider to find an appropriate treatment.",
    "consultNow" : ""
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Ever since I have been detected of high blood pressure, I have noticed an increased level of fatigue as well. Are the two inter connected?",
    "answer" : "Fatigue and high blood pressure are linked in several ways. In people with chronic high blood pressure who are not receiving treatment, fatigue can be a symptom, as well as an indicator of damage to the cardiovascular system. In addition, certain medications used to manage high blood pressure have fatigue as a side effect, especially during the adjustment period when patients first start taking the medication. High blood pressure is usually associated with a constellation of other symptoms.When organs are damaged due to high blood pressure, the patient may quickly become fatigued. It is best to consult with your doctor regarding this issue.",
    "consultNow" : ""
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "I have been hypertensive for few years, now I have developed gout. Are the two corelated by any chance?",
    "answer" : "Occasionally, gout is associated with high blood pressure or hypertension. There are two reasons for this: 1. Certain medications for high blood pressure are diuretics. Diuretics increase the body's water and sodium excretion. This allows the blood vessel walls to relax, alleviating high blood pressure. However, this can also cause an increase in the blood uric acid concentration. 2. High blood pressure, if left untreated, is a risk factor for developing gout. Usually medications for high blood pressure will not cause gout, but they can exacerbate an existing gout condition. Talk to your doctor regarding managing the two.",
    "consultNow" : ""
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Recently my doctor suggested that gout and high blood pressure are corelated, are there any ways to overcome both?",
    "answer" : "Tips for avoiding gout and alleviating high blood pressure: • Lose weight: Many studies have shown that being overweight is very detrimental to your health. Excess weight exacerbates gout and high blood pressure. Talk to your health practitioner about designing a safe and effective weight loss program. • Stop drinking alcohol: Alcohol, especially beer and wine, is high in purines, acts as a diuretic, and interferes with the body's ability to excrete uric acid. • Avoid foods high in purines: Red meats, organ meats, legumes, and shellfish are high in purines. • Talk to your health practitioner about switching your medications for high blood pressure if they might cause gout. • Stay hydrated: Drink at least 2 litres of water each day. Dehydration allows a higher blood uric acid concentration. • Follow a low-sodium diet. High levels of sodium contribute to high blood pressure. • Quit smoking. Smoking also contributes to high blood pressure. • Eat a healthy diet: Avoid purine rich foods, and make sure to get plenty of fruits and vegetables. Avoid foods high in fat, saturated fat, and cholesterol. • Take a multivitamin. Research shows that certain nutrients like potassium can help reduce blood pressure, and a restricted diet can leave out certain nutrients. • Be sure to talk to your health practitioner to design a program for managing your hypertension and preventing gout. Do not stop taking any prescription medications without first consulting your health practitioner.",
    "consultNow" : ""
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My mother in law has been hypertensive for years. Now she has been complaining of glaucoma. Could her not managing high blood pressure properly leading to it?",
    "answer" : "Long-term high blood pressure may increase the risk of the eye disease glaucoma. Doctors should consider a patient's blood pressure when managing glaucoma, the second leading cause of blindness in the world. Speak to her doctor regarding managing both the situations.",
    "consultNow" : ""
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Garlic tablets have been used for lowering blood pressure. Should I eat it raw instead?",
    "answer" : "Those with hypertension, or high blood pressure, could control their condition better by adding garlic to conventional medication Eating the real thing would not have the same effect - allicin is produced when raw garlic is crushed but much is destroyed during cooking. Consult your doctor or dietician for more info.",
    "consultNow" : ""
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My partner is hypertensive and has been suffering from erectile dsyfunction lately. Is the issue a serious one?",
    "answer" : "High blood pressure stops the arteries that carry blood into the penis from dilating the way they are supposed to. It also makes the smooth muscle in the penis lose its ability to relax. As a result, not enough blood flows into the penis to make it erect. Consult his doctor for managing the blood pressure levels.",
    "consultNow" : ""
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "I find it hard to arouse my partner. Can his high blood pressure be blamed for this?",
    "answer" : "Men with high blood pressure may also have a low testosterone level. Testosterone is the male hormone that plays a big role in sexual arousal. High blood pressure by itself can lead to erectile dysfunction. However, some medicines for treating high blood pressure can actually be the cause as well. It is best to consult his doctor regarding these issues.",
    "consultNow" : ""
  },
  "17" : {
    "itemNumber" : 17,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "One of my friends had highlighted that medication for chronic knee pain could increase my chances of developing high blood pressure. As a solution to this I should exercise regularly. Please advise.",
    "answer" : "When your knees throb with pain, the last thing you want to do is get up and move around. You may even think that exercise would make your knees feel worse. But experts say that physical activity is actually a natural pain reliever. It also can improve your blood pressure. In fact, being sedentary for too long increases your risk for high blood pressure and other chronic conditions. These include obesity, type 2 diabetes, and heart disease. Getting regular, light exercise, such as walking, can help ease pain. Daily movement can lead to less joint pain and stiffness and better flexibility and mobility. This, in turn, can lift your mood and boost your energy. Plus, blood flow to your heart improves. This is beneficial for your blood pressure. Think of exercise as a win-win for your knees, heart, and overall health and happiness. Consult with your doctor regarding exercising for managing both knee pain and hypertension better.",
    "consultNow" : ""
  },
  "18" : {
    "itemNumber" : 18,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Even after being confirmed for high blood pressure my doctor has suggested that I go for jogging regularly. Is it safe?",
    "answer" : "For patients with hypertension jogging is recommendable. Running is one of the oldest types of sports. Jogging promotes a good mood and reduces stress. In addition, the cardiovascular system is trained and the body's defences are strengthened. Running also helps to combat obesity, one of the most common causes of hypertension. Plan your exercise routine in consultation with your doctor.",
    "consultNow" : ""
  },
  "19" : {
    "itemNumber" : 19,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "In case of suffering from hypertension, which activities are categorised as suitable?",
    "answer" : "Generally speaking the following are considered suitable even for those suffering from hypertension:Nordic walking Jogging Cycling Swimming Cross-country skiing Inline-skating. Still it is recommended that you consult your doctor regarding managing hypertension and indulging in these physical activities when detected of high blood pressure.",
    "consultNow" : ""
  },
  "20" : {
    "itemNumber" : 20,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My trainer has suggested that I keep away from high stress physical activities because of my hypertension. Is it true?",
    "answer" : "Badminton Squash Basketball Hockey Martial arts with high stress intensity should be avoided. Consult your doctor regarding planning your exercise routine while managing high blood pressure.",
    "consultNow" : ""
  },
  "21" : {
    "itemNumber" : 21,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Every other old person I meet has hypertension. Is it a part of the nomal aging process?",
    "answer" : "Hypertension in old age should not be considered a ‘normal part of aging’.Approximately 30-40% of all people over 65 have high blood pressure. Blood pressure control also increases life expectancy and the quality of life among elderly people. In the case of elderly patients, the physician will aim to achieve a gradual reduction in blood pressure, and will especially keep an eye on how the patient feels in general and on possible side effects. Consult with your doctor right away to prevent it at later stages.",
    "consultNow" : ""
  },
  "22" : {
    "itemNumber" : 22,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My father-in-law has just entered his 60s and fears that he will develop hypertension. How can we help him keep it at bay?",
    "answer" : "With only slightly elevated blood pressure, older patients should, in particular, pay attention in complying with these general measures: •Reducing excess weight •Refraining from excessive alcohol consumption •Appropriate physical activities •A low-sodium (salt) diet •Reduction of stress and relaxation Suggest him to consult with his doctor to prevent hypertension.",
    "consultNow" : ""
  },
  "23" : {
    "itemNumber" : 23,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "In case of suffering from children, is hypertension possible?",
    "answer" : "Although only 1% of all children and adolescents suffer from hypertension, a blood pressure check should be carried out once per year. In the case of disease symptoms such as dizziness, headache, blurred vision, but also in the case of heart and kidney disease, diabetes mellitus, a familial predisposition and obesity, blood pressure should be checked regularly by a doctor. In cases of mild hypertension, thorough application of general measures such as the reduction of obesity as well as a sporting activity is indicated also in children.",
    "consultNow" : ""
  },
  "24" : {
    "itemNumber" : 24,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My child will be celerating his first birthday soon, what should be his ideal blood pressure reading?",
    "answer" : "In case of Infants Systolic blood pressure (mmHg) should be less than 120. Talk to a child specialist for more details.",
    "consultNow" : ""
  },
  "25" : {
    "itemNumber" : 25,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My nephew is just 5, since both of his parents are hypertensive, was just wondering what should be his blood pressure reading be like?",
    "answer" : "In case of Young children (2-5 years, body size: 90-120cm) Systolic blood pressure in mmHg should be < 125 and Diastolic blood pressure in mmHg should be < 75. Consult your doctor for more details.",
    "consultNow" : ""
  },
  "26" : {
    "itemNumber" : 26,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "The blood pressure reading for my school goind children has been 130/ 75. Is it fine for their age?",
    "answer" : "School children (6-11 years, body size: 120-150cm) should have systolic blood pressure less than 135 and diastolic less than 80.",
    "consultNow" : ""
  },
  "27" : {
    "itemNumber" : 27,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My staple foods have always been junk. Does this put me at higher risk for developing hypertension?",
    "answer" : "Yes, fast food commonly contains unhealthy amounts of sodium and fat, which can negatively affect blood pressure. Consult a doctor or dietician for making healthy food choices.",
    "consultNow" : ""
  },
  "28" : {
    "itemNumber" : 28,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My chest tightens often and it is highly uncomfortable. My wife thinks it is a sign of high blood pressure. Could this be correct?",
    "answer" : "Chest pain or discomfort is caused when your heart muscle doesn't get enough oxygen-rich blood. It may feel like pressure or squeezing in your chest. The discomfort also can occur in your shoulders, arms, neck, jaw, or back. Angina pain may even feel like indigestion. But, angina is not a disease. It is a symptom of an underlying problem. Few symptoms that occur in people with very high blood pressure includes: chest pain, light-headedness, shortness of breath, tiredness and vision troubles. It is best to consult with your doctor and get an insight.",
    "consultNow" : ""
  },
  "29" : {
    "itemNumber" : 29,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My naturopath has suggested that I walk are foot on green grass to combat onset of high blood pressure, how does this actual work?",
    "answer" : "Walking barefoot on green grass for 15-20 minutes daily also improves blood circulation and helps to maintain the blood pressure at normal. This is a good high blood pressure remedy but you must consult your doctor to confirm.",
    "consultNow" : ""
  },
  "30" : {
    "itemNumber" : 30,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My neighbours have been consuming curry leaves to manage hypertension. How doesit help?",
    "answer" : "Curry leaves are also commonly used in the treatment of high blood pressure. Take 35-40 green curry leaves and boil in a glass of water. Keep it aside and allow it to cool. Drink this solution in empty stomach in early morning. You must confirm with your dietician and doctor before starting this.",
    "consultNow" : ""
  },
  "31" : {
    "itemNumber" : 31,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My aunt has suggested taking onion juice with honey to control blood pressure levels for my husband. What does this home remedy entail?",
    "answer" : "Take equal proportions of onion juice and honey. Take 2 tablespoons of this mixture two times a day. This is an effective natural remedy to cure high blood pressure. It is best to consult with your husband's dietician and doctor to manage the hypertension.",
    "consultNow" : ""
  },
  "32" : {
    "itemNumber" : 32,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My wife has developed pregnancy induced hypertension. Just how serious is this condition?",
    "answer" : "Most cases of pregnancy-induced hypertension are relatively mild and ultimately do not create unresolvable issues within pregnancy. Many of these women can still plan for a natural vaginal birth after 37 weeks. However pregnancy-induced hypertension can worsen during pregnancy and place both mother and baby in danger. Talk to her gyn at the earliest for managing this situation.",
    "consultNow" : ""
  },
  "33" : {
    "itemNumber" : 33,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "I have developed pregnancy induced hypertension, how important is it to get it treated right away?",
    "answer" : "Left untreated pregnancy-induced hypertension increases your risk of blood clotting issues, stroke impaired kidney and liver function, fluid on the lungs, seizures (fits) and death. Every day hundreds of women die from pregnancy or childbirth-related complications world-wide, including pregnancy-induced hypertension. However approximately 90% of these deaths occur in developing countries. Early detection and management is the key to minimising the risks associated with pregnancy-induced hypertension. That is one of the reasons why attending routine antenatal checks during pregnancy is so important. Do check if your Gyn regarding managing it.",
    "consultNow" : ""
  },
  "34" : {
    "itemNumber" : 34,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Now that I have been detected of pregancy induced hypertension, how could it impact my baby?",
    "answer" : "The most common symptom of pregnancy-induced hypertension seen in unborn babies is growth slower than that expected for gestational age. This growth restriction occurs because when a mother has pregnancy-induced hypertension, blood supply to the placenta can be poor. This results in your growing baby receiving less oxygen and fewer nutrients than it requires for healthy growth. This condition is referred to as intra-uterine growth restriction. Obviously this can seriously impact on your baby’s health in-utero and ultimate chance of survival. Intra-uterine growth restriction has been shown to greatly increase the risk of stillbirth. In addition it increases the risk of premature birth, low APGAR scores, hypoxic brain injury (brain damage caused by oxygen deprivation), chronic lung disease, the need for respiratory support and prolonged neonatal intensive care, and ultimately a lower chance of survival after birth. It is best to consult with your doctor and manage it.",
    "consultNow" : ""
  },
  "35" : {
    "itemNumber" : 35,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My sister has developed pregnancy induced hypertension. How is it typically managed?",
    "answer" : "Initially treatment of pregnancy-induced hypertension may start with rest at home, but in some cases hospitalisation may be recommended and/or treatment with one of a number of blood-pressure medications deemed safe in pregnancy. These medications will not ‘cure’ the woman of pregnancy-induced hypertension but instead are intended to promote better outcomes for women and their babies. Management of pregnancy-induced hypertension is essentially a balancing act between promoting the best outcomes for your baby while attempting as far as is possible to protect your health and wellbeing. For instance, while prolonging a pregnancy has no benefit for a woman with pregnancy-induced hypertension it may have significant benefits for her baby, since the degree of prematurity is directly linked to an infant’s likelihood of survival. In serious cases a caesarean may be recommended to deliver the baby early and promote the best chance of survival for both mother and baby. However this decision must be weighed based on gestational age, the current state of health of mother and child and any other identified risk factors. It is best to consult with her Gyn and manage it.",
    "consultNow" : ""
  },
  "36" : {
    "itemNumber" : 36,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My mother had developed high blood pressure during all of her pregnancies. Does that mean it will happen to me too?",
    "answer" : "Any woman could develop pregnancy-induced hypertension during her pregnancy. However from research we know there are certain factors which increase the risk. These include women who: •Have had pregnancy-induced hypertension in a previous pregnancy •Are experiencing a multiple pregnancy (twins or more) •Are over the age of 35 or under the age of 20 •Are underweight or overweight •Had diabetes before becoming pregnant (as opposed to gestational diabetes) •Have kidney disease, or a disorder of the immune system such as lupus •Have a history of chronic hypertension •Have a female relative with a history of pregnancy-induced hypertension •Have a history of alcohol, drug or tobacco use It is best to get routine tests done and be in consultation with your doctor regarding clarifications of any doubts.",
    "consultNow" : ""
  },
  "37" : {
    "itemNumber" : 37,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am taking sessions for treating hypertension using acupressure. Is it a good idea?",
    "answer" : "There are the acupressure points for relieving high blood pressure. Working on these points can help you get better quicker. You do not have to use all of these points. Using just one or two of them whenever you have a free hand can be effective. It is best to consult with your doctor before going in for any acupressure sessions.",
    "consultNow" : ""
  },
  "38" : {
    "itemNumber" : 38,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Ever since my dad has joined the laughter club his hypertension appears to be in control. How are the two connected?",
    "answer" : "Laughter reduces the production of stress hormones, not only during the time of laughter but also for some time after. Laughter also works the muscles, leading to an initial rise in blood pressure followed by a more sustained drop. Blood vessels dilate and an increased amount of oxygen enters the circulation due to deeper breathing. The ‘heartier’ the laugh, the better – laughing 15-20 minutes a day is good for heart health. Consult his doctor for more information regarding managing hypertension naturally.",
    "consultNow" : ""
  },
  "39" : {
    "itemNumber" : 39,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Osteoporosis and hypertension often co-exist, now that am in my late 50s wanted to know about if medication for hypertension could lead to osteoporosis or vice-versa,",
    "answer" : "Osteoporosis and hypertension are two frequent diseases among the aging population that share a similar etiopathology and often coexist. Moreover, treatment of hypertension affects bone mineral density and, therefore, can worsen osteoporosis. The most relevant nongenetic factors in the etiology of osteoporosis and hypertension are low calcium intake, vitamin D and vitamin K deficiency, high consumption of sodium salt, and the effects of different forms of nitric oxide. Thiazide diuretics are the only antihypertensives that have a positive influence on bone mineral density. For other antihypertensive drugs, the data are conflicting, indicating that they may have a potentially negative or positive influence on bone mineral density and fracture risk reduction. Due to the frequent coexistence of hypertension and osteoporosis, when selecting long-term antihypertensive therapy the potential effects of antihypertensive drugs on development, worsening, or improvement of osteoporosis should also be considered. It is best to consult with your doctor regarding prevention of both.",
    "consultNow" : ""
  },
  "40" : {
    "itemNumber" : 40,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Amongst the popular natural ways to treat hypertension is perhaps Qi-gong. How is it likely to help manage high blood pressure?",
    "answer" : "In most hypertension cases, the underlying causes are not clear. However, specialists have confirmed that long term stress or emotional distress play a role for its development and progression. Extreme mental stress keeps the brain in a hyperactive state that sends out neurological and biochemical messages to the body regularly, leading to blood vessel contraction, faster heart beats, and less blood flowing to the peripheral body, finally a persistent elevated blood pressure is formed. Qi-gong is a mind-body practice that involves aligning the body, breath and mind to modify or induce physiological functions of the body. It is best to consult your doctor before going in for Qi gong practice.",
    "consultNow" : ""
  },
  "41" : {
    "itemNumber" : 41,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Can thyroid problems cause high blood pressure? Please advise as my wife is middle aged and already under treatment for thyroid problems.",
    "answer" : "Low levels of thyroid hormone can lead to high blood pressure, elevated levels of cholesterol, and increased homocysteine (a risk factor for heart disease). The heart's pumping ability may slow increasing the risk of congestive heart failure, especially in older women. It is best to consult your doctor regarding managing thyroid and hypertension.",
    "consultNow" : ""
  },
  "42" : {
    "itemNumber" : 42,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Apple cider vinegar has been a natural remedy for hypertension. How it is supposed to be taken?",
    "answer" : "Experts suggest hypertensive patients to take 1 tbsp of apple cider vinegar and 1 tbsp of honey in a glass of water twice a day to lower high blood pressure. It is best to consult with your doctor and dietician regarding managing your hypertension.",
    "consultNow" : ""
  },
  "43" : {
    "itemNumber" : 43,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My partner had abnormally slow heart rate. How does this condition be mapped to his high blood pressure?",
    "answer" : "Possible cause of bradycardia is hypertension, or high blood pressure. High blood pressure makes it very difficult for your heart to push blood out into circulation and causes a reflex in your body (called reflex bradycardia) that slows down the heart in order to try and lower the blood pressure. It is best to consult a doctor regarding the same.",
    "consultNow" : ""
  },
  "44" : {
    "itemNumber" : 44,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My cardiac output has been on an increase, should this make me consult with my doctor?",
    "answer" : "Some conditions leading to hypertension include a decrease in functional kidney mass, excess aldosterone or angiotensin production, and increased resistance to blood flow in the renal arteries. All of these conditions cause an increase in the total blood volume, which causes the cardiac output to increase. This is enough reason for you to consult with your doctor immediately.",
    "consultNow" : ""
  },
  "45" : {
    "itemNumber" : 45,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Is it safe to exercise with high blood pressure?",
    "answer" : "Being active is one of the best things you can do for your blood pressure. Ask your doctor if there are any limits on what you can try. When you exercise, notice how your body feels. It may take a while before your body gets used to it. That's normal. It's also normal to breathe harder and to sweat, and for your heart to beat faster, when you're doing aerobic exercise. But if you're feeling very short of breath, or if you feel like your heart is beating too fast or irregularly, slow down or rest. Stop exercising if you feel chest pain, weakness, dizziness, lightheadedness, or pressure or pain in your neck, arm, jaw, or shoulder. Call your doctor or seek emergency treatment immediately if these symptoms do not go away quickly, or if it happens again.",
    "consultNow" : ""
  },
  "46" : {
    "itemNumber" : 46,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am hypertensive but find it boring to exercise. How can this be helped?",
    "answer" : "1. Make it fun! You'll be more likely to stick with it. 2. Schedule exercise into your daily routine. Plan when you're going to exercise and put it on your calendar. 3. Find an exercise \"buddy.\" This will help you stay motivated and enjoy it more. Talk to your family and friends besides the doctor to make it work for you!",
    "consultNow" : ""
  },
  "47" : {
    "itemNumber" : 47,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My dietician has been advising intake of bananas for controlling high blood pressure. How can these help?",
    "answer" : "You probably know that eating too much salt can raise blood pressure, but most people aren’t aware of the benefits of potassium, which counters sodium’s ill effects. Most don’t get enough of this mineral.. A few good sources: bananas (422 milligrams each), a baked potato with skin (738 milligrams), orange juice (496 milligrams per cup), and nonfat or low-fat yogurt (531–579 milligrams per 8 ounces). So keep consulting with your doctor and dietician.",
    "consultNow" : ""
  },
  "48" : {
    "itemNumber" : 48,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Levels of uric acid has been high in my system. Does this make me more prone to developing hypertension.",
    "answer" : "It has long been known that people with high levels of uric acid in the blood can also have high blood pressure. However, it is unknown if these two conditions simply tend to occur together or if one condition actually precedes the other. Excessive uric acid increases the risk for future development of hypertension. It is best to consult with your doctor regarding your uric acid levels and prevention of developing hypertension.",
    "consultNow" : ""
  },
  "49" : {
    "itemNumber" : 49,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "How is blood pressure related to blood volume? Are they directly proportional to each other?",
    "answer" : "With increased stroke volume, due to increased venous return and/or increased contractility, there is an increased cardiac output and increased blood pressure. Increases in peripheral resistance, blood volume, and cardiac output result in higher blood pressure. Therefore keeping them in control is important via consultation with your doctor.",
    "consultNow" : ""
  },
  "50" : {
    "itemNumber" : 50,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My BP is still on the higher side. Is it safe to take performance enhacing medication for overcoming ED?",
    "answer" : "Men whose blood pressure isn't under control should avoid medicine for treating erectile dysfunction. They must consult with their doctor before taking any other medication.",
    "consultNow" : ""
  },
  "" : {
    "itemNumber" : "",
    "subCategory" : "",
    "doctorName" : "",
    "question" : "",
    "answer" : "",
    "consultNow" : ""
  },
  "51" : {
    "itemNumber" : 51,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Ever since my spouse has been detected for diabetes she has been sleeping most of the day and is avoiding talking to people about her situation. How can I help her?",
    "answer" : "You will agree that already life is filled with stress. There’s the daily kind (traffic!), and there are also more serious issues such as divorce or money problems. Add in the challenges of managing diabetes, and stress sometimes can feel overwhelming. It’s important to find healthy ways to cope so that she don’t turn to harmful habits such as smoking, overeating, drinking alcohol or being less active. Having a lot of stress can increase her blood sugar levels, making her feel more negative and may lead to bad decisions. The good news is there are many healthy ways to cope with stress. A diabetes educator will help her find healthy ways to cope that work with her lifestyle.",
    "consultNow" : ""
  },
  "52" : {
    "itemNumber" : 52,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My grand father is depressed and diabetic both, is it a circle that every one goes through?",
    "answer" : "•Research shows that having diabetes more than doubles the risk of developing depression. Living with a chronic illness like diabetes, coping with biological and hormonal factors plus needing to manage the condition may increase the risk of depression, along with the threat of developing complications such as damage to the eyes (retinopathy), nerves (neuropathy) and kidneys (nephropathy). •Conversely, depression can double the risk of developing type 2 diabetes. This may be due to elevated stress hormones and weight gain as people with depression are often inactive.therefore it is important to consult the doctor regarding gurading against both of these.",
    "consultNow" : ""
  },
  "53" : {
    "itemNumber" : 53,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Can my friend's depression resulting from diabetes be treated?",
    "answer" : "Yes. Treatments include: •Medication to relieve the physical symptoms of depression •Cognitive Behaviour Therapy (CBT) to learn to identify and change negative thinking patterns •Interpersonal Therapy (IPT) to assist with the acceptance of having a chronic illness and the need for long term treatment, and to improve relationships. It is best to consult a diabetes expert and resolve work on these issues.",
    "consultNow" : ""
  },
  "54" : {
    "itemNumber" : 54,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Do coeliac disease and diabetes go hand in hand?",
    "answer" : "Coeliac disease is a condition where the lining of the small intestine is damaged due to sensitivity to a protein in food called gluten. Coeliac disease and diabetes type 1 diabetes may occur together. It is estimated that up to 10% of people with type 1 diabetes may have coeliac disease. Please refer to your doctor for complete details.",
    "consultNow" : ""
  },
  "55" : {
    "itemNumber" : 55,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "How can coelic disease be treated for diabetics?",
    "answer" : "A lifelong gluten-free diet is currently the only known treatment for coeliac disease. Gluten-free foods include corn, rice, sago, tapioca, buckwheat, potato, soy, arrowroot, fresh fruit, vegetables, unprocessed meat, poultry, fish and most dairy foods.",
    "consultNow" : ""
  },
  "56" : {
    "itemNumber" : 56,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am already suffering from PCOS, are the risks for diabetes greater for me than others?",
    "answer" : "As women with PCOS are likely to have insulin resistance, they have a greater risk of developing type 2 diabetes, gestational diabetes (diabetes during pregnancy) and pre-diabetes.",
    "consultNow" : ""
  },
  "57" : {
    "itemNumber" : 57,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My diabetes detection has left me wondering if I can go ahead with my international holiday any longer?",
    "answer" : "Travel can and should be fun and having diabetes doesn’t mean your travelling days are over. With good planning, there’s no reason why your travels won’t be safe, fun and hassle-free whether within the country or overseas.•Try to estimate what medication, test strips, insulin and syringes you will need for the entire trip and pack more than your needs in case of loss or damage. If possible, pack a spare meter. Remember that glucose meters purchased in other countries may not register in mmol/L, so if you did need to buy a new meter displaying readings in mg/dL it would need to be converted to read mmol/L. For more practical advise consult your doctor.",
    "consultNow" : ""
  },
  "58" : {
    "itemNumber" : 58,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My glucose reading seem to differ in different seasons, is my concern genuine?",
    "answer" : "Accuracy of blood glucose results is also affected by temperature at the time of operation. As temperature ranges vary for conducting a test, consult your meter user manual for your meter’s operational temperature range. Also confirm the details with your doctor.",
    "consultNow" : ""
  },
  "59" : {
    "itemNumber" : 59,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am diabetic and travelling to see my life's first snowfall. Is there anything to be aware of?",
    "answer" : "•Insulin and blood glucose test strips are stable at room temperature under 30 degrees. They will be damaged by temperature extremes so must not be frozen or left in the sun or heat for any length of time. If you are likely to be in very hot or cold places, take a small insulated bag with you. For more practical advise consultant your doctor.",
    "consultNow" : ""
  },
  "60" : {
    "itemNumber" : 60,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My diabetic mother-in-law has been prescribed steroid therapy. What can be done in this situation?",
    "answer" : "•Tell her doctor prescribing the steroids that she has diabetes and whether she is on insulin or diabetes tablets. •Increase the number of times she tests her blood glucose levels and record all results to identify patterns. See ther doctor or diabetes educator with any concerns. •Get her to do regular physical activity •Follow a healthy eating plan for her (see a dietitian). •See a dietitian to discuss carbohydrate intake and good food choices. •Consult a diabetes educator for ongoing education and support.",
    "consultNow" : ""
  },
  "61" : {
    "itemNumber" : 61,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "What are the key points to be remember when starting steroid therapy for diabetics?",
    "answer" : "•Never stop taking your steroid medication abruptly. Steroids should only be reduced by your doctor – slowly and gradually. •The effects of oral steroid medication usually subside within 48 hours of stopping the medication. •The effects of steroid injections can last anywhere between 3 and 10 days. •Steroids can cause raised blood glucose levels or diabetes in people who have not previously been diagnosed. Therefore they should be closely monitored by their doctor.",
    "consultNow" : ""
  },
  "62" : {
    "itemNumber" : 62,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Recently my room mate had an emergency called Hypoglycaemia. What is it and how could have I helped?",
    "answer" : "Hypoglycaemia is most common in people who inject insulin or are taking certain tablets to manage their diabetes. It is not a problem for those who manage their diabetes through a healthy eating plan alone. If the person is unconscious, drowsy or unable to swallow, then it is an emergency. They must not be given any food or drink by mouth. Medical help should be arranged at the earliest for them.",
    "consultNow" : ""
  },
  "63" : {
    "itemNumber" : 63,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "How can diabetics reduce the risk of skin problems?",
    "answer" : "•Keep your blood glucose levels and HbA1C as near to normal as possible to reduce the risk of skin infections. •Don’t let your house get too hot, especially in winter when the heaters are on and, if possible, increase the humidity. •Protect your skin by wearing gloves if you are using household cleaners and solvents. •Avoid very hot baths and showers and use non-scented soaps. •Use a cream or lotion on your skin after bathing, preferably one that is perfume-free. •Check your feet every day. If you have dry, rough or cracked skin on your feet, see your podiatrist or doctor. •See your doctor if your skin is very dry or irritated.",
    "consultNow" : ""
  },
  "64" : {
    "itemNumber" : 64,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My immunity seeems to have gone down ever since diabetes got trigerred, how are the two connected?",
    "answer" : "The immune system helps to ward off and fight infection. By slowing the action of white blood cells, high blood glucose levels make it more difficult to prevent and fight infection. How to reduce the risk of infection •Keep your blood glucose levels in target range •Get plenty of rest •Wash your hands often •All people with diabetes should have a yearly influenza (flu) injection. Ask your doctor about a pneumonia injection.",
    "consultNow" : ""
  },
  "65" : {
    "itemNumber" : 65,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "After the advent of diabetes my thyroid results aren't normal. Perhaps are the two are related?",
    "answer" : "Although diabetes doesn’t directly cause thyroid problems, studies show an increased risk of hypothyroidism (low thyroid levels) in people with type 1 and type 2 diabetes, especially in women over 40. Your doctor may recommend a test for thyroid function (TSH) every 5 years.",
    "consultNow" : ""
  },
  "66" : {
    "itemNumber" : 66,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "I have been recently tested for diabetes and the number of complications associated with it are making me uneasy.",
    "answer" : "Remember, most diabetes-related complications can be prevented. The doctor and health care team helping you to look after your diabetes will advise you if any of the recommended checks or tests need to be done more frequently to manage your diabetes more effectively. Keep your blood glucose levels, HbA1c and blood pressure at recommended levels.You can help reduce LDL cholesterol and triglycerides by avoiding saturated fats (fats from land animal products, palm oil and coconut products often found in processed foods) in the food you eat.",
    "consultNow" : ""
  },
  "67" : {
    "itemNumber" : 67,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My dietician has warned me of my cholestrol levels and indicated that being diabetic makes it worse.",
    "answer" : "While the ideal total cholesterol level is less than 4.0 mmol/L, it’s important to know there is ‘bad’ cholesterol and ‘good’ cholesterol. •LDL cholesterol is known as ‘bad’ cholesterol. Higher levels of LDL cholesterol increase your risk of heart and blood vessel disease. LDL cholesterol should be less than 2.5mmol/L. •Triglycerides are another kind of blood fat that increases the risk of heart disease. Triglycerides should be less than 1.5 mmol/L. •HDL cholesterol is known as ‘good’ cholesterol. A level higher than 1.0 mmol/L helps to protect the heart and blood vessels. How to reduce your cholesterol •If you drink alcohol, do so in moderation. •Include healthy fats in moderation. •Regular physical activity will also help reduce the ‘bad’ cholesterol and at the same time increase your ‘good’ cholesterol. Consult your doctor for further details.",
    "consultNow" : ""
  },
  "68" : {
    "itemNumber" : 68,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My diabetes specialist has suggested me to be in touch with the diabetes care team, what exactly is their role?",
    "answer" : "Diabetes care team can help prevent complications arising from this disease: •Cholesterol. Your diabetes team should arrange to have your cholesterol and triglycerides checked at least once a year (unless otherwise recommended) •Blood pressure. Every time you visit your doctor, have your blood pressure checked. As a general guide, the ideal is less than or equal to 130/80 (less than 140/90 in the elderly). •HbA1c (glycated-haemoglobin). This test shows an average of your blood glucose levels over the past 10–12 weeks and should be arranged by your diabetes team every 3–6 months (unless otherwise recommended. Aim to keep HbA1c levels under 7%. •Aspirin. Ask your doctor if you should be taking low dose aspirin as it can help to protect you from heart attack.",
    "consultNow" : ""
  },
  "69" : {
    "itemNumber" : 69,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My spouse has been having yeast infections ever since she developed diabetes. What can be done to help her?",
    "answer" : "Women with poorly controlled diabetes are more likely to have frequent bouts of thrush (yeast infection). In most cases, keeping blood glucose levels under control will help.Consult your doctor regading the same.",
    "consultNow" : ""
  },
  "70" : {
    "itemNumber" : 70,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am of marriagable age and diabetic, should I reveal this to my potential spouse?",
    "answer" : "Yes, while most people with diabetes, both male and female, are able to lead completely normal sex lives, diabetes may contribute to sexual problems for some people. The most common problem is erectile dysfunction in men (also known as ED or impotence) which occurs when unable to get or keep an erection long enough for intercourse. Ejaculation may or may not be affected. Fertility remains normal. It is high recommended that you talk to your doctor about the same and how it can impact your married life.",
    "consultNow" : ""
  },
  "71" : {
    "itemNumber" : 71,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My boy friend seems to loose interest in physical intimacy from time to time. Could this be because of his diabetes?",
    "answer" : "Most men have an occasional problem with erectile dysfunction. This can be caused by being tired, stressed, depressed or drinking too much alcohol. Some tablets may also cause erectile dysfunction, such as certain tablets used to treat high blood pressure, depression or stomach ulcers. It’s important to always tell your doctor about any tablets you may be taking for other conditions. Men with diabetes may also lose their sexual desire for a time when their blood glucose levels are high. Consult a qualified doctor to help you both handle this situation better.",
    "consultNow" : ""
  },
  "72" : {
    "itemNumber" : 72,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Does diabetes get worse as we age?",
    "answer" : "Diabetes care is generally the same no matter how old you are. However, there are some specific changes that happen with age and these might affect your diabetes. You may have had diabetes for a long time, and in your later years you may have other health issues. Health care experts could be contacted for personalised treatments.",
    "consultNow" : ""
  },
  "73" : {
    "itemNumber" : 73,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am diabetic and feeling sick - largely dehydrated. What can be done to imrpove this situation?",
    "answer" : "High blood glucose levels, vomiting and diarrhoea can all lead to dehydration. You will need to drink more, but it is important what you should drink, based on your blood glucose levels. If your blood sugar level is more than 15 mmol/L then you should drink unsweetened fluids like water, clear soups, weak tea, or diet lemonade. If your blood sugar level is less than 15 mmol/L then you should drink sweetened fluids like ordinary lemonade, cordial or apple juice. Contact your doctor for further advice.",
    "consultNow" : ""
  },
  "74" : {
    "itemNumber" : 74,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am unable to eat normal diet and am feeling sick, being diabetic what can be done immediately to feel better?",
    "answer" : "Eat according to how you feel and what food you can tolerate. If you can’t eat your usual meals, make sure you have small low-fat snacks at regular intervals throughout the day (for example, toast, crackers, boiled rice, soup, low-fat custard or ice-cream). If you can’t eat food, have sips of fluid every few minutes. Include carbohydrate drinks (such as fruit juice or lemonade) if your blood glucose level is below 15 mmol/L or unsweetened fluids (such as soda water or diet lemonade) if your blood glucose level is above 15 mmol/L.",
    "consultNow" : ""
  },
  "75" : {
    "itemNumber" : 75,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am diabetic and have been vomiting repeatedly. Should I stop taking insulin?",
    "answer" : "When you’re sick, you should continue to take your usual dose of insulin. Never stop taking or reduce your insulin dose. Sometimes when you are sick you may need more insulin or extra doses of insulin. Contact your doctor if your illness lasts for more than one day, or if you vomit more than three times in a day, to discuss whether your insulin needs to be changed.",
    "consultNow" : ""
  },
  "" : {
    "itemNumber" : "",
    "subCategory" : "",
    "doctorName" : "",
    "question" : "",
    "answer" : "",
    "consultNow" : ""
  },
  "76" : {
    "itemNumber" : 76,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Is it true that I cant have fresh fruits because I have diabetes?",
    "answer" : "No. Although we know fruits and vegetables are good for us people with diabetes are often told they can’t eat fruit because they are too sweet or contain sugar. All fruits contain natural sugar, but also contain a good mix of vitamins, minerals and fibre. Eating fruits and vegetables lowers the risk of developing many health conditions including high blood pressure, heart diseases, strokes, obesity and certain cancers.",
    "consultNow" : ""
  },
  "78" : {
    "itemNumber" : 78,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My grandmother is diabetic and swears by pranayams for managing it well, do the breathing exercises seriously help?",
    "answer" : "Breathing exercises especially anulom vilom (alternate nostril breathing) and kapalbatti (one-time inhale; exhale 30 to 50 times quickly) is extremely beneficial. Anulom vilom is found useful in diabetes as alternate nostril breathing has calming effects on the nervous system, facilitating homeostasis (internal equilibrium in the function of all the systems). This manages the stress levels, helping in diabetes treatment",
    "consultNow" : ""
  },
  "79" : {
    "itemNumber" : 79,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My yoga instructor has suggested practicing Kapalbhatti for preventing high blood sugar levels. Is it correct?",
    "answer" : "Kapalbhatti, on the other hand, stimulates the pancreas to release insulin, thus helping control diabetes. Pranayam makes the mind calm, thus balancing the interaction between the pituitary gland and the pancreas. Kapalabhati combined with Nauli Kriya (pressure manipulations and isolation of abdominal-recti muscles) help control blood sugar. These practices balance the Basic Metabolic Rate (BMR) which in turn helps stabilise sugar levels. .",
    "consultNow" : ""
  },
  "80" : {
    "itemNumber" : 80,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "How is natural sugar different from artificial sugars?",
    "answer" : "Sugar is found naturally in fruit, vegetables and dairy foods. It’s also added to food and drink by food manufacturers, or by ourselves at home. The debate about sugar and health is mainly around the ‘added sugars’ or the artificial sweetners. These includes: •table sugar that we add to our hot drinks or breakfast cereal •caster sugar, used in baking •sugars hidden in sauces, ready meals, cakes and drinks.",
    "consultNow" : ""
  },
  "81" : {
    "itemNumber" : 81,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "How much sugar should a healthy person by ideally eating and how to keep count?",
    "answer" : "We all should be cutting our sugar intake by half to around 25g a day – which works out at just five teaspoons a day. Given that a tablespoon of ketchup contains around one teaspoon of sugar, a chocolate biscuit has up to two, and a small serving of baked beans almost three – you can see how quickly the teaspoons tot up.",
    "consultNow" : ""
  },
  "82" : {
    "itemNumber" : 82,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am very fond of fish, does diabetes get adversely affected by eating it?",
    "answer" : "All types of fish are good sources of protein, and oily fish is particularly good, as it's rich in omega-3 (polyunsaturated fat), which protects against heart disease. Fresh, frozen or canned are all good – choose canned fish in spring water, and look out for added salt. Avoid fried fish, or, if you do have it, remove the batter. Aim to eat two portions of oily fish, such as mackerel, sardines or salmon, every week.",
    "consultNow" : ""
  },
  "83" : {
    "itemNumber" : 83,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Whichh food item should vegans bank on for controlling their diabetes?",
    "answer" : "Beans, lentils and pulses are low in fat, high in fibre, cheap to buy and packed with nutrients. They don’t have a big impact on blood glucose and may help to control blood fats such as cholesterol. Try kidney beans, chickpeas, green lentils, and even baked beans, hot in soups and casseroles, cold in salads, in baked falafel, bean burgers and low-fat hummus and dhals.",
    "consultNow" : ""
  },
  "84" : {
    "itemNumber" : 84,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Besides all the tips on food and diet for diabetes, what about hydration?",
    "answer" : "We all need to stay hydrated by drinking 8–10 glasses of fluid per day. Water is best, but milk, tea and coffee, herbal teas and some foods, particularly fruit and veg, all contribute to this total.",
    "consultNow" : ""
  },
  "85" : {
    "itemNumber" : 85,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Do the foods sold as for \"diabetic\" have an edge?",
    "answer" : "Foods labelled as ‘diabetic’ offer no benefit to people with diabetes and may still affect blood glucose levels. They are expensive and contain as much fat and calories as ordinary versions, and they can also have a laxative effect.",
    "consultNow" : ""
  },
  "86" : {
    "itemNumber" : 86,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "What is the role of dietician in regulating diabetes? Isnt visiting a doctor sufficient?",
    "answer" : "It is highly recommended that everyone with diabetes should see a registered dietitian at diagnosis, and then have regular reviews. Ask your doctor to refer you to see a registered dietitian for wholesome treatment.",
    "consultNow" : ""
  },
  "87" : {
    "itemNumber" : 87,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am diabetic but not obese, what should be done about my general fat intake?",
    "answer" : "Everyone needs some fat as part of a healthy diet. But, cut back on saturated fats, which are found in foods that are made of animal products like butter and cheese, red and processed meats, palm oil, coconut oil, ghee, and cakes and pastries.",
    "consultNow" : ""
  },
  "88" : {
    "itemNumber" : 88,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My dietician has suggested to practice portion control owing to my high blood sugar levels. What all does this entail.",
    "answer" : "Be mindful of your overall portion sizes of your food. If you are trying to lose weight or manage blodd sugar levels, you may need to adjust them. •Try using smaller plates. •For main meals, dish out your vegetables first and let this fill up your plate. •Separate the different foods on the plate rather than piling them on each other. •Resist the temptation for a second helping; have a glass of water first.",
    "consultNow" : ""
  },
  "89" : {
    "itemNumber" : 89,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "What is glycaemic index (GI), how does it matter to diabetics?",
    "answer" : "The glycaemic index (GI) tells us whether a food raises blood glucose levels quickly, moderately or slowly. This means it can be useful to help you manage your diabetes. Different carbohydrates are digested and absorbed at different rates, and GI is a ranking of how quickly each carbohydrate-based food and drink makes blood glucose levels rise after eating them.",
    "consultNow" : ""
  },
  "90" : {
    "itemNumber" : 90,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "For diabetics is it ok to focus only on low GI foods?",
    "answer" : "If you focus only on the GI of foods, without looking at other aspects, your diet could be unbalanced and high in fat and calories, which could lead to weight gain (making it harder to control your blood glucose levels) and increase your risk of heart disease. It’s important to think about the balance of your meals, which should be low in saturated fat, salt and sugar and contain plenty of fruit and vegetables.",
    "consultNow" : ""
  },
  "91" : {
    "itemNumber" : 91,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "I want to include low GI foods in everyday meals. Kindly suggest some practical tips.",
    "answer" : "It’s easy to include low-GI carbs in everyday meals: •Choose basmati or easy cook rice, pasta or noodles. Or, try plantain, quinoa or bulgur wheat for a change. •Eat wholemeal roti and include dhal in your meals. •Use new potatoes instead of old potatoes – try sweet potatoes for a change. •Instead of white and wholemeal bread, choose granary, pumpernickel or rye bread. •Swap frozen chips for pasta or noodles. •Try porridge, natural muesli or wholegrain breakfast cereals.",
    "consultNow" : ""
  },
  "92" : {
    "itemNumber" : 92,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "What all factors affect GI of foods that diabetics should be aware of?",
    "answer" : "Number of factor affect GI of foods including: •Cooking methods: frying, boiling and bakingillustration of pasta •Processing and the ripeness of fruit and certain vegetables •Fibre: wholegrains and high-fibre foods act as a physical barrier that slows down the absorption of carbohydrate. This is not the same as ‘wholemeal’, where, even though the whole of the grain is included, it has been ground up instead of left whole. For example, some mixed grain breads that include wholegrains have a lower GI than wholemeal or white bread. •Fat lowers the GI of a food. For example, chocolate has a medium GI because of it’s fat content, and crisps will actually have a lower GI than potatoes cooked without fat. •Protein lowers the GI of food. Milk and other diary products have a low GI because they are high in protein and contain fat.",
    "consultNow" : ""
  },
  "93" : {
    "itemNumber" : 93,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My dietician has suggested to include wholegrains in my diet to manage high blood sugar levels. How many servings are ideal in a day?",
    "answer" : "most experts recommend at least three servings a day. It’s important to replace refined products with wholegrain foods to help keep your blood glucose and weight in check in the long term. 1 serving of whole grains equals: •25g porridge oats •1 bowl (34g) muesli •1 bowl (30g) toasted wholegrain oat cereal •1 bowl of wheat-based breakfast cereal •1 bowl of breakfast cereal made from wholewheat •1 large slice (40g) multi-grain bread •23g (uncooked weight) brown rice •23g (uncooked weight) wholewheat pasta •3 Ryvitas •3 oatcakes •1 slice of rye bread •1 wholemeal pitta bread",
    "consultNow" : ""
  },
  "94" : {
    "itemNumber" : 94,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "What are the best ways to include wholegrain foods in my daily diabetic diet?",
    "answer" : "•Choose a wholegrain cereal for breakfast. •Swap white bread for wholemeal bread – look for the words ‘wholegrain’ or ‘wholemeal’ on the label. •Choose brown rice instead of white – look out for brown basmati and quick-cook brown rice. •Use wholemeal flour for baking – if you’re not used to baking with wholemeal flour start by substituting half the white flour with wholemeal. As you get used to cooking with wholemeal flour you can gradually increase the proportion. •Choose oatcakes or Ryvita or wholemeal crackers instead of cream crackers. •Swap couscous for bulgur wheat. •Add barley to soups and stews. •Popcorn in a wholegrain so as treat swap crisps or other savory for unsalted sugar-free popcorn. •Corn on the cob is wholegrain, or you can add sweetcorn to recipes like spaghetti bolognese or chilli con carne. •Use porridge oats in crumble toppings.",
    "consultNow" : ""
  },
  "95" : {
    "itemNumber" : 95,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Am already into gluten free foods and now owing to diabetes wholegrain foods are being promoted. Are gluten free wholegrain foods available?",
    "answer" : "If you follow a gluten-free diet there are plenty of gluten-free wholegrains that you can enjoy such as brown rice, quinoa, uncontaminated oats, millet, sorghum, teff and buckwheat.",
    "consultNow" : ""
  },
  "96" : {
    "itemNumber" : 96,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "How exactly do yoga asans help with treating diabetes?",
    "answer" : "For one, yoga stimulates the organs which in turn improves metabolic activities. This means that the chemical transformations within a cell are carried out more efficiently. This makes it a highly beneficial exercise for those suffering from diabetes -a complex condition which occurs due to lack of insulin production by the pancreas or lack of cell response to insulin, resulting in a multitude of metabolic imbalances involving the regulation and utilisation of insulin and glucose (sugar) in the body.",
    "consultNow" : ""
  },
  "97" : {
    "itemNumber" : 97,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "Which are the top Yogic asanas that help in diabetes?",
    "answer" : "Studies have also confirmed that practising certain asanas such as Ardha Matsyendrasana (half-twist pose) combined with Dhanurasana (bow pose), Vakrasana (twisted pose), Matsyendrasana (half-spinal twist), Halasana (plough pose) squeezes and compresses the abdomen and helps stimulate the pancreatic secretions or hormonal secretions. As a result, more insulin is pushed into the system. This rejuvenates the insulin producing beta cells in the pancreas of diabetics suffering from both type 1 and 2. Practising the postures in a relaxed manner, without exertion, meditation and breathing techniques help most patients control the triggers or causes of diabetes. .",
    "consultNow" : ""
  },
  "98" : {
    "itemNumber" : 98,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "My spouse is diabetic and it is recommended that he increases his fibre intake. How does this change benefit?",
    "answer" : "Increasing the amount of fibre in one's diet can help manage diabetes. It also helps keep the gut healthy and can reduce blood cholesterol, which lowers risk of cardiovascular disease. If trying to maintain a healthy weight, it can also help.",
    "consultNow" : ""
  },
  "99" : {
    "itemNumber" : 99,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "What are the convinient ways of increasing fibre in my child's food to manage his high blood sugar levels?",
    "answer" : "You may include •Plain oat cakes •Fruits •Nuts •Dried fruit •Yogurt with berries and pumpkin seeds",
    "consultNow" : ""
  },
  "100" : {
    "itemNumber" : 100,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "What are the general tips for grocery shopping when cooking for diabetics?",
    "answer" : "•Look for words such as ‘wholemeal’, ‘wholewheat’ and ‘wholegrain’ on labels. Wholegrain carbohydrates tend to be higher in fibre and lower in GI, which means they have less of an effect on your blood glucose levels. •Choose wholemeal, seeded or multi-grain bread – these are higher in fibre than white varieties. Brown bread is not as high in fibre as wholemeal. •Instead of white pasta or rice choose the brown/wholewheat type. •Go for beans, pulses and lentils – buy tinned to save on cooking time and add to casseroles, soups, salads and curries. •Choose oat-based, bran or wholegrain breakfast cereals. •Buy a selection of interesting and seasonal fruit and vegetables to help you aim for your five-a-day target. •Couscous and quinoa, which are wholegrains, are a great source of fibre.",
    "consultNow" : ""
  },
  "101" : {
    "itemNumber" : 101,
    "subCategory" : "",
    "doctorName" : "Dr.Priyanka",
    "question" : "What are the quick quenchers suggested for those with high blood sugar levels?",
    "answer" : "•Add slices of cucumber, lemon, or mint leaves to a glass of iced water.illustration of a glass of water with a straw •Mix sparkling water with a small amount of squash or cordial. •Make ice cubes from watermelon or grapes to brighten up your sugar-free drinks. •Gradually dilute fruit juice so you get used to less sweetness. •Try different types of flavoured teas – fresh mint leaves in boiling water is very refreshing. •Keep a bottle or a jug of water on the dinner table. •Add ground elaichi (cardamom seeds) to flavour chai in place of sugar and use semi-skimmed milk rather than whole or evaporated milk. •Use diet or light versions of hot chocolate. •Check the label on drinks cartons and choose the one that’s lowest in sugar",
    "consultNow" : ""
  }
};

// for (k in qandasPriyanka){
//   console.log(count++, qandasPriyanka[k]);
// }
// return;

for (var key in qandasPriyanka) {
  count++;
  var qanda = qandasPriyanka[key];
  qanda.consultNow = qanda.consultNow == "1" ? true : false;
  // qanda.consultDoctorType = qanda.category.split(' ')[1];
  qanda.category = "Diabetes";
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};