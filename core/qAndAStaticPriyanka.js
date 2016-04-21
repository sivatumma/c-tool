var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasPriyanka = {
  "My wife is 30 years of age and didn’t know that she had conceived, will the smoking and drinking during the first month of pregnancy harm our baby in any way?": {
    "question": "My wife is 30 years of age and didn’t know that she had conceived, will the smoking and drinking during the first month of pregnancy harm our baby in any way?",
    "answer": "It is unlikely that moderate smoking or drinking during the first month of pregnancy will be harmful. But it is very important for a woman to stop smoking or drinking as soon as she knows she is pregnant — whether she smokes and drinks moderately or heavily. It’s always best to prepare for the birth of a child before pregnancy. But if preconception planning is not possible, a woman still can prepare during pregnancy. The key is taking good care of her health, which includes eliminating or reducing any toxins in her system as well as having good prenatal care. It will help ensure a healthy pregnancy — from embryo, to fetus, to the birth of her child. The healthier a woman is, the stronger she and her child are likely to be. Talk to a specialist now for healthy pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am pregnant but my husband is hesitant to indulge in intimacy because of the growing baby, how safe is it to have sex during pregnancy?": {
    "question": "Am pregnant but my husband is hesitant to indulge in intimacy because of the growing baby, how safe is it to have sex during pregnancy?",
    "answer": "It's perfectly okay for pregnant women and their partners to enjoy their sexuality during pregnancy. For some women, the hormonal shifts during pregnancy increase sexual desire. For others, the discomforts of pregnancy decrease sexual desire. But for most women, having sex during pregnancy can help reduce stress and the tensions that can build up during pregnancy. Most women who want to are able to enjoy sex throughout pregnancy. A pregnant women should avoid vaginal intercourse if either partner has a herpes sore or if she has a high risk of miscarriage has a high risk of premature labor has broken her waters has pain believes labor has begun is unable to find a comfortable position Additionally, a pregnant woman should abstain for sex play during the last 12 weeks of pregnancy if she has a partner who may infect her with herpes. Other satisfying forms of sex play can be enjoyed when a couple wants to avoid vaginal intercourse. Feel free to consult your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How long will the morning sickness last? I'm so nauseous!": {
    "question": "How long will the morning sickness last? I'm so nauseous!",
    "answer": "Morning sickness should occur less and less by the second trimester/4 months. Maybe sooner! On rare occasions it will stick around. Rare! Speak to your doctor for more details around handling this situation.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What dangers should I watch out for? Is there anything unsafe in my house?": {
    "question": "What dangers should I watch out for? Is there anything unsafe in my house?",
    "answer": "Avoid strenuous, rough exercise: be kind to your joints and don't overdo it. No scuba diving or riding rollercoasters! Avoid drugs and alcohol, second hand smoke, and always check with your doctor before taking any kind of medication. Check the labels on your dandruff shampoo, lotion treatments, etc. Avoid eating raw fish, high-mercury fish, soft cheeses, deli meats, shellfish, unpasteurized milk and juice, undercooked meats, raw sprouts (because of bacteria), left out foods, 'fake' sugars, excesses of Vitamins A, C, or D, and junk foods. Have someone else change the cat liter. Take precautions when you clean, wear gloves, check labels just to be sure of safety. If you've ever thought to switch from the chemical cleaners to greener products like baking soda and vinegar, you might as well go for it now. Stay away from chemicals, car exhaust fumes, and other potentially toxic fumes when possible. For more specific doubts, consult your doctor.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What can I do about my fatigue?": {
    "question": "What can I do about my fatigue?",
    "answer": "Try to get 9 or so hours of sleep per night. If you're having trouble getting to sleep, get up and do something sleep inducing like watching late night TV or reading, until your eyes get droopy. If your mind is racing, get a note pad and write it out so you're mind can relax. Try to take 20-minute power naps during the day. Make sure you're eating well and exercising. Don't forget to relax! Ask your doctor for more practical solutions.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How can I calculate my due date?": {
    "question": "How can I calculate my due date?",
    "answer": "Date of the first day of your last period + 281 days = due date, or Date of the first day of your last period + 7 days - 3 months = due date Pregnancy, on average, lasts 267 days (38 weeks) from conception. If you positively know your conception date, you can add 267 days to it for your due date. * These are based on 28 days cycle. Catch up with your doctor for a more accurate expected date of delivery.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "When will I show?": {
    "question": "When will I show?",
    "answer": "You should show around 12 weeks, or between months 3-4. Gas, bloating, etc., may have you looking pregnant before then. If you've been pregnant before you may \"pop out\" earlier. Speak with your doctor regarding the healthy growth of your baby.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "We just found out I'm three weeks pregnant after years of trying and two cycles of IVF. I’m so scared something is going to go wrong and just want to be doing everything right. Should I be eating anything in particular?": {
    "question": "We just found out I'm three weeks pregnant after years of trying and two cycles of IVF. I’m so scared something is going to go wrong and just want to be doing everything right. Should I be eating anything in particular?",
    "answer": "Healthy eating when you are pregnant is important—a balanced diet (plus a supplement that contains folate and iodine) is essential for good health, as well as for your growing baby. Vitamins and minerals are important – but we tend to think about foods and meals. Aim to eat foods from the five food groups rather than any extra supplements (like powders). Fresh fruit and vegetables are the best super foods for you and your baby! Consult your doctor for detailed diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What the best supplement is during pregnancy? Do you have any advice?": {
    "question": "What the best supplement is during pregnancy? Do you have any advice?",
    "answer": "Best evidence recommends folate and iodine; this can come from a multivitamin. Also, remember to ensure you get all the nutrients, vitamins and minerals you need for pregnancy, you should include foods from all food groups in your daily diet. It is best to talk to your doctor regarding your diet and supplement needs.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Can you eat TOO much fruit during pregnancy, with natural sugar etc? I always find myself going straight for fresh fruit as it is so hot and muggy.": {
    "question": "Can you eat TOO much fruit during pregnancy, with natural sugar etc? I always find myself going straight for fresh fruit as it is so hot and muggy.",
    "answer": "We recommend going for '2 and 5' two fruit and 5 serves of veges a day. This is to keep a healthy balance and make sure that you don't miss out on the extra vitamins from the other food groups. But going over that quota occasionally won't hurt you or your bub! It is highly recommended that you speak to your doctor regarding your diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Despite having very good diet, I am Iron deficient.": {
    "question": "Despite having very good diet, I am Iron deficient.",
    "answer": "It would be best to speak to your doctor about this and he/she can suggest you supplements. If still they can't determine the cause, they can refer you to a specialist.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Are there any foods I should be avoiding while pregnant?": {
    "question": "Are there any foods I should be avoiding while pregnant?",
    "answer": "It’s important to be careful with food that might be contaminated with bacteria. Good food hygiene storage and preparation practices are ESSENTIAL. Foods that might carry harmful bacteria and should be avoided include: -raw/uncooked/smoked meat and seafood, ready to eat chilled seafood -deli meats, cooked cold meat, pate, meat spreads -leftovers (more than 24 hours after cooking) -pre-prepared salads, smorgasbords, buffets -unpasteurised milk and soft serve ice cream -soft cheeses (brie, camembert, ricotta, feta, blue). -unwashed raw fruit and vegetables -raw eggs or foods containing raw or partially cooked eggs.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I’m experiencing morning sickness for most of the day and wondering if there was anything I can do to help this?": {
    "question": "I’m experiencing morning sickness for most of the day and wondering if there was anything I can do to help this?",
    "answer": "Most women suffer from sickness early in their pregnancy. This is usually due to hormonal changes of pregnancy and can affect you at any time of the day. Symptoms usually disappear or become much milder by around 16 weeks. Some tips to help you manage your morning sickness include: eating small amounts every two hours as an empty stomach can cause nausea; avoiding smells and foods that make you feel worse; eating healthier carbohydrate foods such as dry toast, crackers, breakfast cereals or fruit; eating fewer fatty and sugary foods. Speak to your doctor or midwife if it goes on beyond the end of your first trimester.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How can I help my cravings for ice cream and chocolate cakes, lately at times I feel like a crazy woman for these items.": {
    "question": "How can I help my cravings for ice cream and chocolate cakes, lately at times I feel like a crazy woman for these items.",
    "answer": "There are no good or bad foods but when you have a 'sometimes' food, make sure you enjoy it! And don’t eat it for every meal! It is best to follow the diet chart suggested by your doctor.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How can I increase my Iron absorption during pregnancy?": {
    "question": "How can I increase my Iron absorption during pregnancy?",
    "answer": "Improving iron absorption is achieved by consuming foods rich in iron with vitamin c. We always think of citrus but capsicum and tomato are also good. Iron rich foods are meats, chicken and fish and leafy green vegetables and fortified breads and cereals. For example, have a tomato and spinach sandwich or try a stir-fry with capsicum, leafy greens and meat. Or have a glass of orange juice with your breakfast. For more details and supplements contact your doctor.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How much weight is ok to gain during each trimester of my pregnancy? I'm not eating much at the moment but want to make sure I’m gaining the right amount.": {
    "question": "How much weight is ok to gain during each trimester of my pregnancy? I'm not eating much at the moment but want to make sure I’m gaining the right amount.",
    "answer": "The amount of weight to gain in pregnancy depends on how much you weigh or weighed before pregnancy. This advice comes from big studies internationally that have shown that, based on your pre-pregnancy BMI (or body mass index), there’s different amounts of weight to gain for the healthiest pregnancy possible. Gaining within your target range means you are at the lowest risk of high blood pressure, gestational diabetes, having to have a c-section because your baby has grown too big, and/or retaining weight after you deliver. It is also linked to how successful you will be with breastfeeding. Women who do not have enough weight are more likely to deliver their baby too early. Feel free to consult your doctor for more personalised answer.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My job involves working with animals. What precautions should I take during my pregnancy?": {
    "question": "My job involves working with animals. What precautions should I take during my pregnancy?",
    "answer": "Avoid contact with sheep and lambs at lambing time. This is because some lambs are born carrying the germs that cause listeriosis, toxoplasmosis and chlamydia. These may be pass on to you and your unborn baby. Toxoplasma is also found in cat poo. You should always wash your hands after handling cats and kittens and ask someone else to wash out cat litter trays. Talk to your doctor for more lifestyle related advise.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am 6 months pregnant, is it ok for me to plan a holiday and travel.": {
    "question": "Am 6 months pregnant, is it ok for me to plan a holiday and travel.",
    "answer": "In general it is safe to travel during pregnancy. When in a car, wear the seat belt so that the straps go above and below your bump, not across it. Flying is not known to be harmful. Most airlines will not allow you to fly in the late stages of pregnancy. This is because planes are not the ideal place to go into labour, and they would prefer not to divert the flight to take you to the nearest hospital. It makes sense not to travel to anywhere too remote and far from medical assistance, particularly in the early or later stages of pregnancy. Also not all travel vaccinations are safe to use in pregnancy, so consider your destination carefully.It is advised that you speak to your doctor before planning any travel.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I have been partying hard and taking recreational drugs, are they likely to affect my pregnancy?": {
    "question": "I have been partying hard and taking recreational drugs, are they likely to affect my pregnancy?",
    "answer": "The effects of all the different types of recreational drugs on pregnancy are not fully known. However, it is safe to assume that if you use recreational drugs, it is likely to pose a risk to the unborn child. Some people can stop drugs without any help but many people will require help. If you cannot come off drugs easily, see your doctor for help.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My doctor has been insisting on including iodine in my diet during pregnancy, how does it help?": {
    "question": "My doctor has been insisting on including iodine in my diet during pregnancy, how does it help?",
    "answer": "Iodine is known to be important for the healthy development of the brain of the fetus. A woman who is pregnant needs more iodine than usual to supply the developing fetus. If they do not have enough iodine, the baby may end up less intelligent than they otherwise would. Iodine mainly comes from milk, yogurt, eggs and fish. Because iodine intake can be variable, some countries routinely fortify cereals and bread with iodine. Some salt contains iodine, but not all. Most people try to avoid using much salt in line with health recommendations. So there are concerns that some pregnant women may not be getting sufficient iodine in their diet.You may wish to discuss this with your doctor or midwife.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How much Vitamin D do I need during my pregnancy?": {
    "question": "How much Vitamin D do I need during my pregnancy?",
    "answer": "Vitamin D is needed for growth and supplements are recommended for all pregnant women, breast-feeding women and breast-fed babies. The dose if you are pregnant or breast-feeding is 400 units (10 micrograms) daily. Some experts think that women who get little or no sunshine on their skin need a higher dose, such as 800 units (20 micrograms) daily. This is because most of the vitamin D that we get is made in the skin with the help of sunlight. Your doctor is best person to advise.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How important are the folic acid supplements?": {
    "question": "How important are the folic acid supplements?",
    "answer": "You should take folic acid tablets (supplements). Ideally, do this from at least one month before you get pregnant, and continue taking them until at least the end of the 12th week of pregnancy - even if you are healthy and have a good diet. Folic acid is a naturally occurring vitamin found in spinach, sprouts, broccoli, green beans and potatoes. Some bread and breakfast cereals are fortified with folic acid. However, you need a good supply of folic acid when you are pregnant to help with the development of the baby. If you take folic acid tablets in early pregnancy you reduce the risk of having a baby born with a spinal cord problem such as spina bifida. Consult your doctor regarding the need for and dosage of folic aid in your individual case.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Why should I avoid eating cod liver oil and liver products during my pregnancy?": {
    "question": "Why should I avoid eating cod liver oil and liver products during my pregnancy?",
    "answer": "You need a small amount of vitamin A to keep healthy. However, large amounts can harm an unborn baby. So, avoid: •Liver and liver products such as liver pâté and cod liver oil supplements. •Vitamin tablets or supplements which contain vitamin A. Speak to your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Can caffeine intake bother my preganancy?": {
    "question": "Can caffeine intake bother my preganancy?",
    "answer": "Limit the amount of caffeine to no more than 300 mg per day. Caffeine is a substance that occurs naturally in foods such as tea, coffee and chocolate; is added to some drinks such as cola, and some energy drinks; and is an ingredient of some cough and cold remedies, and some painkillers which you can buy at pharmacies. Having a lot of caffeine increases your risk of having a miscarriage and a baby with low birth weight. The increased risk is small. But, it is best to play safe. Talk to your doctor about the diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is consumption of fish safe during pregnancy?": {
    "question": "Is consumption of fish safe during pregnancy?",
    "answer": "in general, fish is a good source of protein and other nutrients. Aim to eat at least two portions of fish per week, with at least one portion being oily fish. However, there are some important exceptions. Some types of fish contain a high level of mercury which can damage the developing nervous system of an unborn baby. Therefore it is best to consult your doctor regarding the same.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Do I really need to eat for two during my pregnancy?": {
    "question": "Do I really need to eat for two during my pregnancy?",
    "answer": "During pregnancy it is important to continue to eat a healthy balanced diet. You may have an increased appetite but it is not necessary to 'eat for two', even if you are having twins or triplets. Too much weight gain increases your risk of developing problems later in the pregnancy. Also, extra weight is difficult to lose after the birth. For women with a normal pre-pregnancy weight, a weight gain of 11-16 kg over the pregnancy is normal. Speak to your doctor for complete information.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What defines a healthy diet during pregnancy?": {
    "question": "What defines a healthy diet during pregnancy?",
    "answer": "Briefly, a third of most meals should be starch-based foods (such as bread, cereals, potatoes, rice, and pasta), with fruit and vegetables. Eat plenty of fibre, which can be found in wholegrain breads as well as fruit and vegetables. Eat some protein foods such as meat, fish, pulses, chicken, etc, every day. Choose lean meat, cut the fat off red meat and the skin off chicken. Try to avoid adding fat - for example, by not frying food where possible.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What are the special needs of pregnant women in terms of food?": {
    "question": "What are the special needs of pregnant women in terms of food?",
    "answer": "Include foods with plenty of iron, calcium and folic acid - a growing baby needs these nutrients right from the start of the pregnancy: •Iron is mainly in red meat, pulses, dried fruit, green vegetables and fortified cereals. •Calcium is mainly in dairy products such as milk, cheese, and yoghurt. (Low-fat milk, cheeses and yoghurts usually contain just as much calcium as the full-fat varieties.) •Folic acid is mainly in green vegetables, brown rice, and fortified cereals. Talk to your doctor for more detailed diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What new eating habits may help my healthy weight gain during pregnancy?": {
    "question": "What new eating habits may help my healthy weight gain during pregnancy?",
    "answer": "Pregnancy can create some new food and eating concerns. Meet the needs of your body and be more comfortable with these tips: •Eat breakfast every day. If you feel sick to your stomach in the morning, try dry whole-wheat toast or whole-grain crackers when you first wake up. Eat them even before you get out of bed. Eat the rest of your breakfast (fruit, oatmeal, whole-grain cereal, low-fat milk or yogurt, or other foods) later in the morning. •Eat high-fiber foods. Eating high-fiber foods, drinking plenty of water, and getting daily physical activity may help prevent constipation. Try to eat whole-grain cereals, vegetables, fruits, and beans. •If you have heartburn, eat small meals more often. Try to eat slowly and avoid spicy and fatty foods (such as hot peppers or fried chicken). Have drinks between meals instead of with meals. Do not lie down soon after eating. Talk to your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How can I stay active while pregnant?": {
    "question": "How can I stay active while pregnant?",
    "answer": "Even if you have not been active before, you can be active during your pregnancy by using the tips below: •Go for a walk around the block, in a local park, or in a shopping mall with a family member or friend. If you already have children, take them with you and make it a family outing. •Get up and move around at least once an hour if you sit in a chair most of the day. When watching TV, get up and move around during commercials. Even a simple activity like walking in place can help. Discuss more details with your doctor.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I love snacking, which snacks are permissible during pregnancy?": {
    "question": "I love snacking, which snacks are permissible during pregnancy?",
    "answer": "If you get hungry between meals, don’t eat snacks that are high in fat and/or sugar, such as sweets, biscuits, crisps or chocolate. Instead, choose from the following nutritious snacks: sandwiches or pitta bread filled with grated cheese, grilled chicken, mashed tuna, salmon or sardines and salad salad vegetables, such as carrot, celery or cucumber low-fat yoghurt or fromage frais hummus with bread or vegetable sticks ready-to-eat apricots, figs or prunes vegetable and bean soups unsweetened breakfast cereals, or porridge, with milk milky drinks or unsweetened fruit juices fresh fruit baked beans on toast or a baked potato. Talk to your doctor or dietician for personalised diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What are the key things to keep in mind while preparing food safely during pregnancy?": {
    "question": "What are the key things to keep in mind while preparing food safely during pregnancy?",
    "answer": "Wash fruit, vegetables and salads to remove all traces of soil, which may contain toxoplasma, a parasite that can cause toxoplasmosis - toxoplasmosis can harm your unborn baby. Wash all surfaces and utensils, and your hands, after preparing raw meat - this will help to avoid toxoplasmosis. Make sure that raw foods are stored separately from ready-to-eat foods, otherwise there’s a risk of contamination - this is to avoid other types of food poisoning from meat (such as salmonella, campylobacter and E. Coli). Use a separate chopping board for raw meats. Heat ready meals until they’re piping hot all the way through - this is especially important for meals containing poultry. You also need to make sure that some foods, such as eggs and sausages, are cooked very thoroughly.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I have a sweet tooth, should I be bothered about it during my pregnancy?": {
    "question": "I have a sweet tooth, should I be bothered about it during my pregnancy?",
    "answer": "Foods that are high in sugar or fat, these foods includes all spreading fats (such as butter), oils, salad dressings, cream, chocolate, crisps, biscuits, pastries, ice-cream, cake, puddings and fizzy drinks. You should eat only a small amount of these foods. Sugar contains calories without providing any other nutrients, and can contribute to weight gain, obesity and tooth decay. Fat is very high in calories, and eating more fatty foods is likely to make you put on weight. Having too much saturated fat can increase the amount of cholesterol in the blood, which increases the chance of developing heart disease. Try to cut down on saturated fat, and have foods rich in unsaturated fat instead. It is best to consult your doctor and have your personalised diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it ok to take cheese during pregnancy?": {
    "question": "Is it ok to take cheese during pregnancy?",
    "answer": "Dairy foods such as milk, cheese, fromage frais and yoghurt are important because they contain calcium and other nutrients that your baby needs. Choose low-fat varieties wherever possible, for example, semi-skim or skim milk, low-fat yoghurt and half-fat hard cheese. Aim for two to three portions a day. There are some cheeses that should be avoided - so it is advised that you consult your doctor.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Does healthy diet mean I will have to give up all my favorite sweets during pregnancy?": {
    "question": "Does healthy diet mean I will have to give up all my favorite sweets during pregnancy?",
    "answer": "Eating healthily often means just changing the amounts of different foods you eat so that your diet is varied, rather than cutting out all your favourites. Anyone needs to be extra careful with diet if she develops gestational diabetes – doctor or midwife will advise accordingly.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My test said 'pregnant' but I don't feel pregnant - how can I be sure?": {
    "question": "My test said 'pregnant' but I don't feel pregnant - how can I be sure?",
    "answer": "Pregnancy tests are very accurate, so you can trust the result. Not all women will suffer from pregnancy symptoms, such as morning sickness. Look out for breast tenderness (which may be intermittent) as this is the symptom that is most commonly reported. However all pregnancies are different so do not worry. Consult your doctor for confirmation.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I feel very sick and am struggling to eat, will this affect my baby?": {
    "question": "I feel very sick and am struggling to eat, will this affect my baby?",
    "answer": "No, your baby will take what it needs from your body. When suffering from morning sickness make sure that you drink plenty of water and try to eat little and often. Acupressure bands may help. Vomiting and nausea during pregnancy affects up to 8 out of 10 pregnant women. Hyperemesis gravidarum is extreme nausea and vomiting and can be potentially life-threatening. If you are worried, consult with your doctor. Anti-sickness medication can be prescribed by your doctor but will only be recommended for women suffering from dehydration - symptoms include a very dry mouth and concentrated urine (dark yellow in colour). It is best to talk to your doctor regarding the same.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I had a positive pregnancy test last week but have just taken another test now which is negative - am I pregnant?": {
    "question": "I had a positive pregnancy test last week but have just taken another test now which is negative - am I pregnant?",
    "answer": "If you followed the test instructions correctly the results of home pregnancy tests are very accurate. It may be possible that you experienced an early loss. Sadly this is not uncommon as about quarter of pregnancies will end in an early pregnancy loss. To be certain repeat another pregnancy test in a week's time. Contact your doctor for further details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I got a pregnant result on a pregnancy test but am now spotting a little blood, is this normal?": {
    "question": "I got a pregnant result on a pregnancy test but am now spotting a little blood, is this normal?",
    "answer": "It might be normal as long as it is just spotting, not like a normal period, and you are not experiencing any significant pain (that requires more than a mild painkiller like paracetamol). Repeat a pregnancy test within a week. If the spotting during pregnancy continues and /or you have any concerns speak with your doctor. If you continue to experience spotting during pregnancy arrange to see a doctor as they may recommend an ultrasound.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I'm taking the pill but have fallen pregnant - could this be a problem for my baby?": {
    "question": "I'm taking the pill but have fallen pregnant - could this be a problem for my baby?",
    "answer": "Taking the pill at any stage in pregnancy is unlikely to cause problems. Stop taking the pill when you find out that you are pregnant. Make sure that you tell your doctor that you fell pregnant on the pill, who will arrange for you to have the normal check-ups and scans for your pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to have papaya during pregnancy?": {
    "question": "Is it safe to have papaya during pregnancy?",
    "answer": "Yes, it is safe to eat papaya during pregnancy, as long as it is ripe. A well ripened papaya is rich in vitamins C and E. It is also a good source of fibre and folic acid. If you are pregnant or trying to become pregnant, avoid eating unripe papaya. Papaya that is unripe contains a latex substance that may cause contractions of the uterus. It is best to contact your doctor or dietician regarding the foods to avoid.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to have pineapple during pregnancy?": {
    "question": "Is it safe to have pineapple during pregnancy?",
    "answer": "Sometimes eating pineapple is recommended as a natural way of starting labour. But for the pineapple to cause contractions, you would have to eat extremely large quantities of it. So if you eat this fruit in moderation, you can benefit from it's nutrients without worrying about it's impact on your pregnancy or baby. It is best to contact your doctor or dietician regarding the foods to avoid.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Should I be drinking ghee during my pregnancy?": {
    "question": "Should I be drinking ghee during my pregnancy?",
    "answer": "No, If you are eating a well-balanced diet there is no need to unnecessarily add to your calorie count by drinking ghee. Latest research suggests that a pregnant mum only needs 200 extra calories a day in her last trimester, though most doctors recommend 300 extra calories a day in the second and third trimesters. Consult your doctor for a proper diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to climb stairs during pregnancy?": {
    "question": "Is it safe to climb stairs during pregnancy?",
    "answer": "The biggest risk with climbing stairs during pregnancy is falls. A fall in early pregnancy can lead to miscarriage and later in pregnancy can trigger early labor symptoms. The risk of falling early in pregnancy is less since the body's center of gravity has not yet changed. Speak to your doctor regarding your personal situation for more information.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Can my stress affect my fetus?": {
    "question": "Can my stress affect my fetus?",
    "answer": "Some stress during pregnancy is normal, just as it is during other times of life. But if stress becomes constant, the effects on you and your baby could be lasting. When you’re stressed, your body goes into \"fight or flight\" mode, sending out a burst of cortisol and other stress hormones. These are the same hormones that surge when you are in danger. They prepare you to run by sending a blast of fuel to your muscles and making your heart pump faster. If you can deal with your stress and move on, your stress response will recede and your body will go back into balance. Talk to your doctor regarding managing your stress levels.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is diarrhea commom during pregnancy?": {
    "question": "Is diarrhea commom during pregnancy?",
    "answer": "Digestive difficulties during pregnancy are unfortunately common. Diarrhea may occur frequently, as well as constipation. Blame it on shifting hormones, changes in diet, and added stress. The fact is, pregnant women deal with diarrhea quite a lot, and if they aren't cautious, it can cause problems. Talk to your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My pregnancy is dotted with gas and digestion issues, is it normal?": {
    "question": "My pregnancy is dotted with gas and digestion issues, is it normal?",
    "answer": "One of the key contributing factors to experiencing more gas during pregnancy is the increased levels of progesterone. Progesterone is a hormone that causes the muscles throughout your body to relax. Subsequently, your intestinal muscles relax more, which causes your digestion to slow down. Talk to your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Will staying hydrating help me with the gas problem during my pregnancy?": {
    "question": "Will staying hydrating help me with the gas problem during my pregnancy?",
    "answer": "Water is your best bet. Aim for eight to 10 8-ounce glasses every day, but other fluids count too. If your gas is causing pain or extreme bloating, you may be suffering from irritable bowel syndrome (IBS), in which case make sure any juice you drink is low in certain types of gas and bloating-promoting sugars called FODMAPs. Cranberry, grape, pineapple, and orange juice are all considered low-FODMAP juices.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Which foods could be aggrevating my gas problem during my pregnancy?": {
    "question": "Which foods could be aggrevating my gas problem during my pregnancy?",
    "answer": "Brussels sprouts, cabbage, broccoli, wheat, and potatoes are common gas culprits. Talk to your doctor and eat as advised.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How much fibre is needed to ease my gas situation during my pregnancy?": {
    "question": "How much fibre is needed to ease my gas situation during my pregnancy?",
    "answer": "Try fitting 25 to 30 grams of high-fiber foods into your diet to help ease gas concerns. Many fruits, such as prunes, figs, and bananas, and vegetables, as well as whole grains like oats and flax meal are all good fiber boosters to consider. Consult your doctor for proper diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to have stool softeners during pregnancy?": {
    "question": "Is it safe to have stool softeners during pregnancy?",
    "answer": "Gentle stool softeners, moisten the stool, allowing easier and regular passage. Just avoid any stimulant laxatives, as these can cause complications during pregnancy. Talk to doctor before taking any stool softener.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to practice pranayama during pregnancy?": {
    "question": "Is it safe to practice pranayama during pregnancy?",
    "answer": "Pranayama is one of many breathing techniques used in yoga and most are considered safe. A few pranayama techniques may not be suitable during pregnancy - those where you need to hold your breath for a long time or take deep forceful breaths that contract your stomach. They could make you feel faint, light-headed and dizzy. Have a word with your doctor before you start practising pranayama",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How does deep breathing help in labour pains?": {
    "question": "How does deep breathing help in labour pains?",
    "answer": "Deep breathing in labour can help you fight the urge to panic when you feel the pain of contractions. Keeping your body relaxed means you can save your energy for when it is needed. There are several different types of pranayama techniques and each provides specific benefits. Speak to your yoga instructor for more details who will help you choose a technique that is best suited for your stage of pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What causes insomnia during pregnancy?": {
    "question": "What causes insomnia during pregnancy?",
    "answer": "A complicated combination of all the hormonal changes, frequent trips to the bathroom, heartburn during pregnancy that just won’t quit, leg cramps, the fact that you can't get comfortable when you're in bed with a watermelon where your tummy used to be, and pre-birth anxiety can all cause difficulty sleeping. Consult your doctor for further details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "When is it too late to fly when pregnant?": {
    "question": "When is it too late to fly when pregnant?",
    "answer": "If you have any sort of pregnancy complications, have had any of the contractions, are at risk for pre-term labor, or have a history of delivering early, your doctor may recommend that you not fly in the later weeks of pregnancy. If you are pregnant with multiples, you may want to hold off too. So consult with your doctor before booking your tickets.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What is perineal massage and how can it help me prep my body for labor?": {
    "question": "What is perineal massage and how can it help me prep my body for labor?",
    "answer": "Your perineum is the area of skin and tissue that separates the vagina and the anus. Some women will massage this region in the weeks leading up to delivery in an effort to help reduce the need for an episiotomy (a surgical incision into this area) or tearing during delivery. Talk to your doctor before getting any massage done when pregnant.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I have patches of darker skin on my face. Is this normal during pregnancy?": {
    "question": "I have patches of darker skin on my face. Is this normal during pregnancy?",
    "answer": "Yes, it's common for pregnant women to develop blotchy areas of darkened skin, commonly called the mask of pregnancy (but officially known as chloasma or melasma gravidarum). What's more, you may find that skin that is already more pigmented – such as your nipples, freckles, scars, and the skin of your genitals – becomes even darker during pregnancy. This also tends to happen in areas prone to friction, such as your underarms and inner thighs. Talk to your doctor regarding your situation in particular.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am expecting and have spotted this dark line running down my belly?": {
    "question": "Am expecting and have spotted this dark line running down my belly?",
    "answer": "It's called the linea nigra. Before pregnancy, there was a line called the linea alba running from your belly button to your pubic bone. You probably didn't notice it, though, because it was the same color as the rest of your skin. The increased production of melanin is responsible for darkening this line on your belly. It will probably fade back to its pre-pregnant color several months after you deliver your baby.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Are my skin changes during pregnancy ever a sign of illness?": {
    "question": "Are my skin changes during pregnancy ever a sign of illness?",
    "answer": "Certain types of skin discoloration can be a symptom of skin cancer or other medical problems, so let your practitioner know if changes in skin pigmentation are accompanied by pain, tenderness, redness, or bleeding, or if you notice any changes in the color, shape, or size of a mole. You may be referred to a dermatologist who can determine the cause of the changes and whether any treatment is appropriate.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am developing skin tags during my pregnancy, are these normal?": {
    "question": "Am developing skin tags during my pregnancy, are these normal?",
    "answer": "Skin tags are totally harmless, but they can become irritated by friction, which happens most often in the armpit or groin. Unlike discoloration or some other pregnancy skin issues, skin tags don't disappear after your baby arrives, but they can be easily removed by a dermatologist.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Why do most women develop stretch marks during pregnancy?": {
    "question": "Why do most women develop stretch marks during pregnancy?",
    "answer": "Pregnancy hormones also soften the fibres in your skin, making stretch marks more likely. Most pregnant women get stretch marks . Stretch marks usually appear as pink, red or purple-tinged lines on your tummy, bottom, thighs and breasts.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to go for spa treatments when expecting?": {
    "question": "Is it safe to go for spa treatments when expecting?",
    "answer": "Look for spas specializing in prenatal treatments to be safe while checking out any spa during pregnancy. Also confirm with your doctor before taking any programs.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Should I avoid saunas during pregnancy?": {
    "question": "Should I avoid saunas during pregnancy?",
    "answer": "When your body temp rises when you are in a sauna or hot tub it also makes the the fluid around the baby rise and it can be very dangerous. You can have other spa services like pregnancy massage etc just avoid the hot tubs and saunas. It is best to talk to your doctor about the same.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to colour my hair when expecting?": {
    "question": "Is it safe to colour my hair when expecting?",
    "answer": "Most research, although limited, shows it's safe to colour your hair while pregnant. Some studies have found that very high doses of the chemicals in hair dyes may cause harm. However, these doses are massive compared with the very low amount of chemicals a woman is exposed to when colouring her hair. It is best to confirm with your doctor regarding any colouring when pregnant.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Should I avoid fake tans during pregnancy?": {
    "question": "Should I avoid fake tans during pregnancy?",
    "answer": "Although there are no known dangers of using tanning lotions, they can sometimes cause an allergic reaction. For this reason, it’s advisable not to use fake tan during pregnancy, as changes in hormone levels can make the skin more sensitive than normal. If you do use fake tan, always test the product on a small area of skin first to see if you have a reaction. Also consult your doctor to know more.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Would painting the house pose as an issue during my pregnancy?": {
    "question": "Would painting the house pose as an issue during my pregnancy?",
    "answer": "The risk of fumes from modern household paints harming your baby is low. But it’s impossible to know exactly how small the risk is. This is because it’s very difficult to measure the substances and chemicals your body absorbs during activities such as painting. Speak to your doctor before planning any painting works.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Should X Rays be avoided during pregnancy?": {
    "question": "Should X Rays be avoided during pregnancy?",
    "answer": "If possible, you should avoid having an X-ray while you’re pregnant. Your healthcare professional will assess whether your treatment can wait until you’ve had your baby. For example, they will assess whether the benefits of treatment outweigh the low risk of having an X-ray. They may also consider using another imaging method instead, such as an ultrasound scan.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Should dental X Rays be avoided during pregnancy?": {
    "question": "Should dental X Rays be avoided during pregnancy?",
    "answer": "Make sure your dentist knows that you’re pregnant. If you need a dental X-ray, your dentist will usually wait until you’ve had the baby, even though most dental X-rays don’t affect the abdomen or pelvic area.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to take radiology tests when I am expecting?": {
    "question": "Is it safe to take radiology tests when I am expecting?",
    "answer": "It is vital you tell your own doctor or specialist if you are or may be pregnant because some procedures can affect the foetus (unborn baby). Your doctor or specialist will refer you for an appropriate radiology procedure if it is safe to do so. You must also inform the hospital or radiology practice when you make the appointment and the medical staff performing the procedure if you are or may be pregnant.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Accidently I have been exposed to naphthalene balls while I am carrying, could it hamper my baby in any way?": {
    "question": "Accidently I have been exposed to naphthalene balls while I am carrying, could it hamper my baby in any way?",
    "answer": "Exposure to very large amounts of naphthalene can cause damage to blood cells, leading to a condition called haemolytic anaemia. Some of the symptoms that may occur after exposure to large quantities of naphthalene are fatigue, loss of appetite, nausea, vomiting, and diarrhoea. Newborn babies are particularly at risk of damaging their blood cells if they are exposed to naphthalene. Talk to your doctor regarding your exposure levels.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My neighbour has a pet cat, should I be worried about my visits to their house while I am pregnant?": {
    "question": "My neighbour has a pet cat, should I be worried about my visits to their house while I am pregnant?",
    "answer": "Toxoplasmosis is a common infection that occurs in most birds and mammals, including humans. The parasite called ‘Toxoplasma gondii’ (T. gondii) can be found in cat faeces or soil or cat litter that is contaminated with infected cat faeces. Signs of toxoplasmosis include mild flu-like symptoms, such as high temperature, sore throat and aching muscles. However, in most cases, toxoplasmosis doesn’t cause any symptoms. The risk of getting toxoplasmosis when you’re pregnant is very low. If you get toxoplasmosis in the early stages of pregnancy, the risk of miscarriage is increased. Pregnant women are not routinely screened for toxoplasmosis. It’s therefore important that you know how to prevent infection. Talk to your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to have acupunture or massages done when am expecting?": {
    "question": "Is it safe to have acupunture or massages done when am expecting?",
    "answer": "Some complementary therapies, such as acupuncture and massage, can be suitable during pregnancy. However, there are still times during pregnancy when they may not be safe. For example, your abdomen should not be massaged during the first three months of pregnancy. It is generally safe to have acupuncture when you are pregnant. Let your acupuncturist know if you are pregnant because certain acupuncture points cannot be used safely during pregnancy. If you’re considering using a complementary therapy, it’s important to tell your doctor or midwife about what treatment you’re considering. If you then decide to use a complementary therapy, you should always consult a qualified practitioner.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Can I continue to dance during my pregnancy?": {
    "question": "Can I continue to dance during my pregnancy?",
    "answer": "Dancing is a fantastic and fun exercise during pregnancy! Not only do you get the thrill of moving your body to music you love, but it will keep you flexible while toning your muscles. You can get an aerobic workout from any fast-paced dance, or stretch and maintain muscle tone when you hold positions in ballet. Talk to your doctor about your dance forms and confirm.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it alright to swim during pregnancy?": {
    "question": "Is it alright to swim during pregnancy?",
    "answer": "Even if you've never exercised before, swimming is safe to take up during pregnancy. Swimming in a chlorinated pool is not harmful to you or your baby. It's usually safe for you to swim throughout your pregnancy, right up until your baby's birth. It is best to speak with your doctor regarding your swimming sessions before hand.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What are the benefits of yoga during pregnancy?": {
    "question": "What are the benefits of yoga during pregnancy?",
    "answer": "Prenatal yoga can prepare your mind, body, and spirit for motherhood. Always perform yoga asanas in consultation with your doctor and a yoga practitioner.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Can yoga actually help ease out labour pains?": {
    "question": "Can yoga actually help ease out labour pains?",
    "answer": "Teaching a combination of modified asana, breathwork, and relaxation techniques can help a pregnant student anticipate her due date with confidence that she is well prepared for the challenge of labor. Always perform yoga asanas in consultation with your doctor and a yoga practitioner.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Are there Yoga asanas to be practiced right from the start of pregnancy?": {
    "question": "Are there Yoga asanas to be practiced right from the start of pregnancy?",
    "answer": "There are calming poses that ease back pain, indigestion, stress, and other pregnancy-related issues to help you get smoothly through the next nine months. Always perform yoga asanas in consultation with your doctor and a yoga practitioner.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My teeth appear to be decaying during my pregnancy. What should I do?": {
    "question": "My teeth appear to be decaying during my pregnancy. What should I do?",
    "answer": "Pregnancy can lead to dental problems in some women, including gum disease and increased risk of tooth decay. During pregnancy, your increased hormones can affect your body’s response to plaque (the layer of germs on your teeth). Pregnancy does not automatically damage your teeth. The old wives’ tale that warns a woman to expect a lost tooth for every baby is false. If the mother’s intake of calcium is inadequate during pregnancy, her bones – not her teeth – will provide the calcium her growing baby needs. This calcium loss is quickly made up after breastfeeding is stopped. However, the demands of pregnancy can lead to particular dental problems in some women. With proper hygiene at home and professional help from your dentist, your teeth should remain healthy throughout pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to take probiotics during pregnancy?": {
    "question": "Is it safe to take probiotics during pregnancy?",
    "answer": "Probiotics and prebiotics from natural food sources and supplements are considered safe to take while you're pregnant. Even so, it's best to talk to your doctor or midwife before taking any supplements. If you do take a probiotic or prebiotic supplement, always ensure you follow the manufacturer's guidelines.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to have shellfish during pregnancy?": {
    "question": "Is it safe to have shellfish during pregnancy?",
    "answer": "Always eat cooked rather than raw shellfish (including mussels, lobster, crab, prawns, scallops and clams) when you're pregnant, as they can contain harmful bacteria and viruses that can cause food poisoning. Cold pre-cooked prawns are fine. It is best to speak to your doctor and dietician regarding seafood intake during pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am carrying and feel dizzy often, is it normal?": {
    "question": "Am carrying and feel dizzy often, is it normal?",
    "answer": "During the second trimester, dizziness may be caused because your growing uterus puts pressure on blood vessels. Dizziness may also occur later in your pregnancy if you lie on your back, allowing the weight of the baby to press on your vena cava (a large vein that carries blood from your lower body to your heart). Consult your doctor to know the details as per your current situation.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "As my pregnancy is progressing (now I am at 20 weeks) I am finding changes in my cravings, is it normal?": {
    "question": "As my pregnancy is progressing (now I am at 20 weeks) I am finding changes in my cravings, is it normal?",
    "answer": "Favor Your Cravings: The most important advice is to eat what you naturally desire. Follow a well-balanced diet, with meals including adequate amounts of protein, healthy starch and veggies. Honor your unique cravings in moderation, especially after the fourth month when the cravings you experience are more likely those of the baby. At the same time remember to consult your doctor for a balanced diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What are general diet dos in Ayurveda for expecting women? Please advise as my pregnancy has just been confirmed.": {
    "question": "What are general diet dos in Ayurveda for expecting women? Please advise as my pregnancy has just been confirmed.",
    "answer": "The major theme during pregnancy is to balance the energy of the nervous system. This is best done with a diet of fresh, plant-based, whole or sprouted grains and non-processed foods. Warm, freshly cooked foods with healthy oils of olive, ghee and coconut are good. Avoid eating leftovers as much as possible. Do speak to your doctor for a proper diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What are general diet don’t's in Ayurveda for expecting women? Please advise as my pregnancy has just been confirmed.": {
    "question": "What are general diet don’t's in Ayurveda for expecting women? Please advise as my pregnancy has just been confirmed.",
    "answer": "Ayurveda recommends the following foods should be avoided during pregnancy: •Hot spicy foods •Uncooked leafy greens – as they can cause gas. •Undercooked beans and lentils – which can also cause gas. •Artificial flavors, preservatives and chemical additives Consult your doctor for more detailed deitary requirements.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I am now into my second trimester, does Ayurveda promote my drinking milk during remaining pregnancy?": {
    "question": "I am now into my second trimester, does Ayurveda promote my drinking milk during remaining pregnancy?",
    "answer": "Yes, drink warm, vat-pasteurized (heated under 135 degrees F), non-homogenized milk with ghee made from grass-fed cows. One cup of warm milk with a teaspoon of ghee twice a day is said to boost immunity and the complexion of the baby. It is best to talk to your doctor regarding the wholesome food intake.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I hear that morning sickness is common during pregnancy, how does Ayurveda recommend we handle it? Please advise as I have been feeling nauseous since early pregnancy.": {
    "question": "I hear that morning sickness is common during pregnancy, how does Ayurveda recommend we handle it? Please advise as I have been feeling nauseous since early pregnancy.",
    "answer": "Here are top five Ayurvedic tips to overcome morning sickness: 1. Roast cardamom seeds, powder them and eat a small pinch through the day. 2. Snack on dry crackers or toast. It helps to always keep a little food in the stomach. 3. Temporarily eat from the foods that do not aggrevate kapha. 4. Sip tea made of 1/4 tsp. ginger powder and/or fennel seeds and hot water. 5. Try sleeping in a semi-reclined position by putting a pillow between the box spring and the mattress. Consult with an Ayurveda expert to know more.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I am about to complete 7 months of pregnancy and am wondering why does Ayurveda lay special importance to the 8th month of pregnancy?": {
    "question": "I am about to complete 7 months of pregnancy and am wondering why does Ayurveda lay special importance to the 8th month of pregnancy?",
    "answer": "In the 8th month, you should get as much rest as possible. This is a delicate time when the subtle nutrient fluid called “ojas” that supports vitality, complexion and immunity is passed between the mother and baby. Speak to your doctor or an Ayurveda expert for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is massage using herbalised oils safe for would be mothers in their late pregnancy? I have just completed 6 months of my pregnancy.": {
    "question": "Is massage using herbalised oils safe for would be mothers in their late pregnancy? I have just completed 6 months of my pregnancy.",
    "answer": "Ayurvedic Herbalized Massage Oils feed the microbiology on the skin, as well as calm the skin-based sensory nervous system of the mom. The calmer the mom, the calmer the baby. This can be self-massage, or an opportunity to get massaged by a loving partner. Gently massage the abdomen and, in the 8th and 9th months, spend extra time on the nipples to prepare for nursing. Consulting with your doctor or an Ayurveda expert can help.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Which taste should be preferred for food intake during pregnancy, as per Ayurveda? Please advise as my partner has just tested positive in her pregnancy test.": {
    "question": "Which taste should be preferred for food intake during pregnancy, as per Ayurveda? Please advise as my partner has just tested positive in her pregnancy test.",
    "answer": "During pregnancy the sweet taste should be most emphasized, because it is the most sattvic or wholesome for the baby. This includes sprouted breads or those cooked without oils, whole grains, rice, fruits and healthy starches like sweet potatoes, quinoa, cooked beets and carrots. Do consult your doctor for a wholesome dietary needs.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What are sattvic foods and why should they be favoured during pregnancy? Kindly advise as my daughter in law is now on the family way.": {
    "question": "What are sattvic foods and why should they be favoured during pregnancy? Kindly advise as my daughter in law is now on the family way.",
    "answer": "Vedic texts recommend sattvic foods, which means pure, easily digested foods that nourish the dhatus (tissues) of mother and the unborn child. These include foods such as milk, rice, wheat, and ghee (clarified butter), fresh vegetables, fruits and grains. Sattvic foods do not cause constipation or indigestion, and they create a more settled state of mind. These foods help the mother enjoy ideal health and vitality, and also help with the growth of the baby. It is recommended that you talk to your doctor or an Ayurveda expert for more personalised diet chart.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Does Ayurveda suggest any techniques to bring balance between the mother and child, that my expectant daughter can benefit from?": {
    "question": "Does Ayurveda suggest any techniques to bring balance between the mother and child, that my expectant daughter can benefit from?",
    "answer": "Techniques such as abhyanga, the Ayurvedic oil massage are recommended for the mother. Mothers who do this once a day, on arising, find that they feel more evenness, more balance, more energy throughout the day. The massage and other techniques balance Vata dosha (the mind-body operator that governs movement and many mental functions), so the mother feels more steady, more even, less anxious. There is more happiness, even in the body itself, and more balance in the entire nervous system. Feelings of agitation, depression, or sorrow dissolve. Do consult with your doctor or an Ayurveda expert before getting the massage done.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I am a working women who is well into the 6th month of pregnancy, my job involves on-going stress. Though others around me have been telling about the importance around happiness of the mother-to-be. How true is it?": {
    "question": "I am a working women who is well into the 6th month of pregnancy, my job involves on-going stress. Though others around me have been telling about the importance around happiness of the mother-to-be. How true is it?",
    "answer": "If there is grief, sorrow, or depression, those negative emotions definitely affect the growth of the baby. The baby could be born with lower birth-weight, the baby could be less happy. If the mother is very stressed, this can also contribute to low-birth-weight baby. When the mother is not as happy or settled during pregnancy, the newborn child experiences more colic, more crying, more sleep problems. In extreme Vata imbalance, the child might develop dry skin, hyperactivity, or musculoskeletal problems while growing. The time to nip imbalances in the bud is during pregnancy, as it is much easier to correct it then. And most importantly, it is imperative to prevent so much suffering. Therefore modern doctors as well as Ayurvedic practitioners would suggest ways to keep the mother-to-be in happy state of mind.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Managing my work-life balance is stressful. Add to it the mood swings courtesy my pregnancy. How can I keep my self sane?": {
    "question": "Managing my work-life balance is stressful. Add to it the mood swings courtesy my pregnancy. How can I keep my self sane?",
    "answer": "Meditation is a profound way for pregnant mothers to reduce stress, experience deep rest, and bring balance to all the doshas. When there is balance in the nervous system of the mother, the baby spontaneously grows in a very happy and healthy way. If the mother is not calm and rested, there could be discomfort as the baby grows, or the child could be overly active in the womb. Or other complications could develop, such as fluid retention, high blood pressure, or spotting during pregnancy. Do consult your doctor or meditation expert before practicing.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it true that even some of the herbal teas are not safe for consumption during pregnancy? Please advise as am heavily into herbal teas even before I concieved.": {
    "question": "Is it true that even some of the herbal teas are not safe for consumption during pregnancy? Please advise as am heavily into herbal teas even before I concieved.",
    "answer": "Yes, research illustrates the importance of keeping an eye on your caffeine consumption during pregnancy. For this reason, teas that are particularly high in caffeine should be restricted while you are pregnant.These teas include:Black, Green, Oolong, LiChee, Lapsang souchong, Hong mao, Golden monkey black, Quinshola clonal, Nilgiris, Earl grey, Darjeeling. Teas and herbs to avoid during pregnancy due to their risk of side effects include: St John’s Wort, Don Quai, Ginseng, Yarrow, Pennyroyal (known to cause miscarriage), Ephedra and Licorice Root. You would have noticed that green tea is on the restriction list. This is because there is still some discussion concerning how safe green tea is for pregnant women. It is best to consult your doctor or a herbalist before consuming any tea or herbs during pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Does ginger tea actually help treat morning sickness experienced during pregnancy? Please advise as even in my 3rd month am feeling so nauseous.": {
    "question": "Does ginger tea actually help treat morning sickness experienced during pregnancy? Please advise as even in my 3rd month am feeling so nauseous.",
    "answer": "Yes, Ginger tea eases nausea, aids the digestion process and relieves stomach issues . Just add four or five slices of fresh ginger root to a cup of freshly boiled water and drink a maximum of three cups daily. It is best to consult your doctor or a herbalist before consuming any tea or herbs during pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My daughter-in-law is expecting, is Nettle tea safe for her ?": {
    "question": "My daughter-in-law is expecting, is Nettle tea safe for her ?",
    "answer": "Nettle Tea provides high levels of iron, magnesium and calcium and is a brilliant nutritive tea to sip whilst pregnant. Stick to one or two cups a day. It is best to consult her doctor or a herbalist before consuming any tea or herbs during pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My friend has recommended Raspberry Leaf Tea, how will it help? Am about to complete my first trimester.": {
    "question": "My friend has recommended Raspberry Leaf Tea, how will it help? Am about to complete my first trimester.",
    "answer": "Raspberry Leaf Tea prepares the uterus for labour and prevents post-partum hemorrhage. it’s also high in calcium and magnesium and is safe to drink from the second trimester onwards. It is best to consult your doctor or a herbalist before consuming any tea or herbs during pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I am now in my last trimester and am suffering from fluid retention. Please advise of any natural ways to overcome it.": {
    "question": "I am now in my last trimester and am suffering from fluid retention. Please advise of any natural ways to overcome it.",
    "answer": "Dandelion Leaf Tea is a wonderful support in late pregnancy in fluid retention. It is high in potassium and has a gentle but effective diuretic effect. Adding dandelion leaf to another tea is advised as it has a slightly bitter, grassy taste. It is best to consult your doctor or a herbalist before consuming any tea or herbs during pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "The upset stomach doesn’t seem to leave me since the last 6 weeks (when my pregnancy was confirmed), how can I handle it naturally without medication?": {
    "question": "The upset stomach doesn’t seem to leave me since the last 6 weeks (when my pregnancy was confirmed), how can I handle it naturally without medication?",
    "answer": "Peppermint tea is great for relaxing your stomach muscles to help settle an upset stomach as well as the nausea and vomiting common in early pregnancy. It is best to consult your doctor or a herbalist before consuming any tea or herbs during pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I have been a Rooibos tea fan since youth, now that I am on the family way, can I continue to consume it?": {
    "question": "I have been a Rooibos tea fan since youth, now that I am on the family way, can I continue to consume it?",
    "answer": "Rooibos tea is highly recommended in pregnancy. It is caffeine free, contains calcium, magnesium and loads of antioxidants. It also has positive effects on digestion and can ease colic and reflux. It is best to consult your doctor or a herbalist before consuming any tea or herbs during pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My mother swears by the health benefits of Shatavari for women. Can I consume it even after conception?": {
    "question": "My mother swears by the health benefits of Shatavari for women. Can I consume it even after conception?",
    "answer": "Shatavari is truly Ayurveda’s gift to women. It nourishes and cleanses the blood and the female reproductive organs, enhancing female fertility. It also nourishes the womb and ovum and helps to prepare the female organs for pregnancy, as well as to prevent threatened miscarriage. Shatavari alleviates morning sickness during pregnancy, and is effective after childbirth in cleaning out the uterus. Ayurvedic texts state that shatavari promotes maternal health too, and its meticulous use enhances breast milk in lactating mothers. It is best to consult your doctor or a herbalist before consuming any tea or herbs during pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Constipation has become an on-going issue ever since I started taking iron supplements, at the start of my pregnancy.": {
    "question": "Constipation has become an on-going issue ever since I started taking iron supplements, at the start of my pregnancy.",
    "answer": "Iron supplements are also a common cause of constipation in pregnancy. Normal iron supplements do not absorb well in the digestion process, and very little iron makes it’s way into the bloodstream. Much of it is left in the intestines.The leftover iron binds with other undigested substances to become sticky and tar like, and does not move well out of the bowel. Iron supplements are unnecessary as long as the diet is adequate for pregnancy. Talk to your doctor regarding the diet and conspitation issues.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My dietician has suggested that my pregnancy conspitation is because of the hormonal changes my body is going through. What can be done during pregnancy to handle it.": {
    "question": "My dietician has suggested that my pregnancy conspitation is because of the hormonal changes my body is going through. What can be done during pregnancy to handle it.",
    "answer": "Hormonal changes which occur in your body later in pregnancy can relax some muscles, including the ones which squeeze food along the digestive tract. This can prevent foods from moving along the bowels easily, especially if your diet is low in fibre and water. Unfortunately, many over-the-counter constipation relievers are best avoided when pregnant. Talk to your doctor regarding the diet and conspitation issues.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I am at the early stages of my pregnancy, am suffering from morning sickness and constipation both. Are there any natural remedies to overcome these?": {
    "question": "I am at the early stages of my pregnancy, am suffering from morning sickness and constipation both. Are there any natural remedies to overcome these?",
    "answer": "If you suffer from extreme nausea in early pregnancy, you may struggle to eat and drink enough to move your bowels. If you vomit as well, you may become dehydrated, which can cause hard stools. Talk to your doctor regarding the diet and conspitation issues.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is shaving a safe hair removal method for my partner who is now 20 weeks pregnant?": {
    "question": "Is shaving a safe hair removal method for my partner who is now 20 weeks pregnant?",
    "answer": "Shaving in the shower is not suggested as she may loose balance. Also sharing of razors is not a good idea. Otherwise both manual razors and electric shavers are fine.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to bleach my facial hair during pregnancy?": {
    "question": "Is it safe to bleach my facial hair during pregnancy?",
    "answer": "While you may have already masked unwanted hair growth with bleach in the past, since it's applied directly to your skin there's a chance you absorb some of the chemicals and possibly pass them on to your unborn child. And since no reliable studies have been done to determine for sure whether bleach is safe or not during pregnancy, it's safest to skip this option until your bundle of joy arrives.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I am becoming clumsier as my pregnancy is progressing (am at 23 weeks now), is it normal?": {
    "question": "I am becoming clumsier as my pregnancy is progressing (am at 23 weeks now), is it normal?",
    "answer": "Yes, it totally is. Slow down, use extra caution in the shower or when it's icy outside, don't wear slippery soles or socks without shoes, make sure your area rugs aren't slippery, keep hallways and stairs clear of objects that might trip you up, and don't stand on any chairs (no matter what you need to reach). Don't pick up what you don't want to drop. The clumsies will be with you for a while, so leave your favorite crystal on the shelf for the duration and let someone else load and unload the dishwasher (especially when the good china's involved).",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am developing facial hair during my pregnancy, is it safe to go for laser or electrolysis at this stage?": {
    "question": "Am developing facial hair during my pregnancy, is it safe to go for laser or electrolysis at this stage?",
    "answer": "Permanent hair removal solutions like laser and electrolysis are at best unnecessary and at worst dangerous during pregnancy. With laser hair removal, laser light targets the pigment in hair, damaging the hair follicle to stop future growth. With electrolysis, a metal probe is inserted into the shaft where a hair grows, passing an electric current through your skin to destroy the follicle (especially risky for expecting moms, since the amniotic fluid surrounding a developing fetus conducts electricity). Since no reliable studies have been done to determine if either laser hair removal or electrolysis are safe for pregnant women and because your extra unwanted hair should disappear about six months after delivering! It is best to wait on these methods until after giving birth or consult your doctor before going in for any treatment.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am expecting my first child and living in India. Can I continue fasting on weekly basis?": {
    "question": "Am expecting my first child and living in India. Can I continue fasting on weekly basis?",
    "answer": "Fasting while pregnant can lead to hypoglycaemia, ketosis and dehydration, all of which may harm your unborn child. So it is best to consult your doctor before fasting.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I am on the family way and my mother has suggested that I listen to soothing music. Will it really help the baby?": {
    "question": "I am on the family way and my mother has suggested that I listen to soothing music. Will it really help the baby?",
    "answer": "Yes, it is highly recommended that you nourish your senses - see, hear, smell, touch and taste. All of these would impact the baby. Consult your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am well into my second trimester and havent been able to find any comfortable sleeping position. Kindly advise.": {
    "question": "Am well into my second trimester and havent been able to find any comfortable sleeping position. Kindly advise.",
    "answer": "The best sleep position during pregnancy is “SOS” (sleep on side). Even better is to sleep on your left side. Sleeping on your left side will increase the amount of blood and nutrients that reach the placenta and your baby. Keep your legs and knees bent, and put a pillow between your legs. Consult your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My husband feels that am getting into depression as my pregnancy is progressing. Are the two connected?": {
    "question": "My husband feels that am getting into depression as my pregnancy is progressing. Are the two connected?",
    "answer": "Depression during pregnancy, or antepartum depression, is a mood disorder just like clinical depression. Mood disorders are biological illnesses that involve changes in brain chemistry. During pregnancy, hormone changes can affect the chemicals in your brain, which are directly related to depression and anxiety. Consult your doctor to confirm.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Both me and my partner are feeling more than anxious ever since the pregnancy got confirmed. Is it normal for all couples to feel depressed?": {
    "question": "Both me and my partner are feeling more than anxious ever since the pregnancy got confirmed. Is it normal for all couples to feel depressed?",
    "answer": "The symptoms of anxiety are the same during pregnancy and early parenthood as they are during other life stages. It is common to experience symptoms of depression at the same time as anxiety. If you are having thoughts of suicide or harming yourself, seek professional help immediately.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Ever since my conception, by face is getting filled with acne, why are they erupting?": {
    "question": "Ever since my conception, by face is getting filled with acne, why are they erupting?",
    "answer": "Many women experience acne during pregnancy. It's most common during the first and second trimesters. An increase in hormones called androgens can cause the glands in your skin to grow and produce more sebum, an oily, waxy substance. This oil can clog pores and lead to bacteria, inflammation, and breakouts. Contact your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My dietician has suggested that cheese be avoided all through my pregnancy, why is that?": {
    "question": "My dietician has suggested that cheese be avoided all through my pregnancy, why is that?",
    "answer": "Soft, unpasteurized cheeses like feta, Brie, Camembert, blue-veined cheeses, and goat — as well as ready-to-eat meats like hot dogs and deli meats — may contain Listeria, bacteria that cause mild flu-like symptoms in most adults but can be very dangerous for unborn babies. You can also talk to your doctor about it.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My dietician has suggested that soft boiled eggs be avoided all through my pregnancy, why is that?": {
    "question": "My dietician has suggested that soft boiled eggs be avoided all through my pregnancy, why is that?",
    "answer": "Soft-boiled or raw eggs may carry salmonella bacteria. So while you're pregnant, you may want to cook eggs until both the yolk and white are solid. This destroys salmonella bacteria and makes the eggs safe to eat.You can also talk to your doctor about it.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am expecting my baby in peak summer season and my body temparature is already soaring. Please provide some tips for keeping cool during the upcoming 12 weeks.": {
    "question": "Am expecting my baby in peak summer season and my body temparature is already soaring. Please provide some tips for keeping cool during the upcoming 12 weeks.",
    "answer": "Some of the practical tips include swimming, wearing breathable fabric, carrying a water bottle, exercising during cooler times of the day, avoiding direct mid-day sun, using SPF sunscreen etc. Consult your doctor for more personalised solutions.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am in my second trimester and feel very itchy most of the times, is it normal?": {
    "question": "Am in my second trimester and feel very itchy most of the times, is it normal?",
    "answer": "It's normal to feel more itchy while you're pregnant. It's very common, affecting almost a quarter of pregnant women. Your stretching skin or changing hormones may be at least partly to blame. You may notice the itching most over your bump and breasts.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "There have been few incidents when I feel dizzy and am just in my second trimester, why does it happen during pregnancy?": {
    "question": "There have been few incidents when I feel dizzy and am just in my second trimester, why does it happen during pregnancy?",
    "answer": "During the second trimester, dizziness may be caused because your growing uterus puts pressure on blood vessels. Dizziness may also occur later in your pregnancy if you lie on your back, allowing the weight of the baby to press on your vena cava (a large vein that carries blood from your lower body to your heart). Consult your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "It is my first pregnancy and all the elder women of the family have been advising me to avoid lifting anything. Why do they say so?": {
    "question": "It is my first pregnancy and all the elder women of the family have been advising me to avoid lifting anything. Why do they say so?",
    "answer": "Women should avoid lifting heavy objects while pregnant.However, if you are going to lift any object, it is important to exercise caution. For some women, lifting heavy objects can lead to an increased risk of premature labor and low birth weight. You may consult your doctor before lifting anything heavy, if you must.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My friend has suggested that I skip oysters during pregnancy, is it true?": {
    "question": "My friend has suggested that I skip oysters during pregnancy, is it true?",
    "answer": "There's no way to know if these bacteria are present, so the prudent thing to do is to avoid raw oysters during pregnancy. Heat kills these bacteria, so it's fine to eat cooked oysters when you're pregnant. Feel free to consult your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I have been craving for quiche, though am not sure if it is safe to have, now that am 20 weeks pregnant?": {
    "question": "I have been craving for quiche, though am not sure if it is safe to have, now that am 20 weeks pregnant?",
    "answer": "Whilst pregnant women find it better to avoid raw egg and unpasteurised milk (and cheese made from it), quiche is made from egg that has been cooked at over 100 degrees Celsius - high enough to kill all likely germs. So feel free to eat quiche. Please contact your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My doctor has suggested that I go in for urine tests regularly, why are they important during pregnancy?": {
    "question": "My doctor has suggested that I go in for urine tests regularly, why are they important during pregnancy?",
    "answer": "Anyone can get a urinary tract infection, but it is most common in women, especially if they are pregnant. In pregnant women, hormones cause changes in the urinary tract, which predispose women to infections. In addition, a growing uterus presses on the bladder, preventing the complete emptying of urine. It is best to contact your doctor with your test reports.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I have been getting ultrasound tests during the course of my pregnancy (now at 29 week), just wanted to confirm that they are safe.": {
    "question": "I have been getting ultrasound tests during the course of my pregnancy (now at 29 week), just wanted to confirm that they are safe.",
    "answer": "Ultrasound is used during pregnancy to check the baby's development, the presence of a multiple pregnancy and to help pick up any abnormalities. The ultrasound scan isn't 100 per cent accurate, but the advantages of the test are that it's non-invasive, painless and safe for both mother and unborn baby. Please feel free to ask your doctor regarding the details of each ultrasound.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am on the family way now and remember my friend taking numer of vaccinations during her pregnancy, will I need the same ones too?": {
    "question": "Am on the family way now and remember my friend taking numer of vaccinations during her pregnancy, will I need the same ones too?",
    "answer": "As well as the routine immunisations such as tetanus and polio, pregnant women should have immunity against measles, mumps, rubella, chickenpox, whooping cough and influenza. All women are encouraged to get vaccinated before pregnancy as not all of these vaccines are recommended during pregnancy. Talk to your doctor regarding your vaccination needs.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My co-worker has been suffering from whopping cough during her pregnancy, I have just conceived and want to prevent it, is there a way?": {
    "question": "My co-worker has been suffering from whopping cough during her pregnancy, I have just conceived and want to prevent it, is there a way?",
    "answer": "It is important for women to get the whooping cough vaccine in the third trimester of every pregnancy. Vaccines are the best way to prevent this disease. Contact your doctor for more information.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am 7 weeks pregnant and wondering what is the usual weight gain to be expected during the pregnancy?": {
    "question": "Am 7 weeks pregnant and wondering what is the usual weight gain to be expected during the pregnancy?",
    "answer": "Recommendations for Total Weight Gain During Pregnancy",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "": {
    "question": "",
    "answer": "Prepregnancy BMI (kg/m2)",
    "consultNow": "Category",
    "category": "Total Weight Gain Range",
    "subCategory": "",
    "doctorName": ""
  },
  "": {
    "question": "",
    "answer": "<18.5",
    "consultNow": "Underweight",
    "category": "28-40 lbs",
    "subCategory": "",
    "doctorName": ""
  },
  "": {
    "question": "",
    "answer": "18.5-24.9",
    "consultNow": "Normal Weight",
    "category": "25-35 lbs",
    "subCategory": "",
    "doctorName": ""
  },
  "": {
    "question": "",
    "answer": "25.0-29.9",
    "consultNow": "Overweight",
    "category": "15-25 lbs",
    "subCategory": "",
    "doctorName": ""
  },
  "": {
    "question": "",
    "answer": ">30.0",
    "consultNow": "Obese",
    "category": "11-20 lbs",
    "subCategory": "",
    "doctorName": ""
  },
  "My friend is pregnant. Her gyn has been talking about increasing her protein intake for long. What happens if she doesn't consume enough protein?": {
    "question": "My friend is pregnant. Her gyn has been talking about increasing her protein intake for long. What happens if she doesn't consume enough protein?",
    "answer": "Data show that most women living in developed countries usually consume greater than 60 grams of protein daily, so meeting this minimum is usually not a struggle. However, women with severe nausea and vomiting during pregnancy (hyperemesis), urinary protein losses (preeclampsia), or those who follow strict vegetarian diets are at higher risk. Since inadequate protein during pregnancy and lactation can affect the growth and development of your baby, it is important to review your diet to assure adequacy. Poor protein intake during pregnancy increases the risk for having a low birth weight infant and, a recent study suggests, negative effects on fetal brain development.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My sister is expecting but not taking sufficient amount of proteins. How can we boost her protein intake with routine foods?": {
    "question": "My sister is expecting but not taking sufficient amount of proteins. How can we boost her protein intake with routine foods?",
    "answer": "If she does not eat enough protein normally, finding ways to boost the intake is important. If you know the right choices to make, a little goes a long way. For the most part, these food categories are included: milk and other dairy foods, soy products, legumes, nuts, eggs, meat, fish and poultry. The foods below do provide calories, but they are primarily valued in our diet for their protein. Protein is also found in whole grains and vegetables and, while not 'high' protein foods, they do contribute to our daily protein total.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Please suggest What fruits should my daughter -in-law eat during her pregnancy?": {
    "question": "Please suggest What fruits should my daughter -in-law eat during her pregnancy?",
    "answer": "The more variety of fruits (without added sugar), the better. There are studies that have shown that the infants, whose moms ate a larger variety of fruits and vegetables during pregnancy more easily accepted those tastes when they were offered. So if you want your child to love pears, watermelon, lichies, mangoes or any other fruit, you better eat them during pregnancy! Also, please do not be concerned that fruits contain \"sugar\" as some will say. There is so much going on in fruit: fiber, water, vitamins, minerals and a natural fructose-not table sugar. So eat fruit instead of cookies or ice cream for a sweet treat with so much more--during pregnancy.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My expectant friend is taking milk twice daily.Why does she need extra calcium during pregnancy?": {
    "question": "My expectant friend is taking milk twice daily.Why does she need extra calcium during pregnancy?",
    "answer": "In order to maintain the calcium stores that she will need later in her lifetime it is important to have enough for her daily needs, the needs of the baby and to protect emptying one's calcium savings account that is in the bones. During pregnancy she needs a minimum of 1200 mg a day. Most traditional high sources of calcium rich foods will give about 200-300 mg a day which means when she is pregnant it is important to have about 4-6 servings a day. Good sources of calcium include: skim or 1 percent milk, yogurt or frozen yogurt, icemilk, and low fat cheeses. Broccoli, spinach and dark leafy green vegetables like collard greens and kale also have some calcium but typically half the amount of milk and yogurt. She can find some calcium in water packed salmon, mackerel or sardines canned with bones. Tofu is also a source of calcium. To get some extra servings of calcium every day she can try adding milk instead of water when cooking hot cereal. She could also try eating low fat cottage cheese or yogurt for a snack or adding low fat cheeses to salads, and veggies. If you know she is unable to get sufficient calcium in her daily diet talk to her midwife or OB/gyn about taking a calcium supplement.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My dietician has suggested that I add omega 3 fatty acids to my folic acid supplement during my pregnancy diet. Why are omega 3 fatty acids important?": {
    "question": "My dietician has suggested that I add omega 3 fatty acids to my folic acid supplement during my pregnancy diet. Why are omega 3 fatty acids important?",
    "answer": "The omega-3 fatty acid DHA (docosahexaenoic acid) is a major structural component in both your child's brain and your own. Fetuses are pretty assertive when it comes to taking omega-3fatty acids for brain development, so you'll be depleted of those important neuron protectors unless you make a point of getting them through diet or supplements. DHA seems to help repair your brain cells or connections damaged by stress. Talk to your doctor for more details",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How can DHA help me maintain brain health in pregnancy?": {
    "question": "How can DHA help me maintain brain health in pregnancy?",
    "answer": "DHA is an omega 3 essential fatty acid that helps your brain to function and repair its cells. It helps you with memory and during pregnancy also helps prevent depression. It is also important for your baby's brain as well. During the last 3 months of pregnancy while your baby's brain is forming you need at least 250 mg a day. Talk to your health care provider about prescribing a prenatal vitamin that has a DHA component along with the other necessary nutrients you need to have a healthy pregnancy and baby. So if your DHA stores are depleted during pregnancy you are more likely to have mood swings and depression.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My friend is used to take food containing alcohol. Is it safe to eat food that contains alcohol if she is pregnant? What about cooking? Doesn’t all the alcohol burn off?": {
    "question": "My friend is used to take food containing alcohol. Is it safe to eat food that contains alcohol if she is pregnant? What about cooking? Doesn’t all the alcohol burn off?",
    "answer": "Unfortunately, it’s not always true. A baked good that has been cooked for an hour still contains 25 percent of its original alcohol levels. Foods that are marinated in a mixture that contains alcohol and then grilled will retain quite a bit of residual alcohol. A dish like pasta with vodka sauce contains about 40 percent of its original alcohol level. It is best that she talks to her dietician regarding the same.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How frequently should my daughter eat when she is pregnant ?": {
    "question": "How frequently should my daughter eat when she is pregnant ?",
    "answer": "When she is pregnant, it's smarter to eat five or six small meals throughout the day rather than do the traditional three squares. That will help her avoid drops in blood sugar, which can cause cravings. Maintaining an even blood sugar level will also help her avoid nausea. It is best for her to talk to her dietician regarding the same.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My pregnancy diet has given special attentin to Vitamin A, how does it help?": {
    "question": "My pregnancy diet has given special attentin to Vitamin A, how does it help?",
    "answer": "Vitamin A, a fat-soluble vitamin stored in the liver, is important for your baby's embryonic growth – including the development of the heart, lungs, kidneys, eyes, and bones, and the circulatory, respiratory, and central nervous systems. It also helps with infection resistance and fat metabolism. Vitamin A is particularly essential for women who are about to give birth, because it helps with postpartum tissue repair. It also helps maintain normal vision and fight infections.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Why do dieticians and doctors advise limited intake of Vitamin A during pregnancy, especially when it is important at this stage of my life - when am expecting my first baby?": {
    "question": "Why do dieticians and doctors advise limited intake of Vitamin A during pregnancy, especially when it is important at this stage of my life - when am expecting my first baby?",
    "answer": "It's important during pregnancy not to get too much of the preformed vitamin A, which in high doses can cause birth defects and liver toxicity. (You can take in as many carotenoids as you want, however, from fruits and vegetables.)",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My dietician has advised inclusion of Vitamin A in my pregnancy diet. What are the common sources of the same?": {
    "question": "My dietician has advised inclusion of Vitamin A in my pregnancy diet. What are the common sources of the same?",
    "answer": "look at some good sources of vitamin A: baked sweet potato, carrot slices, pumpkin, spinach, butternut squash, kale, nonfat fortified milk,oatmeal, cantaloupe, bran cereal, egg, peas and cheese. It is best to discuss with your dietician and doctor.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My coworker had done some aquanatal classes during her pregnancy, what exactly are these and how would they help me, now that I am expecting?": {
    "question": "My coworker had done some aquanatal classes during her pregnancy, what exactly are these and how would they help me, now that I am expecting?",
    "answer": "Think of a mixture between aerobics and synchronised swimming. Really nice to do in pregnancy as the water supports your body and yet the water resistance tones you up nicely. Also the water helps you wake up enough to finish the class! It may be hard to motivate yourself to go especially on winter evenings but you'll always come out feeling happier and with more energy. Talk to your doctor regarding the same.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What goes on in Active Birth classes? My partner has suggested I start going to these right away as am in the 2nd trimester already.": {
    "question": "What goes on in Active Birth classes? My partner has suggested I start going to these right away as am in the 2nd trimester already.",
    "answer": "Active Birth classes are based on using yoga to strengthen your body and gain confidence in preparing for birth. You will learn how to use breathing and relaxation to relieve stress, and to reduce the strains of pregnancy by improving your posture and circulation. The classes aim to give you a general sense of well-being and an increase in confidence as you approach the birth of your baby. All the exercises are gentle, safe and easy to follow, and are suitable for any stage of pregnancy. A typical class might consist of yoga, breathing and relaxation, including some work on positions and breathing for labour. There might then be some time for discussion of a particular birth-related topic, or to meet a new mother and hear her birth story, or simply to socialise",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Pregnancy Yoga has been in vogue for some time now, so was just wondering if it is actually practically helpful. Please advise as I have just conceived.": {
    "question": "Pregnancy Yoga has been in vogue for some time now, so was just wondering if it is actually practically helpful. Please advise as I have just conceived.",
    "answer": "Pregnancy yoga is a lovely exercise, although it is recommended that you don't start in the first 12 weeks. The gentle stretching doesn't put undue pressure on your already stretching ligaments and the breathing exercises will stand you in good stead for labour. The relaxation element will help you sleep, and the resulting \"opening\" of body and mind makes more room in your body for your baby and takes the weight off an over-burdened spine.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What should I pack for labour?": {
    "question": "What should I pack for labour?",
    "answer": "•Copies of your medical records. •Slippers. •Cotton socks (if the weather is cold) •Massage oil or lotion if you would like to be massaged during your labour. •Lip balm. •Snacks and drinks, if permitted by the hospital. •Things to help you relax or pass the time,such as books, magazines, games and so on. •Mobile phone and charger. Make sure you have enough credit to send out announcement messages! •Toiletries. •A hairband. You might want your hair tied up or pulled back. •Water spray bottle and wet wipes to freshen up. •Music to listen to. Some hospitals may provide CD players. •Pillows and cushions to make you more comfortable. They will come in handy after birth while breastfeeding, too. Talk to your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What should my birth partner or attendant pack?": {
    "question": "What should my birth partner or attendant pack?",
    "answer": "•A change of clothes and toiletries. •Snacks (if the hospital does not have a canteen). •ATM or credit cards for emergencies. •Some cash and change in hand. Not all facilities at the hospital have the option of paying by card, such as the parking lot and the canteen. •Medical insurance papers (if any). •Mobile phone and charger. •Comfortable shoes. The attendant might have to be on his or her feet a lot. •Watch or timer with a second hand, to time contractions. •Digital camera or camcorder (if the hospital allows). Talk to your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What shall I pack for after the birth?": {
    "question": "What shall I pack for after the birth?",
    "answer": "•A going-home outfit. You'll need loose comfortable clothes to wear while you're in hospital and for the journey home. It will take a while for your tummy to go down, so you'll need your maternity clothes for the first few weeks when you come home. •Nursing bras. Take one or two. •Breast pads. •Maternity/sanitary pads. Take a couple of packs. •Nightdress or top. Front-opening ones are useful in the early days of breastfeeding. •A shawl, stole or dupatta to cover yourself while breastfeeding. •Toiletries and make up. •Comfortable panties. Don't bring your best ones as they will get messy. If you end up having a caesarean, stretchy panties would be comfortable to wear over your scar. •Supportive shoes or sandals.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What should my family pack for my baby?": {
    "question": "What should my family pack for my baby?",
    "answer": "•Four sets of clothes that are suited to the season. Rompers, sleep suits, cotton jhablas,T-shirts, shorts or leggings, will all work well. •Three vests or onesies to be worn as innerwear. In hot weather, one layer of clothing might be enough. •Two sweaters for winter babies. •One pair of socks or booties. •One cap. •Two soft cotton sheets for your baby's bed. •One waterproof sheet protector or rubber under sheet to keep the bed from getting wet with spit up, pee or breastmilk. •One baby blanket. Take a warm, soft one if the weather is cold. A light cotton sheet will probably be enough in summer. •12 nappies, nappy pads or diapers per day. •Wet wipes and changing mat. They may come in handy for nappy changing. •One soft towel. •Toiletries (a baby cleanser, shampoo, massage oil, hairbrush, nail clippers). •A few soft cotton squares or hand towels to clean spit-up or spills while feeding.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How am I expected to feel during pre-labour or in early labour?": {
    "question": "How am I expected to feel during pre-labour or in early labour?",
    "answer": "How you will feel in the pre-labour or early labour depends on: •Whether you've had a baby before. •How you perceive and respond to pain. •How prepared you are for the labour experience.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How will I know when I'm in labour?": {
    "question": "How will I know when I'm in labour?",
    "answer": "Every woman's labour is different. So pinpointing when yours begins isn't really possible. However, some specific changes take place in pre-labour, early labour and established (active) labour that might help you recognise that labour and birth are imminent. In pre-labour or early labour (the latent phase), you may have: •Persistent lower back pain or abdominal pain, with pre-menstrual feeling and cramps. •Painful contractions that occur at regular and increasingly shorter intervals, and become longer and stronger in intensity. •Broken waters. Your membranes may rupture with a gush or a trickle of amniotic fluid. Either way, call your doctor. •A brownish or blood-tinged mucus discharge (bloody show). If you pass the mucus plug that blocks the cervix, labour could be imminent, or it could be several days away. It's a sign that things are moving along. •An upset tummy or loose bowels. •A period of feeling very emotional or moody. •Disrupted sleep.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Can my wife have contractions and not be in labour?": {
    "question": "Can my wife have contractions and not be in labour?",
    "answer": "Yes. She can have pre-labour contractions. These help her cervix to go through the required changes before it starts to dilate. During dilation, her cervix moves from the back (posterior position) to the front (anterior position). It will also be shortening and thinning (softening and effacing).",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I am very close to my due date, what are the possible medical emergencies?": {
    "question": "I am very close to my due date, what are the possible medical emergencies?",
    "answer": "You should contact your doctor if: •Your waters break, or if you suspect you're leaking amniotic fluid. •Your baby is moving less than usual. •You have vaginal bleeding (unless it's just a small amount after a membrane sweep or the blood-tinged mucus of the show). •You have a fever, severe headaches, changes in your vision, along with abdominal pain.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How can birthing balls help?": {
    "question": "How can birthing balls help?",
    "answer": "Lots of women and midwives recommend spending as much time as possible bouncing and rocking gently on a birthing ball in the weeks leading up to labour. Apparently it helps start things moving and can help to get the baby in the right position, if he/she isn't there already. It's worth investing in a proper birthing ball too to make sure it doesn't burst under your pregnancy weight.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My co-sister has suggested mineral and vitamin tablets for my baby to be healthy. Is it safe to take herbal supplements during my pregnancy?": {
    "question": "My co-sister has suggested mineral and vitamin tablets for my baby to be healthy. Is it safe to take herbal supplements during my pregnancy?",
    "answer": "Very high doses of vitamins and minerals could be harmful to your baby. Always check with your doctor before taking any medicines or tablets, even if they are herbal.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Can I go on a diet during pregnancy?": {
    "question": "Can I go on a diet during pregnancy?",
    "answer": "Dieting during pregnancy could harm you and your baby. Some diets can leave you low on iron, folic acid or other important vitamins and minerals. It is best to talk to your dietician regarding a healthy and balanced diet.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What is a healthy weight gain during pregnancy?": {
    "question": "What is a healthy weight gain during pregnancy?",
    "answer": "Bear in mind that weight gain varies among women, and how much weight you put on during your pregnancy depends on many factors. So concentrate on eating a healthy diet of plenty of starchy carbohydrates, fruits and vegetables, reasonable amounts of protein, milk and dairy foods, and just a little in the way of fats and sugars. When you put on weight may be as important as the amount you put on. You may gain the least weight during the first trimester. Your weight should then steadily increase throughout the second trimester, and you may put on the most weight over the third trimester, when your baby is growing the most.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it all right to indulge my unhealthy cravings when I am pregnant?": {
    "question": "Is it all right to indulge my unhealthy cravings when I am pregnant?",
    "answer": "You don't have to give up all your favourite foods just because you're pregnant. But processed or heavily fried foods and snacks and sugar-packed desserts shouldn't be the mainstay of your diet, either.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Why should we consult a dietician in addition of a doctor regarding my food intake during pregnancy?": {
    "question": "Why should we consult a dietician in addition of a doctor regarding my food intake during pregnancy?",
    "answer": "Talk with your doctor about your diet if: •You are a strict vegetarian •You have gestational diabetes •You have anaemia •You have a history of low-birth weight babies. In these cases you may need extra vitamins and minerals, or you might have to eat a special diet.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "When will I feel my baby's first movements?": {
    "question": "When will I feel my baby's first movements?",
    "answer": "You'll probably start to be aware of something at about 18 weeks to 20 weeks of your pregnancy. If this is your first pregnancy, it may take you a while to realise that those gentle fluttering feelings (quickening) in your tummy are your baby's movements. Being aware of these first, tiny sensations inside is an exciting landmark for most mums-to-be. If you've had a baby before, you'll know the tell-tale signs, and may notice your baby moving around as early as 16 weeks. If you haven't felt any movement from your baby by 24 weeks, see your doctor.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am well into my 3rd trimester and the baby's movements seem to vary": {
    "question": "Am well into my 3rd trimester and the baby's movements seem to vary",
    "answer": "Your baby won't constantly be on the move. There'll be times when he just wants to rest and sleep. Don't worry if you don't see much activity during your scans, as your baby may be asleep. Towards the end of your pregnancy, he'll rest for about 45 minutes at a time. The rests might feel longer than this, because you won't feel every movement.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am 32 weeks pregnant, what should I expect in terms of my baby's movement?": {
    "question": "Am 32 weeks pregnant, what should I expect in terms of my baby's movement?",
    "answer": "You're likely to notice a peak in movements as, after this week, the number of movements you notice will taper off. This is quite normal, as your baby has less space to move around in.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "How many kicks should I feel each day?": {
    "question": "How many kicks should I feel each day?",
    "answer": "There is no set amount of kicks to expect and there's no need to keep a written record or chart of your baby's movements. Charts aren't particularly helpful for telling whether or not there's a problem. It's easy to forget to fill charts in, and if the results are inaccurate, you'll become worried unnecessarily. Instead, tune in to your baby's pattern of movements during waking hours. As your pregnancy progresses, it gets easier to learn this rhythm. Every baby has a different pattern of waking and sleeping, but you'll come to know what is normal for your baby. If you notice a change in your baby's pattern of movements, or are worried at any stage, contact your doctor or hospital straight away so your baby's wellbeing can be checked.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I haven't felt my baby kick today, should I be worried?": {
    "question": "I haven't felt my baby kick today, should I be worried?",
    "answer": "If you haven't concentrated on feeling these sensations, you may have missed them. To help you to focus and count your baby's movements, lie on your side with support under your bump. Stay still and watch for a couple of hours, during which time you should feel at least ten separate movements. If you'd like some reassurance, here are some quick ways to encourage your baby to move:•Put your feet up, have a snack, and relax. Babies are sometimes rocked to sleep while you are moving around, and he may wake up when you stop and have something to eat. •Have a really cold drink. Your baby may feel the change in temperature and try to move away from it. •Make some noise. Play loud music or slam a door to see if he responds. If your baby starts to move around, all is probably well. But keep an eye on his movements from now on, and seek help sooner rather than later.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "When should my baby's movements become a matter of concern for me to consult my doctor?": {
    "question": "When should my baby's movements become a matter of concern for me to consult my doctor?",
    "answer": "Contact your doctor if:•You don't feel ten or more separate movements while lying on your side for two hours. •Your baby doesn't start to move in response to noise or some other stimulus. •There's a big decrease in your baby's movements, or a gradual decrease over several days. If your baby is moving less, it could be a sign that he's not getting enough nutrients or oxygen through the placenta. If this is suspected, you're likely to have a check-up to assess if all is well with you and your baby.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am now well over 36 weeks pregnant, how is the baby expected to move around?": {
    "question": "Am now well over 36 weeks pregnant, how is the baby expected to move around?",
    "answer": "Your baby will be getting larger, and won't be rolling over as often. Instead, you may notice a persistent kick underneath your ribs on one side or the other. By now, your baby may have learned to suck his thumb. If his thumb pops out of his mouth, you may even feel his head darting from side to side, as he tries to find it again. A change in the sort of movements you feel is normal. But you should still be feeling your baby move in the weeks leading up to labour, and during labour itself.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am 26 weeks pregnant and hear sudden noises, are these normal?": {
    "question": "Am 26 weeks pregnant and hear sudden noises, are these normal?",
    "answer": "You may start to notice when your baby gets hiccups, which feels like a jerking movement. The amniotic sac now contains up to 750ml of fluid. This gives your baby plenty of space to move around freely. You may notice him jumping at sudden noises.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My ultrasound scan is scheduled for tomorrow, what can I expect to see?": {
    "question": "My ultrasound scan is scheduled for tomorrow, what can I expect to see?",
    "answer": "Ultrasound scans can show us what babies do and when, though most of your baby's movements start long before you become aware of them. If you're fortunate, your baby may be awake during your scan, and you'll be able to see him moving.•At seven weeks to eight weeks your baby starts general movements, such as bending sideways and startling. •At about nine weeks he can hiccup, move an arm or leg, and suck and swallow. •At 10 weeks he can flex and rotate his head, bring his hands up to touch his face, and open his jaw and stretch. •At 11 weeks he can yawn. •At 14 weeks he can move his eyes.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My husband keeps trying to pep me up, how can my stress and low mood affect our unborn baby?": {
    "question": "My husband keeps trying to pep me up, how can my stress and low mood affect our unborn baby?",
    "answer": "Studies have shown that such stress during pregnancy increases the risk of a stillbirth, premature birth, low birthweight baby and even anti-social behaviour in the child. Stress can also lead you to adopt certain behaviours like smoking during pregnancy known to affect the unborn baby.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "I'm overweight. Will it take longer for me to feel my baby kick?": {
    "question": "I'm overweight. Will it take longer for me to feel my baby kick?",
    "answer": "Different women feel their baby's movements in different ways. So, no one can say for sure if carrying more weight will make you feel your baby move or kick later than other pregnant women. Generally speaking, women expecting their first baby tend to notice movements later than women who have already had children. So, if this is your first pregnancy, you may not recognise your baby's movements until about 22 to 24 weeks. This is because, unlike mums expecting their second or third child, you aren't familiar with the sensation. It may also be harder to feel your baby's movement if: •you have extra weight around your middle •your placenta happens to be cushioning your baby You're most likely to feel your baby move when you're lying down, and least likely to do so when standing up.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "First I developed stretch marks and now they have started to itch. Is it normal?": {
    "question": "First I developed stretch marks and now they have started to itch. Is it normal?",
    "answer": "Some level of itchiness on your stretch marks is quite normal during pregnancy. It can be caused by the stretching of the skin or because of dry skin, both of which are harmless. Changing hormones too are a reason for the itchiness. Talk to your doctor for more information.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What are the safe ways to prevent ichiness on the stretch marks that have developed during my pregnancy?": {
    "question": "What are the safe ways to prevent ichiness on the stretch marks that have developed during my pregnancy?",
    "answer": "You could get some relief from itchy skin by trying the following: •Apply moisturiser with an aloe vera or calamine base. •Use a soap or shower gel that doesn't dry your skin. Skin is slightly acidic in nature and using an alkaline soap might dry your skin out. Most soaps are alkaline, some are pH neutral and even fewer have the same acidity as your skin. Try a pH neutral soap or an acidic soap to see if it helps you. •Massage your body with coconut (nariyal) oil or almond oil before a bath. Avoid using a body brush or loofah until your skin stops itching. •Boil a few neem leaves in a cup of water and add this mixture to your bath water. This soothes the itchiness in some women. •Eat a diet rich in vitamin C, vitamin E, beta carotene and zinc. •Drink adequate water to keep your skin soft and hydrated. •Use a soft clean cloth to gently rub over the itchy areas. Don't use your nails as you may draw blood and infect your skin.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am in my 3rd trimester, 31 weeks of pregnancy to be precise - what kind of weight growth is considered healthy at this stage?": {
    "question": "Am in my 3rd trimester, 31 weeks of pregnancy to be precise - what kind of weight growth is considered healthy at this stage?",
    "answer": "Gaining a pound/450 grams a week is quite normal during the last trimester as your baby has a final growth spurt before birth. Please note that every baby develops differently, so it is best to consult your doctor regarding the current and expected weight of the baby.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it fine if I skip meals during pregnancy?": {
    "question": "Is it fine if I skip meals during pregnancy?",
    "answer": "No, it isn't. Don't miss any meals as you and your baby need to eat well for a regular supply of energy. And being on an empty stomach for too long may cause acidity and heartburn. If you decide to fast on certain days, bear in mind that going for long stretches without food or drink can make you feel tired or unwell. Go easy on yourself and keep track of how you are feeling.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "My gyn has suggested I add Vitamin K to be diet during my pregnancy? Why do I need vitamin K?": {
    "question": "My gyn has suggested I add Vitamin K to be diet during my pregnancy? Why do I need vitamin K?",
    "answer": "Babies are born with lower levels of vitamin K than adults, but they usually have enough vitamin K for their blood to clot if they have an accident. It may be helpful to have vitamin K now and during the first weeks with your baby, particularly if you are breastfeeding. The first breastfeeds of colostrum are rich in vitamin K. Even after these initial feeds, your baby will continue to get plenty of vitamin K from your milk. As well as helping wounds to heal properly, vitamin K helps to make your baby's bones strong. Check with your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Now that I understand the importance of including Vitamin K in my diet, what are the common sources of the same?": {
    "question": "Now that I understand the importance of including Vitamin K in my diet, what are the common sources of the same?",
    "answer": "You can make sure you get plenty of vitamin K from foods such as:• green leafy vegetables like spinach (paalak), fenugreek (methi), lamb's quarters (bathua) and mustard greens (sarson) •fresh vegetables such as cauliflower (gobhi), broccoli (hari gobhi) and cabbage (patta gobhi), green beans (been) •fruits such as cantaloupe melon (kharbooja), pomegranate (anaar), grapes (angoor) and figs (anjeer) •soyabean •wholemeal bread Small amounts of vitamin K can also be found in meat and dairy foods. Talk to your doctor / dietician regarding the same.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Is it safe to cook food in iron vessels?": {
    "question": "Is it safe to cook food in iron vessels?",
    "answer": "•It is best not to cook in an iron vessel every day, keep it to no more than two to three times a week. •Sour or acidic foods may react with the iron to create an unpleasant metallic taste. Cook kadhi, rasam, sambhar, or tomato-based curries in a stainless steel vessel instead. •Wash the iron utensils with a mild detergent and dry immediately. Before storing, apply a thin coat of vegetable oil to protect it from rust. Water and other fluids should not be stored in iron vessels. Iron reacts with moisture and forms rust. This, along with other contaminants, may affect your drinking water. For the same reason, any food cooked in iron vessels should be transferred immediately to another dish, preferably a glass or enamel dish.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Are there any foods that can bring on labour?": {
    "question": "Are there any foods that can bring on labour?",
    "answer": "If your pregnancy goes beyond 40 weeks, it is considered overdue. You'll usually be offered an induction during or after 40 weeks. So, if your induction date is looming, there are things you can try to hurry up the waiting game. Although we can't guarantee that any of them work! You could try eating a spicy curry to bring on labour. But bear in mind that spicy foods can cause heartburn and acidity. And if you're not used to spicy food it may irritate your bowel, leaving you with an upset stomach. Fresh pineapple is another option. It contains the enzyme bromelain which is thought to help soften the cervix. One pineapple contains very small amounts though, so you would have to eat very large quantities of it to have any effect, which isn't advisable.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "What kind of food should I be eating and taking to the hospital when am going in for delivery?": {
    "question": "What kind of food should I be eating and taking to the hospital when am going in for delivery?",
    "answer": "With your baby's birth fast approaching, try to organise snacks and drinks to take into the hospital. For some women, eating is the last thing on their mind. But for others, particularly those who have a long first stage, a snack may be essential. Try these suggestions:•If you feel like it, have a light meal during the early stages of labour before you go into hospital. •Take some easy-to-digest snacks in case you do feel hungry in the early stages. Plain biscuits, rusks, nuts and raisins are ideal. •Check in advance what the hospital canteen has to offer. If the food on their menu does not seem interesting, you could enlist the help of some relatives to organise snacks or a packed meal for your husband or birth partner. If you become over-tired during the birth, the hospital may provide a fluid drip to give you energy. However, do check with your doctor and hospital if you can bring your own snacks and drinks. Some hospitals have a policy where only snacks and drinks from the hospital canteen are allowed.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Am 37 weeks pregnant. What are the healthy drinks options for me?": {
    "question": "Am 37 weeks pregnant. What are the healthy drinks options for me?",
    "answer": "Nutritious drinks you may like to try:•fresh fruit juice •mango (aam) smoothies •tomato apple (tamatar seb) juice Consult your dietician for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  },
  "Can I eat and drink during labour?": {
    "question": "Can I eat and drink during labour?",
    "answer": "Yes. You can eat and drink during early labour as long as you:•haven't been given a pain killer such as pethidine. •you don't have any complications that might make you need a general anaesthetic Eat what you feel like eating, within reason! Carbohydrates are better than most foods for labour. This is because they release energy slowly to help you through contractions. Talk to your doctor for more details.",
    "consultNow": "",
    "category": "",
    "subCategory": "",
    "doctorName": "Dr.Priyanka"
  }
};

for (var key in qandasPriyanka) {
  count++;
  var qanda = qandasPriyanka[key];
  qanda.consultNow = qanda.category.toLowerCase().startsWith('yes');
  qanda.consultDoctorType = qanda.category.split(' ')[1];
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};