var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasSwathi = {
  "1" : {
    "itemNumber" : 1,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute gastritis",
    "question" : "What are the foods to be avoided?",
    "answer" : "Avoid carbonated and caffeinated beverages, spicy foods, deep fried fatty foods, gas forming vegetables like cauliflower, radish, onions etc.",
    "consultNow" : "Dietician"
  },
  "2" : {
    "itemNumber" : 2,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute gastritis",
    "question" : "I have Gastritis and I cant avoid tea. What should I do?",
    "answer" : "Coffee and regular tea both tend to promote acidity, something that is best avoided when one is suffering from acid reflux. You can use green tea for acid reflexes. Green tea and herbal tea like ginger tea are known for many health benefits. Green tea also has the ability of satisfying one’s cravings for a warm beverage each morning.",
    "consultNow" : "Dietician"
  },
  "3" : {
    "itemNumber" : 3,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute gastritis",
    "question" : "I eat dinner late nights and I am having belching. How can I come out of it?",
    "answer" : "Allow 3 hours time span between food and bed. Give your stomach time to get on with its work and settle down. By the time you lay down most of the acid activity settles down. Sleeping with head slightly elevated also helps to reduce the symptoms. So have early dinner.",
    "consultNow" : "Dietician"
  },
  "4" : {
    "itemNumber" : 4,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute gastritis",
    "question" : "I eat non-vegetarian regularly, does it worse my condition?",
    "answer" : "You can have non vegetarian foods, but should avoid them being cooked in a fried manner and advised to have less spicy.",
    "consultNow" : "Dietician"
  },
  "5" : {
    "itemNumber" : 5,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute gastritis",
    "question" : "Does milk and milk products worse acute gastritis?",
    "answer" : "Dairy products can be taken in their low fat or free fat form. Full fat or cream may trigger the gastric juice secretion. If Lactose intolerance is suspected of causing gas, you can stop drinking milk. Dairy products like yoghurt, curd and probiotic bacteria, strengthen the inner lining of the stomach and intestine.",
    "consultNow" : "Dietician"
  },
  "6" : {
    "itemNumber" : 6,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute gastritis",
    "question" : "Is ginger good for acid reflux?",
    "answer" : "Ginger root for acid reflux is one of the most highly recommended diet alterations that a patient is asked to incorporate into his or her diet. Ginger is extremely beneficial for digestion and ginger tea for acid reflux will help relax the esophagus walls as well as muscles. Both, powdered ginger as well as ginger in its natural form are known to work equally well in the treatment of acid reflux.",
    "consultNow" : "Dietician"
  },
  "7" : {
    "itemNumber" : 7,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute gastritis",
    "question" : "I drink lot of water during meal. Will it effect the condition.",
    "answer" : "Avoid drinking water during meal time as this can worsen acid reflux symptoms. You need an acidic stomach environment in order to digest food. When you drink water with meals, stomach acid is usually dilated, which leads to incomplete digestion of food. Undigested food may stay longer in your stomach, which can increase acid reflux symptoms. It also over fills your stomach and allow stomach contents to leak into the esophagus.",
    "consultNow" : "Dietician"
  },
  "8" : {
    "itemNumber" : 8,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute gastritis",
    "question" : "How often can I visit restaurants?",
    "answer" : "You can visit restaurants frequently, but choose foods cooked in less oil and less spices. Select grilled or toasted foods. Avoid carbonated beverages.",
    "consultNow" : "Dietician"
  },
  "9" : {
    "itemNumber" : 9,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute gastritis",
    "question" : "I have gastritis and how frequently can I take alcohol?",
    "answer" : "Stick to the recommended levels of safe drinking. One peg per day for women and 2 pegs per day for men. Continued alcohol abuse may cause the stomach lining to bleed, leading to the development of other stomach problems such as ulcers.",
    "consultNow" : "Dietician"
  },
  "10" : {
    "itemNumber" : 10,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute gastritis",
    "question" : "Does smoking worse the symptoms?",
    "answer" : "Yes, smoking will make your gastritis worse. Tobacco increases the amount of acid your stomach produces. Smoking weakens the muscle between the esophagus and stomach that keeps stomach contents from flowing back into the esophagus.",
    "consultNow" : "Dietician"
  },
  "11" : {
    "itemNumber" : 11,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute Gastroenteritis (Peds)",
    "question" : "My child is suffering with Gastroenteritis. What dietary care should I take at home?",
    "answer" : "Keep giving your child Liquids to prevent dehydration. Give small amounts of fluids frequently. Avoid soft drinks, sugary drinks. Avoid foods that may upset their stomach or make symptoms worse. Give ORS to your child with a doctor's advice.",
    "consultNow" : "Dietician"
  },
  "12" : {
    "itemNumber" : 12,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute Gastroenteritis (Peds)",
    "question" : "Which drinks should not be given to a child with Gastroenteritis?",
    "answer" : "Coffee and tea, can make your child dehydrated. Undiluted soft drinks, sport drinks contain too much sugar and can make your child's diarrhea worse.",
    "consultNow" : "Dietician"
  },
  "13" : {
    "itemNumber" : 13,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute Gastroenteritis (Peds)",
    "question" : "My child is suffering with Gastroenteritis. How long should I give him liquid diet?",
    "answer" : "If your child is dehydrated or at risk of dehydration, follow a Liquid Diet. If you find your child does not appear to be dehydrated you should continue to feed him as usual either with milk feeds or solids. If your child is on solids provide foods rich in carbohydrates like rice, bread, etc.",
    "consultNow" : "Dietician"
  },
  "14" : {
    "itemNumber" : 14,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute Gastroenteritis (Peds)",
    "question" : "What foods should be avoided by the child?",
    "answer" : "Fatty or sugary foods such as chips, sweets, cakes, chocolates, ice-creams, cream etc. should be avoided.",
    "consultNow" : "Dietician"
  },
  "15" : {
    "itemNumber" : 15,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Acute Gastroenteritis (Peds)",
    "question" : "My 3 months baby is suffering with Gastroenteritis. Should I continue giving him breast feed?",
    "answer" : "Breastfeeding helps to prevent gastroenteritis and also helps to recover. If the infant is suffering with diarrhea or vomiting the fluid loss can be replaced by breast feeding. Breast milk will also continue to provide baby with essential nutrients that are easy for a baby to absorb.",
    "consultNow" : "Dietician"
  },
  "16" : {
    "itemNumber" : 16,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Alcohol Withdrawl",
    "question" : "I recently quit alcohol and I am putting on weight. What would be the reason?",
    "answer" : "Moderate amounts of alcohol enhance energy intake due to the caloric content of the alcohol. You have a tendency to be unhealthy eaten, you do not eat full meals, but you eat snack type meals a lot throughout the awake hours and lack of physical activity helps to put on weight.",
    "consultNow" : "Dietician"
  },
  "17" : {
    "itemNumber" : 17,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Alcohol Withdrawl",
    "question" : "I am dehydrating frequently. What would be the reason?",
    "answer" : "Excess alcohol consumption can cause dehydration in a variety of ways. Firstly, alcohol decreases the body's production of anti-diuretic hormone, which is used by the body to reabsorb water. With less anti-diuretic hormone available, your body loses more fluid than normal through increased urination. Drinking excessive amounts of alcohol can also cause vomiting, which depletes the body of fluids and can cause further dehydration.",
    "consultNow" : "Dietician"
  },
  "18" : {
    "itemNumber" : 18,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Alcohol Withdrawl",
    "question" : "What are the foods to be included to detoxify my body?",
    "answer" : "Includes plenty of fruits and vegetables; whole grains; lean sources of protein, such as poultry, fish, beans and low-fat dairy products.",
    "consultNow" : "Dietician"
  },
  "19" : {
    "itemNumber" : 19,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Alcohol Withdrawl",
    "question" : "What is a safe level of drinking?",
    "answer" : "Male adults can drink up to 2 drinks per day. For women and older people 1 drink per day. 1 drink is equal to approximately 350 ml beer, 150 ml of wine, 45ml of 80-proof distilled spirit.",
    "consultNow" : "Dietician"
  },
  "20" : {
    "itemNumber" : 20,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "I am suffering from Anal fissure,Can you please tell me the diet to be followed in such condition?",
    "answer" : "Drink lots of water to stay hydrated, Eat lots of fiber rich foods Raw vegetables in the form of salads and whole fruits. Eat whole grains like wheat bran, Oat bran and whole grains and pulses.",
    "consultNow" : "Dietician"
  },
  "21" : {
    "itemNumber" : 21,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "Can I have milk in this condition?",
    "answer" : "Milk in Anal fissure is tolerated by few people and in some it is intolerable. It can be taken if tolerable.",
    "consultNow" : "Dietician"
  },
  "22" : {
    "itemNumber" : 22,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "How frequently can I have Non-veg ?",
    "answer" : "Non-veg such as Chicken, Mutton, fish, Pork, etc., contain no fiber and rich amounts of saturated fat and cholesterol. A meat-rich diet leaves less room for fiber. When you are taking Non-veg make sure that you also include fiber rich foods like fresh fruits and vegetables, which helps in easy digestion. Non-veg can be included daily if tolerable or else not more than once a week.",
    "consultNow" : "Dietician"
  },
  "23" : {
    "itemNumber" : 23,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "Can you tell me what kind of foods are to be avoided strictly?",
    "answer" : "Avoid foods like White flour and sugar, Spicy food as they can make the pain and itching worse. High fat snacks like doughnuts, potato chips, cheese products like pizza, fried foods and marbled meats, which can lead to constipation, Processed foods like packaged foods and frozen meals will also lead to constipation. Avoid pickles and fast foods also. In some people Chicken, Fish and milk can irritate and increase pain and itching.",
    "consultNow" : "Dietician"
  },
  "24" : {
    "itemNumber" : 24,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "When I eat Chicken,fish,wheat and Milk I have severe pain while passing stools.Can you tell me why?",
    "answer" : "Few people cannot tolerate over eating of Chicken, Fish, Wheat and Milk through which they face this problem. Its better to avoid if they are not tolerated by them.",
    "consultNow" : "Dietician"
  },
  "25" : {
    "itemNumber" : 25,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "Is there any food item which gives me immediate relief when am suffering from pain?",
    "answer" : "Continuous drinking of coconut water, Buttermilk and lots of water, pain and irritation can be subsided to some extent",
    "consultNow" : "Dietician"
  },
  "26" : {
    "itemNumber" : 26,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "What food should I take to get soft stools?",
    "answer" : "Eat high fiber foods like whole grains, Fresh fruits and Vegetables, drink plenty of water. Maintain regular timings to pass stools.",
    "consultNow" : "Dietician"
  },
  "27" : {
    "itemNumber" : 27,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "How many days should I follow this diet?",
    "answer" : "Anal fissure diet should be followed live long as this problem is faced depending on each an every individual depending on their metabolism and activity, so once you started facing it, you need to follow your diet.",
    "consultNow" : "Dietician"
  },
  "28" : {
    "itemNumber" : 28,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "I stay in hostel and its difficult to follow a proper diet through which am facing this issue ,can you pleas tell me some tips to get rid from this issue?",
    "answer" : "Yes, we see many cases who are facing this issue. When it is not possible for you to follow a proper diet, then eat more of Fresh fruits and vegetables, which are rich sources of fiber and drink plenty of water through which you can control your problem.",
    "consultNow" : "Dietician"
  },
  "29" : {
    "itemNumber" : 29,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "Does eating fast foods and eating at restaurents can lead to this condition?",
    "answer" : "Yes, exactly when you eat out continuously you will definitely face this issue as you will not know the items which are cooked are fresh or not and the quality of the products, in some places they might serve you the stored food. By eating such foods you may definitely face the issue.",
    "consultNow" : "Dietician"
  },
  "30" : {
    "itemNumber" : 30,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anal Fissure (Fissure-In-Ano)",
    "question" : "I heard that drinking lots of water will reduce this issue ,can you please tell me ,how many liters of water should I drink per day?",
    "answer" : "Yes,drinking water definetly solves your problem as it helps in passing soft stools.Drink atleast 3-4 lits of water per day.",
    "consultNow" : "Dietician"
  },
  "31" : {
    "itemNumber" : 31,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anemia (Peds)",
    "question" : "My child is only 2 years but he is having Anemia ,can you tell me why?",
    "answer" : "Usually child, you should start feeding your child iron rich foods after 6 months. it could be because you are not feeding him iron, folic acid, vit B and Vit C rich sources. Include foods like green leafy vegetables, Ragi, all varieties of dahlias, Fruits (Orange, Musambi, Lemon, Amla) and vegetables.",
    "consultNow" : "Dietician"
  },
  "32" : {
    "itemNumber" : 32,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anemia (Peds)",
    "question" : "I heard that in children after 6 months we have to start giving iron rich foods to avoid anemia.Can you suggest me what foods to be given?",
    "answer" : "Include foods like green leafy vegetables, Ragi, all varieties of dahlias, Fruits and vegetables.",
    "consultNow" : "Dietician"
  },
  "33" : {
    "itemNumber" : 33,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anemia (Peds)",
    "question" : "My child is 3 years and his heamoglobin levels are below 10 and doctor asked me to consult a dietician .can you suggest a proper diet for my child.",
    "answer" : "Follow foods which are rich in iron, folic acid, vit B and Vit C rich sources. Include foods like green leafy vegetables, Ragi, all varieties of dahlias, Fruits (Orange, Musambi, Lemon, Amla) and vegetables.",
    "consultNow" : "Dietician"
  },
  "34" : {
    "itemNumber" : 34,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Anemia (Peds)",
    "question" : "How much Iron does a 4 year child need?",
    "answer" : "Infants ages 7-12 months need 11 milligrams of iron a day. Babies younger than 1 year should be given iron-fortified cereal in addition to breast milk or an infant formula supplemented with iron. Toddlers need7 milligrams of iron each day. Kids ages 4-8 years need 10 milligrams while older kids ages 9-13 years need 8 milligrams of iron each day. Adolescent boys should be getting 11 milligrams of iron a day and adolescent girls should be getting 15 milligrams.",
    "consultNow" : "Dietician"
  },
  "35" : {
    "itemNumber" : 35,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Antibiotic Induced Diarrhea",
    "question" : "What is proper diet followed in this condition?",
    "answer" : "Drink plenty of fluids. : Water is best, but fluids with added sodium and potassium (electrolytes) are beneficial as well. Try drinking broth or fruit juice. Avoid beverages that are high in sugar or contain alcohol or caffeine, such as coffee, tea and colas, which may aggravate your symptoms. Choose soft, easy-to-digest foods like Double boiled rice, banana, apple, semolina, porridges and Avoid high-fiber foods such as beans, nuts and vegetables. If you feel like your symptoms are improving, slowly add high-fiber foods back to your diet.",
    "consultNow" : "Dietician"
  },
  "36" : {
    "itemNumber" : 36,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Antibiotic Induced Diarrhea",
    "question" : "Can you please tell me what are the foods to be avoided when I am talking antibiotics?",
    "answer" : "You need to avoid milk and milk products and do not take high fiber foods.",
    "consultNow" : "Dietician"
  },
  "37" : {
    "itemNumber" : 37,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Bronchial Asthma",
    "question" : "what food should be included in Bronchial asthama?",
    "answer" : "Have plenty of dark green, leafy vegetables, legumes, whole grains, and seeds.",
    "consultNow" : "Dietician"
  },
  "38" : {
    "itemNumber" : 38,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Bronchial Asthma",
    "question" : "Can I take food whch is added with articicial colour and preservatives ?",
    "answer" : "Avoid food with artificial colors, or any preservatives.",
    "consultNow" : "Dietician"
  },
  "39" : {
    "itemNumber" : 39,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Bronchial Asthma",
    "question" : "I heard that Omega-3 fatty acid rich food are good to consume in this condition.Can you please tell me what are foods which are rich in Omega-3 fatty acid ?",
    "answer" : "Omega-3 fatty acids such as walnuts, beans, flax seeds, fish oils, etc. as they are instrumental in easing inflammation of the airways.",
    "consultNow" : "Dietician"
  },
  "40" : {
    "itemNumber" : 40,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Bronchial Asthma",
    "question" : "Is there any food item which can detoxify the allergens?",
    "answer" : "Avocadoes as it contains a compound called glutathione, which helps to detoxify allergens.",
    "consultNow" : "Dietician"
  },
  "41" : {
    "itemNumber" : 41,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Bronchial Asthma",
    "question" : "what are foods which hasd to be strictly restricted ?",
    "answer" : "Chocolates, carbonated beverages, fatty foods, caffeine, mint, spicy foods and onions should be restricted.",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Dairy products, such as milk, cheese and yogurt and even creamy soups, cheesecake, pizza should be held in strictly moderated quantities.",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Avoid citrus fruits like oranges, nectarines, grapefruit, lemons and limes.",
    "consultNow" : "Dietician"
  },
  "42" : {
    "itemNumber" : 42,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Bronchial Asthma",
    "question" : "Can I smoke inthis condition?",
    "answer" : "Smoking is completely restricted as when you smoke it blocks your lungs, which causes difficulty in breathing.",
    "consultNow" : "Dietician"
  },
  "43" : {
    "itemNumber" : 43,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Chronic obstructive pulmonary disease (COPD)",
    "question" : "Should I eat a special diet because I have COPD?",
    "answer" : "It is important for everyone to eat a healthy diet and maintain a healthy weight, but even more so when you have COPD. If you are underweight or overweight, talk to your doctor about your specific needs. Overall, it is important to eat foods that are nutritious and easily digested. If you get short of breath when eating, eat smaller meals more often. Also, eat slowly and drink your beverage after eating to avoid early fullness.",
    "consultNow" : "Dietician"
  },
  "44" : {
    "itemNumber" : 44,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Chronic obstructive pulmonary disease (COPD)",
    "question" : "Can I have Icecreams and Soft drinks?",
    "answer" : "I would say no because by taking these soft drinks and old items can produce more mucus which causes difficulty in breathing.",
    "consultNow" : "Dietician"
  },
  "45" : {
    "itemNumber" : 45,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Chronic obstructive pulmonary disease (COPD)",
    "question" : "Can you tell me what type of Foods to be avoided?",
    "answer" : "Avoid more Milk, Ice creams, Soft drinks, Banana and Curd which produces more mucus which leads to difficulty in breathing.",
    "consultNow" : "Dietician"
  },
  "46" : {
    "itemNumber" : 46,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Chronic obstructive pulmonary disease (COPD)",
    "question" : "I am not able to eat properly when am breathing issue,Can you suggest me any food for immediate relief?",
    "answer" : "No,There is no food for instant relief when you are suffering from any breathing,actually when you are facing any breathing problem if any foods or dinks are given,problem might increase and the condition might become more worst.",
    "consultNow" : "Dietician"
  },
  "47" : {
    "itemNumber" : 47,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Chronic obstructive pulmonary disease (COPD)",
    "question" : "If I follow a proper diet for COPD is there any chance that I can cure my disorder completely?",
    "answer" : "COPD never really goes away, which is why it's called \"chronic.\" You can, however, take steps to protect your airways and improve your breathing. Your doctor can provide invaluable help, but most of the work will be up to you. You can do a lot to manage your COPD and maintain your quality of life.When it comes to managing your COPD,yes you can definetly manage it by following a healthy diet which is especially important for people with COPD. Shortness of breath can make eating difficult. Eating small meals more frequently can sometimes help. Try to get plenty of fruits and vegetables along with high-protein foods such as milk, fish, eggs, meat, and soy. Drinking plenty of water can help, too. Water may help thin mucus and phlegm so that it's easier to expel by coughing. If you can't seem to eat enough calories, liquid supplements like Ensure or Resource may help.",
    "consultNow" : "Dietician"
  },
  "48" : {
    "itemNumber" : 48,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Chronic obstructive pulmonary disease (COPD)",
    "question" : "I am a regular smoker,is there any diet for controlling COPD without stopping smoking?",
    "answer" : "Smoking is one of the reason to develop COPD,so its not possible to control COPD by following only a diet,You should completely avoid smoking,without that COPD cannot be controlled.",
    "consultNow" : "Dietician"
  },
  "49" : {
    "itemNumber" : 49,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Chronic obstructive pulmonary disease (COPD)",
    "question" : "Can you tell me any foods which I can have to stop producing more mucous?",
    "answer" : "Eggs, milk, soy, fish, shellfish, wheat, tree nuts and milk are the foods most likely to cause food allergies. If you're allergic to these foods, eating them could lead to an increase in mucus.",
    "consultNow" : "Dietician"
  },
  "50" : {
    "itemNumber" : 50,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Why do some foods cause constipation?",
    "answer" : "There is only one 'food' component that may cause constipation — indigestible fiber. Too much fiber leads to bowel obstruction, too little indicates bowel dependence. All other natural foods digest near completely, and don't play any role in forming stools. In fact, if your stool test shows any remnants of fats, proteins, or carbohydrates, it means you are affected by a severe malabsorption disorder",
    "consultNow" : "Dietician"
  },
  "51" : {
    "itemNumber" : 51,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Does alcohol cause constipation?",
    "answer" : "Alcohol inhibits digestion, causes dehydration, depresses glucose metabolism, and compromises the functioning of the central and peripheral nervous systems. The cumulative impact of these factors is behind chronic constipation related to alcohol abuse.",
    "consultNow" : "Dietician"
  },
  "52" : {
    "itemNumber" : 52,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Why is my toddler suddenly constipated?",
    "answer" : "The wrong medical advice is behind chronic constipation in toddlers. Recommended dietary changes not only do not resolve constipation, but also may result in diarrhea, inflammatory bowel disease, and development problems caused by the ensuing malnutrition.",
    "consultNow" : "Dietician"
  },
  "53" : {
    "itemNumber" : 53,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Adding fiber to your diet can help prevent and relieve constipation. True or false?",
    "answer" : "True. One of the best ways to prevent constipation is to add fiber to your diet. Fiber helps to soften stool so it moves smoothly through the colon.",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "There are two kinds of fiber: soluble and insoluble, and both work to prevent constipation. Soluble fiber dissolves in water. Good sources of soluble fiber include beans, fruit, and oats. Insoluble fiber does not dissolve in water and can be found in whole-grain foods and vegetables. Drinking water or fruit or vegetable juice can help the dietary fibers work better, making your stools more regular.",
    "consultNow" : "Dietician"
  },
  "54" : {
    "itemNumber" : 54,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "If you're constipated, should you eat white rice or avoid it?",
    "answer" : "Avoid it! White rice is rice with the husk, germ, and bran stripped away. Basically, all the fiber and nutrients have been removed. However, brown rice is different. Because it has the husk, bran, and germ intact, it can help relieve constipation. Try mixing brown rice with white rice at first to get used to it.",
    "consultNow" : "Dietician"
  },
  "55" : {
    "itemNumber" : 55,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "You're constipated, and your friend offers you a kiwi. Eat it or avoid it?",
    "answer" : "Eat it! Eat a kiwi to help with constipation. A medium-sized kiwi has about 2.5 grams of fiber and can help you have regular bowel movements.",
    "consultNow" : "Dietician"
  },
  "56" : {
    "itemNumber" : 56,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "What about chocolate? Eat it or avoid it?",
    "answer" : "Avoid it!",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Chocolate can slow digestion and should be avoided if you are constipated and many of us realize this already. Like cheese, chocolate is high in fat and has little to no fiber, which can slow the passage of food through the bowel. In addition, if you suffer from irritable bowel syndrome (IBS), chocolate can aggravate your symptoms.",
    "consultNow" : "Dietician"
  },
  "57" : {
    "itemNumber" : 57,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Your child is constipated and is asking for popcorn. Should she eat it or avoid it?",
    "answer" : "Eat it!",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Popcorn is a great snack for kids of all ages. You can eat a filling 3 cups of air-popped kernels and get 3.5 g fiber to help relieve your constipation. Bonus: the air-popped kind has less than 100 calories per serving! Just make sure you stick to the air-popped variety, as movie theater popcorn, or popcorn topped with butter is high in fat, which can cause constipation.",
    "consultNow" : "Dietician"
  },
  "58" : {
    "itemNumber" : 58,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "When you're constipated, should you eat cheese or avoid it?",
    "answer" : "Avoid it!",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Avoid cheese if you're constipated. Cheese has little to no fiber, and is full of fat and can cause or worsen constipation. In addition, dairy products contain lactose and those who are intolerant may find they have additional bloating when they eat cheese.",
    "consultNow" : "Dietician"
  },
  "59" : {
    "itemNumber" : 59,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "",
    "answer" : "Eat them! Sweet potatoes are a great side dish if you have constipation.\nOne medium baked sweet potato with skin has 3.8 grams of fiber (most of it is in the skin, so leave the skin on!), which can help prevent constipation.\nRegular baked potatoes with skin have about 3 grams of fiber and are also good options to prevent constipation.\nAvoid high fat, high calorie toppings such as butter or sour cream, which can make your constipation worse. Add more fiber to your baked potato by topping it with other veggies such as broccoli.",
    "consultNow" : "Dietician"
  },
  "60" : {
    "itemNumber" : 60,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "You should eat beans to help relieve constipation. True or false?",
    "answer" : "True. Beans are an excellent food choice to help relieve constipation, because they contain both soluble and insoluble fiber.\nThey contain more than 10 grams of fiber per one-cup serving – more than almost any other fiber source!",
    "consultNow" : "Dietician"
  },
  "61" : {
    "itemNumber" : 61,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "What foods below should you avoid when constipated?",
    "answer" : "When you are constipated, it's best to avoid foods that are low in fiber and high in fat. This includes cheese, ice cream, potato chips, frozen meals, red meat, and hamburgers and hot dogs.\nMany processed foods have little to no fiber and will stall food passing through the bowel. Choose high fiber foods such as those mentioned in this quiz to help prevent or relieve your constipation.",
    "consultNow" : "Dietician"
  },
  "62" : {
    "itemNumber" : 62,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Constipation just means I need more fiber!!",
    "answer" : "Increasing fiber in your diet can often help constipation. But chronic constipation can signal a real problem. It can indicate a poorly functioning thyroid gland or Dietetes. It can be the result of Parkinson's disease or stroke or a side effect of medications. In rare cases, It can signal illness such as colorectal cancer or autoimmune disease. See a doctor if symptoms last more than two weeks or you have blood in your stools, severe pain with bowel movements, or unexplained weight loss.",
    "consultNow" : "Dietician"
  },
  "63" : {
    "itemNumber" : 63,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Vacations can cause constipation!!",
    "answer" : "Travel can change your daily routine, diet, contributing to constipation. Avoid dehydration by drinking more of water, especially you are flying. Also move around when you can\nOther travel tips to avoid constipation are Exercise, limit alcohol, Make a point of eating fruits and vegetables.",
    "consultNow" : "Dietician"
  },
  "64" : {
    "itemNumber" : 64,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Mood can effect your irregularity!!",
    "answer" : "Depression may trigger constipation or make it worse. Reducing store through medication, yoga, biofeed and relaxation techniques may help you.",
    "consultNow" : "Dietician"
  },
  "65" : {
    "itemNumber" : 65,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Holding it wont hurt",
    "answer" : "You may feel too busy at work to have a bowl movement. Or you would rather wait until you're home. But ignoring the urge when it comes may not only make you physically uncomfortable, but it can cause or aggravate constipation by weakening the signals over time. Some people it helps to set aside time after breakfast or another meal for a bowl movement. But no matter when nature calls, answer.",
    "consultNow" : "Dietician"
  },
  "66" : {
    "itemNumber" : 66,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Medication can cause constipation",
    "answer" : "Some medications for pain, depression, high blood pressure and Parkinsons disease are associated with constipation.Calcium supplements, especially if taken with other supplement or medication that binds the stools, may also cause problems.",
    "consultNow" : "Dietician"
  },
  "67" : {
    "itemNumber" : 67,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "A Low fiber diet can cause constipation?",
    "answer" : "Not having enough fiber in your diet can always lead to constipation. To prevent it try to get at least 20 grams per day. Eat more whole fruits and vegetables, replace white rice, bread and pastas with whole grain products. Increase your fiber intake slowly to avoid gas and bloating. Drink water, which helps fiber pass stool, so drink at least 2-4 glasses of extra glasses of water a day. Don't expect result overnight-after a few days of regular fiber intake you should start to see improvement.",
    "consultNow" : "Dietician"
  },
  "68" : {
    "itemNumber" : 68,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "All fiber is created equal",
    "answer" : "Eating foods with fiber helps you feel full and stay regular. Insoluble fiber in particular can help ease constipation because it indigestible and dissolve in water.It adds bulk to stool and helps it pass through the intestines fostered sources of insoluble fiber are whole grain breads, cereal and pasta. Soluble fiber dissolves in water and low in fat and cholesterol, good sources of soluble fiber are beans and peas.",
    "consultNow" : "Dietician"
  },
  "69" : {
    "itemNumber" : 69,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Exercise keeps you regular",
    "answer" : "Lack of physical activity can contribute to constipation. Exercise can however can help make your bowel movements more regular and can reduce stress. Wait at least an hour after eating a big meal before you exercise to give your body time to digest your food. Then get moving! Try a 10-15 walk several times a day. Stretching and yoga can also help constipation.",
    "consultNow" : "Dietician"
  },
  "70" : {
    "itemNumber" : 70,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Coffee can fix constipation",
    "answer" : "It's true that the caffeine in coffee can stimulate the muscles in your digestive system to contract, causing a bowel movement. But actually coffee can make the stools harder to pass because it is also a diuretic, so it draws liquids out of stools. If you are constipated, avoid coffee and other diuretics such as alcohol and carbonated tea and cola.",
    "consultNow" : "Dietician"
  },
  "71" : {
    "itemNumber" : 71,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Caster oil is a cure all",
    "answer" : "Caster oil is a powerful laxative. But like other laxatives, it should not be used long-term. over using laxatives can hurt your ability to absorb nutrients and some medications. Caster oil can damage the bowel muscles, nerves and tissues if ever used all of which can cause constipation.",
    "consultNow" : "Dietician"
  },
  "72" : {
    "itemNumber" : 72,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "What can I do to avoid Constipation?",
    "answer" : "A change in your food habits and exercise will relieve your constipation. The fiber content of the food helps to soften the stool. Including fiber containing food like vegetables and fruits. Also, drink plenty of water and take exercise moderately. If you are taking any medications, consult your doctor as it may also a cause of your constipation.",
    "consultNow" : "Dietician"
  },
  "73" : {
    "itemNumber" : 73,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "How to prevent Constipation during Pregnancy?",
    "answer" : "Constipation is a common problem in pregnancy because hormonal changes cause the food to pass more slowly through the intestines. To prevent constipation during pregnancy eats a healthy and nutritious diet, high in fiber content such as wheat grain cereals, brown rice, brown bread and fruits and vegetables. Drink more water and at least one glass of fruit juice every day. A bit of stretches and exercising and undisturbed sleep during the night can help regulate bowel movement.",
    "consultNow" : "Dietician"
  },
  "74" : {
    "itemNumber" : 74,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "How does fibre help in Constipation?",
    "answer" : "Much of the food we eat is digested in the stomach and small intestine, but fiber is not digested and passes into the large intestine where it acts like blotting paper, drawing water into the stool and increases the number of bacteria in the colon. Both these effects make the stool larger, softer and easier to pass.",
    "consultNow" : "Dietician"
  },
  "75" : {
    "itemNumber" : 75,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "How can I increase the Fibre in my Diet?",
    "answer" : "The easiest way to improve your diet is to eat brown, whole meal bread and plenty of fresh fruit and vegetables. For further information, contact dietician who can advise you on a fiber rich diet.",
    "consultNow" : "Dietician"
  },
  "76" : {
    "itemNumber" : 76,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "What should you avoid eating if you’re constipated?",
    "answer" : "If you’re constipated, try not to eat too many foods with little or no fiber, such as Cheese, Chips, Fast food, Ice cream, Meat, Pre prepared foods such as Frozen meals and Snack foods and Processed foods like Pickles etc.",
    "consultNow" : "Dietician"
  },
  "77" : {
    "itemNumber" : 77,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "How much fibre should one take?",
    "answer" : "On an average, a person who is 50-years old should consume 50 grams fiber per day. This comes by adding two cups of fruit and two cups of vegetables to the regular diet. While adding fiber to the diet, start slowly and increase gradually so that it will avoid gas distension and bloating.",
    "consultNow" : "Dietician"
  },
  "78" : {
    "itemNumber" : 78,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Should one use laxatives?",
    "answer" : "These are not meant for long term use – except bulk forming laxatives like oat bran, Psyllium, Polycarbofill and Methyl cellulose. These are mixed with fruit juices so that they taste better.",
    "consultNow" : "Dietician"
  },
  "79" : {
    "itemNumber" : 79,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Do bulk forming laxatives contain side effects?",
    "answer" : "Yes. They may cause gas, bloating and cramps, if taken too much initially. So increase slowly and add enough water.",
    "consultNow" : "Dietician"
  },
  "80" : {
    "itemNumber" : 80,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Is mineral oil a good laxative?",
    "answer" : "No. It should not be used regularly. Long term use can cause deficiency of vitamins. A, D, E and K. This has a role in the postoperative period to avoid strain.",
    "consultNow" : "Dietician"
  },
  "81" : {
    "itemNumber" : 81,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "Tips To Prevent Constipation",
    "answer" : "1. Do not resist or ignore the urge to have a bowel movement\n2. Set aside some time to have a bowel movement, preferably after filling the stomach, which initiates the gastro-colic reflex\n3. Eat more fiber\n4. Drink plenty of fluids (eight glasses a day is a good quantity) – including water, tea, soup, juices and other drinks\n5. Limit food that is high in fat and sugar like sweets, cheese, butter, chocolates and processed foods – as these food stuff cause constipation\n6. Exercise more often\n7. Use laxatives in moderation",
    "consultNow" : "Dietician"
  },
  "82" : {
    "itemNumber" : 82,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "How diet can be beneficial for constipation ?",
    "answer" : "For many people suffering from constipation diet plays a major role in getting relief from it by taking a fiber-rich diet and adequate intake of fluids. Fibers help bowel activity and water help in guarding the stool soft.Drink at least about 10 glasses of water a day.",
    "consultNow" : "Dietician"
  },
  "83" : {
    "itemNumber" : 83,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "How can foods have both soluble and insoluble fiber?",
    "answer" : "Most all grains, cereals, legumes, and tubers have an outer insoluble fiber layer, and a soluble fiber interior (and the same is true for some fruits and vegetables, such as apples and zucchini). It's very easy to actually see this with your own eyes. If you take a cooked grain of brown rice, wheat berry, kernels of corn, potato, or ban you can separate the tough exterior (the brain, skin, or shell) from the creamy interior. When the bran is removed from wheat berries, andthey're milled the result is white flour; when the bran is removed from brown rice the result is white rice. There aren't many similar common commercial processes that remove the insoluble fiber exterior from legumes, fruits, or vegetables, but finely blending, pureeing, or peeling these whole foods will greatly minimize their trigger risk. Oatmeal, brown rice, and corn meal (polenta) tend to be the best-tolerated whole grains for IBS.",
    "consultNow" : "Dietician"
  },
  "84" : {
    "itemNumber" : 84,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "If constipation persistsfor several months,does it mean I am doing anything wrong,Is there anything in addition to enemas and juicing to help us?",
    "answer" : "Try to replace high-protein dairy with high-fat dairy. In my experience, adding high-protein dairy: whey, yoghurt and kefir, do miracles for those who are prone to diarrhea. Constipation, however, is a different matter. If your patient is prone to chronic constipation introduced high-fat dairy: ghee, butter and sour cream, but not high-protein dairy, such as yoghurt, whey, kefir and cheese: high protein dairy can aggravate constipation. The high fat content of sour cream will lubricate the gut wall and soften the stool.",
    "consultNow" : "Dietician"
  },
  "85" : {
    "itemNumber" : 85,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Constipation",
    "question" : "How is that Flax seeds can be used for constipation?Wont they damage the gut like other fibrous foods?",
    "answer" : "I do not recommend taking flax seeds, particularly in the initial stages of the program. When soaked overnight, flax seeds absorb a lot of water and turn into a jelly. It is thought that this water-absorbing quality of flax seeds helps with constipation. However, it does not help everybody, and yes, flax seeds are very fibrous and have other anti-nutrients.",
    "consultNow" : "Dietician"
  },
  "86" : {
    "itemNumber" : 86,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diarrhoea",
    "question" : "What sort of foods are good during diarrhoea?",
    "answer" : "High energy foods such as fats, yogurt and cereals are quite well absorbed during diarrhea. Small, frequent feeds of energy-rich local foods familiar to the person should be given. A little vegetable oil can be added to foods such as millet or rice to increase the energy content.\nFoods high in potassium are important to restore the body's essential stores depleted during diarrhea. Such foods include lentils, bananas, mangoes, pineapples, pawpaw, coconut milk and citrus fruits.\nIt is very important to continue feeding a person with diarrhea. Give soft, easy-to-digest foods, like khichri, watery dal, ids, curd, bananas, etc. You should also give plenty of other fluids, like lemonade [nimbu pani], rice kanji, lassie, coconut water, weak tea etc. If the baby is being breastfed, continue to give her mother's milk. Give an extra meal a day, after the diarrhea stops, to help the body get strong again.",
    "consultNow" : "Dietician"
  },
  "87" : {
    "itemNumber" : 87,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diarrhoea",
    "question" : "What is dehydration?",
    "answer" : "Dehydration is the loss of water and body salts through diarrhea. Early features are difficult to detect, but include dryness of mouth and thirst. The signs of dehydration include: sunken fontanelle (in infants); fast, weak pulse; breathing faster than normal; loss of skin elasticity; sunken, dry eyes and reduced amount of urine. Dehydration is the correction of dehydration.",
    "consultNow" : "Dietician"
  },
  "88" : {
    "itemNumber" : 88,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diarrhoea",
    "question" : "Can we get diarrhoea when we eat any food items?",
    "answer" : "Due to some food intolerances and sensitivities. Some people have difficulty digesting certain ingredients, such as lactose, the sugar found in milk and milk products. Some people may have diarrhea if they eat certain types of sugar substitutes in excessive quantities.",
    "consultNow" : "Dietician"
  },
  "89" : {
    "itemNumber" : 89,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diarrhoea",
    "question" : "What are the foods to be strictly avoided in Diarrhoea?",
    "answer" : "Foods, which has to be avoided in diarrhea are\nHigh-fiber cereals such as bran flakes\nFatty or fried foods\nPickled or spicy foods\nCaffeine and alcohol.",
    "consultNow" : "Dietician"
  },
  "90" : {
    "itemNumber" : 90,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diarrhoea",
    "question" : "What are the foods to be included in Diarrhoea?",
    "answer" : "Foods which are to be included in diarrhea are\nBananas\nRice\nSoup\nBoiled vegetables\nLentils",
    "consultNow" : "Dietician"
  },
  "91" : {
    "itemNumber" : 91,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diarrhoea",
    "question" : "How does Probiotics help when suffering from diarrhoes?",
    "answer" : "A food or dietary supplement that contains live bacteria, which replaces or adds to the beneficial bacteria usually found in the gastrointestinal tract. Avoid dairy products when you have diarrhea yogurt, a fermented milk drink, that contain probiotics. These can restore the beneficial bacteria that your body flushes out with diarrhea. Just make sure the yogurt is low in sugar, as sugar can worsen symptoms.",
    "consultNow" : "Dietician"
  },
  "92" : {
    "itemNumber" : 92,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "Should I eat differently now that I am pregnant?",
    "answer" : "Now that you're pregnant, it is important to eat healthily. Of course, this is difficult if you have morning sickness and can't seem to keep anything down. Small regular meals and a lot of fluids can help to combat the nausea you're experiencing right now.\nWhen your stomach feels more settled, try to eat nutritious, well-balanced meals. If you know you haven't been eating as well as you could, pregnancy is a good time to start healthy eating habits. This will make sure you get all the nutrients you and your baby need.",
    "consultNow" : "Dietician"
  },
  "93" : {
    "itemNumber" : 93,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What variety of foods can I include every day?",
    "answer" : "Starchy foods, such as rice, rates (including mixed grain or stuffed roti), whole grain bread, pasta, and baked/boiled potatoes.\nFoods rich in protein, such as lean meat and chicken, eggs, pulses (such as beans and lentils) and soya nuggets.\nDairy foods, such as milk, cheese, cottage cheese (paneer) and curd/yoghurt.",
    "consultNow" : "Dietician"
  },
  "94" : {
    "itemNumber" : 94,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "How much fruit and vegetables do I need during pregnancy?",
    "answer" : "You should have a minimum of five servings of fruits and vegetables each day and try to have a variety of different kinds. This will help you get the nutrients you and your growing baby need.",
    "consultNow" : "Dietician"
  },
  "95" : {
    "itemNumber" : 95,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What if I don't really like fruit or vegetables?",
    "answer" : "If you are not fond of fruits and vegetables or if morning sickness makes you queasy at the sight of an apple (Seb), eat more of the fruits and vegetables you do like.",
    "consultNow" : "Dietician"
  },
  "96" : {
    "itemNumber" : 96,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "Will my morning sickness affect my baby?",
    "answer" : "Morning sickness won't threaten your baby's wellbeing as long as you're able to keep some food down. You may need to eat what and when you fancy for a while, but it's important to try and eat a well-balanced diet, and drink plenty of fluids. Most women with morning sickness work out pretty quickly what they can and cannot stomach, and how many times they need to eat throughout the day.\nYou should aim to eat a diet that's high in all the vitamins you and your baby need. If you're taking prenatal vitamins, but find them hard to swallow, taking them with food may be easier on your stomach. If you still can't face them, consider eating a vitamin-rich food every morning.",
    "consultNow" : "Dietician"
  },
  "97" : {
    "itemNumber" : 97,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "Why is it important to drink water during pregnancy?",
    "answer" : "Pregnant or not, you need water to keep healthy. Your body and your vital organs must have water to function properly.\nDuring pregnancy, your body needs more water to cope with the demands of your changing body.\nWater is essential for healthy blood cells and to keep your body hydrated. Water is also a key component of breast milk, and essential for good lactation.",
    "consultNow" : "Dietician"
  },
  "98" : {
    "itemNumber" : 98,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of drinking water?",
    "answer" : "You need water to keep your body hydrated. Drinking enough water prevents dehydration. Dehydration during pregnancy can lead to many complications such as headaches, nausea, cramps, edema and dizziness. This is especially important in the third trimester when dehydration can actually cause contractions that can trigger preterm labor.\nThe best way to tell if you are dehydrated is to check the color of your urine. It should be pale or straw-colored. If it is dark you need to drink more water.\nSome women find that drinking water regularly helps relieve symptoms of morning sickness, acidity and heartburn as well as indigestion. It also helps in keeping your body cool and maintaining your temperature, especially in the hot and humid months.\nWater also helps prevent urinary infections, which are common during pregnancy. If you drink enough water, your urine will be diluted, reducing your risk of infection.\nIt also eases constipation, hemorrhoids, edema and water retention. Although you may not think so, the more water you drink during pregnancy, the less water your body will retain.",
    "consultNow" : "Dietician"
  },
  "99" : {
    "itemNumber" : 99,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "How much water should I drink while I'm pregnant?",
    "answer" : "You need to drink about three liters (eight to 12 glasses) of fluid every day. For every hour of light exercise you do, add another glass of water. During the summer, you will need to drink even more to make up for the fluid you lose because of perspiration.\nJuices can count as part of your fluid intake, but remember they can also contain a lot of extra calories. Caffeinated beverages, such as coffee, colas and teas shouldn't be counted as part of your fluid intake because they're diuretics. Diuretics make you urinate more so you actually lose water.\nIf you're not sure how much water you drink each day, fill three one liter bottles of water and try to finish them by the end of the day.",
    "consultNow" : "Dietician"
  },
  "100" : {
    "itemNumber" : 100,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "I don't like the taste of water so how do I make sure my body gets the fluids it needs?",
    "answer" : "If you don't like drinking water, try adding a wedge of lemon (nimbu) or lime, and allow them to infuse for a while.\nYou could also add other things, like a washed sprig of mint (pudina) or a little juice for extra flavor. This can be a welcome change, especially if you are feeling nauseous. Adding fresh coriander (dhaniya), grated ginger (adrak), fennel seeds (saunf) or a cardamom (elaichi) pod also gives an interesting twist.\nYou can also make a plain glass of water more refreshing by adding frozen fruit such as orange (Santara), lemon (nimbu), kiwi, peach (audio), apricot (khubani) and plum (Aloo Bukhara) instead of ice cubes. The frozen fruit looks colorful floating about in the clear water and it chills your drink, giving it a hint of fruity flavor.\nTry and drink plenty of non-caffeinated fluids, such as tender coconut water, fresh lime water (nimbu pani), lassi, buttermilk (chhaach), milk shakes, homemade jal jeera and aam panna.",
    "consultNow" : "Dietician"
  },
  "101" : {
    "itemNumber" : 101,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "How can I ensure the water I drink is safe and clean?",
    "answer" : "To prevent the risks of waterborne diseases you need to make sure you only drink filtered, bottled or boiled water. Unfiltered or unboiled water may carry a host of contaminants, bacteria and viruses. These are a health risk and may cause serious infections.\nIf you're going out, carry your own water, so that you are sure it is clean and safe. If you buy packaged water, make sure the bottle is sealed. Always check the 'date of packaging' and the 'best before' date before you buy. Do not buy bottles that are damaged, leaking, discolored, have broken seals or sediment at the bottom.\nIf you are eating out, always ask for branded, sealed, bottled water and have it opened at your table.\nIf you prefer cold water, ask for a chilled, sealed bottle of water instead of ice cubes. The ice may have contaminants if it has been sourced from a local vendor without a hygienic facility. Also, there is no way to know if the ice has been made with filtered water.\nSodas and carbonated water are more likely to aggravate acidity and heartburn, so it's best to give them normal water.\nKeep having small amounts of water throughout the day. Every little bit of water helps ensure a healthy pregnancy.",
    "consultNow" : "Dietician"
  },
  "102" : {
    "itemNumber" : 102,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What is the importance of vitamin B6?",
    "answer" : "Vitamin B6 is an important nutrient for everyone, including pregnant women. It helps:\nUse and store energy from foods\nPromote the growth of red blood cells\nStrengthen your immune system\nDevelop your baby's brain and nervous system",
    "consultNow" : "Dietician"
  },
  "103" : {
    "itemNumber" : 103,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the vitamin B6 rich foods?",
    "answer" : "A healthy, balanced diet will give you enough vitamin B6 to meet your daily needs, without the need to take a separate supplement. Good sources of vitamin B6 include:\nBananas (Kela)\nSoya beans\nMilk\nFish\nCorn (Makka)\nNuts\nWhole grains\nBrown rice\nAvocados (makhan Paul)\nPoultry",
    "consultNow" : "Dietician"
  },
  "104" : {
    "itemNumber" : 104,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "How do I deal with morning sickness at work?",
    "answer" : "Carry a lemon in your bag always. Just sniff it when you feel nauseous.\nCarry small snacks and nibble when you can. Eating little and often is known to keep your sugar levels at an even level and so prevent you from suddenly feeling queasy. Biscuits, rusks, dry fruits and nuts can come in handy.\nKeep a couple of hand towels and a bottle of cold water handy. If you feel queasy, place a wet, cool hand towel on your forehead to relieve yourself. Orange or lemon scented wet wipes can also be refreshing.\nKeep some mints or a pocket toothbrush and a child's fruit-flavored toothpaste in your bag. You may need to freshen up now and then.",
    "consultNow" : "Dietician"
  },
  "105" : {
    "itemNumber" : 105,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "Which healthy snacks don't require any cooking time?",
    "answer" : "If you're rushing and just don't have the time to cook, these nutritious snacks are your best bet:\nNuts. Nuts are great for flagging energy levels. Nibble on cashews (Kaju) for iron or almonds (Badam) for calcium.\nSeeds. Pumpkin, muskmelon and sunflower seeds provide protein and zinc. For added flavor, you can dry roast nuts and seeds (in the oven or in a dry pan). Or occasionally shallow fry them in about a 1 tsp of ghee or oil with a light sprinkling of salt, black pepper or Chaat masala.\nFresh fruit. Rich in fiber and nutrients, you should have five servings of fruit in a day. Citrus fruit has vitamin C, which helps your body to absorb iron from food. You can have whole fruits like apples (Seb), pears (nashpati), bananas (Kela), mangoes (am), grapes (anger), oranges (Santara) any time of the day.\nDried fruit such as figs (anjeer) and apricots (Zard Aloo) will provide iron, fiber and calcium. Raisins, (kishmish), dried Indian gooseberry (amla), dried guava (amrud) and dried mango (aam) are great for a quick energy boost.\nFortified breakfast cereals. These can be a good source of vitamins and minerals with a huge variety to choose from. Whether you like muesli, oats or just plain corn flakes, a small bowl can stave off hunger pangs. Just keep some milk in your office fridge and serve yourself a bowl whenever you feel like.\nBreads. Fruit buns, bread rolls, croissants are easy choices and can be made healthy depending on the toppings or fillings you choose. Whole wheat bread sticks, soup sticks, cheese straws, savory crackers, digestive biscuits are also popular snacks.\nYoghurt and cheeses are excellent sources of calcium. Packaged yoghurt comes in several flavors (fruit, sweet, salted and spiced). Always look for the date of expiry and make sure that the packaging isn't damaged.",
    "consultNow" : "Dietician"
  },
  "106" : {
    "itemNumber" : 106,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the nutrients required in pregnancy?",
    "answer" : "The nutrients which are required in pregnancy are\nCalcium, Chromium, Copper, fluoride, Folic acid, Iodine, Iron, Magnesium, Manganese, Phoshorous, Potassium, Riboflavin, Thiamine, Vit A, Vit B6, Vit C, Vit D and Zinc.",
    "consultNow" : "Dietician"
  },
  "107" : {
    "itemNumber" : 107,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of calcium in the growth of a baby and sources?",
    "answer" : "Grows strong bones and teeth, healthy nerves, heart, and muscles. Also develops heart rhythm and blood clotting.\nFood source:\nMilk, yoghurt (dahi),\nGingelly seeds (tail) and\nAmaranth leaves (cola).",
    "consultNow" : "Dietician"
  },
  "108" : {
    "itemNumber" : 108,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of chromium in the growth of a baby and sources?",
    "answer" : "Regulates blood sugar levels; stimulates protein synthesis in developing tissues.\nFood source:\nUnrefined cereals,\nVegetable oils,\nCheese and\nMeats.",
    "consultNow" : "Dietician"
  },
  "109" : {
    "itemNumber" : 109,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of copper in the growth of a baby and sources?",
    "answer" : "Helps from the heart, skeletal, and nervous systems, arteries, and blood vessels\nFood source:\nLentils (dal)\nNuts\nSeafood and\nDrinking water.",
    "consultNow" : "Dietician"
  },
  "110" : {
    "itemNumber" : 110,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of fluoride in the growth of a baby and sources?",
    "answer" : "Needed when teeth begin to form at ten weeks; later, in the second and third trimesters, needed to develop primary incisors, molars, and permanent teeth\nFood source:\nTea (find out how much caffeine you can have during pregnancy) and\nSeafood.",
    "consultNow" : "Dietician"
  },
  "111" : {
    "itemNumber" : 111,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of folic acid in the growth of a baby and sources?",
    "answer" : "Is a critical part of spinal fluid and helps close the tube housing the central nervous system; also helps synthesize DNA and normalize brain function.\nFood source:\nGreen leafy vegetables,\nSeeds,\nLegumes and\nCitrus fruit.",
    "consultNow" : "Dietician"
  },
  "112" : {
    "itemNumber" : 112,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Iodine in the growth of a baby and sources?",
    "answer" : "Regulates metabolism, helps develop a nervous system. Severe iodine deficiency can lead to miscarriage, stillbirth or congenital abnormalities.\nFood source:\nIodized table salt,\nPotato (Aloo) and\nCurd (Dahi).",
    "consultNow" : "Dietician"
  },
  "113" : {
    "itemNumber" : 113,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Iron in the growth of a baby and sources?",
    "answer" : "Makes red blood cells, supplies oxygen to cells for energy and growth, and builds bones and teeth.\nFood source:\nLentils (dal),\nChick peas (kabuli chana or chhole),\nSpring onion (hari pyaz),\nBran flakes (choker),\nRed meat, raisins (kishmish).\nVitamin C helps the body to absorb iron. You can get vitamin C from citrus fruits or Indian gooseberry (amla).",
    "consultNow" : "Dietician"
  },
  "114" : {
    "itemNumber" : 114,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Magnesium in the growth of a baby and sources?",
    "answer" : "Helps build strong bones and teeth, regulates insulin and blood-sugar levels, builds and repairs tissue\nFood source:\nPotato (Aloo)\nSpinach (Paalak)\nAlmonds (badaam),\nBrown rice and\nLentils (dal).",
    "consultNow" : "Dietician"
  },
  "115" : {
    "itemNumber" : 115,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Manganese in the growth of a baby and sources?",
    "answer" : "Aids bone and pancreas development and synthesis of fats and carbohydrates\nFood source:\nGet manganese from a variety of foods as this mineral is present in many different foods. Some examples are;\nPorridge (Dalia) and\nBlack beans (urad dal)",
    "consultNow" : "Dietician"
  },
  "116" : {
    "itemNumber" : 116,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Pantothenic acid in the growth of a baby and sources?",
    "answer" : "Regulates adrenal activity, antibody production, growth and metabolism of protein and fat.\nFood source:\nGet pantothenic acid from a variety of foods. Some examples are;\nWell cooked egg yolks,\nWhole grain cereals and\nMilk.",
    "consultNow" : "Dietician"
  },
  "117" : {
    "itemNumber" : 117,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Phosphorous in the growth of a baby and sources?",
    "answer" : "Builds strong bones and teeth; develops blood clotting and normal heart rhythm.\nFood source:\nMeat,\nFish and\nDairy products.",
    "consultNow" : "Dietician"
  },
  "118" : {
    "itemNumber" : 118,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Potassium in the growth of a baby and sources?",
    "answer" : "Aids muscle activity and contractions, energy metabolism, and nerve function.\nFood source:\nPotato (aloo),\nSweet lime (mausambi),\nRaisins (kishmish),\nApricots (zard aloo),\nEgg plant (baingan),\nCucumber (kheera),\nTomatoes (tamatar).",
    "consultNow" : "Dietician"
  },
  "119" : {
    "itemNumber" : 119,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Riboflavin in the growth of a baby and sources?",
    "answer" : "Promotes growth, good vision, and healthy skin. Essential for your baby's bone, muscle, and nerve development.\nFood source:\nCurd (dahi),\nMilk and\nFresh cheese.",
    "consultNow" : "Dietician"
  },
  "120" : {
    "itemNumber" : 120,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Thiamine in the growth of a baby and sources?",
    "answer" : "Converts carbohydrates into energy; essential for brain development. Also, aids heart and nervous system growth.\nFood source:\nSesame (til) seeds,\nPistachios (pista) and\nSoyabeans.",
    "consultNow" : "Dietician"
  },
  "121" : {
    "itemNumber" : 121,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Vitamin A in the growth of a baby and sources?",
    "answer" : "Important for cell growth, eye development, healthy skin and mucous membranes, infection resistance, bone growth, fat metabolism, and red blood cell production.\nFood source:\nCarrots (gajar),\nRipe mango (aam),\nApricot (zard aloo) and\nCantaloupe melon (kharbooja).",
    "consultNow" : "Dietician"
  },
  "122" : {
    "itemNumber" : 122,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Vitamin B6 in the growth of a baby and sources?",
    "answer" : "Aids metabolism of protein, fats, and carbohydrates. Helped form new red blood cells and develop the brain and nervous system\nFood source:\nBanana (kela),\nYam (jimikand, suran),\nChicken breast,\nPeas (matar) and\nBeans (lobia).",
    "consultNow" : "Dietician"
  },
  "123" : {
    "itemNumber" : 123,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Vitamin C in the growth of a baby and sources?",
    "answer" : "Essential for tissue repair and collagen production. Aids in proper growth and strengthens bones and teeth.\nFood source:\nOrange (santara),\nStrawberries,\nBroccoli (hari phool gobhi),\nTomatoes (tamatar) and\nIndian gooseberry (amla).",
    "consultNow" : "Dietician"
  },
  "124" : {
    "itemNumber" : 124,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Vitamin D in the growth of a baby and sources?",
    "answer" : "Helps build bones and teeth. It is also good for the skin and muscles.\nFood source:\nSalmon,\nBoiled egg and\nMargarine.",
    "consultNow" : "Dietician"
  },
  "125" : {
    "itemNumber" : 125,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "What are the benefits of Zinc in the growth of a baby and sources?",
    "answer" : "Helps form organs, skeleton, nerves, and circulatory system.\nFood source:\nProtein containing foods like sunflower (sooraj mukhi) seeds,\nTuna (chura machli) and\nKidney beans (rajma).",
    "consultNow" : "Dietician"
  },
  "126" : {
    "itemNumber" : 126,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "How much folic acid do I need to take during my pregnancy?",
    "answer" : "5gms of Folic acid is recommended in the first 12 weeks of pregnancy.",
    "consultNow" : "Dietician"
  },
  "127" : {
    "itemNumber" : 127,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Early Pregnancy",
    "question" : "Why am I feeling so tired?",
    "answer" : "A constant feeling of fatigue is very common in the early stages of pregnancy. Being pregnant puts a strain on your entire body, which can make you feel exhausted during the day. Here are a few things to consider:\nHave your hemoglobin levels checked. anemia is a common cause of tiredness, especially if you are vegetarian.\nEat regular and healthy meals and snacks. Having refreshing drinks like nimbu pani and coconut water will also help combat tiredness.\nGo easy on the sugar. Biscuits, chocolates, cakes, pastries, Mithai and sweet drinks will only give you a short burst of energy. You may feel hungry again soon after eating them.\nLimit your intake of caffeinated drinks. They may perk you up for a while, but too much caffeine could dehydrate you. The amount of caffeine recommended during pregnancy is no more than 200mg a day. Instead have nutritious drinks such as \"homemade\" lemonade (nimbu pani with honey), aam panna, churches or fresh orange juice.",
    "consultNow" : "Dietician"
  },
  "128" : {
    "itemNumber" : 128,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "What is the type of diet which is given in Epilepsy?",
    "answer" : "Ketogenic diet is given in epilepsy, i.e., High fat, low carbohydrate with limited calories.",
    "consultNow" : "Dietician"
  },
  "129" : {
    "itemNumber" : 129,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "What is Ketogenic diet?",
    "answer" : "The ketogenic diet is a special high-fat, low-carbohydrate diet that helps to control seizures in some people with epilepsy.",
    "consultNow" : "Dietician"
  },
  "130" : {
    "itemNumber" : 130,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Why fat is given more in amounts?",
    "answer" : "Usually the body uses carbohydrates (such as sugar, bread, pasta) for its fuel, but because the ketogenic diet is very low in carbohydrates, fats become the primary fuel instead",
    "consultNow" : "Dietician"
  },
  "131" : {
    "itemNumber" : 131,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Is Omega 3 useful?",
    "answer" : "Low doses of Omega 3 can reduce the seizure frequency in epilepsy.",
    "consultNow" : "Dietician"
  },
  "132" : {
    "itemNumber" : 132,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "What are the sources of Omega 3 rich foods?",
    "answer" : "Omega-3 fatty acids can be obtained through consumption of oily fish - such as a trout, mackerel, tuna, herring, sardines and salmon - and fish oil supplements",
    "consultNow" : "Dietician"
  },
  "133" : {
    "itemNumber" : 133,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Why fats are used more than carbohydrates?",
    "answer" : "When the body burns (metabolizes) fat, it creates substances called ketones. The ketogenic diet tries to force the body to use more fat for energy instead of sugar (glucose) by increasing fat and restricting carbohydrates.",
    "consultNow" : "Dietician"
  },
  "134" : {
    "itemNumber" : 134,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "How Ketogenic diet should be started?",
    "answer" : "A person usually has to fast the day and night before starting the diet. The diet is gradually introduced over several days, so that the body can get used to the dramatic change. The person may feel tired and lack energy during the first few days.",
    "consultNow" : "Dietician"
  },
  "135" : {
    "itemNumber" : 135,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Can ketogenic diet followed by our ownselfs?",
    "answer" : "No, because it requires continous monitering,As carbohydtares sgould be given only 20 gms per day they need to be properly planned and should get those from only fruits and vegetables.So it would be a risk if you follow it directly on your own as the amount of tooth paste which you use for brushing will also contain some amount of calories. .",
    "consultNow" : "Dietician"
  },
  "136" : {
    "itemNumber" : 136,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Why is ketogenic diet is necessary ,cant epilepsy cured with medication?",
    "answer" : "The ketogenic and other diets used to treat people who have severe seizures and who have not responded to antiepileptic medicines. In fact, each and every disease condition needs a proper diet for the patient to recover soon.",
    "consultNow" : "Dietician"
  },
  "137" : {
    "itemNumber" : 137,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Is there any other diet which is easy to follow?",
    "answer" : "Yes,called as medium chain triglyceride (MCT) diet.In this diet take an oil supplement instead of relying on food for the fat in the diet. This can make the diet easY, because less total fat is needed from food and the person can eat more protein and carbohydrates.",
    "consultNow" : "Dietician"
  },
  "138" : {
    "itemNumber" : 138,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Can we follow any other diet apart from ketognic and MCT diet?",
    "answer" : "Yes, You can follow modified Atkins diet. The Atkins diet is known as a high-protein, low-carbohydrate diet. The modified Atkins diet for people with epilepsy is similar to the ketogenic diet but allows for a little more flexibility in protein, fluid, and calorie amounts.",
    "consultNow" : "Dietician"
  },
  "139" : {
    "itemNumber" : 139,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Do we have any other diet in epilepsy?",
    "answer" : "Yes, but this is called a low glycemic index. This is the least restrictive special diet for epilepsy. It does not restrict fluids or protein and people do not need to be so strict about the calories or the amount of fat they eat. People on this diet still eat much more fat than in a typical diet, but carbohydrates are not as limited.",
    "consultNow" : "Dietician"
  },
  "140" : {
    "itemNumber" : 140,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Why Does the Ketogenic Diet Work?",
    "answer" : "By reducing the number of carbohydrates a person eats, the body is forced to burn fat for energy, a process called ketosis. This ketosis is the same process that kicks in when someone is fasting -- on purpose or because of starvation. Fasting has been a traditional seizure treatment for centuries.",
    "consultNow" : "Dietician"
  },
  "141" : {
    "itemNumber" : 141,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "What are the special cares to be taken for children who have epilepsy?",
    "answer" : "In children with epilepsy should be continously monitered by their parents or care takers,its good if you have a personal dietician who will be continously monitering the child and calculate appropriate calories.\nChildren in schools may have something else which is offered by their friends so this should be keenly observed.\nWhen parents are not at home they tend to eat which is avoided for them so this should be avoided.\nTo over come all these issues, child should be made understand what type of diet he need to eat what are benefits and losses,through which child gets to know about the importance and he might coorporate with you in curing.\nChildren with epilepsy will feel hungry many times a day so special care should be taken for that.",
    "consultNow" : "Dietician"
  },
  "142" : {
    "itemNumber" : 142,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "What is ratio difference between Ketogenic diet and modified Atkins diet?",
    "answer" : "Ketogenic diet: 3:1 or 4:1 [fat]:[carbohydrate 1 protein] ratio by weight, with 87-90% of calories derived from fat",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Modified Atkins diet: 0.9:1 [fat]:[carbohydrate 1 protein] weight ratio, with approximately 50% of calories derived from fat.",
    "consultNow" : "Dietician"
  },
  "143" : {
    "itemNumber" : 143,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "What types of foods should be avoided in Epilepsy?",
    "answer" : "Avoid high glycemic foods like White rice.White bread,Soft drinks,White pasta,sago,Chips,Pizza,cakes,Banana,Mango,Raisins,Dates,Avoid Monosodium glutamate added foods as it acts as flavouring and preservating agent avoid it.",
    "consultNow" : "Dietician"
  },
  "144" : {
    "itemNumber" : 144,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "What type of carbohydrates can be taken?",
    "answer" : "Eat Low glycemic foods like whole grains, brown rice, whole-wheat bread and pasta, legumes, curd,nuts and beans.",
    "consultNow" : "Dietician"
  },
  "145" : {
    "itemNumber" : 145,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Will my child gain weight from eating so much fat?",
    "answer" : "On this diet, the amount of food is carefully weighed so that your child will eat all the calories she needs for good health, but not so many that she gains weight. The fat content of the food doesn’t affect weight if you strictly limit total calories.",
    "consultNow" : "Dietician"
  },
  "146" : {
    "itemNumber" : 146,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "How long should I sit with my toddler before I give up trying to get him to finish all his food?",
    "answer" : "Some parents report that mealtimes on the diet can wrap up in twenty minutes, while others say they have to sit with their children for two hours before all the food is finished.\nA child must finish all the food because the meal is put together in amounts that will give him the right balance between fat, protein, and carbohydrates. If it’s not all eaten, the balance is lost, and the child may have a seizure.\nSince this is important, parents often try tricks like playing a video during meals or playing games to distract the child while they’re encouraging the child to eat.\nParents who’ve been successful advise others to use the diet creatively, and try to offer something new and special for each meal to keep the child’s interest. Older children, who know that the diet is helping to keep their seizures away, may be more cooperative.",
    "consultNow" : "Dietician"
  },
  "147" : {
    "itemNumber" : 147,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Will taking prescription or other medicines affect the diet?",
    "answer" : "All medicines and pharmaceuticals, from toothpaste to cough syrup to vitamins to prescription medicine, must, whenever possible, be free of sugar and other carbohydrates. Remind your doctor to prescribe all needed medications in sugar-free and carbohydrate-free forms. Read labels carefully and check with your pharmacist.",
    "consultNow" : "Dietician"
  },
  "148" : {
    "itemNumber" : 148,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "Does the diet cause a problem with high cholesterol?",
    "answer" : "When children are switched from a normal diet to a 90 percent fat diet, both cholesterol and triglyceride levels can go up. However, the ketogenic diet is not a lifetime diet. Children stay on it about two years. When weaned off the diet, most children return to their pre-diet levels.",
    "consultNow" : "Dietician"
  },
  "149" : {
    "itemNumber" : 149,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "What can my child eat at school?",
    "answer" : "Your dietitian will help you plan meals that can go to school with your child. Tuna, egg, or chicken salads are easy to carry in small plastic containers. Warm or chilled food can be carried in a small cooler or insulated bag, or wrapped in foil.\nThere are many celebrations at school that involve food. It’s very important for all the teachers and aides to know that your child cannot have the same treats that the other children get. You may want to ask school personnel to let you know in advance when treats are planned so that you can send a keto-correct treat for your child.\nIt’s a good idea to have a meeting with your child’s teachers and everyone your child comes in contact with at the beginning of every school year. Make them understand that even half a cookie or a bite of cupcake can lead to seizures, hospital, and the loss of seizure control.\nPost a notice at school: This child must not be fed anything not brought from home.",
    "consultNow" : "Dietician"
  },
  "150" : {
    "itemNumber" : 150,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "How does my child explain the diet to his friends?",
    "answer" : "Young children say, “I’m a special kid on a special diet.” Older children can impress their friends by telling them about all the shakes, cheesecakes, pancakes and omelets they get to eat on their special diet.",
    "consultNow" : "Dietician"
  },
  "151" : {
    "itemNumber" : 151,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Epilepsy",
    "question" : "What about special holidays like birthdays and Thanks giving?",
    "answer" : "The dietitian will be able to give you special recipes to keep the mood festive while allowing children to stick to the diet.",
    "consultNow" : "Dietician"
  },
  "152" : {
    "itemNumber" : 152,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "GERD/Reflux Esophagitis",
    "question" : "I am pregnant and have terrible heartburn. Is there anything I can do to get relief?",
    "answer" : "Here are some ways you can reduce your heartburn during pregnancy:\nEat several small meals each day instead of three large ones.\nEat slowly.\nAvoid fried, spicy, or rich foods, or any foods that seem to increase your heartburn.\nDon't lie down directly after eating.\nKeep the head of your bed higher than the foot of your bed.",
    "consultNow" : "Dietician"
  },
  "153" : {
    "itemNumber" : 153,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "GERD/Reflux Esophagitis",
    "question" : "What type of foods can cause GERD?",
    "answer" : "Foods such as fried foods, chocolate, garlic, onions, caffeine, citrus fruits, tomatoes, spicy foods, and mint), eating large meals, eating before bedtime can cause GERD",
    "consultNow" : "Dietician"
  },
  "154" : {
    "itemNumber" : 154,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "GERD/Reflux Esophagitis",
    "question" : "What are the life style changes should be done to avoid GRED?",
    "answer" : "Don't eat within 3 hours of bedtime. This allows your stomach to empty and acid production to decrease. If you don't eat, your body isn't making acid to digest the food.\nSimilarly, don't lie down right after eating at any time of day.\nDon't eat large meals, especially before bedtime. Eating a lot of food at one time increases the amount of acid needed to digest it. Eat smaller, more frequent meals throughout the day.\nAvoid fatty or greasy foods, chocolate, caffeine, mints or mint-flavored foods, spicy foods, citrus, and tomatoes. These foods can irritate the already damaged lining of the esophagus.\nAvoid drinking alcohol without eating food, and definitely avoid drinking alcohol before bed. Alcohol increases the likelihood of acid backing up from your stomach.\nStop smoking. Smoking weakens the lower esophageal sphincter and increases reflux.\nLose excess weight. Overweight andobese people are much more likely to have bothersome reflux than people of healthy weight.\nmaintaining a good posture (avoid stooping and slouching)",
    "consultNow" : "Dietician"
  },
  "155" : {
    "itemNumber" : 155,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "GERD/Reflux Esophagitis",
    "question" : "Is baking soda an effective or recommended remedy to stop the burning sensation in the chest due to acid reflux?",
    "answer" : "Though baking soda can help alleviate the burning sensation from acid reflux, it is not a permanent solution, on a temporary fix.",
    "consultNow" : "Dietician"
  },
  "156" : {
    "itemNumber" : 156,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "GERD/Reflux Esophagitis",
    "question" : "Are there any types of foods or drinks that can help lessen the discomfort and acid reflux during a heartburn flare?",
    "answer" : "Yes, though most people know what food causes heartburn, few know what is good to consume, instead of or in addition to antacids, such as:Banana,Coconut water,Water melon,",
    "consultNow" : "Dietician"
  },
  "157" : {
    "itemNumber" : 157,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Heart burn",
    "question" : "How to eat well at home and dine out sensibly ?",
    "answer" : "You don't have to give up all of your favorite foods to avoid heartburn. A well-stocked pantry with heartburn-friendly foods is key. So is making the right choices at restaurants. Heartburn foods that trigger symptoms, such as fats, oils, chocolate, or citrus products can be less tempting when there's a supply of \"safe\" ingredients in your kitchen cabinets. The added benefit of a good heartburn diet is healthier eating for the entire family.",
    "consultNow" : "Dietician"
  },
  "158" : {
    "itemNumber" : 158,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Heart burn",
    "question" : "What foods should a person avoid if he or she has heartburn ?",
    "answer" : "Eating certain foods like onions, peppermint ,high-fat foods as fast foods, onion rings or French fries,sauces, gravies, and salad dressings,sweets,drinking alcohol,Caffeinated beverages such as coffee, tea, colas,ice tea and chocolate,Tomatoes, citrus fruits, or juices,Vinegar,After-dinner mints (peppermint can exacerbate heartburn) should be avoided.",
    "consultNow" : "Dietician"
  },
  "159" : {
    "itemNumber" : 159,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Heart burn",
    "question" : "Will eating dinner in the early times help in heart burn?",
    "answer" : "Yes,Finish eating your final meal of the day at least two to three hours before going to bed. The added time will give your food and acid levels a chance to clear before lying down—the position in which heartburn is most likely to occur.",
    "consultNow" : "Dietician"
  },
  "160" : {
    "itemNumber" : 160,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Heart burn",
    "question" : "What type of snacks should be taken in heart burn?",
    "answer" : "Go for light snacks like veg salads,fruits,Biscuits,Popcorn,sandwich,Butter milk,Cococnut water,Sago porrigde,Vermicelli,raisins.",
    "consultNow" : "Dietician"
  },
  "161" : {
    "itemNumber" : 161,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Heart burn",
    "question" : "Is food the only cause of heartburn?",
    "answer" : "No,Heartburn is actually caused by a problem with the upper digestive system. And while certain foods may trigger heartburn for some people, they are not the reason it happens. Heartburn is a physical problem.",
    "consultNow" : "Dietician"
  },
  "162" : {
    "itemNumber" : 162,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Heart burn",
    "question" : "Can you tell me how much acid is in bananas? My doctor told me not to eat them because they could cause acid reflux problems?",
    "answer" : "Ripe bananas have a pH of about 5, making them a mildly acidic food. That does not mean that bananas cause heartburn or reflux",
    "consultNow" : "Dietician"
  },
  "163" : {
    "itemNumber" : 163,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Heart burn",
    "question" : "I love half a banana in my cereal. I’ve been eating this for years with no trouble. Does it make sense for me to stop eating my daily half-banana? I have no symptoms of heartburn?",
    "answer" : "Ripe bananas have a pH of about 5, making them a mildly acidic food. That does not mean that bananas cause heartburn or reflux",
    "consultNow" : "Dietician"
  },
  "164" : {
    "itemNumber" : 164,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Heart burn",
    "question" : "I have serious heartburn several times during the day and night. I have found that a teaspoonful of baking soda in a little water gives me fast relief. Is this harmful? I have been taking it for several months now.",
    "answer" : "This is a fairly common a scenario. While I am happy that the baking soda works for you, there are a couple of problems with this approach.First of all, you have discomfort before realizing that you need to take something. There are excellent treatments available that could virtually eliminate the heartburn from occurring in the first place.Secondly, the sodium content of baking soda is not healthy, particularly for people with heart problems, high blood pressure, or kidney disease. There are other antacids that will work just as well with fewer consequences.",
    "consultNow" : "Dietician"
  },
  "165" : {
    "itemNumber" : 165,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Heart burn",
    "question" : "I have GERD and was recently diagnosed with Barrett’s esophagus. I am working with my doctor to keep it under control. Is there any diet advice for Barrett’s esophagus? Also, I used to love eating chocolate but now avoid it as it provokes heartburn. Is it OK to eat carob as a substitute for chocolate?",
    "answer" : "When carob bean gum is used as the thickener it decreases acid reflux. It would appear that carob may be safe for heartburn sufferers, as a chocolate alternative.I like to use a common sense approach when making dietary recommendations. It is important to avoid overeating. Large meals distend the stomach and increase gastric acid production. Patients with GERD should not eat late, as eating within 2–3 hours of bedtime increases acid reflux at night. Specific foods such as caffeine, citrus juice, sodas, chocolate, fried foods, fatty foods, peppermints, tomato sauces, or alcohol may aggravate reflux.",
    "consultNow" : "Dietician"
  },
  "166" : {
    "itemNumber" : 166,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What Type of Diet Should I Follow if I Have High Blood Pressure ?",
    "answer" : "A healthy diet, such as the DASH (Dietary Approaches to Stop Hypertension) diet, is effective in helping to lower high blood pressure.\nEating more fruits, vegetables, and low-fat dairy foods\nEating less of foods that are high in saturated fat and cholesterol, such as fried foods\nEating more whole grain products, fish, poultry, and nuts\nEating less red meat and sweets\nEating foods that are high inmagnesium, potassium, andcalcium\nEating foods with less sodium",
    "consultNow" : "Dietician"
  },
  "167" : {
    "itemNumber" : 167,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What changes do i need to make?",
    "answer" : "Lifestyle changes include:\nlosing weight\nquitting smoking\neating a healthy diet, such as the Dietary Approaches to Stop Hypertension (DASH) diet\nreducing the amount of salt in your diet\ngetting regular aerobic exercise (such as brisk walking)\nlimiting alcohol (no more than 2 drinks per day for men, and 1 drink per day for women and persons 65 years and older)",
    "consultNow" : "Dietician"
  },
  "168" : {
    "itemNumber" : 168,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "If I have diabetes do I have to be more careful in my diet to control my high blood pressure?",
    "answer" : "Yes,You need to be very careful as you need to moniter on your food intake",
    "consultNow" : "Dietician"
  },
  "169" : {
    "itemNumber" : 169,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "How much salt (sodium) should I cut out of my diet?",
    "answer" : "Sodium/Salt intake depends on an individuals age and level of hypertension,So its better to consult a diettician who will suggest you the appropriate amount to be taken.",
    "consultNow" : "Dietician"
  },
  "170" : {
    "itemNumber" : 170,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What are some ways to reduce salt in my diet?",
    "answer" : "Here are tips to reduce salt in your diet.\nBuy Fresh fruits and vegetables instead of already cut and packed vegetables ,as to preserve them they add salt to fruits and vegetables .\nUse fresh cut meat ,poultry,fish rather than cut and packed ones.\nUse herbs,spices and salt-free seasoning.\nCook rice,or any cereal without adding any salt and avoid instant or ready to mix packets as they contain added salt.\nPickles, chutneys, poppadum’s, salted fish, salted nuts etc. are very high in sodium. People with hypertension must take note that table salt, baking powder, and baking soda are sources of sodium and therefore must be used carefully.\nCut back on frozen dinners, pizza, packaged mixes, canned soups or broths, and salad dressings—these often have a lot of sodium.\nLearn to read the nutrition labels on food packages.",
    "consultNow" : "Dietician"
  },
  "171" : {
    "itemNumber" : 171,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What is the major source of the salt, or sodium, in food?",
    "answer" : "Most of the salt that we eat comes from processed foods -- for example, canned or processed meat, baked goods, and certain cereals, and foods with soy sauce, seasoned salts, monosodium glutamate (MSG), and baking soda. Food from fast food restaurants, frozen foods, and canned foods also tend to be higher in sodium.",
    "consultNow" : "Dietician"
  },
  "172" : {
    "itemNumber" : 172,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Can I lose weight following the DASH eating plan?",
    "answer" : "To lose weight, aim for a calorie level that is lower than what you usually eat. You can make it even lower in calories by replacing higher calorie foods, such as sweets, with more fruits and vegetables. Combining the DASH eating plan with a regular physical activity program will help you stay at a healthy weight for the long term.",
    "consultNow" : "Dietician"
  },
  "173" : {
    "itemNumber" : 173,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What is the DASH Eating Plan?",
    "answer" : "DASH\" stands for \"Dietary Approaches to Stop Hypertension.\" This is the name of a clinical study that tested the effects of nutrients in food on blood pressure. Study results indicated that you can reduce high blood pressure by following an eating plan that emphasizes fruits, vegetables, and fat-free or low-fat milk and milk products, and that is low in saturated fat, cholesterol, total fat, and added sugars.",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "The DASH eating plan also includes whole grains, poultry, fish, and nuts, and has reduced amounts of red meats, sweets, added sugars, and beverages containing sugars.",
    "consultNow" : "Dietician"
  },
  "174" : {
    "itemNumber" : 174,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What is the relationship between blood pressure and body weight?",
    "answer" : "Blood pressure rises as body weight increases. Losing even 5kgs can lower blood pressure and it has the greatest effect for those who are overweight and already have hypertension. If you are overweight or obese, do workout reqularly for atleast 30 mins you will find the change in your Blood pressure levels.",
    "consultNow" : "Dietician"
  },
  "175" : {
    "itemNumber" : 175,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "If I need to lose weight, what's a good approach?",
    "answer" : "To loose your weight,you need to follow both diet and physical activity ,you need to count calories,what you eat and spend,it would be better if you take a dieticians advice she would help you in planning a perfect diet.",
    "consultNow" : "Dietician"
  },
  "176" : {
    "itemNumber" : 176,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "How do I know if I need to lose weight to prevent or control my blood pressure?",
    "answer" : "Two key measures are used to determine if someone is overweight or obese. These are body mass index, or BMI, and waist circumference.It can be done at a diettician consultation",
    "consultNow" : "Dietician"
  },
  "177" : {
    "itemNumber" : 177,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Is potassium helpful? Should I take a supplement?",
    "answer" : "It is true that eating potassium helps to lower blood pressure in part by counteracting the effects of sodium in “salt” and influencing the amount of fluid in bodies. For people eating a healthy diet, it is very rarely necessary to take potassium supplements and they are not recommended unless they have been prescribed by a doctor. This is because too much potassium can be harmful, especially if you have kidney problems or you are taking medicines that might already have elevated the amount of potassium in your body.",
    "consultNow" : "Dietician"
  },
  "178" : {
    "itemNumber" : 178,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Why is obesity linked to blood pressure?",
    "answer" : "It is not completely understood how obesity is linked to high blood pressure, but it is certainly true that being overweight increases your blood pressure.",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Your blood pressure is controlled by a number of different pathways from how hard and fast your heart beats, through the release of different hormones, to how much fluid your kidneys remove from your body. Carrying too much fat appears to affect one of the hormone pathways the renin-angiotensin system causing blood pressure to rise. It also interferes with the kidneys’ abilities to remove fluid, and this too causes blood pressure to rise. In addition, overweight people are more likely to consume more salt.",
    "consultNow" : "Dietician"
  },
  "179" : {
    "itemNumber" : 179,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Does eating oily fish help with high blood pressure?",
    "answer" : "Oily fish, for example sardines, trout, salmon and mackerel, is rich in ‘omega 3’ fatty acids when taken in large amounts (3g daily) do show a small reduction in blood pressure. However, such a large amount could be difficult to take every day.However, eating oily fish can help to regulate your cholesterol levels. This means that your overall risk of a heart attack or stroke may come down. Try to eat fish at least twice a week, including one portion of oily fish.",
    "consultNow" : "Dietician"
  },
  "180" : {
    "itemNumber" : 180,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "I use a bread maker, but it says I need to use salt - do I?",
    "answer" : "Salt is totally unnecessary for making bread. Its main use in bread is to slow down the fermentation of the yeast so, without it, the bread rises quicker. Once you are used to the taste, it is fantastic the only problem is you will want to eat too much of it!",
    "consultNow" : "Dietician"
  },
  "181" : {
    "itemNumber" : 181,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What are trans fatty acids and how bad are they?",
    "answer" : "Fats are made up of two main types of fatty acids: saturated and unsaturated fatty acids. Unsaturated fatty acids are found in liquid vegetable oils, while saturated fats are found in solid animal fats.To turn liquid vegetable oils into solid fat for margarines, biscuits, cakes, and other processed foods, hydrogen is added (known as hydrogenation). During this process, trans fatty acids may be formed. Trans fatty acids raise the level of “bad” LDL cholesterol in your blood, increasing the risk of heart disease.",
    "consultNow" : "Dietician"
  },
  "182" : {
    "itemNumber" : 182,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Why might dairy products be helpful in lowering blood pressure?",
    "answer" : "Dairy products, as long as they are low in sodium, provide the best balance of calcium, potassium and magnesium for controlling blood pressure. Calcium enters body cells and influences how blood vessels tighten and relax. Magnesium supports muscles, nerves and heart rhythm. Potassium works with calcium and magnesium to keep heart muscle toned, and strengthens arteries to endure as we age. Potassium also acts like a bouncer, barring sodium from entering places where its sidekick, water, can cause unwanted swelling. Each of these nutrients alone plays a small role, but together their impact is huge. Aim for two to three servings of dairy a day: one cup of low-fat milk or nonfat yogurt counts as a serving.",
    "consultNow" : "Dietician"
  },
  "183" : {
    "itemNumber" : 183,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "I've heard that dark chocolate helps lower blood pressure. Is this true?",
    "answer" : "It’s true that some research suggests cocoa may help lower blood pressure. It appears that a compound in cocoa, called epicatechin, boosts nitric oxide, a substance that has been shown to be crucial to healthy blood vessels. Plentiful levels of nitric oxide help keep blood pressure from climbing. These findings probably aren’t a reason to start eating chocolate if you don’t already. You’ll get many of the same disease-fighting substances drinking tea or wine and eating fruits and vegetables, which are loaded with antioxidants. Chocolate, because it is relatively high in fat and is usually sweetened with sugar, does pack a fair amount of calories.",
    "consultNow" : "Dietician"
  },
  "184" : {
    "itemNumber" : 184,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "I have high blood pressure so I try to avoid alcohol, but I hear that red wine has heart-healthy benefits. Can I get some of these by drinking grape juice?",
    "answer" : "Dark grape juice contains potent antioxidants called polyphenols, which include resveratrol, a compound found in the skin of red and purple grapes that is suspected to be responsible for heart-healthy benefits in red wine.Grape juice (dark, not white) can help reduce blood pressure for people with hypertension.",
    "consultNow" : "Dietician"
  },
  "185" : {
    "itemNumber" : 185,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What to eat in DASH diet?",
    "answer" : "DASH diet include lots of whole grains, fruits, vegetables and low-fat dairy products. The DASH diet also includes some fish, poultry and legumes. You can eat red meat, sweets and fats in small amounts. The DASH diet is low in saturated fat, cholesterol and total fat.",
    "consultNow" : "Dietician"
  },
  "186" : {
    "itemNumber" : 186,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "How does caffeine affect blood pressure?",
    "answer" : "Caffeine can cause a short, but dramatic increase in your blood pressure, even if you don't have high blood pressure.caffeine could block a hormone that helps keep your arteries widened.caffeine causes your adrenal glands to release more adrenaline, which causes your blood pressure to increase.",
    "consultNow" : "Dietician"
  },
  "187" : {
    "itemNumber" : 187,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What makes the DASH diet help lower my blood pressure?",
    "answer" : "The answer appears to lie in a balanced diet rich in milk products, vegetables and fruits which provides calcium, potassium and magnesium. All these nutrients have long been associated with a reduced risk of high blood pressure. However, it is probably the interaction between these crucial nutrients and other, yet unidentified, compounds in vegetables, fruits, and milk products that makes these foods so effective.",
    "consultNow" : "Dietician"
  },
  "188" : {
    "itemNumber" : 188,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Why don't I just take supplements?",
    "answer" : "Individual nutrients consumed in the form of supplements may not have the same blood pressure lowering effects as foods. Food has many other components whose interactions and positive effects on hypertension are not yet fully understood.",
    "consultNow" : "Dietician"
  },
  "189" : {
    "itemNumber" : 189,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Can fat in my diet and increase my blood pressure?",
    "answer" : "While you may have to watch your fat intake for other reasons,But the dietary fat, of any kind, has little effect on blood pressure.",
    "consultNow" : "Dietician"
  },
  "190" : {
    "itemNumber" : 190,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What are the current recommendations for salt intake?",
    "answer" : "Current salt intake for Hypertension is 2300mg/day",
    "consultNow" : "Dietician"
  },
  "191" : {
    "itemNumber" : 191,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "I’ve heard that eating too much salt can be harmful, but I thought that the kidneys simply excrete excess salt. If my kidneys are functioning normally, can I eat as much salt as I like?",
    "answer" : "No—excess salt consumption raises your blood pressure. Salt would rapidly be fatal if the kidneys could not excrete it as fast as you eat it. But, the kidneys excrete salt faster at a higher blood pressure, and the ability of the kidneys to raise blood pressure provides powerful and life-saving protection against the accumulation of a dangerous backlog of salt. However, high blood pressure (also known as ‘hypertension’) unfortunately has a number of dangerous long-term health outcomes, and greatly increases the risk of both stroke and heart disease. Upper Limit’ for sodium intake of 2300 mg per day. Intakes above this level are regarded as likely to cause harm.",
    "consultNow" : "Dietician"
  },
  "192" : {
    "itemNumber" : 192,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Does hypertension have other causes aside from eating too much salt?",
    "answer" : "Hypertension is also associated with overweight and obesity, alcohol intake and being sedentary. However, some people who have none of these other risk factors still develop high blood pressure when their salt intake is too high, making salt the ‘prime suspect’.",
    "consultNow" : "Dietician"
  },
  "193" : {
    "itemNumber" : 193,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Is there any reason to avoid salt when my blood pressure is normal?",
    "answer" : "The rise of blood pressure that usually occurs with age is the most common and most dangerous of at least 25 health problems caused or aggravated by salt. People who are lucky enough to have normal blood pressure should adopt a low-salt diet to prevent hypertension developing later in life—lowering salt intake after a rise in blood pressure has occurred will not always have a reverse effect on blood pressure.",
    "consultNow" : "Dietician"
  },
  "194" : {
    "itemNumber" : 194,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Do low-salt foods provide enough salt to meet the needs of the growing child?",
    "answer" : "es—breast milk is proof of that. Growth is most rapid for the first four to six months of life, when infants usually double their birth weight. They do this with breast milk which contains only 14 mg of sodium per 100 g of breast milk. Low-salt foods may have up to 120 mg of sodium per 100 g of food, almost ten times more than the baby is receiving with the natural infant diet.",
    "consultNow" : "Dietician"
  },
  "196" : {
    "itemNumber" : 196,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "When my diet is low in salt I would like to be able to prove it. Can my doctor do this with a blood test?",
    "answer" : "No, a blood test cannot measure salt intake because the kidneys continually regulate the sodium content of the blood and keep it constant within very narrow limits. The kidneys transfer excess salt to the urine. A medical laboratory can estimate your salt intake per day by measuring the sodium in a 24-hour collection of urine.",
    "consultNow" : "Dietician"
  },
  "197" : {
    "itemNumber" : 197,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What sort of food is low enough in salt to comply with the dietary guidelines?",
    "answer" : "Every fresh food plant or animal is low in salt fresh fruit, vegetables and nuts, together with lean fresh meat and/or fish. This ‘natural’ diet is believed by many nutritionists to be the most health-promoting diet of all.Processed foods are the big problem when trying to adhere to the salt guideline because most processed foods have salt added to them. Look for ‘low-salt’ or ‘no added salt’ on the label of processed products.",
    "consultNow" : "Dietician"
  },
  "198" : {
    "itemNumber" : 198,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Why do virtually all professional chefs and caterers agree that salt is essential for good cuisine?",
    "answer" : "Because they and most of their clientele have salt-adapted palates. Low-salt foods may taste bland to most people now because the taste buds of most people have adjusted to a high-salt diet. However, taste buds are ‘flexible’ with respect to salt – they can adjust to both higher and lower salt intakes. By gradually reducing salt intake over a period of several months, the palate will alter to the extent that normal processed foods (i.e. those with added salt) will start to taste ‘too salty’.",
    "consultNow" : "Dietician"
  },
  "199" : {
    "itemNumber" : 199,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Why do we like salt if it is harmful?",
    "answer" : "The taste buds can be ‘trained’ to become accustomed to a wide range of salt levels in food.Historically, the populations of western nations developed a taste for salt over many centuries when salting was one of the few ways in which foods could be preserved. Because people in western nations became habituated to the taste of very salty foods, most people now prefer the salty taste, even though it is entirely unnatural for humans (or any other mammals) to maintain a diet that is high in salt. The unavoidable trade-off of salt preservation is that palates adapted to high concentrations of salt require salt as a condiment, due to the fact that unsalted foods seem tasteless to those who have developed a liking for a very salty taste. Extricating ourselves from the disastrous health consequences of this dilemma is a major public health challenge of the 21st century.",
    "consultNow" : "Dietician"
  },
  "200" : {
    "itemNumber" : 200,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Is there any reason to avoid salt when my blood pressure is normal?",
    "answer" : "The rise of blood pressure that usually occurs with age is the most common and most dangerous of at least 25 health problems caused or aggravated by salt. People who have normal blood pressure should adopt a low-salt diet to prevent hypertension developing later in life—lowering salt intake after a rise in blood pressure has occurred will not always have a reverse effect on blood pressure.",
    "consultNow" : "Dietician"
  },
  "201" : {
    "itemNumber" : 201,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Does hypertension have other causes aside from eating too much salt?",
    "answer" : "Hypertension is also associated with overweight and obesity, alcohol intake and being sedentary. However, some people who have none of these other risk factors still develop high blood pressure when their salt intake is too high, making salt the ‘prime suspect’.",
    "consultNow" : "Dietician"
  },
  "202" : {
    "itemNumber" : 202,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "What are the current recommendations for salt intake?",
    "answer" : "Daily recommendations for salt are 1 to 3 years – 2g of salt a day (0.8g sodium),4 to 6 years – 3g of salt a day (1.2g sodium),7 to 10 years – 5g of salt a day (2g sodium),11 years and over – 6g of salt a day (2.4g sodium)",
    "consultNow" : "Dietician"
  },
  "203" : {
    "itemNumber" : 203,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Why is it necessary to take Iodine in salt?",
    "answer" : "People who fail to obtain adequate iodine in their diet may develop a condition known as ‘goitre’, a swelling of the thyroid gland in the neck. Iodine deficiency can also lead to weight gain, lethargy, intolerance to cold, increased blood cholesterol, mental slowness and reduced heart function.So to avoid all these government has introduced to add Iodine in salt which is called iodised salt through which the daily recommendations of salt are fullfilled.",
    "consultNow" : "Dietician"
  },
  "204" : {
    "itemNumber" : 204,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Can you get iodine from a supplement? Is this dangerous?",
    "answer" : "Iodine supplements may be appropriate for individuals who do not eat seafood, animal flesh, animal products or iodised salt, or for those who have higher iodine requirements (such as pregnant or breastfeeding women). Although most individuals can tolerate iodine at a wide range of intake level, exposure to extremely high levels (above 1,000 micrograms per day) can potentially be harmful. Be careful to only take supplements that state the iodine content on the label so that you can be sure of how much iodine you are consuming. Before starting a supplement, always check with your doctor/Dietician to ensure that the iodine content of the supplement is appropriate.",
    "consultNow" : "Dietician"
  },
  "205" : {
    "itemNumber" : 205,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypertension",
    "question" : "Is iodine added to other foods aside from salt?",
    "answer" : "Because health authorities recommend that salt intake should be minimised (largely to reduce the risk of high blood pressure), lack of iodine in the diet should not be overcome by recommending an increase in consumption of iodised salt. Adding iodine to other widely consumed and health-promoting foods may be a more appropriate option.Sea Food,Iodized Sodium,Kelp,Vegetables,Strawberries,Milk, Yogurt and Cheese,Dried seaweeds,Baked potatoes,Sea cod,Shrimp,Turkey breast in baked form,Navy beans are good sources of Iodine.",
    "consultNow" : "Dietician"
  },
  "206" : {
    "itemNumber" : 206,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Is there any truth to the hypothyroidism diet?",
    "answer" : "Hypothyroidism occurs when levels of the two thyroid hormones, triiodothyronine (T3) and thyroxine (T4), are too low. Although changing your diet alone isn’t enough to restore normal thyroid hormone levels, avoiding some foods and eating more of others can help improve your body’s absorption of the hormones.",
    "consultNow" : "Dietician"
  },
  "207" : {
    "itemNumber" : 207,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "What the foods which can impair the absorption of synthetic thyroid hormone ?",
    "answer" : "Avoid taking your thyroid hormone at the same time as:",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Walnuts",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Soybean flour",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Cottonseed meal",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Iron supplements or multivitamins containing iron",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Calcium supplements",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Antacids that contain aluminum or magnesium",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Some ulcer medications, such as sucralfate (Carafate)",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "Some cholesterol-lowering drugs, such as those containing cholestyramine (Questran) and colestipol (Colestid)",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "To avoid potential interactions, eat these foods or use these products several hours before or after you take your thyroid medication.",
    "consultNow" : "Dietician"
  },
  "208" : {
    "itemNumber" : 208,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "I have Hypothyroid.what type of foods should I avoid?",
    "answer" : "Many common foods and supplements contain compounds that interfere with thyroid functions. In general, it’s best to avoid the following foods and supplements like Soy,Iodine rich foods,Iron and Calcium supplements,High fiber foods and vegetables like broccoli, cabbage, spinach, kale, and Brussels sprouts.Caffeine, tobacco, and alcohol can also influence the effectiveness of thyroid medicine.",
    "consultNow" : "Dietician"
  },
  "209" : {
    "itemNumber" : 209,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "I have Hypothyroid.What type of foods should I eat in this condition?",
    "answer" : "You shoud eat Antioxidant-rich fruits and vegetables,selenium-rich foods, such as sunflower seeds or Brazil nuts and Tyrosine.",
    "consultNow" : "Dietician"
  },
  "210" : {
    "itemNumber" : 210,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can you tell me why should I avoid Soy?",
    "answer" : "phytoestrogens in soybeans and soy-rich foods may inhibit the activity of an enzyme that makes the thyroid hormones. One study found that women who consumed soy supplements were three times more likely to develop hypothyroidism.",
    "consultNow" : "Dietician"
  },
  "211" : {
    "itemNumber" : 211,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can you tell me why should I avoid Iron rich foods?",
    "answer" : "Some forms of hypothyroidism are caused by a lack of sufficient iodine. In such cases, using iodized salt or iodine-enriched foods can be beneficial. But eating too much iodine can have the opposite effect and suppress thyroid gland activity.",
    "consultNow" : "Dietician"
  },
  "212" : {
    "itemNumber" : 212,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can you tell me why should I avoid I ron and calcium supplements?",
    "answer" : "Taking iron or calcium supplements can also change the effectiveness of many thyroid medications.Check with your doctor before taking supplements.",
    "consultNow" : "Dietician"
  },
  "213" : {
    "itemNumber" : 213,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can you tell me why should I avoid high fiber foods?",
    "answer" : "High-fiber diet is usually recommended, too much fiber may interfere with the absorption of thyroid medicines so its better to avoid.",
    "consultNow" : "Dietician"
  },
  "214" : {
    "itemNumber" : 214,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can you tell me what kind of vegetables should I avoid?",
    "answer" : "Cruciferous vegetables that are rich in fiber like broccoli, cabbage, spinach, kale, and Brussels sprouts can inhibit thyroid drug absorption. Reducing the amounts of such produce in your diet may help.",
    "consultNow" : "Dietician"
  },
  "215" : {
    "itemNumber" : 215,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Why should I take selenium rich foods?",
    "answer" : "Tiny amounts of selenium are needed for enzymes that make thyroid hormones to work properly. Eating selenium-rich foods, such as sunflower seeds or Brazil nuts, can be beneficial.",
    "consultNow" : "Dietician"
  },
  "216" : {
    "itemNumber" : 216,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Why should I take Thyrosine?",
    "answer" : "Thyrosine is an amino acid which is used by the thyroid gland to produce T3 and T4. Taking a supplement may help, but ask your doctor beforehand.",
    "consultNow" : "Dietician"
  },
  "217" : {
    "itemNumber" : 217,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Why should I take anti-oxidant rich fruits and vegetables?sources?",
    "answer" : "Blueberries, tomatoes, bell peppers, and other foods rich in antioxidants can improve overall health and benefit the thyroid gland. Eating foods high in B vitamins, like whole grains, will also help.",
    "consultNow" : "Dietician"
  },
  "218" : {
    "itemNumber" : 218,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can I take Products such as kelp.",
    "answer" : "Avoid products such as kelp, as they may interfere with thyroid function & wellbeing. Kelp is derived from seaweed and is naturally high in iodine. Because of this it is sometimes marketed as a \"thyroid booster\" and can be purchased in dry preparations and tablets. As with iodine itself, it is of no health benefit to those with thyroid disease.",
    "consultNow" : "Dietician"
  },
  "219" : {
    "itemNumber" : 219,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can I take Iron tablets?",
    "answer" : "Some medications such as iron tablets (ferrous sulphate) can interfere with the absorption of thyroxine. Some doctors recommend a two-hour interval between taking thyroxine and the iron. Follow the advice or your doctor. Be aware that some multi vitamin tablets contain iron.",
    "consultNow" : "Dietician"
  },
  "220" : {
    "itemNumber" : 220,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "How soon will I feel the results of the Thyroid Problems Diet?",
    "answer" : "Very soon! Most people start feeling better within the first 1-2 weeks, just by eliminating certain foods that are not serving them well. The Elimination Diet will teach you how to spot the culprits; the food culprit is different for each person. Detoxing your liver and gut will provide another wave of relief. Often times thyroid problems in women are caused by too high or too low sugar levels or adrenal fatigue. If any of those is a problem for you, you would need to address that first before healing your thyroid. I will be point you to the right resources on how to handle such a situation.",
    "consultNow" : "Dietician"
  },
  "221" : {
    "itemNumber" : 221,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "When I adopt the Thyroid Problems Diet, can I start reducing my medication dose?",
    "answer" : "You shouldn’t reduce your medication without your doctor’s agreement. What often happens is this: after adopting the thyroid problems diet you will show signs of hyperthyroid symptoms (shakiness, nervousness, sweating, etc.) and/or your TSH will go too low. These are signs (good ones!) that your medication needs to be reduced, as your body doesn’t need such a high dose of thyroid hormones anymore – signs of a recovery!",
    "consultNow" : "Dietician"
  },
  "222" : {
    "itemNumber" : 222,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Will I ever be able to get off medication or heal completely?",
    "answer" : "It is a frequent question. Not surprisingly – many of you hate the idea of popping a pill first thing in the morning, and everyone wants to be free of these debilitating symptoms. The truth is:",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "The earlier you catch your thyroid problem and make changes, the better your chances are of making a complete recovery. (Like in the case of this author!)",
    "consultNow" : "Dietician"
  },
  "" : {
    "itemNumber" : "",
    "doctorName" : "",
    "subCategory" : "",
    "question" : "",
    "answer" : "It will depend on the condition of your thyroid gland and the degree to which it can start producing T4 and T3 hormones on its own again. No one will be able to tell you what the effects of diet and lifestyle changes upon your T4 and T3 hormones will be until you try it. In any case, you will feel significantly better when you adopt the Thyroid Problems Diet.",
    "consultNow" : "Dietician"
  },
  "223" : {
    "itemNumber" : 223,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Even if my thyroid is significantly compromised or I have lost it to cancer,will the Thyroid Problems Diet will still benefit me?",
    "answer" : "The thyroid problems diet will help with converting T4 to T3 hormones more effectively in your liver and gut (meaning less medication), and it will help you reduce the inflammation in your body (meaning more energy, weight loss and less fatigue). The thyroid problems diet I recommend will also help prevent you from developing additional autoimmune conditions and sensitivities in the future.",
    "consultNow" : "Dietician"
  },
  "224" : {
    "itemNumber" : 224,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Why should I eliminate gluten?",
    "answer" : "To achieve a healthy thyroid diet, it is often necessary to eliminate gluten. A vast majority of people suffering from thyroid and autoimmune disorders such as Hashimoto’s, Graves’ or Celiac’s have a problem with digesting gluten,so its better to avoid gluten.",
    "consultNow" : "Dietician"
  },
  "225" : {
    "itemNumber" : 225,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can you please tell me what is gluten and the sources of gluten?",
    "answer" : "It’s a protein found in wheat, rye, barley, spelt, couscous, and kamut grains. As you can see, since it’s found in wheat, this means you would need to avoid: pasta, bread, cakes, cookies, pizzas, etc.",
    "consultNow" : "Dietician"
  },
  "226" : {
    "itemNumber" : 226,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can you clearly tell me what is the difference between Gluten intolerance and gluten allergy?",
    "answer" : "A gluten allergy is an immediate negative reaction, whereas a gluten intolerance is a delayed reaction occurring anywhere from 20 minutes to 2 days later. Just because a person tests negative for Celiac’s, it does not mean they do not have a gluten intolerance.",
    "consultNow" : "Dietician"
  },
  "227" : {
    "itemNumber" : 227,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Do I need more iodine if I have hypothyroidism?",
    "answer" : "Iodine is the very mineral needed by the thyroid gland to produce T4 and T3 hormones. If you are suffering from hypothyroidism that resulted from iodine deficiency and it is NOT Hashimoto’s Disease, extra iodine dosage might help you. Only 5-10% of those with iodine deficiency do not have Hashimoto’s.",
    "consultNow" : "Dietician"
  },
  "228" : {
    "itemNumber" : 228,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "My doctor says that diet has nothing to do with my thyroid, is this true?",
    "answer" : "Nothing can be further from the truth. Thyroid hormone is made from the amino acid tyrosine and the mineral iodine. You get these nutrients directly from the food you eat. Also, there are many more nutrients and cofactors needed to convert thyroid hormone to it’s active form.",
    "consultNow" : "Dietician"
  },
  "229" : {
    "itemNumber" : 229,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "I was told that my thyroid is fine and I just need to eat less and exercise more to lose weight, is this correct?",
    "answer" : "Wrong. In fact, going on a low calorie diet actually lowers thyroid hormone, which in turn lowers your metabolism. Exercising too much can cause an increase in cortisol, which can cause harm to your condition.",
    "consultNow" : "Dietician"
  },
  "230" : {
    "itemNumber" : 230,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Do I have to stop taking my medication when I am on diet?",
    "answer" : "No. You should never stop taking your medication without consulting with your doctor. However, your body may become more sensitive to your medication as a result of the diet and you may need less of it.",
    "consultNow" : "Dietician"
  },
  "231" : {
    "itemNumber" : 231,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "I read iodine is good for thyroid, should I start supplementing?",
    "answer" : "It’s probable that you are deficient in iodine. However, you should always test your body for iodine to know if you should supplement, and by how much. Too much iodine can cause harm.",
    "consultNow" : "Dietician"
  },
  "232" : {
    "itemNumber" : 232,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "I’m taking thyroid medication but I still don’t feel right, why?",
    "answer" : "There are few possibilities…you can have Hashimoto’s thyroiditis, which is an autoimmune disorder and requires a different treatment. Or, your medication is being blocked from getting into the cells of your body. Or, you can be on the wrong type of medication.",
    "consultNow" : "Dietician"
  },
  "233" : {
    "itemNumber" : 233,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "My physician says that my test results are fine but I still don’t feel well, why?",
    "answer" : "The bottom line is most testing is inaccurate.",
    "consultNow" : "Dietician"
  },
  "234" : {
    "itemNumber" : 234,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Will I have to be on medication for the rest of my life?",
    "answer" : "Possibly. However, if you evaluate the cause of your thyroid problem and correct any vitamin/mineral deficiencies and eliminate any major toxicity you can live free of medication.",
    "consultNow" : "Dietician"
  },
  "235" : {
    "itemNumber" : 235,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Do thyroid problems cause weight gain?",
    "answer" : "There is a complex relationship between thyroid function, metabolism, and body weight. Hypothyroidism, or an underactive thyroid, is associated with decreased metabolism, and you may experience modest weight gain (5-10 lbs) as a result. Most of this weight gain is due to excess salt and fluid retention.",
    "consultNow" : "Dietician"
  },
  "236" : {
    "itemNumber" : 236,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "How do I keep my thyroid healthy?",
    "answer" : "A well balanced diet should include all the minerals needed to help support the function of the thyroid. Deficiencies in some minerals can contribute to thyroid issues (see below), but excess supplementation of these minerals is not recommended.\n\nIodine: Iodine is needed for the production of thyroid hormone. Generally, there is ample iodine in the diet, mostly in iodized salt. Iodine deficiency is very rare in the United States and excessive supplementation with iodine can actual worsen some thyroid problems.\n\nIron: You also need sufficient iron levels to make thyroid hormone and to help it get into other cells in the body. Insufficient iron levels alter and reduces the conversion of T4 to T3, besides binding T3.\n\nTrace Minerals: Zinc, selenium and chromium help you convert inactive T4 to active T3.",
    "consultNow" : "Dietician"
  },
  "237" : {
    "itemNumber" : 237,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can I drink alcohol while taking levothyroxine?",
    "answer" : "While various foods and medications affect the absorption of levothyroxine, alcohol has no significant interaction with this medication. Consuming alcohol on a regular basis could lead to liver disease and is not recommended. Because levothyroxine is broken down by the liver, it is possible that alcohol-induced liver dysfunction could change the metabolism of levothyroxine.",
    "consultNow" : "Dietician"
  },
  "238" : {
    "itemNumber" : 238,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "What foods and medications can interact with thyroid medication?",
    "answer" : "There are numerous foods and medications that interact with levothyroxine. These foods and medications do not need to be avoided completely, but should not be ingested within 4 hours of taking levothyroxine. Some of these foods and medications include iron, calcium, multivitamins, soy, phenytoin, some estrogen products, and some cholesterol-lowering medications. These substances can alter the absorption of thyroid hormone.",
    "consultNow" : "Dietician"
  },
  "239" : {
    "itemNumber" : 239,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Do you get hypothyroidism on a very low carb diet?",
    "answer" : "No, hardly on a well-formulated low carb diet, meaning you replace the energy from carbs by eating more fat.",
    "consultNow" : "Dietician"
  },
  "240" : {
    "itemNumber" : 240,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Will I gain weight if my thyroid is gone?",
    "answer" : "As long as you are on an adequate amount of thyroid hormone, you should not expect to gain weight after your thyroid has been removed. It is important that you continue to maintain a healthy diet and exercise frequently to feel your best.",
    "consultNow" : "Dietician"
  },
  "241" : {
    "itemNumber" : 241,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "What does a low iodine diet entail?",
    "answer" : "Patients are required to go on a low iodine diet if they will be undergoing radioactive iodine treatment or diagnostic scan. Patients are on the diet for about 2 weeks prior to treatment and this enables the body to rid itself of any traces of iodine so that the radioactive iodine scan is able to identify and destroy any remaining iodine cells in the body.",
    "consultNow" : "Dietician"
  },
  "242" : {
    "itemNumber" : 242,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Does the ketogenic diet cause thyroid issues?",
    "answer" : "Some people may simply do better on a low to moderate carbohydrate diet. The only way to find out is to try it yourself and find the level at which you feel comfortable and still manage to lose or maintain your weight. In some people show that ketogenic diet may negatively affect thyroid function and lead to a decreased level of the T3 hormone. On the other hand, they also show that 50 grams of carbohydrates a day is sufficient for higher T3 levels.So it depends on each an every individual.",
    "consultNow" : "Dietician"
  },
  "243" : {
    "itemNumber" : 243,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "I heard that selenium is the most crucial nutrient in the hypothyroid diet plan,can you tell me why?",
    "answer" : "This trace mineral is definitely a good antioxidant and it is required for transforming a thyroid problem hormone the body produces, T4, into its active form, T3. So its good to take selenium rich foods.",
    "consultNow" : "Dietician"
  },
  "244" : {
    "itemNumber" : 244,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Can I do The Plan if I’m breastfeeding?",
    "answer" : "For moms still breastfeeding, The Plan works beautifully but should only be done under the care of a dietitian because the weight loss on the Plan is very rapid and we may need to adjust variables so that it does not affect breast milk supply.",
    "consultNow" : "Dietician"
  },
  "245" : {
    "itemNumber" : 245,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "My Basal body temperatures range between 96.3 and 96.7—do I need to take the Kelp and B12 supplements?",
    "answer" : "If your temperatures are above 96 then just get started with a thyroid friendly menu and it should work to increase your temperature beautifully. Finding the right proteins and exercise will boost your BBT.",
    "consultNow" : "Dietician"
  },
  "246" : {
    "itemNumber" : 246,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Hypothyroidism",
    "question" : "Which Maine Coast Sea Seasonings should I purchase?",
    "answer" : "The Kelp or Dulse shaker varieties work best.",
    "consultNow" : "Dietician"
  },
  "247" : {
    "itemNumber" : 247,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "I have Iron deficiency Anemia and doctor asked me to take Iron rich foods,can you tell me what is Iron?",
    "answer" : "Iron is a tiny mineral that has a huge impact on how we feel and how our bodies function. Iron is found in every human cell and affects everything from our immune system, brain development and temperature, to our metabolism and work performance. While our bodies don’t naturally produce iron, we can usually get the iron we need through the foods we eat.",
    "consultNow" : "Dietician"
  },
  "248" : {
    "itemNumber" : 248,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "I had gone for a general checkup to the doctor but doctor said me that I have Iron deficiency Anemia,and he asked me to consult a dietitian,So before going for a consultation I would like to know what is Iron deficiency Anemia,can you please tell me?",
    "answer" : "Yes sure,Iron deficiency anemia is the most common form of anemia, a condition where your body does not produce enough healthy red blood cells. When your body doesn’t get the iron it needs, it fails to produce enough healthy red blood cells to carry oxygen throughout your body.",
    "consultNow" : "Dietician"
  },
  "249" : {
    "itemNumber" : 249,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "Can you please tell me why do our body need Iron?",
    "answer" : "Without iron, our bodies can’t function properly. Our bodies use iron to make proteins called hemoglobin and myoglobin, which help carry and store oxygen in the body through red blood cells and muscles. Iron is also part of many other proteins and molecules that ensure good health. You may feel “under the weather” if your body doesn’t have enough iron and it can also lead to other health problems like memory loss, irregular heartbeat and a weakened immune system.",
    "consultNow" : "Dietician"
  },
  "250" : {
    "itemNumber" : 250,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "Hi,I eat all varieties of foods regularly and do follow exercise and proper food intake .but then recently I was diagnoised as Iron deficiency Anemia,can you tell me what causes Iron deficiency anemia?",
    "answer" : "I understood that inspite of having a proper diet you are facing this problem it could be that you are not eat foods which have iron,please eat Iron rich foods which can solve your problem. Iron deficiency anemia is caused by not having enough iron in your body. Your body can run low on iron for reasons including: if you lose more iron than your body can replace,if your body has trouble absorbing iron, if you are not eating enough iron-rich foods and if you need more iron than normally (i.e. during times of pregnancy or breastfeeding) also these reasons may cause Iron deficiency anemia.",
    "consultNow" : "Dietician"
  },
  "251" : {
    "itemNumber" : 251,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "Can you tell me how will I know that am anemic?",
    "answer" : "Many of us are anemic and have no symptoms at all. If you do experience symptoms, they are typically mild at first and develop slowly. The most common symptom is feeling weak or tired more than usual or with exercise. Others can include feeling grumpy, headaches or problems with concentrating. As the anemia gets worse, you could experience blue color to whites of the eyes, brittle nails, light-headedness when you stand, pale skin color, shortness of breath or a sore tongue.",
    "consultNow" : "Dietician"
  },
  "252" : {
    "itemNumber" : 252,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "What should I do if I think I may have IDA?",
    "answer" : "If you think you may be experiencing symptoms of IDA, you should talk to your health care provider. He or she will likely check the levels of iron in your blood and, if you are iron deficient, discuss ways to manage your condition.",
    "consultNow" : "Dietician"
  },
  "253" : {
    "itemNumber" : 253,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "I heard that there are 2 types of Iron,can you explain me what are they?",
    "answer" : "The iron in food comes from two sources: animals and plants. Iron from animal sources is known as heme iron and is found in various meats and fish. Iron from plants is known as nonheme iron, and is found in certain vegetables and in iron-fortified foods such as breakfast cereals. Heme iron is better absorbed by the body than nonheme iron.",
    "consultNow" : "Dietician"
  },
  "254" : {
    "itemNumber" : 254,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "Can you tell me ,what are the foods which are good sources of animal iron?",
    "answer" : "Chicken liver ,Oysters, Clams, Beef liver, Beef (chuck roast, lean ground beef),Turkey leg, Tuna, Eggs, Shrimp, Leg of lamb are the good sources of animal iron",
    "consultNow" : "Dietician"
  },
  "255" : {
    "itemNumber" : 255,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "Can you tell me ,what are the foods which are good sources of plant iron?",
    "answer" : "Raisin bran (enriched), Instant oatmeal, Beans (kidney, lima, Navy) ,Tofu, Lentils ,Molasses, Spinach, Whole wheat bread ,Peanut butter ,Brown rice are the rich sources of plant iron.",
    "consultNow" : "Dietician"
  },
  "256" : {
    "itemNumber" : 256,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "I heard that for the absorption of plant Iron we need to combine it with some other food,can you tell me which one is the best food which helps in absorption of iron?",
    "answer" : "Try to combine plant iron foods with vitamin C (for example, a glass of orange juice) to increase absorption of iron.",
    "consultNow" : "Dietician"
  },
  "257" : {
    "itemNumber" : 257,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "Can you tell me how Iron is useful for my body?",
    "answer" : "When you eat food with iron, iron is absorbed into your body mainly through the upper part of your small intestine.There are two forms of dietary iron: heme and nonheme. Heme iron is derived from hemoglobin. It is found in animal foods that originally contained hemoglobin, such as red meats, fish, and poultry. Your body absorbs the most iron from heme sources. Nonheme iron is from plant sources.",
    "consultNow" : "Dietician"
  },
  "258" : {
    "itemNumber" : 258,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "Hi,doctor asked me to take Vitamin C foods for the good absorption of Iron,can you tell me why and the sources?",
    "answer" : "You can enhance your body's absorption of iron by drinking citrus juice or eating other foods rich in vitamin C at the same time that you eat high-iron foods. Vitamin C in citrus juices, like orange juice, helps your body to better absorb dietary iron.Vitamin C is also found in:Broccoli,Grapefruit,Kiwi,Leafy greens,Melons,Oranges,Peppers,Strawberries,Tangerines and Tomatoes",
    "consultNow" : "Dietician"
  },
  "259" : {
    "itemNumber" : 259,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "I have iron deficiency ,can I take Iron supplements?",
    "answer" : "Yes,you can but before taking them please do consult a doctor because too much of iron can also lead to other medical dsorders.",
    "consultNow" : "Dietician"
  },
  "260" : {
    "itemNumber" : 260,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "I just wanted to know who all can take Iron supplements?",
    "answer" : "The people who typically need iron supplements are pregnant women and those with documented iron deficiency. People should not take iron supplements before talking to their doctor as excess iron can cause chronic iron overload. An overdose of iron pills can be toxic, especially to children.",
    "consultNow" : "Dietician"
  },
  "261" : {
    "itemNumber" : 261,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "How will I know if I have Iron deficiency anemia?",
    "answer" : "There are several symptoms that you can look for to help determine if you have an iron deficiency (lethargy, irritability, low energy, paleness, dizziness), but there’s no way to know for sure without a blood test and a doctor’s assessment or examination.",
    "consultNow" : "Dietician"
  },
  "262" : {
    "itemNumber" : 262,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "In general who all need Iron supplements,its just to know for my knowledge ?",
    "answer" : "A high-potency iron supplement is doctor-recommended for people with iron deficiency, including both men and women, athletes, deficient individuals with low energy levels,pregnant women and seniors.",
    "consultNow" : "Dietician"
  },
  "263" : {
    "itemNumber" : 263,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "Who are the Specific patients who may need an iron supplement ?",
    "answer" : "Adolescent females and women of child-bearing age (due to blood loss from menstruation),Women trying to conceive,Pregnant women,Endurance athletes or athletes who train at high intensity,Patients with a chronic disease,Bariatric patients,Older/senior patients 65+",
    "consultNow" : "Dietician"
  },
  "264" : {
    "itemNumber" : 264,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "Can you tell me what is the difference between vegetarian based Iron foods and Non-vegetarian based Iron foods,as I have seen that people who have Non-vegetarian based iron foods are having more amounts of iron?",
    "answer" : "Individuals with dietary restrictions, particularly vegetarians, are vulnerable to iron deficiency, despite the fact that many vegetarians eat a well-rounded diet of iron-rich foods. That’s because the iron found in plant-based foods (called non-heme iron) is not as well absorbed as iron found in animal based foods (heme iron).",
    "consultNow" : "Dietician"
  },
  "265" : {
    "itemNumber" : 265,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia",
    "question" : "Can you tell me what are the different ways to supplement iron?",
    "answer" : "You can get Iron by eating food which is rich in iron,Oral iron supplements, Iron can be given intra muscularly",
    "consultNow" : "Dietician"
  },
  "266" : {
    "itemNumber" : 266,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia (PEDS)",
    "question" : "How can I prevent my child from becoming anemic?",
    "answer" : "Iron-deficiency anemia and other nutritional anemias can be prevented by ensuring that your child eats a well-balanced diet. Talk to your doctor about any specific dietary restrictions in your household as your child may require a nutritional supplementationto prevent anemia.",
    "consultNow" : "Dietician"
  },
  "267" : {
    "itemNumber" : 267,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia (PEDS)",
    "question" : "Can I give my baby Cows milk before 12 months?",
    "answer" : "Do not give your baby cow's milk until he or she is over 12 months old. Giving cow's milk before your child is ready may cause blood loss in his or her stool and can also decrease the amount of iron absorbed in the gut.",
    "consultNow" : "Dietician"
  },
  "268" : {
    "itemNumber" : 268,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia (PEDS)",
    "question" : "When my child is on breastfeeding will my child get enuf amount of Iron?",
    "answer" : "If you are breastfeeding: Your baby will have an adequate supply of iron until at least 4 months of age.After that time, if your child continues to be breastfed and has begun taking solid food, give him foods with added iron.",
    "consultNow" : "Dietician"
  },
  "269" : {
    "itemNumber" : 269,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia (PEDS)",
    "question" : "I have a doubt,can I feed my child formul based foods?",
    "answer" : "If you formula-feed your baby: Give your baby formula with added iron. Low-iron formula can result in iron-deficiency anemia.",
    "consultNow" : "Dietician"
  },
  "270" : {
    "itemNumber" : 270,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia (PEDS)",
    "question" : "I heard that cows milk doesn’t contain enough amount of Iron and my child doesn’t drink other milk ,he is used to cow milk,can you tell me how can I include Iron?",
    "answer" : "Avoid giving your older children more than 2 cups a day of whole cow's milk. Milk is low in iron and can make children feel full, which can decrease the amount of other iron rich foods they eat.",
    "consultNow" : "Dietician"
  },
  "271" : {
    "itemNumber" : 271,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia (PEDS)",
    "question" : "Can you tell me what type of food can be given to my child to increase his Iron contant,He is 7 yrs old?",
    "answer" : "Feed older children a well-balanced diet with foods that contain iron. Many grains and cereals have added iron (check labels to be sure). Other good sources of iron include red meat, egg yolks, potatoes, tomatoes, beans, molasses, and raisins.",
    "consultNow" : "Dietician"
  },
  "272" : {
    "itemNumber" : 272,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Iron Deficiency Anemia (PEDS)",
    "question" : "Hi am a house wife and I want to give m family a proper and well balanced diet but,I heard that Iron rich foods which I am giving them are not properly utilised,can you tell me what should I do to overcome this problem?",
    "answer" : "Encourage the whole family to drink citrus juice or eat other foods high in Vitamin C to increase the body's absorption of iron. Although green vegetables contain lots of iron, the iron from many vegetables comes in a form that is difficult for your body to absorb, but Vitamin C can help.",
    "consultNow" : "Dietician"
  },
  "273" : {
    "itemNumber" : 273,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "What are the precautions to be taken when pregnant, so the baby is born healthy? My wife is in the 7th month. What should she eat?",
    "answer" : "Your wife must eat healthy nourishing food and reduce high caloric foods like sweets and fried stuff. A walk of 1 - 2 km daily can be taken to exercise the leg muscles. Excess ingestion of salt should be avoided. A regular check up with her gynaecologist is necessary.",
    "consultNow" : "Dietician"
  },
  "274" : {
    "itemNumber" : 274,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I am 2 months pregnant, but I cannot drink milk since I am unable to digest it. What should I do? Please suggest an alternative to milk. Purvi",
    "answer" : "If you cannot drink milk, you can try paneer, curds and buttermilk or else add milk instead of water to make your rotis. If all this does not suit you, then try protein supplements like Premilac Powder or Zefrich powder which you can take with water.",
    "consultNow" : "Dietician"
  },
  "275" : {
    "itemNumber" : 275,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I am 6 months pregnant. In one site I read that papaya is not good for pregnant women and that it may cause birth defects. But I have eaten a lot of papaya throughout my pregnancy. Now I am worried. Kindly guide me.",
    "answer" : "Papaya could cause abortions. Do not worry about birth defects. Get a detailed sonography done to check the baby for defects.",
    "consultNow" : "Dietician"
  },
  "276" : {
    "itemNumber" : 276,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "My wife 2 months pregnant. She just eats one chapati and 1 fruit (apple or orange) in a day. She is feeling very weak, and keeps sleeping. What should I do? She has started hating everything we give her to eat.",
    "answer" : "It is quite normal to have nausea, loss of appetite and weakness in the first 3 months of pregnancy. So do not worry. Give her vitamin B complex and folic acid tablets. See a gynecologist in order to be sure that baby's growth is proper and adequate.",
    "consultNow" : "Dietician"
  },
  "277" : {
    "itemNumber" : 277,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I am 4 months pregnant. I had no nausea or morning sickness earlier, but now in my 2nd trimester, I throw up all cooked food. My weight has not increased of late, though the doctor confirmed that my foetus was growing. My daily diet consists of fruits, milk, soymilk, fruit juices, carrots and cereals, none of which I throw up. Is this adequate?",
    "answer" : "You are doing fine so do not worry about the weight gain. Take some antacids before your meals and do not have any spicy food till this settles down.",
    "consultNow" : "Dietician"
  },
  "278" : {
    "itemNumber" : 278,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I am a working woman and My height is 5 ft. 4 inches, weight is 60 kg. What should I be eating at this time?",
    "answer" : "Your diet should include a lot of vegetables and fruits. You should eat more frequently, and consume small quantities at a time. Take vitamin supplements. Make sure you consume a lot of iron and calcium as well.",
    "consultNow" : "Dietician"
  },
  "279" : {
    "itemNumber" : 279,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "Are SMP and Class II preservatives contained in baked products ok for consumption during pregnancy?",
    "answer" : "I am not aware of SMP. You should avoid MSG monosodium glutamate when pregnant. Class two preservatives are okay, as long as you have them in limited quantities after the 3rd month of pregnancy. And remember, when in doubt, refrain.",
    "consultNow" : "Dietician"
  },
  "280" : {
    "itemNumber" : 280,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "My wife is 3 months pregnant. Can she eat bajri and drumstick?",
    "answer" : "Yes she can, but she must reduce the quantity of bajra.",
    "consultNow" : "Dietician"
  },
  "281" : {
    "itemNumber" : 281,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I am 4 months pregnant and a lot of people are advising me to drink a lot of milk. I read that adding a pinch of saffron to a cup of milk is good. Is there any harm in doing so? Is there any time of day to do this?",
    "answer" : "You can have milk with saffron in moderate quantities anytime of the day.",
    "consultNow" : "Dietician"
  },
  "282" : {
    "itemNumber" : 282,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I am 7 months pregnant. Can I have regular coffee, or should I stick to decaffinated coffee? I have placenta praevia",
    "answer" : "There is no harm in consuming a cup of coffee a day. Do not have have too much coffee. Confirm with your personal gynaecologist before restarting coffee.",
    "consultNow" : "Dietician"
  },
  "283" : {
    "itemNumber" : 283,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I am a 32 year old woman diagnosed as a gestational diabetes. Blood sugar successfully controlled on insulin and a mild polyhydramnios on treatment with indomethacin. I am in my 26 weeks pregnant. The USG showed placenta as grade 0 but within 20 days the USG showed it as grade 2. This rapidly increasing placental maturity worries me as I have read that it affects the baby and it may progress to grade 3 placenta in the third trimester. What is to be done? What can be the reason and what are the repercussions? I lost my last baby 31 week due to polyhydramnios. This is a precious pregnancy, 9 years after marriage. Thanks in advance for your time and valuable guidance.",
    "answer" : "The frequency of scans will be determined by how much monitoring will be required. Continue to do USG at the same place every time. One cannot give an opinion about the reason and repercussions with only this much information. You must talk to your gynecologist and get these doubts cleared.",
    "consultNow" : "Dietician"
  },
  "284" : {
    "itemNumber" : 284,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I am 23 years old and 7 months pregnant. I got to know that I had diabetes when I was in my 3rd month. I read in this website that this is normal, and I have stopped sugar. Now the FBS is showing 152 and I have started getting pelvic pains. Even though I have stopped sugar, the FBS is not going down I am taking 5 units ofinsulin 4 times a day.",
    "answer" : "It is unclear why you need to take Insulin four times a day in dose of 5 units Insulin. Without all your reports, I am afraid that I cannot say anything.",
    "consultNow" : "Dietician"
  },
  "285" : {
    "itemNumber" : 285,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I am 5 months pregnant and have found out that I have Gestational Diabetes. I am very concerned about my baby. What should I do?",
    "answer" : "Gestational Diabetes can affect the baby if it is not under control during pregnancy. Your baby may be relatively large in size.",
    "consultNow" : "Dietician"
  },
  "286" : {
    "itemNumber" : 286,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I am in the 8 month of my pregnancy. I suffer rom severe back ache and sometimes my throat become very dry. Why does this happen?",
    "answer" : "Backache is quite normal at this stage of pregnancy. The dryness in the throat could be due to infection or less fluid intake or oral breathing instead of nasal breathing.",
    "consultNow" : "Dietician"
  },
  "287" : {
    "itemNumber" : 287,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "Ever since I became pregnant, I have been drinking bottled water because I've heard that drinking tap water during pregnancy is unhealthy. Is that true?",
    "answer" : "chlorine used to treat public water can turn into chloroform when it mixes with other materials in the water, which may increase the risk of miscarriage and poor fetal growth.So its better to drink filtered water.",
    "consultNow" : "Dietician"
  },
  "288" : {
    "itemNumber" : 288,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I recently found out that I'm pregnant. Can I continue exercising safely during my pregnancy?",
    "answer" : "Exercising during pregnancy can make you feel great and help you develop the stamina needed for giving birth. Yoga, swimming, and walking are all great options, but avoid high-impact exercises that involve jumping, bouncing, lifting, or sit-ups.",
    "consultNow" : "Dietician"
  },
  "289" : {
    "itemNumber" : 289,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I'm in my second trimester. No matter what I eat, I get heartburn. Is this normal? If so, what can I do to feel better?",
    "answer" : "Steer clear of certain foods and drinks that can make it worse — citrus; spicy, fatty (especially fried or greasy) foods; caffeine; and carbonated drinks.Eat several small meals throughout the day.Take your time when eating.Drink fluids between — not during — meals.Avoid eating or drinking for 3 hours before bedtime.Resist the urge to lie down after meals.Elevate your head when sleeping.",
    "consultNow" : "Dietician"
  },
  "290" : {
    "itemNumber" : 290,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I've heard that there are certain foods I should avoid during pregnancy. Is that true?",
    "answer" : "Yes. Although most foods are safe to eat, some might be problematic during pregnancy. For example, you should avoid or limit your exposure to foods that are more likely to be contaminated with bacteria (such as raw meat and fish), since food-borne infections may cause birth defects or miscarriage. And foods that might contain high levels of mercury (such as certain types of fish) can cause damage to the developing brain of a fetus.",
    "consultNow" : "Dietician"
  },
  "291" : {
    "itemNumber" : 291,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I love to eat cheese but I'm pregnant. And I know that there are some cheeses that pregnant women shouldn't eat. Which ones should I avoid?",
    "answer" : "Soft, unpasteurized cheeses like feta, Brie, Camembert, blue-veined cheeses, and goat — as well as ready-to-eat meats like hot dogs and deli meats — may contain Listeria, bacteria that cause mild flu-like symptoms in most adults but can be very dangerous for unborn babies. Listeriosis, the infection caused by the bacteria, can cause miscarriage, premature birth, or severe illness or death of a newborn.\nWhen made from pasteurized milk, most soft cheeses are considered safe to eat during pregnancy. That goes for other cheeses made from pasteurized milk too, such as cheddar, American, cottage, and cream cheeses. Hard cheeses are generally considered safe in pregnancy.\nWhatever you buy, always make sure the label says \"pasteurized\" on it, and talk to your nutritionist if you aren't sure about a certain cheese.",
    "consultNow" : "Dietician"
  },
  "292" : {
    "itemNumber" : 292,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "I have lost a lot of weight and am now pregnant am anxious not to put it back on. What should I be eating? I have been following the Atkins diet, is it safe to carry on?",
    "answer" : "It is important to maintain a healthy weight in pregnancy and also to eat a balanced diet. As you have experienced, Atkins is effective at producing weight loss, but it is advised not to follow such a diet in the long term or during pregnancy. Your body will need carbohydrates, but it is about trying to eat the better ones which are called complex carbs such as wholemeal bread and pasta, jacket potatoes, brown rice and lots of fruits and vegetables.Where possible you should try to avoid sweet sugary foods and anything with white flour eg cakes, biscuits etc.",
    "consultNow" : "Dietician"
  },
  "293" : {
    "itemNumber" : 293,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "Have I put on too much weight? What is normal?",
    "answer" : "It's good to be thinking about healthy eating during pregnancy and to be having regular gentle exercise.Most women will gain around 10 -12.5 kg or about 2 stone during their pregnancy and need about 300 calories a day extra to keep a healthy weight. So around 2100 - 2500 calories a day should be enough to ensure your baby is able to grow healthily.Dieting during pregnancy is not usually recommended but if you eat a well-balanced and nutritious diet, avoid fatty, sugary foods, you may find that you will only gain the minimum amount. If you feel that you need to lose weight, discuss this with your GP who may be able to refer you to a dietician.Walking is the best form of exercise and is a good starting point for someone who hasn't been exercising regularly. Now is not the time to start a more rigorous regime.",
    "consultNow" : "Dietician"
  },
  "294" : {
    "itemNumber" : 294,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Pregnancy",
    "question" : "Is it safe to eat all kinds of yoghurts during pregnancy?",
    "answer" : "Live yoghurt is perfectly fine to eat during pregnancy; the bacteria it contains are the ‘friendly’ bacteria that are thought to be beneficial to your digestive system.",
    "consultNow" : "Dietician"
  },
  "295" : {
    "itemNumber" : 295,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I am 23 years old I have feel too slim so wat will I do for gain weight?",
    "answer" : "hope you are doing well! I had gone through your question you are 25kgs less than your ideal body weight, you need to really concentrate alot on your food intake, I think you are not taking proper diet which is leading to underweight. It is very important to have a proper balanced diet, eat small and frequent meals.Include more of protein rich foods, which help in muscle formation. Take fruits and vegetable daily. Drink milk and eat 1 egg daily. But there are some foods which can increase your weight in a healthy way.",
    "consultNow" : "Dietician"
  },
  "296" : {
    "itemNumber" : 296,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "Please suggest some homoeopathy treatment for loosing weight.",
    "answer" : "Eat small but frequent meals.\nAvoid long gaps in between meals.\nAvoid junk as far as possible.\nExercise at least 4 times a week.\nLastly be committed.\nRemember it's a lifestyle change and not a one time thing.\nIt's a balanced intake that will last you longer.\nAll the so called diets will only give you muscle and bone loss. The fats will remain as it is.\nSo, try to first follow this seemingly simple tips.",
    "consultNow" : "Dietician"
  },
  "297" : {
    "itemNumber" : 297,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I have a desk job and in the last 2 years my weight has gone up from 75 kgs. To 85 kgs. I want to decrease this weight. Please help.",
    "answer" : "you really have to take up some physical activity and have to make some changes in your diet.\nGo for more of fiber than lots of carbohydrates, in your plate take more of protein and less carbohydrates.\nEat small and frequent meals instead of 3 large meals.\nFor every 1 hour go for a 5 mins walk in your office.\nDo not have your meal at your desk rather go to your cafeteria or can noteen to have food so that there will be some activity added before and after food taken.\nPrefer drinking at least 3-4 lts of water per day. When ever you fell hungry in between aft your meals go for fruit, salads, biscuits instead of oily snacks.\nPlease do add some workout session daily at gym or home.\nFollow all these tips you will definitely find some changes.",
    "consultNow" : "Dietician"
  },
  "298" : {
    "itemNumber" : 298,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I m 20 years old nd I m too thin nd my body do not well grow up.",
    "answer" : "hope you are doing well can you text me your height, weight so that I will get to know how many kgs you have to loose your body weight and can suggest you a proper diet.",
    "consultNow" : "Dietician"
  },
  "299" : {
    "itemNumber" : 299,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "Sir I have improve my weight and my age is 18years height is 5.8 my friends are telling your weight is very less please give me your advise proper manner and daily planing eat food to gaining the weight.",
    "answer" : "hope you are doing well you are under weight it's true, to over come this you need to get a clear and proper diet councelling from a dietician who will guide you through which you can have a normal body weight.",
    "consultNow" : "Dietician"
  },
  "300" : {
    "itemNumber" : 300,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I am 17 year old boy I am so slim what should I do so I can become a fit or healthy person.",
    "answer" : "hope you are doing well you should have proper and balanced diet which includes all food groups with proper timings. Follow exercise also.",
    "consultNow" : "Dietician"
  },
  "301" : {
    "itemNumber" : 301,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "Other than nuts and fruits what are the healthy foods and snacks available in shop?",
    "answer" : "hope that you are doing well you can go for fresh fruit juices, milk shakes, veg salads, sprouts, sandwich, boiled corn, boiled groundnuts, pop corn, biscuits.",
    "consultNow" : "Dietician"
  },
  "302" : {
    "itemNumber" : 302,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I had done my right kidney operation. Can I go for gym? Its almost 2 years completed from the date of operation. Can I go?",
    "answer" : "hope that you are doing well you had mention that you have underwent kidney surgery, but once go to gym and meet a gym instructor he will ask you to do some medical tests, if reports are good he will allow you to join gym.",
    "consultNow" : "Dietician"
  },
  "303" : {
    "itemNumber" : 303,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I am eating and taking food properly everyday but I m still thin. What I should do?",
    "answer" : "hope that you are doing well I understood that you are eating food properly but you rare still not gaining weight, it could be because you might be not eating the right quantity or may be you are not following timings or you are not including all varieties of food groups.Please consult a dietician so that she/he will guide you properly.",
    "consultNow" : "Dietician"
  },
  "304" : {
    "itemNumber" : 304,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I am of 23 age now but my body is too slim not look like age of 23 then what should do? And I don't fall ill for last 4 years.",
    "answer" : "hope that you are doing well I understood that you are eating food properly but you rare still not gaining weight, it could be because you might be not eating the right quantity or may be you are not following timings or you are not including all varieties of food groups.Please consult a dietician so that she/he will guide you properly.and its good that you are not falling need not worry about that.",
    "consultNow" : "Dietician"
  },
  "305" : {
    "itemNumber" : 305,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "How to grow weight easy my weight is to less. My height is good.",
    "answer" : "your are under weight and need to follow a proper diet which is included with more of protein, fiber, vitamins and minerals, normal carbohydrates. Have a small 6 meals than large 3 meals, include some physical activity for atleast 45 mins per day.",
    "consultNow" : "Dietician"
  },
  "306" : {
    "itemNumber" : 306,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "Hello sir I m just 19 year old but I m facing some problems related to my physical sir like white hair and straight and physical activities I m very weak can you suggest me protein chart sir when I make a strong and good health.",
    "answer" : "hope that you are doing well. Grey hair can be because of deficiency of a nutrient, mental tensions, improper food intake. So please confirm its because of which reason so that I will suggest a proper diet for it.",
    "consultNow" : "Dietician"
  },
  "307" : {
    "itemNumber" : 307,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "Sir I want to loose my weight but I don't want to leave my favorite foods what I do. Plzz suggest me some exercise for weight loosing.",
    "answer" : "I understood that is not easy to control eating favourite foods, but you need to understand that you are already into grade 1 obesity and you need to control your diet now and your age is only 23 yrs. So please control your food habits you can have everything but there need to be a quantity how much you can eat. Please consult a dietician she will suggest you a proper diet with timings and the quantity also so that you an follow it and maintain you diet and weight.",
    "consultNow" : "Dietician"
  },
  "308" : {
    "itemNumber" : 308,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "Iam 19 years old iam little bit thin. How to build my body. My weight is 66kg.",
    "answer" : "Do high protein diet like paneer, chicken, dal, rajama, sprouts, eggs in daily diets fallow this diets for one months properly morning take milk cornflakes n banana in midmorning take banana shake 1glass, in lunch take proper meal in evening take coconut water in night take proper meal add in daily diets dates 6pics daily 8pics badam, n chuaraha 5pics daily.",
    "consultNow" : "Dietician"
  },
  "309" : {
    "itemNumber" : 309,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I eat every day 8- 10 chapati. & full diet food 3 times in a day but I m soo thin. I want grow some fat So what is reason behind that?",
    "answer" : "its not that if eat 8-10 rotis per would be sufficient for you to grow your weight. You need to balance your diet in all other food groups also like fruits and vegetables, non veg, milk and milk products, whole grains, pulses etc. Please consult a dietician who will explain you how to follow a proper diet and what foods to be included and which to be avoided.",
    "consultNow" : "Dietician"
  },
  "310" : {
    "itemNumber" : 310,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "How can I become muscular body. Is supplement is better or not can you also suggest me how to I grow taller naturally?",
    "answer" : "Your height mainly depends on your genes and it grows only till a certain age. However, it is advised that you take high protein diet i. E. Soya, sprouts, dal, milk, paneer, egg, meat, etc.\nDo stretching exercises daily.\nDo not take any medicines as they have no effect on your height, rather it may cause defect in some body parts.\nNothing better than a healthy balanced diet.",
    "consultNow" : "Dietician"
  },
  "311" : {
    "itemNumber" : 311,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "Iam 18years of age my height is 5.7feet and my body weight is 45kg how can I gain my weight? What type of food should I take to improve my weight?",
    "answer" : "Hi firstly you need to follow a proper balanced diet depending on your age, height and weight each and every individual will have different calories required by their body including all the nutrients. And you are a teenager and atleast you need 2000 kcal per day.",
    "consultNow" : "Dietician"
  },
  "312" : {
    "itemNumber" : 312,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "How can I burn off my stored body fat?",
    "answer" : "The best strategy for losing excess weight and stored body fat combines a plan for behavior change with calorie reduction and increased physical activity.We all need some body fat, but if stored fat is excessive it may increase risk of diet-related diseases such as heart disease, diabetes and some cancers. This is particularly true if excess fat is in the abdominal area.",
    "consultNow" : "Dietician"
  },
  "313" : {
    "itemNumber" : 313,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "How can I get enough nutrients without consuming too many calories?",
    "answer" : "I encourage you to choose a variety of nutrient-dense foods and beverages to help achieve recommended nutrient intake. Foods like vegetables, fruits, whole grains, low-fat dairy products and lean proteins can help you get the nutrients you need without excess calories.You can avoid excess calories by limiting your consumption of foods high in added sugars and solid fats, and alcoholic beverages; these provide calories but are poor sources of essential nutrients",
    "consultNow" : "Dietician"
  },
  "314" : {
    "itemNumber" : 314,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I am on a diet to lose weight. Do I still need to exercise?",
    "answer" : "When you are on a diet to reach a healthier weight, physical activity may support your weight loss efforts by helping you achieve an appropriate calorie balance. In addition, individuals who exercise regularly may be less likely to regain the weight they lost.",
    "consultNow" : "Dietician"
  },
  "315" : {
    "itemNumber" : 315,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I want to lose a 1/2 kg of weight. How many calories do I need to burn?",
    "answer" : "You need to burn 3,500 calories more than you take in to lose 1/2 kg of weight. This translates into a reduction of 500 calories per day to lose 1/2kg in a week, or a reduction of 1,000 calories per day to lose 1kg in a week. A calorie reduction can be achieved by either eating fewer calories or burning more calories through physical activity. A combination of both is best.",
    "consultNow" : "Dietician"
  },
  "316" : {
    "itemNumber" : 316,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "I would like to gain weight. How can I do this in a healthy manner?",
    "answer" : "Losing, gaining or staying at the same weight all depend on how many calories you eat and how many calories your body uses over time. If you eat more calories than you use, you will gain weight; conversely, if you eat fewer calories than you use, you will lose weight. If you would like personalized advice, or you want to know how many calories or what types of foods are best for you,Dietitians or Nutritionists are health professionals who can physically assess you and your needs.",
    "consultNow" : "Dietician"
  },
  "317" : {
    "itemNumber" : 317,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "What is a healthy diet?",
    "answer" : "A healthy eating pattern is one that provides enough of each essential nutrient from nutrient-dense foods, contains a variety of foods from all of the basic food groups, and focuses on balancing calories consumed with calories expended to help you achieve and sustain a healthy weight. This eating pattern limits intake of solid fats, sugar, salt (sodium) and alcohol.",
    "consultNow" : "Dietician"
  },
  "318" : {
    "itemNumber" : 318,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "When I eat more than I need, what happens to the extra calories?",
    "answer" : "Consuming extra calories results in an accumulation of stored body fat and weight gain. This is true whether the excess calories come from protein, fat, carbohydrate or alcohol.",
    "consultNow" : "Dietician"
  },
  "319" : {
    "itemNumber" : 319,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Weight management",
    "question" : "Where can I find information about popular weight-loss diets?",
    "answer" : "Weight-loss diets have been popular for many years. In fact, many people have followed a weight-loss diet at one time or another. Unfortunately, most results are not permanent and some pose serious health risks. The popular low-carbohydrate, high-protein diet is an example of a strict weight-loss program that may carry potentially serious health risks.Before you begin any weight-loss program, it is wise to speak to a qualified healthcare provider such as an RD for advice on a program that is right for you. RDs are health professionals who are trained to provide counseling on nutrition and eating habits. They can provide personalized dietary advice, taking into consideration your health status, lifestyle and food preferences.",
    "consultNow" : "Dietician"
  },
  "320" : {
    "itemNumber" : 320,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Nephrolithiasis",
    "question" : "I am diagnoised with Nephrolithiasis and doctor asked me to eat less high oxalate foods?Can you tell me why?",
    "answer" : "The more oxalate that is absorbed from your digestive tract, the more oxalate in your urine.so its better to eat less oxalate rich foods",
    "consultNow" : "Dietician"
  },
  "321" : {
    "itemNumber" : 321,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "",
    "question" : "Hi can you tell me the list foods which are rich in oxalate?",
    "answer" : "Fruits like blackberries, blueberries, raspberries, strawberries, currants, kiwifruit, concord (purple) grapes, figs, tangerines, and plums\nVegetables like spinach, Swiss chard, beets (root part), beet greens (leaf part), collards, okra, parsley, leeks and quinoa are among the most oxalate-dense vegetables,celery, green beans, rutabagas\nNuts and seeds like almonds, cashews, and peanuts\nLegumes like soybeans, tofu and other soy products\nGrains like wheat bran, wheat germ, quinoa (a vegetable often used like a grain)\nOther like cocoa, chocolate, and black tea",
    "consultNow" : "Dietician"
  },
  "322" : {
    "itemNumber" : 322,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Nephrolithiasis",
    "question" : "I am suffering from Nephrolithiasis,can you tell me how calcium is useful?",
    "answer" : "Low amounts of calcium in your diet will increase your chances of forming calcium oxalate kidney stones. Many people are afraid to eat calcium because of the name \"calcium oxalate stones.\" However, calcium binds oxalate in the intestines. A diet rich in calcium helps reduce the amount of oxalate being absorbed by your body, so stones are less likely to form. Eat calcium rich foods and beverages every day (2 to 3 servings) from dairy foods or other calcium-rich foods.",
    "consultNow" : "Dietician"
  },
  "323" : {
    "itemNumber" : 323,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Nephrolithiasis",
    "question" : "Hi can you tell me the list foods which are rich in Calcium?",
    "answer" : "Foods which are rich in calcium are Milk,Yoghurt,Cheese,Cream, desserts,Meat, fish, eggs,Beans,lentils,Fruits,Vegetables,Nuts & seeds.",
    "consultNow" : "Dietician"
  },
  "324" : {
    "itemNumber" : 324,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Nephrolithiasis",
    "question" : "Hi can you tell me why should I limit the intake of Vitamin C in my diet?",
    "answer" : "Oxalate is produced as an end product of Vitamin C (ascorbic acid) metabolism. Large doses of Vitamin C may increase the amount of oxalate in your urine, increasing the risk of kidney stone formation. If you are taking a supplement, do not take more than 500 mg of Vitamin C daily.",
    "consultNow" : "Dietician"
  },
  "325" : {
    "itemNumber" : 325,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Nephrolithiasis",
    "question" : "Why should I take lots of fluids,can you explain?",
    "answer" : "It is very important to drink plenty of liquids. Your goal should be 10-12 glasses a day. At least 5-6 glasses should be water which is helpful in reducing the risk of calcium oxalate stone formation.",
    "consultNow" : "Dietician"
  },
  "326" : {
    "itemNumber" : 326,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Nephrolithiasis",
    "question" : "Why should I watch on my protein intake,can you justify?",
    "answer" : "Eating large amounts of protein may increase the risk of kidney stone formation. Your daily protein needs can usually be met with 2-3 servings a day. Eating more than this if you are at risk at kidney stones is unnecessary.",
    "consultNow" : "Dietician"
  },
  "327" : {
    "itemNumber" : 327,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Nephrolithiasis",
    "question" : "Can you tell me how much amount of salt can be added to my diet?",
    "answer" : "Reduce the amount of sodium in your diet to 2-3 grams per day. Limit eating processed foods such as sausage, canned products, dry soup mixes, pickles, and various convenience mixes.",
    "consultNow" : "Dietician"
  },
  "328" : {
    "itemNumber" : 328,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Nephrolithiasis",
    "question" : "As I am a know patient of Nephrolithiasis and doctor asked me to monitor your diet,Does diet play a role?Can you tell me how does diet play a role?",
    "answer" : "Diet plays an important role in the development of kidney stones, especially in patients who are predisposed to the condition. A diet high in sodium, fats, meat, and sugar and low in fiber, vegetable protein, and unrefined carbohydrates increases the risk for renal stone disease. High doses of vitamin C (ie, more than 500 mg per day) can result in high levels of oxalate in the urine (hyperoxaluria) and increase the risk for kidney stones. Oxalate is found in berries, vegetables (eg, green beans, beets, spinach, squash, tomatoes), nuts, chocolate and tea. Stone formers should limit their intake of cranberries, which contain a moderate amount of oxalate.",
    "consultNow" : "Dietician"
  },
  "329" : {
    "itemNumber" : 329,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Nephrolithiasis",
    "question" : "How do I prevent further Calcium Oxalate Kidney Stones?",
    "answer" : "Protein: Proteins increase urinary calcium, oxalate and uric acid excretion. Avoid high protein diets.\n\nCalcium: You do not need to restrict your calcium/dairy intake, but do not overindulge. Women should continue taking Calcium supplements as prescribed by their physicians.\n\nSodium: Limit sodium/salt intake.\n\nOxalate: Avoid foods high in oxalate.Sticking to a diet low in oxalate is very difficult, but if you can become familiar with some of the foods highest in oxalate that you eat routinely, you can eliminate or limit them in your diet.\n\nFiber: Increase your fiber intake.\n\nVitamin C: Avoid excesses of Vitamin C. Up to 40% of the oxalate in urine comes from the conversion of ascorbic acid to oxalate.",
    "consultNow" : "Dietician"
  },
  "330" : {
    "itemNumber" : 330,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "OsteoArthritis",
    "question" : "Hi I have Osteoarthritis and doctor told me consult a dietician can you please tell me the role of nutrition and diet in the treatment of osteoarthritis?",
    "answer" : "Balanced diet with adequate supplementation of calcium can be helpful to patients. Whole grains, black beans, spinach, cabbage, carrot, cucumber, tomatoes, banana, orange, lemon, honey, raisins, fatless cottage cheese and coconut oil should be included in the diet.It is also advisable to avoid foods rich in fat. Drinking plenty of water is recommended. It also provides lubrication to the joints and reduces the risk of osteoarthritis.",
    "consultNow" : "Dietician"
  },
  "331" : {
    "itemNumber" : 331,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "OsteoArthritis",
    "question" : "In addition to calcium and vitamin D, I’ve heard that vitamin K is important for my bones. If I have osteoporosis, should I be taking a vitamin K supplement?",
    "answer" : "Like many vitamins and minerals, vitamin K appears to play a role in your bone health. The recommended daily intake is 90 -120 micrograms (μg).There are two types of vitamin K. They are vitamin K1 and vitamin K2. Vitamin K1 sources include kale, brussels sprouts, spinach, mustard greens, turnip greens and vegetable oils. Vitamin K2 sources include egg yolks, organ meats and natto (a type of fermented soybean).",
    "consultNow" : "Dietician"
  },
  "332" : {
    "itemNumber" : 332,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "OsteoArthritis",
    "question" : "Is there any harmful effect if one takes more than 1200 milligrams of calcium? If so, what kind of harmful effect could excess calcium cause?",
    "answer" : "Taking more calcium than what you need is not beneficial and may even be harmful. When you take too much calcium from supplements, the excess calcium is excreted through your kidneys into your urine. In some people, this increases the risk of kidney stones.",
    "consultNow" : "Dietician"
  },
  "333" : {
    "itemNumber" : 333,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "OsteoArthritis",
    "question" : "Is soymilk a good substitute for milk? How about tofu?",
    "answer" : "Products that come from soybeans like soymilk and tofu naturally contain calcium. The amount of calcium in these foods varies and can be much lower than the calcium that is found in regular milk and other dairy products. However, many brands of soymilk are fortified with calcium. In many cases you can get about the same amount of calcium from a glass of calcium-fortified soymilk that you would from a glass of regular milk. The amount of calcium in tofu varies depending on the way the tofu is prepared.For example, ¼ block of firm tofu prepared with calcium sulfate provides about 160 milligrams of calcium. Remember, food labels list calcium as a percentage of the daily value (DV). This amount is based on 1,000 mg of calcium per day. You might see that an eight ounce glass of fortified soymilk has 30% of the DV for calcium. This amount equals 300 mg of calcium.",
    "consultNow" : "Dietician"
  },
  "334" : {
    "itemNumber" : 334,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "OsteoArthritis",
    "question" : "Does caffeine rob the body of calcium? If so, how much is harmful?",
    "answer" : "Caffeine appears to decrease calcium absorption by a small amount. Drinking more than three cups of coffee every day may be harmful to bone health. If you enjoy drinking coffee and tea, you can help to make up for any calcium loss by getting enough calcium to meet your body’s needs.",
    "consultNow" : "Dietician"
  },
  "335" : {
    "itemNumber" : 335,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "OsteoArthritis",
    "question" : "I have no family history of osteoporosis. I eat a healthy diet and exercise. How did I get osteoporosis?",
    "answer" : "In addition to your family history, there are many factors that can increase your likelihood of developing osteoporosis. That’s why estimates suggest that about one in two women and up to one in four men will break a bone in their lifetime due to osteoporosis. You are at increased risk of developing osteoporosis if you are a postmenopausal woman with a small and thin build. As you age, your risk of osteoporosis and broken bones increases. Also, certain medical conditions or taking certain medicines may increase your chance of developing osteoporosis.",
    "consultNow" : "Dietician"
  },
  "336" : {
    "itemNumber" : 336,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "OsteoArthritis",
    "question" : "If I have osteoporosis, does it mean that am not getting enough calcium?",
    "answer" : "There are many factors that can contribute to osteoporosis, one of which is not getting enough calcium. However, people who get enough calcium from foods and/or supplements can still be at risk of bone loss due to other reasons, such as having a family history of osteoporosis, not exercising, smoking, drinking too much alcohol, not getting enough vitamin D and having certain medical conditions or taking certain medicines that can cause bone loss. While getting the recommended amounts of calcium, vitamin D and exercise each day does not always prevent osteoporosis, these healthy lifestyle behaviors can help everyone have healthier bones.",
    "consultNow" : "Dietician"
  },
  "337" : {
    "itemNumber" : 337,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "OsteoArthritis",
    "question" : "I am lactose intolerant. Should I drink calcium-fortified soymilk or lactose-free milk?",
    "answer" : "While there is no agreed upon answer to this question, some would suggest trying the lactose-free milk which is naturally rich in calcium. Calcium-fortified soymilk tends to have about the same amount of calcium as regular milk, however this is because calcium has been added the beverage. If you are lactose-intolerant, you may think you should avoid all dairy products that aren’t labeled lactose-free. However, you may be surprised to learn that many people who consider themselves lactose-intolerant are able to consume certain dairy products without side effects. Most aged cheese, including cheddar, Colby and parmesean are naturally lactose-free. Many people who are sensitive to lactose can also tolerate yogurt with live cultures. These tips may help you to add more foods that are naturally rich in calcium back into your diet.",
    "consultNow" : "Dietician"
  },
  "338" : {
    "itemNumber" : 338,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "OsteoArthritis",
    "question" : "Can soft drinks cause a problem for my bones?",
    "answer" : "Many of us enjoy the taste of a soft drink or soda. Others like the caffeine boost they get from drinking a cup of coffee or a cola. Certain soft drinks and sodas, especially colas, contain phosphorous in the form of phosphoric acid. These drinks may also have caffeine. Some people are concerned that the phosphoric acid and caffeine in soft drinks can harm bone health. Colas may have other chemicals, besides phosphoric acid and caffeine, that can affect the bones. People with osteoporosis should not drink more than five cola drinks a week.",
    "consultNow" : "Dietician"
  },
  "339" : {
    "itemNumber" : 339,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Can I still eat sweets with diabetes?",
    "answer" : "Yes. Sweets in moderation can be enjoyed by people with diabetes. You just have to work them into your meal plan…not in addition to your normal meals! If you want a small serving of pie instead of rice",
    "consultNow" : "Dietician"
  },
  "340" : {
    "itemNumber" : 340,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "How many carbohydrates per meal should I eat?",
    "answer" : "It varies by the individual’s age, size, and activity level. In general, adult women usually range from 45-60 grams of carbohydrate/meal. Men can range from 60-75 grams/meal. There are always exceptions, but these are safe starting points.",
    "consultNow" : "Dietician"
  },
  "341" : {
    "itemNumber" : 341,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Is there a simple way to eat so I don’t have high blood sugars?",
    "answer" : "There is no simple solution to eating to avoid raising blood sugars. A dietitian who specializes in diabetes is the best person to work with, but there will be times when sugars are high no matter what you eat due to stress levels",
    "consultNow" : "Dietician"
  },
  "342" : {
    "itemNumber" : 342,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Why do you recommend a vegan diet for diabetes?",
    "answer" : "Vegan diets, which contain no animal products (meat, dairy, eggs, or other animal products), are healthier than other diets, because they contain no cholesterol and less fat, saturated fat, and calories than meat-based diets or ovo-lacto vegetarian diets.",
    "consultNow" : "Dietician"
  },
  "343" : {
    "itemNumber" : 343,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Hi I have Diabetes,does a strict diabetic diet mean eliminating sugar totally from the diet?",
    "answer" : "No. You can still enjoy a small serving of your favorite dessert if you have diabetes. The key is moderation. Cut back on the other carbohydrate-containing foods when you want to eat sweets.",
    "consultNow" : "Dietician"
  },
  "344" : {
    "itemNumber" : 344,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Hi I have Diabetes can you just tell me,is high protein diet best for a diabetic?",
    "answer" : "Eating too much protein (especially animal protein) may cause insulin resistance, a key factor in diabetes. A healthy balanced diet includes protein, carbohydrates and fats.",
    "consultNow" : "Dietician"
  },
  "345" : {
    "itemNumber" : 345,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Hi I was recently diagnoised that I have Diabetes,why should my daily carbohydrate intake be consistent?",
    "answer" : "Consistent carbohydrate intake helps to keep your blood sugar from going too high or too low during the day. This is also helpful in deciding the dose of oral medicines more accurately.",
    "consultNow" : "Dietician"
  },
  "346" : {
    "itemNumber" : 346,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "How do I know if I'm taking in the right number of carbohydrates per day?",
    "answer" : "The amount of carbohydrates at meals and snacks depends on your calorie level and activity level, and on any diabetes medications you might be taking. For example, a dinner might be 45 to 60 grams of carbohydrates, and a snack might be between 15 and 30 grams of carbohydrates. I suggest you to go for a diet consultation,dietitian will help you in planning a proper diet.",
    "consultNow" : "Dietician"
  },
  "347" : {
    "itemNumber" : 347,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "How do I know if there are too many carbs in my meal plan? Should I just avoid carbs?",
    "answer" : "It is not compulsory to eliminate carbohydrate in your diet unless your sugar levels are elevated . Carbohydrates are an important energy source and provide a variety of nutrients, such as vitamins and minerals. Please consult a dietitian who will help you understand additional ways to control your blood sugar, such as exercise, assessing your weight management goals, and assessing medication needs, if you currently are taking medications for your blood sugar. You also may consider following a lower calorie level, which would decrease the amount of carbohydrates.",
    "consultNow" : "Dietician"
  },
  "348" : {
    "itemNumber" : 348,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Does eating fruit cause elevated blood sugar levels?",
    "answer" : "Quantity of fruit which you eat should be selected wise because fruit contains carbohydrate, which will raise you blood sugar levels. For example, 12 cherries are considered a serving (15 grams of carbohydrates) and one medium peach is a serving. When choosing canned fruits look for those packaged in juice or light syrup. It might be helpful to spread your fruit intake out over the course of the day, and then check your blood sugar about one to two hours after eating to see how it is affected. So before choosing any fruit know the sugar contant present in them.",
    "consultNow" : "Dietician"
  },
  "349" : {
    "itemNumber" : 349,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "How are beverages (i.e., juices) used within the meal plans?",
    "answer" : "Calorie-containing beverages such as fruit juices, soft drinks, and sweetened teas can cause a fairly rapid rise in blood sugar, which is why they tend to be avoided. We encourage you to count these as food items if you are adding them to your meal plans. In other words, be sure to read the label of a fruit juice or other sweetened/sugar-containing beverage that you want to add and consider replacing that juice with a comparable menu item.Non-caffeinated drinks, especially water, are best for hydration, especially in hot weather and while exercising.",
    "consultNow" : "Dietician"
  },
  "350" : {
    "itemNumber" : 350,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "What is a meal replacement?",
    "answer" : "A meal replacement is a food that you eat in place of a meal or part of a meal to help control your calorie intake and thereby manage your weight.",
    "consultNow" : "Dietician"
  },
  "351" : {
    "itemNumber" : 351,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Why should I use a meal replacement?",
    "answer" : "Meal replacements are calorie-controlled, and some are packed with nutrients. Consistent portion size and calories take the guesswork out of meal planning. Also, meal replacements are easy to grab when you’re on the go. And, if you have diabetes, meal replacements that are specially made for the unique dietary needs of people with diabetes can help you manage blood sugar spikes.",
    "consultNow" : "Dietician"
  },
  "352" : {
    "itemNumber" : 352,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Are meal replacements effective for weight management?",
    "answer" : "As part of a calorie-controlled nutrition plan, meal replacements can help you achieve your weight loss goals.Use of meal replacements once or twice daily to replace a usual meal can result in significant weight loss.",
    "consultNow" : "Dietician"
  },
  "353" : {
    "itemNumber" : 353,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "How do I choose a meal replacement that is right for diabetes and weight management?",
    "answer" : "People with diabetes need to be mindful of the number of calories and the amount and type of carbohydrates listed on the nutrition label. A meal replacement for weight loss and blood sugar control should provide appropriate calories (fewer than 350) and healthy carbohydrates. Important nutrients to look for in a meal replacement are protein, unsaturated fat, fiber, vitamins, and minerals.",
    "consultNow" : "Dietician"
  },
  "354" : {
    "itemNumber" : 354,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "How should meal replacements be used for losing weight?",
    "answer" : "Meal replacements may be used in place of an entire meal or a part of a meal, or instead of high-fat, high-sugar snacks. If needed, calories can be added from food sources such as fruits, vegetables, whole-grain crackers, nuts, fat-free milk, and light yogurt.",
    "consultNow" : "Dietician"
  },
  "355" : {
    "itemNumber" : 355,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Is it true that cinnamon helps reduce blood sugar?",
    "answer" : "components in cinnamon may improve the sensitivity of the receptors for insulin, a hormone that causes glucose to move out of the blood into tissues of the body where it’s needed as fuel. Cinnamon also contains antioxidants that neutralize tissue-damaging free radicals in the body.Tsoak 1/2 spoon of cinnamon in 1 glass of water night and drink that water in the morning.following an overall healthy diet and exercising regularly are the most effective things you can do to keep glucose levels in healthy range.",
    "consultNow" : "Dietician"
  },
  "356" : {
    "itemNumber" : 356,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Are there any dietary supplements that could help reduce my risk?",
    "answer" : "Your best bet is to eat a variety of healthful foods. If you feel you need a supplement, take any of the one-a-day formulas available over the counter. Check to be sure none of the vitamins or minerals is greater than 100% in the supplement.",
    "consultNow" : "Dietician"
  },
  "357" : {
    "itemNumber" : 357,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "I usually cook with a lot of herbs and spices. Do I need to cut down or watch what I use now that I have diabetes?",
    "answer" : "Not at all. You can keep using most of your favorite herbs and spices. However, if you need to lower the amount of salt and sodium in your diet, be careful with seasonings that contain these ingredients. A wonderful way to flavor food without adding salt is to use flavoring extracts, garlic, and fresh or dried spices and herbs.",
    "consultNow" : "Dietician"
  },
  "358" : {
    "itemNumber" : 358,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Can I continue to eat at my favorite restaurants?",
    "answer" : "If you like fast-food restaurants, most can give you nutritional information about the items on their menus. This will help you know how much carbohydrate, fat, and protein you're eating.Generally, whenever you eat out, you're safest sticking to selections that are broiled, baked, or grilled. Avoid fried foods because they are higher in fat. Ask your server to bring your salad with the dressing on the side.",
    "consultNow" : "Dietician"
  },
  "359" : {
    "itemNumber" : 359,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "My husband and I have a snack before bedtime. He usually has a bowl of ice cream. What can I eat that won't cause my blood sugar to go too high?",
    "answer" : "Eat a bowl of fruits,buttermilk,milk,you can also take fruit salad.Dont go for high fat dairy products which your husband eats.Dont eat any carbohydrate rich foods too.",
    "consultNow" : "Dietician"
  },
  "360" : {
    "itemNumber" : 360,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "I hear a lot about high-protein and low-carbohydrate diets. Can they help me control my blood sugar?",
    "answer" : "High-protein and low-carbohydrate diets are not good choices for anyone who has kidney damage caused by diabetes. Too much protein in the body makes the kidneys work too hard.",
    "consultNow" : "Dietician"
  },
  "361" : {
    "itemNumber" : 361,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "How many carbohydrates can I have each day?",
    "answer" : "Number calories you eat or need depends on several things, including your age, overall health, and activity level.",
    "consultNow" : "Dietician"
  },
  "362" : {
    "itemNumber" : 362,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Can diabetes go away completely",
    "answer" : "Currently no cure exists for diabetes. Type 1 diabetes is a deficiency of the pancreas to produce insulin, so insulin injections are necessary to sustain life. Type 2 diabetes is more common; the pancreas can produce some insulin, but not enough for the diet and size of the body, and/or the insulin functions poorly due to insulin resistance.healthy lifestyle changes such as weight loss and exercise can decrease the need for medication for type 2 diabetes. Even if symptoms diminish and blood glucose measures normal, the disease is still present.",
    "consultNow" : "Dietician"
  },
  "363" : {
    "itemNumber" : 363,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "If I have diabetes, should I avoid all sweets and sugars?",
    "answer" : "If you have diabetes you should limit the amount of fats and sweets you eat. These foods have calories, but not much nutrition. Some contain saturated fats and cholesterol that increase your risk of heart disease. Limiting these foods will help you lose weight and keep your blood glucose and blood fats under control.It is okay to have sweets once in a while. Try having sugar-free sweets, diet soda, fat-free ice cream or frozen yogurt, or sugar-free hot cocoa mix to satisfy a \"sweet tooth.\" Remember, fat-free and low sugar foods still have calories.So take those in limited amounts.",
    "consultNow" : "Dietician"
  },
  "364" : {
    "itemNumber" : 364,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "How do I manage my diabetes every day?",
    "answer" : "To manage your diabetes, here are things to do every day Take your medicines Keep track of your blood glucose (blood sugar) Check your blood pressure. Check your feet Brush your teeth . Stop smoking. Eat well. Be active.",
    "consultNow" : "Dietician"
  },
  "365" : {
    "itemNumber" : 365,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "What steps can I take to lose weight to prevent or delay type 2 diabetes?",
    "answer" : "Your weight affects your health in many ways. Being overweight can keep your body from making and using insulin properly. It can also cause high blood pressure. If you are overweight or obese, choose sensible ways to reach and maintain a reasonable body weight. Make healthy food choices. Get at least 30 minutes of exercise at least five days a week",
    "consultNow" : "Dietician"
  },
  "366" : {
    "itemNumber" : 366,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Can I prevent Diabetes when my risk is high?",
    "answer" : "If you have family history, you cannot do anything about that. Things in your hands are healthy eating (i.e., eating vegetables and fruits, avoiding fast food), healthy life-style (regular exercise, avoidance of smoking, moderation of alcohol, etc) and keeping your weight in accordance to your height. Certain medicines are being used recently for preventing Diabetes in people who have borderline Diabetes.",
    "consultNow" : "Dietician"
  },
  "367" : {
    "itemNumber" : 367,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "I have nobody in my whole family with Diabetes, how did I get it then?",
    "answer" : "Family history certainly is an important factor, but the fact is being Asian, we all have high-risk gene for Diabetes. Remember it is not your fault that you have Diabetes. You are just happened to be the person who got it. In India 4% of villagers and up to 15% of city dwellers have Diabetes. Not only we have more Diabetes we are getting it at an earlier age than people in the west",
    "consultNow" : "Dietician"
  },
  "368" : {
    "itemNumber" : 368,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Do I need to stop eating out? Can I have ice cream? Can I take artificial sweetener?",
    "answer" : "Certainly not, as long as you are not planning to eat out everyday! You need to know what the right food is and correct amount.Occasionally yes, but do not make a habit of eating ice cream regularly. There are certain ice cream available now with no added sugar, but do not forget they have calories.Certainly yes, artificial sweeteners are safe. Do not put them in cooking, they break down when heated. So they will not be sweet any more.",
    "consultNow" : "Dietician"
  },
  "369" : {
    "itemNumber" : 369,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Can I control Diabetes with Diet only?",
    "answer" : "Diet is a very important aspect in the treatment of Diabetes particularly the timing of it. At the beginning you may be successful in controlling Diabetes with diet only, but unfortunately a time will come when only diet won’t be enough, you will require medicine. This time is different for different people, for somebody this can be a few months while for others it may be a few years. It is very important to try with diet first; this will help you to understand the principles of diet and will convince you the need for treatment to control Diabetes.",
    "consultNow" : "Dietician"
  },
  "370" : {
    "itemNumber" : 370,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "If I have type 2 diabetes can I stop taking diabetes medications if I eliminate candy and cookies from my diet?",
    "answer" : "If you eliminate concentrated sources of carbohydrates (foods that turn into sugar in your blood stream) like candy and cookies, you may be able to reduce or eliminate the need for diabetes medications. Everyone with type 2 diabetes will benefit from an improved diet, but you may still need other interventions, such as increased physical activity, weight loss or medications to keep your blood sugars in the target range. Check with your doctor about any diabetes medication dose adjustments that may be required if you change your diet.",
    "consultNow" : "Dietician"
  },
  "371" : {
    "itemNumber" : 371,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Does a strict diabetic diet mean eliminating sugar totally from the diet?",
    "answer" : "No. You can still enjoy a small serving of your favorite dessert if you have diabetes. The key is moderation. Cut back on the other carbohydrate-containing foods when you want to eat sweets.",
    "consultNow" : "Dietician"
  },
  "372" : {
    "itemNumber" : 372,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Is high protein diet best for a diabetic?",
    "answer" : "Eating too much protein (especially animal protein) may cause insulin resistance, a key factor in diabetes. A healthy balanced diet includes protein, carbohydrates and fats",
    "consultNow" : "Dietician"
  },
  "373" : {
    "itemNumber" : 373,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Why should my daily carbohydrate intake be consistent?",
    "answer" : "Consistent carbohydrate intake helps to keep your blood sugar from going too high or too low during the day. This is also helpful in deciding the dose of oral medicines more accurately.",
    "consultNow" : "Dietician"
  },
  "374" : {
    "itemNumber" : 374,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Can eating too much sugar cause diabetes?",
    "answer" : "People who eat a lot of high sugar foods are at risk of becoming overweight and being overweight is associated with type 2 diabetes. Eating a lot of sugar, however, is not a cause of diabetes.",
    "consultNow" : "Dietician"
  },
  "375" : {
    "itemNumber" : 375,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "If I take my medication (pills or insulin), do I have to watch my diet?",
    "answer" : "Eating appropriate foods at regular meal times is an important part of the management of diabetes whether you take medication or not. The medication alone cannot adequately control your blood sugar and keep you in good health.",
    "consultNow" : "Dietician"
  },
  "376" : {
    "itemNumber" : 376,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "What meal plan should people with diabetes follow?",
    "answer" : "There are many methods of meal planning that a person with diabetes can follow, such as: the exchange diet, carbohydrate counting, calorie/fat counting. There is no one \"diabetic\" diet. The meal planning method you choose should be one that fits your lifestyle and meets your nutritional needs.",
    "consultNow" : "Dietician"
  },
  "377" : {
    "itemNumber" : 377,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "he Nutrition Facts label on food packages tells me how many grams of sugar are in foods. How much sugar am I allowed to have?",
    "answer" : "\"Sugar\" is listed on the food label under Total Carbohydrate because it is a carbohydrate. Carbohydrates have the greatest effect on blood glucose (blood sugar) levels. Nearly all of the carbohydrates you eat will eventually be made into glucose. For this reason, the total amount of carbohydrates you eat is more important than the source of those carbohydrates. It doesn't matter if it is carbohydrates from fruits, breads, cereal, candy or maple syrup. All carbohydrates will cause your blood glucose to rise. In following your meal plan, try to include carbohydrates that provide good nutrition (vitamins, minerals and fiber) instead of carbohydrates that have little or no nutritional value.",
    "consultNow" : "Dietician"
  },
  "378" : {
    "itemNumber" : 378,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Should I be concerned about fat in my diet?",
    "answer" : "Yes! People with diabetes are more likely to develop heart disease than those without diabetes. For that reason, the following guidelines are good rules of thumb: watch your portions add healthy fats like monounsaturated fats and polyunsaturated fats, omega 3 fatty acids,",
    "consultNow" : "Dietician"
  },
  "379" : {
    "itemNumber" : 379,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "I am a 40-year-old diabetic. I follow a strict exercise and diet regimen but find it difficult to start my day with a healthy breakfast option. Can you please help me with some healthy breakfast options good for diabetics that are tasty, easy to prepare and filling?",
    "answer" : "Be it breakfast or meals, diabetics should keep one thing in mind that they should eat food low in glycemic index to control their blood sugar levels. With low-glycemic foods, the sugar in the body that in turn helps you to control your diabetes. Here are some quick and healthy breakfast options for diabetics that keep you full for a longer time Jowar Uttapam,Oats upma.Ragi jawa,mixed millet idli,Dhalia upma",
    "consultNow" : "Dietician"
  },
  "380" : {
    "itemNumber" : 380,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Hi I have Diabetes and can I eat nuts or will they shootup my blood sugar levels?",
    "answer" : "Of course people with diabetes should eat nuts. As a plant food they have a wide variety of nutritional benefits for people with diabetes. Nuts can reduce the rise in blood glucose after the meal, as they have a GI lowering effect.32-34 Nuts also help to manage other health issues that often affect people with diabetes, for example, weight management, heart disease and high blood pressure. Plus nuts are a source of important nutrients for people with diabetes – healthy fats, fibre, plant sterols, vitamins and minerals – and can help meet recommended daily intakes.",
    "consultNow" : "Dietician"
  },
  "381" : {
    "itemNumber" : 381,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Can I still drink alcohol now that I have diabetes?",
    "answer" : "Yes, but moderately. Two drinks for adult men and one drink for adult women is the recommended maximum daily alcohol intake for most people with diabetes. Certain prescription drugs and medical complications may make drinking alcohol unadvisable (i.e., with certain medications, when specific complications exist). You should talk to your endocrinologist or physician about your specific medical history and drinking. Alcohol can also cause hypoglycemia, so carry a fast-acting carbohydrate source if and when you do choose to drink.",
    "consultNow" : "Dietician"
  },
  "382" : {
    "itemNumber" : 382,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Why are carbohydrates so important in diabetes care?",
    "answer" : "Carbohydrates are important because they're your body's main source of glucose. Overload on dietary carbohydrates and your blood glucose levels rise. That's why knowing the quantity of carbohydrates you're eating, and other related nutrient qualities of your food, is so important.",
    "consultNow" : "Dietician"
  },
  "383" : {
    "itemNumber" : 383,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Now that I have diabetes, do I cut all sugar out of my diet?",
    "answer" : "Eating right with diabetes is more about moderation and healthy food choices then severe dietary restriction. While you do need to manage your intake of all carbohydrates (i.e., starchy vegetables and grains and cereals as well as sugar), people with diabetes can occasionally enjoy foods containing sugar as part of their overall daily meal plan. It should be remembered, however, that sugar is calorie-rich and nutrient-poor, so moderation is key. Many people with diabetes prefer to use artificial sweeteners and sugar substitutes for its lower calorie content and minimal impact on blood glucose levels. A Dietitian can help you create a meal plan that works for you.",
    "consultNow" : "Dietician"
  },
  "384" : {
    "itemNumber" : 384,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Diabetes",
    "question" : "Why do I go to bed with normal blood sugar levels and wake up with high levels when I haven't eaten all night?",
    "answer" : "Morning highs are typically caused by one of two things: The Somogyi effect (also called rebound hyperglycemia) or Dawn Phenomenon.With the Somogyi effect, you may be experiencing hypoglycemia (or low blood glucose episodes) during the night. In reaction to these untreated lows, your body releases stress hormones and the subsequent high blood glucose levels that you're seeing in the morning. The Dawn Phenomenon is an early-morning (4:00 to 8:00 AM) natural rise in blood glucose levels that is caused by a release of hormones as your body prepares to meet the day. Sometimes these morning highs can be avoided by a bedtime snack at night or other adjustments in insulin or medication.",
    "consultNow" : "Dietician"
  },
  "385" : {
    "itemNumber" : 385,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Hi I have Peptic ulcer,my stomach is getting irritated if I eat certain foods can you tell me why is that happening?",
    "answer" : "A diet for ulcers is an eating plan that limits or does not include foods that irritate your stomach. Your stomach can be irritated by foods that increase stomach acid. You will need to limit or avoid drinks and foods that cause your symptoms, such as stomach pain, heartburn, or indigestion.",
    "consultNow" : ""
  },
  "386" : {
    "itemNumber" : 386,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "my stomach is getting irritated if I eat certain foods can you tell me Which foods should I limit or avoid?",
    "answer" : "Not all foods affect everyone the same way. You will need to learn which foods cause your symptoms. Seasonings, such as pepper, increase stomach acid and may irritate your stomach. Foods that contain chocolate, are spicy, or are high in fat may also irritate your stomach. Drinks that contain alcohol or caffeine may also cause symptoms.",
    "consultNow" : ""
  },
  "387" : {
    "itemNumber" : 387,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Hi can you tell me what are the beverages which I shouldn’t drink?",
    "answer" : "Hot cocoa and cola,Whole milk and chocolate milk,Peppermint and spearmint tea,Regular and decaf coffee,Green and black tea, with or without caffeine,Orange and grapefruit juices",
    "consultNow" : ""
  },
  "388" : {
    "itemNumber" : 388,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Hi can you tell me what are the Spices and seasonings which I shouldn’t drink?",
    "answer" : "Chili powder,Garlic powder,Black and red pepper",
    "consultNow" : ""
  },
  "389" : {
    "itemNumber" : 389,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Hi can you tell me what are the foods which I shouldn’t eat as I am suffering from peptic ulcer?",
    "answer" : "Eat a variety of healthy foods from all the food groups. Eat fruits, vegetables, whole grains, and fat-free or low-fat dairy foods. Whole grains include whole-wheat breads, cereals, pasta, and brown rice. Choose lean meats, poultry (chicken and turkey), fish, beans, eggs, and nuts. A healthy meal plan is low in unhealthy fats, salt, and added sugar. Healthy fats include olive oil and canola oil.",
    "consultNow" : ""
  },
  "390" : {
    "itemNumber" : 390,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Hi I am having ulcer and I know the diet to follow ,can you tell me some guidelines which may help me to follow my diet?",
    "answer" : "Do not eat right before bedtime. Stop eating at least 2 hours before bedtime. Eat small, frequent meals. Your stomach may tolerate small, frequent meals better than large meals.",
    "consultNow" : ""
  },
  "391" : {
    "itemNumber" : 391,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "I have peptic ulcer and I am following with all the diet and taking precautions,but still am not able to reduce the symptoms,they are getting more worse.can you tell me what is the reason?",
    "answer" : "Stress may worsen the signs and symptoms of a peptic ulcer. Examine your life to determine the sources of your stress and do what you can to address those causes. Some stress is unavoidable, but you can learn to cope with stress with exercise, spending time with friends or writing in a journal.",
    "consultNow" : ""
  },
  "392" : {
    "itemNumber" : 392,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Hi can you tell me if the follow the diet and continue with smoking.can my symptoms reduce?",
    "answer" : "Smoking may interfere with the protective lining of the stomach, making your stomach more susceptible to the development of an ulcer. Smoking also increases stomach acid.so its better to avoid smoke.",
    "consultNow" : ""
  },
  "393" : {
    "itemNumber" : 393,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Hi can you tell me if the follow the diet and continue with alcohol.can my symptoms reduce?",
    "answer" : "Excessive use of alcohol can irritate and erode the mucous lining in your stomach and intestines, causing inflammation and bleeding.so its better to avoid alcohol.",
    "consultNow" : ""
  },
  "394" : {
    "itemNumber" : 394,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Can you tell me what are the important vitamins which has to be included in my diet?",
    "answer" : "Include Vitamin A,E,K,C,Zinc and Omega3 fatty acids in your diet for speed healing when damage occurs.",
    "consultNow" : ""
  },
  "395" : {
    "itemNumber" : 395,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "I am a female age of 45yrs and can you tell me what are the food tips to be followed?",
    "answer" : "Caffeine (caffeinated or decaffeinated) can worsen ulcer symptoms. If you are a coffee drinker, slowly wean yourself over a period of two to three weeks. Avoid caffeinated teas, chocolate, and the many soft drinks which contain caffeine. Avoid sodium found in salt, soy sauce, canned soup, potato chips, salted nuts, and salted meats such as bacon.Avoid alcohol. Avoid spicy foods particularly curry, black pepper, chili peppers, and mustard. Avoid smoking if you are a smoker. Avoid rich fatty food and fried food. Avoid tomatoes.",
    "consultNow" : ""
  },
  "396" : {
    "itemNumber" : 396,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Hi I have Peptic ulcer can you tell what are the other diet tips to be followed ?",
    "answer" : "Ulcer patients should develop a routine of eating three regular meals, and two to three small snacks daily. Include foods rich in starch and fiber. Include milk protein in your diet. Avoid overeating, and also going long periods without eating. Avoid eating stale or expired foods. Chew your food carefully. Do not eat at or near bedtime. Finish your meal about 2-3hours before bedtime. To help the meal digest, walk for about 15-20 minutes after your last meal before going to bed. Use antacids like Zantac and Pepcid only if absolutely necessary. Do regular exercise and manage your weight.",
    "consultNow" : ""
  },
  "397" : {
    "itemNumber" : 397,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Is there any instant relief through which I can get relief from irritation in the stomach?",
    "answer" : "Drink More of liquids like Coconut water,Barley water and Buttermilk thin which can give you relief and if you have any food which is not friendly can make the symptoms worse.",
    "consultNow" : ""
  },
  "398" : {
    "itemNumber" : 398,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Hi I have peptic ulcer can you tell me how does the caffine play role in aggrevating the symptoms?",
    "answer" : "Because caffeine can increase the production of stomach acid, moderate your intake of caffeinated beverages (coffee, tea, cola drinks) and de-caffeinated coffee, and drink them with meals.",
    "consultNow" : ""
  },
  "399" : {
    "itemNumber" : 399,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "Can you tell me how using supplements are helpful?",
    "answer" : "Use foods or supplements containing the beneficial bacteria Lactobacillus and Bifidobacterium which help to fight harmful bacteria in your intestine, and improve digestive function. They may also help complement medical treatments such as antibiotic therapy.",
    "consultNow" : ""
  },
  "400" : {
    "itemNumber" : 400,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "What effect is a before-dinner cocktail have on digestion?Why is it inadvisable to persons with peptic ulcer?",
    "answer" : "At optimum levels, alcohol increases appitite and is said to stimulate the secretion of gastric fluids that aids in digestion. People suffering from peptic ulcer have problems with their gastric mucosa (it prevents the stomach-acid from burning the stomach lining) and alcohol further detoriates this condition by disturbing this protective layer. This exacerbates the existing ulceration.",
    "consultNow" : ""
  },
  "401" : {
    "itemNumber" : 401,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "why do patients who have had a large portion of their stomachs removed for treatment of stomach cancer or severe peptic ulcer disease have to eat small quantities of food frequently instead of consuming three meals a day?",
    "answer" : "To neutralize the acid in stomach which continuosly secreted sometimes even on empty stomach",
    "consultNow" : ""
  },
  "402" : {
    "itemNumber" : 402,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "My son was diagnosed with a stomach ulcer and he's 13 years old, he wasn't given any medication; does that mean the ulcer will just heal itself?",
    "answer" : "yes but be he'll have to be very careful of his eating habits for 2 or 3 months. Many things are not so obvious, like milk can really aggravate it.",
    "consultNow" : ""
  },
  "403" : {
    "itemNumber" : 403,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "I have a rather nasty peptic ulcer. Other than bananas, are there any fruits that won't aggravate it?",
    "answer" : "Eat a diet rich in fiber, especially from fruits and vegetables; this will reduce your risk of developing an ulcer in the first place and can speed your recovery if you already have one. The vitamin A is an added benefit from these foods.Foods containing flavonoids, like apples, celery, cranberries (including cranberry juice), onions, and tea may inhibit the growth of H. pylori . Also peaches, pears and apricots are low in acid so please avoid.",
    "consultNow" : ""
  },
  "404" : {
    "itemNumber" : 404,
    "doctorName" : "Dt.Swathi",
    "subCategory" : "Peptic ulcer",
    "question" : "My husband was just diagnosed with a peptic ulcer. Can he still drink beer?",
    "answer" : "No Alcohol,beer and other beverages are strictly avoided as it may aggravate the symptoms.",
    "consultNow" : ""
  }
};


// for (k in qandasSwathi){
//   console.log(count++, qandasSwathi[k]);
// }
// return;

for (var key in qandasSwathi) {
  count++;
  var qanda = qandasSwathi[key];
  qanda.consultNow = !!(qanda.consultNow != "0" || qanda.consultNow != "false");
  qanda.consultDoctorType = qanda.consultNow;
  qanda.category = "Diabetes";
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};