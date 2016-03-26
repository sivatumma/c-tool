var _ = require('underscore');
var tipModels = [];

var tipsSolomon = [{
    "category": "Diabetes",
    "subCategory": "Diabetic neuropathy",
    "tip": "Check your feet every day.",
    "tipDescription": "Look for blisters, cuts, bruises, cracked and peeling skin, redness and swelling. Use a mirror or ask a friend or family member to help examine parts of your feet that are hard to see."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic neuropathy",
    "tip": "Keep your feet clean and dry.",
    "tipDescription": "Wash your feet every day with lukewarm water and mild soap. Avoid soaking your feet. Dry your feet and between your toes carefully by blotting or patting with a soft towel. Moisturize your feet thoroughly to prevent cracking. Avoid getting lotion between your toes, however, as this can encourage fungal growth."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic neuropathy",
    "tip": "Trim your toenails carefully.",
    "tipDescription": "Cut your toenails straight across, and file the edges carefully so there are no sharp edges."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic neuropathy",
    "tip": "Wear clean, dry socks.",
    "tipDescription": "Look for socks made of cotton or moisture-wicking fibers that don't have tight bands or thick seams."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic neuropathy",
    "tip": "Wear cushioned shoes that fit well.",
    "tipDescription": "Always wear shoes or slippers to protect your feet from injury. Make sure that your shoes fit properly and allow your toes to move. A podiatrist can teach you how to buy properly fitted shoes and to prevent problems such as corns and calluses."
}, {
    "category": "Diabetes",
    "subCategory": "Alchohol",
    "tip": "practice caution when drinking",
    "tipDescription": "Do not drink on an empty stomach or when your blood glucose is low. If you choose to drink, follow your doctor guidelines and have it with food. This is especially important for those on insulin and diabetes pills such as sulfonylureas and meglitinides (Prandin), which lower blood glucose by making more insulin."
}, {
    "category": "Diabetes",
    "subCategory": "Alchohol",
    "tip": "Choose alchohol carefully in diabetes",
    "tipDescription": "Try a light beer or wine spritzer made with wine, ice cubes and club soda. Watch out for heavy craft beers, which can have twice the alcohol and calories as a light beer. For mixed drinks, choose calorie-free drink mixers like diet soda, club soda, diet tonic water or water. Do not drive or plan to drive for several hours after you drink alcohol."
}, {
    "category": "Diabetes",
    "subCategory": "Alchohol",
    "tip": "Check blood sugars before and afer drink.",
    "tipDescription": "Alcohol can cause hypoglycemia shortly after drinking and for up to 24 hours after drinking. If you are going to drink alcohol, check your blood glucose before you drink while you drink and for up to 24 hours. You should also check your blood glucose before you go to bed to make sure it is at a safe level – between 100 and 140 mg/dL. If your blood glucose is low, eat something to raise it."
}, {
    "category": "Diabetes",
    "subCategory": "Alchohol",
    "tip": "Tell your doctor that you will have alchohol",
    "tipDescription": "If you drink alcohol at least several times a week, make sure your doctor knows this before he/she prescribes a diabetes pill."
}, {
    "category": "Diabetes",
    "subCategory": "Alchohol",
    "tip": "Wear an I.D when taking alchohol",
    "tipDescription": "The symptoms of too much alcohol and hypoglycemia can be similar – sleepiness, dizziness and disorientation. You do not want anyone to confuse hypoglycemia for drunkenness, because they might not give you the proper assistance and treatment. The best way to get the help you need if you are hypoglycemic is to always wear an I.D. that says \"I have diabetes.\""
}, {
    "category": "Diabetes",
    "subCategory": "Oral health in diabetes",
    "tip": "Make a commitment to manage your diabetes for oral health",
    "tipDescription": "Monitor your blood sugar level, and follow your doctor's instructions for keeping your blood sugar level within your target range. The better you control your blood sugar level, the less likely you are to develop gingivitis and other dental problems."
}, {
    "category": "Diabetes",
    "subCategory": "Oral health in diabetes",
    "tip": "Brush your teeth at least twice a day.",
    "tipDescription": "Brush in the morning, at night and, ideally, after meals and snacks. Use a soft-bristled toothbrush and toothpaste that contains fluoride. Avoid vigorous or harsh scrubbing, which can irritate your gums. Consider using an electric toothbrush, especially if you have arthritis or other problems that make it difficult to brush well. Get a new toothbrush at least every three months."
}, {
    "category": "Diabetes",
    "subCategory": "Oral health in diabetes",
    "tip": "Floss your teeth at least once a day.",
    "tipDescription": "Flossing helps remove plaque between your teeth and under your gumline. If you have trouble getting floss through your teeth, use the waxed variety. If it's hard to manipulate the floss, use a floss holder."
}, {
    "category": "Diabetes",
    "subCategory": "Oral health in diabetes",
    "tip": "Schedule regular dental visits.",
    "tipDescription": "Visit your dentist at least twice a year for professional cleanings and checkups"
}, {
    "category": "Diabetes",
    "subCategory": "Oral health in diabetes",
    "tip": "Make sure your dentist knows you have diabetes",
    "tipDescription": "Every time you visit your dentist, remind him or her that you have diabetes. Make sure your dentist has contact information for your doctor who helps you manage your diabetes."
}, {
    "category": "Diabetes",
    "subCategory": "Oral health in diabetes",
    "tip": "Look for early signs of gum disease.",
    "tipDescription": "Report any signs of gum disease — including redness, swelling and bleeding gums — to your dentist. Also mention any other signs and symptoms, such as dry mouth, loose teeth or mouth pain."
}, {
    "category": "Diabetes",
    "subCategory": "Oral health in diabetes",
    "tip": "Don't smoke",
    "tipDescription": "Smoking increases the risk of serious diabetes complications, including gum disease. If you smoke, ask your doctor about options to help you quit."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic retinopathy",
    "tip": "Pay attention to vision changes.",
    "tipDescription": "Contact your eye doctor right away if you experience sudden vision changes or your vision becomes blurry, spotty or hazy."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic retinopathy",
    "tip": "Schedule a yearly physical exam and regular eye exams",
    "tipDescription": "Your regular diabetes checkups aren't meant to replace yearly physicals or routine eye exams. During the physical, your doctor will look for any diabetes-related complications, as well as screen for other medical problems. Your eye care specialist will check for signs of retinal damage, cataracts and glaucoma."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic retinopathy",
    "tip": "Keep your immunizations up to date.",
    "tipDescription": "High blood sugar can weaken your immune system. Get a flu shot every year. Your doctor will likely recommend the pneumonia vaccine, as well. The Centers for Disease Control and Prevention (CDC) also recommends hepatitis B vaccination if you haven't previously been vaccinated against hepatitis B and you're an adult ages 19 to 59 with type 1 or type 2 diabetes."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic retinopathy",
    "tip": "Keep your blood pressure and cholesterol under control.",
    "tipDescription": "Eating healthy foods and exercising regularly can go a long way toward controlling high blood pressure and cholesterol. Medication may be needed, too."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic retinopathy",
    "tip": "If you smoke or use other forms of tobacco, ask your doctor to help you quit.",
    "tipDescription": "Smoking increases your risk of diabetes complications, including heart attack, stroke, nerve damage and kidney disease. In fact, smokers who have diabetes are three times more likely to die prematurely than are nonsmokers who have diabetes, according to the American Diabetes Association. Talk to your doctor about ways to stop smoking or to stop using other types of tobacco."
}, {
    "category": "Diabetes",
    "subCategory": "Alchohol",
    "tip": "If you drink alcohol, do so responsibly.",
    "tipDescription": "Alcohol can cause either high or low blood sugar, depending on how much you drink and if you eat at the same time. If you choose to drink, do so only in moderation and always with a meal. And be sure to check your blood sugar levels before going to sleep."
}, {
    "category": "Diabetes",
    "subCategory": "Stress",
    "tip": "Take stress seriously",
    "tipDescription": "The hormones your body may produce in response to prolonged stress may prevent insulin from working properly, which can stress and frustrate you even more. Take a step back and set some limits. Prioritize your tasks. Learn relaxation techniques. Get plenty of sleep."
}, {
    "category": "Diabetes",
    "subCategory": "Exercise",
    "tip": "Get more physical activity",
    "tipDescription": "There are many benefits to regular physical activity. Exercise can help you: Lose weight Lower your blood sugar Boost your sensitivity to insulin — which helps keep your blood sugar within a normal range Research shows that both aerobic exercise and resistance training can help control diabetes, but the greater benefit comes from a fitness program that includes both."
}, {
    "category": "Diabetes",
    "subCategory": "Diet",
    "tip": "Get plenty of fiber",
    "tipDescription": "It's rough, it's tough — and it may help you: Reduce your risk of diabetes by improving your blood sugar control Lower your risk of heart disease Promote weight loss by helping you feel full Foods high in fiber include fruits, vegetables, beans, whole grains, nuts and seeds."
}, {
    "category": "Diabetes",
    "subCategory": "Diet",
    "tip": "Go for whole grains",
    "tipDescription": "Although it's not clear why, whole grains may reduce your risk of diabetes and help maintain blood sugar levels. Try to make at least half your grains whole grains. Many foods made from whole grains come ready to eat, including various breads, pasta products and many cereals. Look for the word \"whole\" on the package and among the first few items in the ingredient list."
}, {
    "category": "Diabetes",
    "subCategory": "Exercie",
    "tip": "Lose extra weight",
    "tipDescription": "If you're overweight, diabetes prevention may hinge on weight loss. Every pound you lose can improve your health, and you may be surprised by how much. Participants in one large study who lost a modest amount of weight — around 7 percent of initial body weight — and exercised regularly reduced the risk of developing diabetes by almost 60 percent."
}, {
    "category": "Diabetes",
    "subCategory": "Diet",
    "tip": "Skip fad diets and just make healthier choices",
    "tipDescription": "Low-carb diets, the glycemic index diet or other fad diets may help you lose weight at first, but their effectiveness at preventing diabetes isn't known nor are their long-term effects. And by excluding or strictly limiting a particular food group, you may be giving up essential nutrients. Instead, think variety and portion control as part of an overall healthy-eating plan."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Commit to managing your diabetes.",
    "tipDescription": "Learn all you can about type 2 diabetes. Make healthy eating and physical activity part of your daily routine. Establish a relationship with a diabetes educator, and ask your diabetes treatment team for help when you need it."
}, {
    "category": "Diabetes",
    "subCategory": "Diet",
    "tip": "Follow your meal plan.",
    "tipDescription": "Consistent snacks and meals can help you control your blood sugar level."
}, {
    "category": "Diabetes",
    "subCategory": "diagnosis",
    "tip": "Keep an eye on your blood sugar level.",
    "tipDescription": "Frequent blood sugar tests can tell you whether you're keeping your blood sugar level in your target range — and alert you to dangerous highs or lows. Check more frequently if you've exercised because exercise can cause blood sugar levels to drop, especially if you don't exercise regularly."
}, {
    "category": "Diabetes",
    "subCategory": "drugs",
    "tip": "Take your medication as directed.",
    "tipDescription": "If you have frequent episodes of high or low blood sugar, let your doctor know. He or she may need to adjust the dose or the timing of your medication."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Have a sick-day plan.",
    "tipDescription": "Illness can elevate blood sugar unexpectedly. Before you get sick, talk with your doctor about how to best manage this increase in your blood sugar."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic ketoacidisis",
    "tip": "Check for ketones when your blood sugar is high.",
    "tipDescription": "Check your urine for ketones when your blood sugar level is more than 240 mg/dL (13.3 mmol/L), especially if you are sick. If you have a large amount of ketones, call your doctor for advice. Call your doctor immediately if you have any level of ketones and are vomiting."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic ketoacidisis",
    "tip": "Have glucagon and fast-acting sources of sugar available",
    "tipDescription": "If you take insulin for your diabetes, make sure you have an up-to-date glucagon kit and fast-acting sources of sugar, such as glucose tablets or orange juice, readily available to treat low blood sugar levels."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic ketoacidisis",
    "tip": "Consider a continuous glucose monitor (CGM)",
    "tipDescription": "CGMs are devices that use a small sensor inserted underneath the skin to track trends in your blood sugar levels and transmit the information to a wireless device. These devices can alert you when your blood sugar is dangerously low or if it is dropping too fast. However, you still need to test your blood sugar levels using a blood glucose meter even if you're using a CGM."
}, {
    "category": "Diabetes",
    "subCategory": "Alchohol",
    "tip": "Drink alcohol with caution",
    "tipDescription": "Because alcohol can have an unpredictable effect on your blood sugar, be sure to have a snack or a meal when you drink, if you choose to drink at all."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Educate your loved ones, friends and co-workers.",
    "tipDescription": "Teach loved ones and other close contacts how to recognize early signs and symptoms of blood sugar extremes — and how to administer a glucagon injection. If needed, someone should summon emergency help should you pass out."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Make Small Changes for BIG Rewards",
    "tipDescription": "There is no need to hit the pavement running or go on a rigid, unattainable diet to manage your diabetes. Research shows that a key to controlling type 2 diabetes in the early stages is to lose 10-20 pounds (5-7 percent of your body weight) and keeping those pounds at bay for years to come. In fact, losing just a few pounds, eating healthier, and walking a few times a week can cause blood sugar to plummet if you've caught type 2 early enough. Losing a few pounds can also lower blood pressure, improve blood lipids (cholesterol), and help a host of other health problems, such as sleep apnea. Weight loss after years of having type 2 diabetes might not be as impactful on your glucose levels, but healthy eating and exercise are always important for your health."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Take Action to Get More Active",
    "tipDescription": "The benefits of being physically active cannot be overemphasized -- especially for people newly diagnosed with type 2 diabetes. Being more active includes getting about 30 minutes of physical activity as many days a week as you can. It also means limiting the amount of time you sit on the sofa, at your desk, or at a table. Get up and walk around to stretch your legs and get your blood moving. Moving more offers you all the general benefits of physical activity and being fit, including better sleep, more energy, greater agility, and healthier skin. Add these to the exercise benefits for people with type 2 diabetes: keeping off lost weight, healthier cholesterol and heart, lower blood sugar levels, and improved insulin sensitivity that allows your body to make better use of the insulin it continues to make. Suffice it to say, exercise is medicine!"
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Chart and Check Your Progress",
    "tipDescription": "Taking care of diabetes calls for careful charting and tracking. And it takes time and energy to chart what you eat, the medications you take, your glucose results, and physical activity. But seeing the fruits of your labor over time can be rewarding and motivating. Today there is a range of charting tools available to you. They include everything from paper and pencil to mobile and online apps and glucose-monitoring devices that download from your meter or smartphone. You'll want to track your day-to-day data as well as the results of your quarterly and annual tests and checks. Give yourself a pat on the back for each of your successes!"
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Heed the Wake-Up Call for Healthy Living",
    "tipDescription": "Most people with newly diagnosed type 2 diabetes carry around extra weight. And they either have heart disease or are at risk for it, along with other weight-related health problems. The good news is that the same actions that can lower or control your blood sugar can also help you lose weight, improve cholesterol, lower blood pressure, and more. Yes, a package deal! Take a deep breath. Look at your diagnosis of type 2 diabetes as a wake-up call. Relish this opportunity to make changes in your lifestyle to improve your health for today and many healthy tomorrows."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Develop a Plan for Physical Activity",
    "tipDescription": "Physical activity is the perfect partner to your healthy eating plan: Food gives you energy, and activity can help to burn it up! The American Diabetes Association recommends accumulating 30 minutes of aerobic activity such as walking on most days, with the addition of resistance training (pushing, pulling, lifting) two or three times a week."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Incorporate Activity into Your Routine",
    "tipDescription": "Staying active is important, but you don't have to hit the gym to stay in shape. Every step, push, pull, lift, and stretch counts! Lift: carry sand bags, groceries, trash Push: mow the lawn, push a stroller Pull: weed the garden Stretch: take a stretch break at work"
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "simple ways to incorporate physical activity into your day",
    "tipDescription": "Walk with your pet, baby, child, or grandchild. Bike or walk to do neighborhood errands if you live a reasonable distance away. Climb a couple flights of stairs instead of taking the elevator or escalator. Avoid sitting (at a screen, on a couch) for more than 30 minutes at a time."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Prevent hypoglycemia after activity",
    "tipDescription": "And check your blood glucose before and after the activity to see the effects. If you are regularly exercising and experiencing low blood sugar, it’s likely your glucose-lowering medication(s) need to be changed."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Connect with Others",
    "tipDescription": "you have diabetes. Connecting with others can recharge and motivate you to take care of yourself. Talking with someone you trust can ease anxiety about having diabetes."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Pick Your Primary Care Provider",
    "tipDescription": "When choosing a primary care physician to help you manage your diabetes, it's important that they: Respect individuality. Listen and respond to questions and concerns. Recommend the best treatment plan possible. Review treatment plans regularly. Adjust plans as needed based on A1C, self blood glucose tests, cholesterol, blood pressure, and other lab work."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Create a Diabetes Care Schedule",
    "tipDescription": "Work with your primary care provider to customize your diabetes care schedule, including personal goals and targets. Schedule these preventive tests and checks in advance, and mark your calendar!"
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Donot Deny Diabetes..",
    "tipDescription": "Some people with type 2 diabetes don’t want to accept their diagnosis. But this denial—or “deniabetes”—can be life-threatening. The mind is powerful. If we don’t like what’s happening in our lives, we can try to forget about it. Sometimes it works—for a while.Denying type 2 diabetes can be easy at first because there might be no outward signs that something is wrong. Almost any health care provider can tell stories of patients who come in for help years after a type 2 diagnosis only because they are having complications."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Blood Sugar Control: Know Your Blood Glucose-Monitoring Meds",
    "tipDescription": "It’s important to understand how each of the blood glucose-lowering medications you take works — and to take them according to your health care provider’s instructions. Stay informed, and ask your health care providers if there’s something you don’t understand. Know the possible side effects (positive and negative), how to deal with them, and when to alert your provider if you have problems."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Limit extra calories and carbohydrate with alcohol.",
    "tipDescription": "Avoid high-calorie and high-carbohydrate mixed drinks, such as margaritas and daiquiris. Keep the calorie and carb count of your alcohol drinks low by drinking light beer, a glass of wine, or a shot of distilled spirits on the rocks or mixed with a noncaloric beverage like water, club soda, diet tonic water, or diet soda."
}, {
    "category": "Diabetes",
    "subCategory": "Hypoglycemia",
    "tip": "Hypoglycemia may strike later.",
    "tipDescription": "The potential for late-onset hypoglycemia in Patient With Diabetes who take insulin happens a number of hours after consuming alcohol. Therefore, regular blood sugar checks are important, including overnight if necessary."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic retinopathy",
    "tip": "Don’t Skip your eye examination",
    "tipDescription": "Keep up your blood sugar control! But don't skip your yearly eye exam. Keeping your blood sugar levels under control can help reduce the likelihood of diabetes-related eye complications. But good blood sugar control doesn't eliminate your risk of developing problems with your eyes and vision.Diabetic retinopathy and diabetic macular edema often have no symptoms in their early stages. Annual eye exams increase the chances that your doctor will detect these conditions as soon as possible and treat them when necessary. Early intervention can prevent vision loss for many people."
}, {
    "category": "Diabetes",
    "subCategory": "Diabetic retinopathy",
    "tip": "Pay attention to vision changes.",
    "tipDescription": "Contact your eye doctor right away if you experience sudden vision changes or your vision becomes blurry, spotty or hazy."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Take Control Now",
    "tipDescription": "Healthy blood glucose (or blood sugar) control includes steps like following a balanced meal plan, engaging in an active lifestyle with sufficient physical activity, and taking blood glucose-lowering medications as you need them over the years. You might also need other medications to control your blood pressure and lipids (cholesterol). Consider some additional lifestyle tips that can also help control blood sugar and improve overall health. Find out what works and which ones you should avoid."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Keep Eating Habits Consistent",
    "tipDescription": "Skipping meals, especially breakfast, could push your blood sugar higher, and depending which blood glucose-lowering medications you take, could cause hypoglycemia (low blood sugar). When you don't eat for several hours because of sleep or other reasons, your body fuels itself on glucose released from the liver. For many people with type 2 diabetes (PWDs type 2), the liver doesn't properly sense that the blood has ample glucose already, so it continues to pour out more. Eating something with a little carbohydrate signals the liver to stop sending glucose into the bloodstream and can tamp down high numbers."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Dont Skip or delay Meals",
    "tipDescription": "Skipping meals also may lead to overeating, which can cause weight gain. And if you take certain glucose-lowering medications, such as sulfonylureas (generic name glimiperide, glipizide, or glyburide), that cause your pancreas to release more insulin into your blood stream, or if you take insulin with injections or a pump, you risk having your blood sugar drop too low if you skip or delay meals."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Eat Diabetes Bars and Shakes as Meal Replacements if you are too busy or if you are on the go",
    "tipDescription": "Bars or shakes made specifically for people with diabetes can help you control blood sugar levels when you're on the go, Toss them in your purse, suitcase, or desk drawer so you'll always have a suitable choice when you're stuck in traffic or can't break for lunch."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Talk to Your Health Care Provider Before Adjusting Medication",
    "tipDescription": "If your blood glucose consistently runs high, work with your health care provider to increase one or more of your glucose-lowering medications and/or add a new one. Don’t adjust your medications without first discussing it with your diabetes health care provider."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Set Aside Time for Quality Sleep",
    "tipDescription": "Too little sleep or poor sleep can disrupt your hormones, leading to increased appetite, higher blood sugar, and a thicker waistline. In fact, researchers from the Netherlands found that a single night of sleep deprivation can decrease insulin sensitivity by almost 25 percent."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Exercise to Boost Energy & Improve Sleep",
    "tipDescription": "It becomes a vicious cycle, because inactivity can reduce the quality of sleep, and poor sleep leaves you too lethargic to exercise. Sneak in at least a few minutes of daily exercise by walking on your lunch break and taking the stairs instead of the elevator,"
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Think of Exercise as Medicine",
    "tipDescription": "You need to do it regularly. Try to get 150 minutes a week. You can break that up into smaller chunks, like half an hour a day, 5 days a week. You don’t have to become a gym rat, either. It’s OK to walk, run, or bike. Talk to your doctor about an exercise plan before you start."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Know Your Numbers",
    "tipDescription": "Blood-sugar readings aren’t the only numbers you need to keep track of. Your doctor will also watch your blood pressure and cholesterol. These numbers will tell you if your health is on track: A1c, which measures blood sugar levels over time. This should be tested at least twice a year. Cholesterol levels, which should be tested at least every 5 years and more often if you have trouble with it. Blood pressure and weight, which will get checked every time you visit the doctor."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Build a Dream Team",
    "tipDescription": "Diabetes is a whole-body, whole-person disease and is best treated by a team of experts, headed by you, of course. This can include your doctor along with a nutritionist, dentist, pharmacist, nurse, and others."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "It's not just about blood sugar",
    "tipDescription": "Heart disease and stroke are the big killers for people with diabetes. Here's how to lower your chances: If you use tobacco, quit. Keep your blood pressure at or below 129/79. Consider taking a statin drug. Ask your doctor about ACE-inhibitors. Talk to your doctor about whether a daily aspirin is right for you. Make healthy lifestyle choices."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Stress makes everything worse",
    "tipDescription": "Stress can get in the way of taking care of yourself and managing your diabetes. Find out what's causing stress in your life. Learn ways to reduce or cope with daily stressors. Schedule something fun for yourself on a regular basis."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Exercise makes everything better",
    "tipDescription": "exercise is good for everybody. It gives you more energy, reduces stress, helps you relax, and makes it easier to fall asleep. Work towards doing at least 30 minutes every day. Make it fun, not a chore. Try a pedometer."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Don't diet — Make healthier food choices",
    "tipDescription": "Find a healthier way of eating that you can stick with for life. Instead of thinking about food as either \"good\" or \"bad,\" think about which foods support good health. Eat a variety of foods to make sure you're getting the vitamins and minerals your body needs. Talk to your dietitian to find a meal plan that works for you."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Be smart and use your \"flashlight\"",
    "tipDescription": "Your blood sugar monitor helps you see in the dark, like a flashlight. Test your blood sugar to get information you can use, for example: When you first wake up in the morning. Before or after meals. Before, during, and after exercising. Whenever you feel \"odd.\""
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Get regular checkups",
    "tipDescription": "Keeping regular appointments with your doctor and getting tests and screenings on time, helps you be an active partner with your health care team. Know what questions to ask. Write them down ahead of time. Let your doctor know at the beginning of each visit what specific things you want to talk about."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Make sure you're not depressed",
    "tipDescription": "It's often hard for people to know when they're depressed. Here are some common signs: Feeling down, blue, hopeless, sad, or irritable Not enjoying activities that used to be enjoyable Feeling as though you're letting other people down Trouble concentrating Tired all the time, no energy No interest in food Overeating Trouble falling asleep Feeling like life isn't worth living"
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Write down your care plan",
    "tipDescription": "Work with your doctor to design a diabetes care plan that's right for you. Be sure to include: What drugs you're taking and why you're taking them. Your daily targets for the numbers you can control. The goals you want to achieve. Who you should call and when."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Join a group",
    "tipDescription": "Groups work magic! A problem shared is a problem solved. You'll be amazed at how much you have to offer others. Check out the Living Well With Diabetes workshops."
}, {
    "category": "Diabetes",
    "subCategory": "lifestyle",
    "tip": "Eat smaller meals throughout the day",
    "tipDescription": "If you have diabetes, you should eat smaller meals throughout the day to avoid unnecessary spikes in your blood glucose level. However, your body requires more sugars and carbohydrates during exercise, so eat before and after a workout."
}, {
    "category": "Diabetes",
    "subCategory": "Insulin injection",
    "tip": "Do not inject close to the belly button.",
    "tipDescription": "The tissue there is tougher, so the insulin absorption will not be as consistent."
}, {
    "category": "Diabetes",
    "subCategory": "Insulin injection",
    "tip": "do not inject close to moles or scars",
    "tipDescription": "The tissue there is tougher, so the insulin absorption will not be as consistent."
}, {
    "category": "Diabetes",
    "subCategory": "Insulin injection",
    "tip": "If you inject in the upper arm, use only the outer back area (where the most fat is)",
    "tipDescription": "It is hard to pinch the upper arm when you are injecting yourself. Try pressing your upper arm against a wall or door."
}, {
    "category": "Diabetes",
    "subCategory": "Insulin injection",
    "tip": "If you inject in the thigh, stay away from the inner thighs.",
    "tipDescription": "If your thighs rub together when you walk, if might make the injection site sore."
}, {
    "category": "Diabetes",
    "subCategory": "Insulin injection",
    "tip": "Do not inject in an area that will be exercised soon",
    "tipDescription": "Exercising increases blood flow, which causes long-acting insulin to be absorbed at a rate that’s faster than you need."
}, {
    "category": "Diabetes",
    "subCategory": "Insulin injection",
    "tip": "Do not become a creature of habit!",
    "tipDescription": "It might seem easier to find a spot that does not hurt and inject there all of the time. However, the result could be unpleasant swelling and lumps."
}, {
    "category": "Diabetes",
    "subCategory": "Insulin injection",
    "tip": "Choose wisely for reducing injection pain",
    "tipDescription": "You can reduce injection pain by choosing a needle length and gauge that are right for you."
}, {
    "category": "Diabetes",
    "subCategory": "Insulin injection",
    "tip": "Move to a new injection site every week or two.",
    "tipDescription": "Inject in the same area of the body, making sure to move around within that area with each injection, for one or two weeks. Then move to another area of your body and repeat the process. Use the same area for at least a week to avoid extreme blood sugar variations."
}, {
    "category": "Diabetes",
    "subCategory": "Insulin injection",
    "tip": "Take insulin at room temperature",
    "tipDescription": "If it was refrigerated, allow your insulin to come to room temperature."
}, {
    "category": "Diabetes",
    "subCategory": "Insulin injection",
    "tip": "mix the contents in insulin vial by rolling the vial between your hands",
    "tipDescription": "If the insulin is cloudy, mix the contents by rolling the vial between your hands for a few seconds. Make sure not to shake the vial, and don’t use insulin that is grainy, thickened, or discolored."
}, {
    "category": "Diabetes",
    "subCategory": "Diet",
    "tip": "Avoid late night snacks to prevent high sugars in morning",
    "tipDescription": "Late-night snacks add extra calories, which can lead to weight gain. And if you snack after your evening meal — especially if the foods contain carbohydrates — you may wake up the next morning with a high blood sugar level."
}, {
    "category": "Diabetes",
    "subCategory": "Diet",
    "tip": "Limit takeaway and processed foods.",
    "tipDescription": "Convenience meals’ are usually high in salt, fat and kilojoules. It’s best to cook for yourself using fresh ingredients whenever possible."
}, {
    "category": "Diabetes",
    "subCategory": "Complications",
    "tip": "Control your blood pressure.",
    "tipDescription": "Most people can do this with regular exercise, a balanced diet and by keeping a healthy weight. In some cases, you might need medication prescribed by your doctor."
}, {
    "category": "Diabetes",
    "subCategory": "Complications",
    "tip": "Reduce your risk of cardiovascular disease.",
    "tipDescription": "Diabetes and cardiovascular disease have many risk factors in common, including obesity and physical inactivity."
}, {
    "category": "Diabetes",
    "subCategory": "Diet",
    "tip": "Get Moving—and Turn Off the Television",
    "tipDescription": "Inactivity promotes type 2 diabetes. Working your muscles more often and making them work harder improves their ability to use insulin and absorb glucose. This puts less stress on your insulin-making cells."
}, {
    "category": "Diabetes",
    "subCategory": "Diet",
    "tip": "Skip the sugary drinks, and choose water, coffee, or tea instead.",
    "tipDescription": "Like refined grains, sugary beverages have a high glycemic load, and drinking more of this sugary stuff is associated with increased risk of diabetes."
}, {
    "category": "Diabetes",
    "subCategory": "Diet",
    "tip": "Choose good fats instead of bad fats.",
    "tipDescription": "The types of fats in your diet can also affect the development of diabetes. Good fats, such as the polyunsaturated fats found in liquid vegetable oils, nuts, and seeds can help ward off type 2 diabetes. Trans fats do just the opposite."
}];


tipsSolomon.forEach(function(tip){
    tip.suitableForDisease = tip.category;
    tipModels.push(tip);
});


module.exports = function() {
    return tipModels;
};