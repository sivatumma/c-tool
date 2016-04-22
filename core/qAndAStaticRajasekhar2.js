var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasRajasekhar = {
  "1" : {
    "itemNumber" : 1,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is emergency contraception (EC)?",
    "answer" : "Emergency contraception (EC) reduces the chance of pregnancy after unprotected sexual intercourse. Common situations in which EC could be used include forgetting to take several birth control pills in a row, having a condom break or slip off, or not using a birth control method during sex. It also can be used after a woman has been raped."
  },
  "2" : {
    "itemNumber" : 2,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Does emergency contraception pill cause abortion?",
    "answer" : "Using EC does not cause an abortion. An abortion ends an existing pregnancy. EC prevents pregnancy from occurring. EC must be used soon after unprotected sexual intercourse to be effective. It does not work if pregnancy has already occurred."
  },
  "3" : {
    "itemNumber" : 3,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the different types of EC?",
    "answer" : "There are two main types of EC: 1) the copper intrauterine device (IUD) and 2) EC pills. There are three types of EC pills: 1) ulipristal, 2) progestin-only pills, and 3) combined EC pills. Some EC pills can be bought over the counter without a prescription. Others require a prescription. A gynecologist or other health care professional must insert the IUD."
  },
  "4" : {
    "itemNumber" : 4,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Please suggest me one most effective form of EC?",
    "answer" : "The copper IUD is the most effective form of EC. When taken as directed, ulipristal is the most effective type of EC pill, followed by the progestin-only pill. Combined EC pills are not as effective in preventing pregnancy as the progestin-only EC pill."
  },
  "5" : {
    "itemNumber" : 5,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How does the copper IUD work?",
    "answer" : "The copper IUD (brand name: ParaGard) works mainly by making sperm less able to fertilize the egg. It is the most effective EC method in preventing pregnancy. When used for EC, the copper IUD should be inserted within 5 days of having unprotected sex. You then can rely on the copper IUD for long-term birth control (for up to 10 years). You can have the IUD removed at any time if you wish to become pregnant. A health care professional must insert the IUD. You can call your gynecologist or go to a family planning clinic t o have the IUD inserted."
  },
  "6" : {
    "itemNumber" : 6,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the possible side effects of using the copper IUD?",
    "answer" : "With the copper IUD, menstrual pain and bleeding may increase in the first few months of use. Pain can be relieved with over-the-counter pain relievers. Heavy bleeding sometimes can be treated with a medication. Both side effects usually decrease within 1 year of using the copper IUD."
  },
  "7" : {
    "itemNumber" : 7,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How often can I use EC pills?",
    "answer" : "EC pills can be used more than once during a single menstrual cycle, but you should not rely on EC pills as a long-term birth control method. EC pills are not as effective in preventing pregnancy as using a birth control method consistently and correctly. There also may be more side effects from frequent use of EC than from use of a standard birth control method. If you are not using birth control, talk to your gynecologist or other health care professional about which method would work best for you."
  },
  "8" : {
    "itemNumber" : 8,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What are the possible side effects of taking EC pills?",
    "answer" : "EC pills have not been shown to cause any serious complications. Your next period may not occur at the expected time. You may have irregular bleeding or spotting in the week or month after taking EC pills that goes away on its own. Other short-term side effects of EC pills can include the following: Headache Nausea and vomiting (especially if you are taking combined EC pills) Breast tenderness Abdominal pain Dizziness Fatigue"
  },
  "9" : {
    "itemNumber" : 9,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Is there anything that decreases the effectiveness of EC pills?",
    "answer" : "Being overweight or obese may decrease the effectiveness of EC pills. If you are overweight or obese, you may want to consider having a copper IUD inserted. Copper IUDs are effective in women of any weight."
  },
  "10" : {
    "itemNumber" : 10,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can you use birth control pills to delay or eliminate your period?",
    "answer" : "Birth control pills can be used to reduce or eliminate monthly bleeding."
  },
  "11" : {
    "itemNumber" : 11,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "If I plan to have a baby, how soon after stopping the birth control pill can I conceive?",
    "answer" : "After you stop taking the pill, you may have only a two-week delay before you ovulate again. Your period would follow about four to six weeks after you take the last pill. Once ovulation resumes, you can become pregnant. If this happens during your first cycle off the pill, you may not have a period at all."
  },
  "12" : {
    "itemNumber" : 12,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is ‘natural family planning’?",
    "answer" : "Natural family planning is a method of contraception followed without any drugs or condoms. There is a phase called ovulatory phase ( fertile period of woman )during which women release their ovum. Normally this happens 12 to 14 days after the starting period of a cycle. If someone wants to conceive, this is the best period. If some one doesn't want to conceive, they can restrain themselves from intercourse. As the number of days in every cycle may not remain constant.Record the length of their menstrual cycles and calculate the time of fertility by subtracting 20 days from the length of their shortest cycle (this indicates the first day of the fertile period) and 10 days from the length of their longest cycle (this indicates the last day of the fertile period). As there are no drugs or barrier methods involved in this it is called as natural family planning."
  },
  "13" : {
    "itemNumber" : 13,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How do I find the method of contraception that suits me/us best?",
    "answer" : "The best method of contraception depends on The medical history and state of health. Whether you want to conceive, Your age, Need protection from STIs, Your sufferance from any symptoms caused by your current method e.g. PMS, heavy bleeding, , Your smoking habits etc. It is a good idea to ask your doctor about all the things that you should consider and what methods are suitable for you to choose from."
  },
  "14" : {
    "itemNumber" : 14,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is meant by IUD?",
    "answer" : "IUD means Intra Uterine Device In this, a device is lodged in the uterus to prevent the conception.Two threads attached to the device are continued up to vagina to identify its presence. This device has a life of certain time.They are retained as long as the sterility is desired."
  },
  "15" : {
    "itemNumber" : 15,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can the IUD be inserted after unprotected sex?",
    "answer" : "IUD insertion of a copper device provides postcoital protection 3 to 5 days after intercourse."
  },
  "16" : {
    "itemNumber" : 16,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How many days after a child birth can the IUD be inserted?",
    "answer" : "IUD can be inserted 6 weeks after the child birth with the advice of the doctor."
  },
  "17" : {
    "itemNumber" : 17,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Can the IUD be inserted after abortion?",
    "answer" : "Yes, IUD can be inserted first menstrual period following abortion. The insertion can be done either during the menses or the last day of menses or up to 5 days after the cycle."
  },
  "18" : {
    "itemNumber" : 18,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I was told that I had an infection. Am I eligible for IUD insertion?",
    "answer" : "Though infection is not a contraindication for IUD insertion, better to take an advice from your doctor."
  },
  "19" : {
    "itemNumber" : 19,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "Recently I had a prolonged period which is not common for me. Is it due to IUD?",
    "answer" : "There are some complications of IUD insertion. They are: Bleeding without prolonged periods. Losing more blood during periods. Pain Automatic expulsion of IUD Perforation of the uterus. Pelvic infection. Some times unwanted pregnancy."
  },
  "20" : {
    "itemNumber" : 20,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is the most effective form of family planning?",
    "answer" : "The most effective form of family planning is sterilisation. Obstructing the release of ovum and sperm. Male sterilisation - Vasectomy Female sterilisation - Tubectomy But this is followed only after having desired number of children. Even though there are modern techniques to reverse the vasectomy, it is successful in 50% of the people."
  },
  "21" : {
    "itemNumber" : 21,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What is the life time of a copper T ?",
    "answer" : "There are different types of copper T. Depending on the type, there is a life time of 3 -10 years."
  },
  "22" : {
    "itemNumber" : 22,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "One of my friends told me that spermicidal agents are not as effective as pills. Is it true?",
    "answer" : "Yes, spermicidal agents are like creams applied to vagina or cervix of the uterus to inactivate the sperms entering in to the vagina. The success rate is very less due to many reasons. Using spermicidal agents is not at all better than oral contraceptive pills."
  },
  "23" : {
    "itemNumber" : 23,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "I am using oral contraceptive pills from many days.Do these pills prevent transmission of STDs?",
    "answer" : "Oral contraceptive pills do not prevent STDs. They are some harmonal pills to prevent pregnancy. Avoiding intercourse (sex) with the infected persons is the best idea. If not, it is better to use condoms to prevent transmission of infection."
  },
  "24" : {
    "itemNumber" : 24,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What does oral contraceptive pill contain?",
    "answer" : "There are different oral contraceptive pills containg synthesised harmones like 1) oestrogen and 2) Progesterone. They are : 1. Combined oral contraceptive pills ( both harmpnes ) 2. Minipill or progesterone only pill. ( only progesterone )"
  },
  "25" : {
    "itemNumber" : 25,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "How can I use combined oral contraceptive pills?",
    "answer" : "Combined OCPs contain two synthesised harmones like 1) oestrogen and 2) Progesterone. Oestrogen inhibits ovulation either by diminishing the synthesis of gonadotropins ( FSH,LH ) by pituitary or by preventing the action of harmones on ovaries. Progesterone has mild action on ovulation and preventing the uterus from implantation. There are 28 pills out of which first pill has to be started from the first day of the menstrual cycle continuosly for 21 days. Out of 28 pills, 21 pills contain harmones and the other 7 pills are inert pills which doesn't contain any medicine. The last seven days i.e from 22nd day to 28th day are 'no pill' days."
  },
  "26" : {
    "itemNumber" : 26,
    "subCategory" : "contraception",
    "doctorName" : "Dr.Rajasekhar",
    "question" : "What happens after taking 21 pills of combined oral contraceptive pills?",
    "answer" : "There will be withdrawal bleeding 2 or 3 days after 21st pill. As you are not taking harmonal pills after 21st day, you start bleeding."
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