var _ = require('underscore');
var count = 0;
var qAndAModels = [];

var qandasKalpana = {
  "150" : {
    "itemNumber" : 150,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "What are the symptoms of non-diabetic hypoglycemia?",
    "answer" : "The symptoms include being 1. Hungry 2. Shaky 3. Sleepy 4. Anxious 5. Dizzy 6. Confused or nervous 7. Sweaty 8. Irritable Some people have trouble speaking and also feel weak. Talk with your doctor if you have symptoms of hypoglycemia, even if you only have one episode.",
    "consultNow" : "yes"
  },
  "151" : {
    "itemNumber" : 151,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "How is non-diabetic hypoglycemia diagnosed?",
    "answer" : "Your doctor can diagnose non-diabetic hypoglycemia by reviewing your symptoms, doing a physical exam, looking at your risk for diabetes, and checking your blood glucose level. Your doctor will also see whether you feel better after you eat or drink to raise your glucose to a normal level. Checking your blood glucose to see if it is actually low (about 55 mg/dL or less) when you’re having symptoms is an important part of diagnosis. Your doctor will check your blood glucose level and may order other tests. A personal blood glucose meter is not accurate enough for diagnosis. For fasting hypoglycemia, you may have your blood glucose checked every few hours during a fast lasting several days. For reactive hypoglycemia, you might have a test called a mixed-meal tolerance test (MMTT). For the MMTT, you first have a special drink containing protein, fats, and sugar. The drink raises your blood glucose, causing your body to make more insulin. Then your blood glucose level is checked a number of times over the next five hours. Both tests check to see if your blood glucose levels drop too low. Your doctor might also check your blood for insulin levels or other substances.",
    "consultNow" : "yes"
  },
  "152" : {
    "itemNumber" : 152,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "What is the treatment for non-diabetic hypoglycemia?",
    "answer" : "Treatment depends on the cause of your hypoglycemia. For example, if you have a tumor, you may need surgery. If medicine is causing your hypoglycemia, you need to change medicines. For immediate treatment of low blood glucose, make sure you eat or drink 15 grams carbohydrate (in form of juice, glucose tablets, or hard candy). Consult doctor or dietitian whether you need to change your diet. The following type of diet may help you: Eating small meals and snacks throughout the day, eating about every three hours Having a variety of foods, including protein (meat and non-meat), dairy foods, and high-fiber foods such as whole-grain bread, fruit, and vegetables Limiting high-sugar foods.",
    "consultNow" : "yes"
  },
  "153" : {
    "itemNumber" : 153,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "What are long-term effects of pre-diabetes?",
    "answer" : "Being diagnosed with pre-diabetes indicates that means that your blood sugar level is higher than normal, but not quite high enough to be full-blown diabetes, according to the Centers for Disease Control and Prevention (CDC). Pre-diabetes can be combated with changes to diet and the addition of physical activity, according to the American Medical Association (AMA). If not managed, pre-diabetes can have a long-term effect of turning into diabetes – a more severe form of the disease. Diabetes is chronic and is a disease that will need to be managed for the rest of your life. Talk to your doctor for more information about your pre-diabetes and diabetes concerns.",
    "consultNow" : "yes"
  },
  "154" : {
    "itemNumber" : 154,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "Is there anything I can do to reduce my children’s risk of getting diabetes?",
    "answer" : "There is presently little that can reliably be done to reduce a person’s risk of type 1 diabetes,However, type 2 diabetes has undergone dramatic increase in children and adolescents in recent years, and it is clear that this is driven, in the most part, by childhood and adolescent overweight and obesity as well as lack of regular exercise.Therefore, establishment of a healthy pattern of eating in childhood, without excess calorie intake, and encouragement of regular exercise can be the most effective means of preventing the development of diabetes",
    "consultNow" : "yes"
  },
  "155" : {
    "itemNumber" : 155,
    "category" : "Diabetes",
    "subCategory" : "Diet",
    "doctorName" : "Dr. Kalpana",
    question : "Are there any natural herbs, minerals, or other remedies that prevent diabetes?",
    "answer" : "While it would be premature to answer yes to this question, it does appear that certain compounds can favorably impact the blood sugar and may have the potential to delay or prevent diabetes. Those for whom there is at least some evidence include uncooked walnuts, green tea, and certain compounds of chromium, zinc, and vanadium. While it is not known how most of these compounds work, the metallic compounds may work by facilitating the body’s mechanisms for releasing insulin, or responding to insulin",
    "consultNow" : "yes"
  },
  "156" : {
    "itemNumber" : 156,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "Could I have had diabetes for a long time and not known it?",
    "answer" : "Yes, indeed, you could have had diabetes for a considerable period of time, months or even years, and been unaware of it. However, it is unlikely that you could have had severe diabetes with very high blood sugars for a long time without having to seek medical attention,as you would have experienced complications.",
    "consultNow" : "yes"
  },
  "157" : {
    "itemNumber" : 157,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "I had diabetes during my last pregnancy. Am I at risk of diabetes in the future?",
    "answer" : "Yes, you are at high risk both of having type 2 diabetes in the future and of having diabetes again with your next pregnancy. The reason for this is that women destined to get type 2 diabetes in middle age or beyond tend to be the same women who will develop diabetes in pregnancy. Therefore, the presence of diabetes in pregnancy is an indicator of future risk for type 2 diabetes. Because type 2 diabetes is a disorder of aging, the diabetes in pregnancy tends to be more severe and requires more intensive treatment with each successive pregnancy, unless steps are taken between pregnancies to reverse one or more risk factors, such as excess weight or lack of exercise.",
    "consultNow" : "yes"
  },
  "158" : {
    "itemNumber" : 158,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "If I go on insulin, will I ever go off of needles/shots?",
    "answer" : "Some doctors will prescribe insulin temporarily when you are initially diagnosed until your blood glucose is in better control (when your updated A1C is obtained). Diet, exercise, and lifestyle changes will also help you to lower (or in some cases discontinue) your insulin regimen.",
    "consultNow" : "yes"
  },
  "160" : {
    "itemNumber" : 160,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "I don't want to go on insulin. My grandmother and brother did and that’s when all their complications started. Insulin shots seem to complicate matters. Is this true?",
    "answer" : "When you have well controlled diabetes, your chances of having long-term complications are significantly decreased.Insulin lowers high blood glucose and therefore may be beneficial in diabetes management and preventing long-term complications.",
    "consultNow" : "yes"
  },
  "161" : {
    "itemNumber" : 161,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "Is it true that I can never eat sugar or sweets again now that I have been diagnosed with diabetes?",
    "answer" : "A diabetic meal plan is nothing different than a healthy, well balanced meal plan. Sweets and desserts can be incorporated into a diabetes meal plan insmall amounts. There are no \"off limit\" foods when it comes to managing your diabetes. Moderation is key.",
    "consultNow" : "yes"
  },
  "162" : {
    "itemNumber" : 162,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "If you have diabetes and it’s left untreated, what’s the prognosis?",
    "answer" : "It seems like once you have diabetes, you’re in for a rough ride. And so treatment at an early stage almost certainly will help prevent complications, at least delay them.",
    "consultNow" : "yes"
  },
  "163" : {
    "itemNumber" : 163,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "Can people diagnosed with pre-diabetes, another fast-growing population, reduce their glucose level back into the normal range with treatment?",
    "answer" : "Not everyone who has pre-diabetes will ultimately develop diabetes. But the people who are in that pre-diabetes window can reduce their glucose level, and that’s actually a good sign. What that means is if you actually work on it, you’ll be able to move yourself back to a better state of health, and have a lot fewer problems long term.",
    "consultNow" : "yes"
  },
  "164" : {
    "itemNumber" : 164,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "What is insulin resistance?",
    "answer" : "Insulin resistance is a condition in which the body’s ability to respond to the effects of insulin is decreased. Insulin has many actions within the body, such as the breakdown of carbohydrates (sugars and starches), fats and proteins into glucose. As cells must have glucose to survive, the body compensates for the inadequate response to insulin by producing additional amounts of insulin. This results in high level of insulin in the blood, which is one of the signs of insulin resistance.",
    "consultNow" : "yes"
  },
  "165" : {
    "itemNumber" : 165,
    "category" : "Diabetes",
    "subCategory" : "Diet",
    "doctorName" : "Dr. Kalpana",
    question : "Does the diet for those with diabetes differ from that of non-diabetic persons?",
    "answer" : "The diet for diabetic individuals is the same as for persons without diabetes. Diabetic people do not need a special diet. Make sure that the diet is healthy and maintain healthy eating habits to control the blood sugar level. A healthy diet comprises complex carbohydrates (whole grain cereal) low in fat and has plenty of green leafy vegetables and fruits. With proper planning, one can still enjoy a wide variety of favourite foo",
    "consultNow" : "yes"
  },
  "166" : {
    "itemNumber" : 166,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "Why it is important for people with diabetes to be physically active?",
    "answer" : "Physical activity delays or prevents the onset of type 2 diabetes. Studies have shown that physically active individuals have a 30–50% lower risk of developing type 2 diabetes compared to sedentary individuals. Physical activity helps to control the blood glucose level, weight and blood pressure, reduce the cholesterol level and prevent cardiovascular disease.",
    "consultNow" : "yes"
  },
  "167" : {
    "itemNumber" : 167,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "Can diabetes lead to serious emergencies?",
    "answer" : "Yes, it can lead to serious and life-threatening medical emergencies. These can occur if the blood sugar is too high or too low. Diabetic emergencies are best treated in a hospital as quickly as possible. Consult Doctor immediately",
    "consultNow" : "yes"
  },
  "168" : {
    "itemNumber" : 168,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "Why is the risk of blood vessel diseases increased so much in diabetes?",
    "answer" : "There are several reasons why the risk of vascular diseases, such as heart attack, stroke, and diseases of the vessels in the limbs (peripheral vascular disease), is increased in both types of diabetes. The weight gain and lack of exercise common in people with type 2 diabetes lead to other conditions such as abnormal cholesterol levels and high blood pressure, which are potent causes of vascular disease. If all of these risk factors are not treated effectively, the probability of vascular disease remains high.",
    "consultNow" : "yes"
  },
  "169" : {
    "itemNumber" : 169,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "I am 45 years old having diabetics since 5 years, I would like to know can diabetes affect my sex life? If so, how and what can I do about it?",
    "answer" : "Diabetes can have a profound effect upon a person’s sexual drive, functioning, and satisfaction. This is especially apparent in men, although there is some evidence that some women with diabetes can also experience adverse effects on their sexual responses. The reason for the significant effects on male sexual Function arises from the complexity of the penile erection Mechanism. Sometimes this is worsened by medications commonly used by people with diabetes, such as certain blood pressure-lowering drugs. Consult Urologist as soon as possible.",
    "consultNow" : "yes"
  },
  "170" : {
    "itemNumber" : 170,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "I feel as if my memory has gotten worse since I developed diabetes. Could I be right?",
    "answer" : "You may well be right. Studies have shown that memory, and other higher brain functions, can be negatively affected by diabetes. This pertains to both type 1 and type 2 diabetes and to both adults and children. A large part of this effect is related to blood sugar control. Children with repeated episodes of low blood sugar have been shown to have poor long-term memory performance. However, both high and low blood sugar levels are associated with poor memory performance. Consult Doctor as soon as possible",
    "consultNow" : "yes"
  },
  "171" : {
    "itemNumber" : 171,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "Is diet and exercise management alone really effective for diabetes?",
    "answer" : "Diet and exercise are in fact the most effective treatments of all for most forms of type 2 diabetes, but are not primary measures for management of type 1 diabetes. In type 1 diabetes, profound insulin deficiency necessitates that insulin treatment is the principal form of treatment. Nevertheless, attention to diet and exercise can provide benefits in diabetes control and general health in patients with type 1 diabetes and should be included in the comprehensive treatment plan. Consult Physiotherapist and dietician before you start exercise and diet",
    "consultNow" : "yes"
  },
  "172" : {
    "itemNumber" : 172,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "What is the difference between basal insulin and bolus insulin?",
    "answer" : "Basal insulin refers to the insulin required to control your blood sugar in the absence of food intake. A certain amount of insulin is always necessary to keep the blood sugar in the normal range, even in the absence of eating for prolonged periods. Bolus insulin refers to the insulin required to remove the energy derived from a meal from the bloodstream and into the tissues, to replenish energy stores. This is typically provided by the short-acting insulin injection given just prior to eating or by the bolus setting for patients on an insulin pump.",
    "consultNow" : "yes"
  },
  "173" : {
    "itemNumber" : 173,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "I am afraid that I might forget I have taken my insulin and take it twice, or mistakenly take my long-acting dose for my short-acting and vice versa. What should I do if this happens?",
    "answer" : "If you think you have taken your insulin twice or taken more or less than you need at that particular point in time, you should not panic, but follow a plan designed to ensure that you do not experience serious consequences from this. First of all, it is surprising how often taking too much insulin does not actually lead to a seriously low level of blood glucose. Having said that, a careful response is needed if you suspect that you have taken too much insulin.",
    "consultNow" : "yes"
  },
  "174" : {
    "itemNumber" : 174,
    "category" : "Diabetes",
    "subCategory" : "Drugs",
    "doctorName" : "Dr. Kalpana",
    question : "Do any traditional or nonprescription remedies for diabetes really help control blood sugar? If so, which ones do you recommend?",
    "answer" : "There are a number of nonprescription remedies that are known to be effective at lowering blood sugar. In fact One of the most frequently used and established treatments for diabetes, metformin, was derived from the traditional knowledge that the leaves of the French lilac plant reversed the symptoms of diabetes in some patients. But before you try any remedies Consult Dietician",
    "consultNow" : "yes"
  },
  "175" : {
    "itemNumber" : 175,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "I am 65 years female living with Diabetics since 25 years, recently in started taking insulin but, How can I avoid getting bruises or swellings on my stomach from my insulin shots?",
    "answer" : "Bruises and swellings on the stomach (or more accurately the abdominal wall) due to insulin are caused by two distinct mechanisms and are not usually variations of the same thing. However, occasionally a bruise will be severe enough so as to cause an actual swelling. s. If insulin is injected repeatedly in the same area, additional fat can become laid down in that spot. This takes on the appearance of a painless fatty mound (lipohypertrophy), which can be somewhat disfiguring. To avoid these, the insulin injection sites should be rotated.",
    "consultNow" : "yes"
  },
  "176" : {
    "itemNumber" : 176,
    "category" : "Diabetes",
    "subCategory" : "Lifestyle",
    "doctorName" : "Dr. Kalpana",
    question : "I don’t want my friends or co-workers to know I have diabetes. How can I manage it discreetly in public places?",
    "answer" : "It is sometimes surprising (and reassuring) to realize that, given the fact that about 1 in every 12 people in our society has diabetes, we encounter people with diabetes virtually every day in our daily lives and are quite unaware of it. This means that diabetes can indeed be managed discreetly and privately without undue attention and alarm by the vast majority of those who have it.",
    "consultNow" : "yes"
  },
  "177" : {
    "itemNumber" : 177,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "I am 29 years old female married, I have diabetes since my childhood and want to get pregnant. What should I do?",
    "answer" : "When a woman of childbearing age has diabetes, it is very important to plan the pregnancy ahead of time for a number of reasons. The first reason is that studies have shown that the risk of birth defects (called congenital malformations) is much higher if the diabetes is not well controlled at the time of becoming pregnant. Improving control of the diabetes as quickly as possible after discovering the pregnancy will not fully reverse this risk, which in some studies has been found to be as high as one in five. Therefore, it is important to establish and confirm that your diabetes is in the best possible control before proceeding with a plan to become pregnant.",
    "consultNow" : "yes"
  },
  "178" : {
    "itemNumber" : 178,
    "category" : "Diabetes",
    "subCategory" : "Lifestyle",
    "doctorName" : "Dr. Kalpana",
    question : "My father is diabetic since 3 years and it is uncontrolled, he always travels around the states and countries. Could you suggest me how to handle his diabetic as he is taking insulin shots?",
    "answer" : "Traveling more than one or two time zones distant can temporarily throw off the timing of your injections and meals in relation to your previous injection pattern.This is further complicated by changes in your sleeping pattern, so that you may feel like eating at times other than set mealtimes or you may feel like sleeping when you would normally eat. Also, your daily pattern of hormonal changes (your diurnal rhythm), which can influence your blood sugars, may take several days to adjust to your new location. Moreover, travel these days can be quite stressful and your blood sugars can be affected by this, too. Therefore, some temporary disruption in your blood sugar control is to be expected,as many things are going on all at once. It is recommended that you talk to your doctor about your travel plans and how to manage these. It is often helpful to keep your testing and meal schedule,when possible, on the time zone of the place from which you departed for the first 24 hours and then make adjustments when you are settled in the new location.",
    "consultNow" : "yes"
  },
  "179" : {
    "itemNumber" : 179,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "I am 45 years old sports person since 15 years and I am diabetic since 5 years How can I manage my blood sugar during sports and exercise activities?",
    "answer" : "Sports and exercise can affect the blood sugar in various ways. The use of energy by the body during the exercise will have the tendency to lower the blood sugar, as might be expected. If the exercise is vigorous, stressful to the body, or competitive, the release of stress hormones may occur, which will actually serve to raise the blood sugar. Also, so-called “isometric” exercise (meaning that tensing or rigidity of the muscle against forceful resistance is involved, such as in weight-lifting) tends to raise the blood sugar more than “isotonic” exercise (such as repeated movement against minimal resistance, such as jogging, swimming,or dancing), which will generally tend to lower it. Consult Doctor before doing exercise",
    "consultNow" : "yes"
  },
  "180" : {
    "itemNumber" : 180,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "My mother is suffering with diabetics since 30 years, recently her big toe got injured and it took 30 days to recover? I have heard that wounds heal more slowly in people with diabetes?",
    "answer" : "In patients whose diabetes is under good control and who do not have complications from it, wound healing is generally fairly normal, especially in younger people. On the other hand, when diabetes is poorly controlled and when it is accompanied by chronic complications, wound healing can be significantly impaired. The longterm complications of diabetes occur due to damage to the very small blood vessels nourishing the tissues and organs of the body. The skin is one of these organs and, although skin disorders due to diabetes are not common, they can and do occur. The body’s ability to heal a wound depends upon a healthy blood supply, which is needed to deliver nutrients, on the cells that provide the protective defense against infection and those that cause inflammation.",
    "consultNow" : "yes"
  },
  "181" : {
    "itemNumber" : 181,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "My child is 3 years old, has diabetes and is about to start school. What steps should I take and how will the school help to ensure that things go well?",
    "answer" : "Nowadays, diabetes alone seldom prevents children from attending and participating fully in school activities, although special attention is required in certain circumstances.Fortunately,most children at the age of school entry have, by virtue of their age, not had diabetes for very long. Therefore, they rarely have chronic complications and their glucose control is more straightforward.",
    "consultNow" : "yes"
  },
  "182" : {
    "itemNumber" : 182,
    "category" : "Diabetes",
    "subCategory" : "Lifestyle",
    "doctorName" : "Dr. Kalpana",
    question : "My partner/child/parent does not follow his or her doctor’s advice on management of his or her diabetes. How can I help to improve things?",
    "answer" : "This is a very difficult question and is one that can be extended beyond diabetes to many aspects of a loved one’s life where their behavior is apparently either endangering themselves or likely to lead to short- or long-term negative consequences. Sometimes it can be immensely frustrating for a caring parent/partner/friend or relative to experience lack of commitment to good healthcare practices on the part of someone they care about. Moreover, the knowledge that much of the burden of the consequences may fall on others can lead to anger and resentment. There is no easy answer that can be applied universally, as everyone is different and their circumstances are unique.",
    "consultNow" : "yes"
  },
  "183" : {
    "itemNumber" : 183,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "Can my child with diabetes participate in all sports in school or are there some that he or she should avoid?",
    "answer" : "If your child has type 2 diabetes, which is now not uncommon in children and has recently become more common in adolescent girls than type 1 diabetes, then participation in school sports is an excellent idea, as it will help to control weight and reverse insulin resistance. The only concerning his or her Medication and how it would be affected by exercise.",
    "consultNow" : "yes"
  },
  "184" : {
    "itemNumber" : 184,
    "category" : "Diabetes",
    "subCategory" : "Lifestyle",
    "doctorName" : "Dr. Kalpana",
    question : "My spouse/partner has diabetes and we are planning a family. What is the risk that our children will develop diabetes?",
    "answer" : "This depends on whether your spouse/partner has type 1 or type 2 diabetes. In the case of type 1 diabetes, in general the risk of type 1 diabetes is 10 times as great in a first-degree relative compared to the risk in the population at large. In the case of type 2 diabetes, the risk is considerably higher and a general rule is that if both parents have type 2 diabetes, about two out of three of their children will develop it. However, if your spouse/partner has type 2 diabetes, you can factor in your own parents’ health history in the risk to your future children. If either of your parents has type 2 diabetes, this increases the risk to your child to more than one in three. Of course, in contrast to type 1 diabetes, type 2 diabetes tends to develop later in life, so children at risk are still most likely to have a healthy childhood and diabetes-free youth.",
    "consultNow" : "yes"
  },
  "185" : {
    "itemNumber" : 185,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "I am 34 years female employe suffering with diabetic since 3 years , my life style is sedentary and recently found that there is a continuous burning and pinprick sensation in my feet? I would like to know whether my blood glucose is normal or not? Can exercise give me some relief?",
    "answer" : "Depending upon your symptoms your blood glucose levels may be higher, this condition is called Peripheral Neuropathy. Consult Doctor as soon as possible so that he/she might change the dosage of your medication. Regarding the exercise part do some toe movements upand down when ever you are free and if possible try to dip your feet in luke warm water for about 10 minutes.",
    "consultNow" : "yes"
  },
  "186" : {
    "itemNumber" : 186,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "Why are women with diabetes pre-disposed to developing recurrent yeast infections?",
    "answer" : "The glucose (sugar) in your body is the perfect trigger to encourage and grow yeast within your body.",
    "consultNow" : "yes"
  },
  "187" : {
    "itemNumber" : 187,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "What are the complications of using birth control pills while having diabetes?",
    "answer" : "Birth control pills may raise your BG levels. Using them for longer than a year or 2 may also increase your risk of complications. For instance, if you develop high blood pressure while on the pill, you increase the chance that eye or kidney disease will worsen.",
    "consultNow" : "yes"
  },
  "188" : {
    "itemNumber" : 188,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "I am 40 year female recently I am diagnosed with menopause? Will menopause affect my diabetes?",
    "answer" : "Yes. The changes in hormonal levels and balance, may lead to BG levels that are out of control. Women with diabetes are also at risk of developing premature menopause and consequent increased risks of cardiovascular disease.",
    "consultNow" : "yes"
  },
  "189" : {
    "itemNumber" : 189,
    "category" : "Diabetes",
    "subCategory" : "Drugs",
    "doctorName" : "Dr. Kalpana",
    question : "Are there any diabetes medications that have a higher incidence of side effects amongst women who use them?",
    "answer" : "Yes, the oral medications classified as thiazolidinediones (TZDs) may cause women who are not ovulating and haven't gone through menopause to begin ovulating again, enabling them to conceive. Also, oral contraceptives may be less effective when taking this medication.",
    "consultNow" : "yes"
  },
  "190" : {
    "itemNumber" : 190,
    "category" : "Diabetes",
    "subCategory" : "Complication",
    "doctorName" : "Dr. Kalpana",
    question : "My friend is 36 years old has diabetic and high blood pressure since one year, now she is pregnant ? Will her baby have these problems as well?",
    "answer" : "Keep your blood glucose as close to normal as possible before and during your pregnancy is the most important thing you can do to stay healthy and have a healthy baby. Consult dietician and Physiotherapist helps you to learn how to use meal planning, physical activity, and medicines to reach your blood glucose targets. Together, you'll create a plan for taking care of yourself and your diabetes. Pregnancy causes a number of changes in your body, so you might need to change how you manage your diabetes. Even if you've had diabetes for years, you may need to change your meal plan, physical activity routine, and medicines. As you get closer to your delivery date, your needs might change again",
    "consultNow" : "yes"
  },
  "191" : {
    "itemNumber" : 191,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "My Doctor advised me to do some endurance exercises? What kinds of exercises should I try?",
    "answer" : "Try to choose activities that include all four types of exercise -- endurance, strength, balance, and flexibility -- because each type has different benefits. 1. Endurance exercises like walking, swimming, or jogging will make it possible for you to walk farther, faster and uphill. 2. Strength exercises such as weight lifting will strengthen your muscles and make you stronger. 3.Balance exercises like standing on one foot can help prevent falls. 4. Flexibility exercises like yoga help keep your body limber and flexible. Doing one type of exercise also can improve your ability to do the others. Plus, variety helps reduce boredom and risk of injury.",
    "consultNow" : "yes"
  },
  "192" : {
    "itemNumber" : 192,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "I am 45 years female with known diabetic and I conceived now. How Diabetes Can Affect me and my Baby?",
    "answer" : "High blood glucose levels before and during pregnancy can 1. worsen your long-term diabetes problems, such as eye problems, heart disease, and kidney disease 2. Increase the chance of problems for your baby, such as being born too early, weighing too much, having breathing problems or low blood glucose right after birth, or other health problems 3. Increase the risk of your baby having birth defects 4. Increase the risk of losing your baby through miscarriage, which means loss of the baby before 20 weeks, or stillbirth, which means the baby dies in the womb after 20 weeks However, research has shown that when women with diabetes keep blood glucose levels under control before and during pregnancy, the risk of birth defects is about the same as in babies born to women who don't have diabetes.",
    "consultNow" : "yes"
  },
  "193" : {
    "itemNumber" : 193,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "My dad is a diabetic since 15 years, he developed depression recently and he is afraid of doing exercises, Physiotherapist advised to do some exercises? I would like to know the safety tips to protect him activities?",
    "answer" : "Before doing exercises , be sure to observe these safety tips. 1. Do a little light activity, such as easy walking, before and after your endurance activities to warm up and cool down. 2. Drink liquids when doing any activity that makes you sweat. 3. Man riding a bicycle. 4. Dress appropriately for the heat and cold. Dress in layers if you're outdoors so you can add or remove clothes as needed. 5. When you're out walking, watch out for low-hanging branches and uneven sidewalks. 6. Walk during the day or in well-lit areas at night, and be aware of your surroundings. 7. To prevent injuries, use safety equipment such as helmets for biking. 8. Endurance activities should not make you breathe so hard that you can't talk and should not cause dizziness or chest pain.",
    "consultNow" : "yes"
  },
  "194" : {
    "itemNumber" : 194,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "I am 60 years male, keeps on forgetting things daily and recently I lost my exercise prescription of exercises. Can you suggest me the exercises which suit for Peripheral Neuropathy?",
    "answer" : "Peripheral neuropathy is nerve damage in the extremities, causing tingling, pain or loss of sensation in your toes, feet and fingers. Peripheral neuropathy increases the risk of loss of balance—and subsequently the increased risk of falling. In addition, the pain and burning can make it difficult to walk. Exercise prescription: Incorporate balance exercises and avoid weight-bearing activities such as walking or jogging. Good choices are the stationary bike and swimming. Consult doctor or Physiotherapist before starting exercise.",
    "consultNow" : "yes"
  },
  "195" : {
    "itemNumber" : 195,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "I am suffering with Charcot Foot since 3 years? Can you prescribe be some exercises?",
    "answer" : "Charcot Foot is a specific type of peripheral neuropathy in which there is destruction of the nerves on the bottom of the foot. The foot eventually becomes deformed and loses sensation. It is important to stay off your feet as much as possible. Exercise prescription: Use a stationary or arm bike, or do chair exercises using free weights in a seated position. Consult doctor or Physiotherapist before starting exercise.",
    "consultNow" : "yes"
  },
  "196" : {
    "itemNumber" : 196,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "My Co sister is known diabetic and hypertensive since 6 years and lives in urban areas where she cannot find the clinic to visit any physician. She has been to Hyderabad recently and diagnosed with Proliferative Retinopathy ? Is there any exercise or precautions to protect her eyes?",
    "answer" : "Proliferative retinopathy is advanced diabetic eye disease in which new, fragile cells develop on the optic disc. These new cells are prone to leakage or hemorrhage into the eye resulting in loss of vision. You may also be at risk for retinal detachment. Any exercises that increase blood pressure should be avoided. You need to avoid lifting heavy objects and any vigorous exercise. In addition, do not perform any exercise that requires forward bending such as yoga or the valsalva maneuver [The Valsalva maneuver or Valsalva manoeuvre is performed by moderately forceful attempted exhalation against a closed airway, usually done by closing one's mouth and pinching one's nose shut. Variations of the maneuver can be used either in medical examination as a test of cardiac function and autonomic nervous control of the heart, or to \"clear\" the ears and sinuses (that is, to equalize pressure between them) when ambient pressure changes, as in diving, hyperbaric oxygen therapy, or aviation]. Exercise prescription: Stick to non weight bearing exercise such as moderate intensity biking or walking in the pool. Or try slow, steady hiking, ballroom dancing or elliptical machines at low to moderate intensity.Consult doctor or Physiotherapist before starting exercise.",
    "consultNow" : "yes"
  },
  "197" : {
    "itemNumber" : 197,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "I am suffering with Nephropathy since 10 years and now in Dialysis stage? What kind of exercises are useful for me? I would like to exercises vigorously ? Is it suitable for me?",
    "answer" : "Nephropathy is damaged to the kidneys, which eventually leads to complete kidney shutdown and the need for dialysis. With nephropathy, exercise capacity is decreased because of the buildup of waste products in the body. Exercise prescription: Light to moderate exercise is encouraged. Consult doctor or Physiotherapist before starting exercise.",
    "consultNow" : "yes"
  },
  "198" : {
    "itemNumber" : 198,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "What are some walking activities that can increase endurance?",
    "answer" : "Walking or wheelchair rolling are simple ways to be active. You can do it alone, with friends, even with your dog! Try one of these types of walking or rolling to get active today. a. Nordic walking b. hiking c. walking the dog d. mall walking e. wheelchair rolling f. race walking. Consult doctor or Physiotherapist before starting exercise.",
    "consultNow" : "yes"
  },
  "199" : {
    "itemNumber" : 199,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "How can I stay safe when doing strength exercises?",
    "answer" : "Before doing strength exercises, be sure to observe these safety tips. 1. Don't hold your breath during strength exercises. This could affect your blood pressure, especially if you have heart disease. 2. Use smooth, steady movements to bring weights into position. Avoid jerking or thrusting movements. 3. Breathe out as you lift or push a weight and breathe in as you relax. 4. Avoid locking the joints of your arms and legs into a strained position. 5. For exercises that require a chair, choose one that is sturdy and stable enough to support your weight when seated or when holding on during the exercise. Consult doctor or Physiotherapist before starting exercise.",
    "consultNow" : "yes"
  },
  "200" : {
    "itemNumber" : 200,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "I am am 46 years old female a month ago, I met with an accident my arm was broken into two separate pieces and then I came to know that I am a diabetic . I feel I lost some strength in my upper arm?Could you please suggest me some exercises to strengthen my upper body?",
    "answer" : "Below are 6 exercises to strengthen the upper body, with easy directions to help you do them safely. They include 1. wrist curls 2. arm curls 3. side arm raises 4. elbow extensions 5. chair dips 6. seated rows with resistance band To do most of these strength exercises, you will need to lift or push weights. Start with light weights (1- 2 lbs.) and gradually increase the amount of weight you use. Try to do strength exercises for all of your major muscle groups on 2 or more days per week for 30 minutes at a time, but don't exercise the same muscle group on any 2 days in a row. Consult doctor or Physiotherapist before starting exercise.",
    "consultNow" : "yes"
  },
  "201" : {
    "itemNumber" : 201,
    "category" : "Diabetes",
    "subCategory" : "Exercise",
    "doctorName" : "Dr. Kalpana",
    question : "I am 34 years old female and moderate obese as per BMI, my lower body fat is more when compared to upper body? I am afraid that I may get diabetics in a year? Could you prescribe me an exercises which reduce my fats?",
    "answer" : "Below are 6 exercises to strengthen the lower body, with easy directions to help you do them safely. They include 1. Back leg raises 2. Side leg raises 3. Knee curls 4. Leg straightening exercises 5. Chair stand 6. Toe stands For the exercises below, you will need to use a chair. Choose a sturdy chair that is stable enough to support your weight when seated or when holding on during the exercise.",
    "consultNow" : "yes"
  },
  "202" : {
    "itemNumber" : 202,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "What steps can I take to lose weight to prevent or delay type 2 diabetes?",
    "answer" : "Your weight affects your health in many ways. Being overweight can keep your body from making and using insulin properly. It can also cause high blood pressure. If you are overweight or obese, choose sensible ways to reach and maintain a reasonable body weight. 1. Make healthy food choices. What you eat has a big impact on your weight and overall health. By developing healthy eating habits you can help control your body weight, blood pressure, and cholesterol. Reducing portion size, increasing the amount of fiber you consume (by eating more fruits and vegetables) and limiting fatty and salty foods are key to a healthy diet. 2. Get at least 30 minutes of exercise at least five days a week. Regular exercise reduces diabetes risk in several ways: it helps you lose weight, controls your cholesterol and blood pressure, and improves your body's use of insulin. Many people make walking part of their daily routine because it's easy, fun and convenient. But you can choose any activity that gets you moving. It's fine to break up your 30 minutes of exercise into smaller increments, such as three 10-minute periods. Check with your doctor before beginning any exercise program.",
    "consultNow" : "yes"
  },
  "203" : {
    "itemNumber" : 203,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "I am suffering with a Diabetic retinopathy since 3 years. I would like to know what are the stages of diabetic retinopathy?",
    "answer" : "The four stages of diabetic retinopathy are: 1. Mild nonproliferative retinopathy. 2. Moderate nonproliferative retinopathy 3. Severe nonproliferative retinopathy 4. Proliferative retinopathy",
    "consultNow" : "yes"
  },
  "204" : {
    "itemNumber" : 204,
    "category" : "Diabetes",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr. Kalpana",
    question : "My grand father is 80 years old and known diabetic retinopathy recently he lost his vision will the disease cause vision loss and How?",
    "answer" : "Blood vessels damaged from diabetic retinopathy can cause vision loss in two ways. 1. Fragile, abnormal blood vessels can develop and leak blood into the center of the eye, blurring vision. This is proliferative retinopathy and is the fourth and most advanced stage of the disease. 2. Fluid can leak into the center of the macula, the part of the eye where sharp, straight-ahead vision occurs. The fluid makes the macula swell, blurring vision. This condition is called macular edema. It can occur at any stage of diabetic retinopathy, although it is more likely to occur as the disease progresses. About half of the people with proliferative retinopathy also have macular edema.",
    "consultNow" : "yes"
  },
  "205" : {
    "itemNumber" : 205,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "What are the symptoms of proliferative retinopathy if bleeding occurs?",
    "answer" : "At first, you will see a few specks of blood, or spots, \"floating\" in your vision. If spots occur, see your eye care professional as soon as possible. You may need treatment before more serious bleeding or hemorrhaging occurs. Hemorrhages tend to happen more than once, often during sleep. Sometimes, the spots clear without treatment, and you will see better. However, bleeding can reoccur and cause severely blurred vision. You need to be examined by your eye care professional at the first sign of blurred vision, before more bleeding occurs. If left untreated, proliferative retinopathy can cause severe vision loss and even blindness. Also, the earlier you receive treatment, the more likely treatment will be effective.",
    "consultNow" : "yes"
  },
  "206" : {
    "itemNumber" : 206,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "How are diabetic retinopathy and macular edema detected?",
    "answer" : "Diabetic retinopathy and macular edema are detected during a comprehensive eye exam that includes a visual acuity test, dilated eye exam, and tonometry. 1. A visual acuity test is an eye chart test that measures how well you see at various distances. 2. In a dilated eye exam, drops are placed in your eyes to widen, or dilate, the pupils. Your eye care professional uses a special magnifying lens to examine your retina and optic nerve for signs of damage and other eye problems. After the exam, your close-up vision may remain blurred for several hours. 3. With tonometry, an instrument measures the pressure inside the eye. Numbing drops may be applied to your eye for this test. During the dilated eye exam, your eye care professional checks your retina for early signs of the disease. Signs may include leaking blood vessels, retinal swelling, fatty deposits on the retina, damaged nerve tissue, or any changes to the blood vessels.",
    "consultNow" : "yes"
  },
  "207" : {
    "itemNumber" : 207,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "How is diabetic retinopathy treated?",
    "answer" : "During the first three stages of diabetic retinopathy, no treatment is needed, unless you have macular edema. To prevent progression of diabetic retinopathy, people with diabetes should control their levels of blood sugar, blood pressure, and blood cholesterol. Proliferative retinopathy is treated with laser surgery. This procedure is called scatter laser treatment. Scatter laser treatment helps to shrink the abnormal blood vessels. Doctor places 1,000 to 2,000 laser burns in the areas of the retina away from the macula, causing the abnormal blood vessels to shrink. Because a high number of laser burns are necessary, two or more sessions usually are required to complete treatment. Although you may notice some loss of your side vision, scatter laser treatment can save the rest of your sight. Scatter laser treatment may slightly reduce your color vision and night vision. If the bleeding is severe, you may need a surgical procedure called a vitrectomy. During a vitrectomy, blood is removed from the center of your eye.",
    "consultNow" : "yes"
  },
  "208" : {
    "itemNumber" : 208,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "What is a vitrectomy?",
    "answer" : "If you have a lot of blood in the center of the eye, or vitreous gel, you may need a vitrectomy to restore your sight. If you need vitrectomies in both eyes, they are usually done several weeks apart. A vitrectomy is performed under either local or general anesthesia. Your doctor makes a tiny incision in your eye. Next, a small instrument is used to remove the vitreous gel that is clouded with blood. The vitreous gel is replaced with a salt solution. Because the vitreous gel is mostly water, you will notice no change between the salt solution and the original vitreous gel.",
    "consultNow" : "yes"
  },
  "209" : {
    "itemNumber" : 209,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "What can I expect after a vitrectomy?",
    "answer" : "You will probably be able to return home after the vitrectomy. Some people stay in the hospital overnight. Your eye will be red and sensitive. You will need to wear an eye patch for a few days or weeks to protect your eye. You will also need to use medicated eyedrops to protect against infection.",
    "consultNow" : "yes"
  },
  "210" : {
    "itemNumber" : 210,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "Are scatter laser treatment and vitrectomy effective in treating proliferative retinopathy?",
    "answer" : "Yes. Both treatments are very effective in reducing vision loss. People with proliferative retinopathy can reduce their risk of blindness by 95 percent with timely treatment and appropriate follow-up care. Although both treatments have high success rates, they do not cure diabetic retinopathy. Once you have proliferative retinopathy, you always will be at risk for new bleeding. You may need treatment more than once to protect your sight.",
    "consultNow" : "yes"
  },
  "211" : {
    "itemNumber" : 211,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "What can I do if I already have lost some vision from diabetic retinopathy?",
    "answer" : "If you have lost some sight from diabetic retinopathy, Consult your eye care professional about low vision services and devices that may help you make the most of your remaining vision.",
    "consultNow" : "yes"
  },
  "212" : {
    "itemNumber" : 212,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "Does controlling blood sugar slow the onset of diabetic retinopathy?",
    "answer" : "A major study has shown that better control of blood sugar levels slows the onset and progression of retinopathy. The people with diabetes who kept their blood sugar levels as close to normal as possible also had much less kidney and nerve disease. Better control also reduces the need for sight-saving laser surgery. This tight control of blood sugar control may not be best for everyone, including some elderly patients, children under age 13, or people with heart disease. Be sure to ask your doctor if such a control program is right for you.",
    "consultNow" : "yes"
  },
  "213" : {
    "itemNumber" : 213,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "What are some points to remember about diabetic retinopathy?",
    "answer" : "1. If you have diabetes, get a comprehensive dilated eye exam at least once a year. 2. Proliferative retinopathy can develop without symptoms. If it gets to this advanced stage, you are at high risk for vision loss or even blindness. 3. Macular edema can develop without symptoms at any of the four stages of diabetic retinopathy. 4. You can develop both proliferative retinopathy and macular edema and still see fine. However, you are at high risk for vision loss. 5. Your eye care professional can tell if you have macular edema or any stage of diabetic retinopathy. Whether or not you have symptoms, early detection and timely treatment can prevent vision loss.",
    "consultNow" : "yes"
  },
  "214" : {
    "itemNumber" : 214,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "If I have diabetes do I have to be more careful to control my high blood pressure?",
    "answer" : "As diabetes itself increases the risk of cardiovascular complications, blood pressure (which can further increase risk) needs careful attention. In general most doctors will consider treating blood pressure in patients with diabetes at lower levels than in patients who do not have diabetes.",
    "consultNow" : "yes"
  },
  "215" : {
    "itemNumber" : 215,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "How can pregestational diabetes affect my pregnancy?",
    "answer" : "If your diabetes is not managed well, you are at increased risk of several of the complications associated with diabetes. The following problems can occur in women with diabetes: 1. Birth defects 2. High blood pressure 3. Hydramnios—In this condition, there is an increased amount of amniotic fluid in the amniotic sac that surrounds the baby. It can lead to preterm labor and delivery. 4. Macrosomia (very large baby)—The baby receives too much glucose from the mother and can grow too large. A large baby can make delivery more difficult. A large baby also increases the risk of having a cesarean delivery.",
    "consultNow" : "yes"
  },
  "216" : {
    "itemNumber" : 216,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "How can pregestational diabetes affect my baby?",
    "answer" : "Babies born to mothers with pregestational diabetes may have problems with breathing, low glucose levels, and jaundice. Most babies do well after birth, although some may need to spend time in a special care nursery. The good news is that with proper planning and control of your diabetes, you can decrease the risk of these problems.",
    "consultNow" : "yes"
  },
  "217" : {
    "itemNumber" : 217,
    "category" : "Diabetes",
    "subCategory" : "",
    "doctorName" : "Dr. Kalpana",
    question : "If I have diabetes and wish to become pregnant, is it important to tell my health care provider?",
    "answer" : "Yes, your health care provider will help you get your blood glucose level under control before you become pregnant (if it is not already). Controlling your glucose level is important because some of the birth defects caused by high glucose levels happen when the baby’s organs are developing in the first 8 weeks of pregnancy—before you may know you are pregnant. Getting your glucose level under control may require changing your medications, diet, and exercise program.",
    "consultNow" : "yes"
  },
  "2" : {
    "itemNumber" : 2,
    "category" : "Hypertension",
    "subCategory" : "Information",
    "doctorName" : "Dr.Kalpana",
    question : "I am 45 years old female and very conscious about my health, recently I noticed that there is a fluctuation in my BP? What Is a Normal Blood Pressure?",
    "answer" : "High Blood Pressure has classified blood pressure measurements into several categories: 1. Normal blood pressure is systolic pressure less than 120 and diastolic pressure less than 80 mmHg. 2. \"Prehypertension\" is systolic pressure of 120-139 or diastolic pressure of 80-89 mmHg. 3. Stage 1 Hypertension is systolic pressure of 140-159 or diastolic pressure of 90-99 mmHg. 4. Stage 2 Hypertension is systolic pressure of 160 or greater or diastolic pressure of 100 or greater.",
    "consultNow" : ""
  },
  "3" : {
    "itemNumber" : 3,
    "category" : "Hypertension",
    "subCategory" : "Complications",
    "doctorName" : "Dr.Kalpana",
    question : "What health problems are associated with high blood pressure (hypertension)?",
    "answer" : "Several potentially serious health conditions are linked to hypertension: Atherosclerosis: is a disease of the arteries caused by a buildup of plaque, or fatty material, on the inside walls of the blood vessels Heart disease: heart failure (the heart can’t adequately pump blood), ischaemic heart disease (the heart tissue doesn’t get enough blood), and hypertensive hypertrophic cardiomyopathy (enlarged heart) are all associated with high blood pressure. Kidney disease: hypertension can damage the blood vessels and filters in the kidneys, so that the kidneys cannot excrete waste properly. Stroke: hypertension can lead to stroke, either by contributing to the process of atherosclerosis (which can lead to blockages and/or clots), or by weakening the blood vessel wall and causing it to rupture. Eye disease: hypertension can damage the very small blood vessels in the retina.",
    "consultNow" : ""
  },
  "4" : {
    "itemNumber" : 4,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "How do I know if I have high blood pressure?",
    "answer" : "High blood pressure usually doesn’t have any symptoms, If your blood pressure is extremely high, you may have unusually strong headaches, chest pain and especially difficulty breathing and poor exercise tolerance . If you have any of these symptoms, Consult Doctor immediately.",
    "consultNow" : ""
  },
  "5" : {
    "itemNumber" : 5,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "What other factors increase my chances of getting high blood pressure?",
    "answer" : "1. Eating too much sodium (salt) 2. Drinking too much alcohol 3. Being physically inactive 4. Smoking 5. Not getting enough potassium in your diet 6. Having long-lasting stress.",
    "consultNow" : ""
  },
  "6" : {
    "itemNumber" : 6,
    "category" : "Hypertension",
    "subCategory" : "Treatment",
    "doctorName" : "Dr.Kalpana",
    question : "How is high blood pressure treated?",
    "answer" : "High blood pressure is treated with lifestyle changes and medicines. Treatment can help control blood pressure, but it will not cure high blood pressure, even if your blood pressure readings appear normal. If you stop treatment, your blood pressure and risk for related health problems will rise. For a healthy future, follow your treatment plan closely.",
    "consultNow" : ""
  },
  "7" : {
    "itemNumber" : 7,
    "category" : "Hypertension",
    "subCategory" : "Medication",
    "doctorName" : "Dr.Kalpana",
    question : "What Are the Side Effects of High Blood Pressure Drugs?",
    "answer" : "As is true with any medication, high blood pressure drugs have side effects. Among the most common are the following: 1. Diuretics: headache, weakness, low potassium blood levels 2. ACE inhibitors: dry and persistent cough, headache, diarrhea, high potassium blood levels 3. Angiotensin receptor blockers: fatigue, dizziness or fainting, diarrhea, high potassium blood levels 4. Calcium channel blockers: dizziness, heart rhythm problems, ankle swelling 5. Beta-blockers: dizziness or lightheadedness, decreased sexual ability, drowsiness, low heart rate 6. Alpha-blockers: dizziness, headache, pounding heartbeat, nausea, weakness, weight gain",
    "consultNow" : ""
  },
  "8" : {
    "itemNumber" : 8,
    "category" : "Hypertension",
    "subCategory" : "Complications",
    "doctorName" : "Dr.Kalpana",
    question : "How serious is hypertension?",
    "answer" : "High blood pressure can stretch the tissue in your arterial walls, leading to weakened or scarred blood vessels, increased risk of blood clots, narrowed and blocked arteries, organ damage, heart attack, stroke, vision loss and kidney failure.",
    "consultNow" : ""
  },
  "9" : {
    "itemNumber" : 9,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "How Much Exercise Is enough to lower Blood pressure?",
    "answer" : "Exercise is one of the keys to lower your blood pressure. Working out also boosts the effectiveness of blood pressure medication if you're already being treated for hypertension. You don't have to be an athlete, either.",
    "consultNow" : ""
  },
  "10" : {
    "itemNumber" : 10,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "Is warming up and cooling down is necessary during exercise?",
    "answer" : "Warming up before exercise and cooling down after are important for people with high blood pressure. These exercises let your heart rate rise and return to normal gradually. Walking in place or on a treadmill for 10 minutes is fine for warming up before exercise and also for cooling down.",
    "consultNow" : ""
  },
  "11" : {
    "itemNumber" : 11,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "I am 45 years old male suffering with blood pressure, what a types of exercise and which exercise is best for me?",
    "answer" : "There are three basic types of exercise: 1. Cardiovascular, or aerobic, exercise can help lower your blood pressure and make your heart stronger. Examples include walking, jogging, jumping rope, bicycling (stationary or outdoor), cross-country skiing, skating, rowing, high- or low-impact aerobics, swimming, and water aerobics. 2. Strength training builds strong muscles that help you burn more calories throughout the day. It’s also good for your joints and bones. 3. Stretching makes you more flexible, helps you move better, and helps prevent injury. Aerobic exercises suits you more. Always consult doctor before to physical activity.",
    "consultNow" : ""
  },
  "12" : {
    "itemNumber" : 12,
    "category" : "Hypertension",
    "subCategory" : "Tips",
    "doctorName" : "Dr.Kalpana",
    question : "I would like to know if there are any exercise tips for those with High Blood Pressure?",
    "answer" : "3 Ways to Stick With Exercise 1. Make it fun! You'll be more likely to stick with it. 2. Schedule exercise into your daily routine. Plan when you're going to exercise and put it on your calendar. 3. Find an exercise \"buddy.\" This will help you stay motivated and enjoy it more.",
    "consultNow" : ""
  },
  "13" : {
    "itemNumber" : 13,
    "category" : "Hypertension",
    "subCategory" : "Facts",
    "doctorName" : "Dr.Kalpana",
    question : "Is it true that aerobic exercises are good for hypertensive patients?",
    "answer" : "Aerobic exercise refers to any sustained body movement that gets your blood pumping. Aerobic exercise increases the efficiency of your cardiovascular system, which, in turn, lowers blood pressure–by five points or more. A good rule of thumb: When aerobic activity makes you breathe hard, you’re working effectively.",
    "consultNow" : ""
  },
  "14" : {
    "itemNumber" : 14,
    "category" : "Hypertension",
    "subCategory" : "Tips",
    "doctorName" : "Dr.Kalpana",
    question : "How can I avoid overdoing exercise?",
    "answer" : "Here are a few tips: 1. Gradually increase your activity level, especially if you have not been exercising regularly. 2. Wait at least one and a half hours after eating a meal before exercising. 3. Take time to include a 5-minute warm-up before any aerobic activity and include a 5- to 10-minute cool down after the activity. Stretching can be done while standing or sitting. 4. Exercise at a steady pace. Keep a pace that allows you to still talk during the activity. 5. Keep an exercise record.",
    "consultNow" : ""
  },
  "15" : {
    "itemNumber" : 15,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "What type of exercise is best to control Blood pressure?",
    "answer" : "Different types of activity and exercise have different effects on the body. Aerobic exercise is the most helpful for your heart. Aerobic exercise is steady physical activity using large muscle groups. This type of exercise strengthens the heart and lungs and improves the body's ability to use oxygen. Over time aerobic exercise can help decrease your heart rate and blood pressure and improve your breathing.",
    "consultNow" : ""
  },
  "16" : {
    "itemNumber" : 16,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "What are examples of aerobic exercises to control Blood pressure?",
    "answer" : "Aerobic exercises include: walking, jogging, skipping, cycling (stationary or outdoor), dancing, skating, rowing, high or low-impact aerobics, swimming and water aerobics.",
    "consultNow" : ""
  },
  "17" : {
    "itemNumber" : 17,
    "category" : "Hypertension",
    "subCategory" : "Hazards",
    "doctorName" : "Dr.Kalpana",
    question : "I often get pain in my chest when I do exercise for about 1 hour? Is it dangerous or no? Could you please tell me the warning signs of Heart attack?",
    "answer" : "Stop exercising and rest if you have any of the following symptoms: 1. Chest pain 2. Weakness 3. Dizziness or light headedness 4. Unexplained weight gain or swelling 5. Pressure or pain in your chest, neck, arm, jaw or shoulder or any other symptoms that cause concern.",
    "consultNow" : ""
  },
  "18" : {
    "itemNumber" : 18,
    "category" : "Hypertension",
    "subCategory" : "Combination therapy",
    "doctorName" : "Dr.Kalpana",
    question : "Can exercise and proper nutrition protect clients from Hypertension?",
    "answer" : "Overweight and obesity are associated with many cardiovascular risks, including hypertension. Exercise has become a staple in weight management and weight loss programs, but is mostly effective when implemented concurrently with diet modifications.",
    "consultNow" : ""
  },
  "19" : {
    "itemNumber" : 19,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "Can exercise replace my medications?",
    "answer" : "A 10-point drop in blood pressure may be impressive, but it often isn't enough to bring pressure within a healthy range. (A healthy range was formerly defined as below 140/90, but according to new federal guidelines is now below 120/80.) For optimal control, many people need to combine a healthy, active lifestyle with medication. If you're already taking medicine for blood pressure, regular exercise may allow you to lower the dose. If your pressure wasn't too high to begin with, a new exercise routine might allow you to stop taking medication entirely. In any event, always consult with your doctor before you make any changes in your medication.",
    "consultNow" : ""
  },
  "20" : {
    "itemNumber" : 20,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "Is exercise safe for hypertensive patient?",
    "answer" : "If you're at high risk for heart trouble, doctor may recommend a stress test to determine what is a safe level of exercise for you. In addition, it's a good idea to watch for signs of heart trouble while exercising. Stop your activity right away if you feel discomfort in your chest, jaw, or arm, or if you become dizzy or severely out of breath. Immediately consult doctor",
    "consultNow" : ""
  },
  "21" : {
    "itemNumber" : 21,
    "category" : "Hypertension",
    "subCategory" : "Precaution",
    "doctorName" : "Dr.Kalpana",
    question : "What are the Precautions to be taken before performing physical activity?",
    "answer" : "It is important to note that most patients with high-normal and grade 1 hypertension can safely participate in moderate exercise programs without thorough medical screening; however it is recommended to seek medical advice before starting any physical activity program",
    "consultNow" : ""
  },
  "22" : {
    "itemNumber" : 22,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "I am 43 years old female very conscious about my health. I do exercise daily in the morning and evening, I heard that blood pressure increases during exercises? Is it true?",
    "answer" : "Yes it is true. When you are exercising your muscles need more oxygen. The heart then pumps more blood around your body with more powerful contractions which will make your blood pressure increase. Your systolic blood pressure increases during exercise as the cardiovascular system delivers more blood to the working muscles and your diastolic blood pressure stays roughly the same or decrease slightly.",
    "consultNow" : ""
  },
  "23" : {
    "itemNumber" : 23,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "I am 40 years male diagnosed wild mild hypertension, Doctor suggested me to do some exercises daily but how much time I need to spent to do it?",
    "answer" : "It is recommended that you exercise either 2½ hours of moderate exercise or 1 hour and 15 minutes of vigorous exercise a week, or even a combination of the two. Moderate exercises, which can be any aerobic exercise that increases both your heart and breathing rates, include exercises, such as swimming, bicycling, jogging, walking (speed, or power), etc.",
    "consultNow" : ""
  },
  "24" : {
    "itemNumber" : 24,
    "category" : "Hypertension",
    "subCategory" : "Surgery",
    "doctorName" : "Dr.Kalpana",
    question : "I am 45 years old female with hypertension, recently underwent surgery of hystrectomy, Doctor suggested me to do exercise after 3 weeks? What kind exercise suits me, Please suggest?",
    "answer" : "As soon as you recover, you may exercise by taking short walks and making slow and gradual increases in your level of activity. Perform Kegel exercises to strengthen your pelvic floor muscles by tightening your vaginal muscles as if you're trying to stop the flow of urine. Hold the contraction for 5 seconds, relax and repeat the exercise. Strengthen your stomach muscles by getting on your hands and knees and tightening your stomach muscles as you exhale slowly, hold the position for 5 seconds, relax the contraction and repeat. Stretch your upper back and shoulders by lying in the bed and raising your hands above your head with your palms facing upward. Press downward into the bed with your arms. Hold the position for 5 to 10 seconds, relax the stretch and repeat. It is always necessary to consult a physician before beginning any exercise",
    "consultNow" : ""
  },
  "25" : {
    "itemNumber" : 25,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "I am 50 years old male, I feel chest pain when I am doing the treadmill with a speed of 4.5. Is it a warning sign of heart attack or not? Could you please suggest me whether I can do exercise or not?",
    "answer" : "Stop exercise and it is always a danger situation when you are suffering with chest pain while you are on treadmill. Stop exercise and consult doctor immediately.",
    "consultNow" : ""
  },
  "26" : {
    "itemNumber" : 26,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "I am 38 years old male athletic diagnosed with high blood pressure, are there any sports or activities I should avoid?",
    "answer" : "You should aim to work at a level you feel is light to moderate, not hard or very hard.ou should not do the following, as they can raise your blood pressure to dangerous levels for a short period of time: a. Lift heavy weights without supervision from a qualified exercise trainer b. Vigorous short bursts of exercise like boxing or squash",
    "consultNow" : ""
  },
  "27" : {
    "itemNumber" : 27,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "I am 36 years old male and my weight is 150 kgs, recently diagnosed with blood pressure and obese my waist measurement is greater than 40 inches (102 centimeters).Can you suggest me some exercises?",
    "answer" : "You can do all kinds of physical activities, including the four types of exercise shown in this guide. Try walking, water exercises, dancing, or weight lifting. Anything that gets you moving — even for only a few minutes a day in the beginning — is a healthy start. Very large people may face special challenges. For example, you may not be able to bend or move easily, or you may feel self-conscious. Facing these challenges is hard — but it can be done. Feel good about what you can do, and pat yourself on the back for trying. It should get easier.",
    "consultNow" : ""
  },
  "28" : {
    "itemNumber" : 28,
    "category" : "Hypertension",
    "subCategory" : "Complications",
    "doctorName" : "Dr.Kalpana",
    question : "I have a medical condition (such as arthritis, high blood pressure, diabetes, heart disease). Is it safe for me to exercise?",
    "answer" : "Exercise is safe for almost everyone. In fact, studies show that people with arthritis, high blood pressure, diabetes, or heart disease benefit from regular exercise and physical activity. In some cases, exercise actually can improve some of these conditions. You may want to talk with your doctor about how your health condition might affect your ability to be active.",
    "consultNow" : ""
  },
  "29" : {
    "itemNumber" : 29,
    "category" : "Hypertension",
    "subCategory" : "Information",
    "doctorName" : "Dr.Kalpana",
    question : "I am 25 years old female and found of sweets and junk food , recently my mother is diagnosed with high blood pressure, I am afraid that I may get high blood pressure. Is it better to join an exercise class or group, or exercise on my own?",
    "answer" : "There are many ways to be active. The key is to find activities you truly enjoy. If you prefer individual activities, try swimming, gardening, or walking. Dancing or playing tennis may be for you if you enjoy two-person activities. If group activities appeal to you, try a sport such as basketball or join an exercise class. Some people find that going to a gym regularly or working with a fitness trainer helps them stay motivated.",
    "consultNow" : ""
  },
  "30" : {
    "itemNumber" : 30,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "My family/ genetic history are suffered with hypertension and I am obese at the age of 30 years old female, I do walking daily to burn my calories. Is walking is enough or do I need to do other exercises in addition to my usual walking routine?",
    "answer" : "Most people tend to focus on one type of exercise or activity and think they’re doing enough. Try to do all four types — endurance, strength, flexibility, and balance — because each one has different benefits. Doing one kind also can improve your ability to do the others. In addition, variety helps reduce boredom and risk of injury",
    "consultNow" : ""
  },
  "31" : {
    "itemNumber" : 31,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "I heard that breathing exercises will lower the blood pressure? Is it true?",
    "answer" : "Yes it is true. Abdominal breathing is one of the simplest, most basic deep breathing exercises for blood pressure management. Take a deep slow breath through your nose—but make sure that your chest does not move. As you inhale, you know you’re doing it right when your stomach is pushing out your hand. Once you’ve filled your lungs with air, hold it for at least 7 seconds, then exhale equally slowly.",
    "consultNow" : ""
  },
  "32" : {
    "itemNumber" : 32,
    "category" : "Hypertension",
    "subCategory" : "Complications",
    "doctorName" : "Dr.Kalpana",
    question : "I am 26years old female ,I am 5 months pregnant diagnosed with Gestational hypertension? Doctor advised me to do some exercises?",
    "answer" : "Try to exercise for at least 30 minutes a day or most days throughout the week. If you are a beginner, try low-intensity walking or swimming. Relaxation techniques such as breathing exercises to lower your stress levels and help to stabilize your blood pressure. 1. Breathing from your stomach: Sit in a comfortable place with your legs folded. Relax your entire body including your jaws, shoulders and hips. Keep one hand under your belly and another above it. Then breathe deep from your lower abdomen, filling your belly with air to the count of 8 or any number you are comfortable with. Exhale slowly counting the same number. Do this at least for 10 minutes every day until it comes naturally to you. If your belly is not showing yet, you can just sit and follow the same technique, resting your palms on your knees. 2. Breathing from the chest: Stand upright and keep your feet parallel to each other. Keep your mouth closed and take a deep breath counting till 10. Place your hands on your chest. However, take care that you don’t press too hard on your chest. As you inhale, feel your hand move outwards as your lungs expand. Hold your breath for a few seconds and then exhale slowly. Take as much time to exhale as you did while inhaling the fresh air. A simple way to do it is by counting the same number as you did while breathing in. Repeat the whole exercise for ten times to reap its benefits. Always talk to your doctor before starting an exercise program and ask if it is safe for you to do certain activities.[",
    "consultNow" : ""
  },
  "33" : {
    "itemNumber" : 33,
    "category" : "Hypertension",
    "subCategory" : "Information",
    "doctorName" : "Dr.Kalpana",
    question : "Can exercise replace my medications?",
    "answer" : "10-point drop in blood pressure may be impressive, but it often isn't enough to bring pressure within a healthy range. (A healthy range was formerly defined as below 140/90, but according to new federal guidelines is now below 120/80.) For optimal control, many people need to combine a healthy, active lifestyle with medication. If you're already taking medicine for blood pressure, regular exercise may allow you to lower the dose. If your pressure wasn't too high to begin with, a new exercise routine might allow you to stop taking medication entirely. In any event, always consult with your doctor before you make any changes in your medication.",
    "consultNow" : ""
  },
  "34" : {
    "itemNumber" : 34,
    "category" : "Hypertension",
    "subCategory" : "Complications",
    "doctorName" : "Dr.Kalpana",
    question : "I am 46 years with hypertensive retinopathy has decreased vision, Can you suggest me some exercise which help in clarity of my vision.",
    "answer" : "We all know how important it is to keep our bodies fit by keeping active and maintaining a regular exercise routine. Before you attempt eye exercises, it's a good idea to get a professional eye exam done by your optometrist. 1.Palm your eyes:Closing your eyes and applying light pressure to them will spread th e tear film in your eyes evenly and relax them. 2.Strengthen your eyes’ near and far focusing:Place your thumb about 10 inches in front of your face and focus on it. You can also focus on an object that is 5-10 feet away for 10-15 seconds. Practice this 5 times. 3.Make a figure 8 with your eyes: Imagine a giant figure 8 on the floor, about 10 feet in front of you. 4.Do directional eye exercises:Move your eyes side to side 5 times. Repeat this three times. Then, look up. Focus on what you see. Repeat this three times. Then, move your eyes diagonally and look up and to the right. Focus on what you see. Repeat this exercise 5 times. Then, look straight ahead and do the same exercise looking down and to the right and then looking up and to the left. Repeat this cycle 3 times.",
    "consultNow" : ""
  },
  "35" : {
    "itemNumber" : 35,
    "category" : "Hypertension",
    "subCategory" : "Complications",
    "doctorName" : "Dr.Kalpana",
    question : "My grand father is suffering with hypertension, recently he is paralyzed one side of the body, doctors advice to consult Physiotherapy? In what way physiotherapy helps him?",
    "answer" : "These are the techniques in which you grand father may recover : Early Mobilization, Strength Training,Gait, Balance and Mobility, Treadmill Training,Electrical stimulation, Muscle Strengthening, Constraint Induced Movement Therapy, Repetitive Task Training, Splinting, Bed mobility exercises, Does and Donts",
    "consultNow" : ""
  },
  "36" : {
    "itemNumber" : 36,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "I am 26 years old has BP reading with 140/80, and my lipid profile readings are in border line, my doctor suggested me to do some exercises? Can you help me regarding this?",
    "answer" : "Nothing to worry about your health. As you are a beginner, here are some exercises that will help you to maintain your blood pressure and cholesterol in a normal levels. Start simple exercise like 30 min walking, then 10 min brisk walking, Riding a cycle at moderate intensity, less than 10 miles an hour over level ground, Gardening or other yard work such as mowing the lawn can also provide the moderate-intensity exercise you need to lower your blood pressure.",
    "consultNow" : ""
  },
  "37" : {
    "itemNumber" : 37,
    "category" : "Hypertension",
    "subCategory" : "Precaution",
    "doctorName" : "Dr.Kalpana",
    question : "I would like to Precautions for people with heart problems",
    "answer" : "People with heart conditions, in particular, should consult with their doctor before commencing an exercise regimen. People with existing heart conditions to avoid strenuous activity such as lifting weights, press ups or exercise which could result in chest pains or getting up from the floor quickly.",
    "consultNow" : ""
  },
  "38" : {
    "itemNumber" : 38,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "How exercise can lower your blood pressure and How are high blood pressure and exercise connected?",
    "answer" : "Regular physical activity makes your heart stronger. A stronger heart can pump more blood with less effort. If your heart can work less to pump, the force on your arteries decreases, lowering your blood pressure. Becoming more active can lower your systolic blood pressure — the top number in a blood pressure reading — by an average of 4 to 9 millimeters of mercury (mm Hg). That's as good as some blood pressure medications. For some people, getting some exercise is enough to reduce the need for blood pressure medication. If your blood pressure is at a desirable level — less than 120/80 mm Hg — exercise can help prevent it from rising as you age. Regular exercise also helps you maintain a healthy weight — another important way to control blood pressure. But to keep your blood pressure low, you need to keep exercising on a regular basis. It takes about one to three months for regular exercise to have an impact on your blood pressure. The benefits last only as long as you continue to exercise.",
    "consultNow" : ""
  },
  "39" : {
    "itemNumber" : 39,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "I am 44 years old male living with Hypertension since one year, my doctor suggested me to do some exercise and he also prescribed me some precautions before I start exercise, but unfortunately I lost my prescription, Could you please let me know about some precautions?",
    "answer" : "Sometimes it's best to check with your doctor before you jump into an exercise program, especially if: 1. You're a man older than age 45 or a woman older than age 55. 2. You smoke or quit smoking in the past six months. 3. You're overweight or obese. 4. You have a chronic health condition, such as diabetes, cardiovascular disease or lung disease. 5. You have high cholesterol or high blood pressure. 6. You've had a heart attack. 7. You have a family history of heart-related problems before age 55 in men and age 65 in women. 8. You feel pain or discomfort in your chest, jaw, neck or arms during activity. 9. You become dizzy with exertion. 10. You're unsure if you're in good health or you haven't been exercising regularly. If you take any medication regularly, ask your doctor if exercising will make it work differently or change its side effects — or if your medication will affect the way your body reacts to exercise.",
    "consultNow" : ""
  },
  "40" : {
    "itemNumber" : 40,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "What are the safety measures while doing exercise and when to seek immediate medical care ?",
    "answer" : "To reduce the risk of injury while exercising, start slowly. Remember to warm up before you exercise and cool down afterward. Build up the intensity of your workouts gradually. Stop exercising and seek immediate medical care if you experience any warning signs during exercise, including: 1. Chest, neck, jaw or arm pain or tightness 2. Dizziness or faintness 3. Severe shortness of breath 4. An irregular heartbeat",
    "consultNow" : ""
  },
  "41" : {
    "itemNumber" : 41,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "My mother is a hypertensive patient but conscious about healthy life, she do work outs daily for about two hours now her age is 43, she recently has some giddiness while doing exercise, How can I avoid overdoing it?",
    "answer" : "if your mother has giddiness while doing exercise it a medical emergency. Here are a few tips: 1. Gradually increase your activity level, especially if you have not been exercising regularly. 2. Wait at least one and a half hours after eating a meal before exercising. 3. Take time to include a 5-minute warm-up before any aerobic activity and include a 5- to 10-minute cool down after the activity. Stretching can be done while standing or sitting. 4. Exercise at a steady pace. Keep a pace that allows you to still talk during the activity. 5.Keep an exercise record.",
    "consultNow" : ""
  },
  "42" : {
    "itemNumber" : 42,
    "category" : "Hypertension",
    "subCategory" : "Life Style",
    "doctorName" : "Dr.Kalpana",
    question : "What lifestyle changes can help me control my blood pressure?",
    "answer" : "Some people can lower their blood pressure by making the same kinds of lifestyle changes that can help prevent high blood pressure. 1. Follow a healthy eating plan that includes fruits, vegetables, fat-free and low-fat milk products, whole grains, fish, poultry and nuts. See how the DASH diet (Dietary Approaches to Stop Hypertension) can help with blood pressure control. 2. Cut down on salt and sodium in the diet.Try not to eat more than 2,300 milligrams of sodium per day. 3. Be physically active for at least 2 and one-half hours a week. Check out Exercises to Try for older adults, or visit Go4Life®, the exercise and physical activity campaign from the National Institute on Aging. 4. Maintain a healthy weight, and lose weight if you are overweight or obese. Body mass index (BMI) and waist circumference are measures used to determine if someone is overweight or obese. See the BMI calculator to determine your body mass index. 5. Limit alcohol intake to no more than one drink a day for women and no more than two drinks a day for men. Drinking too much alcohol can raise your blood pressure. Alcohol also adds extra calories, which may cause weight gain. (Watch the video for tips on how to cut back on your drinking. To enlarge the video, click the brackets in the lower right-hand corner. To reduce the video, press the Escape (Esc) button on your keyboard.) 6. Quit smoking, or don't start smoking. To get help quitting, call 1 (800) QUIT-NOW or check out Quitting Smoking for Older Adults.",
    "consultNow" : ""
  },
  "43" : {
    "itemNumber" : 43,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "What is the relationship between blood pressure and body weight?",
    "answer" : "Blood pressure rises as body weight increases. Losing even 10 pounds can lower blood pressure -- and it has the greatest effect for those who are overweight and already have hypertension. If you are overweight or obese, work with your health care provider to develop a plan to help you lower your weight and maintain a healthy weight. Aim to reduce your weight by 7 to 10 percent over six months, which can lower your risk for health problems. For example, if you are overweight at 200 pounds, try to lose 14 to 20 pounds over six months. After that, you may have to continue to lose weight to get to a healthy weight.",
    "consultNow" : ""
  },
  "44" : {
    "itemNumber" : 44,
    "category" : "Hypertension",
    "subCategory" : "Diet",
    "doctorName" : "Dr.Kalpana",
    question : "What is the DASH Eating Plan?",
    "answer" : "\"DASH\" stands for \"Dietary Approaches to Stop Hypertension.\" This is the name of a clinical study that tested the effects of nutrients in food on blood pressure. Study results indicated that you can reduce high blood pressure by following an eating plan that emphasizes fruits, vegetables, and fat-free or low-fat milk and milk products, and that is low in saturated fat, cholesterol, total fat, and added sugars. Photo of different fruits and vegetables. The DASH eating plan also includes whole grains, poultry, fish, and nuts, and has reduced amounts of red meats, sweets, added sugars, and beverages containing sugars. A second study, called \"DASH-Sodium,\" showed that eating less salt also lowered blood pressure in people following either the DASH eating plan or the typical American diet. But those following DASH, especially those with high blood pressure, benefited the most.",
    "consultNow" : ""
  },
  "45" : {
    "itemNumber" : 45,
    "category" : "Hypertension",
    "subCategory" : "Diet",
    "doctorName" : "Dr.Kalpana",
    question : "Can I lose weight following the DASH eating plan?",
    "answer" : "Yes, the DASH eating plan can easily be changed to support weight loss, especially since it is rich in lower-calorie foods, such as fruits and vegetables. It doesn't require any special foods or hard-to-follow recipes. It simply calls for a certain number of daily servings from various food groups. The number of servings you need depends on your calorie level. To lose weight, aim for a calorie level that is lower than what you usually eat. You can make it even lower in calories by replacing higher calorie foods, such as sweets, with more fruits and vegetables. Combining the DASH eating plan with a regular physical activity program will help you both shed pounds and stay at a healthy weight for the long term.",
    "consultNow" : ""
  },
  "46" : {
    "itemNumber" : 46,
    "category" : "Hypertension",
    "subCategory" : "Complications",
    "doctorName" : "Dr.Kalpana",
    question : "What other factors increase my chances of getting high blood pressure?",
    "answer" : "1. Eating too much sodium (salt) 2. Drinking too much alcohol 3. Being physically inactive 4. smoking 5. Not getting enough potassium in your diet 6. Having long-lasting stress.",
    "consultNow" : ""
  },
  "47" : {
    "itemNumber" : 47,
    "category" : "Hypertension",
    "subCategory" : "Complications",
    "doctorName" : "Dr.Kalpana",
    question : "My father expired at the age of 49 years due to heart attack? I would like to know what are the symptoms of Heart attack?",
    "answer" : "Most heart attacks involve discomfort in the center of the chest that lasts more than a few minutes or goes away and comes back. The discomfort can feel like uncomfortable pressure, squeezing, fullness, or pain. It can include pain or numbness in one or both arms, the back, neck, jaw, or stomach. Heart attack pain can sometimes feel like indigestion or heartburn. Shortness of breath often happens along with, or before chest discomfort. Other symptoms may include breaking out in a cold sweat, having nausea and vomiting, or feeling light-headed or dizzy. Symptoms vary, and some people have no symptoms. Know the symptoms of a heart attack so you can act fast to get treatment.",
    "consultNow" : ""
  },
  "48" : {
    "itemNumber" : 48,
    "category" : "Hypertension",
    "subCategory" : "Life Style",
    "doctorName" : "Dr.Kalpana",
    question : "What can I do to lower my risk for a heart attack?",
    "answer" : "You can lower your risk of having a heart attack, even if you have already had a heart attack or have been told that your chances of having a heart attack are high. To prevent a heart attack, you will need to make lifestyle changes. You may also need to get treatment for conditions that raise your risk. Lifestyle changes you can make to lower your risk for heart attack include the following: 1. If you smoke, quit. 2. Maintain a healthy weight. Lose weight gradually if you are overweight or obese. 3. Follow a heart healthy diet -- such as one low in salt, saturated fat and trans fat, and calories -- to prevent or reduce high blood pressure and high blood cholesterol and maintain a healthy weight. 4. Be as physically active as you can.",
    "consultNow" : ""
  },
  "49" : {
    "itemNumber" : 49,
    "category" : "Hypertension",
    "subCategory" : "Complications",
    "doctorName" : "Dr.Kalpana",
    question : "What are other related conditions that might get heart attack?",
    "answer" : "Get treatment for related conditions that might make having a heart attack more likely. 1. If you have high blood cholesterol, follow your doctor's advice about lowering it. Take medications to lower your cholesterol as directed. 2. If you have high blood pressure, follow your doctor's advice about keeping it under control. Take blood pressure medications as directed. 3. If you have diabetes, sometimes called high blood sugar, follow your doctor's advice about keeping blood sugar levels under control. Take your medicines as directed.",
    "consultNow" : ""
  },
  "50" : {
    "itemNumber" : 50,
    "category" : "Hypertension",
    "subCategory" : "Life Style",
    "doctorName" : "Dr.Kalpana",
    question : "Does having a heart attack mean I can't do all the things I enjoy doing?",
    "answer" : "There are millions of people who have survived a heart attack. Many recover fully and are able to lead normal lives. Most people without chest pain are able to return to their normal activities within a few weeks after an uncomplicated heart attack. Most can begin walking immediately. Sexual activity can also begin within a few weeks for most patients who do not have chest pain or other complications",
    "consultNow" : ""
  },
  "51" : {
    "itemNumber" : 51,
    "category" : "Hypertension",
    "subCategory" : "Complication",
    "doctorName" : "Dr.Kalpana",
    question : "My father suffered with heart attack symptoms last year in the month of October and doctors advised to be very cautious next time? What should be the emergency action plan include?",
    "answer" : "Having a heart attack increases your chances of having another one. Therefore, it is very important that you and your family know how and when to seek medical attention. Talk to your doctor about making an emergency action plan, and discuss it with your family. The emergency action plan should include 1. warning signs or symptoms of a heart attack 2. Instructions for accessing emergency medical services ie. Call 108 3. Steps you can take while waiting for medical help to arrive, such as taking aspirin and nitroglycerin 4. Important information to take along with you to the hospital, such as a list of medications that you take or that you are allergic to, and name and number of whom you should contact if you go to the hospital.",
    "consultNow" : ""
  },
  "52" : {
    "itemNumber" : 52,
    "category" : "Hypertension",
    "subCategory" : "Complication",
    "doctorName" : "Dr.Kalpana",
    question : "If I have had a heart attack, how can I manage my concerns about my health?",
    "answer" : "After a heart attack, many people worry about having another heart attack. They often feel depressed and may have trouble adjusting to a new lifestyle. You should discuss your feelings with your doctor. Your doctor can give you medication for anxiety or depression and may recommend professional counseling. Spend time with family, friends, and even pets. Affection can make you feel better and less lonely. Most people stop feeling depressed after they have fully recovered",
    "consultNow" : ""
  },
  "53" : {
    "itemNumber" : 53,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "When I leave the hospital after a heart attack, will I need to do any follow-up?",
    "answer" : "After a heart attack, you will need to see your doctor regularly for checkups and tests to see how your heart is doing. Your doctor may recommend 1. lifestyle changes such as quitting smoking, changing your diet, or increasing your physical activity. 2. Medications, such as aspirin, nitroglycerin tablets for angina, and medications to lower your cholesterol or blood pressure and help reduce your heart's workload. 3. Participation in a cardiac rehabilitation program.",
    "consultNow" : ""
  },
  "54" : {
    "itemNumber" : 54,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "Should I be concerned if I start feeling chest pain again after a heart attack?",
    "answer" : "Many heart attack survivors also have chest pain or angina. The pain usually occurs after exertion or emotional stress and goes away in a few minutes when you rest or take nitroglycerin as directed. In a heart attack, the pain is usually more severe than angina, and it does not go away when you rest or take your angina medication. If you think your chest pain could be a heart attack, Call 108 immediately.",
    "consultNow" : ""
  },
  "55" : {
    "itemNumber" : 55,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "My father expired at age of 45 years due to heart attack and I need to taking care of my family since 12 years now I am suffering with hypertension at the age of 33 recently got married ? Will my sex life be affected?",
    "answer" : "Possibly, for two reasons. First, high blood pressure itself may reduce sexual drive, and secondly, some drugs that lower blood pressure also reduce libido. If this happens be sure to Consult doctor.",
    "consultNow" : ""
  },
  "56" : {
    "itemNumber" : 56,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "What is white coat hypertension?",
    "answer" : "White coat hypertension occurs in as many as 20 per cent of people with high blood pressure. What happens is that these people have a high blood pressure in the presence of a doctor or nurse, or in a hospital, but when they get away from the medical environment their blood pressures return to normal. We speak of the white coat reaction to characterize those people with high blood pressure whose blood pressure is higher in the medical environment than outside it. This condition only became apparent with the development of devices capable of measuring blood pressure over 24-hours. So your doctor may ask you to have ABPM, as it is called, to see if your blood pressure is really what it appears to be with conventional measurement.",
    "consultNow" : ""
  },
  "57" : {
    "itemNumber" : 57,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "Is white coat hypertension harmless?",
    "answer" : "White coat hypertension is not normal, otherwise, we would all have it, but people with white coat hypertension are at much lower risk than people with sustained elevation of blood pressure. However, they may develop high blood pressure later in life. So whereas people with white coat hypertension may not require drug treatment at the time of diagnosis, they may later develop sustained high blood pressure, and annual checks on blood pressure are therefore important. Of course, when other risk factors are present, these should also be modified.",
    "consultNow" : ""
  },
  "58" : {
    "itemNumber" : 58,
    "category" : "Hypertension",
    "subCategory" : "Complication",
    "doctorName" : "Dr.Kalpana",
    question : "Can stroke and heart attack be prevented?",
    "answer" : "YES! The reason doctors want to detect people with high blood pressure is that it now well established that if high blood pressure is brought down to normal the damage to the cardiovascular system is halted and reversed, and stroke and heart attack are prevented, or at least postponed. Other risk factors, such as high cholesterol, smoking and overweight, must be dealt with.",
    "consultNow" : ""
  },
  "59" : {
    "itemNumber" : 59,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "I am 35 years old female at which age I can expect heart attack? Who is at greatest risk of a heart attack?",
    "answer" : "Now a days people are suffering with Heart attack at the age of 30 years. It is mainly due to the life style they adapted. Certain factors increase the risk of developing coronary heart disease and having a heart attack. These risk factors include some things you cannot change. You are at greater risk if you 1. Are a man over age 45 or a woman over age 55. 2. Have a family history of early heart disease -- heart disease in a father or brother 3. Before age 55 or in a mother or sister before age 65. 4. Have a personal history of angina or previous heart attack. 5. Have had a heart procedure, such as angioplasty or heart bypass. Importantly, there are many risk factors for heart attack that you CAN change, including 1. Smoking 2. Being obese or overweight 3. Being physically inactive 4. Having high blood pressure, high blood cholesterol or diabetes.",
    "consultNow" : ""
  },
  "60" : {
    "itemNumber" : 60,
    "category" : "Hypertension",
    "subCategory" : "Life Style",
    "doctorName" : "Dr.Kalpana",
    question : "What can I do to lower my risk for a heart attack?",
    "answer" : "You can lower your risk of having a heart attack, even if you have already had a heart attack or have been told that your chances of having a heart attack are high. To prevent a heart attack, you will need to make lifestyle changes. You may also need to get treatment for conditions that raise your risk. Lifestyle changes you can make to lower your risk for heart attack include the following: 1. If you smoke, quit. 2. Maintain a healthy weight. Lose weight gradually if you are overweight or obese. 3. Women preparing a meal. 4. Follow a heart healthy diet -- such as one low in salt, saturated fat and trans fat, and calories -- to prevent or reduce high blood pressure and high blood cholesterol and maintain a healthy weight. 5. Be as physically active as you can.",
    "consultNow" : ""
  },
  "61" : {
    "itemNumber" : 61,
    "category" : "Hypertension",
    "subCategory" : "Complication",
    "doctorName" : "Dr.Kalpana",
    question : "What tests are used to diagnose a heart attack?",
    "answer" : "Several tests are used to diagnose a heart attack. 1. An electrocardiogram, also called an EKG, measures the rate and regularity of your heartbeat. 2. Blood tests identify and measure markers in the blood that can show how much damage was done to your heart. These tests are often repeated at specific time periods to check for changes. 3. A nuclear heart scan uses radioactive tracers to show damage to heart chambers and major blood vessels. 4. Cardiac catheterization involves passing a thin flexible tube through an artery in your groin or arm to look at your coronary arteries. It allows your doctor to examine the blood flow in your heart's chambers. 5. Cardiac angiography is usually performed along with cardiac catheterization, using a dye injected through the cardiac catheter. The dye allows the doctor to see where there may be blockages in the coronary arteries.",
    "consultNow" : ""
  },
  "62" : {
    "itemNumber" : 62,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "How is a heart attack treated?",
    "answer" : "If you are having a heart attack, doctors will work quickly to restore blood flow to the heart and continuously monitor vital signs to detect and treat complications. Restoring blood flow to the heart can prevent or limit damage to the heart muscle and help prevent another heart attack. Doctors may use clot-busting drugs called thrombolytics and procedures, such as angioplasty. Long-term treatment after a heart attack may include cardiac rehabilitation, checkups and tests, lifestyle changes, and medications.",
    "consultNow" : ""
  },
  "63" : {
    "itemNumber" : 63,
    "category" : "Hypertension",
    "subCategory" : "Complication",
    "doctorName" : "Dr.Kalpana",
    question : "My uncle is 50 years old, had heart attack recently and after two weeks again he suffered with angina/chest pain? What is angina and how is it different from a heart attack?",
    "answer" : "Angina is a recurring pain or discomfort in the chest that happens when some part of the heart does not receive enough blood. An episode of angina is not a heart attack. However, people with angina may have a hard time telling the difference between angina and heart attack symptoms. Angina is chest pain or discomfort that occurs when your heart muscle does not get enough blood. Angina may feel like pressure or a squeezing pain in your chest. The pain may also occur in your shoulders, arms, neck, jaw, or back. It may also feel like indigestion. It is usually relieved within a few minutes by resting or by taking prescribed angina medicine.",
    "consultNow" : ""
  },
  "64" : {
    "itemNumber" : 64,
    "category" : "Hypertension",
    "subCategory" : "Drugs",
    "doctorName" : "Dr.Kalpana",
    question : "What medicines are used to treat people who have had or are having a heart attack?",
    "answer" : "There are many medicines that are used to treat a heart attack. 1. Clot-busters or thrombolytic drugs dissolve blood clots that are blocking blood flow to the heart. 2. Beta blockers decrease the workload on your heart by slowing your heart rate. 3. Angiotensin-converting enzyme (ACE) inhibitors lower your blood pressure and reduce the strain on your heart. 4. Nitrates, such as nitroglycerin relax blood vessels and relieve chest pain. 5. Anticoagulants thin the blood and prevent clots from forming in your arteries. 6. Antiplatelet medications, such as aspirin and clopidogrel, stop platelets from clumping together to form clots. These medications are given to people who have had a heart attack, have angina, or have had angioplasty. Doctors may also prescribe medicines to relieve pain and anxiety, or to treat irregular heart rhythms which often occur during a heart attack.",
    "consultNow" : ""
  },
  "65" : {
    "itemNumber" : 65,
    "category" : "Hypertension",
    "subCategory" : "Life Style",
    "doctorName" : "Dr.Kalpana",
    question : "My friend suffered with an heart attack at the young age of 36 years. Does having a heart attack mean I can't do all the things I enjoy doing?",
    "answer" : "There are millions of people who have survived a heart attack. Many recover fully and are able to lead normal lives. Most people without chest pain are able to return to their normal activities within a few weeks after an uncomplicated heart attack. Most can begin walking immediately. Sexual activity can also begin within a few weeks for most patients who do not have chest pain or other complications.",
    "consultNow" : ""
  },
  "66" : {
    "itemNumber" : 66,
    "category" : "Hypertension",
    "subCategory" : "Complication",
    "doctorName" : "Dr.Kalpana",
    question : "If I had a heart attack, how can I manage my concerns about my health?",
    "answer" : "After a heart attack, many people worry about having another heart attack. They often feel depressed and may have trouble adjusting to a new lifestyle. You should discuss your feelings with your doctor. Your doctor can give you medication for anxiety or depression and may recommend professional counseling. Spend time with family, friends, and even pets. Affection can make you feel better and less lonely. Most people stop feeling depressed after they have fully recovered.",
    "consultNow" : ""
  },
  "67" : {
    "itemNumber" : 67,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "Will hypertension cause any damage to my body parts?",
    "answer" : "If Left unchecked, high blood pressure will over the years cause damage to the blood vessels of the heart and brain that leads to heart attacks and strokes. It also places extra strain on the heart, causing heart failure and it damages the kidneys and can lead to kidney failure.",
    "consultNow" : ""
  },
  "68" : {
    "itemNumber" : 68,
    "category" : "Hypertension",
    "subCategory" : "Knowledge",
    "doctorName" : "Dr.Kalpana",
    question : "If I have high blood pressure, should I talk with my doctor if I am thinking about getting pregnant?",
    "answer" : "It is important to talk to your doctor if you have high blood pressure and are planning a pregnancy. This is because high blood pressure can create problems during pregnancy for both mother and baby. Blood pressure can be treated during pregnancy, but only certain drugs can be used and your doctor knows which drugs should be avoided",
    "consultNow" : ""
  },
  "69" : {
    "itemNumber" : 69,
    "category" : "Hypertension",
    "subCategory" : "Drugs",
    "doctorName" : "Dr.Kalpana",
    question : "Will blood pressure medication make me feel funny or sick?",
    "answer" : "These days drugs are generally free of major side effects, but no drug is completely free of side effects in all patients. As blood pressure drugs work by reducing blood pressure, sometimes too great a fall in blood pressure can cause dizziness on standing. This can be a problem in the summer months and especially when rising quickly from squatting. Dizziness on standing also can be worse in older patients. There are a variety of other symptoms that can result from blood pressure medications and if these appear in the days or weeks after treatment has begun you should consult your doctor. However, do not stop medications yourself without medical advice, as sometimes the blood pressure will rebound to very high levels that can be dangerous.",
    "consultNow" : ""
  },
  "70" : {
    "itemNumber" : 70,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "What are the effect of Exercise on Blood Pressure and Pulse?",
    "answer" : "Your heart rate and blood pressure both rise when you exercise. Over time, however, regular exercise can help lower your resting blood pressure and heart rate. This is because exercise training improves the health of your heart and blood vessels, allowing your cardiovascular system to function more efficiently. Long-Term Effects on Heart Rate: Exercise doesn't just strengthen the muscles you can see; it also strengthens your heart and keeps your blood vessels healthy. After a few months of regular exercise, your resting heart rate may slowly decrease because your stronger heart pumps more efficiently. Your resting heart rate affects your risk for heart disease. Long-Term Effects on Blood Pressure: Regular aerobic exercise decreases blood pressure 4 to 5 percent in people with hypertension and 1 to 2 percent in people with normal blood pressure. Significant blood pressure reductions after 12 weeks of regular exercise. The authors noted benefits with both aerobic and strength-training exercise.",
    "consultNow" : ""
  },
  "71" : {
    "itemNumber" : 71,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "I am 26 years old and conscious about health? I saw my relatives died at very young age due to heart attack? How can I improve my heart health?",
    "answer" : "To keep your heart healthy, at least 150 minutes of moderate exercise or 75 minutes of vigorous exercise weekly. If you are not currently exercising regularly, talk with your doctor about how to get started safely and setting personal goals. Because hypertension typically causes no signs or symptoms, it's also important to have your blood pressure checked regularly. Visit the nearest hospital if you experience an unusually fast or slow heart rate, or a pounding or irregular heartbeat -- especially if accompanied by chest pain, dizziness, fainting or shortness of breath.",
    "consultNow" : ""
  },
  "72" : {
    "itemNumber" : 72,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "I found there is an increase in my blood pressure after exercise and again found normal after some time? I am worried I may get heart attack because I am diagnosed with hypertension?",
    "answer" : "Blood pressure changes vary with the type of exercise. Aerobic exercise, such as running, swimming or bicycling, increases the heart rate and generally increases the pressure with which blood is pumped, thus raising the systolic number. The diastolic pressure normally remains stable. This is the preferred exercise for the heart. Static or isometric exercise, such as weightlifting, requires sustained muscle contraction with little or no increase in cardiac output; the result is a rise in both blood pressures. Isometrics have shown some beneficial long-term lowering of pressures, however. Drop After Exercise: It is normal for blood pressure to fall slightly below resting levels after vigorous exercise, then return to normal after rest. Heart rates should return to normal in about two minutes, but blood pressure returns are slower, often by several hours. Consistent aerobic exercise, however, has been shown to reduce resting blood pressure readings over time. At least 30 minutes of exercise three or four times a week to help control blood pressure. A cool down period after exercise allows heart rate and breathing to resume normal levels gradually and can help to prevent dizziness",
    "consultNow" : ""
  },
  "73" : {
    "itemNumber" : 73,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "Since 30 years I am under medications for hypertension I am fed up take pills/ tablets thrice a day? Is there any alternative way to skip my medications? Can exercise replace my medications?",
    "answer" : "A 10-point drop in blood pressure may be impressive, but it often isn't enough to bring pressure within a healthy range. (A healthy range was formerly defined as below 140/90, but according to new federal guidelines is now below 120/80.) For optimal control, many people need to combine a healthy, active lifestyle with medication. If you're already taking medicine for blood pressure, regular exercise may allow you to lower the dose. If your pressure wasn't too high to begin with, a new exercise routine might allow you to stop taking medication entirely. In any event, always consult with your doctor before you make any changes in your medication.",
    "consultNow" : ""
  },
  "74" : {
    "itemNumber" : 74,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "While doing exercise I found that my diastolic pressure is increased. Should I Continue the exercise or not?",
    "answer" : "In most cases, the diastolic rate changes vary little if any while you exercise. If there is an increase, though of more than 20 mm hg or if the diastolic rate becomes 100 mm hg it is pertinent to discontinue exercise right away. If you have high blood cholesterol levels, which is known as hypercholesterolemia, or coronary artery disease your diastolic rate can increase significantly while you are exercising.",
    "consultNow" : ""
  },
  "75" : {
    "itemNumber" : 75,
    "category" : "Hypertension",
    "subCategory" : "Complication",
    "doctorName" : "Dr.Kalpana",
    question : "I have pain on right side of my chest when I breathe deeply? What could it be when you have a sharp pain in your right side and pain from breathing deeply?",
    "answer" : "First let me assure you that this is very unlikely to be caused by any heart condition. Chest pain due to heart disease is not affected by position or breathing. The most likely cause is a problem in your rib cage, which moves with each breath you take. You may have a cracked or broken rib, or strained ligaments/muscles between your ribs. There is cartilage at the end of the lower ribs, and sometimes, with trauma, this can separate from the bone and cause considerable pain. Another possibility is a problem in your lungs, such as infection, a bruise, a growth, or even a collapse of a portion of the lung. Blood clots that have traveled from other parts of your body to your lung can also cause chest pain that is worse with breathing. Most people with any of these problems are usually in extreme distress.",
    "consultNow" : ""
  },
  "76" : {
    "itemNumber" : 76,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "I found my diastolic pressure is more when I am on treadmill with a speed of 8/kmph. When should I stop doing my exercise and what are the normal values?",
    "answer" : "The following can help you to understand the diastolic rates and their categories: 1. Diastolic rate of 80 or under- normal 2. Diastolic rate of 85-89- cause for concern 3. Diastolic rate over 90- hypertension 4. Diastolic rate between 90 and 99- stage 1 hypertension 5. Diastolic rate of 100-109- stage 2 hypertension 6. Diastolic rate over 109- stage 3 hypertension It is imperative to note that hypertension not only requires more energy for the heart to be able to pump the blood, but it can also lead to congestive heart failure as well.",
    "consultNow" : ""
  },
  "77" : {
    "itemNumber" : 77,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "I heard that Aerobic Exercise Lowers BP Most Effectively?What type of exercise is best for helping to lower your blood pressure?",
    "answer" : "Researchers analyzed and they were grouped according to what type of exercise they engaged in: aerobic (walking, jogging and cycling), anaerobic (weight-lifting and calisthenics), mixed aerobic and anaerobic, gardening, and no exercise. Those who engaged exclusively in aerobic exercise had systolic blood pressure levels about 3mmHg lower than those who performed both aerobic and anaerobic exercises and those who did no exercise at all.",
    "consultNow" : ""
  },
  "78" : {
    "itemNumber" : 78,
    "category" : "Hypertension",
    "subCategory" : "Exercise",
    "doctorName" : "Dr.Kalpana",
    question : "Is swimming is good for hypertension Patient?",
    "answer" : "There are many reasons that swimming is a stand out exercise. While swimming is good for blood pressure, it also places less strain on joints than many other exercises. This fact is one reason that swimming is a preferred exercise method for many who are recovering from injuries. Sports medicine professionals for example often have their patients use swimming as a means of recovering.",
    "consultNow" : ""
  },
  "79" : {
    "itemNumber" : 79,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "I am 35 years old female my lipid profile says that I am in boder line level. Do our bodies need cholesterol?",
    "answer" : "Yes, cholesterol plays a vital role in our bodies. It makes certain hormones, helps you digest food, and supports the workings of all the cells in your body. But your liver makes all the cholesterol it needs to support these functions.",
    "consultNow" : ""
  },
  "80" : {
    "itemNumber" : 80,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "My Doctor advised me not to eat non vegetarian food as my bad cholesterol id high? So what is bad (LDL) cholesterol?",
    "answer" : "LDL stands for low-density lipoproteins. (Lipoproteins are molecules that carry cholesterol through your bloodstream.) LDL cholesterol is sometimes called bad cholesterol because it can build up in the walls of your arteries and make them narrower. This buildup of cholesterol is called plaque. Over time, plaque can build up so much that it narrows your arteries. This is called atherosclerosis or hardening of the arteries. The higher the level of LDL cholesterol in your blood, the greater your chances of getting heart disease.",
    "consultNow" : ""
  },
  "81" : {
    "itemNumber" : 81,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "My uncle under went CABG recently, doctor advised to have olive, peanut and canola oils — tend to improve HDL's anti-inflammatory abilities. Nuts, fish and other foods containing omega-3 fatty acids are other good choices for improving your LDL cholesterol to HDL cholesterol ratio. What is HDL cholesterol?",
    "answer" : "HDL stands for high-density lipoproteins. (Lipoproteins are molecules that carry cholesterol through your bloodstream.) HDL cholesterol is sometimes called good cholesterol because it helps remove cholesterol from your artery walls and carries it to your liver. The liver then removes the cholesterol from your body. The higher your HDL cholesterol level, the lower your chances of getting heart disease.",
    "consultNow" : ""
  },
  "82" : {
    "itemNumber" : 82,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "My doctor advised me not to take food which contains more fats because it may increase the cholesterol level in my blood, So What is high blood cholesterol?",
    "answer" : "Too much cholesterol in your blood is called high blood cholesterol. It can be serious. People with high blood cholesterol have a greater chance of getting heart disease. High blood cholesterol does not cause symptoms, so you may not be aware that your cholesterol level is too high",
    "consultNow" : ""
  },
  "83" : {
    "itemNumber" : 83,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What are triglycerides?",
    "answer" : "Triglycerides are another kind of fat that your liver makes. They can also signal an increased chance of developing heart disease",
    "consultNow" : ""
  },
  "84" : {
    "itemNumber" : 84,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "My grand father underwent an angioplasty recently, he was diagnosed with coronary artery disease, Doctor said that it is due to atherosclerosis which can affect any artery in the body, including arteries in the heart, brain, arms, legs, pelvis, and kidneys. What is atherosclerosis?",
    "answer" : "Cholesterol can build up in the walls of your arteries. This buildup of cholesterol is called plaque. Over time, the plaque can build up so much that the arteries become narrower. This is called atherosclerosis, or hardening of the arteries. It can slow down or block the flow of blood to your heart.",
    "consultNow" : ""
  },
  "85" : {
    "itemNumber" : 85,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "I had a habit of eating non veg items thrice a week recently I am diagnosed with hypertension, Doctor said that I may get coronary artery disease so what is coronary heart disease?",
    "answer" : "The coronary arteries bring blood to your heart. If plaque builds up in these arteries, the blood may not be able to bring enough oxygen to the heart muscle. This is called coronary heart disease.",
    "consultNow" : ""
  },
  "86" : {
    "itemNumber" : 86,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "Many things can affect a person's blood cholesterol level. What are some of the things I can control?",
    "answer" : "You can control on: 1.What you eat. Foods containing saturated fats, trans fats, and cholesterol raise your cholesterol. 2. Your weight. Being overweight tends to increase your LDL level, reduce your HDL level, and increase your total cholesterol level. 3.Your activity level. If you don't exercise regularly, you may gain weight. This could increase your LDL level. Regular exercise can help you lose weight and lower your LDL level. It can also help you increase your HDL level.",
    "consultNow" : ""
  },
  "87" : {
    "itemNumber" : 87,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What are some of the things that affect blood cholesterol level that I cannot control?",
    "answer" : "You cannot control on: 1. heredity. High blood cholesterol can run in families. 2. age. As we get older, our cholesterol levels rise. 3. sex. Before menopause, women tend to have lower total cholesterol levels than men of the same age. After menopause, women's LDL (bad) cholesterol levels tend to increase",
    "consultNow" : ""
  },
  "88" : {
    "itemNumber" : 88,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "How often should you have your cholesterol levels checked?",
    "answer" : "High blood cholesterol usually does not have any signs or symptoms. Many people don't know that their cholesterol levels are too high. Everyone age 20 and older should have their cholesterol levels checked at least once every 5 years. If your cholesterol level is high, you will have to be tested more often. You and your doctor should discuss how often you should be tested. Your doctor will take a sample of blood from a vein in your arm and send it to the laboratory to find out the level of cholesterol in your blood.",
    "consultNow" : ""
  },
  "89" : {
    "itemNumber" : 89,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What blood tests are used to measure cholesterol levels?",
    "answer" : "The recommended blood test for checking your cholesterol levels is called a fasting lipoprotein profile. It will show your 1. Total cholesterol 2. low-density lipoprotein (LDL), or bad cholesterol -- the main source of cholesterol buildup and blockage in the arteries 3. High-density lipoprotein (HDL), or good cholesterol that helps keep cholesterol from building up in your arteries 4. Triglycerides -- another form of fat in your blood. You should not eat or drink anything except water and black coffee for 9 to 12 hours before taking the test. If you can't have a lipoprotein profile done, a different blood test will tell you your total cholesterol and HDL (good) cholesterol levels. You do not have to fast before this test. If this test shows that your total cholesterol is 200 mg/dL or higher, or that your HDL (good) cholesterol is less than 40 mg/dL, you will need to have a lipoprotein profile done.",
    "consultNow" : ""
  },
  "90" : {
    "itemNumber" : 90,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What is a desirable level for total cholesterol? Do you know how your total cholesterol level compares?",
    "answer" : "A desirable level for total cholesterol is less than 200 mg/dL. Here are the ranges for total cholesterol levels. 1. Less than 200 mg/dL -Desirable 2. 200 to 239 mg/dL- Borderline high 3. 240 mg/dL and above – High",
    "consultNow" : ""
  },
  "91" : {
    "itemNumber" : 91,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What is a desirable level for LDL (bad) cholesterol? Do you know how your LDL level compares?",
    "answer" : "A desirable level for LDL (bad) cholesterol is under 100 mg/dL. Here are the ranges for LDL cholesterol levels. 1. Less than 100 mg/dL -Optimal 2. 100 - 129 mg/dL - Near optimal 3. 130 - 159 mg/dL -Borderline high 4. 160 - 190 mg/dL -High 5. 190 mg/dL and above -Very high",
    "consultNow" : ""
  },
  "92" : {
    "itemNumber" : 92,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What is a desirable level for HDL (good) cholesterol level? . Do you know how your HDL cholesterol level compares?",
    "answer" : "An HDL (good) cholesterol level more than 60 mg/dL is desirable for most people. Here are the ranges for HDL cholesterol levels 1. Less than 40 mg/dL- A major risk factor for heart disease 2. 40 - 59 mg/dL- The higher, the better 3. 60 mg/dL and above- Considered protective against heart disease",
    "consultNow" : ""
  },
  "93" : {
    "itemNumber" : 93,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What is a desirable level for triglycerides?",
    "answer" : "A lipoprotein profile will also show the level of triglycerides in your blood. A desirable level is less than 150mg/dL. If the triglycerides in your blood are borderline high (150-199 mg/dL), or high (200 mg/dL or more), you may need treatment.",
    "consultNow" : ""
  },
  "94" : {
    "itemNumber" : 94,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What is my LDL goal and how is it decided?",
    "answer" : "Your LDL goal is how low your LDL cholesterol level should be to reduce your risk of developing heart disease or having a heart attack. The higher your risk, the lower your goal LDL should be. Your doctor will set your LDL goal using your medical history and the number of risk factors that you have.",
    "consultNow" : ""
  },
  "95" : {
    "itemNumber" : 95,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What are the factors that affect my LDL goal?",
    "answer" : "Your LDL cholesterol goal level depends on your risk for developing heart disease or having a heart attack at the time you start treatment. Major risk factors that affect your LDL goal include 1. Cigarette smoking 2. High blood pressure (140/90 mmHg or higher), or being on blood pressure medicine 3. low HDL cholesterol (less than 40 mg/dL) 4. Family history of early heart disease (heart disease in father or brother before age 55; heart disease in mother or sister before age 65) 5. age (men 45 years or older; women 55 years or older).",
    "consultNow" : ""
  },
  "96" : {
    "itemNumber" : 96,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What is the main goal of cholesterol-lowering treatment?",
    "answer" : "The main goal of cholesterol-lowering treatment is to lower your LDL (bad) cholesterol level enough to reduce your risk of having a heart attack or diseases caused by narrowing of the arteries.",
    "consultNow" : ""
  },
  "97" : {
    "itemNumber" : 97,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "How is high blood cholesterol treated?",
    "answer" : "There are two main ways to lower your cholesterol: Therapeutic Lifestyle Changes and medicines.",
    "consultNow" : ""
  },
  "98" : {
    "itemNumber" : 98,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What is TLC?",
    "answer" : "TLC stands for Therapeutic Lifestyle Changes. It is a set of lifestyle changes that can help you lower your LDL cholesterol. TLC has three main parts: a cholesterol-lowering diet, weight management, and physical activity. The TLC Diet recommends 1. Reducing the amount of saturated fat, trans fat, and cholesterol you eat. 2. Eating only enough calories to achieve or maintain a healthy weight. 3. Increasing the soluble fiber in your diet by eating foods such as oatmeal, kidney beans, and apples. 4. Adding cholesterol-lowering foods, such as juices or margarines that contain plant sterols or stanols that lower cholesterol. Weight management is an important part of TLC. Losing weight if you are overweight can help lower LDL cholesterol. Weight management is especially important for people who have a group of risk factors that includes high triglyceride and/or low HDL levels, being overweight, and having too large a waist. Too large a waist is defined as a waist measurement of 40 inches or more for men and 35 inches or more for women. Photo of a couple walking. - Click to enlarge in new window. Click for more information Physical activity is another important part of TLC. Regular physical activity is recommended for everyone. It can help raise HDL levels and lower LDL levels. It is especially important for people with high triglyceride and/or low HDL levels who are overweight and/or have a large waist measurement.",
    "consultNow" : ""
  },
  "99" : {
    "itemNumber" : 99,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What are the major types of cholesterol-lowering medicines?",
    "answer" : "If TLC (Therapeutic Lifestyle Changes) cannot lower your LDL cholesterol level enough by itself, your doctor may prescribe cholesterol-lowering medicines. The following medicines are used together with TLC to help lower your LDL (bad) cholesterol level. 1. Statins 2. Ezetimibe 3. Bile acid sequestrants 4. Nicotinic acid 5. Fibrates.",
    "consultNow" : ""
  },
  "100" : {
    "itemNumber" : 100,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "If I take cholesterol-lowering medicine, do I still need to continue the TLC lifestyle changes?",
    "answer" : "Yes. Even if you begin drug treatment, it is important to continue the TLC lifestyle changes. This may reduce the amount of medicine you need. It can also reduce your risk for coronary heart disease (CHD) in ways beyond lowering your LDL cholesterol.",
    "consultNow" : ""
  },
  "101" : {
    "itemNumber" : 101,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "Do cholesterol-lowering medicines cure high blood cholesterol?",
    "answer" : "No. Drug treatment controls your high blood cholesterol, but it does not cure it. You must continue taking your medicine to keep your cholesterol level in the recommended range.",
    "consultNow" : ""
  },
  "102" : {
    "itemNumber" : 102,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What if I have high triglyceride levels?",
    "answer" : "Once your LDL goal has been reached, your doctor may prescribe treatment for high triglycerides. The treatment includes losing weight if needed, increasing physical activity, quitting smoking, and possibly taking medicines.",
    "consultNow" : ""
  },
  "103" : {
    "itemNumber" : 103,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "If I have any other health problems, such as high blood pressure or diabetes, can I continue to take medicines for these conditions while also taking cholesterol-lowering medicines?",
    "answer" : "Yes. It is important to take ALL medicines as your doctor prescribes. The combination of medicines may lower your risk for heart disease or heart attack",
    "consultNow" : ""
  },
  "104" : {
    "itemNumber" : 104,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "Besides abnormal cholesterol, what are other risk factors for cardiovascular disease?",
    "answer" : "Other risk factors are advancing age, male sex, family history, smoking, physical inactivity, obesity, a poor diet, and medical conditions such as diabetes and high blood pressure.",
    "consultNow" : ""
  },
  "105" : {
    "itemNumber" : 105,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What are some risk factors for cardiovascular disease that are unique to women?",
    "answer" : "Polycystic ovary syndrome, high blood pressure disorders that occur during pregnancy, and gestational diabetes are all risk factors for cardiovascular disease that are unique to women.",
    "consultNow" : ""
  },
  "106" : {
    "itemNumber" : 106,
    "category" : "Hypertension",
    "subCategory" : "",
    "doctorName" : "Dr.Kalpana",
    question : "What lifestyle changes can I make to reduce my risk of cardiovascular disease?",
    "answer" : "The following changes may reduce your risk of cardiovascular disease: 1. Eat a heart-healthy diet. A heart-healthy diet is one that emphasizes vegetables, fruits, beans, and low-fat dairy products; includes fish and poultry; and limits red meat, sugary foods and drinks, and sodium. 2. Exercise. Exercise strengthens your heart and promotes the health of your blood vessels. It helps boost your HDL levels and lower blood pressure levels. 3. Lose weight. Weight loss is recommended if you are overweight or obese. Stop smoking. Smoking is one of the biggest risk factors for heart disease. It decreases 4. HDL levels and may increase the level of triglycerides in your blood.",
    "consultNow" : ""
  }
};


for (var key in qandasKalpana) {
  count++;
  var qanda = qandasKalpana[key];
  qanda.consultNow = qanda.consultNow == "yes";
  // qanda.consultDoctorType = qanda.category.split(' ')[1];
  qAndAModels.push(qanda);
}
console.log(count, qAndAModels.length, qAndAModels[qAndAModels.length - 1]);


module.exports = function() {
  return qAndAModels;
};