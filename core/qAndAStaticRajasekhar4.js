var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Why is breastfeeding important for baby?",
    "answer" : "Breastmilk is the normal food for babies, designed by nature for human infants: It is a complete food containing all your baby's nutritional needs for the first 6 months of life. It satisfies both hunger and thirst; extra water is not needed. It increases a baby's resistance to infection and disease. It ensures better survival during first year of age as the baby is more prone to infections during this period."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "My wife has given birth recently. Is it necessary to feed the baby with breast milk?",
    "answer" : "Breastfeeding is important for mothers too. It's convenient, cheap and always there when infant need it. It's always fresh, clean and safe. It quickly soothes a fussy, unhappy baby. It helps mother's uterus return to its normal size after childbirth. It gives mother a chance to sit down during the day and rest. Mothers who don't breastfeed have increased risks of cancer of the breast and ovaries. Breastfeeding helps create a close and loving bond between mother and baby and can be a deeply satisfying experience."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How soon after birth can I start to breastfeed?",
    "answer" : "Most babies have a strong need to suck when they are first born, so if you are both well you can start straight away. The first milk in your breasts is called colostrum or else has to be started with in one hour after birth."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How do I know when my baby is hungry?",
    "answer" : "Watch your baby for these early signs of hunger: Sucks her hand Licks her lips Moves and stretches her arms Opens her mouth Turns her head from side to side Turns her head toward your head or chest Don’t wait until your baby cries before offering your breast."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How often should I feed my baby?",
    "answer" : "Babies need to be fed a minimum of 8–12 (or more) times in 24 hours. Newborns will often feed more frequently, as will older babies who are sick, teething or experiencing a “growth spurt.”"
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How long should each breastfeeding session last?",
    "answer" : "The length of each breastfeeding session can vary, depending on baby’s age, hunger level, and individual nursing style. Generally speaking, newborns will feed anywhere from 5–40 minutes (occasionally even longer), while older babies tend to finish in a shorter time. Let your baby decide how long he wants to breastfeed. Start on one breast. When baby slows down or stops, lift him onto your chest for a quick break (or burp him), and then offer the other breast. He may or may not decide to feed some more."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How do I know when my baby is full?",
    "answer" : "Let baby decide when she is full. Watch for these signs: Sucking slows down or stops You no longer hear swallowing Baby’s arms and hands relax Baby lets go of the breast, and does not attempt to latch again If you believe your baby is finished, lift her onto your chest and wait several minutes to see if she reinitiates feeding."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How much breastmilk does my baby need?",
    "answer" : "The amount of breastmilk a baby takes depends on her age. A newborn’s stomach is very small, and is not ready to digest a large volume of milk. Day 1 = about 1 teaspoon per feeding Day 3 = about 1 tablespoon per feeding Day 10 = about 2 oz. per feeding 1 month+ = about 2–3 oz. per feeding Baby’s intake does not increase very much after 1 month of age, even though her weight continues to increase. The average intake for a 1–6 month old is about 25 oz per day, and the normal range is 19–30 oz per day. At about 6 months, when baby starts solids, her milk intake gradually decreases."
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How do I know my baby is getting enough milk?",
    "answer" : "Watch baby’s weight gain, as well as how many diapers he has. Most babies lose weight in the first several days of life. After Day 5, baby should be gaining weight, and be back at his birth weight by Day 10–14. Baby should gain about 1 oz. a day (5–7 oz./week) until 3 months, and 2–3 oz per week up to 6 months. When baby is 5 days old, he should have 5 wet diapers and 3 poopy diapers per 24 hours. The urine should be clear or very pale yellow, and the poop should be bright yellow and soft, like mustard. By 6–8 weeks, baby will continue to have at least 5 wet diapers, but he may have fewer poopy diapers."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "how do I know that my baby is latched on well?",
    "answer" : "Baby’s mouth is open very wide. Her chin is pushed in against the breast . Both of her lips are curled out. You can see more of your areola above baby’s top lip than below her bottom lip. Her cheeks are rounded, not dimpled or sucked in. You can see her chin drop, which means she has a mouthful of milk. You can hear her swallow (it sounds like a soft “kuh”). You do not hear any clicking or smacking sounds. She takes long, rhythmic sucks, and you can see her upper jaw and ear move. You feel a strong tug while breastfeeding, but do not feel pain."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Signs that breastfeeding is not going well…time to ask for help!",
    "answer" : "Baby continues to have difficulty latching on and is not feeding well. Baby’s urine is dark and scanty and/or baby’s poop has not changed to yellow by day 5. Baby continues to loose weight after Day 4–5. Or, baby hasn’t regained birthweight by Day 10–14. Baby is very sleepy and/or is difficult to rouse (even after time spent skin-to-skin). Mom’s milk production has not increased by Day 5. Ongoing breastfeeding pain or discomfort. Cracks or sores on nipples haven’t healed within 3–5 days. Breasts are painful with hard, tender or red area. Mom has flu-like symptoms (chills, fever over 100ºF, aches, pains, enormous fatigue)."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Can I have a glass of wine or beer?",
    "answer" : "An occasional drink, or regular light drinking (one or fewer drinks per day), has not been found to be harmful to breastfeeding babies. Alcohol passes freely into mother’s milk, peaking about 30–60 minutes after consumption, and also passes freely out of a mother’s milk at a rate of approximately 2 hours per drink consumed. There is no need to “pump and dump” breastmilk after drinking alcohol. It is safe to nurse when the effects of the alcohol have worn off and you feel normal again."
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Hi, I am in lactation period. I drink moderately every day. Does this have any effect on my baby?",
    "answer" : "The effects of alcohol on the breastfeeding baby are directly related to the amount consumed by the mother. Babies of women who consistently drink moderately to heavily (defined as 2 or more drinks per day) may exhibit drowsiness, weakness, decrease in linear growth and slow weight gain. Excessive alcohol consumption can also limit parental effectiveness and result in life-threatening conditions for the infant."
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Can I have caffeinated beverages?",
    "answer" : "In general, very little caffeine passes into breastmilk. Mothers only need to eliminate or limit their caffeine consumption if their baby shows a negative response. A baby who is being overstimulated by caffeine may be wakeful, hyperactive, unusually fussy and/or colicky. Newborns and preterm babies are more sensitive to caffeine due to their immature digestive systems. If a mother suspects that her baby is reacting to caffeine, she should remove it from her diet for 2 weeks and then assess whether the symptoms have improved."
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Will exercise affect my breastmilk?",
    "answer" : "Exercise is energizing, reduces stress, and is an important contributor to Mom’s overall emotional and physical well-being. Studies show that exercise, even vigorous activity like running, does NOT affect milk production, or composition. Likewise, exercise does not change the taste of breastmilk, so there is no need to avoid nursing right after a workout. Exercising four to six times per week, beginning four to eight weeks postpartum is safe for most women. Breastfeeding women may find that they are more thirsty than they were before they had a baby. When exercising, be sure to drink enough to satisfy your thirst."
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What about night feeds?",
    "answer" : "New babies wake at night from hunger and need to be breastfed. This also helps your milk supply. Some babies sleep through the night quite early while others take much longer to do so. Breastfeeding is a quick and easy way to soothe and settle your baby."
  },
  "17" : {
    "itemNumber" : 17,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Do I have to eat or drink particular foods?",
    "answer" : ""
  },
  "18" : {
    "itemNumber" : 18,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What is colostrum and how it benefits the baby?",
    "answer" : "Colostrum is the first thick milk produced by the mother right after birth which is deep yellow in color. This milk is rich in nutrients and antibodies which provides the baby complete nutrition and prevents the baby from illness and infections."
  },
  "19" : {
    "itemNumber" : 19,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How long should I feed my baby with the breast milk?",
    "answer" : "The exclusive breastfeeding should be continued for 6 months after birth.Then it should be continued with other supplements upto 2 years of age or above."
  },
  "20" : {
    "itemNumber" : 20,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What is a pacifier?Is it safe to give pacifier to an infant?",
    "answer" : "Pacifier is a rubber or plastic nipple for a baby to suck or chew on.It is safe to be used after a month of birth until a baby gets the hang of breastfeeding. This allows an infant to learn latching well on to the breast."
  },
  "21" : {
    "itemNumber" : 21,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Should a mother use both the breasts?",
    "answer" : "If a baby finishes first breast during a feeding,offer the second one in next feeding because there are two types of milk produced during each feeding-thirst quenching milk and fat rich milk. Both are essential for the baby."
  },
  "22" : {
    "itemNumber" : 22,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Is it safe to use medications for a lactating mother?",
    "answer" : "No, its not safe to take any available drug during lactation. The drugs taken by the mother pass in to the milk and may cause harmful effects in the infant. It is advisable to take medications prescribed only by qualified doctor."
  },
  "23" : {
    "itemNumber" : 23,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How should the breast milk be pumped and stored?",
    "answer" : "If the mother is unable to breastfeed the baby directly then the mother's milk can be pumped out with hand expression, manual pump or with electric breast pump.It has to be further stored immediately for as long as 3 to 8 days under refrigeration. Warm up the milk under hot tap water before it is used but don't microwave."
  },
  "24" : {
    "itemNumber" : 24,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Does frequent feeding lead to poor milk production?",
    "answer" : "No, this is a myth. Instead of feeding the baby frequently, feed your baby whenever he/she is hungry. Infact, frequen feeding leads to more milk production."
  },
  "25" : {
    "itemNumber" : 25,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "I was told that the first milk has to be discarded. Is it correct?",
    "answer" : "Colostrum is the first thick milk produced by the mother right after birth which is deep yellow in color. This milk is rich in nutrients and antibodies which provides the baby complete nutrition and prevents the baby from illness and infections. So, the information you got is not true."
  },
  "26" : {
    "itemNumber" : 26,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Does a lactating mother should space the feedings to give time to refill her breasts?",
    "answer" : "Feed your baby whenever she/he is hungry. Don’t keep your baby hungry for the sake of spacing. Frequent feeding leads to more milk production. More spacing leads to problems both to you and your baby."
  },
  "27" : {
    "itemNumber" : 27,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What is weaning?",
    "answer" : "Weaning is the gradual process of supplementing breast milk with other dietary foods and fluids which is started after the first 6 months of birth."
  },
  "28" : {
    "itemNumber" : 28,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How to breastfeed my baby?",
    "answer" : "Before breast feeding your baby,You just need to check the following points: 1) Are you comfortable? It's worth getting comfortable before a feed. Remember to relax your shoulders and arms when you feed. 2) Are your baby's head and body in a straight line? If not, your baby might not be able to swallow easily. 3) Are you holding your baby close to you, facing your breast? Support their neck, shoulders and back. They should be able to tilt their head back and swallow easily, and shouldn't have to reach out to feed. 4) Is your baby's nose opposite your nipple? Your baby needs to get a big mouthful of breast from beneath the nipple. Placing your baby with their nose level with your nipple will encourage them to open their mouth wide and attach to the breast well."
  },
  "29" : {
    "itemNumber" : 29,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How to latch your baby on to your breast?",
    "answer" : "Hold your baby close to you with their nose level with the nipple. Wait until your baby opens their mouth really wide with the tongue down. You can encourage them to do this by gently stroking their top lip. Bring your baby on to your breast. Your baby will tilt their head back and come to your breast chin first. They should take a large mouthful of breast. Your nipple should go towards the roof of their mouth."
  },
  "30" : {
    "itemNumber" : 30,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How to tell if your baby is getting enough milk?",
    "answer" : "Your baby will appear content and satisfied after most feeds. They should be healthy and gaining weight after the first two weeks. Your breasts and nipples should not be sore. After the first few days, your baby should have at least six wet nappies a day. After the first few days, they should also pass at least two yellow stools every day."
  },
  "31" : {
    "itemNumber" : 31,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Breastfeeding premature and ill babies",
    "answer" : "If your baby is in a neonatal unit in hospital after the birth, you'll probably be encouraged to try kangaroo care. This means that when your baby is ready, you can hold your baby against your skin regularly, usually under your clothes. This skin-to-skin contact helps you bond with your premature baby and increases your milk supply."
  },
  "32" : {
    "itemNumber" : 32,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "",
    "answer" : "If your baby is born prematurely, breast milk will help their vulnerable tummy to mature and fight infection. Breast milk is easier for the stomach to digest than infant formula. It also contains hormones and growth factors that help your baby grow and become stronger."
  },
  "33" : {
    "itemNumber" : 33,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Skin-to-skin contact with your premature baby",
    "answer" : "As soon as possible, you'll be encouraged to spend time holding your baby against your skin. This is called Kangaroo Care. Your baby will be dressed just in a nappy and then placed inside your top or blouse so they can be held securely against your skin. This skin-to-skin contact helps you feel close to your baby and feel more confident with them. Your partner can enjoy skin-to-skin contact as well."
  },
  "34" : {
    "itemNumber" : 34,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How to breastfeed a premature baby",
    "answer" : "If your baby is born early, it's even more important that you're supported to breastfeed. Some people call the yellow liquid, produced by your breasts in the first few days \"liquid gold\". Even if you or your baby aren't well enough to breastfeed, spending as much time as possible close together may help to boost your breast milk production and establish breastfeeding. Every feed your baby consumes is valuable. Even if your baby is not ready to feed, you'll need to express your breast milk to build up your supply."
  },
  "35" : {
    "itemNumber" : 35,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Donor breast milk",
    "answer" : "Some hospitals have a milk bank or are able to provide donated breast milk from carefully screened women so your baby can have donor breast milk. Where your own breast milk or donor breast milk isn't available, infant formula can be supplied until you're producing enough breast milk. If you're unable to express enough of your own breast milk for your baby or babies, ask your midwife or neonatal nurse for information about donor milk."
  },
  "36" : {
    "itemNumber" : 36,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Can I feed my baby with some holy water or other foods instead of breast milk?",
    "answer" : "The new born should not be given any other foods or water except breastmilk after birth. Exclusive breastmilk makes the infant stronger and healthier. Other foods cause infections and the infant's gut is not ready to digest other foods."
  },
  "37" : {
    "itemNumber" : 37,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Do I Need to Stop Breastfeeding When My Baby Gets Teeth?",
    "answer" : "Mothers are often curious about how teething will affect their breastfeeding relationship. Sometimes there is concern that baby may bite, or that teething will cause breastfeeding to become uncomfortable. Some mothers may even consider weaning. The World Health Organization (WHO) recommends that breastfeeding continue for a minimum of two full years. It is important to understand that when a baby is latched on to the breast correctly, his lips are flanged and his gums land far back on the areola (the dark area around the nipple). His bottom teeth are covered by his tongue and do not come in contact with the mother's areola at all. For this reason, a baby who is latched on correctly and actively nursing cannot bite. However, if a baby is latched onto the nipple only, the baby can clamp down and cause pain to the mother's nipple. Good positioning and latch-on techniques can prevent painful bites."
  },
  "38" : {
    "itemNumber" : 38,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How do breastfed babies get enough water?",
    "answer" : "Depending on temperature, humidity, and the infant’s weight and level of activity, the average daily fluid requirement for healthy infants ranges from 80–100 ml/kg in the first week of life to 140–160 ml/kg between 3–6 months. These amounts are available from breastmilk alone if breastfeeding is exclusive and unrestricted (on-demand day and night) for two reasons: Breastmilk is 88 percent water. The water content of breastmilk consumed by an exclusively breastfed baby meets the water requirements for infants and provides a considerable margin of safety. Even though a newborn gets little water in the thick yellowish first milk (colostrum), no additional water is necessary because a baby is born with extra water. Milk with higher water content usually “comes in” by the third or fourth day. Figure 2 shows the principal components of breastmilk. Breastmilk is low in solutes. One of the major functions of water is to flush out, through the urine, excess solutes. Dissolved substances (for example, sodium, potassium, nitrogen, and chloride) are referred to as solutes. The kidneys—though immature up to the age of approximately three months—are able to concentrate excess solutes in the urine to maintain a healthy, balanced body chemistry. Because breastmilk is low in solutes, the infant does not need as much water as an older child or adult."
  },
  "39" : {
    "itemNumber" : 39,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What about infants in hot, dry climates?",
    "answer" : "Water in breastmilk exceeds the infant’s water requirements in normal conditions and is adequate for breastfed infants in hot, dry climates. Studies indicate that healthy, exclusively breastfed infants in the first six months of life do not require additional fluids even in countries with extremely high temperatures and low humidity. Solute levels in the urine and blood of exclusively breastfed babies living in these conditions were within normal ranges, indicating adequate water intakes"
  },
  "40" : {
    "itemNumber" : 40,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Can giving water to an infant before six months be harmful?",
    "answer" : "Offering water before the age of six months can pose significant health hazards. Water supplementation increases the risk of malnutrition. Displacing breastmilk with a fluid of little or no nutritional value can have a negative impact on an infant’s nutritional status, survival, growth, and development. Consumption of even small amounts of water or other liquids can fill an infant’s stomach and reduce the baby’s appetite for nutrient-rich breastmilk. Studies show that water supplementation before the age of six months can reduce breastmilk intake by up to 11 percent. Glucose water supplementation in the first week of life has been associated with greater weight loss and longer hospital stays. Water supplementation increases the risk of illness. Water and feeding implements are vehicles for the introduction of pathogens. Infants are at greater risk of exposure to diarrhea causing organisms, especially in environments with poor hygiene and sanitation. In the least developed countries, two in five people lack access to safe drinking water. Breastmilk ensures an infant’s access to an adequate and readily available supply of clean water."
  },
  "41" : {
    "itemNumber" : 41,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Should water be given to breastfed infants who have diarrhea?",
    "answer" : "In the case of mild diarrhea, increased frequency of breastfeeding is recommended. When an infant has moderate to severe diarrhea, caregivers should immediately seek the advice of health workers and continue to breastfeed, as recommended in the Integrated Management of Childhood Illness (IMCI) guidelines. Infants that appear dehydrated may require Oral Rehydration Therapy (ORT), which should only be given upon advice of a health worker. 1 Oral Rehydration Solution (ORS), used in ORT, helps replace water and electrolytes lost during episodes of diarrhea. Super ORS, with a carbohydrate base of rice or cereal for better absorption, has been developed to improve treatment."
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
  qanda.category = "Pre, Peri & Post Natal";
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};