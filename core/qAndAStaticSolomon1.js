var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasSolomon = {
  "My doctor told that im having hypertension what is hypertension??" : {
    "question" : "My doctor told that im having hypertension what is hypertension??",
    "answer" : "High blood pressure(Hypertension) is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease.",
    "consultNow" : "",
    "category" : "Information",
    "doctorName" : "Dr.Solomon"
  },
  "I want to know how does hypertension develop in a person??" : {
    "question" : "I want to know how does hypertension develop in a person??",
    "answer" : "Blood pressure is determined both by the amount of blood your heart pumps and the amount of resistance to blood flow in your arteries. The more blood your heart pumps and the narrower your arteries, the higher your blood pressure.",
    "consultNow" : "",
    "category" : "Information",
    "doctorName" : "Dr.Solomon"
  },
  "My doctor told that im having hypertension but im having normal life I have no symptoms of high B.P can that be possible hypertension without symptoms??" : {
    "question" : "My doctor told that im having hypertension but im having normal life I have no symptoms of high B.P can that be possible hypertension without symptoms??",
    "answer" : "You can have high blood pressure (hypertension) for years without any symptoms. Even without symptoms, damage to blood vessels and your heart continues and can be detected. Uncontrolled high blood pressure increases your risk of serious health problems, including heart attack and stroke.",
    "consultNow" : "",
    "category" : "Symptoms",
    "doctorName" : "Dr.Solomon"
  },
  "Did I do something that made me hypertensive??" : {
    "question" : "Did I do something that made me hypertensive??",
    "answer" : "High blood pressure generally develops over many years, and it affects nearly everyone eventually. Fortunately, high blood pressure can be easily detected. And once you know you have high blood pressure, you can work with your doctor to control it.",
    "consultNow" : "",
    "category" : "Information",
    "doctorName" : "Dr.Solomon"
  },
  "what are the symptoms of hypertension??" : {
    "question" : "what are the symptoms of hypertension??",
    "answer" : "Most people with high blood pressure have no signs or symptoms, even if blood pressure readings reach dangerously high levels.\nA few people with high blood pressure may have headaches, shortness of breath or nosebleeds, but these signs and symptoms aren't specific and usually don't occur until high blood pressure has reached a severe or life-threatening stage.",
    "consultNow" : "",
    "category" : "Symptoms",
    "doctorName" : "Dr.Solomon"
  },
  "Im 24 yrs old and I have a positive family history for hypertension how often should check my blood pressure (B.P) ??" : {
    "question" : "Im 24 yrs old and I have a positive family history for hypertension how often should check my blood pressure (B.P) ??",
    "answer" : "Ask your doctor for a blood pressure reading at least every two years starting at age 18. If you're age 40 or older, or you're age 18-39 with a high risk of high blood pressure, ask your doctor for a blood pressure reading every year.Your doctor will likely recommend more frequent readings if you've already been diagnosed with high blood pressure or have other risk factors for cardiovascular disease.",
    "consultNow" : "",
    "category" : "Information",
    "doctorName" : "Dr.Solomon"
  },
  "Im having home B.P appratus(moniter ) how should I check my BP??" : {
    "question" : "Im having home B.P appratus(moniter ) how should I check my BP??",
    "answer" : "Blood pressure generally should be checked in both arms to determine if there is a difference. It's important to use an appropriate-sized arm cuff.",
    "consultNow" : "",
    "category" : "Information",
    "doctorName" : "Dr.Solomon"
  },
  "Im using home B.P apparatus are the reading in that apparatus is accurate??" : {
    "question" : "Im using home B.P apparatus are the reading in that apparatus is accurate??",
    "answer" : "The accuracy of home B.P machines depends on several factors, such as a correct cuff size and proper use of the machines. Ask your doctor for advice on using home blood pressure machines.",
    "consultNow" : "",
    "category" : "Information",
    "doctorName" : "Dr.Solomon"
  },
  "what is Primary hypertension?? What are the causes for primary hypertension" : {
    "question" : "what is Primary hypertension?? What are the causes for primary hypertension",
    "answer" : "For most adults, there's no identifiable cause of high blood pressure. This type of high blood pressure, called primary (essential) hypertension, tends to develop gradually over many years.",
    "consultNow" : "",
    "category" : "Information",
    "doctorName" : "Dr.Solomon"
  },
  "My doctor told that im having secondary hypertion what may be the cause for that??" : {
    "question" : "My doctor told that im having secondary hypertion what may be the cause for that??",
    "answer" : "Some people have high blood pressure caused by an underlying condition. This type of high blood pressure, called secondary hypertension, tends to appear suddenly and cause higher blood pressure than does primary hypertension. Various conditions and medications can lead to secondary hypertension, including:\nObstructive sleep apnea\nKidney problems\nAdrenal gland tumors\nThyroid problems\nCertain defects in blood vessels you're born with (congenital)\nCertain medications, such as birth control pills, cold remedies, decongestants, over-the-counter pain relievers and some prescription drugs\nIllegal drugs, such as cocaine and amphetamines\nAlcohol abuse or chronic alcohol use",
    "consultNow" : "",
    "category" : "Information",
    "doctorName" : "Dr.Solomon"
  },
  "What are the risk factors for hypertension??" : {
    "question" : "What are the risk factors for hypertension??",
    "answer" : "High blood pressure has many risk factors, including\nAge\nRace\nFamily History \nBeing obese or overweight\nNot being physically active \ntoo much salt intake\nLow pottasium intake\nToo little vitamin D\nDrinking too much alchohol \nStress\nCertain chronic health conditions",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yrs male and im diagnosed hypertension my doctor told that hypertension develops with age how is that??" : {
    "question" : "Im 45 yrs male and im diagnosed hypertension my doctor told that hypertension develops with age how is that??",
    "answer" : "The risk of high blood pressure increases as you age. Through early middle age, or about age 45, high blood pressure is more common in men. Women are more likely to develop high blood pressure after age 65. Blood vessels lose flexibility with age which can contribute to increasing pressure throughout the system.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "My father is Hypertensive will I develop hypertension as well??" : {
    "question" : "My father is Hypertensive will I develop hypertension as well??",
    "answer" : "If your parents or close blood relatives have had HBP, you are more likely to develop it, too. You might also pass that risk factor on to your children. That's why it's important for children as well as adults to have regular blood pressure checks. You can't control heredity, but you can take steps to live a healthy life and lower your other risk factors. Lifestyle choices have allowed many people with a strong family history of HBP to avoid it themselves.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Will being over weight lead to hypertension??" : {
    "question" : "Will being over weight lead to hypertension??",
    "answer" : "Yes being over weight is risk factor for hypertension .The more you weigh the more blood you need to supply oxygen and nutrients to your tissues. As the volume of blood circulated through your blood vessels increases, so does the pressure on your artery walls.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Im 35 yr male and work in an IT firm will being sedentary lead to hypertension??" : {
    "question" : "Im 35 yr male and work in an IT firm will being sedentary lead to hypertension??",
    "answer" : "People who are inactive tend to have higher heart rates. The higher your heart rate, the harder your heart must work with each contraction and the stronger the force on your arteries. Lack of physical activity also increases the risk of being overweight.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Does smoking lead to hypertension??" : {
    "question" : "Does smoking lead to hypertension??",
    "answer" : "Not only does smoking or chewing tobacco immediately raise your blood pressure temporarily, but the chemicals in tobacco can damage the lining of your artery walls. This can cause your arteries to narrow, increasing your blood pressure. Secondhand smoke also can increase your blood pressure.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Will eating more salt really lead to hypertension ??" : {
    "question" : "Will eating more salt really lead to hypertension ??",
    "answer" : "Yes Too much sodium in your diet can cause your body to retain fluid, which increases blood pressure.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Im recently diagnosed hypertension my doctor advised me to take mote pottasium rich food why??" : {
    "question" : "Im recently diagnosed hypertension my doctor advised me to take mote pottasium rich food why??",
    "answer" : "Potassium helps balance the amount of sodium in your cells. If you don't get enough potassium in your diet or retain enough potassium, you may accumulate too much sodium in your blood.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "My doctor told that I have deficiency in Vitamin D will that lead to hypertension??" : {
    "question" : "My doctor told that I have deficiency in Vitamin D will that lead to hypertension??",
    "answer" : "It's uncertain if having too little vitamin D in your diet can lead to high blood pressure. Vitamin D may affect an enzyme produced by your kidneys that affects your blood pressure.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Im 38 yrs male and hypertensive and alchoholic does that increase my blood pressure??" : {
    "question" : "Im 38 yrs male and hypertensive and alchoholic does that increase my blood pressure??",
    "answer" : "Over time, heavy drinking can damage your heart. Having more than two drinks a day for men and more than one drink a day for women may affect your blood pressure.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Im alchoholic and recently my doctor told Im having hypertension how much alchohol can I take??" : {
    "question" : "Im alchoholic and recently my doctor told Im having hypertension how much alchohol can I take??",
    "answer" : "If you drink alcohol, do so in moderation. For healthy adults, that means up to one drink a day for women of all ages and men older than age 65, and up to two drinks a day for men age 65 and younger. One drink equals 12 ounces of beer, 5 ounces of wine or 1.5 ounces of 80-proof liquor.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Will stress increase hypertension??" : {
    "question" : "Will stress increase hypertension??",
    "answer" : "High levels of stress can lead to a temporary increase in blood pressure. If you try to relax by eating more, using tobacco or drinking alcohol, you may only increase problems with high blood pressure.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "What are the health conditions that may lead to hypertension??" : {
    "question" : "What are the health conditions that may lead to hypertension??",
    "answer" : "Certain chronic conditions also may increase your risk of high blood pressure, such as kidney disease, diabetes and sleep apnea.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Can children with no physical activity develop hypertension??" : {
    "question" : "Can children with no physical activity develop hypertension??",
    "answer" : "Although high blood pressure is most common in adults, children may be at risk, too. For some children, high blood pressure is caused by problems with the kidneys or heart. But for a growing number of kids, poor lifestyle habits, such as an unhealthy diet, obesity and lack of exercise, contribute to high blood pressure.",
    "consultNow" : "",
    "category" : "Risk factors",
    "doctorName" : "Dr.Solomon"
  },
  "Im recently diagnosed hypertension what are the health issues that I may have because of hypertension??" : {
    "question" : "Im recently diagnosed hypertension what are the health issues that I may have because of hypertension??",
    "answer" : "The excessive pressure on your artery walls caused by high blood pressure can damage your blood vessels, as well as organs in your body. The higher your blood pressure and the longer it goes uncontrolled, the greater the damage.\nUncontrolled high blood pressure can lead to:\nHeart attack \nstroke \nAneurysm \nHeart failure\nRenal complication\nEye problems\nMetabolic syndrome \nTrouble with memory",
    "consultNow" : "",
    "category" : "Complications",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive since many years and l want to know how does hypertenson lead to heart attack??" : {
    "question" : "Im hypertensive since many years and l want to know how does hypertenson lead to heart attack??",
    "answer" : "High blood pressure can cause hardening and thickening of the arteries (atherosclerosis), which can lead to a heart attack, stroke or other complications.",
    "consultNow" : "",
    "category" : "Complications",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive since many years and l want to know how does hypertenson lead to stroke??" : {
    "question" : "Im hypertensive since many years and l want to know how does hypertenson lead to stroke??",
    "answer" : "High blood pressure can cause hardening and thickening of the arteries (atherosclerosis), which can lead to a heart attack, stroke or other complications.",
    "consultNow" : "",
    "category" : "Complications",
    "doctorName" : "Dr.Solomon"
  },
  "My friend is hospitalized for anuerysm Doctor told that aneurysm developed due to hypertension what is that???" : {
    "question" : "My friend is hospitalized for anuerysm Doctor told that aneurysm developed due to hypertension what is that???",
    "answer" : "Aneurysm is an excessive localized swelling of the wall of an artery.Increased blood pressure can cause your blood vessels to weaken and bulge, forming an aneurysm. If an aneurysm ruptures, it can be life-threatening.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does hypertension lead to heart failure??" : {
    "question" : "How does hypertension lead to heart failure??",
    "answer" : "To pump blood against the higher pressure in your vessels, your heart muscle thickens. Eventually, the thickened muscle may have a hard time pumping enough blood to meet your body's needs, which can lead to heart failure.",
    "consultNow" : "",
    "category" : "Failure",
    "doctorName" : "Dr.Solomon"
  },
  "How does hypertension lead to kidney failure??" : {
    "question" : "How does hypertension lead to kidney failure??",
    "answer" : "Hypertension leads to weakened and narrowed blood vessels in your kidneys. This can prevent these organs from functioning normally.",
    "consultNow" : "",
    "category" : "Normally",
    "doctorName" : "Dr.Solomon"
  },
  "How does hypertension lead to Loss of vision??" : {
    "question" : "How does hypertension lead to Loss of vision??",
    "answer" : "Hypertension leads to thickened, narrowed or torn blood vessels in the eyes. This can result in vision loss.",
    "consultNow" : "",
    "category" : "Loss",
    "doctorName" : "Dr.Solomon"
  },
  "My doctor told I may have metabolic syndrome due to hypertension what is metabolic syndrome???" : {
    "question" : "My doctor told I may have metabolic syndrome due to hypertension what is metabolic syndrome???",
    "answer" : "This syndrome is a cluster of disorders of your body's metabolism, including increased waist circumference; high triglycerides; low high-density lipoprotein (HDL) cholesterol, the \"good\" cholesterol; high blood pressure; and high insulin levels. These conditions make you more likely to develop diabetes, heart disease and stroke.",
    "consultNow" : "",
    "category" : "Information",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive since many years these days im forgetting things is that because of hypertension??" : {
    "question" : "Im hypertensive since many years these days im forgetting things is that because of hypertension??",
    "answer" : "Uncontrolled high blood pressure may also affect your ability to think, remember and learn. Trouble with memory or understanding concepts is more common in people with high blood pressure.",
    "consultNow" : "",
    "category" : "Information",
    "doctorName" : "Dr.Solomon"
  },
  "What are the precautions that I must take when im going for blood pressure check up??" : {
    "question" : "What are the precautions that I must take when im going for blood pressure check up??",
    "answer" : "No special preparations are necessary to have your blood pressure checked. You might want to wear a short-sleeved shirt to your appointment so that the blood pressure cuff can fit around your arm properly. You might want to avoid caffeinated food and drinks right before your test. You may want to use the toilet before having your blood pressure measured.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How is hypertension diagnosed??" : {
    "question" : "How is hypertension diagnosed??",
    "answer" : "Your doctor will likely take two to three blood pressure readings each at three or more separate appointments before diagnosing you with high blood pressure. This is because blood pressure normally varies throughout the day, Your blood pressure generally should be measured in both arms to determine if there is a difference. It's important to use an appropriate-sized arm cuff. Your doctor may ask you to record your blood pressure at home and at work to provide additional information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the other tests that I have to undergo for diagnosing hypertension??" : {
    "question" : "What are the other tests that I have to undergo for diagnosing hypertension??",
    "answer" : "Your doctor may also recommend routine tests, such as a urine test (urinalysis), blood tests, a cholesterol test and an electrocardiogram — a test that measures your heart's electrical activity. Your doctor may also recommend additional tests, such as an echocardiogram, to check for more signs of heart disease.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "My doctor advised me to have continuous BP monitering what is that??" : {
    "question" : "My doctor advised me to have continuous BP monitering what is that??",
    "answer" : "Your doctor may suggest a 24-hour blood pressure monitoring test called ambulatory blood pressure monitoring. The device used for this test measures your blood pressure at regular intervals over a 24-hour period and provides a more accurate picture of blood pressure changes over an average day and night.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the 2 reading that I see in Blood Pressure reading??" : {
    "question" : "What are the 2 reading that I see in Blood Pressure reading??",
    "answer" : "A blood pressure reading, given in millimeters of mercury (mm Hg), has two numbers. The first, or upper, number measures the pressure in your arteries when your heart beats (systolic pressure). The second, or lower, number measures the pressure in your arteries between beats (diastolic pressure).",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How much is normal blood pressure reading ??" : {
    "question" : "How much is normal blood pressure reading ??",
    "answer" : "Your blood pressure is normal if it's below 120/80 mm Hg. But blood pressure varies from time to time so it is considered systolic Pressure (Upper number) 110-130 and Diastolic pressure(lower number) 70-90 may be considered as normal",
    "consultNow" : "",
    "category" : "Normal",
    "doctorName" : "Dr.Solomon"
  },
  "In my regular check my doctor told that im having pre-hypetension what is that??" : {
    "question" : "In my regular check my doctor told that im having pre-hypetension what is that??",
    "answer" : "Prehypertension is a systolic pressure ranging from 120 to 139 mm Hg or a diastolic pressure ranging from 80 to 89 mm Hg. Prehypertension tends to get worse over time.",
    "consultNow" : "",
    "category" : "Time",
    "doctorName" : "Dr.Solomon"
  },
  "What is stage 1 Hypertension??" : {
    "question" : "What is stage 1 Hypertension??",
    "answer" : "Stage 1 hypertension is a systolic pressure ranging from 140 to 159 mm Hg or a diastolic pressure ranging from 90 to 99 mm Hg.",
    "consultNow" : "",
    "category" : "Hg",
    "doctorName" : "Dr.Solomon"
  },
  "What is stage 2 Hypertension??" : {
    "question" : "What is stage 2 Hypertension??",
    "answer" : "More severe hypertension, stage 2 hypertension is a systolic pressure of 160 mm Hg or higher or a diastolic pressure of 100 mm Hg or higher.",
    "consultNow" : "",
    "category" : "Higher",
    "doctorName" : "Dr.Solomon"
  },
  "Which number in B.P reading is important ?" : {
    "question" : "Which number in B.P reading is important ?",
    "answer" : "Both numbers in a blood pressure reading are important. But after age 60, the systolic reading is even more significant.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is isolated Hypertension??" : {
    "question" : "What is isolated Hypertension??",
    "answer" : "Isolated systolic hypertension is a condition in which the diastolic pressure is normal (less than 90 mm Hg) but systolic pressure is high (greater than 140 mm Hg). This is a common type of high blood pressure among people older than 60.",
    "consultNow" : "",
    "category" : "Than 60",
    "doctorName" : "Dr.Solomon"
  },
  "Why do I need check Blood Pressure at home??" : {
    "question" : "Why do I need check Blood Pressure at home??",
    "answer" : "An important way to check if your blood pressure treatment is working, or to diagnose worsening high blood pressure, is to monitor your blood pressure at home.",
    "consultNow" : "",
    "category" : "Home",
    "doctorName" : "Dr.Solomon"
  },
  "Do I need a Doctor prescription to buy home bp moniter??" : {
    "question" : "Do I need a Doctor prescription to buy home bp moniter??",
    "answer" : "Home blood pressure monitors are widely available and inexpensive, and you don't need a prescription to buy one. Talk to your doctor about how to get started.",
    "consultNow" : "",
    "category" : "Started",
    "doctorName" : "Dr.Solomon"
  },
  "Im having home B.P appratus(moniter ) and im regularly monitering Bloood Pressure can I skip my doctors visit??" : {
    "question" : "Im having home B.P appratus(moniter ) and im regularly monitering Bloood Pressure can I skip my doctors visit??",
    "answer" : "Home blood pressure monitoring isn't a substitute for visits to your doctor, and home blood pressure monitors may have some limitations.",
    "consultNow" : "",
    "category" : "Limitations",
    "doctorName" : "Dr.Solomon"
  },
  "My doctor told that im hypertensive how can I control that??" : {
    "question" : "My doctor told that im hypertensive how can I control that??",
    "answer" : "Changing your lifestyle can go a long way toward controlling high blood pressure. Your doctor may recommend you eat a healthy diet with less salt, exercise regularly, quit smoking and maintain a healthy weight. But sometimes lifestyle changes aren't enough.In addition to diet and exercise, your doctor may recommend medication to lower your blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 65 yr old and im having hypertension on regular medication what should be my target blood pressure??" : {
    "question" : "Im 65 yr old and im having hypertension on regular medication what should be my target blood pressure??",
    "answer" : "If you're a healthy adult age 60 or older your target blood pressure must be less than 150/90mm Hg",
    "consultNow" : "",
    "category" : "Hg",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yr old and im having hypertension on regular medication what should be my target blood pressure??" : {
    "question" : "Im 45 yr old and im having hypertension on regular medication what should be my target blood pressure??",
    "answer" : "If you're a healthy adult Younger than 60 your target blood pressure must be less than 140/90mm Hg",
    "consultNow" : "",
    "category" : "Hg",
    "doctorName" : "Dr.Solomon"
  },
  "Im 50 yr old and im having hypertension and diabetes on regular medication what should be my target blood pressure??" : {
    "question" : "Im 50 yr old and im having hypertension and diabetes on regular medication what should be my target blood pressure??",
    "answer" : "If you have chronic kidney disease, diabetes or coronary artery disease or are at high risk of coronary artery disease your target blood pressure must be less than 140/90mm Hg",
    "consultNow" : "",
    "category" : "Hg",
    "doctorName" : "Dr.Solomon"
  },
  "Is it safe to get pregnant if my blood pressure is high?" : {
    "question" : "Is it safe to get pregnant if my blood pressure is high?",
    "answer" : "By following the recommendations of your doctor and carefully managing your blood pressure, you can help ensure a normal pregnancy and a healthy baby. However, high blood pressure can be dangerous for both mother and baby. If you are taking HBP medication and want to become pregnant, first consult your doctor. Also keep in mind that if you already have high blood pressure, pregnancy could make it more severe.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Is it safe to get pregnant if I am taking ACE inhibitors or ARBs for high blood pressure?" : {
    "question" : "Is it safe to get pregnant if I am taking ACE inhibitors or ARBs for high blood pressure?",
    "answer" : "If you're taking an ACE inhibitor or an ARB and think you might be pregnant, see your doctor immediately. These drugs have been shown to be dangerous to mother and baby alike during pregnancy.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "As a woman with high blood pressure, what precautions should I take if I want to become pregnant?" : {
    "question" : "As a woman with high blood pressure, what precautions should I take if I want to become pregnant?",
    "answer" : "Each pregnancy is different, and your doctor will give you recommendations for your situation. Most women with high blood pressure should follow these precautions before becoming pregnant.\nGet your blood pressure under control.\nWatch your diet and limit salt and sodium.\nBe active and exercise. Regular physical activity will help you control your blood pressure and increase your physical condition.\nIf you're overweight, lose weight to help you have a safer pregnancy and a healthier baby.\nStop using tobacco and alcohol.\nIf you're on medication for high blood pressure (or any other condition), discuss all of your medications, including over-the-counter drugs and supplements, with all of your doctors. Never stop taking a prescription medication without first consulting the doctor who prescribed it.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Why is it so important to control my blood pressure during pregnancy?" : {
    "question" : "Why is it so important to control my blood pressure during pregnancy?",
    "answer" : "Failing to do so could result in:\nHarm to the mother's kidneys and other organs\nLow birth weight and early delivery of the infant",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 26 yr female and pregnant my doctor tol im hypertensive I was normal before pregnancy why is this??" : {
    "question" : "Im 26 yr female and pregnant my doctor tol im hypertensive I was normal before pregnancy why is this??",
    "answer" : "Some women may develop high blood pressure (hypertension) while they are pregnant. This condition is known as Pregnancy Induced Hypertension (PIH), (also called gestational hypertension).",
    "consultNow" : "",
    "category" : "Hypertension)",
    "doctorName" : "Dr.Solomon"
  },
  "I'm pregnant, and I've never had high blood pressure before, but I do now. Will I always have it?" : {
    "question" : "I'm pregnant, and I've never had high blood pressure before, but I do now. Will I always have it?",
    "answer" : "Some women who have never had HBP develop it while they are pregnant. This condition is known as Pregnancy Induced Hypertension (PIH), (also called gestational hypertension). It usually disappears after delivery.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "My prenatal clinic says I have preeclampsia because my urine has protein in it and my blood pressure is high. What is that??" : {
    "question" : "My prenatal clinic says I have preeclampsia because my urine has protein in it and my blood pressure is high. What is that??",
    "answer" : "Preeclampsia is a condition that typically begins after the 20th week of pregnancy and may continue six weeks after delivery. It's characterized by high blood pressure and elevated protein in the urine, which is caused by kidney problems. This kind of hypertension usually disappears after delivery. If it doesn't, it should be controlled with careful, long-term treatment as with all other types of HBP.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the risk factors for preeclampsia??" : {
    "question" : "What are the risk factors for preeclampsia??",
    "answer" : "You are at a higher risk for developing preeclampsia if you:\nHave high blood pressure before becoming pregnant\nHave developed high blood pressure or preeclampsia in a previous pregnancy\nAre obese prior to pregnancy\nAre under age 20 or over age 40\nAre pregnant with more than one baby\nHave diabetes, kidney disease, rheumatoid arthritis, lupus or scleroderma",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the symptoms of preecclampsia??" : {
    "question" : "What are the symptoms of preecclampsia??",
    "answer" : "Not all women have noticeable symptoms of preeclampsia. When symptoms do occur, they can include:\nSwelling\nSudden weight gain\nHeadaches\nChanges in vision",
    "consultNow" : "",
    "category" : "Vision",
    "doctorName" : "Dr.Solomon"
  },
  "How can I be sure that I won't get pregnancy induced hypertension or preeclampsia?" : {
    "question" : "How can I be sure that I won't get pregnancy induced hypertension or preeclampsia?",
    "answer" : "There is no proven way to prevent PIH or preeclampsia and no test that will predict or diagnose these conditions. Only regular visits to your doctor will ensure that you're having a safe pregnancy. Your doctor will track your blood pressure and check the level of protein in your urine. For a healthy pregnancy, you should:\nGet early and regular care from your doctor. Don't miss appointments.\nFollow all of your doctor's recommendations.\nDo what you can to help manage your blood pressure, including limiting sodium intake and getting regular physical activity.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the Different Types Of Hypertension During Pregnancy??" : {
    "question" : "What are the Different Types Of Hypertension During Pregnancy??",
    "answer" : "Chronic Hypertension– Women who have high blood pressure (over 140/90) before pregnancy, early in pregnancy (before 20 weeks), or continue to have it after delivery.Gestational Hypertension– High blood pressure that develops after week 20 in pregnancy and goes away after delivery.Preeclampsia – Both chronic hypertension and gestational hypertension can lead to this severe condition after week 20 of pregnancy. Symptoms include high blood pressure and protein in the urine. This can lead to serious complications for both mom and baby if not treated quickly.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Who Is At Risk For Gestational Hypertension?" : {
    "question" : "Who Is At Risk For Gestational Hypertension?",
    "answer" : "The following women may have an increased risk of developing gestational hypertension:\nFirst-time Pregnants\nWomen whose sisters and mothers had PIH\nWomen carrying multiples\nWomen younger than age 20 or older than age 40\nWomen who had high blood pressure or kidney disease prior to pregnancy",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How Do I Know If I Have Gestational Hypertension?" : {
    "question" : "How Do I Know If I Have Gestational Hypertension?",
    "answer" : "At each prenatal checkup, your healthcare provider will check your blood pressure and urine levels. Your doctor may also check your kidney and blood-clotting functions, order blood tests, perform an ultrasound scan to check your baby’s growth, and use a Doppler scan to measure the efficiency of blood flow to the placenta.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How Is Gestational Hypertension Treated?" : {
    "question" : "How Is Gestational Hypertension Treated?",
    "answer" : "Treatment depends on how close you are to your due date. If you are close to your due date and the baby is developed enough, your health care provider may want to deliver your baby as soon as possible.\nIf you have severe hypertension, your doctor may try to treat you with blood pressure medication until you are far enough along to deliver safely.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What can I do to control gestational hypertension??" : {
    "question" : "What can I do to control gestational hypertension??",
    "answer" : "If you have mild hypertension and your baby is not fully developed, your doctor will probably recommend the following:\nRest, lying on your left side to take the weight of the baby off your major blood vessels.\nIncrease prenatal checkups.\nConsume less salt.\nDrink 8 glasses of water a day.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How common is hypertension during pregnancy?" : {
    "question" : "How common is hypertension during pregnancy?",
    "answer" : "High blood pressure occurs in about 6 to 8 percent of all pregnancies",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How will my hypertension affect my baby?" : {
    "question" : "How will my hypertension affect my baby?",
    "answer" : "Hypertension puts baby at a greater risk for low birth weight, preterm delivery and placental abruption.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the risks of Pregnancy induced hypertension to the baby" : {
    "question" : "What are the risks of Pregnancy induced hypertension to the baby",
    "answer" : "PIH can prevent the placenta (which gives oxygen and food to your baby) from getting enough blood. If the placenta doesn't get enough blood, your baby gets less oxygen and food. This can cause low birth weight and other problems for the baby.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the risks of Pregnancy induced hypertension to me??" : {
    "question" : "What are the risks of Pregnancy induced hypertension to me??",
    "answer" : "Most women who have PIH still deliver healthy babies. A few develop a condition called eclampsia (PIH with seizures), which is very serious for the mother and baby, or other serious problems. Fortunately, PIH is usually detected early in women who get regular prenatal care, and most problems can be prevented.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the symptoms of Pregnancy induced hypertension??" : {
    "question" : "What are the symptoms of Pregnancy induced hypertension??",
    "answer" : "If you have any of the following symptoms of PIH, call your doctor right away:\nSevere headaches\nVomiting blood\nExcessive swelling of the feet and hands\nSmaller amounts of urine or no urine\nBlood in your urine\nRapid heartbeat\nDizziness\nExcessive nausea\nRinging or buzzing sound in ears\nExcessive vomiting\nDrowsiness\nFever\nDouble vision\nBlurred vision\nSudden blindness\nPain in the abdomen (tummy)",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 26 yr old female and im pregnant Does high blood pressure mean I have Pregnancy induced hypertension??" : {
    "question" : "Im 26 yr old female and im pregnant Does high blood pressure mean I have Pregnancy induced hypertension??",
    "answer" : "Not necessarily. If your doctor sees that your blood pressure is high, he or she will watch you closely for changes that could mean you have PIH. In addition to high blood pressure, women who have PIH also have excessive swelling. They may also have protein in their urine. Many women who have high blood pressure during pregnancy don't have protein in their urine or extreme swelling, and don't get PIH.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 26 yr old female and im pregnant and I noticed swalling in my feet is this because of pregnancy induced hypertension??" : {
    "question" : "Im 26 yr old female and im pregnant and I noticed swalling in my feet is this because of pregnancy induced hypertension??",
    "answer" : "Swelling alone doesn't necessarily mean you have PIH. Some swelling is normal during pregnancy. For example, your rings or shoes might become too tight. Swelling is more serious if it doesn't go away after resting, if it's very obvious in your face and hands or if it's a rapid weight gain of more than 5 pounds in a week.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are therisk factors for Preganancy induced hypertension??" : {
    "question" : "What are therisk factors for Preganancy induced hypertension??",
    "answer" : "PIH is more common during a woman's first pregnancy and in women whose mothers or sisters had PIH. The risk of PIH is higher in women carrying multiple babies, in teenage mothers and in women older than 40 years of age. Other women at risk include those who had high blood pressure or kidney disease before they became pregnant. The cause of PIH isn't known.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What tests can show if I have PIH?" : {
    "question" : "What tests can show if I have PIH?",
    "answer" : "No one test diagnoses PIH. Your blood pressure will be checked during each doctor's visit. A big rise in your blood pressure can be an early sign that you might have PIH. A urine test can tell if there is protein in your urine. Your doctor may order certain blood tests, which may show if you have PIH. If you have signs of PIH, your doctor may want to see you at least once a week and possibly every day.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 27 yr female and pregnant how is my chronic hypertension treated??" : {
    "question" : "Im 27 yr female and pregnant how is my chronic hypertension treated??",
    "answer" : "If you are already taking medicine for high blood pressure, your doctor may want you to keep taking that medicine. If that medicine is not safe for the baby, your doctor might want you to change to another medicine or to stop taking medicine while you are pregnant. Your doctor will pay special attention to how your baby is growing. You might have ultrasound exams more often. You might have some other tests near the end of your pregnancy to make sure that your baby is healthy. Your doctor will monitor you closely for signs of PIH.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 32 yr female pregnant my doctor told im having gestational hypertension how is that treated??" : {
    "question" : "Im 32 yr female pregnant my doctor told im having gestational hypertension how is that treated??",
    "answer" : "This condition doesn't need any treatment. But it can be hard to tell this condition from early or mild PIH, so your doctor will monitor you very closely to make sure your high blood pressure does not turn into PIH. Your doctor might tell you to take aspirin or extra calcium to prevent PIH. Your doctor might also tell you to lie on your left side while you are resting. This will improve blood flow and take weight off your large blood vessels.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 28 yr female pregnant my doctor told im having Pregnancy induced hypertension how is that treated??" : {
    "question" : "Im 28 yr female pregnant my doctor told im having Pregnancy induced hypertension how is that treated??",
    "answer" : "How your doctor treats this condition depends on how close you are to your due date and how you and your baby are doing. The only treatment that stops PIH is to deliver the baby. If your baby is born very early, it may have serious health problems. But your doctor may want your baby to be delivered early if you or the baby are very sick. If your doctor thinks it is safe for the pregnancy to continue to full term, he or she will monitor you and your baby very closely until delivery. You will see your doctor often and get blood tests. Your baby will also get some tests to make sure he or she is healthy. You might need to stay home from work and rest in bed. In some cases, hospitalization may be necessary.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "If my doctor decides to deliver the baby early, will I have to have a Cesarean section?" : {
    "question" : "If my doctor decides to deliver the baby early, will I have to have a Cesarean section?",
    "answer" : "This is up to your doctor and you. A Cesarean section (an operation to deliver the baby) is more likely if your health or your baby's health is in danger. If things aren't this serious, your doctor may use medicine (such as oxytocin) to start your labor, and you can deliver your baby through a vaginal delivery",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What happens to high blood pressure after delivery?? im hypertensive before pregnancy" : {
    "question" : "What happens to high blood pressure after delivery?? im hypertensive before pregnancy",
    "answer" : "Your blood pressure will probably stay high after you have your baby. You will have to keep taking medicine for high blood pressure, watch your diet and exercise.",
    "consultNow" : "",
    "category" : "Exercise",
    "doctorName" : "Dr.Solomon"
  },
  "What happens to high blood pressure after delivery im having gestational diabetes now??" : {
    "question" : "What happens to high blood pressure after delivery im having gestational diabetes now??",
    "answer" : "Your blood pressure will go back to normal within a few weeks after you have your baby, but you are more likely to develop chronic high blood pressure later in life.",
    "consultNow" : "",
    "category" : "Life",
    "doctorName" : "Dr.Solomon"
  },
  "What happens to high blood pressure after delivery im having PIH now??" : {
    "question" : "What happens to high blood pressure after delivery im having PIH now??",
    "answer" : "Your blood pressure will go back to normal within a few weeks after you have your baby.",
    "consultNow" : "",
    "category" : "Baby",
    "doctorName" : "Dr.Solomon"
  },
  "Will less salt intake reduce my hypertension in pregnancy??" : {
    "question" : "Will less salt intake reduce my hypertension in pregnancy??",
    "answer" : "One way to control high blood pressure when you're not pregnant is to cut the amount of salt you eat. This is not a good idea if you have high blood pressure during pregnancy. Your body needs salt to keep up the flow of fluid in your body, so you need a normal intake of salt. Your doctor will tell you how much salt to eat each day and how much water you should drink each day.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive and on treatment and im planning for child what are problems that my baby will have ??" : {
    "question" : "Im hypertensive and on treatment and im planning for child what are problems that my baby will have ??",
    "answer" : "High blood pressure can make your baby grow too slowly, or not get enough nutrients or oxygen. This can hurt your baby's health. Women who have chronic hypertension are also more likely to develop PIH, which can be very dangerous.",
    "consultNow" : "",
    "category" : "Dangerous",
    "doctorName" : "Dr.Solomon"
  },
  "Im 25 yr female and pregnant im having gestational hypertension what are the problems that my baby may face??" : {
    "question" : "Im 25 yr female and pregnant im having gestational hypertension what are the problems that my baby may face??",
    "answer" : "This condition does not cause any problems for you or your baby, but it can increase the risk that you will develop high blood pressure later in life. Gestational hypertension can also turn into PIH.",
    "consultNow" : "",
    "category" : "Pih",
    "doctorName" : "Dr.Solomon"
  },
  "Im 28 yr female and pregnant im having PIH what are the problems that my baby may face??" : {
    "question" : "Im 28 yr female and pregnant im having PIH what are the problems that my baby may face??",
    "answer" : "High blood pressure is not the main problem, but it is one of the main signs of this health condition. PIH can cause headaches, blurred vision, vision loss, abdominal pain and dizziness. It can cause slow growth of the baby, low birth weight and premature delivery. If you get PIH with seizures (called eclampsia), you and your baby are at risk of dying. Many doctors give magnesium sulfate to their patients during labor and for a few days afterward to help prevent eclampsia. Talk to your doctor about these things.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Am I at greater risk for high blood pressure after menopause?" : {
    "question" : "Am I at greater risk for high blood pressure after menopause?",
    "answer" : "As a woman grows older, her chance of having high blood pressure becomes greater than a man's. You may have had normal blood pressure most of your life, but after menopause your chances of developing HBP increase considerably.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Do birth control pills cause high blood pressure?" : {
    "question" : "Do birth control pills cause high blood pressure?",
    "answer" : "Medical researchers have found that birth control pills increase blood pressure in some women. It's more likely to occur if you're overweight, have had high blood pressure during pregnancy, have a family history of HBP or have mild kidney disease. The combination of birth control pills and cigarette use may be especially dangerous for some women.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Ive heard that biirth control pills cause high blood pressure what are the precautions I must take before taking birth control pills??" : {
    "question" : "Ive heard that biirth control pills cause high blood pressure what are the precautions I must take before taking birth control pills??",
    "answer" : "Before you begin taking oral contraceptives:\nTalk to your doctor about the risks.\nMake sure your doctor measures and records your blood pressure before prescribing the pill.\nHave your blood pressure checked every six months or so.",
    "consultNow" : "",
    "category" : "So",
    "doctorName" : "Dr.Solomon"
  },
  "Can birth control pills cause high blood pressure?" : {
    "question" : "Can birth control pills cause high blood pressure?",
    "answer" : "If you already have high blood pressure, consider using a different form of birth control. While nearly all birth control pills can raise your blood pressure, your blood pressure may be less likely to increase if you use a birth control pill or device that contains a lower dose of estrogen.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 25yr female and im on birth control pills my doctor told I have high blood pressure should I stop taking birth control pill" : {
    "question" : "Im 25yr female and im on birth control pills my doctor told I have high blood pressure should I stop taking birth control pill",
    "answer" : "Most doctors will advise you not to take the pill if:\n1. If you have hypertension or there is a history of heart disease in your family.\n2. You experienced hypertension during pregnancy.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 25yr female and im on birth control pills I have high blood pressure now what should I do??" : {
    "question" : "Im 25yr female and im on birth control pills I have high blood pressure now what should I do??",
    "answer" : "If you start taking the birth control pill and your blood pressure increases, your doctor will monitor you closely. The following options will be considered:\n1. Continue taking the pill and wait to see if your levels go back down again. You may even consider buying a home blood pressure monitor.\n2. Switch to a different pill with lower levels of progesterone.\n3. If your levels remain high you will need to stop taking oral pills. If this happens your doctor will talk to you about alternative contraception.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the precautions that I must take before using birth control pills??" : {
    "question" : "What are the precautions that I must take before using birth control pills??",
    "answer" : "Before beginning birth control pill your doctor will check your blood pressure. If you do not have a long history with your current physician, he will likely make several checks of your blood pressure over a period of time.",
    "consultNow" : "",
    "category" : "Time",
    "doctorName" : "Dr.Solomon"
  },
  "What are the precautions that I must take when im using birth control pills" : {
    "question" : "What are the precautions that I must take when im using birth control pills",
    "answer" : "During treatment, your blood pressure should be monitored regularly, usually during your annual exam, but more frequently if any increase is detected.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can you fly if you have high blood pressure?" : {
    "question" : "Can you fly if you have high blood pressure?",
    "answer" : "All forms of standard travel, including flying, are generally fine if you have high blood pressure and it is well controlled. However, if your blood pressure is unstable or very high then you should talk to your doctor before you make any travel plans.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Why is blood pressure important?" : {
    "question" : "Why is blood pressure important?",
    "answer" : "Blood pressure is important because the higher your blood pressure is, the higher your risk of health problems in the future.\nIf your blood pressure is high, it is putting extra strain on your arteries and on your heart. Over time, this strain can cause the arteries to become to become thicker and less flexible, or to become weaker.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does cuff size affect blood pressure readings?" : {
    "question" : "Does cuff size affect blood pressure readings?",
    "answer" : "Using a blood pressure cuff that's too large or too small can give you inaccurate blood pressure readings. Your doctor's office should have several sizes of cuffs to ensure an accurate blood pressure reading.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What should be the sixe of cuff for accurate measurement of blood pressure??" : {
    "question" : "What should be the sixe of cuff for accurate measurement of blood pressure??",
    "answer" : "when you measure your blood pressure at home, it's important to use the proper size cuff. The inflatable part of the blood pressure cuff should cover about 80 percent of the circumference of your upper arm. The cuff should cover two-thirds of the distance from your elbow to your shoulder.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 35 yr male and hypertensive does high blood pressure affect my sex life??" : {
    "question" : "Im 35 yr male and hypertensive does high blood pressure affect my sex life??",
    "answer" : "Many people know that high blood pressure contributes to cardiovascular problems and can increase your risk for a heart attack or stroke. But it also can impact your sex life. high blood pressure can lead to erectile dysfunction.High blood pressure can also interfere with ejaculation and reduce sexual desire.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does hypertension lead to erectile dysfunction??" : {
    "question" : "How does hypertension lead to erectile dysfunction??",
    "answer" : "HBP damages arteries.\nThere are two root causes of erectile dysfunction (ED): psychological and medical. High blood pressure is a contributing medical factor that leads to ED. HBP damages the entire vascular system.\nAdequate blood flow is necessary for erection.\nBecause effective blood flow through the arteries and veins is essential to achieve and sustain an erection, any problem that impairs blood flow can cause ED. A number of medical causes associated with erectile dysfunction are problems with the arterial system.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 32 yr male and im facing problems in sexual activity How does hypertension affect sex life??" : {
    "question" : "Im 32 yr male and im facing problems in sexual activity How does hypertension affect sex life??",
    "answer" : "Over time, high blood pressure damages the lining of blood vessels and causes arteries to harden and narrow (atherosclerosis), limiting blood flow. This means less blood is able to flow to the penis.\nFor some men, the decreased blood flow makes it difficult to achieve and maintain erections — often referred to as erectile dysfunction. The problem is fairly common.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 28yr female and hypertensive will high blood pressureaffect my sex life??" : {
    "question" : "Im 28yr female and hypertensive will high blood pressureaffect my sex life??",
    "answer" : "High blood pressure's effect on sexual problems in women isn't well-understood. But it's possible that high blood pressure could affect a woman's sex life.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does hypertension affect sex health females??" : {
    "question" : "How does hypertension affect sex health females??",
    "answer" : "High blood pressure can reduce blood flow to the vagina. For some women, this leads to a decrease in sexual desire or arousal, vaginal dryness, or difficulty achieving orgasm. Improving arousal and lubrication can help.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 30 yr male and hypertensive What hypertension medications cause sex problems in male ??" : {
    "question" : "Im 30 yr male and hypertensive What hypertension medications cause sex problems in male ??",
    "answer" : "High blood pressure medications that can cause sexual dysfunction as a side effect include:\nWater pills (diuretics). Diuretics can decrease forceful blood flow to the penis, making it difficult to achieve an erection. They can also deplete the body of zinc, which is necessary to make the sex hormone testosterone.\nBeta blockers. These medications, especially older generation beta blockers such as propranolol (Inderal, Innopran XL), are commonly associated with sexual dysfunction.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 30 yr male hypertensive on medication how can I reduce the effect of these medication on sex health??" : {
    "question" : "Im 30 yr male hypertensive on medication how can I reduce the effect of these medication on sex health??",
    "answer" : "To reduce the risk of side effects from these medications, including sexual problems, take medications exactly as prescribed. If you still have side effects, talk to your doctor about other possible medications that may have fewer side effects.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Are there any hypertension medications that do not affect sex life ??" : {
    "question" : "Are there any hypertension medications that do not affect sex life ??",
    "answer" : "Some high blood pressure medications are less likely to cause sexual side effects, such as:\nAngiotensin-converting enzyme (ACE) inhibitors\nCalcium channel blockers\nAngiotensin II receptor blockers",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 28 yr male hypertensive im on medications for high blood pressure can I also take medicines for erectile dysfunction??" : {
    "question" : "Im 28 yr male hypertensive im on medications for high blood pressure can I also take medicines for erectile dysfunction??",
    "answer" : "Men considering medications for erectile dysfunction should check with their doctor first. It's usually safe to combine the erectile dysfunction drugs sildenafil (Revatio, Viagra), vardenafil (Levitra, Staxyn) and tadalafil (Adcirca, Cialis) with high blood pressure medications.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 28 yr male hypertensive how can I improve my sex health??" : {
    "question" : "Im 28 yr male hypertensive how can I improve my sex health??",
    "answer" : "By making healthy lifestyle choices, you can lower your blood pressure and potentially improve your sex life. Healthy lifestyle choices include:\nNot smoking or using tobacco\nEating healthy foods\nLimiting alcohol consumption\nReducing the amount of salt in your diet\nLosing extra pounds\nExercising regularly\nOf course, a leaner body can boost your confidence and help you feel more attractive, which could also improve your sex life.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "If I control my high blood pressure with medication, will that help my sexual function?" : {
    "question" : "If I control my high blood pressure with medication, will that help my sexual function?",
    "answer" : "Following your medication plan is crucial for combating high blood pressure. However, certain hypertension drugs – including some beta blockers and diuretics – increase the possibility of erectile dysfunction.\nDon’t despair if your blood pressure medication is affecting you this way. There are solutions and they start with talking to your doctor. It might be as simple as adjusting your medication schedule.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Should I talk to my doctor about sexual function and blood pressure?" : {
    "question" : "Should I talk to my doctor about sexual function and blood pressure?",
    "answer" : "Absolutely. This is a normal part of health and should be discussed freely.Erectile dysfunction should be discussed as openly – and managed just like any other outcome of vascular disease. If you know that healthier blood pressure means better sexual function, that’s a great reason to follow your treatment and change your lifestyle.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Is sex dangerous if you have high blood pressure?" : {
    "question" : "Is sex dangerous if you have high blood pressure?",
    "answer" : "Having high blood pressure should not stop you having sex. Although some old wives' tales would have you believe that sex can bring on a stroke or heart attack, it is rare in the real world. Sex does raise your blood pressure, but only briefly and not to very high levels.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "My doctor took mutiple blood pressure reading when I visited him why??" : {
    "question" : "My doctor took mutiple blood pressure reading when I visited him why??",
    "answer" : "Doctor may check your blood pressure several times with the same, appropriately sized, cuff in the same arm. Averaging multiple readings taken during the same visit should give your \"true\" blood pressure at that point in time.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "When I measure my blood pressure at home, I've noticed that the reading is always higher in one arm. Should I be concerned?" : {
    "question" : "When I measure my blood pressure at home, I've noticed that the reading is always higher in one arm. Should I be concerned?",
    "answer" : "Generally, a small difference in blood pressure readings between arms isn't a health concern. However, a difference of more than 10 millimeters of mercury (mm Hg) for either your systolic pressure (top number) or diastolic pressure (bottom number) may be a sign of an underlying problem",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "I have difference in blood pressure in both arms what could be reason??" : {
    "question" : "I have difference in blood pressure in both arms what could be reason??",
    "answer" : "A large difference in blood pressure measurement between your arms could signal a health problem, such as:\nBlocked arteries in your arms (peripheral artery disease)\nKidney disease\nDiabetes\nHeart defects",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "I have difference in blood pressure in both arms how difference is normal ??" : {
    "question" : "I have difference in blood pressure in both arms how difference is normal ??",
    "answer" : "a difference of more than 10 millimeters of mercury (mm Hg) for either your systolic pressure (top number) or diastolic pressure (bottom number) may be a sign of an underlying problem A difference of 10 to 15 mm Hg for systolic pressure that shows up repeatedly is a risk factor for vascular disease and for a greater risk of developing cardiovascular disease and related complications during the next 10 years.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im using water pill (diuretics) for hypertension does that cause arthritis(Joint pain)??" : {
    "question" : "Im using water pill (diuretics) for hypertension does that cause arthritis(Joint pain)??",
    "answer" : "Yes. Diuretics can increase your risk of developing gout, a type of arthritis caused by the deposit of uric acid crystals in a joint.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does diuretics cause joint pains??" : {
    "question" : "How does diuretics cause joint pains??",
    "answer" : "diuretics make you urinate more, which reduces the amount of fluid in your body. But the remaining fluid is more concentrated, which can increase the risk that you'll develop the crystals that cause gout. Some types of diuretics also reduce the kidneys' excretion of urate, a component of uric acid.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What can I do to avoid developing joint pains (gout ,arthritis) after using diuretics??" : {
    "question" : "What can I do to avoid developing joint pains (gout ,arthritis) after using diuretics??",
    "answer" : "There are many other types of blood pressure medications that don't increase your risk of gout. Also, many of the measures you take to reduce blood pressure have the added benefit of lowering uric acid. These measures include:\nEating a healthy diet, with an emphasis on fruits, vegetables and whole grains and reduced servings of meat and whole-fat dairy products\nDrinking little to no alcohol\nLosing weight and maintaining a healthy weight based on your body mass index",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How accurate are the blood pressure machines in grocery stores and drugstores?" : {
    "question" : "How accurate are the blood pressure machines in grocery stores and drugstores?",
    "answer" : "Public blood pressure machines, such as those found in pharmacies, may provide helpful information about your blood pressure, but they may have some limitations. The accuracy of these machines depends on several factors, such as a correct cuff size and proper use of the machines. Ask your doctor for advice on using public blood pressure machines.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How accurate are wrist blood pressure monitors?" : {
    "question" : "How accurate are wrist blood pressure monitors?",
    "answer" : "Wrist blood pressure monitors can be accurate if used exactly as directed. However, according to the American Heart Association, it's best to use a home blood pressure monitor that measures blood pressure in your upper arm. Devices for the upper arm are also easier to check for accuracy than are wrist monitors.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Are there any precautions to take when using wrist blood pressure moniters??" : {
    "question" : "Are there any precautions to take when using wrist blood pressure moniters??",
    "answer" : "Wrist blood pressure monitors are extremely sensitive to body position. To get an accurate reading when taking your blood pressure with a wrist monitor, your arm and wrist must be at heart level.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the limitations for wrist blood pressure moniters??" : {
    "question" : "What are the limitations for wrist blood pressure moniters??",
    "answer" : "Some people can't have their blood pressure measured at the upper arm because they have a very large arm or find blood pressure measurements painful. In these cases, measuring blood pressure at the wrist is acceptable.Even then, blood pressure measurements taken at the wrist are usually higher and less accurate than those taken at your upper arm. That's because the wrist arteries are narrower and not as deep under your skin as those of the upper arm.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Ive heard that infrared saunas are good for hypertension is that true??" : {
    "question" : "Ive heard that infrared saunas are good for hypertension is that true??",
    "answer" : "Several studies have looked at using infrared saunas in the treatment of chronic health problems, such as high blood pressure, congestive heart failure and rheumatoid arthritis, and found some evidence of benefit. However, larger and more-rigorous studies are needed to confirm these results.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can L-arginine supplements lower blood pressure?" : {
    "question" : "Can L-arginine supplements lower blood pressure?",
    "answer" : "Studies on L-arginine have had mixed results. The most recent research suggests that L-arginine may lower blood pressure. However, larger studies need to be done to confirm that L-arginine supplements can reduce blood pressure before experts can recommend everyday use of these supplements.\nYour body usually makes all the L-arginine it needs. Taking a supplement is rarely necessary and may be of benefit only to people who have a deficiency or an underlying health condition, such as diabetes.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can anxiety cause high blood pressure?" : {
    "question" : "Can anxiety cause high blood pressure?",
    "answer" : "Anxiety doesn't cause long-term high blood pressure (hypertension). But episodes of anxiety can cause dramatic, temporary spikes in your blood pressure.\nIf those temporary spikes occur frequently, such as every day, they can cause damage to your blood vessels, heart and kidneys, as can chronic high blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 26 yr male and hypertensive and im using mediciness for reducing anxiety does these have any effect on hypertension??" : {
    "question" : "Im 26 yr male and hypertensive and im using mediciness for reducing anxiety does these have any effect on hypertension??",
    "answer" : "Some medications to treat anxiety and other mental health conditions, such as serotonin and norepinephrine reuptake inhibitors (SNRIs), can also increase your blood pressure.\nIf you have trouble controlling your anxiety or if anxiety interferes with daily activities, talk to your doctor or a mental health provider to find an appropriate treatment.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "My blood pressure measurements at home are always higher than at my doctor's office. Am I doing something wrong?" : {
    "question" : "My blood pressure measurements at home are always higher than at my doctor's office. Am I doing something wrong?",
    "answer" : "Blood pressure measurements that are higher at your home than at your doctor's office could be caused by a decrease in stress at your doctor's office or an error in measuring your blood pressure at home.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is masked Hypertension??" : {
    "question" : "What is masked Hypertension??",
    "answer" : "Having lower blood pressure measurements at the doctor's office than at home is called masked hypertension. Masked hypertension can occur if a calm, quiet environment at your doctor's office is less stressful than the environment at home — leading to a lower blood pressure reading at the doctor's office. Likewise, use of alcohol, caffeine or cigarettes at home can increase blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 25 yr male and my doctor told that I have hypertension doesn't it just affect older people?" : {
    "question" : "Im 25 yr male and my doctor told that I have hypertension doesn't it just affect older people?",
    "answer" : "People can develop high blood pressure at any age, but the amount of people with high blood pressure does increase as we get older. just over one in ten men aged 25-34 years have high blood pressure compared with approximately two in five men aged 35-44 years",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Why have I got high blood pressure?" : {
    "question" : "Why have I got high blood pressure?",
    "answer" : "For many people there is no specific reason why they have high blood pressure (also known as hypertension). It seems to be just one of those things. This type of high blood pressure is called \"essential hypertension\".\nRoughly 90 per cent of people with high blood pressure have essential hypertension. While the exact causes of essential hypertension are unknown, it has been found that family history plays a role, as does our lifestyle, but exactly how is not yet clear.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "My doctor told that I have malignant hypertension does that mean that I have cancer??" : {
    "question" : "My doctor told that I have malignant hypertension does that mean that I have cancer??",
    "answer" : "This form of high blood pressure is very rare, affecting less than 1 per cent of all people with high blood pressure. The most important thing to know is that, although it is called malignant, it has nothing to do with cancer at all. People with malignant hypertension have extremely high blood pressure which is often due to serious disorders of the kidney or blood vessels. Because the pressure is so high, it can cause serious damage to the body's organs and is treated as a medical emergency. If you are diagnosed with malignant hypertension you will be treated in hospital straightaway.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Are men at more risk than female for hypertension??" : {
    "question" : "Are men at more risk than female for hypertension??",
    "answer" : "A higher percentage of men than women have HBP until 45 years of age. From ages 45 to 54 and 55 to 64, the percentages of men and women with HBP are similar. After that, a much higher percentage of women have HBP than men.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is high blood pressure, and what happens in a person's body that makes it dangerous?" : {
    "question" : "What is high blood pressure, and what happens in a person's body that makes it dangerous?",
    "answer" : "Over time, if the force of the blood flow is often high, the tissue that makes up the walls of arteries gets stretched beyond its healthy limit and damage occurs. This creates problems in several ways.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What do the numbers in a blood pressure reading mean?" : {
    "question" : "What do the numbers in a blood pressure reading mean?",
    "answer" : "The two numbers tell you the amount of force pushing against your artery walls when the heart is contracting and when the heart is at rest.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "When does HBP require emergency medical treatment?" : {
    "question" : "When does HBP require emergency medical treatment?",
    "answer" : "High blood pressure often does its damage without creating symptoms, but when blood pressure numbers rise above 180 for the systolic pressure or 110 for the diastolic pressure, you need emergency treatment.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "When is blood pressure too low?" : {
    "question" : "When is blood pressure too low?",
    "answer" : "Although it is possible that low blood pressure can alert you to a problem, it is usually only dangerous if it causes notable signs and symptoms.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is the difference between blood pressure and heart rate?" : {
    "question" : "What is the difference between blood pressure and heart rate?",
    "answer" : "Blood pressure is the amount of force exerted on your arteries when your heart beats, and your heart rate is the number of times per minute your heart beats.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 57 yr old and hypertensive im on diuretics what are the side effects of these drugs" : {
    "question" : "Im 57 yr old and hypertensive im on diuretics what are the side effects of these drugs",
    "answer" : "Diuretics or water pills can cause headache, weakness, low potassium blood levels",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im recently diagnosed hypertensive and on medications prescribes by my doctor and im having continuous cough why is that??" : {
    "question" : "Im recently diagnosed hypertensive and on medications prescribes by my doctor and im having continuous cough why is that??",
    "answer" : "ACE inhibitors a class of anti hypertensive drugs may cause dry and persistent cough, other side effects of these drugs are headache, diarrhea, high potassium blood levels",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yr male and having hypertension my doctor prescribed me angiotensin receptor blockers what are side effects of these drugs??" : {
    "question" : "Im 45 yr male and having hypertension my doctor prescribed me angiotensin receptor blockers what are side effects of these drugs??",
    "answer" : "Angiotensin receptor blockers may cause fatigue, dizziness or fainting, diarrhea, high potassium blood levels",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yr male and having hypertension my doctor prescribed me calcium channel blockers what are side effects of these drugs??" : {
    "question" : "Im 45 yr male and having hypertension my doctor prescribed me calcium channel blockers what are side effects of these drugs??",
    "answer" : "Calcium channel blockers may cause dizziness, heart rhythm problems, ankle swelling",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yr male and having hypertension my doctor prescribed beta blockers what are side effects of these drugs??" : {
    "question" : "Im 45 yr male and having hypertension my doctor prescribed beta blockers what are side effects of these drugs??",
    "answer" : "Beta-blocker may cause dizziness or lightheadedness, decreased sexual ability, drowsiness, low heart rate",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yr male and having hypertension my doctor prescribed alpha blockers what are side effects of these drugs??" : {
    "question" : "Im 45 yr male and having hypertension my doctor prescribed alpha blockers what are side effects of these drugs??",
    "answer" : "Alpha-blockers may cause dizziness, headache, pounding heartbeat, nausea, weakness, weight gain",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are drugs commonly precribed for hypertension??" : {
    "question" : "What are drugs commonly precribed for hypertension??",
    "answer" : "Commonly prescribed high blood pressure drugs include ACE inhibitors, angiotensin receptor blockers, diuretics, beta-blockers, calcium channel blockers, and alpha-blockers (alpha-adrenergic antagonists).",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 38 yr male and I ve been recently diagnosed high BP what are the habits that I must change??" : {
    "question" : "Im 38 yr male and I ve been recently diagnosed high BP what are the habits that I must change??",
    "answer" : "Lifestyle changes for high blood pressure include:\nLosing weight\nQuitting smoking\nEating a healthy diet, such as the DASH diet, which is high in fruits, vegetables, lean protein and whole grains and low in salt and fat\nReducing the amount of salt in your diet\nRegular aerobic exercise (such as brisk walking)\nLimiting alcohol consumption\nSeeking treatment for sleep apnea",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yr old and im having hypertension on regular medication what should be my target blood pressure??" : {
    "question" : "Im 45 yr old and im having hypertension on regular medication what should be my target blood pressure??",
    "answer" : "The target blood pressure for individual age less than 60 is 140/90",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Are There any Drugs that Cause High Blood Pressure?" : {
    "question" : "Are There any Drugs that Cause High Blood Pressure?",
    "answer" : "Some drugs that you take for another condition may increase blood pressure. These include amphetamines, methylphenidate (Concerta, Metadate, Methylin, Ritalin), corticosteroids, hormones (including birth control pills), certain migraine medications, cyclosporine, and erythropoietin.\nAlso, many over-the-counter medications that contain pseudoephedrine and ephedrine (for example, allergy and cold medicines and appetite suppressants) can increase blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "When Should I Call My Doctor About High Blood Pressure?" : {
    "question" : "When Should I Call My Doctor About High Blood Pressure?",
    "answer" : "If you are diagnosed with high blood pressure, it's important to see your doctor on a regular basis. He or she can answer your questions during these visits.\nHowever, there may be other times when you may need to speak to your doctor. For instance:\nIf you aren't responding to the prescribed treatment and your blood pressure is still high\nIf you are having any side effects from the blood pressure medication; if this happens, your doctor may wish to adjust the dosage of the medication or put you on another medication.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 56 yr male and hypertensive my bloodpressure is always on higher side when should I seek medical assistance??" : {
    "question" : "Im 56 yr male and hypertensive my bloodpressure is always on higher side when should I seek medical assistance??",
    "answer" : "If, while monitoring your blood pressure, you get a systolic reading of 180 mm Hg or higher OR a diastolic reading of 110 mm HG or higher, wait a couple of minutes and take it again. If the reading is still at or above that level, you should seek immediate emergency medical treatment for a hypertensive crisis.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is hypertensive urgency ??" : {
    "question" : "What is hypertensive urgency ??",
    "answer" : "Hypertensive urgency is a situation where the blood pressure is severely elevated [180 or higher for your systolic pressure (top number) or 110 or higher for your diastolic pressure (bottom number)], but there is no associated organ damage.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are symptoms of hypertensive urgency??" : {
    "question" : "What are symptoms of hypertensive urgency??",
    "answer" : "Those experiencing hypertensive urgency may or may not experience one or more of these symptoms:\nSevere headache\nShortness of breath \nNosebleeds\nSevere anxiety",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How is hypertensive urgency treated??" : {
    "question" : "How is hypertensive urgency treated??",
    "answer" : "Treatment of hypertensive urgency generally requires readjustment and/or additional dosing of oral medications, but most often does not necessitate hospitalization for rapid blood pressure reduction. A blood pressure reading of 180/110 or greater requires immediate evaluation, because early evaluation of organ function and blood pressure elevations at these levels is critical to determine the appropriate management.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the consequenses of uncontrolled hypertension??" : {
    "question" : "What are the consequenses of uncontrolled hypertension??",
    "answer" : "The consequences of uncontrolled blood pressure in this range can be severe and include\nStroke\nLoss of consciousness\nMemory loss\nHeart attack\nDamage to the eyes and kidneys\nLoss of kidney function\nAortic dissection\nAngina (unstable chest pain)\nPulmonary edema (fluid backup in the lungs)\nEclampsia",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "If I have blood pressure more than 180 should I seek medical attention immediately??" : {
    "question" : "If I have blood pressure more than 180 should I seek medical attention immediately??",
    "answer" : "If you get a blood pressure reading of 180 or higher on top or 110 or higher on the bottom, and are having any symptoms of possible organ damage (chest pain, shortness of breath, back pain, numbness/weakness, change in vision, difficulty speaking) do not wait to see if your pressure comes down on its own. Seek emergency medical assistance immediately.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "If my blood pressure stays around 85/55, do I have a health problem?" : {
    "question" : "If my blood pressure stays around 85/55, do I have a health problem?",
    "answer" : "As long as you are not experiencing symptoms of low blood pressure, there is no need for concern. Most doctors consider chronically low blood pressure dangerous only if it causes noticeable signs and symptoms,",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the symptoms of low blood pressure??" : {
    "question" : "What are the symptoms of low blood pressure??",
    "answer" : "Dizziness or lightheadedness\nFainting (called syncope)\nDehydration and unusual thirst\nLack of concentration\nBlurred vision\nNausea\nCold, clammy, pale skin\nRapid, shallow breathing\nFatigue\nDepression",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does dehydration cause low blood pressure??" : {
    "question" : "Does dehydration cause low blood pressure??",
    "answer" : "Dehydration can sometimes cause blood pressure to drop. However, dehydration does not automatically signal low blood pressure. Fever, vomiting, severe diarrhea, overuse of diuretics and strenuous exercise can all lead to dehydration, a potentially serious condition in which your body loses more water than you take in. Even mild dehydration (a loss of as little as 1 percent to 2 percent of body weight), can cause weakness, dizziness and fatigue",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the reasons for low BP??" : {
    "question" : "What are the reasons for low BP??",
    "answer" : "Prolonged bed rest\nPregnancy\nDecreases in blood volume\nCertain medications\nHeart problems\nEndocrine problems\nSevere infection (septic shock)\nAllergic reaction (anaphylaxis) \nNeurally mediated hypotension\nNutritional deficiencies",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does Pregnancy lead to hypotension??" : {
    "question" : "Does Pregnancy lead to hypotension??",
    "answer" : "During the first 24 weeks of pregnancy, it's common for blood pressure to drop.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does decrease in blood volume lead to hypotension??" : {
    "question" : "Does decrease in blood volume lead to hypotension??",
    "answer" : "A decrease in blood volume can also cause blood pressure to drop. A significant loss of blood from major trauma, dehydration or severe internal bleeding reduces blood volume, leading to a severe drop in blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does any drugs cause hypotension??" : {
    "question" : "Does any drugs cause hypotension??",
    "answer" : "A number of drugs can cause low blood pressure, including diuretics and other drugs that treat hypertension; heart medications such as beta blockers; drugs for Parkinson's disease; tricyclic antidepressants; erectile dysfunction drugs, particularly in combination with nitroglycerine; narcotics and alcohol. Other prescription and over-the-counter drugs may cause low blood pressure when taken in combination with HBP medications.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does having any heart diseases lead to hypotension??" : {
    "question" : "Does having any heart diseases lead to hypotension??",
    "answer" : "Among the heart conditions that can lead to low blood pressure are an abnormally low heart rate (bradycardia), problems with heart valves, heart attack and heart failure. Your heart may not be able to circulate enough blood to meet your body's needs.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "does harmone related diseases lead to hypotension??" : {
    "question" : "does harmone related diseases lead to hypotension??",
    "answer" : "Such problems include complications with hormone-producing glands in the body's endocrine systems; specifically, an under-active thyroid (hypothyroidism), parathyroid disease, adrenal insufficiency (Addison's disease), low blood sugar and, in some cases, diabetes.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does infections lead to hypotension??" : {
    "question" : "Does infections lead to hypotension??",
    "answer" : "Septic shock can occur when bacteria leave the original site of an infection (most often in the lungs, abdomen or urinary tract) and enter the bloodstream. The bacteria then produce toxins that affect blood vessels, leading to a profound and life-threatening decline in blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does allergies lead to hypotension ??" : {
    "question" : "Does allergies lead to hypotension ??",
    "answer" : "Anaphylactic shock is a sometimes-fatal allergic reaction that can occur in people who are highly sensitive to drugs such as penicillin, to certain foods such as peanuts, or to bee or wasp stings. This type of shock is characterized by breathing problems, hives, itching, a swollen throat and a sudden, dramatic fall in blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "I feel dizzy when I stand for long time why is that??" : {
    "question" : "I feel dizzy when I stand for long time why is that??",
    "answer" : "Neurally mediated hypotension Unlike orthostatic hypotension, this disorder causes blood pressure to drop after standing for long periods, leading to symptoms such as dizziness, nausea and fainting. This condition primarily affects young people and occurs because of a miscommunication between the heart and the brain.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does vitamin deficiency lead to hypotension??" : {
    "question" : "Does vitamin deficiency lead to hypotension??",
    "answer" : "A lack of the essential vitamins B-12 and folic acid can cause anemia, which in turn can lead to low blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is postural (orthostatic) hypotension ?" : {
    "question" : "What is postural (orthostatic) hypotension ?",
    "answer" : "This occurs for some people when standing from a sitting or prone position. Their blood pressure drops rapidly, causing dizziness, lightheadedness, blurred vision and/or even fainting. Causes can include dehydration, prolonged bed rest, diabetes, heart problems and excessive heat. Medications like diuretics, beta-blockers, calcium channel blockers, ACE inhibitors, antipsychotics, antidepressants and drugs for Parkinson's disease can also cause this condition. In some cases, sitting for long periods of time with legs crossed or squatting can be the cause.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "When to see your healthcare professional if I have low blood pressure??" : {
    "question" : "When to see your healthcare professional if I have low blood pressure??",
    "answer" : "If you experience any dizziness or lightheadedness, it's a good idea to consult with your healthcare provider. If you have gotten dehydrated, have low blood sugar or have spent too much time in the sun or a hot tub, it is more important to recognize how quickly your blood pressure drops than how low it drops. Keep a record of your symptoms and your activities at the time your symptoms occurred",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What if I notice a sudden decline in my blood pressure?" : {
    "question" : "What if I notice a sudden decline in my blood pressure?",
    "answer" : "A single lower-than-normal reading is not cause for alarm if you are not experiencing any other symptoms or problems. However, a sudden drop in blood pressure --- even a change of just 20 mm Hg --- can cause dizziness or fainting. Sometimes a rapid decrease in blood pressure can indicate an underlying problem such as:\nUncontrolled bleeding\nSevere infections\nAllergic reaction\nPostural (orthostatic) hypotension",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does high blood pressure cause a stroke?" : {
    "question" : "How does high blood pressure cause a stroke?",
    "answer" : "HBP damages arteries so they burst or clog more easily.\nHBP can damage arteries throughout the body. Weakened arteries in the brain put you at much higher risk for stroke.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is a stroke" : {
    "question" : "What is a stroke",
    "answer" : "Stroke is a disease that affects the blood vessels that supply blood to the brain.\nA stroke occurs when a blood vessel to the brain is either blocked by a clot (ischemic stroke) or bursts (hemorrhagic stroke). When that happens, part of the brain is no longer getting the blood and oxygen it needs, so it starts to die. Your brain controls your movement and thoughts, so a stroke doesn't only hurt your brain. It also hurts the brain's ability to think and control body functions. Strokes can affect language, memory and vision as well as cause paralysis and other health issues.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does High blood pressure cause aneurysms?" : {
    "question" : "How does High blood pressure cause aneurysms?",
    "answer" : "High blood pressure damages the arteries and can create weak places that rupture easily or thin spots that fill up with blood and balloon out from the artery wall (called an aneurysm). Chronic HBP or aging blood vessels are the main causes of this type of stroke.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What do blood pressure and the rhythm of your heart have to do with stroke risk?" : {
    "question" : "What do blood pressure and the rhythm of your heart have to do with stroke risk?",
    "answer" : "About three out of four people who have a stroke for the first time have high blood pressure. And an irregular atrial heart rhythm — a condition called atrial fibrillation — is present in about one out of five strokes.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does hypertension increase risk for stroke??" : {
    "question" : "Does hypertension increase risk for stroke??",
    "answer" : "Uncontrolled high blood pressure increases a person's stroke risk by four to six times. Over time, hypertension leads to atherosclerosis and hardening of the large arteries. This, in turn, can lead to blockage of small blood vessels in the brain.High blood pressure, also known as hypertension, is the single most important risk factor for stroke. It causes about 50 per cent of ischemic strokes and also increases the risk of hemorrhagic stroke",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 58 yrs hypertensive on treatment .What Should I Do If I Experience Stroke Symptoms?" : {
    "question" : "Im 58 yrs hypertensive on treatment .What Should I Do If I Experience Stroke Symptoms?",
    "answer" : "Seek for immediate medical support .Stroke is a medical emergency. Immediate treatment can save your life or increase your chances of a full recovery.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How hypertension increases your risk of stroke?" : {
    "question" : "How hypertension increases your risk of stroke?",
    "answer" : "The strain hypertension places on all your blood vessels makes them weaken and predisposes them to damage. Your heart also has to work harder to keep your blood circulating.\nOnce your blood vessels weaken they are more likely to block. This can cause an ischemic stroke and hypertension is the most important cause of this type of stroke and also transient ischemic attacks.\nLess often, hypertension is implicated in hemorrhagic strokes when a blood vessel in the brain bursts and blood leaks into the brain.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can low blood pressure cause a stroke?" : {
    "question" : "Can low blood pressure cause a stroke?",
    "answer" : "Low blood pressure may also cause an ischemic stroke, although this is less common. Low blood pressure results in reduced blood flow to the brain. It may be caused by narrowed or diseased arteries, a heart attack, a large loss of blood, or a severe infection.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How do I know im having stroke??" : {
    "question" : "How do I know im having stroke??",
    "answer" : "Sudden numbness or weakness of the face, arm or leg, especially on one side of the body\nSudden confusion, trouble speaking or understanding\nSudden trouble seeing or blurred vision in one or both eyes\nSudden trouble walking, dizziness, loss of balance or coordination\nSudden severe headache with no known cause",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How is risk for having stroke is diagnosed??" : {
    "question" : "How is risk for having stroke is diagnosed??",
    "answer" : "Your doctor may use several tests to determine your risk of stroke, including:\nPhysical examination.\nBlood tests\nComputerized tomography (CT) scan.\nMagnetic resonance imaging (MRI).\nCarotid ultrasound.\nCarotid ultrasound.\nEchocardiogram.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How is Ischemic stroke treated??" : {
    "question" : "How is Ischemic stroke treated??",
    "answer" : "To treat an ischemic stroke, doctors must quickly restore blood flow to your brain.\nEmergency treatment with medications: Therapy with clot-busting drugs must start within 3 hours if they are given into the vein — and the sooner, the better. Quick treatment not only improves your chances of survival but also may reduce complications. \nEmergency procedures. Doctors sometimes treat ischemic strokes with procedures that must be performed as soon as possible, depending on features of the blood clot",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How is hemorrhagic stroke treated??" : {
    "question" : "How is hemorrhagic stroke treated??",
    "answer" : "Emergency measures. If you take warfarin (Coumadin) or anti-platelet drugs such as clopidogrel (Plavix) to prevent blood clots, you may be given drugs or transfusions of blood products to counteract the blood thinners' effects. You may also be given drugs to lower pressure in your brain (intracranial pressure), lower your blood pressure, prevent vasospasm or prevent seizures.\nOnce the bleeding in your brain stops, treatment usually involves supportive medical care while your body absorbs the blood. Healing is similar to what happens while a bad bruise goes away. If the area of bleeding is large, your doctor may perform surgery to remove the blood and relieve pressure on your brain.\nSurgical blood vessel repair. Surgery may be used to repair blood vessel abnormalities associated with hemorrhagic strokes. Your doctor may recommend one of these procedures after a stroke or if an aneurysm or arteriovenous malformation (AVM) or other type of vascular malformation caused your hemorrhagic stroke:",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can a patient recover from stroke??" : {
    "question" : "Can a patient recover from stroke??",
    "answer" : "Following emergency treatment, stroke care focuses on helping you regain your strength, recover as much function as possible and return to independent living. The impact of your stroke depends on the area of the brain involved and the amount of tissue damaged.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does stroke effect body??" : {
    "question" : "How does stroke effect body??",
    "answer" : "If your stroke affected the right side of your brain, your movement and sensation on the left side of your body may be affected. If your stroke damaged the brain tissue on the left side of your brain, your movement and sensation on the right side of your body may be affected. Brain damage to the left side of your brain may cause speech and language disorders.\nIn addition, if you've had a stroke, you may have problems with breathing, swallowing, balancing and vision.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the therapies required for complete treatment after stroke ??" : {
    "question" : "What are the therapies required for complete treatment after stroke ??",
    "answer" : "Every person's stroke recovery is different. Depending on your condition, your treatment team may include:\nSpeech therapy session\nDoctor trained in brain conditions (neurologist)\nRehabilitation doctor (physiatrist)\nNurse\nDietitian\nPhysical therapist\nOccupational therapist\nRecreational therapist\nSpeech therapist\nPsychologist or psychiatrist",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 58 yr hypertensive what are the problems caused by hypertension for brain" : {
    "question" : "Im 58 yr hypertensive what are the problems caused by hypertension for brain",
    "answer" : "But high blood pressure can cause several problems, including:\nTransient ischemic attack\nstroke \ndementia\nmild - cognitive attack",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yr male and hypertensive my doctor told that I had Mini stroke what is that??" : {
    "question" : "Im 45 yr male and hypertensive my doctor told that I had Mini stroke what is that??",
    "answer" : "Transient ischemic attack (TIA). Sometimes called a ministroke, a transient ischemic attack is a brief, temporary disruption of blood supply to your brain.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the reasons for TIA??" : {
    "question" : "What are the reasons for TIA??",
    "answer" : "it's often caused by atherosclerosis or a blood clot — both of which can arise from high blood pressure. A transient ischemic attack is often a warning that you're at risk of a full-blown stroke.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 53 yrold hypertensive and my doctor told I might have TIA What are symptoms of TIA??" : {
    "question" : "Im 53 yrold hypertensive and my doctor told I might have TIA What are symptoms of TIA??",
    "answer" : "Transient ischemic attacks usually last a few minutes. Most signs and symptoms disappear within an hour. The signs and symptoms of TIA resemble those found early in a stroke and may include sudden onset of:\nWeakness, numbness or paralysis in your face, arm or leg, typically on one side of your body\nSlurred or garbled speech or difficulty understanding others\nBlindness in one or both eyes or double vision\nDizziness or loss of balance or coordination",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How is TIA diagnosed??" : {
    "question" : "How is TIA diagnosed??",
    "answer" : "To help determine the cause of your TIA and to assess your risk of stroke, your doctor may rely on the following:\nPhysical examination and tests\nCarotid ultrasonography.\nComputerized tomography (CT) scanning\nComputerized tomography angiography (CTA) scanning.\nMagnetic resonance imaging (MRI).\nMagnetic resonance angiography (MRA).\nEchocardiography.\nEchocardiography.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How is TIA treated??" : {
    "question" : "How is TIA treated??",
    "answer" : "Doctors use several medications to decrease the likelihood of a stroke after a transient ischemic attack. The medication selected depends on the location, cause, severity and type of TIA. Two frequently prescribed types of drugs are:\nAnti-platelets\nAnti -coagulants\nSurgery : If you have a moderately or severely narrowed neck (carotid) artery, your doctor may suggest carotid endarterectomy\nAngioplasty : In selected cases, a procedure called carotid angioplasty, or stenting, is an option.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does hypertension cause dementia ?? What is dementia??" : {
    "question" : "Does hypertension cause dementia ?? What is dementia??",
    "answer" : "Dementia is a brain disease resulting in problems with thinking, speaking, reasoning, memory, vision and movement. There are a number of causes of dementia. One cause, vascular dementia, can result from narrowing and blockage of the arteries that supply blood to the brain. It can also result from strokes caused by an interruption of blood flow to the brain. In either case, high blood pressure may be the culprit.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive from many years and on treatment how do I konow I had developed dementia??" : {
    "question" : "Im hypertensive from many years and on treatment how do I konow I had developed dementia??",
    "answer" : "Dementia symptoms vary depending on the cause, but common signs and symptoms include:Cognitive changesMemory loss Difficulty communicating or finding words Difficulty with complex tasks Difficulty with planning and organizing Difficulty with coordination and motor functions Problems with disorientation, such as getting lost Psychological changesPersonality changesInability to reason Inappropriate behavior Paranoia Agitation Hallucinations",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does dementia affect me??" : {
    "question" : "How does dementia affect me??",
    "answer" : "Dementia can affect the functioning of many body systems and, therefore, the ability to carry out day-to-day tasks. Dementia may lead to several problems, including:\nInadequate nutrition.\nReduced hygiene\nDifficulty taking medications\nDeterioration of emotional health\nDifficulty communicating.\nDelusions and hallucinations.\nSleep difficulties\nPersonal safety challenges",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How is dementia diagnosed??" : {
    "question" : "How is dementia diagnosed??",
    "answer" : "To diagnose your condition, your doctor will review your medical history and symptoms and conduct a physical examination. Doctors may order a number of tests to diagnose dementia and rule out other conditions.\nCognitive and neuropsychological tests\nNeurological evaluation\nBrain scans\nLaboratory tests\nPsychiatric evaluation",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How is dementia treated??" : {
    "question" : "How is dementia treated??",
    "answer" : "Most types of dementia can't be cured. However, doctors will help you manage your symptoms. Treatment of dementia symptoms may help slow or minimize the development of symptoms.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "I ve heard that I would get head ache if I had head ache is that true??" : {
    "question" : "I ve heard that I would get head ache if I had head ache is that true??",
    "answer" : "Hypertension is a ‘silent killer’ which has no real indicators and can strike at any moment. There are no symptoms most of the time. High blood pressure in most cases is established during a visit to the doctor. Hence, you may develop heart and kidney problems without knowing you have high blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Ive heard about DASH diet for controlling hypertension what is that??" : {
    "question" : "Ive heard about DASH diet for controlling hypertension what is that??",
    "answer" : "\"DASH\" stands for \"Dietary Approaches to Stop Hypertension.\" This is the name of a clinical study that tested the effects of nutrients in food on blood pressure. Study results indicated that you can reduce high blood pressure by following an eating plan that emphasizes fruits, vegetables, and fat-free or low-fat milk and milk products, and that is low in saturated fat, cholesterol, total fat, and added sugars.\nThe DASH eating plan also includes whole grains, poultry, fish, and nuts, and has reduced amounts of red meats, sweets, added sugars, and beverages containing sugars.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can I lose weight following the DASH eating plan?" : {
    "question" : "Can I lose weight following the DASH eating plan?",
    "answer" : "Yes, the DASH eating plan can easily be changed to support weight loss, especially since it is rich in lower-calorie foods, such as fruits and vegetables. It doesn't require any special foods or hard-to-follow recipes. It simply calls for a certain number of daily servings from various food groups. The number of servings you need depends on your calorie level.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 38 yr male and hypertensive Does hypertension damage my heart??" : {
    "question" : "Im 38 yr male and hypertensive Does hypertension damage my heart??",
    "answer" : "Your heart pumps blood to your entire body. Uncontrolled high blood pressure can damage your heart in a number of ways, such as:\nCoronary artery diseases\nEnlarged left heart \nHeart failure",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 47 yrs hypertensive how does hypertension lead to coronary artery diseases??" : {
    "question" : "Im 47 yrs hypertensive how does hypertension lead to coronary artery diseases??",
    "answer" : "Coronary artery disease affects the arteries that supply blood to your heart muscle. Arteries narrowed by coronary artery disease don't allow blood to flow freely through your arteries. When blood can't flow freely to your heart, you can experience chest pain, a heart attack or irregular heart rhythms (arrhythmias).",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 55 yr male and hypertensive my doctor told I have enlarged heart because of hypertension what is that??" : {
    "question" : "Im 55 yr male and hypertensive my doctor told I have enlarged heart because of hypertension what is that??",
    "answer" : "High blood pressure forces your heart to work harder than necessary in order to pump blood to the rest of your body. This causes the left ventricle to thicken or stiffen and increase size of heart",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 55 yr male and hypertensive my doctor told I have enlarged heart because of hypertension is that dangerous??" : {
    "question" : "Im 55 yr male and hypertensive my doctor told I have enlarged heart because of hypertension is that dangerous??",
    "answer" : "Enlarged heart limit the ventricle's ability to pump blood to your body. This condition increases your risk of heart attack, heart failure and sudden cardiac death.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does hypertension lead to heart failure??" : {
    "question" : "How does hypertension lead to heart failure??",
    "answer" : "Over time, the strain on your heart caused by high blood pressure can cause your heart muscle to weaken and work less efficiently. Eventually, your overwhelmed heart simply begins to wear out and fail. Damage from heart attacks adds to this problem.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does hypertension damage blood vessels??" : {
    "question" : "Does hypertension damage blood vessels??",
    "answer" : "High blood pressure can damage the cells of your arteries' inner lining. That launches a cascade of events that make artery walls thick and stiff, a disease called arteriosclerosis or hardening of the arteries.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Which blood vessels are affected because of hypertension??" : {
    "question" : "Which blood vessels are affected because of hypertension??",
    "answer" : "Hypertension can affect arteries throughout your body, blocking blood flow to your heart, kidneys, brain, arms and legs.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What happenes if my blood vessels are damaged because of hypertension??" : {
    "question" : "What happenes if my blood vessels are damaged because of hypertension??",
    "answer" : "The damage can cause many problems, including chest pain (angina), heart attack, heart failure, kidney failure, stroke, blocked arteries in your legs or arms (peripheral artery disease), eye damage, and aneurysms.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yr female and having high blood pressure What is aneurysm and how does hypertension cause aneurysm??" : {
    "question" : "Im 45 yr female and having high blood pressure What is aneurysm and how does hypertension cause aneurysm??",
    "answer" : "Over time, the constant pressure of blood moving through a weakened artery can cause a section of its wall to enlarge and form a bulge (aneurysm).",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 60 yr male and hypertensive Is it dangerous to have aneurysms" : {
    "question" : "Im 60 yr male and hypertensive Is it dangerous to have aneurysms",
    "answer" : "An aneurysm can potentially rupture and cause life-threatening internal bleeding. Aneurysms can form in any artery throughout your body, but they're most common in the aorta, your body's largest artery.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does blood pressure have a daily pattern?" : {
    "question" : "Does blood pressure have a daily pattern?",
    "answer" : "Blood pressure has a daily pattern. Blood pressure is normally lower at night while you're sleeping. Your blood pressure starts to rise a few hours before you wake up. Your blood pressure continues to rise during the day, usually peaking in the middle of the afternoon. Then in the late afternoon and evening, your blood pressure begins dropping again.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "I've noticed that my blood pressure is always lower in the morning than at night.why is that??" : {
    "question" : "I've noticed that my blood pressure is always lower in the morning than at night.why is that??",
    "answer" : "Having an abnormal blood pressure pattern, such as high blood pressure during the night or early in the morning, can mean that you have a health problem. Associated conditions include:\nPoorly controlled high blood pressure\nObstructive sleep apnea\nKidney disease\nDiabetes\nThyroid problems\nNervous system problems\nCardiovascular disease",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What could be reason for abnormal blood pressure patterns during day and night??" : {
    "question" : "What could be reason for abnormal blood pressure patterns during day and night??",
    "answer" : "Risk factors for developing an abnormal blood pressure pattern include:\nNight-shift work\nTobacco use\nAnxiety\nToo much stress\nTaking blood pressure medications that don't last 24 hours",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What should I do if I have abnormal blood pressure patterns through out day and night ??" : {
    "question" : "What should I do if I have abnormal blood pressure patterns through out day and night ??",
    "answer" : "Your doctor can tell you if an abnormal daily blood pressure pattern may need treatment. He or she may recommend a 24-hour blood pressure monitoring test. The device used for this test measures your blood pressure at regular intervals over a 24-hour period and provides a more accurate picture of blood pressure changes over an average day and night.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does caffeine affect blood pressure?" : {
    "question" : "How does caffeine affect blood pressure?",
    "answer" : "Caffeine can cause a short, but dramatic increase in your blood pressure, even if you don't have high blood pressure. It's unclear what causes this spike in blood pressure. Some researchers believe that caffeine could block a hormone that helps keep your arteries widened. Others think that caffeine causes your adrenal glands to release more adrenaline, which causes your blood pressure to increase.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Will consuming large amounts of coffee increases blood pressure??" : {
    "question" : "Will consuming large amounts of coffee increases blood pressure??",
    "answer" : "Some people who regularly drink caffeinated beverages have a higher average blood pressure than do those who drink none. Others who regularly drink caffeinated beverages develop a tolerance to caffeine. As a result, caffeine doesn't have a long–term effect on their blood pressure. It seems that caffeine has a stronger blood pressure increasing effect in men who are older than 70 or who are overweight.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 38 yrs male and hypertensive how much coffee can I condume per day??" : {
    "question" : "Im 38 yrs male and hypertensive how much coffee can I condume per day??",
    "answer" : "If you have high blood pressure, ask your doctor whether you should limit or stop drinking caffeinated beverages. If you're concerned about caffeine's effect on your blood pressure, try limiting the amount of caffeine you drink to 200 milligrams a day — about the same amount as in two 12–ounce (355–millileter) cups of brewed coffee.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im recently diagnosed hypertension .Should I take any precautions if im taking large amounts of coffee" : {
    "question" : "Im recently diagnosed hypertension .Should I take any precautions if im taking large amounts of coffee",
    "answer" : "avoid caffeine right before activities that naturally increase your blood pressure, such as exercise, weightlifting or hard physical labor.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How do I know if coffee is affecting my blood pressure??" : {
    "question" : "How do I know if coffee is affecting my blood pressure??",
    "answer" : "To see if caffeine might be raising your blood pressure, check your blood pressure within 30 to 120 minutes of drinking a cup of coffee or another caffeinated beverage. If your blood pressure increases by five to 10 points, you may be sensitive to the blood pressure raising effects of caffeine.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Is it true that sleep deprivation can cause high blood pressure?" : {
    "question" : "Is it true that sleep deprivation can cause high blood pressure?",
    "answer" : "Possibly. It's thought that sleeping fewer than six hours a night could be linked to increased blood pressure.\nPeople who sleep five hours or less a night may be at higher risk of developing high blood pressure or worsening already high blood pressure. There's also an increased risk of high blood pressure for people who sleep between five and six hours a night.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does sleep deprivation lead to hypertension??" : {
    "question" : "How does sleep deprivation lead to hypertension??",
    "answer" : "It's thought that sleep helps your blood regulate stress hormones and helps your nervous system remain healthy. Over time, a lack of sleep could hurt your body's ability to regulate stress hormones, leading to high blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive since many years what is the recommended duration of sleep??" : {
    "question" : "Im hypertensive since many years what is the recommended duration of sleep??",
    "answer" : "Sleeping seven to eight hours a night may play a role in the treatment and prevention of high blood pressure. Talk to your doctor for tips on getting better sleep, especially if you have high blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is the reason for high blood pressure if I don’t have enough sleep??" : {
    "question" : "What is the reason for high blood pressure if I don’t have enough sleep??",
    "answer" : "One possible, treatable cause of your lack of sleep contributing to high blood pressure is obstructive sleep apnea — a sleep disorder in which you repeatedly stop and start breathing during sleep.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "will blood pressure raise if im snoring in sleep??" : {
    "question" : "will blood pressure raise if im snoring in sleep??",
    "answer" : "Obstructive sleep apnea may be the cause, and it can increase your risk of high blood pressure, as well as heart problems and other health issues.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What's a hypertensive crisis?" : {
    "question" : "What's a hypertensive crisis?",
    "answer" : "A hypertensive crisis is a severe increase in blood pressure that can lead to a stroke. Extremely high blood pressure — a top number (systolic pressure) of 180 millimeters of mercury (mm Hg) or higher or a bottom number (diastolic pressure) of 120 mm Hg or higher — damages blood vessels. They become inflamed and may leak fluid or blood. As a result, the heart may not be able to pump blood effectively.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the reasons for hypertensive emergencies??" : {
    "question" : "What are the reasons for hypertensive emergencies??",
    "answer" : "Causes of a hypertensive emergency include:\nForgetting to take your blood pressure medication\nStroke\nHeart attack\nHeart failure\nKidney failure\nRupture of your body's main artery (aorta)\nInteraction between medications\nConvulsions during pregnancy (eclampsia)",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the signs for hypertensive emergencies??" : {
    "question" : "What are the signs for hypertensive emergencies??",
    "answer" : "Signs and symptoms of a hypertensive crisis that may be life–threatening may include:\nSevere chest pain\nSevere headache, accompanied by confusion and blurred vision\nNausea and vomiting\nSevere anxiety\nShortness of breath\nSeizures\nUnresponsiveness",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How is hypertension crisis treated??" : {
    "question" : "How is hypertension crisis treated??",
    "answer" : "If you experience a severe increase in your blood pressure, seek immediate medical attention. Treatment for hypertensive crisis may include hospitalization for treatment with oral or intravenous medications.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can cold weather or seasonal changes in weather affect blood pressure?" : {
    "question" : "Can cold weather or seasonal changes in weather affect blood pressure?",
    "answer" : "Blood pressure generally is higher in the winter and lower in the summer. That's because low temperatures cause your blood vessels to narrow — which increases blood pressure because more pressure is needed to force blood through your narrowed veins and arteries.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Why does blood pressure raise in winter??" : {
    "question" : "Why does blood pressure raise in winter??",
    "answer" : "Other seasonal causes of higher blood pressure include weight gain and decreased physical activity in winter. If you have high blood pressure already, continue to monitor your blood pressure",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can weight loss reduce the need for blood pressure medication?" : {
    "question" : "Can weight loss reduce the need for blood pressure medication?",
    "answer" : "If you're overweight, losing even 5 pounds (2.3 kilograms) can lower your blood pressure. As you slim down, it may be possible to reduce your dose of blood pressure medication — or stop taking your blood pressure medication completely. Don't make changes to your blood pressure medication on your own, however. Do so only after getting your doctor's OK.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive sincemany yearsim suffering with cold now can I take over the counter medicines for cold???" : {
    "question" : "Im hypertensive sincemany yearsim suffering with cold now can I take over the counter medicines for cold???",
    "answer" : "Over-the-counter cold remedies aren't off-limits if you have high blood pressure, but it's important to make careful choices.\nAmong over-the-counter cold remedies, decongestants cause the most concern for people who have high blood pressure. Decongestants relieve nasal stuffiness by narrowing blood vessels and reducing swelling in the nose. This narrowing can affect other blood vessels as well, which can increase blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What medicines of cold should I avoid if im hypertensive??" : {
    "question" : "What medicines of cold should I avoid if im hypertensive??",
    "answer" : "To keep your blood pressure in check, avoid over-the-counter decongestants and multisymptom cold remedies that contain decongestants — such as pseudoephedrine, ephedrine, phenylephrine, naphazoline and oxymetazoline.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive and on medication are there any specific cold treating drugs in hypertension??" : {
    "question" : "Im hypertensive and on medication are there any specific cold treating drugs in hypertension??",
    "answer" : "Choose a cold medication designed for people who have high blood pressure. Some cold medications, such as Coricidin HBP, don't contain decongestants. However, these medications may contain other powerful drugs, such as dextromethorphan, that can be dangerous if you take too much. Follow the dosing instructions carefully.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive and on medication What medications can I take if im havng cold??" : {
    "question" : "Im hypertensive and on medication What medications can I take if im havng cold??",
    "answer" : "Take a pain reliever. To relieve a fever, sore throat, headache or body aches, try aspirin or acetaminophen (Tylenol, others).Use saline nasal spray. To relieve nasal congestion, try saline nasal spray. The spray can help flush your sinuses.Soothe your throat. To relieve a sore or scratchy throat, gargle with warm salt water or drink warm water with lemon juice and honey.Drink plenty of fluids. Water, juice, tea and soup can help clear your lungs of phlegm and mucus.Increase the humidity in your home. Use a cool-mist humidifier or vaporizer to moisten the air and ease congestion and coughing.Get plenty of rest. If you're not feeling well, take it easy.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can eating more whole-grain foods help lower my blood pressure?" : {
    "question" : "Can eating more whole-grain foods help lower my blood pressure?",
    "answer" : "It might. Eating more whole-grain foods on a regular basis may help reduce your chance of developing high blood pressure (hypertension).",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 48 yrs male and hypertensive I want to know whether whole grain is beneficial for me what is whol grain" : {
    "question" : "Im 48 yrs male and hypertensive I want to know whether whole grain is beneficial for me what is whol grain",
    "answer" : "Eating more whole-grain foods on a regular basis may help reduce your chance of developing high blood pressure . Whole grains are grains that include the entire grain kernel — they haven't had their bran and germ removed by refining. Whole-grain foods are a rich source of healthy nutrients, including fiber, potassium, magnesium, folate, iron and selenium.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How does whole grain redue hypertension??" : {
    "question" : "How does whole grain redue hypertension??",
    "answer" : "Eating more whole-grain foods offers many health benefits that can work together to help reduce your risk of high blood pressure by:\nAiding in weight control, since whole-grain foods can make you feel full longer\nIncreasing your intake of potassium, which is linked to lower blood pressure\nDecreasing your risk of insulin resistance\nReducing damage to your blood vessels",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can weight loss reduce the need for blood pressure medication?" : {
    "question" : "Can weight loss reduce the need for blood pressure medication?",
    "answer" : "If you're overweight, losing even 5 pounds (2.3 kilograms) can lower your blood pressure. As you slim down, it may be possible to reduce your dose of blood pressure medication — or stop taking your blood pressure medication completely. Don't make changes to your blood pressure medication on your own, however. Do so only after getting your doctor's OK.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "I'm trying to watch the sodium in my diet. Should I be concerned about sodium from water softeners?" : {
    "question" : "I'm trying to watch the sodium in my diet. Should I be concerned about sodium from water softeners?",
    "answer" : "Regular tap water contains very little sodium. The amount of sodium a water softener adds to tap water depends on the \"hardness\" of the water. Hard water contains large amounts of calcium and magnesium. Some water-softening systems replace calcium and magnesium ions with sodium ions. The higher the concentration of calcium and magnesium, the more sodium needed to soften the water. Even so, the added sodium shouldn't be an issue for most healthy adults.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the levels of sodium in drinking water should I be worried about that sodium that I consume in drinking water??" : {
    "question" : "What are the levels of sodium in drinking water should I be worried about that sodium that I consume in drinking water??",
    "answer" : "Levels of sodium in a serving of drinking water are very low in most water systems. In an Environmental Protection Agency survey, the majority of water systems tested had less than 50 mg of sodium per liter. Based on this data, a fourth of a liter (about an 8-ounce glass) of water would contain less than 12.5 mg of sodium, which falls under the Food and Drug Administration's definition of \"very low sodium.\"",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive and on very low sodium diet what about sodium in drinking water??" : {
    "question" : "Im hypertensive and on very low sodium diet what about sodium in drinking water??",
    "answer" : "if you're on a very low-sodium diet and you're concerned about the amount of sodium in softened water, you may want to consider a water-purification system that uses potassium chloride instead. Another option is to soften only the hot water and use unsoftened cold water for drinking and cooking.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is the major source of sodium in regular food intake and how to avoid it ??" : {
    "question" : "What is the major source of sodium in regular food intake and how to avoid it ??",
    "answer" : "it's important to keep in mind that the majority of sodium in an average person's diet comes from table salt and processed foods. Thus, the best way to decrease sodium in your diet is by putting away the saltshaker and cutting back on processed foods.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Is weightlifting safe if I have high blood pressure?" : {
    "question" : "Is weightlifting safe if I have high blood pressure?",
    "answer" : "Maybe. It depends how high your blood pressure is. You shouldn't lift weights if your blood pressure is uncontrolled — meaning it's higher than 180/110 millimeters of mercury (mm Hg). If your blood pressure is higher than 160/100 mm Hg, check with your doctor before starting a weightlifting program to discuss any precautions or special considerations.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does weight lifting increase blood pressure??" : {
    "question" : "Does weight lifting increase blood pressure??",
    "answer" : "Weightlifting can cause a temporary increase in blood pressure. This increase can be dramatic, depending on how much weight you lift. But, weightlifting can also have long-term benefits to blood pressure that outweigh the risk of a temporary spike for most people.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Is weight lifting beneficial for hypertensives??" : {
    "question" : "Is weight lifting beneficial for hypertensives??",
    "answer" : "Regular exercise, including moderate weightlifting, provides many health benefits, including helping to lower blood pressure in the long term.\nIf you have high blood pressure, talk to your doctor before starting any exercise program. Your doctor can help you develop an exercise program tailored to your needs and medical conditions.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the precautions for weight lifting if im hypertensive???" : {
    "question" : "What are the precautions for weight lifting if im hypertensive???",
    "answer" : "If you have high blood pressure, here are some tips for getting started on a weightlifting program:\nLearn and use proper form when lifting to reduce the risk of injury.\nDon't hold your breath. Holding your breath during exertion can cause dangerous spikes in blood pressure. Instead, breathe easily and continuously during each lift.\nLift lighter weights more times. Heavier weights require more strain, which can cause a greater increase in blood pressure. You can challenge your muscles with lighter weights by increasing the number of repetitions you lift.\nAlternate between upper and lower body exercises to let your muscles rest during exercise.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does drinking alcohol affect your blood pressure?" : {
    "question" : "Does drinking alcohol affect your blood pressure?",
    "answer" : "Drinking too much alcohol can raise blood pressure to unhealthy levels. Having more than three drinks in one sitting temporarily increases your blood pressure, but repeated binge drinking can lead to long-term increases.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yr male and I drink a lot of alchohol I had been recently diagnosed hypertension will blood pressure be normal if I reduce alchohol??" : {
    "question" : "Im 45 yr male and I drink a lot of alchohol I had been recently diagnosed hypertension will blood pressure be normal if I reduce alchohol??",
    "answer" : "Heavy drinkers who cut back to moderate drinking can lower their systolic blood pressure (the top number in a blood pressure reading) by 2 to 4 millimeters of mercury (mm Hg) and their diastolic blood pressure (the bottom number in a blood pressure reading) by 1 to 2 mm Hg.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 52 yr male and have lot of alchohol I had been diagnosed hypertensive should I stop taking alchohol immediately??" : {
    "question" : "Im 52 yr male and have lot of alchohol I had been diagnosed hypertensive should I stop taking alchohol immediately??",
    "answer" : "Heavy drinkers who want to lower blood pressure should slowly reduce how much they drink over one to two weeks. Heavy drinkers who stop suddenly risk developing severe high blood pressure for several days.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "is it recommended to stop taking alchohol immediately as im diagnosed hypertension recently??" : {
    "question" : "is it recommended to stop taking alchohol immediately as im diagnosed hypertension recently??",
    "answer" : "Heavy drinkers who want to lower blood pressure should slowly reduce how much they drink over one to two weeks. Heavy drinkers who stop suddenly risk developing severe high blood pressure for several days.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is the recommened amount of alchohol intake for hypertensives??" : {
    "question" : "What is the recommened amount of alchohol intake for hypertensives??",
    "answer" : "If you have high blood pressure, avoid alcohol or drink alcohol only in moderation. Moderate drinking is generally considered to be:\nTwo drinks a day for men younger than age 65\nOne drink a day for men age 65 and older\nOne drink a day for women of any age\nA drink is 12 ounces (355 milliliters) of beer, 5 ounces (148 milliliters) of wine or 1.5 ounces (44 milliliters) of 80-proof distilled spirits.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Does alchohol has an effect on hypertensive medication??" : {
    "question" : "Does alchohol has an effect on hypertensive medication??",
    "answer" : "Keep in mind that alcohol contains calories and may contribute to unwanted weight gain — a risk factor for high blood pressure. Also, alcohol can interfere with the effectiveness and increase the side effects of some blood pressure medications.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Is there a connection between menopause and high blood pressure?" : {
    "question" : "Is there a connection between menopause and high blood pressure?",
    "answer" : "Blood pressure generally increases after menopause. Some doctors think this increase suggests that the hormonal changes of menopause may play a role in high blood pressure. Others think an increase in body mass index (BMI) in menopausal women may play a greater role than hormonal changes.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Why does blood pressure increase after menopause??" : {
    "question" : "Why does blood pressure increase after menopause??",
    "answer" : "Menopause-related hormonal changes can lead to weight gain and make your blood pressure more reactive to salt in your diet — which, in turn, can lead to higher blood pressure. Some types of hormone therapy (HT) for menopause also may contribute to increases in blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How can I control my blood pressure after menoause??" : {
    "question" : "How can I control my blood pressure after menoause??",
    "answer" : "To control your blood pressure both before and after menopause, focus on a healthy lifestyle:\n\nMaintain a healthy weight.\nEat heart-healthy foods, such as whole grains, fruits and vegetables.\nReduce the amount of processed foods and salt in your diet.\nExercise on most days of the week.\nLimit or avoid alcohol.\nIf you smoke, stop.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can beta blockers cause weight gain?" : {
    "question" : "Can beta blockers cause weight gain?",
    "answer" : "Yes. Weight gain can occur as a side effect of some beta blockers, especially the older ones, such as atenolol (Tenormin) and metoprolol (Lopressor, Toprol-XL). The average weight gain is no more than 4 pounds (about 2 kilograms).",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "My doctor recently prescribed a beta blocker to lower my blood pressure. Now, when I exercise, I have trouble getting my heart rate higher than 135. Is this normal?" : {
    "question" : "My doctor recently prescribed a beta blocker to lower my blood pressure. Now, when I exercise, I have trouble getting my heart rate higher than 135. Is this normal?",
    "answer" : "Beta blockers slow your heart rate, which can prevent the increase in heart rate that typically occurs with exercise. This means that it might not be possible for you to reach your target heart rate — the number of heartbeats per minute you aim for to ensure you're exercising hard enough.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is recommended amount of salt intake for hypertensive patients??" : {
    "question" : "What is recommended amount of salt intake for hypertensive patients??",
    "answer" : "For optimal heart-health, the American Heart Association recommends people aim to eat no more than 1,500 milligrams of sodium per day. That level is associated with a significant reduction in blood pressure, which in turn reduces the risk of heart disease and stroke.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is relation between salt and hypertension??" : {
    "question" : "What is relation between salt and hypertension??",
    "answer" : "Sodium plays a role in regulating fluids and blood pressure in the body. Too much sodium in your system causes your body to retain water, which puts an extra burden on your heart and blood vessels. Reducing the amount of sodium in your diet may help you lower or avoid high blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What is major source of sodium in daily food intake ??" : {
    "question" : "What is major source of sodium in daily food intake ??",
    "answer" : "About 75 percent of dietary sodium comes from processed food; salt added at the table accounts for only about 6 percent.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "When reading food labels to count sodium content,should baking soda be counted towards the total sodium??." : {
    "question" : "When reading food labels to count sodium content,should baking soda be counted towards the total sodium??.",
    "answer" : "When buying prepared foods, always read the nutrition labels for the sodium content. For example, foods with less than 140 mg or 5 percent of the Daily Value (DV) per serving are low in sodium. Watch for the words “soda” (referring to sodium bicarbonate, or baking soda) and “sodium” and the symbol “Na.” These products contain sodium compounds that count toward your daily sodium intake. For instance, 1 teaspoon of baking soda contains 1,000 mg of sodium.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can sea salt be used as substitue for table salt for hypertensives??" : {
    "question" : "Can sea salt be used as substitue for table salt for hypertensives??",
    "answer" : "sea salt is same as table salt – 40 percent sodium – and count the same toward total sodium consumption. Table salt is a combination of the two minerals sodium (Na) and chloride (Cl) -",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are common sodium sources?" : {
    "question" : "What are common sodium sources?",
    "answer" : "Sodium occurs naturally in some foods and is often added during manufacturing. Of course, we also add it during cooking and at the table, too. Naturally occurring sodium is in foods such as celery, beets and milk. Packaged and prepared foods, like canned soups, lunch meats and frozen dinners, often have sodium added during manufacturing. This sodium might be in the form of salt or other forms of sodium (like baking soda) that show up in our food.\nOverall, more than 75 percent of the sodium we eat comes from processed, prepackaged, and restaurant foods",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Why is there so much sodium in the food supply?" : {
    "question" : "Why is there so much sodium in the food supply?",
    "answer" : "Sodium plays many roles in food. Adding flavor is probably its most well-known function. It’s also used as a preservative to keep food safe, or to enhance the color of food or give it a firmer texture. For example, sodium in the form of baking soda (sodium bicarbonate) is used to help bread and other baked goods rise. Even though sodium plays a key role in many foods, more salt is often added than is necessary. The good news is that many food companies and some restaurants are tweaking their recipes to cut the sodium in the foods they make for you. - See more at: http://sodiumbreakup.heart.org/sodium-411/sources-of-sodium/#sthash.iFelz99S.dpuf",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im recently diagnosed hypertensive my doctor told to reduce sodium what should I do??" : {
    "question" : "Im recently diagnosed hypertensive my doctor told to reduce sodium what should I do??",
    "answer" : "Choose packaged and prepared foods carefully.\nPick fresh and frozen poultry that hasn’t been injected with a sodium solution.\nChoose condiments carefully.\nChoose canned vegetables labeled “no salt added” and frozen vegetables without salty sauces.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im recently diagnosed hypertensive my doctor told to reduce sodium what precautions should I take while preparing food??" : {
    "question" : "Im recently diagnosed hypertensive my doctor told to reduce sodium what precautions should I take while preparing food??",
    "answer" : "Use onions, garlic, herbs, spices, citrus juices and vinegars in place of some or all of the salt to add flavor to foods. \n Drain and rinse canned beans (like chickpeas, kidney beans, etc.) and vegetables – this can cut the sodium by up to 40 percent.\nCombine lower-sodium versions of food with regular versions. If you don’t like the taste of lower-sodium foods right now, try combining them in equal parts with a regular version of the same food. You’ll get less salt and probably won’t notice much difference in taste. This works especially well for broths, soups, and tomato-based pasta sauces.\nCook pasta, rice, and hot cereal without salt. You’re likely going to add other flavorful ingredients to these foods, so you won’t miss the salt. Cook by grilling, braising, roasting, searing, and sautéing to bring out the natural flavors in foods – that will reduce the need to add salt.\n Incorporate foods with potassium, like sweet potatoes, potatoes, greens, tomatoes and lower-sodium tomato sauce, white beans, kidney beans, nonfat yogurt, oranges, bananas and cantaloupe. Potassium helps counter the effects of sodium and may help lower your blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Are there any salt substitutes that can be used to cut down sodium from diet for hypertensives??" : {
    "question" : "Are there any salt substitutes that can be used to cut down sodium from diet for hypertensives??",
    "answer" : "There are many salt substitutes on the market for you to try. Some of them replace some or all of the sodium with potassium. Most people can use these products freely, unless you have certain medical conditions (like kidney disease) are taking certain medications that have implications for how much potassium you should eat. Talk with your healthcare professional about whether a salt substitute is right for you.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Are there any blood pressure medicines that are particularly good for younger people?" : {
    "question" : "Are there any blood pressure medicines that are particularly good for younger people?",
    "answer" : "if you are under the age of 55, you should initially take a medicine from a group of medicines called ACE inhibitors. This type of medication appears to be particularly effective in lowering blood pressure for people aged less than 55 years.\nHowever there are two main groups of people who will not be given ACE inhibitors as a first-choice medicine because other groups of medications work better for them:\nIf you are of African or Caribbean descent, whatever your age, you should start treatment with either a calcium-channel blocker or a diuretic. Examples of these medicines are listed in the box below.\nIf you are a woman who may become pregnant, you may be given medicines such as beta-blockers.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Is there a best time to take my blood pressure tablets??" : {
    "question" : "Is there a best time to take my blood pressure tablets??",
    "answer" : "choosing to take your medications at the same time each day is very helpful because most medicines are now designed to work over 24 hours, and taking your medicine at the same time day-in and day-out will give you the best possible blood pressure lowering effect.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "My blood pressure has dropped to a normal level, can I stop taking my medicines?" : {
    "question" : "My blood pressure has dropped to a normal level, can I stop taking my medicines?",
    "answer" : "You are now at a much lower risk of having a heart attack or stroke in the future. But you musn't stop taking your blood pressure medications.\nUnfortunately if you stop taking your medicines, your blood pressure will start to rise again and will soon be as high as it was before you started taking your medicines (if not higher). This increase in blood pressure will increase your risk of developing strokes or heart attacks in the future once again. Lowering your blood pressure and keeping it under control is a lifelong goal.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 48 yr male and hypertensive Are there any other medicines I should avoid taking ?" : {
    "question" : "Im 48 yr male and hypertensive Are there any other medicines I should avoid taking ?",
    "answer" : "There are a few medicines that you may need to avoid or be careful about taking if you are also taking blood pressure medicines or have high blood pressure:\nCold and flu remedies: Medicines and tablets that you can buy over the counter from your pharmacy to ease the symptoms of a cold and unblock your nose can contain medicines that raise your blood pressure. If you are taking blood pressure medicines, it is best to avoid them.\nNSAIDS (painkillers): If you regularly take non steroidal anti-inflammatory drugs (NSAIDs) to control pain, these can make the medicines for your blood pressure less effective. You should discuss with your doctor, nurse or pharmacist whether you can use alternative painkillers or whether you may need to take more medicines to control your blood pressure.\nOral contraceptives: Some oral contraceptives may cause a rise in blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can my contraceptive cause my blood pressure to rise?" : {
    "question" : "Can my contraceptive cause my blood pressure to rise?",
    "answer" : "Some contraceptive pills may cause your blood pressure to rise. In most women, the rise in blood pressure due to the oral contraceptive pill is small, but unpredictable. Progestogen-only pills are thought to have no effect on blood pressure at all.\nMany women with high blood pressure can take the oral contraceptive pill but will need to have their blood pressure closely monitored. If your blood pressure does rise while you are taking the contraceptive pill you may be asked to try a different form of contraception. If you are taking a contraceptive pill and have high blood pressure then if you also smoke or are very overweight this will greatly increase your risk of health problems. It is best to stop smoking and lose some weight if you need to.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How often should I get my blood pressure checked if im not Hypertensive??" : {
    "question" : "How often should I get my blood pressure checked if im not Hypertensive??",
    "answer" : "If you don't have high blood pressure you should get your blood pressure checked at least once every five years. However, as you get older your blood pressure is likely to increase and you should be checked more often, every year is ideal.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How often should I get my blood pressure checked if im not Hypertensive but blood pressure readings are on higher side??" : {
    "question" : "How often should I get my blood pressure checked if im not Hypertensive but blood pressure readings are on higher side??",
    "answer" : "If you have had a reading on the high side of normal (130/85mmHg - 139/89mmHg) then it is best to get your blood pressure checked every year",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How can I keep an eye on my blood pressure?" : {
    "question" : "How can I keep an eye on my blood pressure?",
    "answer" : "A great way to see how your blood pressure is doing is to use a blood pressure monitor regularly at home.\nTaking and monitoring your blood pressure at home can help you to feel more in control of it. It will help you to see how well your medicines are working and how much effect your lifestyle changes have made in lowering your blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im 45 yr hypertensive since 4 yrs How else can I reduce my risk of heart attacks and strokes?" : {
    "question" : "Im 45 yr hypertensive since 4 yrs How else can I reduce my risk of heart attacks and strokes?",
    "answer" : "High blood pressure increases your risk of having a heart attack or a stroke in the future. But there are at least two other factors that can increase our risk of these health problems: smoking and having a high cholesterol level.Giving up smoking and cutting out saturated fats will have a very positive effect on your future health. In fact, making these changes may dramatically reduce your risk of developing heart disease or a stroke in later life.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Am I going to have to give up drinking alcohol because I have high blood pressure?" : {
    "question" : "Am I going to have to give up drinking alcohol because I have high blood pressure?",
    "answer" : "No, you don't have to give up drinking just because you have high blood pressure.\nHowever, drinking excessive amounts of alcohol does raise your blood pressure. Not only will a regular high intake of alcohol increase your blood pressure, but one-off binges can also be harmful. Binge drinking is defined as drinking more than six units in the space of six hours, which can be easy to do.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Am I able to take up physical activity (exercise) to lower my blood pressure?" : {
    "question" : "Am I able to take up physical activity (exercise) to lower my blood pressure?",
    "answer" : "For most people, it is quite safe to start moderate physical activity (or exercise) to lower your blood pressure. Moderate physical activity is described as an activity that allows you to just maintain a conversation while you're doing it and leaves you feeling warm and slightly out of breath at the end. Examples of this type of activity are brisk walking, dancing and cycling.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can I take up aerobic exercise if my blood pressure is too high ??" : {
    "question" : "Can I take up aerobic exercise if my blood pressure is too high ??",
    "answer" : "if your blood pressure is particularly high, you do need to be careful and should ask your doctor first.\n\nAs a rule of thumb, if your blood pressure is:\n180/100mmHg or more you should not be doing vigorous physical activity until your blood pressure has been lowered and controlled with drug treatment\nless than 180/100mmHg - you are likely to be able to start vigorous physical activity, but it is worth talking to your GP before you start, particularly if you have any other medical conditions.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "I am taking tablets for my high blood pressure. Are they likely to affect how active I am?" : {
    "question" : "I am taking tablets for my high blood pressure. Are they likely to affect how active I am?",
    "answer" : "Some blood pressure medicines can make you feel tired and lethargic and you may find being active difficult. If you think that your medicines are making you feel this way, talk to your doctor about changing your medicines.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can I still enjoy restaurant meals and takeaways even though I have high blood pressure?" : {
    "question" : "Can I still enjoy restaurant meals and takeaways even though I have high blood pressure?",
    "answer" : "Unfortunately restaurant meals and takeaways tend to be high in salt and saturated fat and they could undo all your hard work in making lifestyle changes to cut the salt and saturated fats in your diet.\nBut, while kebabs may be off the menu, there is no reason why you can’t enjoy a good meal at a restaurant. You can ask the chef to use less salt in advance by phoning ahead or requesting less salt when ordering. And, at the restaurant itself, the waiter or waitress should be able to tell you which dishes have the lowest salt.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can I still go clubbing, despite my high blood pressure?" : {
    "question" : "Can I still go clubbing, despite my high blood pressure?",
    "answer" : "Yes. Physical activity (exercise) is good for your heart and lungs and will help to lower your blood pressure. But limit your alchohol intake",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Will recreational drugs affect my blood pressure?" : {
    "question" : "Will recreational drugs affect my blood pressure?",
    "answer" : "Some recreational drugs, such as cocaine, ecstasy and amphetamines may cause a dramatic increase in your blood pressure and raise your risk of having a stroke or a heart attack. They are best avoided if you have high blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "I have high blood pressure, can this cause problems with sex?" : {
    "question" : "I have high blood pressure, can this cause problems with sex?",
    "answer" : "High blood pressure, and certain blood pressure medicines, may cause problems with sex. Some men find that they experience impotence (erectile dysfunction) and ejaculation problems. Very rarely, some women may find that sex is painful or uncomfortable or that they have difficulty in achieving an orgasm.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "I am thinking about taking a year out to travel. Will high blood pressure affect my plans?" : {
    "question" : "I am thinking about taking a year out to travel. Will high blood pressure affect my plans?",
    "answer" : "If you plan to be away from home for an extended time then it is important to make sure that your blood pressure is well controlled and stable before you go.\nPreparation is important - make sure you know what medicines you need and have plenty of supplies or know where you will get more.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can I still drive if I have high blood pressure?" : {
    "question" : "Can I still drive if I have high blood pressure?",
    "answer" : "If you have high blood pressure then you should be able to drive a car or a motorcycle for personal use with no problem. However, if your blood pressure medicines cause side-effects (problems) that could interfere with your ability to drive, then you may have to give up driving or find a different medicine. For example, beta-blocker medicines may cause you to feel dizzy or tired and if this happens to you, you may not be able to drive and, with your doctor's help, you will need to find another medicine.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Are my children likely to develop high blood pressure if I have it?" : {
    "question" : "Are my children likely to develop high blood pressure if I have it?",
    "answer" : "High blood pressure does run in families and if you have a parent with high blood pressure then you are more likely to develop it yourself.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive and on medcation is there any way that can avoid my children becoming hypertensive??" : {
    "question" : "Im hypertensive and on medcation is there any way that can avoid my children becoming hypertensive??",
    "answer" : "However, it is not inevitable that your children will develop high blood pressure in later life. By making sure that your children lead a healthy and active life, that they eat lots of fruit and vegetables, eat very little salt and that they are a healthy weight, you can significantly reduce their risks of developing high blood pressure in the future.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Once my high blood pressure has been lowered will I stay on the same treatment for the rest of my life?" : {
    "question" : "Once my high blood pressure has been lowered will I stay on the same treatment for the rest of my life?",
    "answer" : "If your high blood pressure remains under control and you are happy with your treatment, it is likely that you will stay on the same treatment - until circumstances change.\nYou will still need to see your doctor for regular check ups, either every year or every six months. At these check ups your doctor will check your blood pressure and make sure you are still happy with your treatment.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Are there risks to taking blood pressure medicines for a long period of time?" : {
    "question" : "Are there risks to taking blood pressure medicines for a long period of time?",
    "answer" : "There is no evidence at present that shows that taking medicines for high blood pressure over a long period of time is harmful.\nHowever, there is lots of evidence that shows that leaving high blood pressure untreated is very harmful to your future health.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What's the best way to keep my blood pressure down?" : {
    "question" : "What's the best way to keep my blood pressure down?",
    "answer" : "The best way to lower your high blood pressure and then keep the blood pressure down is to be consistent:\\\nMake sure you take your blood pressure medicines as prescribed, and that you don't start to miss days or forget to take them\nKeep up with the healthy food and lifestyle choices and make it a way of life\nFinally, make sure you keep a regular check on your blood pressure, so that if it does creep up you can take action straight away.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the side effects of high blood pressure drugs?" : {
    "question" : "What are the side effects of high blood pressure drugs?",
    "answer" : "As with any medication, high blood pressure drugs have side effects. Among the most common are:\nDiuretics: headache, weakness, joint or muscle pain, low potassium blood levels\nACE inhibitors: dry and persistent cough, headache, diarrhoea, high potassium blood levels\nAngiotensin receptor blockers: fatigue, dizziness or fainting, muscle pain, diarrhoea\nCalcium channel blockers: dizziness, trouble breathing, heart rhythm problems, ankle swelling\nBeta-blockers: dizziness or lightheadedness, reduced sexual ability, drowsiness, low heart rate",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How serious a risk is cholesterol for hypertension?" : {
    "question" : "How serious a risk is cholesterol for hypertension?",
    "answer" : "It has been proven conclusively that high blood pressure is a serious risk for developing arterial disease, and that lowering cholesterol reduces heart attack and stroke. Like high blood pressure, there is often a family history of cardiovascular disease in people with high cholesterol levels. Drugs, known as the 'statins' are now available for lowering high blood cholesterol levels but your doctor will usually start by asking you to reduce your dietary intake of foods that are high in cholesterol. These are mainly dairy produce, shellfish and poultry.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im diagnosed hypertension recently.How serious a risk is smoking for me??" : {
    "question" : "Im diagnosed hypertension recently.How serious a risk is smoking for me??",
    "answer" : "The short answer is - very serious! It is probably as important as high blood pressure. So if you smoke over 20 cigarettes a day and have high blood pressure, you can perhaps as much as halve your risk by giving up cigarettes. If you cannot stop smoking completely, try to reduce down to 10 cigarettes a day.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im over weight should I be worried about high blood pressure??" : {
    "question" : "Im over weight should I be worried about high blood pressure??",
    "answer" : "People who are overweight have higher blood pressures than thin people and reducing weight helps to bring your blood pressure down. In people who are very overweight it becomes difficult to measure blood pressure accurately because of the increased arm circumference.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Im hypertensive how does diabetes effect me???" : {
    "question" : "Im hypertensive how does diabetes effect me???",
    "answer" : "High blood pressure often occurs in patients with diabetes. When this happens it is very important that blood pressure is very well controlled because the damage caused by high blood pressure is accelerated when diabetes is also present. So, if you have diabetes your doctor will be particularly careful about controlling your blood pressure, and, of course, your diabetes also.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How do I know that anti hypertensive tablets that im using are working for me ??" : {
    "question" : "How do I know that anti hypertensive tablets that im using are working for me ??",
    "answer" : "There are four ways in which your doctor can assess the effect of the blood pressure lowering drug you are taking. First, your blood pressure can be measured at return visits to your doctor, but this is not always an accurate indication because of the white coat reaction. Alternatively, you may measure your own blood pressure at home and this gives a broader estimate of blood pressure reduction over time. Ambulatory blood pressure measurement (ABPM) over 24-hours gives the most comprehensive assessment of the efficacy of the drug you are taking, especially if this can be compared with a record taken before treatment was started. ABPM also shows if the drug is being effective over the 24-hour period, and it can detect any excessive lowering of blood pressure. Finally, your doctor can assess the longer-term effect of treatment by showing that abnormalities of the cardiovascular system, such as enlargement of the ventricular pumping chamber of your heart on echocardiography, which were present before treatment, are no longer present after a period of time on treatment.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "What are the tests that will be done if im diagnosed hypertension??" : {
    "question" : "What are the tests that will be done if im diagnosed hypertension??",
    "answer" : "Your doctor will first take your history and examine you. You will be sent for an examination of your urine and blood to exclude kidney disease and diabetes mellitus, and you will have a fasting blood test to determine the level of your cholesterol and other fats in the blood. Your doctor may arrange for you to wear a small device that will record your blood pressure over 24-hours, or you may be asked to measure your blood pressure at home. You will also have an electrocardiograph (ECG or EKG), and possibly echocardiography; these tests give information on the state of your coronary arteries and the size of the pumping chamber of your heart - the left ventricle - which may enlarge to cope with the high blood pressure. If your doctor suspects an underlying cause for your high blood pressure he may refer you for some specialised tests, but this is only necessary in a small number of people with high blood pressure.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "Can stroke and heart attack be prevented if im hypertensive??" : {
    "question" : "Can stroke and heart attack be prevented if im hypertensive??",
    "answer" : "The answer is - YES! The reason doctors want to detect people with high blood pressure is that it now well established that if high blood pressure is brought down to normal the damage to the cardiovascular system is halted and reversed, and stroke and heart attack are prevented, or at least postponed. Other risk factors, such as high cholesterol, smoking and overweight, must be dealt with.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  },
  "How can I remember to take my medications as prescribed?" : {
    "question" : "How can I remember to take my medications as prescribed?",
    "answer" : "Put “sticky” notes in visible places to remind yourself to take your high blood pressure drugs. You can put notes on the refrigerator, on the bathroom mirror, or on the front door.\nPlace your drugs in a weekly pillbox, available at most pharmacies.\nTry to link taking your medication with something else that you do regularly, like brushing your teeth.\nIf you have a smartphone, find out about texting services and applications (apps) that can send reminiders.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Solomon"
  }
};
for (var key in qandasSolomon) {
  count++;
  var qanda = qandasSolomon[key];
  qanda.consultNow = qanda.category.toLowerCase().startsWith('yes');
  qanda.consultDoctorType = qanda.category.split(' ')[1];
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};