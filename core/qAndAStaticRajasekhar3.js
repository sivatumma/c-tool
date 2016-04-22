var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How do I know I am ready for giving birth? What happens when labor begins?",
    "answer" : "As labor begins, contractions of the uterus starts , the cervix opens (dilates). The uterus, which contains muscle, contracts at regular intervals. When it contracts, the abdomen becomes hard. Between the contractions, the uterus relaxes and becomes soft. Up to the start of labor and during early labor, the baby will continue to move. Certain changes also may signal that labor is beginning. You may or may not notice some of them before labor begins. For further clarification, consult a doctor."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "When I was in 38 weeks of gestation, I felt some relief in my chest. Why did I get that relief?",
    "answer" : "Feeling as if the baby has dropped in to the lower segment of the uterus is called as \"Lightening\". This is known as the “baby dropping.” The baby’s head has settled deep into your pelvis.This diminishes the fundal height and hence minimizes the pressure on the diaphragm . The mother experiences a sense of relief from the mechanical cardiorespiratory embarrassment. This occurs from a few weeks to a few hours before labor begins. For further clarification, consult a doctor."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What is the thick fluid in the vagina which I felt before the labour starts?",
    "answer" : "Increase in vaginal discharge (clear, pink, or slightly bloody) is called as \"Show\". A thick mucus plug has accumulated at the cervix during pregnancy. When the cervix begins to dilate, the plug is pushed into the vagina. Several days before labor begins or at the onset of labor"
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "I am 37 weeks pregnant. I experienced pains and hurried to hospital but when I reached hospital pains stopped. I am very much about this since it is my first pregnancy. Why did this happen?",
    "answer" : "Your uterus may contract off and on before \"true\" labor begins. These irregular contractions are called false labor or Braxton Hicks contractions. They are normal but can be painful at times. You might notice them more at the end of the day."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What is the frequency of contractions in true and false labour pains?",
    "answer" : "In false labour Often are irregular and do not get closer together (called Braxton Hicks contractions) In true labour Come at regular intervals and, as time goes on, get closer together. Each lasts about 30–70 seconds."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Are my labour pains going to subside if I walk?",
    "answer" : "In false labour Contractions may stop when you walk or rest, or may even stop with a change of position In true labour Contractions continue, despite movement"
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What is the difference between the intensity of contractions in true and false labour pains?",
    "answer" : "In false pains Usually weak and do not get much stronger (may be strong and then weak) In true pains, contractions Increase in strength steadily."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What is the site of pain during labour pains?",
    "answer" : "In false pains, pains are usually felt only in the front of abdomen and thighs. In true pains, pains usually start in the back and moves to the front"
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How can I differentiate between true labour pains and false labour pains?",
    "answer" : "False labor contractions are less regular and not as strong as true labor. Sometimes the only way to tell the difference is by having a vaginal exam to look for changes in your cervix that signal the onset of labor. One good way to tell the difference is to time the contractions. Note how long it is from the start of one contraction to the start of the next one. Keep a record for an hour. It may be hard to time labor pains accurately if the contractions are slight."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What is an “elective” delivery?",
    "answer" : "An elective delivery is performed for a nonmedical reason. Some nonmedical reasons include wanting to schedule the birth of the baby on a specific date or living far away from the hospital. Some women request delivery because they are uncomfortable in the last weeks of pregnancy. Some women request a cesarean delivery because they fear vaginal birth."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What are the risks for babies born before 39 weeks?",
    "answer" : "Babies who are born before 39 weeks may not be as developed as those who are born after 39 weeks. These babies are called as premature babies.Because they may be less developed, they may have an increased risk of short-term and long-term health problems. Some of these problems can have lasting effects."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What health problems are possible for babies born too early?",
    "answer" : "The following health problems are possible in babies who are born too early: Breathing problems, including respiratory distress syndrome Temperature problems—Babies born early may not be able to stay warm. Feeding difficulties High levels of bilirubin—Too much bilirubin can cause jaundice. In severe cases, brain damage can result if this condition is not treated. Hearing and vision problems Learning and behavior problems"
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Why is it not a good idea to have an elective labor induction or cesarean delivery before 39 weeks?",
    "answer" : "Health care professionals recommend that unless there is a valid health reason or labor starts on its own, delivery should not occur before at least 39 weeks. If you have a cesarean delivery or labor induction for a medical reason, it means that the benefits of having the baby early outweigh the potential risks. But when they are done for a nonmedical reason, the risks—both to you and to the baby—may outweigh the benefits. When your pregnancy is normal and healthy, it should continue for at least 39 weeks, and it is preferable for labor to start on its own."
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What are the risks associated with induced labor?",
    "answer" : "When labor is induced, there is an increased chance of infection, uterine rupture, and hemorrhage (life-threatening bleeding) compared to when labor starts on its own. Labor induction also may increase the likelihood of having a cesarean delivery, especially if you are giving birth for the first time and if your cervix is not ready for labor."
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What are the risks associated with cesarean delivery?",
    "answer" : "Cesarean delivery is major surgery. Like all surgical procedures, it has risks, including infection, hemorrhage, and problems related to the anesthesia used. An elective cesarean delivery may pose additional risks if you plan to have more children. With each cesarean delivery, the chance that you will have a serious complication—including uterine rupture and needing a hysterectomy at the time of delivery—increases."
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What are my alternatives to having an elective delivery before 39 weeks?",
    "answer" : "If you are considering an elective delivery before 39 weeks, it is important to discuss the potential risks and benefits with your health care provider as well as your reasons for requesting this type of delivery. If discomfort is a reason, it may help to know that it is normal to feel uncomfortable at the end of pregnancy. Your health care provider may be able to suggest ways to help you feel better. If you live far away from the hospital, you might want to stay with someone who lives closer."
  },
  "17" : {
    "itemNumber" : 17,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "I think that I am in labor. When should I call my health provider?",
    "answer" : "Your prenatal care provider will instruct you on when to call the office if you think that you are in labor. Most providers will suggest that you contact the office if you have been having contractions every five minutes for one hour, have broken your bag of water (this may be a huge gush or a constant trickle), or if you have heavy bleeding similar to that of a period. Please call your prenatal care provider if you have any questions regarding the safety of you or your baby."
  },
  "18" : {
    "itemNumber" : 18,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What are the actual signs of true labour?",
    "answer" : "If you are beyond 37 weeks of pregnancy, the following are signs of true labor: • Painful uterine contractions occurring at least every five minutes and lasting 30 to 45 seconds. • Contractions starting far apart and gradually getting closer. • Eventually, contractions getting much stronger and lasting longer. • Contraction pain often starts in the back and moves to the front. • Walking makes the contractions feel stronger. • Contractions disturb your train of thought, conversation and activity. • The cervix is dilated and effaced and continues to change with contractions."
  },
  "19" : {
    "itemNumber" : 19,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What are the actual signs of false labour?",
    "answer" : "If you are beyond 37 weeks of pregnancy, the following are signs of false labor: • Contractions occur at irregular intervals. • No real change in contraction frequency. • No change in contraction length and strength. • Pain usually in the front and varies in intensity. • Walking slows down contractions. • Contractions do not disturb your normal conversation, train of thought or activity. • No change in dilation or effacement of cervix after one to two hours of observation"
  },
  "20" : {
    "itemNumber" : 20,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How does a doctor monitor the fetus? What is fetal monitoring?",
    "answer" : "Fetal monitoring is defined as watching the baby’s heart rate for indicators of well-being during labor and birth or in some instances during antenatal testing such as a Non-Stress Test (NST ). There are different ways to monitor your baby including the use of an electronic fetal monitoring, telemetry, or a doptone (used during your prenatal visit to asses the fetal heart rate). Telemetry monitoring is like Electronic Fetal Monitoring, except one can maintain mobility including ambulation outside of your room."
  },
  "21" : {
    "itemNumber" : 21,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "When can I ask for an epidural? How soon will I get it?",
    "answer" : "While the decision lies with each individual care provider, most will recommend waiting to get an epidural until you are between three and five centimeters dilated. It takes a few minutes to get the epidural placed and another few minutes for you to feel relief. Complete pain relief may take 10 to 20 minutes or more. For further clarification, ask your doctor."
  },
  "22" : {
    "itemNumber" : 22,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Can I change my birth plan?",
    "answer" : "Absolutely! Your birth plan is important and is used as a guide for those caring for you and it can always be changed. Flexibility is the key to a successful birth plan both for the laboring woman, her partner, and for the caregivers."
  },
  "23" : {
    "itemNumber" : 23,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "I am so afarid of the labour.Why does labour cause pain ?",
    "answer" : "Once the process of labour begins, the uterus tries to push the baby downwards to the pelvis and tries to expel the baby out. The uterine muscle contracts & relaxes resulting in pushing the baby down. These contractions like a vigorous exercise are responsible for pain."
  },
  "24" : {
    "itemNumber" : 24,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "I was told that I will be given anaesthesia. How does the labour progress if there is no pain ?",
    "answer" : "The common misbelief with labour analgesia is that if the labouring woman doesn’t get pain, how will she progress towards normal delivery. Pain reducing techniques block the pain produced by uterine contractions. They do not reduce intensity & frequency of contractions. Thus, it does not have bad effect on progress of labour."
  },
  "25" : {
    "itemNumber" : 25,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "I want to know few things about epidural anaesthesia. What is epidural anaesthesia ?",
    "answer" : "Epidural analgesia is a technique in which local anaesthetic agent is placed around the nerves supplying the uterus & birth canal. It thus stops the pain associated with contractions, dilatation of cervix and distension of birth canal. The patient is still aware of contractions of the uterus. Patient is awake & in control of labour as the drugs used for the technique has no sedating effect on the mother & baby."
  },
  "26" : {
    "itemNumber" : 26,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Who gives me epidural anaesthesia?",
    "answer" : "A qualified anaesthetist specialized in the technique of labour analgesia will do the procedure of insertion of catheter and will be with you in the labour ward till you deliver. Pain relieving injections will be given as per your demand."
  },
  "27" : {
    "itemNumber" : 27,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What does an anaesthetist or doctor do prior to Epidural analgesia?",
    "answer" : "Detail history is taken & examination carried out by anaesthetist to rule out risk factors if any. Anaesthetist may ask for certain blood test if required. Consent is taken. Procedure is explained to the patient."
  },
  "28" : {
    "itemNumber" : 28,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "What can I expect from Epidural or Spinal Analgesia?",
    "answer" : "Pain relief from Epidural or Spinal analgesia is usually more complete and intense as compared to the other forms of labor analgesia. Most women notice a pressure sensation with their contractions; this pressure sensation is an important mechanism that keeps labor progressing. With the concentrations of local anesthetics and adjuvants used for epidural analgesia labouring woman can ambulate. There is no weakness or numbness in legs."
  },
  "29" : {
    "itemNumber" : 29,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How much time does it take to recover from epidural anaesthesia?",
    "answer" : "Continuous Epidural anaesthesia can usually be made to last as long as your labor lasts. Injections will be effective depending on the characteristics of the drug injected. Without the use of the catheter, they cannot be repeated without replacement of a needle. Toward the end of labor - when the birth of the baby is close at hand and discomfort is more intense - additional medication or techniques may be needed. The drugs given through the epidural take 15 to 20 minutes to act. The effect lasts for up to one and a half hour after which the drugs are continuously topped up through the epidural catheter to keep you pain free throughout your labour."
  },
  "30" : {
    "itemNumber" : 30,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Are there any other advantages of epidural anaesthesia?",
    "answer" : "Apart from pain relief, epidural anaesthesia increases blood supply to the baby and improves its well-being. This is very important in cases where the blood supply to the baby is compromised e.g. High blood pressure in mother, Growth restricted babies etc. Epidural analgesia is known to shorten duration of labour. Studies have also shown that the caesarean delivery rate is reduced. If a patient requires emergency caesarean section, anaesthesia can be given through the same catheter without additional pricks. In case of dire emergency, the anaesthetist is always available at the very instant to undertake emergency measures."
  },
  "31" : {
    "itemNumber" : 31,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Does the epidural anaesthesia affect my baby? ?",
    "answer" : "The doses of medication typically used in labor analgesia usually do not cause any noticeable effect in your baby’s Apgar scores or behavior. The Spinal and Epidural techniques use very small doses of medications; the local and IV techniques use larger doses. Your body will have essentially eliminated these medications before your breasts begin producing milk for breast feeding."
  },
  "32" : {
    "itemNumber" : 32,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Does the injection given as epidural anaesthesia affect my back?",
    "answer" : "Epidural analgesia is not responsible for backache. The reason for backache in a woman after delivery is laxity of ligaments, change in the curvature of back, laxity of abdominal muscles, lack of calcium in diet / supplement. These are wrongly attributed to the injection in the back. Several studies have shown that epidural analgesia does not cause backache. Epidural anesthesia or analgesia provides relief or reduction of labor pain without affecting the mother’s mental state. It enables an exhausted mother to relax or sleep during labor and calms the woman who is anxious and tense because of pain. Once an epidural catheter is in place, additional medication can easily be administered as needed, providing prolonged and consistent pain relief."
  },
  "33" : {
    "itemNumber" : 33,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Will the epidural harm my baby?",
    "answer" : "No, not at all. A properly administered epidural improves blood supply to the baby. Maternal and foetal acidosis is also reduced as the mother doesn't have to go through the stress of a painful labour."
  },
  "34" : {
    "itemNumber" : 34,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "How quick is the effect of the epidural?",
    "answer" : "The drugs given through the epidural take 15 to 20 minutes to act. The effect lasts for up to one and a half hour after which the drugs are continuously topped up through the epidural catheter to keep you pain free throughout your labour."
  },
  "35" : {
    "itemNumber" : 35,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Will I be totally numb?",
    "answer" : "We do not completely block sensations as the patient needs some power to push and participate in labour. You will be able to move your lower body as before the epidural."
  },
  "36" : {
    "itemNumber" : 36,
    "subCategory" : "Labour",
    "doctorName" : "Raja Sekhar",
    "question" : "Will it be painful after the delivery?",
    "answer" : "After the delivery the pain intensity is much less and is well taken care of by routine analgesics like paracetamol or diclofenac tablets ( pain killers )."
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