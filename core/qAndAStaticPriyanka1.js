var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasPriyanka = {
  "Am breastfeeding at the moment but the quantity of my breast milk isnt sufficient. Are there any natural ways to overcome this situation?" : {
    "question" : "Am breastfeeding at the moment but the quantity of my breast milk isnt sufficient. Are there any natural ways to overcome this situation?",
    "answer" : "If your breast milk is scanty, try this mixture of almond milk and herbs, soak ten almonds in water overnight. Then peel them, put them in a blender, add a cup of hot milk and puree them. Pour the almond milk into a glass and stir in a pinch each of ginger powder, cardamom and saffron and a teaspoon of date sugar (available in most health food stores) or honey. Drink this twice a day, morning and evening, to help strengthen the quality and quantity of your breast milk. Consult with an expert doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Am breastfeeding at the moment but the quantity of my breast milk is more than sufficient. What should be done regarding this?" : {
    "question" : "Am breastfeeding at the moment but the quantity of my breast milk is more than sufficient. What should be done regarding this?",
    "answer" : "If milk secretion is more than what is required by the baby, extra milk should be squeezed and discarded; otherwise it can cause congestion and result in the formation of a breast abscess.Consult with an expert doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What is the best diet recommended for nursing mothers, as am planning on feeding my new one?" : {
    "question" : "What is the best diet recommended for nursing mothers, as am planning on feeding my new one?",
    "answer" : "Regular intake of canned foods, hot, pungent, and spicy food recipes should be avoided, as these decrease milk secretion. The best diet for a nursing mother is a simple, bland vegetarian menu. Consult with an expert doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "In the postpartum scenario what is the role of ghee and oils? Is it ok for the lactating mother to take these?" : {
    "question" : "In the postpartum scenario what is the role of ghee and oils? Is it ok for the lactating mother to take these?",
    "answer" : "Ghee and oils should be taken in recommended amounts to improve digestion, facilitate the evacuation of bowels, nourish the traumatized tissues. Consult with a dietician for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My co-worker had taken a postpartum nature care package sometime ago, am just wondering what all should it entail if I opt for one now?" : {
    "question" : "My co-worker had taken a postpartum nature care package sometime ago, am just wondering what all should it entail if I opt for one now?",
    "answer" : "Typically aims of post natal care include: 1.Optimizing the quality of breast milk 2.Avoiding exertion 3.Taking light and nutritious diet Consult with an expert doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Does postnatal care program offer any quick fix to postnatal weight loss? If yes please advise how?" : {
    "question" : "Does postnatal care program offer any quick fix to postnatal weight loss? If yes please advise how?",
    "answer" : "Your post-natal hormone and mental/emotional balance can certainly affect the speed at which you will be able to lose weight. The two important variables are food choices and movement (exercise.) There is no \"quick fix\" for weight loss. But postnatal care program focusing on diet and exercise will definitely help you to come back in shape. Consult with an expert doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Post delivery I have been suffering from stomach acidity pretty much on regular basis. Kindly advise of best ways to loose the extra weight quickly." : {
    "question" : "Post delivery I have been suffering from stomach acidity pretty much on regular basis. Kindly advise of best ways to loose the extra weight quickly.",
    "answer" : "Stomach acidity is not valid reasons for avoiding making healthier food choices. So, begin to choose less refined carbohydrates, and choose lower glycemic index foods and more healthy green vegetables for every single meal and snack. Reduce your caloric intake and increase your exercise. Find a support group with the same interests. Ensure your thyroid and adrenal functions are adequate. Consult with an expert doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Am 26 years of age and recently delivered a baby, my neck and shoulders have been hurting. Please advise of any yoga asanas that can treat my condition." : {
    "question" : "Am 26 years of age and recently delivered a baby, my neck and shoulders have been hurting. Please advise of any yoga asanas that can treat my condition.",
    "answer" : "While feeding, focus on keeping the shoulders away from the ears and the shoulder blades down the back. For a more active approach, try Gomukhasana Arms: Sit or stand straight. Bring the right arm overhead and turn the palm inward. Bring the left arm out to the side and parallel to the floor and turn the palm outward. Bring palms together behind the back, using a strap if they don’t touch. Hold for five breaths, release, and repeat to the other side. Consult with a yoga expert or doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "After delivering my baby last year, I find it difficult to climb the stairs till date. What can be done to overcome this problem?" : {
    "question" : "After delivering my baby last year, I find it difficult to climb the stairs till date. What can be done to overcome this problem?",
    "answer" : "Try Warrior II, named after the fierce warrior Virabhadra: with legs four feet apart, turn the right foot in and the left foot out 90 degrees. Bring your arms out to the sides, parallel to the floor, as you bend the left knee over the left ankle. Reach out with your arms and hold for five breaths. Repeat on the other side. Consult with a yoga expert for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Natural delivery left my abdominal muscles weakened and stretched. Are there any natural solutions to this situation?" : {
    "question" : "Natural delivery left my abdominal muscles weakened and stretched. Are there any natural solutions to this situation?",
    "answer" : "Start gently and moving slowly. Lye down on your back and try tucking your belly button in toward your spine; exhale and tilt your lower belly potion up, inhale and tilt your pelvis back. Continue to rock your pelvis back and forth for gentle strengthening of the abdomen. Repeat 20 times. Consult with a yoga expert or doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Even 6 months after delivery, I am still suffering from postpartum fatigue. Are there any asanas in yoga that can help me feel rejuvenated?" : {
    "question" : "Even 6 months after delivery, I am still suffering from postpartum fatigue. Are there any asanas in yoga that can help me feel rejuvenated?",
    "answer" : "When you feel exhausted, your breath becomes more shallow. A restorative pose such as Viparita Karani helps open the chest, encourages you to take deeper breaths, and aids relaxation and rejuvenation. Lay with your right hip against the wall and a pillow under both hips. Then slowly swing your legs up onto the wall, bring your arms out to the sides, and breathe deeply. Hold for two minutes. Consult with a yoga expert or doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My mother-in-law has suggested that I should stick to soups post childbirth. Would these be sufficient?" : {
    "question" : "My mother-in-law has suggested that I should stick to soups post childbirth. Would these be sufficient?",
    "answer" : "Hot soups and stews are easy to digest because they have been cooked slowly and both the meat and vegetables are soft and nutrients have been retained. Soups and stews are usually made with a foundation of homemade broths and those are nutritious and healing to anyone, anytime. Food that is hot is easier to digest, because when foods are cold the stomach has to work harder to bring up the “digestive fires”. Consult with your doctor or dietician for further details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I want to get my previous weight at the earliest as it has been few weeks that I delivered. Will any of the diet plans work?" : {
    "question" : "I want to get my previous weight at the earliest as it has been few weeks that I delivered. Will any of the diet plans work?",
    "answer" : "A good diet after baby is a slow-and-steady one (though it won't necessarily get you into your prepregnancy pants overnight). Crash diets (which live up to their name when it comes to how they affect your energy level, as well as your mood) are definitely not the way to go — though you may see results faster, you're not likely to sustain them (or the restrictive eating style they require). Skip any eating plan that leaves out healthy carbs, limits choices to one basic food type (all fruit, all protein, or all liquids, to name a few), or severely curbs your calorie intake. Consult your doctor or dietician for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What food groups are the best to have so that I can loose the weight I gained during pregnancy?" : {
    "question" : "What food groups are the best to have so that I can loose the weight I gained during pregnancy?",
    "answer" : "So how do you give yourself the extreme makeover you're looking for, without the extreme diet after baby? Choose foods that are big in bulk but lower in calories (so they fill you up without filling you out), such as whole-grain breads and cereals, fruits, and raw veggies. Get your protein fix from healthy sources: fish, skinless chicken and turkey breasts, extra-lean beef, and eggs. Count on calcium, too (and what better way than a delicious smoothie) — since recent research links a higher calcium intake with better weight control (but choose low-fat or fat-free dairy products). Consult your doctor or dietician for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I have heard that breastfeeding actually helps in losing calories. Is it correct?" : {
    "question" : "I have heard that breastfeeding actually helps in losing calories. Is it correct?",
    "answer" : "If you're nursing, you'll need to work in calories and nutrition to keep up milk production. Since you can’t really diet after baby, how will you lose weight? Breastfeeding moms burn about 500 calories a day more than those who don't (without lifting a finger…or a celery stick). But keep in mind when you poke your head into the pantry that breastfeeding can crank up your appetite big time. Which means that if you're not careful, you can easily out-eat those 500 calories and end up gaining weight instead of losing it. So stay full by drinking nature's finest no-calorie beverage: water. And limit high-fat snacks and sugary sweets that pack on pounds without offering any nutritional return, such as chips, candy, and soda. Consult your doctor or dietician for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I recently had a baby, what are the most recommended snacks for me to balance between being a super mom and getting back in shape?" : {
    "question" : "I recently had a baby, what are the most recommended snacks for me to balance between being a super mom and getting back in shape?",
    "answer" : "Steer clear from snack packs since they are stocked with tons of artificial sweeteners. Instead, either have a tiny portion of what you actually want or pick from one of the following: •Whole-grain crackers with hummus •Nuts (stash some in your purse in case you get a craving on the go) •A cup of whole-grain cereal with low-fat milk. •A hardboiled egg with some carrots •Low-fat cheese with a piece of fruit •Peanut butter on an apple •Plain Greek yogurt — add in a cup of berries to avoid added sugar from the flavored kind. Consult your doctor or dietician for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Now that I have delivered, can I return to the pre-pregnancy diet?" : {
    "question" : "Now that I have delivered, can I return to the pre-pregnancy diet?",
    "answer" : "Being a new mom means you're going to experience serious fatigue until you adjust to your new routine, so you need a diet that can help carry you, not one that will leave you constantly hungry and feeling deprived. Moreover you need nutrition rich diet for breastfeeding too. Consult your doctor or dietician for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Post partum I have hunger pangs every now and then, what are the most recommended safe foods to have calorie-wise?" : {
    "question" : "Post partum I have hunger pangs every now and then, what are the most recommended safe foods to have calorie-wise?",
    "answer" : "When you eat foods rich with nutrients, you'll notice that your calories go a long way. You'll feel fuller longer• Fruits and vegetables •Whole grains •Lean protein, like fish, beef, and soy foods •Dairy — choose skim or low-fat milk •Leafy greens •Iron, especially if you suffer from postpartum symptoms. You can find this in things like fortified cereals, prune juice, and lean meats. •Vitamin C, which can help with wound healing for mothers who delivered via C-section. Find this in oranges, tomatoes, and natural fruit juices. Consult your doctor or dietician for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Post delivery my dietician has suggested me to take more Vitamin E, is it correct?" : {
    "question" : "Post delivery my dietician has suggested me to take more Vitamin E, is it correct?",
    "answer" : "It helps you maintain a healthy circulation. Aim for 19 milligrams a day; it’s found in nuts, seeds, and eggs. Consult your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Post delivery my dietician has suggested me to take more Potassium, how does it help?" : {
    "question" : "Post delivery my dietician has suggested me to take more Potassium, how does it help?",
    "answer" : "Many multivitamins don't contain this blood pressure–lowering nutrient. Aim for 3,500 milligrams; add bananas, lima beans, and squash to your diet. Consult your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "How much calcium is needed for breast feeding women and how can it be planned from natural foods?" : {
    "question" : "How much calcium is needed for breast feeding women and how can it be planned from natural foods?",
    "answer" : "Though there is some debate about how much calcium breastfeeding women should consume, current calcium recommendations for non-pregnant women are also sufficient for pregnant and breastfeeding women. For strong bones and teeth, make sure to eat plenty of low-fat dairy products and other calcium-rich foods such as figs, beans and peas, or leafy greens. A recent study found that calcium supplements don't help to prevent bone loss in nursing, so try to eat your way to a recommended 1,000 mg of calcium a day. Consult your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My husband believes my postpartum fatigue is related to my being not sufficiently hydrated, can this be true?" : {
    "question" : "My husband believes my postpartum fatigue is related to my being not sufficiently hydrated, can this be true?",
    "answer" : "Yes, Keep bottles of water in every room of the house, so no matter where you and baby are, you can grab a quick drink. To keep yourself hydrated (dehydration does lead to postpartum fatigue), make sure you drink about 3lts everyday. Consult your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Am not able to eat properly after delivery, any piece of practical advice to balance feeding the baby and myself?" : {
    "question" : "Am not able to eat properly after delivery, any piece of practical advice to balance feeding the baby and myself?",
    "answer" : "Your little one is eating every two to four hours now — and so should you. Sneak in small bites of fruit, yogurt, low-fat cheese, or whole-grain bread or muffins whenever you prepare to feed your baby — or, if you've mastered the one-handed feed already, while you're feeding your baby. Stash healthy snacks within arm's reach (almonds and raisins next to your favorite nursing chair, a banana and a bag of crackers in your stroller bag) so your diet after delivery keeps you satisfied. Consult your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Caffeine is such a pick me up, especially with all the postpartum fatigue. How many cups are ok in a day?" : {
    "question" : "Caffeine is such a pick me up, especially with all the postpartum fatigue. How many cups are ok in a day?",
    "answer" : "So sweet but so cruel, caffeine and sugar pick you up just to drop you — hard — when you need the boost to get you over postpartum fatigue the most. To avoid that crash-and-burn effect, limit both. Start your day with a cup or two of coffee — but just say no to the third, fourth, and fifth. Reach for a sweet that won't let you down 20 minutes later: a whole-grain muffin, munched on with string cheese for extra staying power, are better foods after pregnancy. Consult your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Some of the new mums eat multiple times in a day, is it a good idea?" : {
    "question" : "Some of the new mums eat multiple times in a day, is it a good idea?",
    "answer" : "Yes! Take a hint from a kid — who's wise beyond his or her years when it comes to eating. Rather than taking a three-meal-a-day approach (or worse still, skipping two out of three), graze the day away baby-style. Eating five or six mini-meals a day will keep your blood sugar and energy levels on an even keel. Plus, since lighter meals are easier to process, they don't divert to your digestive system energy you desperately need to fight afternoon postpartum fatigue. Consult your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I am a new mum and plan on breastfeeding for as long as I can. What are the foods that are best avoided?" : {
    "question" : "I am a new mum and plan on breastfeeding for as long as I can. What are the foods that are best avoided?",
    "answer" : "When you're breastfeeding, there's a lot more that’s on the menu than off — with a few caveats: excessive caffeine, high-mercury fish, high-fat dairy and processed foods. Consult your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My mother has suggested that I stick to organic foods only till the time I am breastfeeding. How practical would that be?" : {
    "question" : "My mother has suggested that I stick to organic foods only till the time I am breastfeeding. How practical would that be?",
    "answer" : "Choose organic fruits, veggies, dairy, poultry, meat, eggs and grain whenever you have the choice and can afford the usually steeper price and you’ll minimize the chemicals your baby is exposed to through your breast milk. But don’t drive yourself crazy — a small amount of pesticides and other chemicals will end up in your diet despite your best efforts, and that’s OK. Consult your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Though some new mums swear by herbal teas, am not sure how safe they are till am breastfeeding. Any suggestions?" : {
    "question" : "Though some new mums swear by herbal teas, am not sure how safe they are till am breastfeeding. Any suggestions?",
    "answer" : "To stay safe, ask your doctor before taking any herbal remedy, and think twice before drinking herbal tea or breastfeeding brews. For now, stick to reliable brands in varieties that are considered safe during lactation. Read labels carefully to make sure other herbs haven't been added to the brew.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My sister in law has been detected for postpartum anemia. What could have been the possible causes, please advise as I would to prevent them in my own case." : {
    "question" : "My sister in law has been detected for postpartum anemia. What could have been the possible causes, please advise as I would to prevent them in my own case.",
    "answer" : "Postpartum anemia refers to the chronic iron deficiency in women after delivery. Some possible causes of postpartum anemia are: prepartum anemia, acute bleeding during delivery or multiple births. Talk to your doctor during your pregnancy to know more about preventing it.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I feel very weak post delivery, could I be suffering from postpartum anemia?" : {
    "question" : "I feel very weak post delivery, could I be suffering from postpartum anemia?",
    "answer" : "Postpartum anemia symptoms you should watch out for: 1.If tiredness is disabling you. 2.If fatigue lasts for more than six weeks post delivery. 3.Your irritability is worrying your family members. 4.If you cannot perform your daily chores. Talk to your doctor if you feel any of these is true.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner seems to be ignoring her postpartum anemia. What are the possible side effects that we must be aware of." : {
    "question" : "My partner seems to be ignoring her postpartum anemia. What are the possible side effects that we must be aware of.",
    "answer" : "Anemia postpartum can lead to the following health issues: 1.It increases the risk of postnatal depression. 2.It makes you prone to frequent urinary tract infections. 3.You may suffer from excessive fatigue and exhaustion. 4.Insufficient milk syndrome during lactation. 5.It may take a toll on the quality of your breast milk. It is best to talk to her doctor regarding the same.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Since my sister has been detected for postpartum anemia, we are concerned over how the baby will grow. How much should we be concerned?" : {
    "question" : "Since my sister has been detected for postpartum anemia, we are concerned over how the baby will grow. How much should we be concerned?",
    "answer" : "Severe iron deficiency in mothers before and after delivery can be detrimental for babies in the following ways: •It can lead to premature birth and also cause low birthweight of babies. •It can lead to a transferred incidence of anemia in babies. •It can lead to a reduction in the quantity of iron content in the breastmilk. •It can increase the risk of neurocognitive dysfunction in infants. Hence, it can also lead to impair the development of learning, memory, and cognitive skills. It is best to talk to her doctor regarding the same.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "One of my closest friends has postpartum anemia, what are the ways to treat it?" : {
    "question" : "One of my closest friends has postpartum anemia, what are the ways to treat it?",
    "answer" : "Here are a few measures you can take to keep postpartum anemia at bay. 1.Make sure you consume an iron-rich diet. Also, add rich sources of Vitamin C, as the essential nutrient boosts the iron absorption in the body. 2.You can also avoid eating calcium-rich food as it inhibits the absorption of iron. 3.Consult your doctor and start taking iron supplements. 4.Your doctor may recommend the administration of intravenous iron. 5.In an extreme scenario, your doctor may advise blood transfusion. The form of treatment will differ from patient to patient depending on their iron levels and medical condition. It is best to talk to her doctor regarding the same.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "While discussing methods for delaying conception after childbirth my friend advised regarding the lactational amenorrhea method. What exactly is it?" : {
    "question" : "While discussing methods for delaying conception after childbirth my friend advised regarding the lactational amenorrhea method. What exactly is it?",
    "answer" : "The lactational amenorrhea method (LAM) is a natural birth control technique based on the fact that lactation (breastmilk production) causes amenorrhea (lack of menstruation). Speak to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Can lactational amenorrhea method (LAM) be used for birth control when I am pumping or feeding using bottle?" : {
    "question" : "Can lactational amenorrhea method (LAM) be used for birth control when I am pumping or feeding using bottle?",
    "answer" : "Your baby's suckling plays an important role in suppressing ovulation, and expressing your milk is not as effective. The more frequently you nurse, and the longer each nursing session, the better. Consult your doctor for more effective birth control methods.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I just had a C section and am wondering if the belly belt would actually be useful for me?" : {
    "question" : "I just had a C section and am wondering if the belly belt would actually be useful for me?",
    "answer" : "The belly belt or wraps are known to help women recovering from a vaginal delivery or a C-section with their posture, abdominal support, and self-confidence. The gentle compression on the abs may help the uterus return to its normal size quicker, so new moms may get rid of their still-pregnant-looking-belly quicker. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Am still trying to overcome postpartum constipation, weeks after delivering my little one. Any tips?" : {
    "question" : "Am still trying to overcome postpartum constipation, weeks after delivering my little one. Any tips?",
    "answer" : "While it is best to consult with your doctor and dietician, here are a few tips: opt for 1. high-fiber grains 2. dried fruits 3.fresh fruits and vegetables 4.beans and legumes 5. fluids 6. fibre. It is best to avoid refined foods.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife has been constipated ever since the little one arrived and its been a while. What can be done to prevent it in the long term?" : {
    "question" : "My wife has been constipated ever since the little one arrived and its been a while. What can be done to prevent it in the long term?",
    "answer" : "•Be aware of and act on your body's urges. Don't be too busy to miss the cues. •Don't take medicines with constipating side-effects. This includes some painkillers, so ask your midwife’s, or GP's advice. •Eat regular meals with lots of fruit and vegetables, and drink plenty of fluids. •Make sure you exercise every day. A brisk walk with your baby in her pram will do. •Speak to your GP if you suffer from piles or anal fissures. These can make constipation worse. Consult her doctor for more details",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Being first time parents, how much should we leverage the Internet regarding our post natal care queries?" : {
    "question" : "Being first time parents, how much should we leverage the Internet regarding our post natal care queries?",
    "answer" : "Online forums provide a sanity check for new parents, but beware of information overload. Parents need to keep in mind that not everything they read is reliable or a good fit for their family. Talk to your doctor for doubts",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "All my friends have been repeatedly requesting me to sleep when the baby sleeps. Why is it being focussed upon so much, please advise as am due coming month." : {
    "question" : "All my friends have been repeatedly requesting me to sleep when the baby sleeps. Why is it being focussed upon so much, please advise as am due coming month.",
    "answer" : "Sleeping when the baby sleeps is time-tested advice, and it works. Sleep is a medical necessity even for new moms. Sleep is also an important way to guard against postpartum depression. Talk to your psychlogist for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What is a 'Baby Burrito' and why is it so popular with new mums?" : {
    "question" : "What is a 'Baby Burrito' and why is it so popular with new mums?",
    "answer" : "A baby burrito is a special way to wrap a baby in a blanket so he or she feels more secure and may sleep better. You can find instructions for how to do it from your doctor or caregiver.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Is it possible that I exercise along with my baby? That ways I get to spend time with the little one as well as get in shape?" : {
    "question" : "Is it possible that I exercise along with my baby? That ways I get to spend time with the little one as well as get in shape?",
    "answer" : "It seems counterintuitive, but when you're dead tired, exercise can boost your energy. Try Mommy and Me swim or yoga classes. Get outside into the sunshine -- a guaranteed mood enhancer. Take your baby for a walk or a run in the jog stroller or on a hike with a front pack. Just always protect your baby from the sun’s harmful rays.Talk to your doctor for more ways to include exercising with your baby.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "How do people manage to include workouts in their routine with baby along side?" : {
    "question" : "How do people manage to include workouts in their routine with baby along side?",
    "answer" : "Exercise is cumulative. So 10 minutes in the morning, 10 minutes in the afternoon, and 10 minutes at night add up and boost metabolism. You could try strapping baby into a front pack and jumping on the stationary bike or treadmill. The motion often puts baby to sleep which is an added bonus. Talk to your physical trainer regarding more ways.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Since childbirth my wife's hair is falling off like crazy. Will she get them back ever?" : {
    "question" : "Since childbirth my wife's hair is falling off like crazy. Will she get them back ever?",
    "answer" : "During pregnancy, women stop shedding for 40 weeks and get a nice, thick head of hair. But after the baby is born, all that hair that didn’t fall out during pregnancy starts to shed. It takes a few months to notice the hair loss — which can be quite pronounced, especially around the hairline — and it’ll start to grow back at around 7 or 8 months postpartum. Though some women lose more hair than others, almost all will grow their hair back. Talk to her doctor to clarify your doubts.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner has developed hemorrhoids after childbirth. This has made her cranky. How can she be helped?" : {
    "question" : "My partner has developed hemorrhoids after childbirth. This has made her cranky. How can she be helped?",
    "answer" : "Hemorrhoids are varicose veins of the anus. They can start to swell in pregnancy and may \"pop\" out during labor. They will eventually \"pop\" back in, but in the meantime, bathroom visits can be a tad stressful. There's often a little blood during a bowel movement — it's typically not dangerous, but it can hurt. Try using witch hazel compresses and talk to your doctor if you're concerned; there are treatments for severe cases.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My sister, a new mum, seems to be sweating profusely, actually day and night. Will she dehydrate? How can we help her?" : {
    "question" : "My sister, a new mum, seems to be sweating profusely, actually day and night. Will she dehydrate? How can we help her?",
    "answer" : "Water builds up in your body during pregnancy and needs to be flushed out. Sometimes women wake up with soaking sheets on about day three postpartum. There’s absolutely nothing wrong, but it can be rather alarming, and the amount of sweat is even higher for women who took medications during labor — the IV adds a a lot more fluid to your system, and pitocin (the drug used to induce labor) is an antidiuretic. And if you had pregnancy edema on top of having medication during labor, there can be a whole lot of fluid to flush out. Usually the sweats take place over a day or more and then stop. Drinking lots of water can actually help flush out what’s there. Talk to her doctor to know the best for her situation.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I have heard that breastfeeding can be painful initially, please advise of few practical tips to get past it." : {
    "question" : "I have heard that breastfeeding can be painful initially, please advise of few practical tips to get past it.",
    "answer" : "Even when you're doing it perfectly \"right\" and just adjusting like every other new mom to this new bodily function, there can be some pain. When the milk comes in the first week, breasts can become engorged and quite sore. To help with the pain, use frozen cabbage leaves, warm water from the shower and ibuprofen. Feeding frequently will also help. Make sure that the baby doesn’t suck on the actual nipple (ouch!) but on the areola — the dark part around the nipple. It's best to take a breastfeeding class and meet with lactation consultants after birth as soon as possible. Feel free to talk to your doctor for more help.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Me and my wife actually waited for our new born for years! Now that he is here my wife doesn’t appear that excited. Is that alright?" : {
    "question" : "Me and my wife actually waited for our new born for years! Now that he is here my wife doesn’t appear that excited. Is that alright?",
    "answer" : "The way post-birth emotions are discussed, you’d think your two options are complete bliss or catatonic depression. Though both of those emotional states are real for many women, there are many, many more. All women experience a wide variety of emotional states: euphoric, relieved, anxious, weepy, spaced-out, shocked, lonely, sad, worried, proud, confident and/or spent. All of these feelings are absolutely normal and all can happen in the first months (or days) postpartum. Talk to her doctor regarding managing postpartum emotions.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Is it ok for my daughter in law to exercise after childbirth. What precautions should be taken?" : {
    "question" : "Is it ok for my daughter in law to exercise after childbirth. What precautions should be taken?",
    "answer" : "Regular exercise has numerous health benefits, all of which apply equally to the new mother as at any other stage of life. These benefits include assistance with weight loss, increased aerobic fitness, social interaction and psychological wellbeing. Exercise after giving birth can also hasten recovery, and assist with muscle strength and toning. Always consult with a doctor or midwife before starting any postnatal exercise program. Whether or not she is ready to exercise depends on individual factors. For instance, she may be advised to wait until six-week postnatal check-up. In other cases, especially if she were exercising regularly throughout her pregnancy, she may be able to return to exercise sooner than that – perhaps within the first week or two.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My husband has been pushing me to exercise shortly after little one arrived. What are the benefits of postnatal exercises?" : {
    "question" : "My husband has been pushing me to exercise shortly after little one arrived. What are the benefits of postnatal exercises?",
    "answer" : "Exercising after you have your baby can improve your physical and mental wellbeing. It can: •Help restore muscle strength and firm up your body •Make you less tired because it raises your energy level and improves your sense of wellbeing •Promote weight loss •Improve your cardiovascular fitness and restore muscle strength •Condition your abdominal muscles •Improve your mood, relieve stress and help prevent postpartum depression. Talk to your doctor before you getting exercising though.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner has never been into exercising but after childbirth I am enthusiastic about the same, how can we know when to start postnatal exercises?" : {
    "question" : "My partner has never been into exercising but after childbirth I am enthusiastic about the same, how can we know when to start postnatal exercises?",
    "answer" : "Gentle exercise (such as walking) can generally be started as soon as comfortable after giving birth. Start when you feel up to it. Some women will feel able to start exercising early. Talk with your doctor about when is a good time for you to restart an exercise program. Six weeks after giving birth, most of the changes that occur during pregnancy will have returned to normal. If you had a caesarean birth, a difficult birth, or complications, it may take a little longer to feel ready to start exercising. If you did not exercise during pregnancy, start with easy exercises and slowly build up to harder ones. Keep in mind your lower back and core abdominal muscles are weaker than they used to be. Your ligaments and joints are also more supple and pliable, so it is easier to injure yourself by stretching or twisting too much. Avoid any high-impact exercises or sports that require rapid direction changes.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Can the intensity of my exercises and breastfeeding be co-related? If yes, how?" : {
    "question" : "Can the intensity of my exercises and breastfeeding be co-related? If yes, how?",
    "answer" : "Studies have shown that vigorous or regular exercise does not have adverse effects on a mother’s ability to successfully breastfeed as long as fluid and caloric intake are maintained. Some research, however, suggests that high-intensity physical activity can cause lactic acid to accumulate in breast milk and produce a sour taste a baby might not like. If you're breastfeeding, you can prevent this potential problem by sticking to low- to moderate-intensity physical activity and drinking plenty of fluids during and after your workout.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I was practicing pelvic floor exercises before dleivery, how soon can I resume them?" : {
    "question" : "I was practicing pelvic floor exercises before dleivery, how soon can I resume them?",
    "answer" : "The pelvic floor may be adversely affected by pregnancy and childbirth. Most women are taught pelvic floor exercises during pregnancy and these are important to learn correctly and can be resumed immediately after giving birth. Consult your doctor before resuming.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What are the general exercise safety suggestions for new mums?" : {
    "question" : "What are the general exercise safety suggestions for new mums?",
    "answer" : "Be guided by your doctor or midwife, but general suggestions include: •Wear an appropriate bra that offers good support. Don’t rely on your pre-pregnancy sports bra because your back and cup size are likely to have changed. Get measured for a new one. •Your exercises should not hurt. If you experience pain or any other unexplained symptoms stop the exercise and consult your doctor if necessary.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What are the different types of postnatal exercises recommended for new mums?" : {
    "question" : "What are the different types of postnatal exercises recommended for new mums?",
    "answer" : "Recommended postnatal exercise includes: •Brisk walking •Swimming •Aqua aerobics •Yoga •Pilates •Low impact aerobic workouts •Light weight training •Cycling. See your doctor or midwife for further recommendations and cautions.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My daughter is eagerly looking forward to her exercise routine, since she delivered just weeks ago, what are the key points to remember?" : {
    "question" : "My daughter is eagerly looking forward to her exercise routine, since she delivered just weeks ago, what are the key points to remember?",
    "answer" : "•Always consult with a doctor or midwife before starting any postnatal exercise program. •She shouldn’t be too hard on herself if the exercise plans go awry – she will get more time to herself as the baby settles into a predictable routine.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What are the best ways for me to support my wife right after childbirth? Is it ok for me to empathise?" : {
    "question" : "What are the best ways for me to support my wife right after childbirth? Is it ok for me to empathise?",
    "answer" : "You can’t walk a mile in her swollen feet, but you can show her that you really, really want to by doing a few things every pregnant woman wants. In addition to those flowers and beauty compliments, these things include: •being as excited as she is •withholding judgment •encouraging her to sit down or take a nap (and not to feel selfish about it) •accompanying her to the OB-GYN •giving her a good night’s rest or some alone time Also, straight up ask what she needs, even if you think you know. Especially if you think you know. Talk to her doctor to know more about her needs at this stage.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Is planned home birth possible in Indian cities? Please advise as am in my 3rd trimester already" : {
    "question" : "Is planned home birth possible in Indian cities? Please advise as am in my 3rd trimester already",
    "answer" : "A small number of doctors and midwives attend home births. For home births: •Pregnancy care is provided in your home, or a location chosen by you and your midwife. •During labour and birth your contracted midwife cares for you in your home. •You may choose to have a second midwife or an obstetrician or doctor attend the birth. •Your contracted midwife provides postnatal care in your home. •If you need to be transferred to hospital during the birth, your doctor or midwife can come with you, but the hospital staff will make the decisions about your care.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What exactly does post natal care mean in Indian hospitals?" : {
    "question" : "What exactly does post natal care mean in Indian hospitals?",
    "answer" : "Post natal care is the care received after the birth of your baby. In most hospitals you will be transferred from the birth suite to the postnatal ward an hour or two after your baby is born. Midwives will provide the majority of your postnatal care and a doctor will check on your progress. Midwives will monitor your wellbeing and that of your baby; offer support for breastfeeding and looking after your new baby; encourage you to rest; and discuss with you what is normal and what you can expect as a new mother. Talk to your doctor regarding more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "How exactly do midwives work? Can I trust one completely with my fist childbirth?" : {
    "question" : "How exactly do midwives work? Can I trust one completely with my fist childbirth?",
    "answer" : "Midwives have an important task in health counselling and education, not only for women, but also for families and the community. They must complete specific education to qualify and register as a midwife. Midwives can be male or female. A midwife will consult with you to: •Supervise, care for and advise you during your pregnancy •Support you during your baby's birth •Care for you and your baby after the birth •Detect if anything about you or your baby changes from what is normal •Obtain specialist assistance when needed •If necessary, carry out some emergency measures in the absence of a specialist.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Who are Obstetricians? Can I choose one for my very first delivery?" : {
    "question" : "Who are Obstetricians? Can I choose one for my very first delivery?",
    "answer" : "An obstetrician is a doctor who has undergone extensive specialist training. They are specialists in: •Maternity care (obstetrics) •Women's reproductive health (gynaecology). Obstetricians provide some of the care at a public hospital antenatal clinic. You may see an obstetrician if they are on duty at the time of your appointment, depending on the hospital. You are more likely to see an obstetrician if your pregnancy is, or becomes, complicated.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "How can I be completely sure that the doctor assigned for my delivery is the right choice?" : {
    "question" : "How can I be completely sure that the doctor assigned for my delivery is the right choice?",
    "answer" : "Usually, doctors complete further training if they want to give pregnancy and birth care to women. They may hold a Diploma in Obstetrics and Gynaecology or complete other short courses. You may want to talk to your doctor about: •Their interest and experience in maternity care •Whether they are accredited to assist with your pregnancy care or birth care at the hospital in which you have chosen to give birth.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Am freaking out as my due date is soon approaching. Are there any suggestions for preparing for labour?" : {
    "question" : "Am freaking out as my due date is soon approaching. Are there any suggestions for preparing for labour?",
    "answer" : "Some women may find the following activities helpful in preparing for labour: •Choose your support person – choose someone you are comfortable with and who will help you rather than distract you during the different stages of labour •Yoga •Relaxation exercises •Hypnotherapy (a state of relaxation) •Childbirth education – for you and your support person. Most importantly talk your doctor regarding developing that comfort zone.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What are the practical suggestions for labour once I am in my intended place of birth?" : {
    "question" : "What are the practical suggestions for labour once I am in my intended place of birth?",
    "answer" : "Suggestions include: •Drink plenty of fluid (water, juice or iceblocks). •Suck on sweets to keep up your energy. •Vary your position to keep as comfortable as possible (standing, kneeling, lying down, straddling a chair, or on all fours). •Have a bath or hot shower. •Ask your support person for a back rub or massage. •Try to relax between contractions. •If you need or want it, discuss having some pain relief. •Resist any urge to push until your cervix is fully dilated (your midwife will let you know when this has occurred). •The pressure of your baby’s head helps to widen your cervix, so use gravity and walk around, stand or sit upright. •Don’t feel embarrassed or inhibited by your appearance or behaviour – your midwife has seen it all before. If you want to grunt, yell or swear – go ahead. •Remember that passing a bowel motion during labour is normal and nothing to be concerned about. Having a support person with you can help enormously during labour. Talk to your doctor for more ideas.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My husband is keen at being my support person during childbirth but he isnt sure how to go about it. Any ideas?" : {
    "question" : "My husband is keen at being my support person during childbirth but he isnt sure how to go about it. Any ideas?",
    "answer" : "Your support person can: •Encourage you •Give emotional support •Help to make you comfortable •Help with breathing techniques •Provide ice to suck if you are thirsty •Provide a heat pack for your back or a cool face washer for your forehead •Massage your back •Celebrate the arrival of your baby with you. Consult your doctor for more information and ideas.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My neighbour is concerned about her 'overdue baby'. When is this term used and why is it concerning?" : {
    "question" : "My neighbour is concerned about her 'overdue baby'. When is this term used and why is it concerning?",
    "answer" : "A baby is overdue when it has more than 42 weeks gestation. If she has gone one week past the due date without any signs of impending labour, her doctor will want to closely monitor the condition. Tests may include: •Monitoring the fetal heart rate •Using a cardiotocograph machine •Performing ultrasound scans. The placenta starts to deteriorate after 38 weeks or so, which means an overdue baby may not get enough oxygen. An overdue baby could also grow too large for vaginal delivery. Generally, an overdue baby will be induced once it is two weeks past its expected date.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My sister in law just delivered a premature baby. When is this term used and why is it concerning?" : {
    "question" : "My sister in law just delivered a premature baby. When is this term used and why is it concerning?",
    "answer" : "A baby born prior to week 37 of pregnancy is considered premature. The odds of survival depend on the baby’s degree of prematurity. The closer to term (estimated date of confinement, or EDC) the baby is born, the higher its chances of survival - after 34 weeks gestation with good paediatric care almost all babies will survive. Premature babies are often afflicted by various health problems, caused by immature internal organs. Respiratory difficulties and an increased susceptibility to infection are common. She must take proper consultation and care to handle this situation.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My daughter has delivered before time. We don’t know the reasons triggering premature labour but will she be at any risk?" : {
    "question" : "My daughter has delivered before time. We don’t know the reasons triggering premature labour but will she be at any risk?",
    "answer" : "Often there is no known cause for a premature labour; however, some of the maternal risk factors may include: •Drinking alcohol or smoking during pregnancy •Low body weight prior to pregnancy •Inadequate weight gain during pregnancy •No prenatal care •Emotional stress •Placenta problems such as placenta praevia •Various diseases such as diabetes and congestive heart failure •Infections such as syphilis. Talk to her doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "How reasonable are the baby due date calculators?" : {
    "question" : "How reasonable are the baby due date calculators?",
    "answer" : "Baby due date calculators give an estimated date of when the baby is due. Babies rarely keep to an exact timetable, so your full-term pregnancy can be anywhere between 37 and 42 weeks. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Since labour may be painful, can I try Hydrotherapy?" : {
    "question" : "Since labour may be painful, can I try Hydrotherapy?",
    "answer" : "Water can help you relax and make the contractions seem less painful. Ask if you can have a bath or use a birth pool. The water will be kept at a comfortable temperature but it won’t be above 37.5C, and your temperature will be monitored. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My friend has suggested Entonox to ease labour pains. What does it entail?" : {
    "question" : "My friend has suggested Entonox to ease labour pains. What does it entail?",
    "answer" : "This is a mixture of oxygen and nitrous oxide gas. Gas and air won’t remove all the pain but it can help to reduce it and make it more bearable. Many women like it because it’s easy to use and they control it themselves. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "How does Entonox work? Please advise as am planning on using it to reduce labour pains?" : {
    "question" : "How does Entonox work? Please advise as am planning on using it to reduce labour pains?",
    "answer" : "During Entonox you breathe in the gas and air through a mask or mouthpiece, which you hold yourself. You’ll probably practise using the mask or mouthpiece if you go to an antenatal class. The gas takes about 15 to 20 seconds to work, so you breathe it in just as a contraction begins. It works best if you take slow, deep breaths. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Are there any side effects of Entonox? Just wondering as am planning on using it to reduce labour pains?" : {
    "question" : "Are there any side effects of Entonox? Just wondering as am planning on using it to reduce labour pains?",
    "answer" : "There are no harmful side effects for you or the baby but it can make you feel light-headed. Some women also find that it makes them feel sick, sleepy or unable to concentrate. If this happens, you can stop using it. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Some of my friends took painkilling injections during labour. How do they work?" : {
    "question" : "Some of my friends took painkilling injections during labour. How do they work?",
    "answer" : "As the name suggests pain killing injections offer relief. These are intramuscular injection (into the muscle of your thigh or buttock) of a drug, which can help you to relax, by lessening the pain. You are given an intramuscular injection. It takes about 20 minutes to work and the effects last between two and four hours.Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Do the pain killing injections have any side effects? Please advise if I should consider them during labour pains?" : {
    "question" : "Do the pain killing injections have any side effects? Please advise if I should consider them during labour pains?",
    "answer" : "There are some side effects to be aware of when it comes to pain killing injections: 1. It can make some women feel woozy, sick and forgetful.2. If it hasn’t worn off towards the end of labour, it can make it difficult to push; you might prefer to ask for half a dose initially to see how it works for you. 3. If given too close to the time of delivery, it may affect the baby’s breathing; if this happens, an antidote will be given. 4. The drugs can interfere with breastfeeding.Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife's doctor feels she is suffering from post natal anxiety. How can we be sure of this?" : {
    "question" : "My wife's doctor feels she is suffering from post natal anxiety. How can we be sure of this?",
    "answer" : "It’s normal to be concerned about the safety and welfare of your baby. But if extreme panicky feelings last longer than two weeks, you should see her doctor. Though symptoms of post-natal anxiety vary, be alert to the following: - Obsessive, intrusive thoughts that keep popping into your mind. - Feeling scared all the time - Panic attacks and feeling unable to leave the house or wanting to avoid places. - Insomnia - Compulsive behaviour like checking - Constantly thinking about worst-case scenarios.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner has been detected to be suffering from post natal anxiety. Her doctor has recommended Cognitive behaviour therapy (CBT). What will it entail?" : {
    "question" : "My partner has been detected to be suffering from post natal anxiety. Her doctor has recommended Cognitive behaviour therapy (CBT). What will it entail?",
    "answer" : "Cognitive behaviour therapy (CBT) – this is a structured treatment, which targets one's way of thinking (cognition) and acting (behaviour), which in turn can impact on the way one feels – in this case by reducing her feelings of fear and anxiety. Speak to her doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner has been detected to be suffering from post natal anxiety. Her doctor has recommended Interpersonal therapy (IPT). What will it entail?" : {
    "question" : "My partner has been detected to be suffering from post natal anxiety. Her doctor has recommended Interpersonal therapy (IPT). What will it entail?",
    "answer" : "Often anxiety may be caused by tensions with others, personal losses, changes and/or conflicts in relationships. This type of talking therapy helps people to find new ways of approaching and dealing with these types of situations which may be leading to ongoing feelings of anxiety. These psychological treatments can be conducted one-on-one with a professional, in groups, or online, and are generally delivered by a trained health professional with expertise in mental health. Speak to her doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My daughter in law recently delivered, though I find lack of attachment between them. She isnt all that interactive as one would generally expect. What could be the reason behind it?" : {
    "question" : "My daughter in law recently delivered, though I find lack of attachment between them. She isnt all that interactive as one would generally expect. What could be the reason behind it?",
    "answer" : "Maternal factors contributing to difficulties with mother-infant attachment include: ◾a history of abuse or neglect ◾adoption or multiple placements or carers ◾severe difficulties in interpersonal relationships ◾past or current domestic violence ◾complex obstetric history ◾severe intellectual disability Talk to her doctor regarding your concerns if needed.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife has given birth to our first baby few weeks ago, somehow the baby doesn’t appear to interact with her as we had expected. How can we work on this and get them to have a close interaction." : {
    "question" : "My wife has given birth to our first baby few weeks ago, somehow the baby doesn’t appear to interact with her as we had expected. How can we work on this and get them to have a close interaction.",
    "answer" : "Infant factors affecting attachment include medical complications, prolonged separations from the mother, prematurity, developmental disorders and infant temperament. It is important to see the mother and infant together, observe their interaction closely and watch for patterns of interaction — especially whether the infant is able to ‘use’ the mother as a secure base from which to explore, as well as how the mother responds when attachment behaviour is triggered by the infant Talk to her doctor regarding your concerns if needed.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My stretch marks look awful. They seem to have worsened after childbirth. What can I do about them?" : {
    "question" : "My stretch marks look awful. They seem to have worsened after childbirth. What can I do about them?",
    "answer" : "Well, 90 percent of all women get stretch marks, but the good news is that they will fade. A few things you can do to encourage their vanishing act: Exercise and eat right to help your skin regain its tone, and moisturize regularly (it won't zap your stretch marks but it'll keep itchies to a minimum as your tummy gets back in shape). If you really can't bear a striped belly, ask your dermatologist for other treatments.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My complexion had changed drastically over the pregnancy. Now that I have delivered how long will it take to get back to my normal self?" : {
    "question" : "My complexion had changed drastically over the pregnancy. Now that I have delivered how long will it take to get back to my normal self?",
    "answer" : "Just like the rest of your body, your complexion can take a long time to get back to normal (whatever that was for you) after you've delivered.Your complexion will benefit from oil-free (non-pore-clogging) cosmetics, and a diet that contains lots of fruits and vegetables, vitamin B2, and plenty of water.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Pregnancy had me have loads of patches on my skin, expecially my face! How long do I need to wait before they disappear?" : {
    "question" : "Pregnancy had me have loads of patches on my skin, expecially my face! How long do I need to wait before they disappear?",
    "answer" : "So you are one of those moms wondering about dark splotches on your forehead, upper lip, and cheeks, which have to fade away yet. Those patches (known as chloasma, melasma, or the mask of pregnancy) are caused by an increase in the production of melanin, a skin pigment, during pregnancy. The good news is your body will eventually stop making so much melanin (though that might not happen until after you wean) and then those darned splotches should start to fade. To help this process along, stay out of the sun as much as possible, and wear a broad-spectrum sunscreen (that blocks both UVA and UVB) with an SPF of at least 15 every day, rain or shine. (Another option: a moisturizer or foundation with sun block in it.) This advice holds true even after your splotches have faded, since dark spots are more likely to return once you've had them, and even more important, regular use of sunscreen protects against skin cancer (and wrinkles!). Do consult with your doctor or dermatologist regarding the same.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner had flawless skin before delivering, now she is acne ridden. What advise would help her overcome this?" : {
    "question" : "My partner had flawless skin before delivering, now she is acne ridden. What advise would help her overcome this?",
    "answer" : "She should be sure to cleanse her skin gently twice a day to help prevent blemishes. If they do break out, try a product with benzoyl peroxide or glycolic acid (both are fine for nursing mothers) but skip salicylic-acid-based formulas until she has weaned, just to be on the safe side. She can also consult her doctor or dermatologist for the same.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Why do so many women like my sister develop postpartum acne? Are they part of the package?" : {
    "question" : "Why do so many women like my sister develop postpartum acne? Are they part of the package?",
    "answer" : "Postpartum acne can appear because of hormonal swings (plus stress, sleep deprivation, and about zero time for skin care. These may be handled my following routine skin care. It is best to follow one's doctors, dermatologists and dieticians advise to prevent it.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I gave birth four days ago and I’m still so sore down there. Is there any way I can make it heal faster, or at least deal with the discomfort?" : {
    "question" : "I gave birth four days ago and I’m still so sore down there. Is there any way I can make it heal faster, or at least deal with the discomfort?",
    "answer" : "We feel your pain. The days after delivery can be pretty tough, especially if you had an episiotomy or tear. To speed up healing, keep your perineum (the tissue between the vagina and rectum) clean and dry. Change sanitary pads every four to six hours, or whenever you go to the bathroom. Always move from front to back when removing pads or wiping, and wash your hands before and after. These steps prevent bacteria in your stool (yick!) from entering your vagina. If it hurts to pee or wipe, use a squirt bottle of warm water to spray the area while you go, and pat dry with gauze after. Talk to your doctor for more practical information around managing your discomfort.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I am 9 months pregnant and just wondering when will I be able to hold the baby?" : {
    "question" : "I am 9 months pregnant and just wondering when will I be able to hold the baby?",
    "answer" : "Moms who deliver vaginally and have an uncomplicated birth usually get to hold their babies within minutes — even seconds! Some experts believe that immediate skin-to-skin contact is important for mom/baby bonding and that breastfeeding as soon as you can helps baby learn better too. Baby may get whisked away soon after too get weighed and cleaned up, but don’t worry. You’ll get to keep him. Speak with your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "If I opt for normal delivery, how soon will I get to go home?" : {
    "question" : "If I opt for normal delivery, how soon will I get to go home?",
    "answer" : "Vaginal birth usually requires a two-night stay in the hospital — you’d probably be fine to leave after 24 hours, but baby could need to be observed a little longer than that. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "If I opt for C Section delivery, how soon will I get to go home?" : {
    "question" : "If I opt for C Section delivery, how soon will I get to go home?",
    "answer" : "If you get a c-section, the norm is generally about four days, as long as you’re recovering normally. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "After delivering how soon would I get my cup of coffee?" : {
    "question" : "After delivering how soon would I get my cup of coffee?",
    "answer" : "If you're really craving a cup of java, you can probably have one with your postdelivery meal. Just don’t go too crazy. If you're breastfeeding, you should keep to about one to two cups a day or less, like you did during pregnancy. Speak to your doctor regarding it.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "After delivering how soon would I get to eat sushi?" : {
    "question" : "After delivering how soon would I get to eat sushi?",
    "answer" : "Once you give birth, you no longer have to miss out on indulging in raw seafood. But if you’re breastfeeding, stick to low-mercury fish like salmon, shrimp, and whitefish. Speak to your doctor about it.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "After delivering can I drive my car back home?" : {
    "question" : "After delivering can I drive my car back home?",
    "answer" : "No, you shouldn’t drive home from the hospital, and you'll want to wait until any medication is out of your system and you’re not in pain before you get behind the wheel. If you had a c-section, though, your doctor will probably tell you to wait about six weeks so there’s no risk of tearing your incision.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "After delivering how soon can I celebrate with champagne?" : {
    "question" : "After delivering how soon can I celebrate with champagne?",
    "answer" : "The good news is you could have one right after baby is born if you really wanted to. But remember: It’s not a good idea to drink more than a glass here and there if you're breastfeeding. Plus, it should be at a moment when you know there will be a long time until baby’s next feeding, and baby isn’t exactly predictable just yet. And we doubt you'll want bubbly right after birth — sleep and a burger might be more your speed. We say wait at least a couple days. Speak with your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I have been getting feelers that I will suffer from post partum depression. Are there any pointers which could help me know if I am thinking right?" : {
    "question" : "I have been getting feelers that I will suffer from post partum depression. Are there any pointers which could help me know if I am thinking right?",
    "answer" : "Yes. There are predictors, but no one is immune and there really isn’t a type of woman who gets hit with depression after delivery. Still, if you’ve experienced any of the following, you may be more likely to suffer from PPD: - A personal or family history of depression - A previous postpartum depression - Severe PMS - Negative mood changes in response to the birth control pill - Strong feelings of isolation - Poor partner support - Previous emotional trauma Speak to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Are there any general practices which can be carried out to prevent post partum depression?" : {
    "question" : "Are there any general practices which can be carried out to prevent post partum depression?",
    "answer" : "Yes. Set a nighttime routine/ Make sure you’re staying healthy/ Line up support. Talk to your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Things are a lot, um, bigger down there since I gave birth. Will it get back to normal?" : {
    "question" : "Things are a lot, um, bigger down there since I gave birth. Will it get back to normal?",
    "answer" : "Yes! It’s just vaginal swelling from the trauma of pushing baby’s head through, not permanent growth. Give your body time to heal — we’re talking 24 to 48 hours after delivery — and it will get back to normal. Until then, don’t skimp with ice packs; they’re key for helping to bring the swelling down. Plus, they’ll numb up the area to help you deal with any pain as you recover from delivery. Consult with your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Ever since I have delivered my legs seem swollen. It is normal after labour? Do I need to do something about them?" : {
    "question" : "Ever since I have delivered my legs seem swollen. It is normal after labour? Do I need to do something about them?",
    "answer" : "You may also have quite a bit of swelling in your legs right now (hello new-mom cankles!). That’s probably due to the fluids you received during labor, and that will go away too. It just may take a week or so. Some moms might be tempted to take water pills to try to get the swelling to go down, but that’s not necessary. It will happen on its own. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I'm ready to have my pre-pregnancy body back! How long will it take?" : {
    "question" : "I'm ready to have my pre-pregnancy body back! How long will it take?",
    "answer" : "Give your body a break — it just went through a heck of a lot of stretching and strain, and it will take time for it to recover. The good news? Your leftover bump should deflate (for the most part) within a few weeks, as your uterus shrinks back down to its regular, plum-size proportions. As for your extra padding, get active as soon as your OB says it’s okay, eat right, and you’ll start seeing results. Remember, though, that your body went through 9 months of growing and changing. It might take just as long to feel like your old self. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I recently gave birth and sometimes wake up at night drenched in sweat! What’s going on?" : {
    "question" : "I recently gave birth and sometimes wake up at night drenched in sweat! What’s going on?",
    "answer" : "There are so many things that can happen to your body postpartum that people don’t always warn you about including night sweats. Don’t freak out. Plenty of other new moms get them too, and even though they’re aggravating and uncomfortable, they’re usually nothing to worry about. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "A lot is said about transitioning from pregnany to actual parenthood. What changes should I expect right after the delivery?" : {
    "question" : "A lot is said about transitioning from pregnany to actual parenthood. What changes should I expect right after the delivery?",
    "answer" : "Some of the symptoms you might experience after childbirth include: •bloody discharge •abdominal cramps •pain and discomfort around the vagina •pain around the incision if you had a cesarean •difficulty urinating •sweating •breast engorgement •constipation Feel free to speak with your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I am about to deliver anytime now and am curious about the complications that could occur. Please advise." : {
    "question" : "I am about to deliver anytime now and am curious about the complications that could occur. Please advise.",
    "answer" : "Complications after childbirth are rare. But it’s important to be aware of your symptoms and to call your doctor if you experience anything unusual. Some symptoms that may indicate a problem include: •heavy bleeding that lasts for more than a few hours •large blood clots •pain in the lower abdomen after the first few days following delivery •fever •nausea and vomiting •sharp chest pain Speak to your doctor regarding your doubts.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Right after the childbirth how would we know how healthy the child is?" : {
    "question" : "Right after the childbirth how would we know how healthy the child is?",
    "answer" : "After a baby is born, the health of a newborn can be assessed. Things that will be assessed include: •appearance (color of the skin) •pulse •grimace (reflex) •activity •respiration Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My mother has suggested that I breast fee my little one, just like she did. What are the medical benefits of breast feeding ?" : {
    "question" : "My mother has suggested that I breast fee my little one, just like she did. What are the medical benefits of breast feeding ?",
    "answer" : "Some of the many benefits of breast milk include: •easily digestible •helps to prevent allergies •passes on mother’s infection-fighting antibodies, lowering the risk of certain infections •it's free •strengthens the bond between mom and baby •decreases risk of breast and ovarian cancer •reduces a baby’s chance of becoming obese as they get older Consult your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I am convinced of sticking to breastfeeding my new born. Would I need extra milk myself to be able to feed?" : {
    "question" : "I am convinced of sticking to breastfeeding my new born. Would I need extra milk myself to be able to feed?",
    "answer" : "If you are breastfeeding, you will need to increase your intake of calories and get plenty of calcium. Talk to your doctor and dietician for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "We are first time parents and have heard loads about post partum depression. What is it exactly?" : {
    "question" : "We are first time parents and have heard loads about post partum depression. What is it exactly?",
    "answer" : "Postpartum depression is a form of clinical depression that usually affects women within the first few months after childbirth. While the fluctuations in hormone levels may be to blame for changes in mood and behavior after giving birth, there are also a set of non-hormonal factors that may contribute to depression.Consult your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife is in her 9 month of pregnancy and we have fears over her developing PPD. What are the most common triggers that may cause it?" : {
    "question" : "My wife is in her 9 month of pregnancy and we have fears over her developing PPD. What are the most common triggers that may cause it?",
    "answer" : "Triggers for post partum depression may include: •disappointment in the birth •exhaustion •breastfeeding difficulties •relationship adjustments •other stressors related to having a new baby It is best to talk to her doctor if you suspect she may develop it down the line.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Does sex after child birth actual get more painful than ever before?" : {
    "question" : "Does sex after child birth actual get more painful than ever before?",
    "answer" : "Sex can sometimes be painful the first time after delivering a baby, particularly if you’ve had an episiotomy or a tear. Talk to your doctor before getting back at it.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Am breastfeeding my new one but my partner appears rushed for getting together in bed, will it be ok for me to get started?" : {
    "question" : "Am breastfeeding my new one but my partner appears rushed for getting together in bed, will it be ok for me to get started?",
    "answer" : "Women who are breastfeeding have lower estrogen levels, which may affect lubrication and make the vagina feel dry and raw. Be sure to use a lubricant when you restart sexual activity. If the lubrication does not alleviate the pain, then check with your doctor to make sure you are healing as expected.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My mother-in-law is insisting that I breastfeed, is there any scientific reason to support this?" : {
    "question" : "My mother-in-law is insisting that I breastfeed, is there any scientific reason to support this?",
    "answer" : "According to the experts, there are some vital elements that are present in breast milk that are not in baby formula. Talk to your doctor for more information regarding feeding options.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "As a first time mum am wondering how does milk get through the nipple while breastfeeding (wouldn't there be blood too)?" : {
    "question" : "As a first time mum am wondering how does milk get through the nipple while breastfeeding (wouldn't there be blood too)?",
    "answer" : "Blood forms the milk inside the lobules. Blood and milk are separated and only the milk is allowed out of the lobules and into the lactiferous ducts. Sometimes, a lactating mother passes blood from the breast with the milk. That is caused by abnormal situations, and should be checked by your personal care giver professional.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What is foremilk?" : {
    "question" : "What is foremilk?",
    "answer" : "Foremilk is the milk that is waiting in the ampullae, behind the nipple, and is the first milk that the infant gets from the breast at each feeding. It is what gets the infant interested in feeding, and keeps him/her interested until the \"let-down\" reflex allows more milk to be produced. Talk to your doctor or care giver for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "When should you stop breastfeeding?" : {
    "question" : "When should you stop breastfeeding?",
    "answer" : "Breastfeeding specialists today are recommending that we try to breastfeed our babies for at least a full year. Many mothers go much longer than that, but most fall short of that expectation. Today, many new mothers would like to stay home with their infants, but they are forced by economic reasons or various emotional or physical reasons to go back to the daily work force. It is recommended that if that happens, the mothers attempt to continue breastfeeding, by utilizing the breastfeeding stations that are becoming a part of our workplace. Encourage employers to put these stations at the mothers' disposal. If that is not available, mothers can express their breastmilk by hand or with machines and store the milk in a refrigerator until the child's sitter or nanny can come by the workplace and pick it up, administering it with a baby bottle. Sometimes, children may decide for themselves that they no longer want their mother's milk and they may partially or totally abandon the breast for solid foods. There is no upper limit to the duration of breastfeeding. It is usually determined by practicality or the child's demands. Breast milk supplies all nutrients the child will need, for as long as the child uses it. Talok to your doctor regarding your situation.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife doesn’t feel like breastfeeding, is it normal?" : {
    "question" : "My wife doesn’t feel like breastfeeding, is it normal?",
    "answer" : "No one HAS to breastfeed, but most experts feel that breastfeeding will give infants a better start in life. Talk to her doctor if you would like to for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Is if bad if someone else (not the baby) sucked on a nipple?" : {
    "question" : "Is if bad if someone else (not the baby) sucked on a nipple?",
    "answer" : "Milk consumed by anyone other than the infant may jeopardize the supply for the infant. If that is not a concern, some couples do share in this manner.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife is lactating at the moment and I have been wondering if the breast milk is drinkable by anybody?" : {
    "question" : "My wife is lactating at the moment and I have been wondering if the breast milk is drinkable by anybody?",
    "answer" : "Breast milk is consumable by any human. Some older children or adults must get breast milk from a Milk Bank for their sensitive stomach or digestion system.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "After I have given birth, when do the breasts stop producing milk?" : {
    "question" : "After I have given birth, when do the breasts stop producing milk?",
    "answer" : "When you stop expressing the milk. A woman will produce breast milk for twenty, thirty or more years, as long as there is a constant need for it. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "As first time parents we are wondering if both breasts produce milk?" : {
    "question" : "As first time parents we are wondering if both breasts produce milk?",
    "answer" : "Yes, normally, but do not necessarily produce the same quantity of milk.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "As a mother do I have to switch between breasts during breastfeeding?" : {
    "question" : "As a mother do I have to switch between breasts during breastfeeding?",
    "answer" : "It is customary to feed from the left breast for half the time, then finish at the right one. Then the next feeding, you start with the right breast, and finish with the left. This will allow each breast to share the aggressive sucking when the baby begins, and each breast will be equally emptied at least every other feeding.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "If I don't breast feed the baby, will the breasts swell up?" : {
    "question" : "If I don't breast feed the baby, will the breasts swell up?",
    "answer" : "If the mother decides not to breastfeed her infant, her breasts will not be emptied after they start producing milk. This will cause the breasts to stop producing milk, and the breasts will return to near pre-pregnancy size. When the milk is not removed from the breasts, they will become engorged and swell, usually causing discomfort and pain. After several days, the breasts will \"give up\" trying to produce milk and become smaller and less painful. There are methods that the mother may choose to use to help to relieve that pain. Talk to your doctor regarding the same.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Why do babies need breastfeeding? My wife is a working women and doesn’t appear to support this." : {
    "question" : "Why do babies need breastfeeding? My wife is a working women and doesn’t appear to support this.",
    "answer" : "Breasts were designed with the intent for them to breastfeed their young. Many women do not breastfeed their infants. If the mother does in fact elect to breastfeed, there are many advantages for her and for the infant. The colostrum that the mother produces during the first 24-48 hours is very critical. It conveys many of the mother's vital immunities to the infant, giving the child a better start in life and a more complete development.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Technically speaking, how do you get milk from the breasts?" : {
    "question" : "Technically speaking, how do you get milk from the breasts?",
    "answer" : "By manual expression, where pressure is placed on opposing sides of the breast, at a point about one to one and a half inches back from the nipple. Also, a breast pump may be used. They are either manual or electrical, and may be single or double to pump both breasts at the same time. The third way is the obvious one, where the infant uses a combination of mild suction and a rolling tongue pressure to extract milk. The nipple is actually well into the mouth during successful breastfeeding.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I am going to be a mum soon and wondering if breastfeeing hurts?" : {
    "question" : "I am going to be a mum soon and wondering if breastfeeing hurts?",
    "answer" : "Yes, it often can, at least until the mother and the baby get used to doing it. It will be especially true if the mother does not immediately learn how to get the baby to \"latch on\" to the breast properly. The baby's tongue must put pressure on the areola of the breast and press the end of the breast up against the roof of the baby's mouth. If the baby only sucks or puts pressure on the nipple, it will cause some injury to the nipple. Also, the mom needs to keep the nipples dry by air-drying them, after they finish feeding. Talk to your doctor for making it more convinient for you.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "When I breastfeed, will the milk come out when it's time for the baby's feeding time and he's not there to drink?" : {
    "question" : "When I breastfeed, will the milk come out when it's time for the baby's feeding time and he's not there to drink?",
    "answer" : "Sometimes, when the mother's body is ready to feed the infant, but the infant is not there or is still asleep, the mother's breasts start producing milk, but there is no place to store it up. If the mother hears a baby cry (any baby), it may signal her brain to \"let down\" the milk, by activating what is known as the 'let-down reflex', which 'allows' the breast to release the milk. Milk will actually flow out of the nipple (\"leaking\") at this time, sometimes actually squirting. Breast pads in a nursing bra will usually absorb that wasted milk. Talk to your doctor for getting more comfortable with breastfeeding.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner is large breasted. Does the size of the breast have anything to do with the amount of milk the mother has?" : {
    "question" : "My partner is large breasted. Does the size of the breast have anything to do with the amount of milk the mother has?",
    "answer" : "No. All breasts have about the same amount of milk producing glands, no matter what the size of the breast. Larger breasts just have more fatty tissue. Women with small breasts should not be discouraged from breastfeeding.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "If I have implants and they pop while am breastfeeding, can the baby get poison by breastfeeding?" : {
    "question" : "If I have implants and they pop while am breastfeeding, can the baby get poison by breastfeeding?",
    "answer" : "It would depend upon what the liquid is that is filling the breast implant. The liquid does not flow directly out the nipple. It would be absorbed into the mother's system and bloodstream, and then sent back to the breast and possibly passed out along with the milk. If this has actually happened, it would be a rare situation. Talk to your doctor if you have implants.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Not that am against breastfeeding but wondering if breast milk healthier than normal milk? Why is regular milk bad for young babies?" : {
    "question" : "Not that am against breastfeeding but wondering if breast milk healthier than normal milk? Why is regular milk bad for young babies?",
    "answer" : "Normal milk could be cow's milk which was made for baby cows. Baby humans need human milk. Human babies have enough trouble trying to digest cows milk when they are infants that cow's milk can cause serious digestive problems, as well as other problems. So it is best to breastfeed your little ones if possible.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "When a woman has a child and breastfeeds it, how do you know when the milk will come out or not? Can you control this?" : {
    "question" : "When a woman has a child and breastfeeds it, how do you know when the milk will come out or not? Can you control this?",
    "answer" : "The mother tends to develop a schedule that is similar to the requirements of the infant, and when the baby is getting hungry, her body is usually ready to produce milk. The breasts do not have a large supply of milk waiting inside. The breast makes milk as quickly as the infant requires it. A sort of \"on-demand\" feeding system.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "How long does one feeding take?" : {
    "question" : "How long does one feeding take?",
    "answer" : "Generally, about 15 to 25 minutes, depending on how well the baby is taking the milk, how well he/she is \"latched on\", how sleepy or hungry he/she may be, etc. Sometimes the mother may have the baby remain at her breast for a period of time when it is not sucking. That allows them some nice private time. It is great for \"bonding\".",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What is the correct way to breast feed a baby?" : {
    "question" : "What is the correct way to breast feed a baby?",
    "answer" : "Some hospitals offer \"lactation consultants\" to help you get started. Make sure you understand how to get the baby to \"Latch On\" properly to feed the baby correctly. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "The elders in my family are highlighting the importance of colostrum? What is colostrum?" : {
    "question" : "The elders in my family are highlighting the importance of colostrum? What is colostrum?",
    "answer" : "Colostrum is a whiteish/yellowish liquid that comes from the mother's breast for the first two or three days after the mother gives birth. It contains very important minerals and anti-bodies that the baby really needs to build up its own natural immune system. It may not look like it but it is sufficient to maintain the infant's nutrition level until the breast milk begins flowing several days after delivery. Talk to your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner was drinking when pregnant, will it impact the baby when breastfeeding?" : {
    "question" : "My partner was drinking when pregnant, will it impact the baby when breastfeeding?",
    "answer" : "Fetal Alcohol Syndrome is a condition that is detrimental to the embryo/child, and is caused by the mother consuming alcohol during her pregnancy. If a woman is breastfeeding, any drugs may possibly pass to the child, through the mother's milk. Check with your doctor on any medications that you may be taking while you are breastfeeding.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "How many days or weeks MUST I breastfeed a baby after it is born?" : {
    "question" : "How many days or weeks MUST I breastfeed a baby after it is born?",
    "answer" : "You do not HAVE TO breastfeed any child, if you have formula to provide for it, but the longer you can breastfeed, the better it will be for the child. Breast milk has been proven to be superior to any manufactured formula. Leading specialists now recommend breastfeeding for at least a whole year. Some mothers will breastfeed for several years after birth.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "How long should I breastfeed my first child?" : {
    "question" : "How long should I breastfeed my first child?",
    "answer" : "It would be great if every child could be breastfed at the very least for the first 3 days. Experts would suggest that at least first few months would be a minimum. Doctors are now recommending a minimum of a full year, as long as you can or as long as the child is interested.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My mother in law doesn’t seem to understand the importance of postpartum care, she was considerate all through my pregnancy, though now she thinks its all sorted and my responsibility. Please advise how can I help myself?" : {
    "question" : "My mother in law doesn’t seem to understand the importance of postpartum care, she was considerate all through my pregnancy, though now she thinks its all sorted and my responsibility. Please advise how can I help myself?",
    "answer" : "While most attention to pregnancy care focuses on the nine months of pregnancy, postpartum care is important, too. The postpartum period lasts six to eight weeks, beginning right after the baby is born. During this period, the mother goes through many physical and emotional changes while learning to care for her newborn. Postpartum care involves getting proper rest, nutrition, and vaginal care. Talk to your doctor and other family members for creation of support system.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My new born is just 5 weeks and my life seems to have gone for a toss. I cant figure out if am coming or going. Is this normal?" : {
    "question" : "My new born is just 5 weeks and my life seems to have gone for a toss. I cant figure out if am coming or going. Is this normal?",
    "answer" : "Rest is crucial for new mothers who need to rebuild their strength. To avoid getting too tired as a new mother, you may need to: •sleep when your baby sleeps •keep your bed near your baby’s crib to make night feedings easier •allow someone else to feed the baby with a bottle while you sleep Consult your doctor and family or friends for a support system.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife has just delivered a healthy baby. Do we need to continue being focussed on her diet?" : {
    "question" : "My wife has just delivered a healthy baby. Do we need to continue being focussed on her diet?",
    "answer" : "Yes, the weight that she gained during pregnancy helps make sure she has enough nutrition for breast-feeding. However, she needs to continue to eat a healthy diet after delivery. Talk to her dietician and doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My sister just had a baby girl. What are the general dos and donts pertaining to her diet?" : {
    "question" : "My sister just had a baby girl. What are the general dos and donts pertaining to her diet?",
    "answer" : "She should:•avoid high-fat snacks •focus on eating low-fat foods that balance protein, carbohydrates, and fruits and vegetables •drink plenty of fluids Talk to her dietician and doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My mother used to place a lot of importance on burping when we were little ones. Does it still hold true." : {
    "question" : "My mother used to place a lot of importance on burping when we were little ones. Does it still hold true.",
    "answer" : "Yes, burp the baby between feedings on each breast and at the end of the feeding. Breastfed babies do not swallow as much air as bottle-fed babies and may not burp as much, but careful attention to burping should still be paid. Consult your doctor on how to get it right.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Our little baby girl keeps coming up with wet burps. Is this normal?" : {
    "question" : "Our little baby girl keeps coming up with wet burps. Is this normal?",
    "answer" : "“Wet burps” are air bubbles trapped under the milk. When the bubble is released a small amount of milk may be brought up too. Wet burps are normal for both breast- and bottle-fed babies. Speak to your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "How frequently should I get my baby to burp during each feeding session?" : {
    "question" : "How frequently should I get my baby to burp during each feeding session?",
    "answer" : "Burp your infant every one to two ounces of formula while you are in the hospital and he/she is becoming accustomed to the formula. Once you are home and comfortable with feeding, burp him/her whenever you feel he/she needs it but at least once with each feeding. Speak to your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "The umbilical cord of my newborn looks not so pleasant. What care should be taken while its there?" : {
    "question" : "The umbilical cord of my newborn looks not so pleasant. What care should be taken while its there?",
    "answer" : "It is important to keep the umbilical cord clean and dry. Folding diapers and clothing away from the cord will help keep the area dry. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Both of my twins have the umbilical cord still there. How long would it be there and what are the signs that it has gone for good?" : {
    "question" : "Both of my twins have the umbilical cord still there. How long would it be there and what are the signs that it has gone for good?",
    "answer" : "The cord usually falls off in one to three weeks. When it does, you might notice a drop or two of blood. A small amount of thick, crusty or yellow discharge is normal; however, it is not normal to see bleeding, oozing, swelling, substantial redness, or for the cord to smell bad. If you see any of these signs, call your doctor.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Our little angel is scheduled to arrive in peak summer. Would juices be safe for the baby or should we stick to plain water initially?" : {
    "question" : "Our little angel is scheduled to arrive in peak summer. Would juices be safe for the baby or should we stick to plain water initially?",
    "answer" : "Infants do not require any additional fluid like water or fruit juice. Breast milk or formula mixed in the recommended concentration will provide adequate hydration up to the age of one year. Feel free to your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I just had my first baby, do I need to sterilise his bottles every time?" : {
    "question" : "I just had my first baby, do I need to sterilise his bottles every time?",
    "answer" : "It is not necessary to sterilize infant bottles. Clean them in hot, soapy water using a bottle brush to scrub thoroughly. If you have a dishwasher, run them through on the hottest cycle as this will provide adequate cleaning. Nipples should be scrubbed thoroughly with soapy water and may be boiled, but it is not necessary to sterilize them. Dishwashers may cause nipples to dry out or crack. Always wash your hands before handling infant’s bottles. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My newborn is just 7 weeks. When should I expect my periods to start?" : {
    "question" : "My newborn is just 7 weeks. When should I expect my periods to start?",
    "answer" : "Your period may start again within 7 to 12 weeks after your baby is born. If you are breastfeeding, it may take longer for your period to start again. It varies from person to person so talk to your doctor regarding your concerns.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife and I have a 2 month old baby. We would like to enjoy intimacy without getting pregnant so soon. What should we do?" : {
    "question" : "My wife and I have a 2 month old baby. We would like to enjoy intimacy without getting pregnant so soon. What should we do?",
    "answer" : "She can still get pregnant again even though she does not have her monthly period. Talk with the doctor or caregiver about a birth control method that will be good for you two if you both do not want to get pregnant.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My daughter seems to having mood swings after delivering her first one. She doesn’t seem excited as expected. Is this ok?" : {
    "question" : "My daughter seems to having mood swings after delivering her first one. She doesn’t seem excited as expected. Is this ok?",
    "answer" : "Many new mothers have some kind of mood changes after delivering their baby. Some of these changes occur because of lack of sleep, hormone changes, and caring for a new baby. Some mood changes can be more serious, such as severe (very bad) postpartum depression (deep sadness). Talk with her doctor if you sense this.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner has had a normal delivery but appears disinterested in physical intimacy. How long does it take to get back in action?" : {
    "question" : "My partner has had a normal delivery but appears disinterested in physical intimacy. How long does it take to get back in action?",
    "answer" : "You two may need to avoid having sex for 6 to 7 weeks after having the baby. You may notice she has a decreased desire for sex or sex may be painful. Caregivers may suggest use of a vaginal lubricant (gel) to help make sex more comfortable.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My best friend had developed Hemorrhoids during her pregnancy. Can I somehow avoid those?" : {
    "question" : "My best friend had developed Hemorrhoids during her pregnancy. Can I somehow avoid those?",
    "answer" : "Hemorrhoids are swollen veins in or around the rectum. Pregnancy can cause hemorrhoids to stick out or swell. You may have rectal pain because of the hemorrhoids. Ask your caregiver about preventing and caring for hemorrhoids.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Even after weeks of having delivered, I feel constipated. What are the natural ways of overcoming this situation?" : {
    "question" : "Even after weeks of having delivered, I feel constipated. What are the natural ways of overcoming this situation?",
    "answer" : "Do not try to push the bowel movement out if it is too hard. High-fiber foods, extra liquids, and regular exercise can help you prevent constipation. Examples of high-fiber foods are fruit and bran. Prune juice and water are good liquids to drink. Regular exercise helps your digestive system work. You may also be told to take over-the-counter fiber and stool softener medicines. Take these items as directed.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My elders have bee advising of Kegel exercises post delivery, are these safe and suggested?" : {
    "question" : "My elders have bee advising of Kegel exercises post delivery, are these safe and suggested?",
    "answer" : "Kegel exercises may help your vaginal and rectal muscles heal faster. You can do Kegel exercises by tightening and relaxing the muscles around your vagina. Kegel exercises help make the muscles stronger, and may prevent gas and urine from leaking out. Talk with your caregiver before you start exercising.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My Gyn has indicated that I will be able to go ahead with a normal delivery. What should I expect there?" : {
    "question" : "My Gyn has indicated that I will be able to go ahead with a normal delivery. What should I expect there?",
    "answer" : "A vaginal delivery occurs when your baby is born through your vagina (birth canal). There are three stages of labor that occur during a vaginal delivery. The first stage begins when you start having contractions, the tightening of your uterine (womb) muscles. The second stage begins when your baby enters your birth canal and ends when your baby is born. The third stage begins after your baby is born and ends when your placenta is delivered. The placenta provides oxygen and food to your baby during pregnancy. Talk to your Gyn for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My family is insisting that I wait for a normal delivery. If all goes well how soon will I be back home?" : {
    "question" : "My family is insisting that I wait for a normal delivery. If all goes well how soon will I be back home?",
    "answer" : "Once your baby is born, you may be able to go home within 24 to 48 hours if there are no medical problems. Still talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Is it true that breastfeeding is a natural birth control. Kindly confirm as I don’t want another pregnancy so soon." : {
    "question" : "Is it true that breastfeeding is a natural birth control. Kindly confirm as I don’t want another pregnancy so soon.",
    "answer" : "Mothers who breastfeed may start their periods even later than 7 to 9 weeks of delivery. You may not get your period again until you stop breastfeeding. You can get pregnant while you are breastfeeding, even if you do not have a monthly period. Talk to your doctor regarding safe birth control methods at this stage.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My sister-in-law had vaginal discharge for weeks after delivering. What is the normal pattern and when should I panic since am going in for a C section?" : {
    "question" : "My sister-in-law had vaginal discharge for weeks after delivering. What is the normal pattern and when should I panic since am going in for a C section?",
    "answer" : "You will have vaginal discharge after delivery. The discharge is bright red the first 1 or 2 days after delivery, and then turns pink. The discharge becomes white or yellow by about day 10 after delivery. It is normal to have discharge on and off for 6 weeks after delivery. Use a sanitary pad rather than a tampon. This helps prevent a vaginal infection. The discharge should not have a bad smell. Talk to your Gyn or caregiver for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Will heat compressions help with my incisions, please advise as I recently under went a C section." : {
    "question" : "Will heat compressions help with my incisions, please advise as I recently under went a C section.",
    "answer" : "Heat does help decrease swelling and pain. Use a warm compress or heating pad. Dampen a washcloth or small towel with warm water and place in a plastic bag. Wrap a dry towel around the plastic bag to prevent burns. Place the warm compress or heating pad on your incision for 15 to 20 minutes every hour as long as you need it. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Is it true that ice compressions can help with my incisions, please help as I recently under went a C section." : {
    "question" : "Is it true that ice compressions can help with my incisions, please help as I recently under went a C section.",
    "answer" : "Ice helps decrease swelling and pain. Use an ice pack or put crushed ice in a plastic bag. Cover the ice pack with a towel and place it on your incision for 15 to 20 minutes every hour for 2 days. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My first child was born weeks ago after an operation, can I go back to my exercise routine now?" : {
    "question" : "My first child was born weeks ago after an operation, can I go back to my exercise routine now?",
    "answer" : "Talk to your primary healthcare provider before you start to exercise. He will help find the best exercise plan for you. Start slowly and do more as you get stronger. Do not lift anything heavier than your baby until your primary healthcare provider says it is okay.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "After my cesarean baby arrived, I feel drained out all the time. Is this normal with all new moms?" : {
    "question" : "After my cesarean baby arrived, I feel drained out all the time. Is this normal with all new moms?",
    "answer" : "Rest as much as possible after you have your baby. Try to nap when he is asleep. Support your incision with a pillow when you feed him. Use the pillow for support when you cough, sneeze, or laugh. Ask for help with household chores until you feel better. Talk to your doctor, family and friends for creating support.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I have been allowed to bathe but am worried about my incision. What are the general care tips for new moms who had C section?" : {
    "question" : "I have been allowed to bathe but am worried about my incision. What are the general care tips for new moms who had C section?",
    "answer" : "When you are allowed to bathe, carefully wash the incision with soap and water. If you have a bandage, change it any time it gets wet or dirty. You may have thin strips of medical tape on your incision. You can bathe with these medical strips. They will start to peel and fall off in about 2 weeks. Do not pull them off. A hard ridge may form along your incision. The ridge may slowly go down as it heals. Speak to your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "It has been weeks since my C section and still the area around the incision feels numb. It is ok?" : {
    "question" : "It has been weeks since my C section and still the area around the incision feels numb. It is ok?",
    "answer" : "It is normal for the area around your incision to be numb after surgery. Feeling should return to the area in about a year. Speak to your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner has had a C Section and is now fit to get back home. Under what conditions should she call a doctor once she is home?" : {
    "question" : "My partner has had a C Section and is now fit to get back home. Under what conditions should she call a doctor once she is home?",
    "answer" : "She should contact her doctor if: she has a fever / feels depressed/ her incision is swollen, red, or has pus coming from it/ has bad-smelling discharge from the vagina / has red streaks, swelling, pain, and warmth in one or both of her lower legs or when she has questions or concerns about her C-section or how to care for the baby.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner has had a C Section and is now fit to get back home. Under what conditions should we know there is an emergency to get her back to the hospital?" : {
    "question" : "My partner has had a C Section and is now fit to get back home. Under what conditions should we know there is an emergency to get her back to the hospital?",
    "answer" : "Seek care immediately if blood soaks through the bandage on her incision/ she soaks 1 vaginal pad in 1 hour for 2 hours in a row/ her incision comes apart/ she feel like harming herself or the baby/ has sudden shortness of breath or severe abdominal pain",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Since I had a normal delivery 3 weeks ago, is it ok for me to resume my activities?" : {
    "question" : "Since I had a normal delivery 3 weeks ago, is it ok for me to resume my activities?",
    "answer" : "After having a baby, you may be very tired. It is very important to get enough rest after having a baby. For a while after delivery, try to keep all activities short. You may be able to do some exercise soon after having your baby, such as walking. Kegel exercises may help you. Talk to your doctor regarding your activity schedule.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My pain hasn’t reduced ever since my normal delivery, now my caregiver has suggested sitz baths. Please advise if it is safe." : {
    "question" : "My pain hasn’t reduced ever since my normal delivery, now my caregiver has suggested sitz baths. Please advise if it is safe.",
    "answer" : "Your caregiver may suggest using sitz baths to help decrease your pain. During a sitz bath, you will sit in a bathtub filled with warm or cold water. A cold sitz bath may decrease your pain right away. To make a cold-water sitz bath, sit in slightly warm water and add ice cubes to the water. Stay in the sitz bath for 20-30 minutes, or as long as your caregiver suggests. Ask your caregiver for more information about sitz baths and other ways to decrease your pain.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife has had a normal delivery and is now ready to be discharged, under what conditions should we contacted her doctor now?" : {
    "question" : "My wife has had a normal delivery and is now ready to be discharged, under what conditions should we contacted her doctor now?",
    "answer" : "You two should contact a doctor if she has fever/ her perineal pain does not go away, or gets worse / the skin between her vagina and rectum is swollen, warm, or red/ she has swollen, hard, or painful breasts/ she feels very sad or depressed/ has leaking urine or bowel movements (BMs)/ is unable to have a BM/ feels more tired than usual or has questions or concerns about the vaginal delivery, or having a new baby.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife has had a normal delivery and is now ready to be discharged, under what conditions should we declare medical emergency?" : {
    "question" : "My wife has had a normal delivery and is now ready to be discharged, under what conditions should we declare medical emergency?",
    "answer" : "She would need immediate attention in case of sudden, large amounts of vaginal bleeding/ pus or yellow drainage coming from vagina or wound/ very little, or no urination at all/ chest pain or trouble breathing that is getting worse over time/ arm or leg feeling warm, tender, and painful/ feeling lightheaded/ experiencing pain when taking deep breaths or coughing/ coughing up blood.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My best friend mentioned that use of tampons after vaginal delivery may increase the risk of infections. Is it true." : {
    "question" : "My best friend mentioned that use of tampons after vaginal delivery may increase the risk of infections. Is it true.",
    "answer" : "Yes, it is best to avoid use of tampons during the healing time after vaginal birth as it increases thr risk of infections. Talk to your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "After my normal delivery is it normal to pass some blood clots which are the size of a pea?" : {
    "question" : "After my normal delivery is it normal to pass some blood clots which are the size of a pea?",
    "answer" : "Yes, passing blood clots is normal after normal delivery if they arent too large or frequent. If they are large contact your doctor immediately.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My wife is practising Kegel exercises after normal delivery to control her urine and bowel movements? Would these really help her?" : {
    "question" : "My wife is practising Kegel exercises after normal delivery to control her urine and bowel movements? Would these really help her?",
    "answer" : "Yes, these exercises would strengthen the pelvic muscles and tissues which may have been stretched during the delivery. Talk to her doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My partner's breasts keep leaking milk. Cant these be stopped somehow?" : {
    "question" : "My partner's breasts keep leaking milk. Cant these be stopped somehow?",
    "answer" : "Breasts are expected to milk after child birth. They cant be stopped as such though nursing pads can be worn to prevent milk showing up on her clothes.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My doctor has suggested that I don’t take any medication over the counter till the time I am breastfeeding. Why is it so?" : {
    "question" : "My doctor has suggested that I don’t take any medication over the counter till the time I am breastfeeding. Why is it so?",
    "answer" : "Some medication may pass through the milk into your baby. Therefore it is best to talk to your doctor before taking any medication including those available over the counter.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "It is been close to 3 weeks since the birth of my child but my wife still appears to be fighting baby blues. What should I do?" : {
    "question" : "It is been close to 3 weeks since the birth of my child but my wife still appears to be fighting baby blues. What should I do?",
    "answer" : "It is best to consult with her doctor as you need to support her in this life changing situation and my now she should have coped up with the changes.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Am close to 35 weeks pregnant. Who all are best contacted for delivery my baby safely?" : {
    "question" : "Am close to 35 weeks pregnant. Who all are best contacted for delivery my baby safely?",
    "answer" : "Obstetrician / Family physician / Certified Nurse Midwife may be contacted for delivering your baby safely. Speak to your Gyn regarding your condition and best delivery methods.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My doctor has been insisting on developing a birth plan. What all would it entail?" : {
    "question" : "My doctor has been insisting on developing a birth plan. What all would it entail?",
    "answer" : "Yes, please talk to your doctor regarding the birth plan which may include : Pain management preferences, How you plan to feed your baby (breast-feed or bottle) and Partner's involvement.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Am in my second trimester and wondering when will the baby be considered as full term?" : {
    "question" : "Am in my second trimester and wondering when will the baby be considered as full term?",
    "answer" : "By 37 weeks your baby is considered full term. Speak to your doctor regarding the details of your pregnancy and delivery.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My co worker went for postnatal yoga. How does it work?" : {
    "question" : "My co worker went for postnatal yoga. How does it work?",
    "answer" : "Postnatal yoga sessions are tailored for women who want to ease back into exercise after giving birth. Whether you had a natural birth or a C-section, this workout guides you through the appropriate yoga positions for you. Talk to your doctor before starting these.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Will having a caesarean affect future pregnancies?" : {
    "question" : "Will having a caesarean affect future pregnancies?",
    "answer" : "Possibly. Once you've had one caesarean: •You're much more likely to have another caesarean in future pregnancies. However, this isn't the case always, and a vaginal birth after caesarean (VBAC) may be possible. •It slightly increases your risk of having a low-lying placenta (placenta praevia) in future pregnancies. •There is a very small risk of the scar on your uterus opening up again in future pregnancies or births, but this rarely happens. Doctors call this uterine rupture. Talk to your doctor for more information.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What do I need to know about recovery after a caesarean?" : {
    "question" : "What do I need to know about recovery after a caesarean?",
    "answer" : "Your main concern when you are recovering from a caesarean section will be managing the pain that naturally results from an operation. But your doctor will probably prescribe pain relieving medicines that are safe for you to take even if you are breastfeeding.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What are the advantages of a caesarean birth?" : {
    "question" : "What are the advantages of a caesarean birth?",
    "answer" : "If you had an emergency caesarean, or a planned caesarean for health reasons, the biggest advantage is that the caesarean likely saved your baby's or your life. If you opted for a planned caesarean, one advantage is that you will know when your baby will be born. You won't have the painful labour contractions, or feel the pain between your vagina and back passage (perineum) that happens with a vaginal birth. A planned caesarean may make the following less likely: •Pain from bruising and stitches in the area between your vagina and back passage (perineum). •Heavy bleeding after the birth.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Is is correct that Gyn could opt for C section to prevent prolapse?" : {
    "question" : "Is is correct that Gyn could opt for C section to prevent prolapse?",
    "answer" : "Caesarean birth may help protect against the slight risk of your uterus slipping into your vagina in later years (prolapse). But there are other factors that contribute to this condition too, such as: •the type of vaginal birth or births you've had •the number of deliveries you had •your baby's weight when she was born •if you are overweight •whether your mum or sister had a prolapsed uterus •if you are constipated often. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "What are the risks to my baby after a caesarean?" : {
    "question" : "What are the risks to my baby after a caesarean?",
    "answer" : "Your baby is likely to be perfectly well, both during and after the caesarean. Some babies do have breathing problems after they're born. Breathing problems after a caesarean are not usually serious, but sometimes babies need to have special care to help them recover. Talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "If I go in for C section would my baby suffer from breathing issues?" : {
    "question" : "If I go in for C section would my baby suffer from breathing issues?",
    "answer" : "Breathing problems are more common for: •Premature babies born by caesarean. •Babies born by a caesarean carried out before labour started, particularly before 39 weeks of pregnancy. It is best to consult your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "Both of my daughter in laws breastfed for varying durations. When women breastfeed, why do some breastfeed longer than others?" : {
    "question" : "Both of my daughter in laws breastfed for varying durations. When women breastfeed, why do some breastfeed longer than others?",
    "answer" : "Some are more conscious of the advantages for the mother and the child, some have time off from work to do it, some have a better support system at home (and sometimes work). Sometimes the baby does not want to breastfeed as long as others. Some breastfeed for five years or more.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "A wax like material appears around my nipples. Is it ok as I have recently started breastfeeding?" : {
    "question" : "A wax like material appears around my nipples. Is it ok as I have recently started breastfeeding?",
    "answer" : "A waxy-like material that is excreted by the sebaceous glands in the nipple and areolar area of the breast. It helps to lubricate and protect the nipple and areola from drying out and from cracking. Air-drying the nipple area and then rubbing the area with a clean finger after a breastfeeding session will help protect the area from cracked skin or chapping by spreading the natural sebum around the areola. Please feel free to talk to your doctor for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "For recovering naturally which are the foods which must be avoided during the first few weeks after childbirth." : {
    "question" : "For recovering naturally which are the foods which must be avoided during the first few weeks after childbirth.",
    "answer" : "The following foods are discouraged: Caffeine (chocolate, coffee) Cigarettes and alcohol Cold/icy or crunchy foods Sugar etc. Consult with your doctor and dietician for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "My mother mentioned that in traditionally the new mums are pampered with badam milk. Can you please explain the importance?" : {
    "question" : "My mother mentioned that in traditionally the new mums are pampered with badam milk. Can you please explain the importance?",
    "answer" : "Soak 10 almonds overnight. 1 cup of warm milk 1/2 tsp of Ghee 1 tsp of honey or maple syrup pinch of turmeric (optional) Slip the skins off the almonds. Blend all ingredients together, strain out the pieces of almond as desired. Heat mixture on low heat. Serve warm. Consult with your doctor and dietician for more details.",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  },
  "I am 33 year old first time mother who delivered naturally, Which foods must be encouraged in my diet during the first few weeks after childbirth." : {
    "question" : "I am 33 year old first time mother who delivered naturally, Which foods must be encouraged in my diet during the first few weeks after childbirth.",
    "answer" : "Consult with your doctor and dietician for a proper diet chart. You may include: Cooked vegetables Fruits Legumes: yellow mung, red lentils, green mung beans Warm food Nuts/Nut butters Whole milk dairy products Whole grains: well cooked Little ghee (clarified butter) Ginger (in small amounts) Basil, cumin, fenugreek, fennel, dill Milk puddings; tapioca, rice pudding",
    "consultNow" : "",
    "category" : "",
    "doctorName" : "Dr.Priyanka"
  }
};


for (var key in qandasPriyanka) {
  count++;
  var qanda = qandasPriyanka[key];
  qanda.consultNow = qanda.category.toLowerCase().startsWith('yes');
  qanda.consultDoctorType = qanda.category.split(' ')[1];
  qanda.category = "Post Natal";
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};