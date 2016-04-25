var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "RUBELLA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Is rubella infection dangerous to fetus?",
    "answer" : "Yes,rubella infection is dangerous to both mother and fetus. If someone is palnning for conception, they should under go tests for antibodies of TORCH profile. Rubella infection in the first trimester causes : 1) Great risk to fetus (embryo resorption and abortion ). 2) Congenital heart disease 3) Eye defects 4) Learning difficulties 5) Deafness"
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "RUBELLA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens if the mother is infected in the first trimester with rubella?",
    "answer" : "Actually, the risk depends on the time of infection: If the mother is infected with rubella in the first trimester. 90% of the babies get infected with severe malformations. So, it is better to terminate the pregnancy in case of infection in the first trimester. If the mother is infected between 12-16 weeks, the severity of infection to baby is lesser than the first trimester but cannot rule out some defects. If the infection is around 25 weeks - term, the transmission is very less."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "RUBELLA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is the course of action if the rubella infection contracted in the first trimester?",
    "answer" : "If the infection has occurred in the first trimester, the fetus is at greater risk of infection. So, it is better to terminate the pregnancy instead of continuing the pregnancy."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "RUBELLA",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How can the mother be treated if she is infected with rubella during pregnancy?",
    "answer" : "Ther is no specific treatment for rubella infection. There is no post exposure prophylaxis ( medicines after the infection ). If your are planning for pregnancy, plan the pregnancy 28 days after vaccination. Rubella vaccine is contraindicated in pregnancy."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "Chicken pox",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How do you catch chickenpox?",
    "answer" : "Chickenpox is spread in the droplets of an infected person breathes, sneezes or coughs out, and in the fluid in the blisters on their skin. It's highly contagious and can easily be caught through close contact with someone who has it, including through: face-to-face contact, such as having a conversation with someone who has chickenpox Contact with the fluid in the blisters of the skin. Contact with items that have recently been contaminated with infected fluid or droplets, such as bedding and clothing. Someone with chickenpox is infectious from about one to two days before the rash develops, until all the blisters have fully crusted over. Pregnant women do not catch this infection easily."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "Chicken pox",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How is chickenpox treated during pregnancy?",
    "answer" : "Your treatment will depend on the stage of pregnancy and your symptoms. If you're pregnant and think you have chickenpox, contact your GP.Chickenpox can cause complications for both the pregnant mother and her baby, so you should get medical advice as soon as possible. You may be offered aciclovir, an antiviral medicine, which should be given within 24 hours of the chickenpox rash appearing. Aciclovir doesn’t cure chickenpox, but it can make the symptoms, such as fever, less severe and help to prevent complications. Aciclovir is usually only recommended if you’re more than 20 weeks pregnant, but in some cases, your doctor may suggest it if you’re less than 20 weeks pregnant. Discuss the risks and benefits with your doctor."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "Chicken pox",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Give me some measures to relieve chicken pox symptoms during pregnancy.",
    "answer" : "To help relieve your symptoms, you can try the following: Drink plenty of fluids. Take paracetamol to lower temperature or help with pain. Use calamine lotion to help relieve any itching."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "Diarrhea",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am suffering from loose motions and I am preganant now. Can I use the drugs to stop them?",
    "answer" : "No, don’t use any drug which stop the loose motions. These drugs stop the motions by decreasing the motility of the bowel but not killing the organisms causing diarrhea. After taking anti-diarrheals ( loose motion controlling drugs ), the infection increases and causes severe abdominal pain. So, instead of taking anti-diarrheals, take ORS (Oral Rehydration Salts ) and plenty of fluids like buttermilk, lemon juice etc..,"
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 24 year old healthy female and I am 8 weeks pregnant . I don't have any bad habits . Why was I tested for HIV?",
    "answer" : "HIV and HepB tests are routinely done for every conceived female. The HIV and HepB spreads through various routes like: 1) Contact with the blood of HIV or HepB infected person ( accidentally without any knowledge ) 2) May be during blood transfusion 3) May be due to sudden prick by syringes or blades or any sharp objects used by Hiv or Hep B infected persons 4) Sexual contact 5) From mother to child (transplacental, breast milk) There are many chances for these viruses to enter your body without your knowledge. To avoid complications to your baby or to you , these tests are routinely done to have safe pregnancy."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can HIV be passed to an unborn baby in pregnancy or through breastfeeding?",
    "answer" : "Yes, it’s possible for HIV to be passed from a woman to her baby: during pregnancy during labour and birth through breastfeeding However, if you receive treatment for HIV during pregnancy and don’t breastfeed your baby, the risk of your baby getting HIV is less. Without treatment, the risk of passing HIV to your baby is high. All pregnant women are offered an HIV test as part of their antenatal screening."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How can HIV transmission to a baby can be prevented?",
    "answer" : "HIV transmission can be prevented when mother takes drugs ( HAART drugs) during pregnancy,during delivery and after delivery : 1) Nevirapine ( anti viral drug ) prior to the delivery. 2) Zidovudine 3) Lamivudine 4) Nelfinavir Prevent breast feeding to child Baby should be given drugs for at least first 6 weeks of life."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What kind of measures can be taken to prevent HIV transmission to baby from mother?",
    "answer" : "Reducing the risk of passing HIV to your baby. If you have HIV, you can reduce the risk of passing it to your baby by: taking combination therapy (also called highly active antiretroviral therapy or HAART) during pregnancy, even if you don’t need HIV treatment for your own health,then bottle feed your baby rather than breastfeeding Don’t breastfeed your baby if you have HIV, because the virus can be transmitted through breast milk."
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Does having a caesarean reduce the risk of passing on HIV?",
    "answer" : "Advances in treatment mean that a vaginal delivery shouldn't increase the risk of a woman passing HIV to her baby if both the following apply: The HIV virus can’t be detected in her blood (an undetectable viral load) her HIV is well managed In some cases, doctors may recommend that a woman has a planned caesarean section before going into labour, to reduce the risk of passing on HIV, for example: If she’s not taking combination therapy If the HIV virus can be detected in the blood (a detectable viral load)"
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How does a mother transmit HIV to her unborn child?",
    "answer" : "HIV-infected mother can infect the child in her womb through her blood. The baby is more at risk if the mother has been recently infected or is in a later stage of AIDS. Transmission can also occur at the time of birth when the baby is exposed to the mother's blood and to some extent transmission can occur through breast milk."
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens before running the HIV test? Can it be kept confidential?",
    "answer" : "The pregnant lady along with the husband are counselled to undergo this test explaining the advantages and disadvantages of the test. If the result is positive, it will be kept confidential and will not be revealed to any one."
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens if a woman has a positive test result?",
    "answer" : "When a woman has a positive test result she should be able to plan with a doctor or midwife what happens next and arrange to have follow-up checks. She will be offered special medical care to reduce the risk of her baby being infected. Some pregnant women with HIV decide to deliver the baby. Others choose to have a termination. The decision to terminate a pregnancy is very personal."
  },
  "17" : {
    "itemNumber" : 17,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What can I do to reduce the risk of passing HIV on to my baby?",
    "answer" : "Take a combination of anti-HIV drugs during your pregnancy as prescribed. Have your baby by cesarean delivery if lab tests show that your level of HIV is high. Take anti-HIV drugs during labor and delivery as needed. Give anti-HIV drugs to your baby after birth. Do not breastfeed. By following these guidelines, 99% of HIV-infected women will not pass HIV to their babies."
  },
  "18" : {
    "itemNumber" : 18,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Why is HIV treatment recommended during pregnancy?",
    "answer" : "Treatment during pregnancy has two goals: 1) to protect your own health, and 2) to help prevent passing HIV to your baby. Many combinations of drugs are used to manage HIV infection. This is called a \"drug regimen.\" Anti-HIV drugs decrease the amount of HIV in the body."
  },
  "19" : {
    "itemNumber" : 19,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Are there any side effects of HIV drugs?",
    "answer" : "Drugs used to treat HIV infection may cause side effects. Common side effects include nausea, diarrhea, headaches, and muscle aches. Less common side effects include anemia, liver damage, and bone problems such as osteoporosis. While unusual, drugs used to treat HIV may affect the development of the fetus. However, not taking medication greatly increases the chances of passing the virus to your baby."
  },
  "20" : {
    "itemNumber" : 20,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Are there extra risks for me if I am HIV positive and I have a cesarean delivery?",
    "answer" : "Having a cesarean delivery may carry extra risks if you are HIV positive. Women with low CD4 cell counts have weak immune systems, so they are at greater risk of infection after surgery. The incision may heal more slowly. Drugs to prevent infection are given during cesarean delivery."
  },
  "21" : {
    "itemNumber" : 21,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "My husband is HIV positive but I am HIV negative. Is there a treatment to prevent me and my future child from HIV infection?",
    "answer" : "There is a treatment called Pre exposure prophylaxis. Pre-exposure prophylaxis (or PrEP) is when people at very high risk for HIV take HIV medicines daily to lower their chances of getting infected. A combination of two HIV medicines (tenofovir and emtricitabine) help prevent an HIV-negative person from getting HIV from a sexual or injection-drug-using partner who’s positive. Barrier methods of contraception is effective inpreventing transmission of the virus."
  },
  "22" : {
    "itemNumber" : 22,
    "subCategory" : "HIV",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can a baby have the HIV test?",
    "answer" : "Yes, but it will not necessarily show whether the baby is infected. This is because the test is for HIV antibodies and all babies born to mothers with HIV are born with HIV antibodies. Babies who are not infected lose their antibodies by the time they are about 18 months old. However most babies can be diagnosed as either infected or uninfected by the time they are three months old by using a different test, called a PCR test (Polymerase Chain Reaction ) . The PCR test is more sensitive than the HIV test, and is not used in the standard HIV testing of adults. It looks for the presence of HIV itself, not antibodies."
  },
  "23" : {
    "itemNumber" : 23,
    "subCategory" : "Hep B",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 28 year old pregnant woman. Why was I tested for Hepatitis B infection? Is there a high probability for a pregnant women to get Hep B?",
    "answer" : "If you test positive for hepatitis B and are pregnant, the virus can be passed on to your newborn baby during delivery. If your doctor is aware that you have hepatitis B, he or she can make arrangements to have the proper medications in the delivery room to prevent your baby from being infected. If the proper procedures are not followed, your baby has a 95% chance of developing chronic hepatitis B."
  },
  "24" : {
    "itemNumber" : 24,
    "subCategory" : "Hep B",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Will a hepatitis B infection affect my pregnancy?",
    "answer" : "Hepatitis B infection should not cause any problems for you or your unborn baby during your pregnancy. It is important for your doctor to be aware of your hepatitis B infection so that he or she can monitor your health and so your baby can be protected from an infection after it is born."
  },
  "25" : {
    "itemNumber" : 25,
    "subCategory" : "Hep B",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "If I am pregnant and have hepatitis B, how can I protect my baby?",
    "answer" : "If you test positive for hepatitis B, then your newborn must be given two shots immediately: first dose of the hepatitis B vaccine one dose of the Hepatitis B Immune Globulin (HBIG). If these two medications are given correctly within the first 12 hours of life, a newborn has more than a 90% chance of being protected against a lifelong hepatitis B infection. You must make sure your baby receives the second and third dose of the hepatitis B vaccine at one and six months of age to ensure complete protection."
  },
  "26" : {
    "itemNumber" : 26,
    "subCategory" : "Hep B",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can I breastfeed my baby if I have hepatitis B?",
    "answer" : "All women with hepatitis B should be encouraged to breastfeed their newborns. he benefits of breastfeeding outweigh the potential risk of infection, which is minimal. In addition, since it is recommended that all infants be vaccinated against hepatitis B at birth, any potential risk is further reduce"
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
  qanda.category = "Pre Natal";
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);module.exports = function() {
  return qAndAModels;
};