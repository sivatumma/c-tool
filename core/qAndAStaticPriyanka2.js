var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasPriyanka = {
  "1" : {
    "itemNumber" : 1,
    "question" : "I am 36 years old man and don’t have high blood pressure so I don’t need to eat less salt, is it correct?",
    "answer" : "No, the risk of disease starts within the healthy range of blood pressure, so most people will benefit from eating less salt. Also blood pressure increases with age, putting us at risk of disease, but with a low salt diet the rise in blood pressure doesn’t occur.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Salt"
  },
  "2" : {
    "itemNumber" : 2,
    "question" : "My spouse's job is highly stressful, in the long run could it lead to high blood pressure?",
    "answer" : "Chronic stress has not been shown to directly cause high blood pressure, but it can lead to unhealthy lifestyle choices that are associated with high blood pressure. While the exact causes of high blood pressure are unknown, contributing factors include being overweight, eating too much sodium (salt), lack of physical activity and drinking too much alcohol. Chronic stress can take a physical toll on you. It can weaken your immune system and cause uncomfortable physical symptoms like headache and stomach problems.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Stress"
  },
  "3" : {
    "itemNumber" : 3,
    "question" : "Is weightlifting safe if I have high blood pressure or should I opt for other exercise program?",
    "answer" : "Maybe. It depends how high your blood pressure is. You shouldn't lift weights if your blood pressure is uncontrolled — meaning it's higher than 180/110 millimeters of mercury (mm Hg). If your blood pressure is higher than 160/100 mm Hg, check with your doctor before starting a weightlifting program to discuss any precautions or special considerations. Weightlifting can cause a temporary increase in blood pressure. This increase can be dramatic, depending on how much weight you lift. But, weightlifting can also have long-term benefits to blood pressure that outweigh the risk of a temporary spike for most people. Regular exercise, including moderate weightlifting, provides many health benefits, including helping to lower blood pressure in the long term. If you have high blood pressure, talk to your doctor before starting any exercise program. Your doctor can help you develop an exercise program tailored to your needs and medical conditions",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Weight Lifting"
  },
  "4" : {
    "itemNumber" : 4,
    "question" : "Is there a connection between menopause and high blood pressure, which women around my age (45 years) should be aware of?",
    "answer" : "Blood pressure generally increases after menopause. Some doctors think this increase suggests that the hormonal changes of menopause may play a role in high blood pressure. Others think an increase in body mass index (BMI) in menopausal women may play a greater role than hormonal changes. Menopause-related hormonal changes can lead to weight gain and make your blood pressure more reactive to salt in your diet — which, in turn, can lead to higher blood pressure. Some types of hormone therapy (HT) for menopause also may contribute to increases in blood pressure",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Menopause"
  },
  "5" : {
    "itemNumber" : 5,
    "question" : "What preventive measures can my mother-in-law take to prevent high blood pressure during menopause?",
    "answer" : "To control your blood pressure both before and after menopause, focus on a healthy lifestyle: •Maintain a healthy weight. •Eat heart-healthy foods, such as whole grains, fruits and vegetables. •Reduce the amount of processed foods and salt in your diet. •Exercise on most days of the week. •Limit or avoid alcohol. •If you smoke, stop. If necessary, your doctor may prescribe medication to help lower your blood pressure.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Menopause"
  },
  "6" : {
    "itemNumber" : 6,
    "question" : "What is pulse pressure? How important is pulse pressure to your overall health?",
    "answer" : "Blood pressure readings are given in two numbers. The top number is the maximum pressure your heart exerts while beating (systolic pressure), and the bottom number is the amount of pressure in your arteries between beats (diastolic pressure). The numeric difference between your systolic and diastolic blood pressure is called your pulse pressure. For example, if your resting blood pressure is 120/80 millimeters of mercury (mm Hg), your pulse pressure is 40 — which is considered a normal and healthy pulse pressure. A high pulse pressure may be a strong predictor of heart problems and, especially for older adults, if your pulse pressure is greater than 60 it is considered a risk factor for cardiovascular disease. Generally, a pulse pressure greater than 40 mm Hg is abnormal. A pulse pressure lower than 40 may mean you have poor heart function, while a higher pulse pressure may mean your heart's valves are leaky (valve regurgitation).",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Pulse Pressure"
  },
  "7" : {
    "itemNumber" : 7,
    "question" : "My BP is high, what causes high pulse pressure? How are pulse pressure and hypertension related?",
    "answer" : "The most important cause of elevated pulse pressure is stiffness of the aorta, the largest artery in the body. The stiffness may be due to high blood pressure or fatty deposits on the walls of the arteries (atherosclerosis). The greater your pulse pressure, the stiffer and more damaged the vessels are thought to be. Other conditions — including severe iron deficiency (anemia) and overactive thyroid (hyperthyroidism) — can increase pulse pressure as well. Treating high blood pressure usually reduces pulse pressure.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Pulse Pressure"
  },
  "8" : {
    "itemNumber" : 8,
    "question" : "I just suffered a mild stroke, could hypertension be the root cause?",
    "answer" : "Yes, high blood pressure (hypertension) is the most important known risk factor for stroke. High blood pressure can cause damage to blood vessel walls, which may eventually lead to a stroke.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Stroke"
  },
  "9" : {
    "itemNumber" : 9,
    "question" : "My mother-in-law a hypertensive seems to be getting more and more forgetful. Could high BP be behind it?",
    "answer" : "Yes, uncontrolled high blood pressure may also affect one's ability to think, remember and learn. Trouble with memory or understanding concepts is more common in people with high blood pressure.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Memory"
  },
  "10" : {
    "itemNumber" : 10,
    "question" : "Tomorrow I have an appointment with by family doctor regarding checking my blood pressure. Are there any preparations to be made for the same?",
    "answer" : "If you think you may have high blood pressure, make an appointment with your family doctor or health care provider to have your blood pressure checked. No special preparations are necessary to have your blood pressure checked. You might want to wear a short-sleeved shirt to your appointment so that the blood pressure cuff can fit around your arm properly. You might want to avoid caffeinated food and drinks right before your test. You may want to use the toilet before having your blood pressure measured.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Appointment"
  },
  "11" : {
    "itemNumber" : 11,
    "question" : "My partner is currently on pain killers, should he discuss these medications with the family doctor while being checked for hypertension?",
    "answer" : "Yes, because some medications, such as over-the-counter cold medicines, pain medications, antidepressants, birth control pills and others, can raise your blood pressure, it might be a good idea to bring a list of medications and supplements you take to your doctor's appointment. Don't stop taking any prescription medications that you think may affect your blood pressure without your doctor's advice.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Appointment"
  },
  "12" : {
    "itemNumber" : 12,
    "question" : "My best friend has been detected for Stage 2 hypertension, what does this mean?",
    "answer" : "Blood pressure measurements fall into four general categories: •Normal blood pressure. Your blood pressure is normal if it's below 120/80 mm Hg. •Prehypertension. Prehypertension is a systolic pressure ranging from 120 to 139 mm Hg or a diastolic pressure ranging from 80 to 89 mm Hg. Prehypertension tends to get worse over time. •Stage 1 hypertension. Stage 1 hypertension is a systolic pressure ranging from 140 to 159 mm Hg or a diastolic pressure ranging from 90 to 99 mm Hg. •Stage 2 hypertension. More severe hypertension, stage 2 hypertension is a systolic pressure of 160 mm Hg or higher or a diastolic pressure of 100 mm Hg or higher.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "13" : {
    "itemNumber" : 13,
    "question" : "My best friend's doctor has not disclosed his hypertension status after the first check. Could there be specific reasons for this?",
    "answer" : "A doctor will likely take two to three blood pressure readings each at three or more separate appointments before diagnosing your best friend with high blood pressure. This is because blood pressure normally varies throughout the day, and sometimes specifically during visits to the doctor, a condition called white coat hypertension. The blood pressure generally should be measured in both arms to determine if there is a difference. It's important to use an appropriate-sized arm cuff. The doctor may ask for recording blood pressure at home and at work to provide additional information.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "14" : {
    "itemNumber" : 14,
    "question" : "Every time I check my blood pressure, it keeps fluctuating. No two readings are the same! Help me figure out if I suffer from hypertension or not.",
    "answer" : "Your doctor may suggest a 24-hour blood pressure monitoring test called ambulatory blood pressure monitoring. The device used for this test measures your blood pressure at regular intervals over a 24-hour period and provides a more accurate picture of blood pressure changes over an average day and night.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "15" : {
    "itemNumber" : 15,
    "question" : "If my blood pressure if confirmed to be on the higher side, what all is my doctor expected to do?",
    "answer" : "If you have any type of high blood pressure, your doctor will review your medical history and conduct a physical examination. Your doctor may also recommend routine tests, such as a urine test (urinalysis), blood tests, a cholesterol test and an electrocardiogram — a test that measures your heart's electrical activity. Your doctor may also recommend additional tests, such as an echocardiogram, to check for more signs of heart disease",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "16" : {
    "itemNumber" : 16,
    "question" : "The blood pressure monitoring machine am planning to buy for my parents is friendly to use. Do they still need to visit a doctor to confirm their status?",
    "answer" : "An important way to check if your blood pressure status, or to diagnose worsening high blood pressure, is to monitor your blood pressure at home. Home blood pressure monitors are widely available and inexpensive, and you don't need a prescription to buy one. Talk to your doctor about how to get started. Home blood pressure monitoring isn't a substitute for visits to your doctor, and home blood pressure monitors may have some limitations.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "17" : {
    "itemNumber" : 17,
    "question" : "My eldest brother is 60+, what should his blood pressure treatment goals be?",
    "answer" : "Blood pressure treatment goals* *Although 120/80 mm Hg or lower is the ideal blood pressure goal, doctors are unsure if you need treatment (medications) to reach that level. Less than150/90 mm Hg If you're a healthy adult age 60 or older Less than140/90 mm Hg If you're a healthy adult younger than age 60 Less than140/90 mm Hg If you have chronic kidney disease, diabetes or coronary artery disease or are at high risk of coronary artery disease If you're age 60 or older, and use of medications produces lower systolic blood pressure (such as less than 140 mm Hg), your medications won't need to be changed unless they cause negative effects to your health or quality of life. Also, people older than 60 commonly have isolated systolic hypertension — when diastolic pressure is normal but systolic pressure is high. The category of medication your doctor prescribes depends on your blood pressure measurements and your other medical problems.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "18" : {
    "itemNumber" : 18,
    "question" : "Most of the elders in my family are on diuretics. Are they the only option for controlling hypertension?",
    "answer" : "Diuretics, sometimes called water pills, are medications that act on the kidneys to help body eliminate sodium and water, reducing blood volume. Thiazide diuretics are often the first, but not the only, choice in high blood pressure medications. Thiazide diuretics include hydrochlorothiazide (Microzide), chlorthalidone and others. Diuretics or calcium channel blockers may work better for blacks and older people than do angiotensin-converting enzyme (ACE) inhibitors alone. A common side effect of diuretics is increased urination.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Diuretics"
  },
  "19" : {
    "itemNumber" : 19,
    "question" : "Prescription for my father-in-law's hypertension includes beta blockers, are they sufficient?",
    "answer" : "Beta blockers reduce the workload on one's heart and open the blood vessels, causing the heart to beat slower and with less force. Beta blockers include acebutolol (Sectral), atenolol (Tenormin) and others. When prescribed alone, beta blockers don't work as well, especially in older adults, but may be effective when combined with other blood pressure medications.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Beta Blockers"
  },
  "20" : {
    "itemNumber" : 20,
    "question" : "After my recent hypertension confirmation report, came across ACE inhibitors. What exactly are these and how could these be beneficial to me?",
    "answer" : "Angiotensin-converting enzyme (ACE) inhibitors include medications — such as lisinopril (Zestril), benazepril (Lotensin), captopril (Capoten) and others, which help relax blood vessels by blocking the formation of a natural chemical that narrows blood vessels. People with chronic kidney disease may benefit from having an ACE inhibitor as one of their medications.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "ACE inhibitors"
  },
  "21" : {
    "itemNumber" : 21,
    "question" : "Besides ACE Inhibitors which medications are helpful for hypertension patients with kidney diseases?",
    "answer" : "Angiotensin II receptor blockers (ARBs) are medications that help relax blood vessels by blocking the action, not the formation, of a natural chemical that narrows blood vessels. ARBs include candesartan (Atacand), losartan (Cozaar) and others. People with chronic kidney disease may benefit from having an ARB as one of their medications.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "ARBs"
  },
  "22" : {
    "itemNumber" : 22,
    "question" : "My partner's hypertension prescription includes calcium channel blockers, how do these help?",
    "answer" : "Calcium channel blockers are medications — including amlodipine (Norvasc), diltiazem (Cardizem, Tiazac, others) and others, which help relax the muscles of your blood vessels. Some slow your heart rate. Calcium channel blockers may work better for older people and blacks than do ACE inhibitors alone.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Calcium Channel Blockers"
  },
  "23" : {
    "itemNumber" : 23,
    "question" : "My hypertension has been found to be resistant type! Does that mean my blood pressure would never go down?",
    "answer" : "If your blood pressure remains stubbornly high despite taking at least three different types of high blood pressure drugs, one of which usually should be a diuretic, you may have resistant hypertension. People who have controlled high blood pressure but are taking four different types of medications at the same time to achieve that control also are considered to have resistant hypertension. The possibility of a secondary cause of the high blood pressure generally should be reconsidered. Having resistant hypertension doesn't mean your blood pressure will never get lower. In fact, if you and your doctor can identify what's behind your persistently high blood pressure, there's a good chance you can meet your goal with the help of treatment that's more effective.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Resistant Hypertension"
  },
  "24" : {
    "itemNumber" : 24,
    "question" : "What's the difference between hypertension and hypotension?",
    "answer" : "Hypertension: refers to the condition of high blood pressure. Hypotension: refers to abnormally low blood pressure.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "25" : {
    "itemNumber" : 25,
    "question" : "My partner has been advised to have DASH diet for his hypertension. What all does it include?",
    "answer" : "A healthy diet, such as the Dietary Approaches to Stop Hypertension (DASH) diet, can go a long way toward lowering blood pressure. The DASH diet calls for a certain number of daily servings from various food groups, including fruits, vegetables, and whole grains. The following steps can also help: eating more fruits, vegetables, and low-fat dairy foods; eating fewer foods that are high in saturated fat and cholesterol, such as fried foods; eating more whole grain products, fish, poultry, and nuts; eating less red meat and fewer sweets; eating foods that are high in magnesium, potassium, and calcium.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "26" : {
    "itemNumber" : 26,
    "question" : "My mother in law is hypertensive yet none of her meals complete without pickles. Please advise if she should continue with this routine.",
    "answer" : "Pickles are low calorie, which is great, but they are loaded with sodium. One medium pickle (about 5 inches long) can have around 570 mg of sodium. That's over 1/3 of her sodium limit (2300 mg) for the day! Try and get her off this habit at the earliest possible.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "27" : {
    "itemNumber" : 27,
    "question" : "Am non-vegetarian and have been detected for high blood pressure recently, are the canned chicken noodle soups for me?",
    "answer" : "Chicken noodle soup is often considered a comfort food, but it is not so comforting to know that there can be up to 880 mg of sodium in a one cup serving.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "28" : {
    "itemNumber" : 28,
    "question" : "Wholesome milk has been traditional breakfast menu at my place. Since both my parents are hypertensive, is it fine for them to continue taking this milk?",
    "answer" : "Dairy is a great source of calcium, but high fat dairy sources, like whole milk, provide more fat than you need. A one cup serving of whole milk provides 8 grams of fat, 5 of which are saturated. Saturated fats are worse for you than other types and has been linked to heart disease. Try using 2% milk, or even better - 1% or skim.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "29" : {
    "itemNumber" : 29,
    "question" : "Will including flaxseeds in my diet help with hypertension?",
    "answer" : "Flaxseed is rich in omega-3 fatty acids, which have been found to lower blood pressure significantly. Flaxseed may protect against atherosclerotic cardiovascular disease by reducing serum cholesterol, improving glucose tolerance and acting as an antioxidant. You can buy many products that contain flaxseed, but a better bet is to buy ground flaxseed or grind it yourself in a coffee grinder and add it to your home cooked meals. The best part about flaxseed is that it can be stirred into virtually any dish, from soups to smoothies to baked goods. Store flaxseed in your freezer for optimum potency.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "30" : {
    "itemNumber" : 30,
    "question" : "I personally find garlic very strongly flavoured, yet it has been suggested to lower my BP, please advise if it really works?",
    "answer" : "This pungent seasoning can do more than just flavor your food and ruin your breath. Garlic has the ability to lower your blood pressure by causing your blood vessels to relax and dilate. This lets blood flow more freely and reduces blood pressure. You can add fresh garlic to a number of your favorite recipes. If the flavor of garlic is just too strong for you, roast it first. And if you simply can’t eat the stuff, you can get garlic in supplement form.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "31" : {
    "itemNumber" : 31,
    "question" : "There are a number of herbal medications that claim to help with hypertension, should I try some of these?",
    "answer" : "Since there’s such a large variety of herbal remedies and so many different medications for blood pressure that are commonly prescribed today, this isn’t a simple question. However, there certainly exists the potential for negative herb-drug interactions and complications. It is best to discuss your specific herbal medications with your prescribing doctor (and vice versa), so that they will be aware of (and monitoring closely for) any potential interactions.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "32" : {
    "itemNumber" : 32,
    "question" : "Being a college student, am heavily into noodles. Will they really harm me in the long run, just wondering as I have a family history of hypertension.",
    "answer" : "Yes, instant noodles are popular among college students, but they are not a healthy meal. One package of noodles may add 14 grams of fat to your day AND 1580 MG of sodium! Interestingly, it is actually the flavor packet that contains most of that sodium.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "33" : {
    "itemNumber" : 33,
    "question" : "I understand that diabetics should avoid sugar but so should the hypertensives too?",
    "answer" : "Foods with extra calories and full of sugar cause you to gain weight. Obesity is a significant determinant for high blood pressure. The extra weight puts surplus strain on the heart and slows down the blood flow.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "34" : {
    "itemNumber" : 34,
    "question" : "Is it true that yoga can help with high blood pressure?",
    "answer" : "Yoga, when performed mindfully, can reduce this type of stress-induced hypertension, while addressing its underlying causes. It pacifies the sympathetic nervous system and slows down the heart, while teaching the muscles and mind to relax deeply. Yoga can be used to complement antihypertensive medicines. It may reduce medicine intake and thereby possibly reduce side effects . It is to be hoped that patients will also experience a higher quality of life if they perform yoga on a regular basis.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "35" : {
    "itemNumber" : 35,
    "question" : "Most of the elders in my neighbourhood park practice pranayam and have suggested me to do the same since my blood pressure rose. Would it help?",
    "answer" : "Underlying causes of hypertension may include excess mental stress and strain. Pranayama can also be extremely beneficial in these cases. Research studies demonstrate that conscious breathing quickly lowers blood pressure. Practicing pranayama while lying down encourages the breath to arise smoothly from a relaxed state, without any force.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "36" : {
    "itemNumber" : 36,
    "question" : "Does yoga help with hypertension in general or are there specific poses that would work better for me?",
    "answer" : "While a general yoga practice has a pacifying effect and can bring the nervous system into balance, some asanas work better than others for actually lowering blood pressure—and simple modifications make others more beneficial. For example, do cooling poses, such as forward bends where the head is supported—to bring a sense of calm to the head, neck, face, and diaphragm. If you are planning to join yoga to keep hypertension under control, make sure that you get trained under a qualified trainer for better results.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "37" : {
    "itemNumber" : 37,
    "question" : "Since am planning on starting with Yoga to control by BP, is there anything to be careful about?",
    "answer" : "Anyone with untreated high blood pressure should avoid unsupported inversions, such as shirshasana (headstand pose) or adho mukha vrikshasana (handstand pose)—or any other pose in which they can feel pressure in the throat or temples, or that cause respiration to become heavy or difficult. Note that Yoga is not the only treatment for Hypertension, Seek doctor’s advice before starting Yoga practices.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "38" : {
    "itemNumber" : 38,
    "question" : "Red meat is a staple in our family, does this increase my risk of high BP?",
    "answer" : "A healthy eating plan should include only a small amount (if any) of saturated or trans-fats. Fatty foods are bad for both the heart and blood vessels. Avoid red meat and fast food along with other fats that include hydrogenated oils.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "39" : {
    "itemNumber" : 39,
    "question" : "",
    "answer" : "",
    "doctorName" : "",
    "subCategory" : ""
  },
  "40" : {
    "itemNumber" : 40,
    "question" : "My HBP now is 164/104 and my regular medication didn't help much what can I do at home to lower it?",
    "answer" : "Yes, stress is well known to increase blood pressure. And there are a few things that you can do to help control it. There are a number of relation methods. They include things like meditation, praying, deep breathing exercises. Also a walk out side. Consulting your doctor is highly recommended to get the situation in control.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "41" : {
    "itemNumber" : 41,
    "question" : "Does my caffeine addiction adversely affect my hypertension in any way?",
    "answer" : "Caffeine can cause a short, but dramatic increase in your blood pressure, even if you don't have high blood pressure. It's unclear what causes this spike in blood pressure. Some researchers believe that caffeine could block a hormone that helps keep your arteries widened.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "42" : {
    "itemNumber" : 42,
    "question" : "How can potassium be added to my diet and help manage the high BP?",
    "answer" : "You must definitely consider boosting potassium intake to lower your BP. Potassium can lessen the effects of sodium on blood pressure. The best source of potassium is food, such as fruits and vegetables, rather than supplements. Talk to your doctor about the potassium level that's best for you.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "43" : {
    "itemNumber" : 43,
    "question" : "Every time I smoke the can sense the blood pressure increasing, is it correct.",
    "answer" : "Each cigarette you smoke increases your blood pressure for many minutes after you finish. Quitting smoking helps your blood pressure return to normal. People who quit smoking, regardless of age, have substantial increases in life expectancy.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "44" : {
    "itemNumber" : 44,
    "question" : "Many friends have suggested that I keep away from steam room to not harm my hypertension further. How true is this, please advise?",
    "answer" : "Steam rooms can have beneficial health effects, including reduced stress, improved circulation and relief of muscle pain. They can help clear your sinuses, and they open your pores and cleanse your skin. People with high blood pressure are generally advised not to use steam rooms, but steam's advantages of relaxation and vascular dilation for people with mild hypertension might outweigh any risks. With the proper precautions, you can enjoy the health benefits of a steam bath.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "45" : {
    "itemNumber" : 45,
    "question" : "Since I have been detected for hypertension during my last visit to the doctor, many have termed it as - white coat syndrome, is there any particular reason for me to believe them?",
    "answer" : "White coat hypertension, more commonly known as white coat syndrome, is a phenomenon in which patients exhibit a blood pressure level above the normal range, in a clinical setting, though they don't exhibit it in other settings. Therefore consult your doctor for the confirmation of your hypertension.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "46" : {
    "itemNumber" : 46,
    "question" : "My spouse's high BP has lead to his kidney damage, how are the two corelated?",
    "answer" : "Damaged kidneys fail to regulate blood pressure. Healthy kidneys produce a hormone to help the body regulate its own blood pressure. Kidney damage and uncontrolled high blood pressure each contribute to a negative spiral. As more arteries become blocked and stop functioning, the kidneys eventually fail. This process can happen over several years, but it can be prevented. Managing blood pressure is an important part of prolonging the health of one's kidneys.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "47" : {
    "itemNumber" : 47,
    "question" : "My partner has been experiencing performance issues ever since he developed hypertension. Are the two connected medically?",
    "answer" : "There are two root causes of erectile dysfunction (ED): psychological and medical. High blood pressure is a contributing medical factor that leads to ED. HBP damages the entire vascular system. Supporting your partner in consultation with the doctor can help improve the situation.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "48" : {
    "itemNumber" : 48,
    "question" : "My mother-in-law has been complaining of vision related issues after she developed high BP. Are eyes at risk because of blood pressure?",
    "answer" : "High blood pressure can place a strain on the blood vessels in the eyes. HBP can cause the blood vessels to either narrow or bleed when they are subjected to too much blood pressure force. Also, the optic nerve may swell, reducing the ability to see well. Cosulting a doctor can help handle her situation.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "49" : {
    "itemNumber" : 49,
    "question" : "Since my in-laws have been hypertensive since years, they have adjusted to vision related issues, but are they in the danger zone for complete loss of vision?",
    "answer" : "Using an opthalmoscope, a healthcare professional can look at the network of tiny capillaries on the retina to evaluate the condition of the blood vessels in the eyes. Managing blood pressure is the only way to treat hypertensive retinopathy. HBP damage is cumulative, so the longer it goes untreated, the higher the likelihood of permanent damage.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "50" : {
    "itemNumber" : 50,
    "question" : "My BP monitor displays the pulse rate as well. What does this number indicate?",
    "answer" : "Moderate physical activity doesn’t usually change the resting pulse much. If you’re very fit, it could change to 40. A less active person might have a heart rate between 60 and 100, that’s because the heart muscle has to work harder to maintain bodily functions, making it higher.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "51" : {
    "itemNumber" : 51,
    "question" : "A concerned about the hypertension father-in-law aged 50. How does this condition affect his life expectancy?",
    "answer" : "At age 50, total life expectancy is about 5 years longer for people with normal BP than for hypertensive people.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "52" : {
    "itemNumber" : 52,
    "question" : "Sometimes I forget to take my regular high BP medication. How dangerous can this be?",
    "answer" : "Don't wait for a serious health event to remind you to take your medicine! Instead, make a plan. If needed, fill a weekly medication dispenser and take your prescriptions at the same time every day, using an alarm if it helps. As you adjust to the new routine, you will see your numbers go down. Remind yourself that by managing your blood pressure, you are lowering your risk of heart attack and peripheral artery disease, stroke and kidney disease. Death rates from these diseases have decreased significantly, thanks in part to earlier and better treatment of HBP.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "53" : {
    "itemNumber" : 53,
    "question" : "There is so much to do while managing high BP - tracking diet, monitoring numbers, exercising regularly, taking medication - all this is new for me. How can I keep tab of all of them together",
    "answer" : "Now a days there are easy-to-use set of online tracking tools for medications, blood pressure, cholesterol, blood glucose, weight and physical activity. Set goals and track your progress each time you enter your levels. Print comprehensive reports to share with your healthcare team. And manage accounts for your loved ones as well as yourself. Else keep a diary or record of all your medical, nutrition and physical activity efforts. When you see your successes written down, it will encourage you to continue your good habits.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "54" : {
    "itemNumber" : 54,
    "question" : "My elderly hypertensive parents sometimes forget to pop their pills and later take them randomly. Is this alright?",
    "answer" : "If they don't take medicine as directed, what could happen? First of all, it may not work. It could also cause side effects that may be mild — or very harmful. Without knowing it, they could counteract one medicine by taking it with another. Medicine can also make them feel sick or dizzy.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "55" : {
    "itemNumber" : 55,
    "question" : "Since my hypertension medication has become a regular feature, do I need to worry about taking other OTC medications?",
    "answer" : "Always read the labels on all over-the-counter (OTC) medications, especially if you have blood pressure of 120/80 mm Hg or greater. Look for warnings to those with high blood pressure and to those who take blood pressure medications. Better yet, if you have high blood pressure and certainly if you are on prescription medication, consult your healthcare professional before taking any over-the-counter medications or supplements.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "56" : {
    "itemNumber" : 56,
    "question" : "Do the magic pills for treating high BP really work?",
    "answer" : "There are no special pills, vitamins or drinks that can substitute for prescriptions and lifestyle modifications. Talk to your healthcare provider before taking any OTC drug or supplement that claims to lower your blood pressure. They may not work as advertised, and they may interfere with other medications.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "57" : {
    "itemNumber" : 57,
    "question" : "In addition to high BP am currently suffering from cold and flu. Can I take the decongestants that I used to take before developing hypertension?",
    "answer" : "People with high blood pressure should be aware that the use of decongestants may raise blood pressure or interfere with the effectiveness of some prescribed blood pressure medications.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "58" : {
    "itemNumber" : 58,
    "question" : "I have a family history of high BP and my weight is surely on the higher side. Regular efforts bring down my weight slightly only. What can be done?",
    "answer" : "Even a small weight loss can reduce blood pressure and/or prevent hypertension in many overweight people (those with a Body Mass Index of 25 or greater). BMI stands for Body Mass Index, a numerical value of your weight in relation to your height. BMIs are good indicators of healthy or unhealthy weights for adult men and women, regardless of body frame size.It is best to consult your doctor, find your BMI and work on managing your weight to prevent high BP.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "59" : {
    "itemNumber" : 59,
    "question" : "My brother is hypertensive and often complains of severe headaches. How are the two related?",
    "answer" : "Very high blood pressure can cause headaches, vision problems, nausea, and vomiting. These symptoms can also be caused by dangerously high blood pressure called malignant high blood pressure. It may also be called a hypertensive crisis or hypertensive emergency. Malignant high blood pressure is a medical emergency.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "60" : {
    "itemNumber" : 60,
    "question" : "I am 38 year old woman, what should be my ideal BP?",
    "answer" : "Depending on your activities, your blood pressure may increase or decrease throughout the day. If you are not acutely ill, are over 18 years of age and are not taking antihypertensive drugs, a blood pressure reading of 119 mm Hg or below systolic and/or 79 mm Hg or below diastolic (119/79) is considered normal.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "61" : {
    "itemNumber" : 61,
    "question" : "I have a family history of diabetes and now have been detected to have high BP. Isnt the likely combination worrisome?",
    "answer" : "High blood pressure (hypertension ) can lead to and make worse many complications of diabetes, including diabetic eye disease and kidney disease. Most people with diabetes develop high blood pressure during their life.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "62" : {
    "itemNumber" : 62,
    "question" : "Since hypertension is a silent disease, how am I supposed to know when it is sets in?",
    "answer" : "High blood pressure is often called a \"silent disease\" because you usually don't know you have it; there may be no outward symptoms or signs, so monitoring your blood pressure is critical. Regularly consult your doctor if you have a family history or are stressed or obese.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "63" : {
    "itemNumber" : 63,
    "question" : "My grandma says my frequent headaches are courtesy my high BP. Is she right?",
    "answer" : "The only way to tell whether you have high blood pressure is to have your blood pressure measured with a blood pressure cuff (sphygmomanometer). Consult your doctor to confirm the status regarding your BP as well as root cause of frequent headaches.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "64" : {
    "itemNumber" : 64,
    "question" : "Since am aging, is it true that my high BP medication would need adjustments?",
    "answer" : "With aging and progression of the process of hardening of the arteries, your systolic blood pressure may creep up with time. A treatment that once worked well may no longer work. Your drug dosage may need to be changed or you may be prescribed a new medication.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : ""
  },
  "65" : {
    "itemNumber" : 65,
    "question" : "",
    "answer" : "",
    "doctorName" : "",
    "subCategory" : ""
  },
  "66" : {
    "itemNumber" : 66,
    "question" : "I am 36 years old man and don’t have high blood pressure so I don’t need to eat less salt, is it correct?",
    "answer" : "No, the risk of disease starts within the healthy range of blood pressure, so most people will benefit from eating less salt. Also blood pressure increases with age, putting us at risk of disease, but with a low salt diet the rise in blood pressure doesn’t occur.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Salt"
  },
  "67" : {
    "itemNumber" : 67,
    "question" : "My spouse's job is highly stressful, in the long run could it lead to high blood pressure?",
    "answer" : "Chronic stress has not been shown to directly cause high blood pressure, but it can lead to unhealthy lifestyle choices that are associated with high blood pressure. While the exact causes of high blood pressure are unknown, contributing factors include being overweight, eating too much sodium (salt), lack of physical activity and drinking too much alcohol. Chronic stress can take a physical toll on you. It can weaken your immune system and cause uncomfortable physical symptoms like headache and stomach problems.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Stress"
  },
  "68" : {
    "itemNumber" : 68,
    "question" : "Is weightlifting safe if I have high blood pressure or should I opt for other exercise program?",
    "answer" : "Maybe. It depends how high your blood pressure is. You shouldn't lift weights if your blood pressure is uncontrolled — meaning it's higher than 180/110 millimeters of mercury (mm Hg). If your blood pressure is higher than 160/100 mm Hg, check with your doctor before starting a weightlifting program to discuss any precautions or special considerations. Weightlifting can cause a temporary increase in blood pressure. This increase can be dramatic, depending on how much weight you lift. But, weightlifting can also have long-term benefits to blood pressure that outweigh the risk of a temporary spike for most people. Regular exercise, including moderate weightlifting, provides many health benefits, including helping to lower blood pressure in the long term. If you have high blood pressure, talk to your doctor before starting any exercise program. Your doctor can help you develop an exercise program tailored to your needs and medical conditions",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Weight Lifting"
  },
  "69" : {
    "itemNumber" : 69,
    "question" : "Is there a connection between menopause and high blood pressure, which women around my age (45 years) should be aware of?",
    "answer" : "Blood pressure generally increases after menopause. Some doctors think this increase suggests that the hormonal changes of menopause may play a role in high blood pressure. Others think an increase in body mass index (BMI) in menopausal women may play a greater role than hormonal changes. Menopause-related hormonal changes can lead to weight gain and make your blood pressure more reactive to salt in your diet — which, in turn, can lead to higher blood pressure. Some types of hormone therapy (HT) for menopause also may contribute to increases in blood pressure",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Menopause"
  },
  "70" : {
    "itemNumber" : 70,
    "question" : "What preventive measures can my mother-in-law take to prevent high blood pressure during menopause?",
    "answer" : "To control your blood pressure both before and after menopause, focus on a healthy lifestyle: •Maintain a healthy weight. •Eat heart-healthy foods, such as whole grains, fruits and vegetables. •Reduce the amount of processed foods and salt in your diet. •Exercise on most days of the week. •Limit or avoid alcohol. •If you smoke, stop. If necessary, your doctor may prescribe medication to help lower your blood pressure.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Menopause"
  },
  "71" : {
    "itemNumber" : 71,
    "question" : "What is pulse pressure? How important is pulse pressure to your overall health?",
    "answer" : "Blood pressure readings are given in two numbers. The top number is the maximum pressure your heart exerts while beating (systolic pressure), and the bottom number is the amount of pressure in your arteries between beats (diastolic pressure). The numeric difference between your systolic and diastolic blood pressure is called your pulse pressure. For example, if your resting blood pressure is 120/80 millimeters of mercury (mm Hg), your pulse pressure is 40 — which is considered a normal and healthy pulse pressure. A high pulse pressure may be a strong predictor of heart problems and, especially for older adults, if your pulse pressure is greater than 60 it is considered a risk factor for cardiovascular disease. Generally, a pulse pressure greater than 40 mm Hg is abnormal. A pulse pressure lower than 40 may mean you have poor heart function, while a higher pulse pressure may mean your heart's valves are leaky (valve regurgitation).",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Pulse Pressure"
  },
  "72" : {
    "itemNumber" : 72,
    "question" : "My BP is high, what causes high pulse pressure? How are pulse pressure and hypertension related?",
    "answer" : "The most important cause of elevated pulse pressure is stiffness of the aorta, the largest artery in the body. The stiffness may be due to high blood pressure or fatty deposits on the walls of the arteries (atherosclerosis). The greater your pulse pressure, the stiffer and more damaged the vessels are thought to be. Other conditions — including severe iron deficiency (anemia) and overactive thyroid (hyperthyroidism) — can increase pulse pressure as well. Treating high blood pressure usually reduces pulse pressure.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Pulse Pressure"
  },
  "73" : {
    "itemNumber" : 73,
    "question" : "I just suffered a mild stroke, could hypertension be the root cause?",
    "answer" : "Yes, high blood pressure (hypertension) is the most important known risk factor for stroke. High blood pressure can cause damage to blood vessel walls, which may eventually lead to a stroke.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Stroke"
  },
  "74" : {
    "itemNumber" : 74,
    "question" : "My mother-in-law a hypertensive seems to be getting more and more forgetful. Could high BP be behind it?",
    "answer" : "Yes, uncontrolled high blood pressure may also affect one's ability to think, remember and learn. Trouble with memory or understanding concepts is more common in people with high blood pressure.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Memory"
  },
  "75" : {
    "itemNumber" : 75,
    "question" : "Tomorrow I have an appointment with by family doctor regarding checking my blood pressure. Are there any preparations to be made for the same?",
    "answer" : "If you think you may have high blood pressure, make an appointment with your family doctor or health care provider to have your blood pressure checked. No special preparations are necessary to have your blood pressure checked. You might want to wear a short-sleeved shirt to your appointment so that the blood pressure cuff can fit around your arm properly. You might want to avoid caffeinated food and drinks right before your test. You may want to use the toilet before having your blood pressure measured.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Appointment"
  },
  "76" : {
    "itemNumber" : 76,
    "question" : "My partner is currently on pain killers, should he discuss these medications with the family doctor while being checked for hypertension?",
    "answer" : "Yes, because some medications, such as over-the-counter cold medicines, pain medications, antidepressants, birth control pills and others, can raise your blood pressure, it might be a good idea to bring a list of medications and supplements you take to your doctor's appointment. Don't stop taking any prescription medications that you think may affect your blood pressure without your doctor's advice.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Appointment"
  },
  "77" : {
    "itemNumber" : 77,
    "question" : "My best friend has been detected for Stage 2 hypertension, what does this mean?",
    "answer" : "Blood pressure measurements fall into four general categories: •Normal blood pressure. Your blood pressure is normal if it's below 120/80 mm Hg. •Prehypertension. Prehypertension is a systolic pressure ranging from 120 to 139 mm Hg or a diastolic pressure ranging from 80 to 89 mm Hg. Prehypertension tends to get worse over time. •Stage 1 hypertension. Stage 1 hypertension is a systolic pressure ranging from 140 to 159 mm Hg or a diastolic pressure ranging from 90 to 99 mm Hg. •Stage 2 hypertension. More severe hypertension, stage 2 hypertension is a systolic pressure of 160 mm Hg or higher or a diastolic pressure of 100 mm Hg or higher.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "78" : {
    "itemNumber" : 78,
    "question" : "My best friend's doctor has not disclosed his hypertension status after the first check. Could there be specific reasons for this?",
    "answer" : "A doctor will likely take two to three blood pressure readings each at three or more separate appointments before diagnosing your best friend with high blood pressure. This is because blood pressure normally varies throughout the day, and sometimes specifically during visits to the doctor, a condition called white coat hypertension. The blood pressure generally should be measured in both arms to determine if there is a difference. It's important to use an appropriate-sized arm cuff. The doctor may ask for recording blood pressure at home and at work to provide additional information.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "79" : {
    "itemNumber" : 79,
    "question" : "Every time I check my blood pressure, it keeps fluctuating. No two readings are the same! Help me figure out if I suffer from hypertension or not.",
    "answer" : "Your doctor may suggest a 24-hour blood pressure monitoring test called ambulatory blood pressure monitoring. The device used for this test measures your blood pressure at regular intervals over a 24-hour period and provides a more accurate picture of blood pressure changes over an average day and night.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "80" : {
    "itemNumber" : 80,
    "question" : "If my blood pressure if confirmed to be on the higher side, what all is my doctor expected to do?",
    "answer" : "If you have any type of high blood pressure, your doctor will review your medical history and conduct a physical examination. Your doctor may also recommend routine tests, such as a urine test (urinalysis), blood tests, a cholesterol test and an electrocardiogram — a test that measures your heart's electrical activity. Your doctor may also recommend additional tests, such as an echocardiogram, to check for more signs of heart disease",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "81" : {
    "itemNumber" : 81,
    "question" : "The blood pressure monitoring machine am planning to buy for my parents is friendly to use. Do they still need to visit a doctor to confirm their status?",
    "answer" : "An important way to check if your blood pressure status, or to diagnose worsening high blood pressure, is to monitor your blood pressure at home. Home blood pressure monitors are widely available and inexpensive, and you don't need a prescription to buy one. Talk to your doctor about how to get started. Home blood pressure monitoring isn't a substitute for visits to your doctor, and home blood pressure monitors may have some limitations.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "82" : {
    "itemNumber" : 82,
    "question" : "My eldest brother is 60+, what should his blood pressure treatment goals be?",
    "answer" : "Blood pressure treatment goals* *Although 120/80 mm Hg or lower is the ideal blood pressure goal, doctors are unsure if you need treatment (medications) to reach that level. Less than150/90 mm Hg If you're a healthy adult age 60 or older Less than140/90 mm Hg If you're a healthy adult younger than age 60 Less than140/90 mm Hg If you have chronic kidney disease, diabetes or coronary artery disease or are at high risk of coronary artery disease If you're age 60 or older, and use of medications produces lower systolic blood pressure (such as less than 140 mm Hg), your medications won't need to be changed unless they cause negative effects to your health or quality of life. Also, people older than 60 commonly have isolated systolic hypertension — when diastolic pressure is normal but systolic pressure is high. The category of medication your doctor prescribes depends on your blood pressure measurements and your other medical problems.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Blood pressure measurements"
  },
  "83" : {
    "itemNumber" : 83,
    "question" : "Most of the elders in my family are on diuretics. Are they the only option for controlling hypertension?",
    "answer" : "Diuretics, sometimes called water pills, are medications that act on the kidneys to help body eliminate sodium and water, reducing blood volume. Thiazide diuretics are often the first, but not the only, choice in high blood pressure medications. Thiazide diuretics include hydrochlorothiazide (Microzide), chlorthalidone and others. Diuretics or calcium channel blockers may work better for blacks and older people than do angiotensin-converting enzyme (ACE) inhibitors alone. A common side effect of diuretics is increased urination.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Diuretics"
  },
  "84" : {
    "itemNumber" : 84,
    "question" : "Prescription for my father-in-law's hypertension includes beta blockers, are they sufficient?",
    "answer" : "Beta blockers reduce the workload on one's heart and open the blood vessels, causing the heart to beat slower and with less force. Beta blockers include acebutolol (Sectral), atenolol (Tenormin) and others. When prescribed alone, beta blockers don't work as well, especially in older adults, but may be effective when combined with other blood pressure medications.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Beta Blockers"
  },
  "85" : {
    "itemNumber" : 85,
    "question" : "After my recent hypertension confirmation report, came across ACE inhibitors. What exactly are these and how could these be beneficial to me?",
    "answer" : "Angiotensin-converting enzyme (ACE) inhibitors include medications — such as lisinopril (Zestril), benazepril (Lotensin), captopril (Capoten) and others, which help relax blood vessels by blocking the formation of a natural chemical that narrows blood vessels. People with chronic kidney disease may benefit from having an ACE inhibitor as one of their medications.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "ACE inhibitors"
  },
  "86" : {
    "itemNumber" : 86,
    "question" : "Besides ACE Inhibitors which medications are helpful for hypertension patients with kidney diseases?",
    "answer" : "Angiotensin II receptor blockers (ARBs) are medications that help relax blood vessels by blocking the action, not the formation, of a natural chemical that narrows blood vessels. ARBs include candesartan (Atacand), losartan (Cozaar) and others. People with chronic kidney disease may benefit from having an ARB as one of their medications.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "ARBs"
  },
  "87" : {
    "itemNumber" : 87,
    "question" : "My partner's hypertension prescription includes calcium channel blockers, how do these help?",
    "answer" : "Calcium channel blockers are medications — including amlodipine (Norvasc), diltiazem (Cardizem, Tiazac, others) and others, which help relax the muscles of your blood vessels. Some slow your heart rate. Calcium channel blockers may work better for older people and blacks than do ACE inhibitors alone.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Calcium Channel Blockers"
  },
  "88" : {
    "itemNumber" : 88,
    "question" : "My hypertension has been found to be resistant type! Does that mean my blood pressure would never go down?",
    "answer" : "If your blood pressure remains stubbornly high despite taking at least three different types of high blood pressure drugs, one of which usually should be a diuretic, you may have resistant hypertension. People who have controlled high blood pressure but are taking four different types of medications at the same time to achieve that control also are considered to have resistant hypertension. The possibility of a secondary cause of the high blood pressure generally should be reconsidered. Having resistant hypertension doesn't mean your blood pressure will never get lower. In fact, if you and your doctor can identify what's behind your persistently high blood pressure, there's a good chance you can meet your goal with the help of treatment that's more effective.",
    "doctorName" : "Dr.Priyanka",
    "subCategory" : "Resistant Hypertension"
  }
};

// for (k in qandasPriyanka){
//   console.log(count++, qandasPriyanka[k]);
// }
// return;

for (var key in qandasPriyanka) {
  count++;
  var qanda = qandasPriyanka[key];
  qanda.consultNow = false;
  // qanda.consultDoctorType = qanda.category.split(' ')[1];
  qanda.category = "Hypertension";
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};