var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is MTP?",
    "answer" : "MTP is Medical Termination of Pregnancy done only by registered practitioners at registered places according to the rules given by MTP act 1971."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am 17 year old indian female. But I was not married and had unprotected sex. I missed my period and want to abort this. How can I proceed now without informing the parents?",
    "answer" : "According to MTP (Medical Termination of Pregnancy ) act 1971, any one below 18 years age cannot have MTP on their own . They need consent from the parents or guardians. So, it will be wise to inform to your parents to have MTP."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am a 27 year old married woman and I am in 26 weeks of pregnancy. Due to unexplained problems, I want to discontinue it. Can I have this?",
    "answer" : "According to MTP (Medical Termination of Pregnancy ) act 1971, aborting the pregnancy cannot be done beyond 20 weeks of pregnancy unless there is a risk to life of mother or fetus or fetal anomalies. Terminating pregnancy beyond 20 weeks of gestational age is dangerous to mother's life."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I heard that I can terminate the pregnancy myself instead of consulting a doctor. Can I do it myself?",
    "answer" : "Termination of pregnancy by self is a dangerous thought and may lead to serious health hazards. When you want to terminate your pregnancy,consult an obstetrician and gynaecologist ( doctor who deals with the pregnancy and female reproductive system diseases ). Based on your gestational age , your age and your health status, the doctor advises you the best solution."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Which doctor should I visit in case I wish to undergo an abortion?",
    "answer" : "You should visit your gynecologist or a doctor trained and competent enough to conduct an abortion."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Which is better – medical abortion or surgical abortion?",
    "answer" : "The choice between medical abortion and surgical abortion depends on the duration of pregnancy and individual preference. Surgical abortion can be done in a single visit, while medical abortion requires multiple visits. On the other hand, the usual risks of surgery can be avoided with medical abortion."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is Spontaneous Abortion?",
    "answer" : "Spontaneous abortion occurs without any intervention by any women or doctor. This occurs due to defects in the either fetus or woman reproductive system. These include chromosomal or genetic or defects in the uterine wall which is not able to support a pregnancy."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is incomplete abortion?",
    "answer" : "Some of the pregnancy tissues have been expelled, while other tissue remains in the uterus. It is important that even if abortion has occurred at home, a doctor must be consulted to ensure that abortion is complete i.e., all pregnancy tissues are expelled."
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is the difference between a medical abortion and a surgical abortion?",
    "answer" : "Terminating pregnancy with help of pills and medications is medical abortion. It is a non-surgical method which must be done under supervision of a physician. Surgical abortion is a medical procedure conducted under general anesthesia to clean the uterine cavity with special instruments. In medical terminology, it is termed as suction evacuation which is then followed by curettage (sealing off the cut blood vessels inside the uterus to reduce bleeding)"
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Difference between I-Pill and Abortion Pill?",
    "answer" : "I-pill is a single-pill emergency contraceptive that offers the woman, an effective way to prevent an unplanned pregnancy after having unprotected sex. The pill prevents conception. I-pill is ineffective if the pregnancy is established, it is therefore NOT an abortion pill. The abortion pill is a medicine that ends an early pregnancy. It should be taken only after the pregnancy is confirmed. Abortion pills are available in combination of pills Mifepristone and Misoprostol. These prevent the pregnancy from advancing and should be strictly taken under medical supervision."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Is abortion legal in India?",
    "answer" : "Yes. The Medical Termination of Pregnancy (MTP) Act, enacted in 1971 legalizes abortion in India up to 20 weeks if it fulfills the following conditions: • Performed by a registered medical practitioner as defined in the MTP Act • Performed in a place approved under the Act • Other requirements such as gestation period, consent and opinion of registered medical practitioners are fulfilled. Abortion can be legally performed up to 12 weeks gestation on prescription by one medical doctor and abortion performed up to 20 weeks gestation with concurrence of two medical doctors."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Does a woman require a written consent of her husband to get an MTP done?",
    "answer" : "A woman can give her own consent if she is above 18 years of age, she does not require the consent of her husband"
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Is abortion confidential in India?",
    "answer" : "Yes. The health facility is required to maintain admission register recording all details of the woman accessing the abortion services. The Medical Termination of Pregnancy Act, 1971 makes provision for the admission register to be a secret document and the information contained therein is not be disclosed to any person, except under the authority of law."
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens in a medical abortion?",
    "answer" : "Medical abortion is done by using a combination of two pills -Mifepristone and Misoprostol, which end the pregnancy. These pills have to be administered orally. A woman has to swallow a dose of mifepristone. Between five to seven days she returns and inserts suppositories of misoprostol into her vagina. The pregnancy usually ends at home within four hours. The embryo and other tissue that develops during pregnancy are passed out through the vagina. This method has high success rate upto 95%."
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How is surgical abortion done?",
    "answer" : "Surgical abortion is done with the help of a suction vacuum aspirator under local anesthesia. This consists of removing the fetus or embryo, placenta, and membranes by suction using a manual syringe. Dilation and curettage(D&C), the second most common method of surgical abortion, is a standard gynecological procedure performed for a variety of reasons, including examination of the uterine lining for possible malignancy, investigation of abnormal bleeding, and abortion. From the 15th week of gestation until approximately the 26th, other techniques are used. Dilation and evacuation (D&E) consists of opening the cervix of the uterus and emptying it using surgical instruments and suction. Premature labor and delivery can be induced with prostaglandin."
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Does abortion affects ones fertility?",
    "answer" : "Multiple abortions might affect one’s fertility if there is scarring at the top of the cervix or inside the uterus wall. Moreover, dilation of the cervix that is common during surgical abortion can make the wall of the uterus weak, difficult for an embryo to implant.Scarring of the cervix or uterus can be taken care of by medical interventions, however, if a woman is suffering from pelvic inflammatory disease, receives permanent damage to uterus which can cause Asherman’s syndrome or gets tubal blockage as a result of abortion it could interfere with her chances of getting pregnant in the future. But such occurrence is very rare like one in 50 cases."
  },
  "17" : {
    "itemNumber" : 17,
    "subCategory" : "MTP",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the possible complications of surgical abortion?",
    "answer" : "If the surgery is done from a good hospital, wherein the infection control mechanism is very efficient, no complications arise after an abortion. However, if the doctor is not competent enough or if the hospital is not good, the patient might develop several complications like infection, septicemia, uterine perforation, bowel injuries etc."
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
  qanda.category = "Hypertension";
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};