var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am a 24 years old married female.When I went to a doctor to consult, I was asked about my date of last period.Why is it necessary?",
    "answer" : "When you consult an obstetrician( doctor dealing with the pregnancy) doctor to know about your pregnacy, you will be asked about the date of your LMP. Date of LMP- the first day of last menstrual period. This gives you information about your rough gestational age and the time of your expected date of delivery ( EDD) in obstetrics."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How does the doctor know about the expected date of delivery(EDD)?",
    "answer" : "Prior to this, doctor asks you about your LMP (the first day of last menstrual period), according to which the EDD (Expected Date of Delivery) is calculated. Add 9 months + 7 days to your LMP to get EDD . This is called as Naegel's rule."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 27 years old, my periods delayed by two weeks. Is it a sign of pregnancy?",
    "answer" : "Delay in the menstrual period need not necessarily be a sign of pregnancy. It can also be due to other reasons like Hypothyroidism or Excessive exercise or Excessive weight loss or Stress or Pituitary gland disorders or Polycystic ovarian disease ( ovary disease )or Infections or Tumours or Psychoses or Drugs or oral contrraceptive pills etc.., It is better to consult doctor and first rule out the pregnancy."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How can I take a pregnancy test myself?",
    "answer" : "For the urine pregnancy tests, strip test is available. After getting one, release some drops of urine in a window over the strip and wait for some time. If you get two red lines then it is positive. If you get only one line, then it is negative."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "When can I check myself for pregnancy?",
    "answer" : "The ideal time to check for pregnancy is on the 1st day of missed period. if you use urine pregnancy kit. For the test to be positive, you need 20 mIU/ml volume of HCG in urine."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I was told to get my antenatal check up. What is the meaning of ante natal and post natal?",
    "answer" : "Ante natal is a period starting from the time of conception to the time before delivery. Post natal is a period starting from the time after delivery till the woman starts menstruation"
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is the ideal weight gain during pregnancy?",
    "answer" : "The weight gain by the end of pregnancy is 11 to 12 kgs. The mother should be with in the normal limits of BMI ( Body Mass Index) before conception."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am a 19 year old married woman. I am weighing 40 kgs. Is this weight suitable for conception?",
    "answer" : "First you need to calculate your BMI (Body Mass Index ) based on your height. BMI = Weight in Kg / (Height in metres × Height in metres). If your BMI is with in the limits of 19 to 24.9 kg/m², then your weight is suitable for pregnancy."
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens if I am underweight prior to conception?",
    "answer" : "If the mother is underweight or has BMI under 19 kg/m², there are chances for baby also to be under weight or miscarriage or perinatal deaths of foetus or foetal growth restriction."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Does it carry any risk for pregnancy when a woman is overweight?",
    "answer" : "Yes , there is a risk for pregnancy if a woman is weighing more than normal. As the woman puts on more weight during pregnancy, she is more prone to diseases like Gestational diabetes ( increased sugar levels in the blood), Pregnancy Induced Hypertension, Eclampsia ( fits during pregnancy). There are chances of obstructed labour due to the bigger size of baby. There is an increased risk of miscarriage and congenital foetal abnormalities."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "My name is subha. I am married and anxious to conceive. I missed my date yesterday. How do I know whether I am pregnant?",
    "answer" : "The symptoms are: Missed period, Positive Urine pregnancy test , Increased serum hcg ( Human Chorionic gonadotropin), Easy fatiguability, frequent urination, breast tenderness, nausea, vomiting , increased sleep, morning sickness. Check yourself with the urine pregnancy test kit."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What laboratory tests does a doctor suggest in the first visit of pregnancy?",
    "answer" : "In the first visit , you are advised to undergo 1) Urine pregnancy test 2) serum hcg 3) CBP (Complete blood picture ) 4) Thyroid profile 5) Blood glucose levels 6) Complete urine examination 7) TORCH profile ( Toxoplasmosis, Rubella, Cytomegalo virus, Herpes simplex virus ) 8) Blood grouping 9) HIV & HBsAg 10) Ultra sound scan 11) Syphilis"
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is a TORCH Profile? And why is it done?",
    "answer" : "TORCH profile is a list of tests to check the presence of antibodies of diseases like Toxoplasmosis, Rubella, cytomegalo virus, Herpes simplex virus . The antibodies include IgG & IgM which detect the presence of active and past diseases. These diseases may infect the foetus and may cause malformations."
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Today I was informed that I conceived. When can I have my ultrasound scan?",
    "answer" : "In the first trimester, USG (ultra sono graphy ) can be done between 11 and 14 weeks. This scan is called as Dating scan which gives information about correct gestational age."
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What can be seen in ultrasound scan in the first trimester?",
    "answer" : "This scan is also called as Dating scan which gives information about the gestational age ( days of pregnancy ). Along with this, other things are: 1) Neural tube defects ( related to brain , spinal cord defects ) 2) multiple pregnancy (more than one fetus ) 3) Growth of fetus 4) Amniotic fluid ( the fluid surrounding the fetus in the womb )"
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How can we estimate the correct gestational age?",
    "answer" : "The best way to estimate the correct gestational age is to do ultrasound scan before 12 weeks of gestation by measuring the crown -rump length ( CRL: from head to saccrum). Between 12-20 weeks it is estimated by measuring the biparietal diameter of the fetus (a parameter in skull). The gestational age cannot be predicted beyond 20 weeks by ultra sound scan."
  },
  "17" : {
    "itemNumber" : 17,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is TRIPLE marker test?",
    "answer" : "Triple marker test is a combination of tests to detect the levels of 3 components.They are: 1) Alpha feto protein 2) Beta hcg 3) unconjugated estriol. This test is done to detect neural tube defects,downs syndrome in the baby."
  },
  "18" : {
    "itemNumber" : 18,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is a Quadruple test?",
    "answer" : "Quadruple test is done to detect the levels of 4 componenets. They are: 1) Alpha feto protein 2) Beta hcg 3) unconjugated estriol 4) Inhibin A This test is done to detect neural tube defects,downs syndrome in the baby."
  },
  "19" : {
    "itemNumber" : 19,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Now I am 25 weeks pregnant. Can I under go triple marker test?",
    "answer" : "The correct time to do quadruple test is between 15-20weeks of gestation. So, there is no significance in undergoing triple marker test at 25 weeks of gestational age."
  },
  "20" : {
    "itemNumber" : 20,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Is it necessary to undergo quadruple test?",
    "answer" : "Quadruple test is done to assess fetus status like : 1) Neural tube defects 2) Presence of Down's syndrome ( presence of extra chromosome ) 3) Intra uterine fetal death 4) Abdominal wall defects 5) Renal anomalies This test is done between 15-20 weeks of gestation. So, it is better to undergo this test to rule out the risk factors to baby. The positive test will be confirmed by the amniocentesis. NOTE: The negative test donot rule out the presence of anomalies"
  },
  "21" : {
    "itemNumber" : 21,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is alpha feto protein?",
    "answer" : "Alpha feto protein is a protein produced by yolksac and liver of the fetus . This is measured to rule out the anomalies of the baby. Normally, AFP level peaks in the fetal serum up to 13 weeks and reduces there after. In mother's serum , AFP level increases up to 32 weeks and reduces. There will be low levels of AFP in maternal serum when compared to fetal serum. If AFP level is more in maternal serum, then it is an indicator of anomalies of the fetus."
  },
  "22" : {
    "itemNumber" : 22,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "When I was 18 weeks pregnant, I was asked to take shots of DPT. What does this mean?",
    "answer" : "DPT means Diphtheria, Pertussis, Tetanus. This vaccine protects the baby in the initial weeks of birth. It is given in the form of toxoids and killed vaccines. As they are inactivated, they do not cause any harm to fetus. The shots are given between 16-24 weeks of pregnancy intramuscularly."
  },
  "23" : {
    "itemNumber" : 23,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What kind of vaccines a pregnant woman should avoid?",
    "answer" : "The pregnant women should avoid live vaccines like MMR, HPV, Typhoid vaccine,chicken pox vaccine, yellow fever vaccine,live attenuated influenza vaccine,Hep A vaccine. The pregnant women can take killed vaccines like TdaP, Rabies, Trivalent inactivated influenza vaccine, Hep B vaccine."
  },
  "24" : {
    "itemNumber" : 24,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the symptoms of miscarriage in the early pregnancy period?",
    "answer" : "The symptoms of miscarriage in the early pregnancy are : 1) Severe abdominal pain 2) Heavy bleeding per vagina 3) Weight loss 4) Fever 5) Severe dizziness When ever these symptoms arise, consult your doctor immediately without any delay."
  },
  "25" : {
    "itemNumber" : 25,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Iam 32 weeks preganant. Can I sleep on my back?",
    "answer" : "As the size of the uterus grows on increasing , it compresses two of major blood vessels like vena cava and aorta. This decreases the blood flow from uterus to heart due to which the woman experiences light headedness , dizziness and fatigue. In the first or second trimester, you can sleep on your back. But in the third trimester it is good to sleep on left lateral side or right lateral side."
  },
  "26" : {
    "itemNumber" : 26,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Is it possible to get pregnant inspite of getting periods?",
    "answer" : "The absolute sign of pregnancy is stoppage of periods. The ovum (egg ) released by a female will be fertilised by sperm released by male to form a zygote. Hence, no ovum is released after this process. So there is no chance of getting periods when a female is pregnant. Sometimes , there is a possibility of spotting after the conception but it is not menstruation."
  },
  "27" : {
    "itemNumber" : 27,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Does eating papaya prevent pregnancy?",
    "answer" : "Eating papaya neither prevent pregnancy nor cause abortion. There are no studies to prove that papaya is dangerous for pregnancy. The white thick gummy fluid ( milk like ) discharge from the leaves or fruit may cause abortion when it comes in contact with vagina or vaginal walls."
  },
  "28" : {
    "itemNumber" : 28,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 24 year old and 35 weeks pregnant woman. Is a flight journey safe for me?",
    "answer" : "35 weeks is too late for air travel. 32 weeks is the maximum gestational age to carry on flight journeys"
  },
  "29" : {
    "itemNumber" : 29,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 28 year old and 28 weeks pregnant. Now a days,I am hearing my own heart beat and feeling dizzy inspite of taking food. What could be the possible reasons?",
    "answer" : "During pregnancy, the diaphragm is elevated consequent to enlarged uterus. The heart is pushed outwards and upwards with slight rotation to the left.Some times, this causes palpitation ( awareness of one's own heartbeat ). Apart from this , the blood pressure decreases during pregnancy, It may cause dizziness. or There could be other problems like heart disease or thyroid disease or pulmonary disease. Consult your doctor to exclude the diseases"
  },
  "30" : {
    "itemNumber" : 30,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 10 weeks pregnant lady. I am urinating atleast 15 times a day. Is this something which I should be apprehensive?",
    "answer" : "The bladder lies below the uterus. During pregnancy, the size of the uterus increases in size and increases pressure over the urinary bladder. Due to this, the urge to urinate frequently also increase. This inconvenience remains only up to 12 weeks.After that, the symptom slowly disappears."
  },
  "31" : {
    "itemNumber" : 31,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the signs of previous child birth?",
    "answer" : "The abdominal wall becomes more lax and loose. There may be presence of scar in the lower abdomen in case of C-section. A pigmented line in the middle of the lower abdomen. Silvery white striae may be present . Breasts become flabby and nipples become prominent who breast fed the infant. Uterine wall is less rigid and the contour of the uterus is broad and round rather than ovoid. Vagina becomes more roomy."
  },
  "32" : {
    "itemNumber" : 32,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Hi, I am a 25 year old female.I have the habit of smoking.Does smoking has any effect on pregnancy?",
    "answer" : "Smoking should be quit during pregnancy.Smoking : 1) reduces the growth rate of baby 2) may cause still birth 3) Lungs and heart of baby may not function properly 4) Weight of the baby may decrease. 5) Increases the chance of abortion"
  },
  "33" : {
    "itemNumber" : 33,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "When do fetal movements start during pregnancy?",
    "answer" : "Perception of fetal movements is called as 'QUICKENING'. It starts at about 16-18 weeks of pregnancy."
  },
  "34" : {
    "itemNumber" : 34,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How can we assess the fetal well being based on fetal movements?",
    "answer" : "Fetal movements or baby 'kicks' gives the information about fetal health. The number of fetal movements should not be less than 10 in 12 hours. Fetal anomalies,fetal sleep,drugs,smoking,less oxygen, more quantity of amniotic fluid , obesity…etc decrease the fetal movements. The reduced levels of sugar in the mother blood may increase the fetal movements."
  },
  "35" : {
    "itemNumber" : 35,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is the best time to travel during pregnancy?",
    "answer" : "The best time to travel during pregnancy is your second trimester. It is safe to avoid travelling beyond 35 weeks. If it is on the land ,take train journeys instead of road journeys."
  },
  "36" : {
    "itemNumber" : 36,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 29 year old and 36 weeks pregnant woman. My feet are swollen from the past 20 days. Is it a common phenomenon or a disease?",
    "answer" : "By the end of pregnancy 80% of healthy women will have some degree of oedema ( swelling). T his is associated with a fall in plasma albumin (a protein which maintains balance between the intracellular and extracellular tissues) concentration and reduced venous return (decreased blood flow from the lower part of the body to heart). Severe and rapid onset of oedema, especially affecting hands and face, may herald pre-eclampsia and warrants further assessment"
  },
  "37" : {
    "itemNumber" : 37,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What measures can I take to prevent vomiting during pregnancy?",
    "answer" : "Nausea and vomiting are common during pregnancy. These symptoms subside by the end of first trimester in majority of cases. But in some cases , they may last up to second or third trimester. To lessen this ,you can follow these tips: 1) Moving your legs and hands before rising from the bed 2) Taking biscuit before rising from bed 3) Avoid liquid foods and fatty foods in empty stomach 4) Taking plenty of glucose drinks....etc. 5) Avoiding quick movements while raising from the bed"
  },
  "38" : {
    "itemNumber" : 38,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is hyperemesis gravidarum?",
    "answer" : "Hyperemesis gravidarum is a severe type of vomiting in pregnancy with weight loss, dehydration which inhibits the mother from doing daily routine activities. In this condition the patient has to be taken to hospital immediately."
  },
  "39" : {
    "itemNumber" : 39,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What should I expect from my first prenatal checkup?",
    "answer" : "The following will be done in your first prenatal check up. A detailed medical history review A blood and urine test to confirm you are pregnant and estimate your due date A general physical health exam to examine weight, blood pressure, heart, lung, pelvic, and breast, health A blood test to check for things like anemia, existing STDs, and antibodies to rule out any genetic disorders A urine test to check for infection, as well as measure sugar and protein levels A discussion about your nutrition and lifestyle, and to answer any questions you might have about your pregnancy"
  },
  "40" : {
    "itemNumber" : 40,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am a healthy and hygeinic female prior to pregnancy. I used to eat well. Why did I get heart burn during pregnancy?",
    "answer" : "Due to the harmones released during pregnancy, the sphincter ( a valve ) in the lower end of the oesophagus (food pipe ) gets relaxed. Because of this, the acid secreted in the stomach enters in to the oesophagus and causes heart burn."
  },
  "41" : {
    "itemNumber" : 41,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What precautions can I take to prevent heart burn?",
    "answer" : "Eat food in small quantities at regular intervals. Avoid foods which aggrevate heart burn like spicy foods., take a walk after meals, keep your head and chest at elevated positions. Use drugs like ranitidine only if advised by your doctor. Don't use the medications containing pantaprzole, cimetidine.Omeprazole . How ever if you have severe heart burn, consult your doctor."
  },
  "42" : {
    "itemNumber" : 42,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Are there any workplace hazards during pregnancy?",
    "answer" : "Whilst most women can safely continue to work in pregnancy, certain jobs may require more caution. Work considered hazardous include: Dealing with substances like pesticides, insecticides and certain chemicals Contact with radiation Exposure to hydrocarbon solvents like dry-cleaning fluids, lead or mercury."
  },
  "43" : {
    "itemNumber" : 43,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is Pre mature rupture of membranes?",
    "answer" : "The fetus in the uterus is covered by a sac like structure with fluid. This sac is not ruptured until the labor pains begin. But some times the sac may rupture without the completion of term. This leads to leaking og fluid from vagina , which may cause distress to fetus and also may lead to death."
  },
  "44" : {
    "itemNumber" : 44,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What should I do before I get pregnant to ensure a healthy pregnancy for me and my baby?",
    "answer" : "To have a safe and healthy pregnancy, you should start taking care from 3 months before pregnancy. See your doctor for a prepregnancy checkup. Don't forget to ask about things like family medical history, risk of birth defects, genetic conditions, and chronic illnesses. Discuss all the medications you take and make sure they're safe during pregnancy. In addition to eating a healthy diet (lots of leafy greens, lean proteins, and fiber), boost your nutrients with a multivitamin specially formulated for pregnancy -- usually called a prenatal vitamin. It's particularly important to get sufficient folic acid before getting pregnant. This nutrient helps prevent birth defects like spina bifida; because many of these conditions arise very early in pregnancy, you need healthy levels of folic acid right from the start. Look for a multivitamin that contains 400 micrograms of folic acid. If you smoke, quit. Smoking poses a host of risks to a developing baby, including birth defects and low birth weight. It also doubles your risk of having an ectopic pregnancy. You may also find it more difficult to become pregnant in the first place if you smoke, as smoking is strongly linked with infertility in both women and men Get checked for hepatitis B and C, sexually transmitted infections, and HIV. Get any health problems -- like diabetes and high blood pressure -- under control. If you are seriously overweight, talk to your doctor about how to maintain a healthy weight"
  },
  "45" : {
    "itemNumber" : 45,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am pregnant from the past 24 weeks. Is it possible for me to have twins?",
    "answer" : "It is possible to have twins. The chances are high if the twin pregnancy is running in your families. The chances are low if you don’t have any genetic predisposition."
  },
  "46" : {
    "itemNumber" : 46,
    "subCategory" : "prenatal",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can I have cervical sreening during pregnancy?",
    "answer" : "Commonly, the cervical screening is recommended for the normal women between the age of 25 and 50 for every three years. It is good to avoid cervical screening during pregnancy because 1) It is not going to give correct details about the cell structure in the cervix. It is better to have a cervical screening prior to your conception or three months after your delivery."
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
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};