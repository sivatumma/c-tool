var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "Due to less fluid in my womb, I was told that I am not suitable for normal delivery.What is cesarean birth?",
    "answer" : "Cesarean birth is the delivery of a baby through incisions made in the mother’s abdomen and uterus. If there is less amniotic fluid , there are some serious risks to your baby if normal delivery takes place. So, this might be one of the reasons why your doctor advised you to undergo caesarean."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "What are the reasons for cesarean birth?",
    "answer" : "The following situations are some of the reasons why a cesarean birth is performed: Multiple pregnancy—If a woman is pregnant with twins, a cesarean birth may be necessary if the babies are being born too early, are not in good positions in the uterus, or if there are other problems. The likelihood of having a cesarean birth increases with the number of babies a woman is carrying. Failure of labor to progress—Contractions may not open the cervix enough for the baby to move into the vagina. Concern for the baby—For instance, the umbilical cord may become pinched or compressed or fetal monitoring may detect an abnormal heart rate. Problems with the placenta A large baby Breech presentation Maternal infections, such as human immunodeficiency virus or herpes Maternal medical conditions, such as diabetes or high blood pressure"
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "Is a cesarean birth necessary if I have had a previous cesarean birth?",
    "answer" : "Women who have had a cesarean birth before may be able to give birth vaginally. The decision depends on the type of incision used in the previous cesarean delivery, the number of previous cesarean deliveries, whether you have any conditions that make a vaginal delivery risky, and the type of hospital in which you have your baby, as well as other factors. Talk to your doctor about your options."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "I am afraid of the pain caused during normal delivery. I want to have cesaerean delivery. Which among the two suits me?",
    "answer" : "Some women may request a cesarean birth even if a vaginal delivery is an option. This decision should be weighed carefully and discussed with your health care provider. As with any surgery, there are risks and complications to consider. Your hospital stay may be longer than with vaginal birth. Also, the more cesarean births a woman has, the greater her risk for some medical problems and problems with future pregnancies. This may not be a good option for women who want to have more children. If you dont want pain, you can choose epidural anaesthesia with normal delivery."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "What are the preparations for cesarean birth?",
    "answer" : "Before you have a cesarean delivery, a nurse will prepare you for the operation. An intravenous line will be put in a vein in your arm or hand. This allows you to get fluids and medications during the surgery. Your abdomen will be washed, and your pubic hair may be clipped or trimmed. You will be given medication to prevent infection. A catheter (tube) is then placed in your urethra to drain your bladder. Keeping the bladder empty decreases the chance of injuring it during surgery."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "What type of anesthesia will be used during the procedure?",
    "answer" : "You will be given either general anesthesia, an epidural block, or a spinal block. If general anesthesia is used, you will not be awake during the delivery. An epidural block numbs the lower half of the body. An injection is made into a space in your spine in your lower back. A small tube may be inserted into this space so that more of the drug can be given through the tube later, if needed. A spinal block also numbs the lower half of your body. You receive it the same way as an epidural block, but the drug is injected directly into the spinal fluid."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "How many cuts are made on my abdomen during cesaerean section?",
    "answer" : "An incision is made through your skin and the wall of the abdomen. The skin incision may be transverse (horizontal or \"bikini\") or vertical, near the pubic hairline. The muscles in your abdomen are separated and may not need to be cut. Another incision will be made in the wall of the uterus. The incision in the wall of the uterus also will be either transverse or vertical. The baby will be delivered through the incisions, the umbilical cord will be cut, and then the placenta will be removed. The uterus will be closed with stitches that will dissolve in the body. Stitches or staples are used to close your abdominal skin."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "One of my neighbours had cesarean section. After section, she had some complaint with the bladder. Does this happen to every woman",
    "answer" : "Some complications occur in a small number of women and usually are easily treated: Infection Blood loss Blood clots in the legs, pelvic organs, or lungs Injury to the bowel or bladder Reaction to medications or to the anesthesia that is used"
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "How many days should I stay in the hospital after the cesarean section?What should I expect after the procedure?",
    "answer" : "If you are awake for the surgery, you can probably hold your baby right away. You will be taken to a recovery room or directly to your room. Your blood pressure, pulse rate, breathing rate, amount of bleeding, and abdomen will be checked regularly. If you are planning on breastfeeding, be sure to let your health care provider know. Having a cesarean delivery does not mean you will not be able to breastfeed your baby. You should be able to begin breastfeeding right away. You may need to stay in bed for a while. The first few times you get out of bed, a nurse or other adult should help you. Soon after surgery, the catheter is removed from the bladder. The abdominal incision will be sore for the first few days. Your doctor can prescribe pain medication for you to take after the anesthesia wears off. A heating pad may be helpful. There are many different ways to control pain. Talk to your health care provider about your options. A hospital stay after a cesarean birth usually is 2–4 days. The length of your stay depends on the reason for the cesarean birth and on how long it takes for your body to recover. When you go home, you may need to take special care of yourself and limit your activities."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "Am I going to have any complications due to cesarean delivery?What should I expect during recovery?",
    "answer" : "While you recover, the following things may happen: Mild cramping, especially if you are breastfeeding Bleeding or discharge for about 4–6 weeks Bleeding with clots and cramps Pain in the incision To prevent infection, for a few weeks after the cesarean birth you should not place anything in your vagina or have sex. Allow time to heal before doing any strenuous activity. Call your health care provider if you have a fever, heavy bleeding, or the pain gets worse."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "cesaerean",
    "doctorName" : "Rajasekhar",
    "question" : "I am a 38 weeks pregnant lady.what should I eat before normal delivery?",
    "answer" : "Nothing solid to eat after midnight. You may have clear liquids (water, juice, ) up to four hours prior to your planned Cesarean birth. For further clarification ask the expert."
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