var _ = require('underscore');
var qAndAModels = [];

var qandasSolomon = [{
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic and on my regular check ups I found urine test positive for ketones When should I go to hospital if I find ketones in urine test??",
  "answer": "Ketones in urine is a serious condition called Diabetic ketoacidosis Visit hospoital at once if you experience the following conditions: Your urine tests show high levels of ketones. Your urine tests show high levels of ketones and your blood glucose level is high. Your urine tests show high levels of ketones and you have vomited more than twice in four hours.",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the causes of Diabetic ketoacidosis??",
  "answer": "Three basic reasons for moderate or large amounts of ketones: Not enough insulin Maybe you did not inject enough insulin. Or your body could need more insulin than usual because of illness. Not enough food When you're sick, you often don't feel like eating, sometimes resulting in high ketone levels. High levels may also occur when you miss a meal. Insulin reaction (low blood glucose) If testing shows high ketone levels in the morning, you may have had an insulin reaction while asleep.",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the risk factors for Diabetic ketoacidosis??",
  "answer": "The risk of diabetic ketoacidosis is highest if you: Have type 1 diabetes Frequently miss insulin doses Uncommonly, diabetic ketoacidosis can occur if you have type 2 diabetes. In some cases, diabetic ketoacidosis may be the first sign that a person has diabetes.",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "what are the complications of Diabetic ketoacidosis??",
  "answer": "Treatment complications include: Low blood sugar (hypoglycemia). Insulin allows sugar to enter your cells, causing your blood sugar level to drop. If your blood sugar level drops too quickly, you can develop low blood sugar. Low potassium (hypokalemia). The fluids and insulin used to treat diabetic ketoacidosis can cause your potassium level to drop too low. A low potassium level can impair the activities of your heart, muscles and nerves. Swelling in the brain (cerebral edema). Adjusting your blood sugar level too quickly can produce swelling in your brain. This complication appears to be more common in children, especially those with newly diagnosed diabetes.",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the blood tests that I should have for diagnosing diabetic ketoacidosis??",
  "answer": "Blood tests used in the diagnosis of diabetic ketoacidosis will measure: Blood sugar level. If there isn't enough insulin in your body to allow sugar to enter your cells, your blood sugar level will rise (hyperglycemia). As your body breaks down fat and protein for energy, your blood sugar level will continue to rise. Ketone level. When your body breaks down fat and protein for energy, acids known as ketones enter your bloodstream. Blood acidity. If you have excess ketones in your blood, your blood will become acidic (acidosis). This can alter the normal function of organs throughout your body.",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "If im diagnosed diabetic ketoacidosis how will I be treated??",
  "answer": "If you're diagnosed with diabetic ketoacidosis, you might be treated in the emergency room or admitted to the hospital. Treatment usually involves: Fluid replacement. You'll receive fluids — either by mouth or through a vein (intravenously) — until you're rehydrated. The fluids will replace those you've lost through excessive urination, as well as help dilute the excess sugar in your blood. Electrolyte replacement. Electrolytes are minerals in your blood that carry an electric charge, such as sodium, potassium and chloride. The absence of insulin can lower the level of several electrolytes in your blood. You'll receive electrolytes through a vein to help keep your heart, muscles and nerve cells functioning normally. Insulin therapy. Insulin reverses the processes that cause diabetic ketoacidosis. In addition to fluids and electrolytes, you'll receive insulin therapy — usually through a vein. When your blood sugar level falls below 240 mg/dL (13.3 mmol/L) and your blood is no longer acidic, you may be able to stop intravenous insulin therapy and resume your normal insulin therapy.",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic siince many years how do I prevent getting diabetic ketoacidosis??",
  "answer": "Commit to managing your diabetes. Make healthy eating and physical activity part of your daily routine. Take oral diabetes medications or insulin as directed. Monitor your blood sugar level. You might need to check and record your blood sugar level at least three to four times a day — more often if you're ill or under stress. Careful monitoring is the only way to make sure your blood sugar level remains within your target range. Adjust your insulin dosage as needed. Talk to your doctor or diabetes educator about how to adjust your insulin dosage in relation to your blood sugar level, what you eat, how active you are, whether you're ill and other factors. If your blood sugar level begins to rise, follow your diabetes treatment plan to return your blood sugar level to your target range. Check your ketone level. When you're ill or under stress, test your urine for excess ketones with an over-the-counter urine ketones test kit. If your ketone level is moderate or high, contact your doctor right away or seek emergency care. If you have low levels of ketones, you may need to take more insulin",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 58yrs male and diabetic and I have problems with my vision when should I go for doctor visit??",
  "answer": "Careful management of your diabetes is the best way to prevent vision loss. If you have diabetes, see your eye doctor for a yearly eye exam with dilation — even if your vision seems fine. Pregnancy may worsen diabetic retinopathy, so if you're pregnant, your eye doctor may recommend additional eye exams throughout your pregnancy. Contact your eye doctor right away if your vision changes suddenly or becomes blurry, spotty or hazy.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and I have vision problems also what are the other risk factors that worsens my vision apart from diabetes??",
  "answer": "Anyone who has diabetes can develop diabetic retinopathy. Risk of developing the eye condition can increase as a result of: Duration of diabetes — the longer you have diabetes, the greater your risk of developing diabetic retinopathy Poor control of your blood sugar level High blood pressure High cholesterol Pregnancy Tobacco use",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 50 yr old and im diabetic will I develop heart problems??",
  "answer": "Adults with diabetes are two to four times more likely to have heart disease or suffer a stroke than people without diabetes. High blood glucose in adults with diabetes increases the risk for heart attack, stroke, angina, and coronary artery disease.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the risk factors for heart disease and stroke in people with diabetes?",
  "answer": "Diabetes itself is a risk factor for heart disease and stroke. Also, many people with diabetes have other conditions that increase their chance of developing heart disease and stroke. These conditions are called risk factors. One risk factor for heart disease and stroke is having a family history of heart disease. If one or more members of your family had a heart attack at an early age (before age 55 for men or 65 for women), you may be at increased risk.risk factors for heart disease listed here: Having central obesity. Having abnormal blood fat (cholesterol) levels Having high blood pressure Smoking",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "What types of heart and blood vessel disease occur in people with diabetes?",
  "answer": "Two major types of heart and blood vessel disease, also called cardiovascular disease, are common in people with diabetes: coronary artery disease (CAD) and cerebral vascular disease. People with diabetes are also at risk for heart failure. Narrowing or blockage of the blood vessels in the legs, a condition called peripheral arterial disease, can also occur in people with diabetes.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "What Heart Diseases Are Involved in Diabetic Heart Disease?",
  "answer": "DHD may include coronary heart disease (CHD), heart failure, and/or diabetic cardiomyopathy",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and suffering with coronary artery disease and have 3 blocks in heart vessels and I was advised for Surgery can I go for surgery?",
  "answer": "You can go for surgery if your blood sugars are in control. Diabetics are more prone to infections after surgery if blood sugars are uncontrolled",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabeic since many years am I at a risk of developing heart diseases and how??",
  "answer": "Yes diabetes is a risk factor for developing heart diseases.The most common cause of heart disease in a person with diabetes is hardening of the coronary arteries or atherosclerosis, which is a buildup of cholesterol in the blood vessels that supply oxygen and nutrition to the heart.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since 7 yrs and I want to know how to prevent heart diseases in diabetes??",
  "answer": "National Institutes of Health and the Centers for Disease Control and Prevention, has developed the “ABCs” of cardiovascular risk reduction. “A” is for A1c, or HbA1c, a blood value that measures control of blood sugar over time. People with diabetes should target a value below 7% to reduce their risk of heart attack and other cardiovascular problems. “B” is for blood pressure, which is a cardiovascular risk factor for all people, with diabetes or not. People should strive for a blood pressure of 130/80 mm Hg or less. “C” is for cholesterol, specifically the LDL, or “bad,” cholesterol. The target is an LDL level of less than 100 mg/dl.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since 10 yrs are there any medications that I can use for preventing heart diseases??",
  "answer": "Ask your doctor whether you should take an aspirin every day. Studies have shown that taking a low dose of aspirin every day can help reduce your risk of heart disease and stroke.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years how do I know that im developing problems ??",
  "answer": "You may have less saliva, causing your mouth to feel dry. (Dry mouth is also caused by certain medications.) Because saliva protects your teeth, you’re also at a higher risk of cavities. Gums may become inflamed and bleed often (gingivitis). You may have problems tasting food. You may experience delayed wound healing. You may be susceptible to infections inside of your mouth. For children with diabetes, teeth may erupt at an age earlier than is typical.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Why People with Diabetes Are More Prone to Gum Disease",
  "answer": "Periodontal disease is the most common dental disease affecting those living with diabetes, affecting nearly 22% of those diagnosed. Especially with increasing age, poor blood sugar control increases the risk for gum problems. In fact, people with diabetes are at a higher risk for gum problems because of poor blood sugar control. As with all infections, serious gum disease may cause blood sugar to rise. This makes diabetes harder to control because you are more susceptible to infections and are less able to fight the bacteria invading the gums.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since 3 yrs, How can my Dentist Fight Diabetes??",
  "answer": "Research suggests that treating gum disease can help improve blood sugar control in patients living with diabetes, decreasing the progression of the disease. Practicing good oral hygiene and having professional deep cleanings done by your dentist can help to lower your HbA1c.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since since many years and what is that I have to do keep my teeth and oral cavity healthy??",
  "answer": "Control your blood sugar levels. Use your diabetes-related medications as directed, changing to a healthier diet and even exercising more can help. Good blood sugar control will also help your body fight any bacterial or fungal infections in your mouth and help relieve dry mouth caused by diabetes. Avoid smoking. If you wear any type of denture, clean it each day. Make sure to brush twice a day with a soft brush and floss correctly daily. See your dentist for regular checkups.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Can I take both pills and insulin to control my blood sugar?",
  "answer": "Yes. The combination of insulin and an oral medication, when taken as directed by your doctor, is very safe and effective in controlling blood sugar. A typical combination therapy consists of taking an oral medication during the day and insulin at night. Once you begin taking insulin, you will need to monitor your blood sugar more often to reduce the risk of low blood sugar reactions. Combination therapies are often helpful for people who have type 2 diabetes (adult onset diabetes). If you have been taking an oral medication, your doctor may change your treatment plan to include insulin injections. This change is often made to help people with type 2 diabetes gain better control of their blood sugar.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "How does pregnancy cause diabetes??",
  "answer": "Pregnancy puts extra stress on a woman's body that causes some women to develop diabetes. Blood sugar levels often return to normal after childbirth. Yet, women who get diabetes during pregnancy have an increased chance of developing diabetes later in life.",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "Can diabetes be cured?",
  "answer": "No. A cure for diabetes has not yet been found. However, diabetes can be treated and controlled. Most people with diabetes manage their disease and lead normal lives.",
  "consultNow": ""
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "I heard about insulin pumps for treatment of diabetes what are they ??",
  "answer": "An insulin pump is a medical device used for the administration of insulin in the treatment of diabetes mellitus, also known as continuous subcutaneous insulin infusion therapy. The device configuration may vary depending on design. A traditional pump includes: the pump (including controls, processing module, and batteries) a disposable reservoir for insulin (inside the pump) a disposable infusion set, including a cannula for subcutaneous insertion (under the skin) and a tubing system to interface the insulin reservoir to the cannula. An insulin pump can help you manage your diabetes. By using an insulin pump, you can match your insulin to your lifestyle, rather than getting an insulin injection and matching your life to how the insulin is working.",
  "consultNow": ""
}];

var qandasSolomon1 = [{
  "category": "Complications",
  "Name of doctor": "Dr. Solomon",
  "question": "I am having bad breath. I consulted dentist and they asked me to meet my diabetologist. Why",
  "answer": "Diabetes is associated with dental problems too. Uncontrolled diabetes can result in gum problems like bleeding gums, loosening or shaky tooth, bad breath etc",
  "consultNow": "yes"
}, {
  "category": "Symptoms",
  "Name of doctor": "Dr.Solomon",
  "question": "I am having frequent urination , Increased thirst and ive noted significant weight loss what could be reason",
  "answer": "These may be symptoms of diabetes.please consult doctor and check your blood sugar levels and HbA1c",
  "consultNow": "Yes"
}, {
  "category": "Genetical",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 35 yr old male with positive history of diabetes in family am I at a risk of developing diabetes",
  "answer": "Yes Diabetes is a hereditary diesease. Please consult doctor and undergo blood glucose related tests and know about risk factors for developing diabetes and ways to reduce risk of developing diabetes",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 32 yr male and im experiencing decreased libido is this because of diabetes??",
  "answer": "Diabetes is also one of the causes for decreased libido other reasons include hypothyroidism,Anemia,smoking,alchohol abuse. Please consult doctor for ruling out diabetes and treating decreased libido",
  "consultNow": "Yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Does eating sweets lead to diabetes?",
  "answer": "Studies show that sweetened foods can up diabetes risk, but sugar alone isn’t necessarily enough to cause the disease on its own.The tendency to get diabetes is mostly inherited. That means it's linked to the genes people get from their parents.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "My friend was recently diagnosed with diabetes. He complains that his feet feel very hot from time to time. Is this related to diabetes?",
  "answer": "A painfully hot or burning sensation in the feet, especially in middle-aged and older people, could be caused by small fiber neuropathy. Diabetes is the most common cause of this condition; symptoms typically start with burning feet and numb toes. Even though your friend was only recently diagnosed with diabetes, if it is the cause of the burning in his feet, then he has probably had impaired glucose tolerance for years now. Peripheral neuropathy and peripheral vascular disease, which can be caused by diabetes, are potential culprits,",
  "consultNow": "Yes"
}, {
  "category": "Diabetes information",
  "Name of doctor": "Dr.Solomon",
  "question": "What should my blood sugar be when I wake up (fasting) and before meals? What about after?",
  "answer": "For most people with diabetes fasting or before-meals blood glucose (or blood sugar) goal of 70–130 mg/dl. One to two hours after eating, a postprandial blood sugar reading at or under 180 mg/dl is recommended.",
  "consultNow": "No"
}, {
  "category": "Diabetes information",
  "Name of doctor": "Dr.Solomon",
  "question": "Can I get rid of diabetes if I stop eating carbs and/or lose a lot of weight?",
  "answer": "No, but you can control it. If you have prediabetes or were just diagnosed with diabetes, losing a lot of weight can put the condition into remission.",
  "consultNow": "yes (Dietician)"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Why is it OK to eat fruit when it’s full of carbohydrate? Are some fruits better to eat than others?",
  "answer": "People with diabetes need to eat a certain amount of carbs every day for energy and essential nutrients. Healthy sources of carbs include fruits, as well as vegetables, whole grains, legumes (beans), and low-fat dairy foods.",
  "consultNow": "yes (Dietician)"
}, {
  "category": "Diabetes information",
  "Name of doctor": "Dr.Solomon",
  "question": "Why do I have to test my blood – the doctor does a blood test when I see him?",
  "answer": "Testing your own blood gives you feedback on what your blood sugars do at various times of day and how they react to your medications, exercise, food intake, etc. By testing your own blood you help doctor to make decisions to improve the glucose control and to decide if the medications are working properly.",
  "consultNow": "No"
}, {
  "category": "Diabetes information",
  "Name of doctor": "Dr.Solomon",
  "question": "Once you start diabetes medication, can you ever come off of it and control diabetes with just diet and exercise?",
  "answer": "Some people are able to stop taking some diabetes medications if the blood sugars can be controlled by weight loss and increased activity. That should only be done with the medical provider’s guidance.",
  "consultNow": "Yes"
}, {
  "category": "Medication",
  "Name of doctor": "Dr.Solomon",
  "question": "Is there a way to take insulin without giving shots?",
  "answer": "At present the only way to get insulin is to take it by injection (syringe or an insulin pump). Insulin is a protein and is digested in the body if taken by mouth. There are many scientists working to see if insulin can be taken in other ways than injection",
  "consultNow": "No"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Is there a simple way to eat so I don’t have high blood sugars?",
  "answer": "There is no simple solution to eating to avoid raising blood sugars. A dietitian who specializes in diabetes is the best person to work with, but there will be times when sugars are high no matter what you eat.",
  "consultNow": "yes"
}, {
  "category": "Exercise",
  "Name of doctor": "Dr.Solomon",
  "question": "How often, how long, and what times of day should I exercise?",
  "answer": "The best time is the time you will do it! 30-45 minutes of aerobic exercise, 5-7 days a week is a great goal. Some examples are swimming, walking, tennis, bike riding, and dancing. A minimum of 30-45 minutes, 3 days a week is recommended in those who have been given the OK by their physician. It is alright to break the exercise into 3 or 4 smaller 15-20 minute segments throughout the day. Remember to check your blood sugar then warm up, and cool down for 5-10 minutes. This will help you avoid sore or injured muscles.",
  "consultNow": "yes"
}, {
  "category": "Exercise",
  "Name of doctor": "Dr.Solomon",
  "question": "If I am prone to diabetes due to family heredity, what kind of exercises I should be doing to prevent myself from being diabetic.",
  "answer": "you can do any form of exercise running jogging cardio yoga ect main aim is to burn your calories this even helps in making you fit and healthy . Try not to eat high sugar or high calorie diet regularly. consult dietician or physiotherapist for further information",
  "consultNow": "yes"
}, {
  "category": "Exercise",
  "Name of doctor": "Dr.Solomon",
  "question": "How can exercise make a difference in my diabetes, What is the importance of diet in diabetes,",
  "answer": "excercise makes your cells active and your cells become more sensitive to insulin so it can work more efficiently. Diet helps in controlling your blood glucose level which is essential to preventing long-term complications",
  "consultNow": "No"
}, {
  "category": "Medication",
  "Name of doctor": "Dr.Solomon",
  "question": "I am a diabetic and on Oral medications .Do I need to take my medications even on days that I Feel fine?",
  "answer": "Yes diabetes medications should be taken regulary withut missing if you don’t take medicines regularly your sugars cannot be controlled and that leads to many other complications",
  "consultNow": "No"
}, {
  "category": "Diagnosis",
  "Name of doctor": "Dr.Solomon",
  "question": "Iam worried that im suffering from diabetes what are tests to rule out diabetes??",
  "answer": "Tests for diabetes are Fasting Blood sugars level , Post prandial blood sugar level and HBA1c ,Consult doctor so that he will assess your condition and suggest appropriaate tests to rule out diabetes",
  "consultNow": "yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Iam 70 yrs old and I have high blood pressure and diabetes as well. Though both are under control but every time I need to put extra pressure What couls be reason.",
  "answer": "This may be due to Enlarged Prostrate which is common problem in elderly pls consult doctor for futher suggestions",
  "consultNow": "yes"
}, {
  "category": "Exercise",
  "Name of doctor": "Dr.Solomon",
  "question": "I have diabetes and hypertension what are the type of exercises that help me and in what frequency.",
  "answer": "Walk, go to the gym, yoga is good. Ellipticals are fine. Muscle strengthening exercises. Swimming, and running. Not advisable to lift weights.",
  "consultNow": "yes"
}, {
  "category": "Diet / Exercise",
  "Name of doctor": "Dr.Solomon",
  "question": "Iam 24 yrs old and I am having no physical activity am I prone to diabetes??",
  "answer": "Now a days, there is no age limit to get diabetes. Usually, it is assumed that the people in our country are affected from 25 years. Always we should keep our lifestyle good. The food we eat should be nutritious and the place where we eat should be hygienic. Always, we should be physically active and at least we have to do meditation for at least 15 to 20 minutes in a day to relax our body and mind.",
  "consultNow": "yes"
}, {
  "category": "Diet / Exercise",
  "Name of doctor": "Dr.Solomon",
  "question": "What is the minimum age to be affected by diabetes??",
  "answer": "Now a days, there is no age limit to get diabetes. Usually, it is assumed that the people in our country are affected from 25 years. Always we should keep our lifestyle good. The food we eat should be nutritious and the place where we eat should be hygienic. Always, we should be physically active and at least we have to do meditation for at least 15 to 20 minutes in a day to relax our body and mind.",
  "consultNow": "yes"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "My dad is a diabetic is ther any way to moniter sugar levels by himself instead of going to diagnostic center",
  "answer": "Now a days glucometers are available to measure blood glucose levels by individual himself . You can use them to moniter daily blood sugars but have to consult doctor every 3-6 months for regular checkup",
  "consultNow": "yes"
}, {
  "category": "complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the other health problems that will arise because of diabetes??",
  "answer": "Diabetes make a person susceptible to many diseases like cardiac problems, hypertension, kidney diseases, nervous system problems and eyes and more suseptible to UTI Ect\n your questions make a big list,mentioning all the complications is not possible because complication vary from person to person . please consult doctor for more clear understanding of complications of diabetes",
  "consultNow": "yes"
}, {
  "category": "Medication",
  "Name of doctor": "Dr.Solomon",
  "question": "Im recently diagnosed diabetic my doctor prescribed me insulin should I start on insulin or can there be another way of controlling diabetes",
  "answer": "Diabetes can be controlled with drugs diet and exercise first we should know your blood sugar levels and HBA1c levels and type of diabetes you are having to comment on what type of treatment plan best suites for you.",
  "consultNow": "yes"
}, {
  "category": "Medication",
  "Name of doctor": "Dr.Solomon",
  "question": "Iam diabetic and often I keep missing my medication and I dont have any problem with that .Can this be done???",
  "answer": "No You should take medications for diabetes continuously. This helps in maintaining blood sugar levels and avoid further complications that arise from diabetes",
  "consultNow": "yes"
}, {
  "category": "Consultation",
  "Name of doctor": "Dr.Solomon",
  "question": "How often should I consult doctor for diabetes",
  "answer": "You can go for regular checkup of diabetes once every 3 months and adjust your medications depending on blood sugars and HBA1c",
  "consultNow": "yes"
}, {
  "category": "Consultation",
  "Name of doctor": "Dr.Solomon",
  "question": "My father is diabetic his blood sugars are not getting controlled even after using all the medications prescribed by doctor regularly. What is solution",
  "answer": "Diabetes can be controlled with drugs diet and exercise first we should know your blood sugar levels and HBA1c levels and type of diabetes. Please consult doctor for complete assessment and preparing treatment plan",
  "consultNow": "yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 30 yrs female diabetic and pregnant now will my baby have diabetes",
  "answer": "Diabetes in the mother does not get transmitted directly to the baby. However, being the child of a diabetic parent, your child will have a higher chance of developing diabetes later in life.In pregnancy, however, one needs to control the sugars very strictly, otherwise the baby can have many problems including congenital anomalies, hypoglycemia, metabolic problems and growth problems etc.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im suffering from erectile dysfunction my doctor asked me to check for diabetes why ???",
  "answer": "It happens with diabetes.It happens because of impairment of nerves,blood vessels,muscle function in diabetes.Maintain normal body weight.Follow diet and exercise along with proper medication.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Can diabetes be permanently cured or one have to live with it for rest of his life by taking medicines and strict diet?",
  "answer": "Diabetic changes occurs at the cellular level. Once diagnosed,Diabetes can only be managed and controlled but cannot be cured. With a healthy lifestyle/Food/exercise we can always prevent Diabetes.",
  "consultNow": "No"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 50 yr old female and im having diabetes since 3 yrs should I see opthalmologist or other speciality doctors for any complication ??",
  "answer": "As long as you don’t have any symptoms you don’t need to visit other doctors keep your sugars in control and go regular checkups",
  "consultNow": "yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "My grandfather is suffering with diabetes what food is good for him. Give some suggestions.",
  "answer": "For a person with diabetes a balanced diet is to be given, which should provide exact calories based on his ideal body weight (IBW), blood sugar levels and extent of physical activity. He should avoid sweets, direct sugar and jaggery, deep fried foods, junk foods and pastries. Also should refrain from alcohol and smoking. Please consult our dietician for customized diet plan",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "What is the reason for diabetes? What are symptoms of diabetes effected person? What are precautions to be taken if it is in starting stage?",
  "answer": "diabetes is a chronic metabolic disorder that prevents the body to utilise glucose completely or partially. Symptoms include increased thirst, increased urination, increased hunger, weight loss in type 1 diabetes and obesity in type 2 diabetes. Precautions to be taken include- proper and balanced diet, distribution of foods in a systematic way, avoiding foods which are high in glycemic index and exercise.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "How can I know if I have diabetes?",
  "answer": "Your health care provider can perform blood and urine tests to see if you have diabetes. Normal blood sugar is between 70 mg/dl and 100 mg/dl. The standard diagnosis of diabetes is made when two blood tests show that your fasting blood sugar level (blood sugar before you have eaten anything) is 126 mg/dl or greater.",
  "consultNow": "yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "My father has diabetes. Does that raise my risk?",
  "answer": "Yes. Having a family member with diabetes raises your risk of developing type 1 by about 5 percent and type 2 diabetes by more than 30 percent.",
  "consultNow": "yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "I'm skinny, so I can't get diabetes, right?",
  "answer": "Being overweight is a major risk factor for type 2 diabetes, but 20 percent of people who get it are slim. \"The number of type 2 diabetics is growing, especially in thin Asian populations have higher concentrations of visceral fat, which may be a contributing factor",
  "consultNow": "yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic person I eat only veg food so can you help me with the veg diet",
  "answer": "Please consult our dietician so that you will be given a customized veg diet plan",
  "consultNow": "yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "I am 34 years old, I have diabetic I am using the tablets for that, but my both legs is paining in the night when I lay down on the bed.",
  "answer": "This may be because of uncontrolled sugars please consult doctor and get this diagnosed",
  "consultNow": "yes"
}, {
  "category": "Uncontrolled sugars",
  "Name of doctor": "Dr.Solomon",
  "question": "My mother is diabetic and sugars are above 200 mg/dl can she go for surgery",
  "answer": "Sugars need to be controlled and normal before under going any kind of surgery Please concentrate on controlling sugars with diet and exercise along with proper medication",
  "consultNow": "yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Does consuming soft drinks lead to diabetes?",
  "answer": "Consuming large quantity of sof drinks may lead to diabetes but that is not the only reasonfor diabetes . Diabetes may be hereditary and there are somany other factors that lead to diabetes",
  "consultNow": "No"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Is drinking fruit juice as good for you as eating fruit?",
  "answer": "Both juice and fruit is good but if you compare fruit is far better than juice because the pulp is also going in your stomach. Never drink preservative juice from super market, drink fresh juice and always eat fresh fruits. Try not to keep fruits in refrigerator",
  "consultNow": "No"
}, {
  "category": "Diagnosis",
  "Name of doctor": "Dr.Solomon",
  "question": "I went through diabetic screening test before one week and it was 6.1 according to Hb1ac and I tested at home with glucometer it was 106 before meal and 175 after meal.",
  "answer": "the stage you are in right now is in borderline for developing diabetes Try avoiding oily foods and start exercising. Consult dietician for customised diet plan and exercise plans",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "I want to know the difference between type 1 & type 2 diabetics? And a patient is taking insulin regularly, is there any chance to have type 2 diabetics?",
  "answer": "Type 1 diabetes (formerly called juvenile-onset or insulin-dependent diabetes), accounts for 5 to 10 out of 100 people who have diabetes. In type 1 diabetes, the body's immune system destroys the cells that release insulin, eventually eliminating insulin production from the body. Without insulin, cells cannot absorb sugar (glucose), which they need to produce energy. Type 2 diabetes (formerly called adult-onset or non-insulin-dependent diabetes) can develop at any age. It most commonly becomes apparent during adulthood. But type 2 diabetes in children is rising. Type 2 diabetes accounts for the vast majority of people who have diabetes-90 to 95 out of 100 people. In type 2 diabetes, the body isn't able to use insulin the right way. This is called insulin resistance. As type 2 diabetes gets worse, the pancreas may make less and less insulin. This is called insulin deficiency",
  "consultNow": ""
}, {
  "category": "",
  "Name of doctor": "Dr.Solomon",
  "question": "I am 61 years diabetic since 2005, I was under medication, my sugar level was near normal, but I do not want allopathy medicine, by any other treatment my sugar level will be brought to normal.",
  "answer": "Diabetes can be controlled without medicines ,But only for those patients who are at a very early stage of diabetes which means that they have very low sugar derangement which can be handled by exercise and diet alone. Only way to know that is by trying dietary compliance and good exercise regime. After these efforts if your sugar gets in control then you can sure that you can avoid medicines. But remember two things. Checking of sugars should be regular. One time control does not mean consistent control. Second, if your sugars are out of control then don't keep avoiding medicines because your body is facing the bad effects of diabetes already.",
  "consultNow": ""
}, {
  "category": "Diagnosis",
  "Name of doctor": "Dr.Solomon",
  "question": "My mother has diabetes and now I am in fear that if at all I can cause with diabetes. My age is 22male and my weight is 72 and my stomach size is 38.",
  "answer": "As of now you are not Diabetic but Yes, chances are you may also get diabetes. Please exercise daily and eat very healthy food to avoid it",
  "consultNow": ""
}, {
  "category": "Diagnosis",
  "Name of doctor": "Dr.Solomon",
  "question": "My blood sugars are in slightly on higher side and I had no symptoms for diabetes my doctor asked to go for HBA1c test why??",
  "answer": "The A1C test is a blood test that provides information about a person's average levels of blood glucose, also called blood sugar, over the past 3 months. The A1C test is sometimes called the hemoglobin A1c, HbA1c, or glycosylated hemoglobin test.",
  "consultNow": ""
}, {
  "category": "Information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 25 yr female, Pregnant I heard that pregnancy lead to diabetes. Does pregnancy lead to diabetes??",
  "answer": "Gestational diabetes is thought to arise because the many changes,( hormonal and otherwise), that occur in the body during pregnancy that may lead to insulin resistance in some women that is generally not seen after pregnancy",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 36 yr male and im diabetic and my blood sugars are not in control even after regular medications I feel a lot of stress and tension in my job is this the reason for uncontrolled sugars??",
  "answer": "Yes In general, stress raises blood sugar levels. It is generally temporary. When people are under prolonged stress, they may be less likely to follow through on all the tasks involved in healthy diabetes management .Please consult doctor for suggesting ways to control your sugars",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Did I do something to cause this diabetes?",
  "answer": "People cannot cause their own diabetes. No one knows for sure what makes some people get diabetes and others not, but a person cannot cause diabetes.",
  "consultNow": ""
}, {
  "category": "Medication",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 45 yr female diabetic and started taking insulin recently since then Im gaining weight is this because of diabetes??",
  "answer": "Insulin should not make you gain weight, but when blood sugars are high, sugar (calories) is lost in the urine. As blood sugars come down closer to normal, those calories are no longer lost and can produce a small weight gain. Most people who consume the right amount of calories for their body’s needs, do not gain weight.",
  "consultNow": "Yes"
}, {
  "category": "Exercise",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 48 yr male and diabetic my doctor asked me to start any exercise how does that help me?",
  "answer": "In general, the overall affect is that it lowers blood sugar. There can be an initial rise in blood sugar immediately after intense exercise, followed by a prolonged blood sugar lowering affect.",
  "consultNow": "No"
}, {
  "category": "Exercise",
  "Name of doctor": "Dr.Solomon",
  "question": "Is there any standard for duration of exercise and type of exercise for diabetics???",
  "answer": "The best time is the time you will do it! 30-45 minutes of aerobic exercise, 5-7 days a week is a great goal. Some examples are swimming, walking, tennis, bike riding, and dancing. A minimum of 30-45 minutes, 3 days a week is recommended in those who have been given the OK by their physician. It is alright to break the exercise into 3 or 4 smaller 15-20 minute segments throughout the day. Remember to check your blood sugar then warm up, and cool down for 5-10 minutes. This will help you avoid sore or injured muscles",
  "consultNow": "Yes"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and I had been prescribed insulin I want to know about insulin or pens that I can use??",
  "answer": "An insulin pen is used to inject insulin for the treatment of diabetes. It is composed of an insulin cartridge (integrated or bought separately) and a dial to measure the dose, and is used with disposable pen needles to deliver the dose.",
  "consultNow": ""
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and I had been advised for insulin is ther any way that I can avoid pricking me mutiple times for insulin injection?",
  "answer": "An insulin pump is an alternative to multiple daily injections of insulin by insulin syringes or an insulin pen and allows forintensive insulin therapy when used in conjunction with blood glucose monitoring and carb counting .Please consult for more information",
  "consultNow": ""
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im Diabetic and can I have alchohol ???",
  "answer": "Yes, adults with diabetes can drink alcohol and should follow the same guidelines as the general public—an average of up to one drink per day for women and up to two drinks per day for men, with no more than three or four drinks in any single day for women and men, respectively. moderate alcohol consumption has minimal short- or long-term effects on glucose levels in people with type 1 or 2 diabetes",
  "consultNow": ""
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 28 yrs female and im recently diagnosed diabetic will my blood sugars vary when im having menstruation(Periods)??",
  "answer": "yes! It’s common for women to have hormone fluctuations the week before their period, and those can affect glucose control. After ovulating, estrogen and progesterone rise. “Estrogen can make women more sensitive to insulin and cause hypoglycemia. Progesterone can do the converse,Glucose levels often return to their usual patterns after the first few days of the menstrual",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Me and my wife both are diabeticc and on insuin can we share our syringes (Lancets) for giving insulin ??",
  "answer": "No that should not be done .Blood-testing devices, including lancets syringes, should never be used by more than one person to prevent any chance of infection",
  "consultNow": ""
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic should I always carry glucose tablets wth me???",
  "answer": "Your risk for hypoglycemia depends on the category of blood glucose-lowering medication(s) you take, not your type of diabetes. Some medications can cause hypoglycemia, including insulin but Most of the commonly used blood glucose-lowering medications for type 2 diabetes don’t cause hypoglycemia . But it is always advisible to carry glucose tablets",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Is it true that complications of diabetes can be delayed and even prevented",
  "answer": "Yes! the earlier your diabetes is diagnosed and the sooner you start to aggressively get your blood sugar, blood pressure, and cholesterol into target ranges, the healthier you can be over the years. Please consult doctor for complete treatment plan to keep sugars in control",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and I frequently miss medications How can I get motivated to take care of myself",
  "answer": "Taking care of diabetes and getting through your daily to-do list along with your other responsibilities is demanding Please consult our doctor for complete treatment plan and please download our app so that we will remind you and try to motivate you daily",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 26 yr pregnant when should I get my sugars checked??",
  "answer": "all women who are not already diagnosed with diabetes be screened for gestational diabetes after the 24th week of pregnancy.Most women are screened for gestational diabetes between the 24th and 28th weeks of pregnancy.",
  "consultNow": ""
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 25 yr female, Pregnant will I still be diabetic even after delivery of baby??",
  "answer": "Even though your gestational diabetes will probably go away after your baby is born, you are at risk for gestational diabetes again and for type 2 diabetes later in life.",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and my sugars are in control.Should I take any precautions when I fall sick",
  "answer": "When you are sick, your body reacts by releasing hormones to fight infection. But these hormones raise blood sugar levels and at the same time make it more difficult for insulin to lower blood sugar. When you have diabetes, even a minor illness can lead to dangerously high blood sugar. This may cause life-threatening complications, such as diabetic ketoacidosis or a hyperosmolar state.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and using birth control pills will these have any affect??",
  "answer": "Birth control pills may raise your BG levels. Using them for longer than a year or 2 may also increase your risk of complications. For instance, if you develop high blood pressure while on the pill, you increase the chance that eye or kidney disease will worsen",
  "consultNow": ""
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im pregnant and I what are the normal blood sugar levels that I should have",
  "answer": "Fasting 60-90 mg/dL (whole blood) 69-104 mg/dL (plasma)\nBefore meals 60-105 mg/dL (whole blood) 69-121 mg/dL\n1 hour after meals 100-120 mg/dL (whole blood) 115-138 mg/dL\n2 a.m. - 6 a.m. 60-120 mg/dL (whole blood) 69-138 mg/dL",
  "consultNow": ""
}, {
  "category": "Consultation",
  "Name of doctor": "Dr.Solomon",
  "question": "Is their a time frame that women with diabetes should follow for check-ups such as gynecological exams",
  "answer": "Check-ups should be performed on a regular, consistent basis to ensure that the diabetes is not negatively affecting the reproductive organs. Your Doctor will determine how often you should visit with him/her depending on your overall health.",
  "consultNow": ""
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 26 yr female can I breast feed my baby??",
  "answer": "Breast milk provides the best nutrition for babies and breastfeeding is recommended for all mothers with either preexisting diabetes or gestational diabetes.",
  "consultNow": ""
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "I had diabetes before I was pregnant. Now that I am pregnant, how often should I monitor my BG levels",
  "answer": "It is recommend that a woman with pre-existing diabetes (both type 1 & type 2) who becomes pregnant monitor her BG levels up to 8 times daily. In terms of your day-to-day routine, you should probably monitor: before each meal, 1 or 2 hours after each meal, at bedtime, occasionally at 2-3 a.m",
  "consultNow": ""
}, {
  "category": "Consultation",
  "Name of doctor": "Dr.Solomon",
  "question": "I had gestational diabetes. How soon after having the baby should I get my blood glucose rechecked",
  "answer": "About 6-8 weeks after delivery. Like 90% of the women with gestational diabetes, your BG levels will probably return to normal right after your baby is born. However, you still run the risk of developing type 2 diabetes. In fact, prior studies have shown women who have had gestational diabetes are at risk (of up to 60%) for developing diabetes in the next 10 to 20 years.",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 24 yr female diabetic what are the sex related problems that ill have?",
  "answer": "Lack of interest in sex (libido), pain or discomfort during intercourse, and decreased production of vaginal lubrication to name a few",
  "consultNow": "Yes"
}, {
  "category": "Exercise",
  "Name of doctor": "Dr.Solomon",
  "question": "I've read that belly fat is a diabetes risk factor. Should I worry about my muffin top",
  "answer": "Yes. Excess fat around your midsection is linked to a higher risk of type 2 diabetes. (Type 1 diabetes has nothing to do with obesity). In particular, the visceral fat wrapped around your internal organs can pose a problem, and it increases insulin resistance (the problem in type 2 diabetes) more so than fat in other parts of your body.",
  "consultNow": ""
}, {
  "category": "Treatment",
  "Name of doctor": "Dr.Solomon",
  "question": "Im already on insulin for diabetes why should I regularly check blood glucose levels",
  "answer": "Self-monitored values are important so you can adjust your medications. If you take multiple daily injections, you should be testing at least four times a day and sometimes seven to eight times",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic andi take insulin before Breakfast what if I skip taking food after taking insulin",
  "answer": "When you take insulin, or sulfonylureas like glipizide, you are at risk of hypoglycemia (Low blood sugar). Low blood sugar is dangerous you may feel giddy and even loose consiousness",
  "consultNow": ""
}, {
  "category": "Treatment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the types of insulin treatments available to diabetes patients?",
  "answer": "There’s long-acting basal insulin, which lasts 24 hours. Then there’s rapid-acting, which you inject every time you eat. Some are pre-mixed, which means you get a combination of intermediate and rapid. Type 2s typically start with long-acting insulin in addition to oral meds, and then they progress to injections of short-acting with the largest meals, and if that’s not enough then short-acting with every meal.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im Diabetic can I be hypoglycemic ?? What are the effects of hypoglycemia??",
  "answer": "Hypoglycemia, low blood sugar, is a short-term danger because it can be potentially lethal, causing loss of consciousness. It can lead to stroke or heart attack, cause less sensitivity to subsequent hypoglycemic episodes, and increase your risk of death in the future.",
  "consultNow": "No"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Are artificial sweeteners bad for diabetics? How often can we really take them?",
  "answer": "This is a controversial question. I believe artificial sweeteners are better than eating calories from sugar. They don’t cause diabetes. That said, usually we limit patients to two to three artificially sweetened drinks per day. Use of artificial sweeteners is associated with weight gain—and excess consumption can cause problems.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since 5 yrs andI’m concerned about loss of eyesight. What are the preventive measures, and what are the early symptoms?",
  "answer": "The best preventive measure is lowering your blood sugars. Every point drop in A1C means a 15 to 20 percent drop in retinopathy. Unfortunately, there aren’t really any early symptoms of retinopathy. If you wait for symptoms, it may be too late. You can only prevent diabetic retinopathy; you can’t reverse it. Annual exams are key. Timely laser treatment can prevent retinopathy from getting worse.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "I have Diabetic neuropathy. What are the most effective ways of treating the pain?",
  "answer": "Controlling your blood sugar is the most important way to control nerve pain. Continued high blood sugar is toxic to your nerves. Effective blood sugar control can help stop the pain of neuropathy and even reverse the damage in some cases.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and I consume alcholol does that interact with diabetes medications",
  "answer": "Alchohol can cause glucose levels to raise or fall depending on amount of alcholol you consume. Combination of blood sugar lowering effect of alcholol and diabetic medication can cause hypoglycemia",
  "consultNow": ""
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Im Diabetic on medication how can I know that my sugars are less than normal??",
  "answer": "Shakiness, Nervousness or anxiety, Sweating, chills and clamminess,Irritability or impatience,Confusion, includingdelirium,Rapid/fast heartbeat,Lightheadedness or dizziness,Hunger and nausea are symptoms of hypoglycemia (low blood sugars)",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Is my eye sight affected due to diabetes Im a diabetic since 10 yrs??",
  "answer": "Diabetic retinopathy is a complication of diabetes and a leading cause of blindness. It occurs when diabetes damages the tiny blood vessels inside the retina, the light-sensitive tissue at the back of the eye.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Are my both eyes are affected in diabetes retinopathy??",
  "answer": "If you have diabetic retinopathy, at first you may notice no changes to your vision. But over time, diabetic retinopathy can get worse and cause vision loss. Diabetic retinopathy usually affects both eyes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and on insulin since 6 yrs am I at a risk of developing blindness??",
  "answer": "All people with diabetes -- both type 1 and type 2 -- are at risk for diabetic retinopathy. People with diabetes are also at increased risk for cataract and glaucoma. That's why everyone with diabetes should get a comprehensive dilated eye exam at least once a year.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How does diabetes lead to loss of vision ?",
  "answer": "Blood vessels damaged from diabetic retinopathy can cause vision loss in two ways.\nFragile, abnormal blood vessels can develop and leak blood into the center of the eye, blurring vision. This is proliferative retinopathy and is the fourth and most advanced stage of the disease.\nFluid can leak into the center of the macula, the part of the eye where sharp, straight-ahead vision occurs. The fluid makes the macula swell, blurring vision. This condition is called macular edema.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since 10 yrs how do I know my eyes are being affected by that??",
  "answer": "Diabetic retinopathy often has no early warning signs. Don't wait for symptoms. Be sure to have a comprehensive dilated eye exam at least once a year.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Are there any stages in diabetic retinopathy??",
  "answer": "mild nonproliferative retinopathy\nmoderate nonproliferative retinopathy\nsevere nonproliferative retinopathy\nproliferative retinopathy",
  "consultNow": ""
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years and I see disturbance in my vision what is the reason??",
  "answer": "This may be due to Diabetic Retinopathy,At first, you will see a few specks of blood, or spots, \"floating\" in your vision. If spots occur, see your eye care professional as soon as possible.Sometimes, the spots clear without treatment, and you will see better. However, bleeding can reoccur and cause severely blurred vision",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years and I wanted my vision to be tested what are the tests that I can undergo??",
  "answer": "Diabetic retinopathy and macular edema are detected during a comprehensive eye exam that includes a visual acuity test, dilated eye exam, and tonometry.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years and I have blurred vision ocassionally my doctor advised me for fluorescein angiogram what is that??",
  "answer": "In this test, a special dye is injected into your arm. Pictures are taken as the dye passes through the blood vessels in your retina. The test allows your eye care professional to identify any leaking blood vessels and recommend treatment.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "My eyes are affected due to diabetes how is that treated??",
  "answer": "During the first three stages of diabetic retinopathy, no treatment is needed, unless you have macular edema. To prevent progression of diabetic retinopathy, people with diabetes should control their levels of blood sugar, blood pressure, and blood cholesterol.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic from many years and now im having diabetic retinopathy last stage how is that treated??",
  "answer": "Proliferative retinopathy (4th stage in diabetic retinopathy) is treated with laser surgery. This procedure is called scatter laser treatment. Scatter laser treatment helps to shrink the abnormal blood vessels.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How is macular edema treated ???",
  "answer": "prompt treatment of macular edema with anti-VEGF drugs, with or without laser treatment, resulted in better vision than laser treatment alone or steroid injections. When injected into the eye, these drugs reduce fluid leakage and interfere with the growth of new blood vessels in the retina.\nIn some cases, focal laser treatment is used along with the eye injections. Your doctor places up to several hundred small laser burns in the areas of the retina around the macula that are leaking.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im suffering with diabetic retinopathy my doctor advised me for laser treatment How is that done??",
  "answer": "Both focal and scatter laser treatment are performed in your doctor's office or eye clinic. Before the surgery, your doctor will dilate your pupil and apply drops to numb the eye. The area behind your eye also may be numbed to prevent discomfort.The lights in the office will be dim. As you sit facing the laser machine, your doctor will hold a special lens to your eye. During the procedure, you may see flashes of light. These flashes eventually may create a stinging sensation that can be uncomfortable.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What can I do about some vision that had already occurred to me because of diabetic retinopathy??",
  "answer": "If you have lost some sight from diabetic retinopathy, ask your eye care professional about low vision services and devices that may help you make the most of your remaining vision. You can consult a specialist in low vision.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since many years how can I protect my vision??",
  "answer": "It is recommended everyone with diabetes to have a comprehensive dilated eye exam at least once a year. If you have diabetic retinopathy, you may need an eye exam more often. People with proliferative retinopathy can reduce their risk of blindness by 95 percent with timely treatment and appropriate follow-up care.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Does controlling blood sugar slow the onset of diabetic retinopathy?",
  "answer": "A major study has shown that better control of blood sugar levels slows the onset and progression of retinopathy. The people with diabetes who kept their blood sugar levels as close to normal as possible also had much less kidney and nerve disease. Better control also reduces the need for sight-saving laser surgery.This tight control of blood sugar control may not be best for everyone, including some elderly patients, children under age 13, or people with heart disease. Be sure to ask your doctor if such a control program is right for you.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic and im worried that I will lose my vision because of diabetes can you give me some suggestions to prevent this happening??",
  "answer": "If you have diabetes, get a comprehensive dilated eye exam at least once a year.\nProliferative retinopathy can develop without symptoms. If it gets to this advanced stage, you are at high risk for vision loss or even blindness.\nMacular edema can develop without symptoms at any of the four stages of diabetic retinopathy.\nYou can develop both proliferative retinopathy and macular edema and still see fine. However, you are at high risk for vision loss.\nYour eye care professional can tell if you have macular edema or any stage of diabetic retinopathy. Whether or not you have symptoms, early detection and timely treatment can prevent vision loss.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Are there some researches being done for preventing diabetic retinopathy ??",
  "answer": "The National Eye Institute, or NEI, is conducting and supporting research that seeks better ways to detect, treat, and prevent vision loss in people with diabetes. This research is conducted through studies in the laboratory and with patients.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im already on insulin for diabetes why should I regularly check blood glucose levels",
  "answer": "monitoring once or twice a day is OK, not so much for adjusting medication and glucose levels but to get feedback about what you’re eating. Test before breakfast and before dinner.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "My blood sugars are higher than normal but my doctor says im not diabetic yet and did not prescribe any medicines why???",
  "answer": "Prediabetes means your blood glucose levels are higher than normal but not high enough for a diagnosis of diabetes.People with prediabetes are at an increased risk for developing type 2 diabetes and for heart disease and stroke. The good news is that if you have prediabetes, you can reduce your risk of getting type 2 diabetes. With modest weight loss and moderate physical activity, you can delay or prevent type 2 diabetes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "My father is diabetic am I at a risk of getting diabetes what are risk factors for diabetes",
  "answer": "Risk factors for diabetes are\nbeing over 45 years of age\nbeing overweight or obese\nhaving a first-degree relative -- a parent, brother, or sister -- with diabetes\nbeing African American, American Indian or Alaska Native, Asian American or Pacific Islander, or Hispanic American/Latino. (Watch the video to learn more about native Americans and diabetes risk. To enlarge the video, click the brackets in the lower right-hand corner. To reduce the video, press the Escape (Esc) button on your keyboard.)\nhaving gestational diabetes, or giving birth to at least one baby weighing more than 9 pounds\nhaving blood pressure of 140/90 or higher, or having been told that you have high blood pressure.\nhaving abnormal cholesterol levels -- an HDL cholesterol level of 35 or lower, or a triglyceride level of 250 or higher\nbeing inactive or exercising fewer than three times a week.\nhaving polycystic ovary syndrome, also called PCOS (women only)\non previous testing, having prediabetes (an A1C level of 5.7 to 6.4 percent), impaired glucose tolerance (IGT) or impaired fasting glucose (IFG)\nhistory of cardiovascular disease (disease affecting the heart and blood vessels).",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "If I Have Diabetes, am I at Risk for Dental Problems?",
  "answer": "If your blood glucose levels are poorly controlled, you are more likely to develop serious gum disease and lose more teeth than non-diabetics. Like all infections, serious gum disease may be a factor in causing blood sugar to rise and may make diabetes harder to control.Other oral problems associated to diabetes include: thrush, an infection caused by fungus that grows in the mouth, and dry mouth which can cause soreness, ulcers, infections and cavities.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How Can I Help Prevent Dental Problems Associated with Diabetes?",
  "answer": "First and foremost, control your blood glucose level. Then, take good care of your teeth and gums, along with regular checkups every six months. To control thrush, a fungal infection, maintain good diabetic control, avoid smoking and, if you wear them, remove and clean dentures daily. Good blood glucose control can also help prevent or relieve dry mouth caused by diabetes",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What Can I Expect at My Checkup? Should I Tell My Dental Professional About My Diabetes?",
  "answer": "People with diabetes have special needs and your dentist and hygienist are equipped to meet those needs—with your help. Keep your dentist and hygienist informed of any changes in your condition and any medication you might be taking. Postpone any non-emergency dental procedures if your blood sugar is not in good control.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im Diabetic and I want to know why ill get dental problems with that??",
  "answer": "Glucose is present in your saliva—the fluid in your mouth that makes it wet. When diabetes is not controlled, high glucose levels in your saliva help harmful bacteria grow. These bacteria combine with food to form a soft, sticky film called plaque. Plaque also comes from eating foods that contain sugars or starches. Some types of plaque cause tooth decay or cavities. Other types of plaque cause gum disease and bad breath.\nGum disease can be more severe and take longer to heal if you have diabetes. In turn, having gum disease can make your blood glucose hard to control.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "I have plaques in my mouth and im diabetic how does that progress??",
  "answer": "Plaque that is not removed hardens over time into tartar and collects above your gum line. Tartar makes it more difficult to brush and clean between your teeth. Your gums become red and swollen, and bleed easily—signs of unhealthy or inflamed gums, called gingivitis.When gingivitis is not treated, it can advance to gum disease called periodontitis consult doctor for treatment",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How will I know if I am having mouth problems from diabetes?",
  "answer": "Check your mouth for signs of problems from diabetes. If you notice any problems, see your dentist right away. Some of the first signs of gum disease are swollen, tender, or bleeding gums. Sometimes you won’t have any signs of gum disease. You may not know you have it until you have serious damage. Your best defense is to see your dentist twice a year for a cleaning and checkup.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Do people with diabetes lose their teeth more often and sooner than people without diabetes",
  "answer": "Many factors play a role in the loss of teeth in people with diabetes. First, people with uncontrolled diabetes are more prone to the development of gingivitis and periodontal disease. If the infection persists, it can spread to the underlying bone that anchors the teeth. Complicating this situation is the fact that infections don’t resolve as quickly in people with diabetes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years how do I maintain oral hygine??",
  "answer": "Have your teeth and gums cleaned and checked by your dentist twice a year.\nPrevent plaque buildup on teeth by using dental floss at least once a day.\nBrush your teeth after every meal. Use a soft-bristled toothbrush.\nIf you wear dentures, remove them and clean them daily.\nIf you smoke, talk to your doctor about ways to quit.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years why do I need to keep my gums healthy??",
  "answer": "Since people with diabetes are more prone to conditions that might harm their oral health, it’s vital to follow good oral hygiene practices, pay special attention to any changes in your oral health, and to call your dentist immediately if such changes occur.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 25yr female and diabetic what are the types of contraceptives that I can use??",
  "answer": "There is no single contraceptive which is ideal for all women with diabetes. Each method has some disadvantages and some advantages. You and your healthcare provider should discuss the most appropriate method for you.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since many years what are the eye problems that I may face???",
  "answer": "The three major eye problems that people with diabetes need to be aware of are cataracts, glaucoma, and retinopathy.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diagnosed diabetic retinopathy and how I take care of myself??",
  "answer": "Schedule regular eye exams to make sure you get treatment when you need it. Tell your doctor if you have any change in your vision. As long as you have diabetes, there is a chance you will develop retinopathy. However, careful control of your blood sugar levels will help delay and possibly prevent vision loss. Carolina Eye is a multi-subspecialty eye center provi",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Is Diabetic retinopathy is due to some medicines that im taking???",
  "answer": "To date, no drugs have been associated with the onset of diabetic retinopathy.However, certain drugs promote dilation of blood vessels and can accelerate the progression of diabetic retinopathy. Doctors know which drugs to avoid and, when necessary, will recommend more appropriate treatments.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Is diabetic retinopathy painful will I feel any pain in eyes if I have diabetic retinopathy??",
  "answer": "No, diabetic retinopathy is not painful. The eye examinations required and the treatments available are not painful either.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Are ther any aids that I can use if im suffering with diabetic retinopathy??",
  "answer": "There are numerous vision aids (magnifiers, closed circuit televisions, etc.) that facilitate daily activities for people with advanced Diabetic retinopathy.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im having diabetic retinopathy should I follow any diet restrictions???",
  "answer": "A very well-balanced diet and certain food guidelines are recommended for people with diabetic retinopathy. Sugars and fats, which increase blood sugar levels, must be avoided.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diagnosed diabetic retinopathy can I smoke??",
  "answer": "It’s always a good idea to quit smoking. Smokers are at greater\nrisk of cardiovascular disease, high blood pressure in particular—\na risk factor in diabetic retinopathy.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 24 yr female pregnant how do I know whether I have diabetes or not??",
  "answer": "Gestational diabetes is usually diagnosed between the 24th and 28th week of pregnancy (when insulin resistance usually begins). If you have had gestational diabetes before, or if your doctor is concerned about your risk of developing gestational diabetes, the test may be performed before the 13th week of pregnancy.\nTo screen for gestational diabetes, you will take a test called the oral glucose tolerance test.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im preganant I want to know risk factors for diabetes at pregnancy??",
  "answer": "These factors increase your risk of developing diabetes during pregnancy:\nBeing overweight before becoming pregnant (if you are 20% or more over your ideal body weight)\nFamily history of diabetes (if your parents or siblings have diabetes)\nBeing over age 25\nPreviously giving birth to a baby that weighed more than 9 pounds\nPreviously giving birth to a stillborn baby\nHaving gestational diabetes with an earlier pregnancy\nBeing diagnosed with pre-diabetes\nHaving polycystic ovary syndrome\nKeep in mind that half of women who develop gestational diabetes have no known risk factors.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How do I monitor my blood sugar if I have gestational diabetes",
  "answer": "Testing your blood sugar at certain times of the day will help determine if your exercise and eating patterns are keeping your blood sugar levels in control, or if you need extra insulin to protect your developing baby. Your doctor will tell you when and how often to test your blood sugar.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Do I need to take insulin if I have gestational diabetes",
  "answer": "Based on your blood glucose monitoring results, your doctor will tell you if you need to take insulin injections during pregnancy.As your pregnancy progresses, the placenta will make more pregnancy hormones, and larger doses of insulin may be needed to control your blood sugar. Your doctor will adjust your insulin dosage based on your blood glucose log.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diagnosed to have gestational diabetes what are the complications that I may face??",
  "answer": "Gestational diabetes may increase your risk of developing high blood pressure during pregnancy.Labor and delivery are generally not affected by gestational diabetes. However, if the baby has grown too large, or if your blood pressure is high, a cesarean delivery may be necessary.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Should I exercise if I have gestational diabetes",
  "answer": "Every pregnant woman should check with her doctor before beginning an exercise program. Your doctor can give you personal exercise guidelines, based on your medical history. Thirty minutes of exercise every day, or most days, will help manage gestational diabetes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic from 5 yrs How do I know my kidneys are not affected with diabetes?",
  "answer": "By testing the urine. Diabetic nephropathy should be detected as early as possible. One of the first findings is the presence of very small amounts of protein in the urine. Therefore a urine albumin creatinine ratio (ACR) is an excellent test to determine who has early disease and who will respond to therapy. Please consult doctor for further suggestions",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Will my kidney function be affected due to diabetes??",
  "answer": "Diabetic nephropathy is a progessive deterioraton in kidney function that is associated with diabetes. In type 1 diabetes, it is primarily associated with the diabetic pathology per se, while in type 2 it is also related to the associated comorbidities of hypertension and cardiovascular disease.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since 5 yrs and im having diabetic nephropathy how are my kidneys effected with diabetes",
  "answer": "With diabetes, the small blood vessels in the body are injured. When the blood vessels in the kidneys are injured, your kidneys cannot clean your blood properly. Your body will retain more water and salt than it should, which can result in weight gain and ankle swelling. You may have protein in your urine. Also, waste materials will build up in your blood.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic will I compulsorily end up with Kidney failure??",
  "answer": "Not everyone with diabetes develops kidney disease. Factors that can influence kidney disease development include genetics, blood sugar control, and blood pressure.The better a person keeps diabetes and blood pressure under control, the lower the chance of getting kidney disease.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic from 5 yrs what are the symptoms of kidney failure",
  "answer": "The earliest sign of diabetic kidney disease is an increased excretion of albumin in the urine. This is present long before the usual tests done in your doctor's office show evidence of kidney disease, so it is important for you to have this test on a yearly basis. Weight gain and ankle swelling may occur. You will use the bathroom more at night. Your blood pressure may get too high.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are late signs of kidney failure??",
  "answer": "As your kidneys fail, your blood urea nitrogen (BUN) levels will rise as well as the level of creatinine in your blood. You may also experience nausea, vomiting, a loss of appetite, weakness, increasing fatigue, itching, muscle cramps (especially in your legs) and anemia (a low blood count).",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 64 yrs old and im having diabetic nephropathy how can I keep my kidney functioning as long as possible??",
  "answer": "The kidney doctor, called a nephrologist, will plan your treatment with you, your family and your dietitian. Two things to keep in mind for keeping your kidneys healthy are controlling high blood pressure in conjunction with an ACE inhibitor and following your renal diabetic diet. Restricting protein in your diet also might be helpful. You and your dietitian can plan your diet together",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years and my doctor said im suffering with end stage kidney disease what is that??",
  "answer": "End stage renal failure, or kidney failure, occurs when your kidneys are no longer able to support you in a reasonably healthy state, and dialysis or transplantation is needed. This happens when your kidneys function at only 10 to 15 percent.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diagnosed diabetic nephropathy how can I be treated?",
  "answer": "Lowering blood pressure and maintaining blood sugar control are absolutely necessary to slow the progression of diabetic nephropathy. Some medicines called angiotensin converting enzyme (ACE) inhibitors can help slow down the progression of kidney damage.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Can diabetic people can have kidney transplantation?",
  "answer": "Yes. Once you get a new kidney, you may need a higher dose of insulin. Your appetite will improve so your new kidney will break down insulin better than your injured one. You will use steroids to keep your body from rejecting your new kidney. If your new kidney fails, dialysis treatment can be started while you wait for another kidney.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im suffering with diabetic nephropathy, How can I be treated if my kidneys are completely failed???",
  "answer": "Three types of treatment can be used once your kidneys have failed: kidney transplantation, hemodialysis and peritoneal dialysis. To learn more about treatment options for kidney failure",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years how can I prevent kidney diseases from diabetes??",
  "answer": "Diabetic kidney disease can be prevented by keeping blood sugar in your target range. Research has shown that tight blood sugar control reduces the risk of microalbuminuria by one third. In people who already had microalbuminuria, the risk of progressing to macroalbuminuria was cut in half. Other studies have suggested that tight control can reverse microalbuminuria.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "I had protein in my urine but now the test is negative.\nHow can this happen?",
  "answer": "Kidney disease is not the only reason for protein to appear in the urine. If you have a urinary tract infection (UTI) this can lead to protein being passed out in the urine. People with poorly controlled diabetes can be more prone to urinary tract infections because glucose in the urine provides a breeding ground for bacteria. This might need treatment with antibiotics.In some cases, if the infection persists, it can cause damage to the kidneys, so it is very important for people with diabetes to visit their doctor if they develop a urinary tract infection.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 58 yr old diabetic How can my doctor check for kidney failure???",
  "answer": "As part of your annual health care review you should have a blood and urine test. Your urine will be checked for tiny particles of protein, called 'microalbumin'. These appear during the first stages of kidney disease, as the kidneys become 'leaky' and lose protein. At this stage, kidney disease can often be treated successfully, so this test is very important. The blood test will measure urea, creatine, and estimated glomerular function (eGFR) showing how well the kidneys are working.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and developed kidney disease will this ever go away???",
  "answer": "If you have microalbuminuria, this may clear away, especially with treatment.If you have proteinuria (described above), over time the disease tends to get worse and progress to end-stage kidney failure. However, the length of time this takes can vary and it may take years. If your kidneys do begin to fail you should be referred to a kidney specialist. Once the kidney function goes below a certain level then you will need kidney dialysis or a kidney transplant.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im Diabetic since many years will I have kidney stones??",
  "answer": "If you have type 2 diabetes, you may have very acidic urine. That increases your risk for developing kidney stones.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Do both type1 and type 2 diabetes lead to kidney diseases??",
  "answer": "Yes. Type I diabetes which is the type that people generally get at younger age, can cause kidney disease in about one-third of the affected people. We now know that Type II diabetics also have a similar rate of developing kidney disease. However, Type II diabetes is far more common, which makes it the leading cause of kidney failure.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diagnosed gestational diabetes what will happen to my baby after delivery ??",
  "answer": "Your baby’s blood sugar level will be tested immediately after birth. If the blood sugar is low, your baby will be given sugar water to drink, or by an intravenous tube in the vein.If you had gestational diabetes, there is an increased risk that your newborn will develop jaundice.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Is my stomach and digestion is also affected by diabetes ??",
  "answer": "Gastroparesis is a disorder affecting people with both type 1 and type 2 diabetes in which the stomach takes too long to empty its contents (delayed gastric emptying).",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic and my doctor told that im having gastroparesis what is that??",
  "answer": "Gastroparesis, also called delayed gastric emptying, is a disorder that slows or stops the movement of food from the stomach to the small intestine. Normally, the muscles of the stomach, which are controlled by the vagus nerve, contract to break up food and move it through the gastrointestinal (GI) tract. Gastroparesis can occur when the vagus nerve is damaged by illness or injury and the stomach muscles stop working normally Diabetes is the most common known cause of gastroparesis.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and I feel full after eating very small amount of food why is this??",
  "answer": "The most common symptoms of gastroparesis are nausea, a feeling of fullness after eating only a small amount of food, and vomiting undigested food—sometimes several hours after a meal.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic and my doctor told that im having gastroparesis what are the symptoms of gastroparesis??",
  "answer": "The most common symptoms of gastroparesis are nausea, a feeling of fullness after eating only a small amount of food, and vomiting undigested food—sometimes several hours after a meal. Other symptoms of gastroparesis include\n\ngastroesophageal reflux (GER), also called acid reflux or acid regurgitation—a condition in which stomach contents flow back up into the esophagus, the organ that connects the mouth to the stomach\npain in the stomach area\nabdominal bloating\nlack of appetite\nSymptoms may be aggravated by eating greasy or rich foods, large quantities of foods with fiber",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years and ive been diagnosed to have gastroparesis what are thecomplication for that??",
  "answer": "The problems of gastroparesis can include\n\nsevere dehydration due to persistent vomiting\ngastroesophageal reflux disease (GERD), which is GER that occurs more than twice a week for a few weeks; GERD can lead to esophagitis— irritation of the esophagus\nbezoars, which can cause nausea, vomiting, obstruction, or interfere with absorption of some medications in pill form\ndifficulty managing blood glucose levels in people with diabetes\nmalnutrition due to poor absorption of nutrients or a low calorie intake\ndecreased quality of life, including work absences due to severe symptoms",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How is gastroparesis treated if a person has diabetes?",
  "answer": "An elevated blood glucose level directly interferes with normal stomach emptying, so good blood glucose control in people with diabetes is important. However, gastroparesis can make blood glucose control difficult. When food that has been delayed in the stomach finally enters the small intestine and is absorbed, blood glucose levels rise. Gastric emptying is unpredictable with gastroparesis, causing a person’s blood glucose levels to be erratic and difficult to control.\nThe primary treatment goals for gastroparesis related to diabetes are to improve gastric emptying and regain control of blood glucose levels. In addition to the dietary changes and treatments already described, a health care provider will likely adjust the person’s insulin regimen",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 28 yr male diabetic and im having hair loss is this because of diabetes??",
  "answer": "If high blood sugar is causing circulation problems, the capillaries that supply blood to the hair follicles may die, leading to hair loss. Hyperglycemia can also disrupt the endocrine system, leading to androgen abnormalities that can cause the hair follicles to go dormant and lead to widespread hair loss.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 25 yrs male and diabetic now-a-days im felling tired and exhausted is this because of diabetes??",
  "answer": "Yes, especially if your blood sugar levels are not under control, hyperglycemia usually makes you feel tired and without energy. When you experience high sugar levels your cells are not getting the energy they need to do their job. The lack of insulin to help cells get the energy (sugar) cause cells to “starve”, thus making you feel tired.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im having diabetes since 4yr and im 34 yrs old will diabetes effect my sex health??",
  "answer": "Both men and women with diabetes can develop sexual problems because of damage to nerves and small blood vessels. Damage to autonomic nerves can hinder normal function. Reduced blood flow resulting from damage to blood vessels can also contribute to sexual dysfunction.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a 28 yr male and in having diabetes what are the sexual problems that I may face ??",
  "answer": "Erectile dysfunction is a consistent inability to have an erection firm enough for sexual intercourse. The condition includes the total inability to have an erection and the inability to sustain an erection.\nRetrograde ejaculation is a condition in which part or all of a man's semen goes into the bladder instead of out the tip of the penis during ejaculation. Retrograde ejaculation occurs when internal muscles, called sphincters, do not function normally",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a 28 yr female and in having diabetes what are the sexual problems that I may face ??",
  "answer": "Sexual problems may include\n1)decreased vaginal lubrication, resulting in vaginal dryness\n2)uncomfortable or painful sexual intercourse\n3)decreased or no desire for sexual activity\n4)decreased or absent sexual response",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 24 yr male and im diabetic how can I prevent sexual problems that may arise because of diabetes??",
  "answer": "People with diabetes can lower their risk of sexual and urologic problems by keeping their blood glucose, blood pressure, and cholesterol levels close to the target numbers their health care provider recommends. Being physically active and maintaining a healthy weight can also help prevent the long-term complications of diabetes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 26 yr female and diabetic what are reasons for sexual problems that I may face due to diabetes",
  "answer": "Causes may include:\nNerve damage\nLess blood flow to the genital and vaginal areas\nHormonal changes\nSide effects of medications\nAlcohol abuse\nSmoking\nPsychological issues like anxiety, depression, stress\nInfections\nConditions related to pregnancy or menopause\nOther diseases",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How are sexual related issues due to diabetes are treated in women???",
  "answer": "Prescription or over-the-counter vaginal lubricants may be useful for women experiencing vaginal dryness. Techniques to treat decreased sexual response include changes in position and stimulation during sexual relations. Psychological counseling may be helpful. Kegel exercises that help strengthen the pelvic muscles may improve sexual response.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Does diabetes affect fertility??",
  "answer": "Poor blood sugar control is related to higher miscarriage rates during the first three months of pregnancy. Also, some women with type 2 diabetes may be overweight and/or have polycystic ovary syndrome, which may make getting pregnant harder.\nAgain, though, these are the types of issues that women with diabetes should talk about with their healthcare providers so that treatments can be explored.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years and my doctor said Im prone to diabetic neuropathy what is that??",
  "answer": "Diabetic neuropathy is a type of nerve damage that can occur if you have diabetes. High blood sugar can injure nerve fibers throughout your body, but diabetic neuropathy most often damages nerves in your legs and feet.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic and my sugars are not under control how do I know that I have nerve related issues due to diabetes??",
  "answer": "Depending on the affected nerves, symptoms of diabetic neuropathy can range from pain and numbness in your extremities to problems with your digestive system, urinary tract, blood vessels and heart. For some people, these symptoms are mild; for others, diabetic neuropathy can be painful, disabling and even fatal.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diagnosed with diabetic neuropathy, what are the types of diabetic neuropathy??",
  "answer": "There are four main types of diabetic neuropathy. You may have just one type or symptoms of several types. Most develop gradually, and you may not notice problems until considerable damage has occurred.\nPeripheral neuropathy\nAutonomic neuropathy\nRadiculoplexus neuropathy (diabetic amyotrophy)\nMononeuropathy",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and my had diagnosed me that ive developed Peripheral neuropathy what is that??",
  "answer": "Peripheral neuropathy is the most common form of diabetic neuropathy. Your feet and legs are often affected first, followed by your hands and arms. Signs and symptoms of peripheral neuropathy are often worse at night, and may include:\nNumbness or reduced ability to feel pain or temperature changes\nA tingling or burning sensation\nSharp pains or cramps\nIncreased sensitivity to touch — for some people, even the weight of a bed sheet can be agonizing\nMuscle weakness\nLoss of reflexes, especially in the ankle\nLoss of balance and coordination\nSerious foot problems, such as ulcers, infections, deformities, and bone and joint pain",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and my had diagnosed me that ive developed Autonomic neuropathy what is that??",
  "answer": "The autonomic nervous system controls your heart, bladder, lungs, stomach, intestines, sex organs and eyes. Diabetes can affect the nerves in any of these areas, possibly causing:\nA lack of awareness that blood sugar levels are low (hypoglycemia unawareness)\nBladder problems, including urinary tract infections or urinary retention or incontinence\nConstipation, uncontrolled diarrhea or a combination of the two\nSlow stomach emptying (gastroparesis), leading to nausea, vomiting, bloating and loss of appetite\nDifficulty swallowing\nErectile dysfunction in men\nVaginal dryness and other sexual difficulties in women\nIncreased or decreased sweating\nInability of your body to adjust blood pressure and heart rate, leading to sharp drops in blood pressure after sitting or standing that may cause you to faint or feel lightheaded\nProblems regulating your body temperature\nChanges in the way your eyes adjust from light to dark\nIncreased heart rate when you're at rest",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and my had diagnosed me that ive developed Radiculoplexus neuropathy(diabetic amyotrophy) what is that??",
  "answer": "Radiculoplexus neuropathy affects nerves in the thighs, hips, buttocks or legs. Also called diabetic amyotrophy, femoral neuropathy or proximal neuropathy, this condition is more common in people with type 2 diabetes and older adults.\nSymptoms are usually on one side of the body, though in some cases symptoms may spread to the other side. Most people improve at least partially over time, though symptoms may worsen before they get better. This condition is often marked by:\nSudden, severe pain in your hip and thigh or buttock\nEventual weak and atrophied thigh muscles\nDifficulty rising from a sitting position\nAbdominal swelling, if the abdomen is affected\nWeight loss",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and my had diagnosed me that ive developed Mononeuropathy what is that??",
  "answer": "Mononeuropathy involves damage to a specific nerve. The nerve may be in the face, torso or leg. Mononeuropathy, also called focal neuropathy, often comes on suddenly. It's most common in older adults.\nAlthough mononeuropathy can cause severe pain, it usually doesn't cause any long-term problems. Symptoms usually diminish and disappear on their own over a few weeks or months. Signs and symptoms depend on which nerve is involved and may include:\nDifficulty focusing your eyes, double vision or aching behind one eye\nParalysis on one side of your face (Bell's palsy)\nPain in your shin or foot\nPain in your lower back or pelvis\nPain in the front of your thigh\nPain in your chest or abdomen",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diagnosed with diabetic neuropathy recently what are the other risk factors that lead to diabetic neuropathy??",
  "answer": "These factors make you more susceptible to nerve damage:\nPoor blood sugar control. This is the greatest risk factor for every complication of diabetes, including nerve damage. Keeping blood sugar consistently within your target range is the best way to protect the health of your nerves and blood vessels.\nLength of time you have diabetes. Your risk of diabetic neuropathy increases the longer you have diabetes, especially if your blood sugar isn't well-controlled.\nKidney disease. Diabetes can cause damage to the kidneys, which may increase the toxins in the blood and contribute to nerve damage.\nBeing overweight. Having a body mass index greater than 24 may increase your risk of developing diabetic neuropathy.\nSmoking. Smoking narrows and hardens your arteries, reducing blood flow to your legs and feet. This makes it more difficult for wounds to heal and damages the integrity of the peripheral nerves.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diagnosed diabetic neuropathy what are the complication that I may face??",
  "answer": "Diabetic neuropathy can cause a number of serious complications, including Loss of Limb , Charcot joints, Urinary tract infections and Urinary incontinence, Hypoglycemic unawareness , low blood pressure , Digestive problems, sexual dysfunction, Increased or decreased sweating",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since many years what are tests I have to undergo to rule out diabetic neuropathy??",
  "answer": "Diabetic neuropathy is usually presumptively diagnosed clinically by the patient's symptoms, medical history, and physical exam. However, there are other tests that can definitively diagnose the condition by actually measuring the loss of nerve function. Nerve conduction studies measure the speed of nerve signals in the arms and legs, while electromyography measures the electrical discharges produced in muscles. Other tests of nervous system function may be done on some patients. About 45% to 50% of all patients with diabetes are eventually diagnosed with some form of neuropathy",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How are nerves damaged if im having diabetes??",
  "answer": "Diabetes damages blood vessels throughout the body. Some of these blood vessels are responsible for bringing oxygen to the nerves and nerve coverings of the peripheral nerves. Damaged nerves do not function effectively to relay messages to the brain and other areas of the body. The damaged nerves may send signals at the wrong time, send inappropriate or incorrect signals, send signals too slowly, or fail to transmit signals at all. This pattern of inappropriate signaling by the peripheral nerves causes the symptoms of peripheral neuropathy like weakness, numbness, and loss of balance. Sensations such as heat, cold, and pain may not be felt, and abnormal sensations such as burning or tingling may be experienced.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Are there any ways to avoid Diabetic nephropathy that I can do in my home",
  "answer": "There are a number of self- and home care measures that you can take to relieve the symptoms of diabetic neuropathy. Examples are:\nUsing a device known as a bed cradle to keep bedcovers off of sensitive feet and lower legs\nUsing heat or cold patches, but since diabetic neuropathy can damage sensory nerves, care should be taken to avoid burns or freezing\nEating small, frequent meals and avoiding fatty foods may help those with digestive symptoms\nStanding up slowly or wearing elastic compression stockings can improve orthostatic hypotension\nExercises, stretching, or massage may help relieve pain",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years can I prevent developing diabetic neuropathy ??",
  "answer": "Keeping diabetes under control is the best way to prevent or stop the progression of diabetic neuropathy. Your doctor can advise you about the best target range for your blood glucose levels, and keeping tight control of blood sugar within this range can help prevent neuropathy and other complications of diabetes. Avoiding smoking, getting exercise, and eating a healthy diet are other measures that can help people with diabetes have the best long-term outcomes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diagnosed diabetic neuropathy how is that treated??",
  "answer": "While diabetic neuropathy cannot be cured, there are treatments available to help manage some of the symptoms. Another treatment goal is keeping blood glucose levels under good control through a combination of diet and medication so that the neuropathy does not worsen. Keeping blood glucose levels under control has been shown to improve symptoms and prevent worsening of the pain.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the best ways to take care of my feet if im diabetic???",
  "answer": "some tips for foot care for people with diabetes or diabetic peripheral neuropathy:\n1. Regularly examine your feet for sores or injuries.\n2. Wear comfortable footwear that do not rub or cause blisters.\n3. Use warm water — not hot water — for washing. \n4. Never go barefoot.\n5. Protect your feet from temperature extremes.\n6. Moisturize the feet, but do not apply moisturizer between the toes. \n7. Cut your toenails once per week.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What is the serious consequences of diabetic neuropathy if untreated??",
  "answer": "Amputation is a serious consequence of untreated neuropathy. if an injury to the feet occurs, it may not be felt or noticed. Lack of care for this injury can lead to a serious infection that will not heal, resulting in amputation of the foot in the most severe cases.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Why is diabetes troublesome for the feet?",
  "answer": "Diabetes can be troublesome for the feet because it can cause numbness in the feet, and can deprive the feet of nutrients and oxygen, which increases the risk for infections and ulcers from injuries.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the tests that are done for diabetic neuropathy??",
  "answer": "Filament test. Sensitivity to touch may be tested using a soft nylon fiber called a monofilament.\nNerve conduction studies. This test measures how quickly the nerves in your arms and legs conduct electrical signals. It's often used to diagnose carpal tunnel syndrome.\nElectromyography (EMG). Often performed along with nerve conduction studies, electromyography measures the electrical discharges produced in your muscles.\nQuantitative sensory testing. This noninvasive test is used to assess how your nerves respond to vibration and changes in temperature.\nAutonomic testing. If you have symptoms of autonomic neuropathy, your doctor may request special tests to look at your blood pressure in different positions and assess your ability to sweat.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What is stroke? Im a diabetic since may years am I at risk for stroke ??",
  "answer": "The risk of stroke is two and one-half times higher in people with diabetes. A stroke is damage to part of the brain tissue as a result of a loss of blood and oxygen. Brain tissue needs a constant supply of oxygen and nutrients to keep nerve cells and other parts of the tissue alive and functioning.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How can diabetes affect my feet?",
  "answer": "Diabetes can cause two problems that can affect your feet:\nDiabetic neuropathy — Uncontrolled diabetes can damage your nerves. If you have damaged nerves in your legs and feet, you might not feel heat, cold or pain. This lack of feeling is called diabetic neuropathy. If you do not feel a cut or sore on your foot because of neuropathy, the cut could get worse and become infected.\nPeripheral vascular disease — Diabetes also affects the flow of blood. Without good blood flow, it takes longer for a sore or cut to heal. Poor blood flow in the arms and legs is called peripheral vascular disease. (The word \"peripheral\" means \"located away from a central point,\" and the word \"vascular\" refers to the blood vessels. Peripheral vascular disease is a circulation disorder that affects blood vessels away from the heart.)",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are some common foot problems of people with diabetes?",
  "answer": "Athletes foot , fungal infection of nails, calluses,corns, blisters, dry skin, foot ulcers, ingrowing toe nails,hammertoes, plantar warts.For people with diabetes, these common foot problems can possibly lead to infection and serious complications, such as amputation.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How can diabetes affect my skin?",
  "answer": "If your blood glucose is high, your body loses fluid, causing your skin to become dry. This occurs because the body is turning the water into urine to remove excess glucose from the blood. Your skin also can get dry if the nerves, especially those in your legs and feet, do not get the message to sweat (because of diabetic neuropathy). Sweating helps keep your skin soft and moist.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the symptoms skin problems that may arise due to diabetes??",
  "answer": "Dry skin can become red and sore, and can crack and peel. Germs can enter through the cracks in your skin and cause an infection. In addition, dry skin usually is itchy, and scratching can lead to breaks in the skin and infection.\nSkin problems are common in people with diabetes. Blood glucose provides an excellent breeding ground for bacteria and fungi, and can reduce the body’s ability to heal itself. These factors put people with diabetes at greater risk for skin problems.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the common skin problems that may arise due to diabetes??",
  "answer": "people with diabetes are more prone to getting these conditions, which can lead to serious complications. such as diabetic dermopathy, necrobiosis lipoidica diabeticorum and eruptive xanthomatosis occur only in people with diabetes.people with diabetes also can develop skin conditions that affect people who do not have diabetes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years and is there any way to prevent skin problems that may arise due to diabetes??",
  "answer": "Keeping your diabetes under control is the most important factor in preventing the skin-related complications of diabetes. Follow your health care provider’s advice regarding nutrition, exercise, and medication. Keep your blood glucose level within the range recommended by your health care provider. Proper skin care also can help reduce your risk of skin-related problems.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since many years and I wanted to know when to contact doctor for skin problems??",
  "answer": "Changes in skin color\nChanges in skin temperature\nSwelling in the foot or ankle\nPain in the legs\nOpen sores on the feet that are slow to heal or are draining\nIngrown toenails or toenails infected with fungus\nCorns or calluses\nDry cracks in the skin, especially around the heel\nUnusual and/or persistent foot odor",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How should I manage my diabetes medicines while I am pregnant?",
  "answer": "If you take insulin to control your diabetes, your health care provider can tell you how to adjust your medicine. Generally, your body will require more insulin during pregnancy, especially during the last three months of pregnancy.\nIf you take oral medicines to control your diabetes, your health care provider might switch your medicine to insulin during pregnancy, since certain oral medicines could harm the developing baby.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and How should I plan meals while I am pregnant?",
  "answer": "During pregnancy, you and your health care provider should work together to adjust your meal plan. Changing your meal plan will help you avoid problems with low and high blood glucose levels. Your meal plan will also be adjusted to include more calories for your growing baby. Your health care provider may suggest that you see a dietician to help with meal planning and obtaining better blood glucose control.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How can I help prevent dental problems associated with diabetes?",
  "answer": "First and foremost, control your blood glucose level. Then take good care of your teeth and gums, along with regular dental check-ups every six months. - See more at: http://www.diabetes.org/living-with-diabetes/treatment-and-care/oral-health-and-hygiene/oral-health-faqs.html#sthash.9nqef0s9.dpuf",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since 5 yrs, What's the first stage of gum disease",
  "answer": "The first stage of gum disease is gingivitis and if ignored, can develop into the more severe form of gum disease, known as periodontitis. When this happens, you may need gum surgery to save your teeth. - See more at: http://www.diabetes.org/living-with-diabetes/treatment-and-care/oral-health-and-hygiene/oral-health-faqs.html#sthash.9nqef0s9.dpuf",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since 5 yrs,What are the signs of gingivitis and/or serious gum disease",
  "answer": "Some of the possible signs of gingivitis and/or serious gum disease include: Bleeding and red, swollen, or tender gums Gums that have pulled away from the teeth. Pus between the teeth and gums (when you press on the gums) Bad breath Permanent teeth that are loose or moving away from each other Changes in the way your teeth fit when you bite Changes in the fit of partial dentures or bridges",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How do I know if I have serious gum disease??",
  "answer": "Often there are no signs of serious gum disease. You may not know you have it until you have some serious damage. Regular dental visits are your best weapon. - See more at: http://www.diabetes.org/living-with-diabetes/treatment-and-care/oral-health-and-hygiene/oral-health-faqs.html#sthash.9nqef0s9.dpuf",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and my sugars are not in control can having stress is the reason for uncontrolled diabetes??",
  "answer": "Stress can make it more difficult to control your diabetes as it may throw off your daily routine and can result in wear and tear on your body. Hormones from stress increase your blood pressure, raise your heart rate, and can cause blood sugar to rise. High blood sugar can make you feel down or tired. Low blood sugar may result in your feeling upset or nervous.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "I am a 57 years old male suffering from diabetic 2 since june 2014. I am taking glyciphage 500 SR 1 tab b/f and 1/2 tab at 6pm. Hba1c was 7.70% . What should I do.",
  "answer": "Hba1c is the test that improves after treatment. If it is not improved, it means you need to adjust dose or add another drug, and you should follow diabetic diet and physical exercise is also necessary. Multi drug therapy is a common feature of diabetes. See your doctor every three months,",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "I am 52 years old and I have uncontrolled diabetes and I feel restless in nights and do not get sleep until and unless I take sleeping tablets .How can this be treated??",
  "answer": "Diabetes also leads to disturbed sleep .your sugars had to be controlled and have some physical exercise so that you will have good sleep at night consult doctor for treatment",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "My friend is diabetic and he is hospitalized or diabetic ketoacidosis what is that??",
  "answer": "Diabetic ketoacidosis (DKA) is a serious condition that can lead to diabetic coma (passing out for a long time) or even death.\nWhen your cells don't get the glucose they need for energy, your body begins to burn fat for energy, which produces ketones. Ketones are chemicals that the body creates when it breaks down fat to use for energy. The body does this when it doesn’t have enough insulin to use glucose, the body’s normal source of energy. When ketones build up in the blood, they make it more acidic. They are a warning sign that your diabetes is out of control or that you are getting sick.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since many years am I at arisk of diabetic ketoacidosis and is that dangerous??",
  "answer": "Diabetic ketoacidosis (DKA) is a serious condition that can lead to diabetic coma (passing out for a long time) or even death.\nWhen your cells don't get the glucose they need for energy, your body begins to burn fat for energy, which produces ketones.High levels of ketones can poison the body. When levels get too high, you can develop DKA. DKA may happen to anyone with diabetes, though it is rare in people with type 2.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the early symptoms of Diabetic ketoacidosis (DKA)??",
  "answer": "DKA usually develops slowly. But when vomiting occurs, this life-threatening condition can develop in a few hours. Early symptoms include the following:\nThirst or a very dry mouth\nFrequent urination\nHigh blood glucose (blood sugar) levels\nHigh levels of ketones in the urine",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Is Diabets ketacidosis dangerous ??",
  "answer": "Ketoacidosis (DKA) is dangerous and serious. If you have any of the symptoms of DKA, contact your health care provider IMMEDIATELY, or go to the nearest emergency room of your local hospital.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How Do I Check for Ketones",
  "answer": "You can detect ketones with a simple urine test using a test strip, similar to a blood testing strip. Ask your health care provider when and how you should test for ketones. -",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years and im in good control os bood sugars when should I check for ketones??",
  "answer": "Many experts advise to check your urine for ketones when your blood glucose is more than 240 mg/dl.When you are ill (when you have a cold or the flu, for example), check for ketones every 4 to 6 hours. And check every 4 to 6 hours when your blood glucose is more than 240 mg/dl.Also, check for ketones when you have any symptoms of DKA.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Can I go for regular exercise if I have ketones in urine??",
  "answer": "Do NOT exercise when your urine tests show ketones and your blood glucose is high. High levels of ketones and high blood glucose levels can mean your diabetes is out of control. Check with your health care provider about how to handle this situation.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic and on my regular check ups I found urine test positive for ketones When should I go to hospital if I find ketones in urine test??",
  "answer": "Ketones in urine is a serious condition called Diabetic ketoacidosis Visit hospoital at once if you experience the following conditions:\nYour urine tests show high levels of ketones.\nYour urine tests show high levels of ketones and your blood glucose level is high.\nYour urine tests show high levels of ketones and you have vomited more than twice in four hours.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the causes of Diabetic ketoacidosis??",
  "answer": "Three basic reasons for moderate or large amounts of ketones:\nNot enough insulin\nMaybe you did not inject enough insulin. Or your body could need more insulin than usual because of illness.\nNot enough food\nWhen you're sick, you often don't feel like eating, sometimes resulting in high ketone levels. High levels may also occur when you miss a meal.\nInsulin reaction (low blood glucose)\nIf testing shows high ketone levels in the morning, you may have had an insulin reaction while asleep.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the risk factors for Diabetic ketoacidosis??",
  "answer": "The risk of diabetic ketoacidosis is highest if you:\nHave type 1 diabetes\nFrequently miss insulin doses\nUncommonly, diabetic ketoacidosis can occur if you have type 2 diabetes. In some cases, diabetic ketoacidosis may be the first sign that a person has diabetes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "what are the complications of Diabetic ketoacidosis??",
  "answer": "Treatment complications include:\nLow blood sugar (hypoglycemia). Insulin allows sugar to enter your cells, causing your blood sugar level to drop. If your blood sugar level drops too quickly, you can develop low blood sugar.\nLow potassium (hypokalemia). The fluids and insulin used to treat diabetic ketoacidosis can cause your potassium level to drop too low. A low potassium level can impair the activities of your heart, muscles and nerves.\nSwelling in the brain (cerebral edema). Adjusting your blood sugar level too quickly can produce swelling in your brain. This complication appears to be more common in children, especially those with newly diagnosed diabetes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the blood tests that I should have for diagnosing diabetic ketoacidosis??",
  "answer": "Blood tests used in the diagnosis of diabetic ketoacidosis will measure:\nBlood sugar level. If there isn't enough insulin in your body to allow sugar to enter your cells, your blood sugar level will rise (hyperglycemia). As your body breaks down fat and protein for energy, your blood sugar level will continue to rise.\nKetone level. When your body breaks down fat and protein for energy, acids known as ketones enter your bloodstream.\nBlood acidity. If you have excess ketones in your blood, your blood will become acidic (acidosis). This can alter the normal function of organs throughout your body.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "If im diagnosed diabetic ketoacidosis how will I be treated??",
  "answer": "If you're diagnosed with diabetic ketoacidosis, you might be treated in the emergency room or admitted to the hospital. Treatment usually involves:\n\nFluid replacement. You'll receive fluids — either by mouth or through a vein (intravenously) — until you're rehydrated. The fluids will replace those you've lost through excessive urination, as well as help dilute the excess sugar in your blood.\nElectrolyte replacement. Electrolytes are minerals in your blood that carry an electric charge, such as sodium, potassium and chloride. The absence of insulin can lower the level of several electrolytes in your blood. You'll receive electrolytes through a vein to help keep your heart, muscles and nerve cells functioning normally.\nInsulin therapy. Insulin reverses the processes that cause diabetic ketoacidosis. In addition to fluids and electrolytes, you'll receive insulin therapy — usually through a vein. When your blood sugar level falls below 240 mg/dL (13.3 mmol/L) and your blood is no longer acidic, you may be able to stop intravenous insulin therapy and resume your normal insulin therapy.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic siince many years how do I prevent getting diabetic ketoacidosis??",
  "answer": "Commit to managing your diabetes. Make healthy eating and physical activity part of your daily routine. Take oral diabetes medications or insulin as directed.\nMonitor your blood sugar level. You might need to check and record your blood sugar level at least three to four times a day — more often if you're ill or under stress. Careful monitoring is the only way to make sure your blood sugar level remains within your target range.\nAdjust your insulin dosage as needed. Talk to your doctor or diabetes educator about how to adjust your insulin dosage in relation to your blood sugar level, what you eat, how active you are, whether you're ill and other factors. If your blood sugar level begins to rise, follow your diabetes treatment plan to return your blood sugar level to your target range.\nCheck your ketone level. When you're ill or under stress, test your urine for excess ketones with an over-the-counter urine ketones test kit. If your ketone level is moderate or high, contact your doctor right away or seek emergency care. If you have low levels of ketones, you may need to take more insulin",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 58yrs male and diabetic and I have problems with my vision when should I go for doctor visit??",
  "answer": "Careful management of your diabetes is the best way to prevent vision loss. If you have diabetes, see your eye doctor for a yearly eye exam with dilation — even if your vision seems fine. Pregnancy may worsen diabetic retinopathy, so if you're pregnant, your eye doctor may recommend additional eye exams throughout your pregnancy.\nContact your eye doctor right away if your vision changes suddenly or becomes blurry, spotty or hazy.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and I have vision problems also what are the other risk factors that worsens my vision apart from diabetes??",
  "answer": "Anyone who has diabetes can develop diabetic retinopathy. Risk of developing the eye condition can increase as a result of:\nDuration of diabetes — the longer you have diabetes, the greater your risk of developing diabetic retinopathy\nPoor control of your blood sugar level\nHigh blood pressure\nHigh cholesterol\nPregnancy\nTobacco use",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im 50 yr old and im diabetic will I develop heart problems??",
  "answer": "Adults with diabetes are two to four times more likely to have heart disease or suffer a stroke than people without diabetes. High blood glucose in adults with diabetes increases the risk for heart attack, stroke, angina, and coronary artery disease.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the risk factors for heart disease and stroke in people with diabetes?",
  "answer": "Diabetes itself is a risk factor for heart disease and stroke. Also, many people with diabetes have other conditions that increase their chance of developing heart disease and stroke. These conditions are called risk factors. One risk factor for heart disease and stroke is having a family history of heart disease. If one or more members of your family had a heart attack at an early age (before age 55 for men or 65 for women), you may be at increased risk.risk factors for heart disease listed here:\nHaving central obesity.\nHaving abnormal blood fat (cholesterol) levels\nHaving high blood pressure\nSmoking",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What types of heart and blood vessel disease occur in people with diabetes?",
  "answer": "Two major types of heart and blood vessel disease, also called cardiovascular disease, are common in people with diabetes: coronary artery disease (CAD) and cerebral vascular disease. People with diabetes are also at risk for heart failure. Narrowing or blockage of the blood vessels in the legs, a condition called peripheral arterial disease, can also occur in people with diabetes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What Heart Diseases Are Involved in Diabetic Heart Disease?",
  "answer": "DHD may include coronary heart disease (CHD), heart failure, and/or diabetic cardiomyopathy",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and suffering with coronary artery disease and have 3 blocks in heart vessels and I was advised for Surgery can I go for surgery?",
  "answer": "You can go for surgery if your blood sugars are in control. Diabetics are more prone to infections after surgery if blood sugars are uncontrolled",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabeic since many years am I at a risk of developing heart diseases and how??",
  "answer": "Yes diabetes is a risk factor for developing heart diseases.The most common cause of heart disease in a person with diabetes is hardening of the coronary arteries or atherosclerosis, which is a buildup of cholesterol in the blood vessels that supply oxygen and nutrition to the heart.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since 7 yrs and I want to know how to prevent heart diseases in diabetes??",
  "answer": "National Institutes of Health and the Centers for Disease Control and Prevention, has developed the “ABCs” of cardiovascular risk reduction.\n“A” is for A1c, or HbA1c, a blood value that measures control of blood sugar over time. People with diabetes should target a value below 7% to reduce their risk of heart attack and other cardiovascular problems.\n“B” is for blood pressure, which is a cardiovascular risk factor for all people, with diabetes or not. People should strive for a blood pressure of 130/80 mm Hg or less. \n“C” is for cholesterol, specifically the LDL, or “bad,” cholesterol. The target is an LDL level of less than 100 mg/dl.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since 10 yrs are there any medications that I can use for preventing heart diseases??",
  "answer": "Ask your doctor whether you should take an aspirin every day. Studies have shown that taking a low dose of aspirin every day can help reduce your risk of heart disease and stroke.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years how do I know that im developing problems ??",
  "answer": "You may have less saliva, causing your mouth to feel dry. (Dry mouth is also caused by certain medications.)\nBecause saliva protects your teeth, you’re also at a higher risk of cavities.\nGums may become inflamed and bleed often (gingivitis).\nYou may have problems tasting food.\nYou may experience delayed wound healing.\nYou may be susceptible to infections inside of your mouth.\nFor children with diabetes, teeth may erupt at an age earlier than is typical.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Why People with Diabetes Are More Prone to Gum Disease",
  "answer": "Periodontal disease is the most common dental disease affecting those living with diabetes, affecting nearly 22% of those diagnosed. Especially with increasing age, poor blood sugar control increases the risk for gum problems. In fact, people with diabetes are at a higher risk for gum problems because of poor blood sugar control. As with all infections, serious gum disease may cause blood sugar to rise. This makes diabetes harder to control because you are more susceptible to infections and are less able to fight the bacteria invading the gums.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since 3 yrs, How can my Dentist Fight Diabetes??",
  "answer": "Research suggests that treating gum disease can help improve blood sugar control in patients living with diabetes, decreasing the progression of the disease. Practicing good oral hygiene and having professional deep cleanings done by your dentist can help to lower your HbA1c.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since since many years and what is that I have to do keep my teeth and oral cavity healthy??",
  "answer": "Control your blood sugar levels. Use your diabetes-related medications as directed, changing to a healthier diet and even exercising more can help. Good blood sugar control will also help your body fight any bacterial or fungal infections in your mouth and help relieve dry mouth caused by diabetes.\nAvoid smoking.\nIf you wear any type of denture, clean it each day.\nMake sure to brush twice a day with a soft brush and floss correctly daily.\nSee your dentist for regular checkups.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Can I take both pills and insulin to control my blood sugar?",
  "answer": "Yes. The combination of insulin and an oral medication, when taken as directed by your doctor, is very safe and effective in controlling blood sugar. A typical combination therapy consists of taking an oral medication during the day and insulin at night. Once you begin taking insulin, you will need to monitor your blood sugar more often to reduce the risk of low blood sugar reactions.\n\nCombination therapies are often helpful for people who have type 2 diabetes (adult onset diabetes). If you have been taking an oral medication, your doctor may change your treatment plan to include insulin injections. This change is often made to help people with type 2 diabetes gain better control of their blood sugar.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "How does pregnancy cause diabetes??",
  "answer": "Pregnancy puts extra stress on a woman's body that causes some women to develop diabetes. Blood sugar levels often return to normal after childbirth. Yet, women who get diabetes during pregnancy have an increased chance of developing diabetes later in life.",
  "consultNow": "No"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Can diabetes be cured?",
  "answer": "No. A cure for diabetes has not yet been found. However, diabetes can be treated and controlled. Most people with diabetes manage their disease and lead normal lives.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "I heard about insulin pumps for treatment of diabetes what are they ??",
  "answer": "An insulin pump is a medical device used for the administration of insulin in the treatment of diabetes mellitus, also known as continuous subcutaneous insulin infusion therapy. The device configuration may vary depending on design. A traditional pump includes:\n\nthe pump (including controls, processing module, and batteries)\na disposable reservoir for insulin (inside the pump)\na disposable infusion set, including a cannula for subcutaneous insertion (under the skin) and a tubing system to interface the insulin reservoir to the cannula.\nAn insulin pump can help you manage your diabetes. By using an insulin pump, you can match your insulin to your lifestyle, rather than getting an insulin injection and matching your life to how the insulin is working.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and on insulin I wanted to how does an insulin pump work??",
  "answer": "Insulin pumps deliver rapid- or short-acting insulin 24 hours a day through a catheter placed under the skin. Your insulin doses are separated into:\nBasal rates\nBolus doses to cover carbohydrate in meals\nCorrection or supplemental doses\nBasal insulin is delivered continuously over 24 hours, and keeps your blood glucose levels in range between meals and overnight. Often, you program different amounts of insulin at different times of the day and night.\nWhen you eat, you use buttons on the insulin pump to give additional insulin called a bolus. You take a bolus to cover the carbohydrate in each meal or snack. If you eat more than you planned, you can simply program a larger bolus of insulin to cover it.\nYou also take a bolus to treat high blood glucose levels. If you have high blood glucose levels before you eat, you give a correction or supplemental bolus of insulin to bring it back to your target range.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What is insulin pump and How is insulin pump fixed to body ??",
  "answer": "Insulin pumps are small, computerized devices that some people with diabetes use to help manage their blood sugar. They wear their pump on their belt or put it in their pocket.\nThe pump releases rapid-acting insulin into your body through a small, flexible tube (called a catheter) which goes under your belly's skin and is taped in place.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Should I check my blood sugars if im using insulin pump???",
  "answer": "When you use an insulin pump, you must check your blood sugar level at least four times a day. You set the doses of your insulin and make adjustments to the dose depending on your food and exercise.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Why Should I Use an Insulin Pump for Diabetes?",
  "answer": "Some doctors prefer the insulin pump because it releases insulin slowly, like how a normal pancreas works. Another advantage of the insulin pump is that you don't have to measure insulin into a syringe.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What to do with insulin pump when im sleeping or bathing???",
  "answer": "You can buy a pump case or it can be attached to a waistband, pocket, bra, garter belt, sock, or underwear. You can also tuck any excess tubing into the waistband of your underwear or pants.\nWhen you sleep, you could try laying the pump next to you on the bed. You could even try wearing it on a waistband, armband, legband, or clip it to the blanket, sheet, pajamas, stuffed toy, or pillow with a belt clip.\nShowering and bathing are other instances when you should know where to put your insulin pump. Although insulin pumps are water resistant, they should not be set directly in the water. Instead, you can disconnect it. All insulin pumps have a disconnect port for activities, such as swimming, bathing, or showering. Some pumps can be placed on the side of the tub, in a shower caddy, or in a soap tray. There are also special cases you can buy. You can hang these cases from your neck or from a shower curtain hook.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are tips to follow when I wanted to disconnect from insulin pump??",
  "answer": "It is important for you to remember that if you stop your pump while it is in the middle of delivering any bolus -- it will NOT be resumed. You may need to program a new one.\nBe sure to bolus to cover the basal rate you will miss. If your blood glucose level is under 150, you can wait an hour to bolus.\nDo not go longer than one to two hours without any insulin.\nMonitor your blood glucose every three to four hours.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and im using injections for insulin what are the advantages of insulin pumps over injections??",
  "answer": "Some advantages of using an insulin pump instead of insulin injections are:\n\nUsing an insulin pump means eliminating individual insulin injections\nInsulin pumps deliver insulin more accurately than injections\nInsulin pumps often improve A1C\nUsing an insulin pump usually results in fewer large swings in your blood glucose levels\nUsing an insulin pump makes delivery of bolus insulin easier \nInsulin pumps allow you to be flexible about when and what you eat\nUsing an insulin pump reduces severe low blood glucose episodes\nUsing an insulin pump eliminates unpredictable effects of intermediate- or long-acting insulin\nInsulin pumps allow you to exercise without having to eat large amounts of carbohydrate",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the disadvantages of insulin pumps???",
  "answer": "The disadvantages of using a pump are that it:\nCan cause weight gain\nCan cause diabetic ketoacidosis (DKA) if your catheter comes out and you don’t get insulin for hours\nCan be expensive\nCan be bothersome since you are attached to the pump most of the time\nCan require a hospital stay or maybe a full day in the outpatient center to be trained",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Do I have to undergo any surgery for using insulin pumps for controlling diabetes???",
  "answer": "There is no need to undergo surgery for using insulin pumps.\nYou may need a hospital stay or may be a full day in out-patient center to be trained on how to use connect or disconnect insulin pumps",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Are there any types of insulin pens that are available for administering insulin??",
  "answer": "There are two pen systems: durable and prefilled:\n\nA durable pen uses a replaceable insulin cartridge. When the insulin cartridge is empty, the empty cartridge is disposed of and a new one is inserted in the pen.\nA prefilled pen is entirely disposable. The pen comes pre-filled with insulin, and when the insulin cartridge or reservoir is empty, the entire unit is discarded.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "How to use an insulin pen for administering insulin?",
  "answer": "Screw or click on a new pen needle.\nIf necessary, prime the pen to remove any air from the needle\nTurn the knob on the end of the pen (or \"dial\") to the number of units needed\nInsert the needle into the skin\nPress the button on the end of the pen to deliver the dose\nCount to five or ten depending on dose injected\nRemove\nRemove used pen needle for disposal",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the advantages of insulin pen rather than insulin injection??",
  "answer": "More convenient and easier to transport than traditional vial and syringe\nRepeatedly more accurate dosages\nEasier to use for those with visual or fine motor skills impairments\nLess injection pain (as polished and coated needles are not dulled by insertion into a vial of insulin before a second insertion into the skin)",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are disadvantages of insulin pen??",
  "answer": "Unlike with the traditional syringe, two different insulins cannot be mixed by the user in an insulin pen. On the other hand, some of the newest types of insulin cannot be mixed at all. In addition, using pens and pen needles is usually more expensive than using the traditional vial and syringe method;",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "How do I store an insulin pen?",
  "answer": "Store the insulin cartridges or disposable pens you are not using in the refrigerator. Do not store insulin cartridges or disposable pens in the freezer. Do not store pens with the disposable needle attached. Keep insulin pens out of the reach of children.\n\nKeep the insulin pens that you are using at room temperature. Keep the insulin pen away from direct heat and light. The amount of time that you can use an insulin pen that has been at room temperature varies. Ask how long you may use your insulin after you open and keep it at room temperature.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "How do I use insulin pens??",
  "answer": "insulin is usually injected into the abdomen, thighs, and arms. .\nClean the injection site with a sterile alcohol swab or soap and water. Let your skin dry before you inject the insulin.\nLightly pinch a fold of skin at the injection site. Hold the insulin pen at a 90 degree angle and insert the needle all the way into the skin. Children and thin people may need to inject the needle at a 45 degree angle.\nLet go of the pinched fold of skin. Inject the insulin by pushing the button on the insulin pen all the way in. Keep the button pressed and count to 5 before you remove the needle from the skin. For glargine insulin, leave the needle in your skin for 10 seconds before you remove it. Gently apply pressure on the injection site, but do not rub it.\nPlace the outer cap on the needle and remove the disposable needle from the pen. Throw the needle away in a hard container.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "How can I moniter my blood sugars by myself??",
  "answer": "You can check blood glucose by yourself with glucometer. glucose meter (or glucometer) is a medical device for determining the approximate concentration of glucose in the blood.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What should I do to check sugar levels by using glucometer??",
  "answer": "A small drop of blood, obtained by pricking the skin with a lancet, is placed on a disposable test strip that the meter reads and uses to calculate the blood glucose level. The meter then displays the level in units of mg/dl or mmol/l.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "How accurate is results given by home blood glucose monitering ??",
  "answer": "Accuracy of glucose meters is a common topic of clinical concern. Blood glucose meters must meet accuracy standards set by theInternational Organization for Standardization (ISO). According to ISO 15197 Blood glucose meters must provide results that are within 20% of a laboratory standard 95% of the time (for concentrations about 75 mg/dL, absolute levels are used for lower concentrations).",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are continuous glucose moniters???",
  "answer": "Continuous glucose monitor systems can consist of a disposable sensor placed under the skin, a transmitter connected to the sensor and a reader that receives and displays the measurements. The sensor can be used for several days before it needs to be replaced. The devices provide real-time measurements, and reduce the need for fingerprick testing of glucose levels.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "How accurate is continuous glucose monitering??",
  "answer": "A drawback is that the meters are not as accurate because the read the glucose levels in the Interstitial fluid which lags behind the levels in the blood",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "How to test blood glucose levels with a glucometer??",
  "answer": "A home blood sugar test involves pricking your finger, palm, or forearm with a small needle (lancet) to collect a drop of blood and placing the blood on a special test strip, which you insert into the blood glucose meter before you begin the test. The blood glucose meter displays the results of a blood sugar test within a minute after testing.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are steps to be follwed for checking blood sugars using glucometers??",
  "answer": "Check the expiration date on the bottle of testing strips. Do not use test strips that have expired. The test results may not be accurate.\nAlways store unused test strips in the container. Test strips that have been exposed to air may not give accurate results.\nMatch the code number on the testing strips bottle with the number on the meter. If the numbers do not match, follow the directions with the meter for changing the code number.\nFollow the instructions with the meter. All blood glucose meters have detailed instructions for performing the test. Follow these directions exactly.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the pre-requisites required for checking blood sugars at home??",
  "answer": "A blood glucose meter.\nTesting strips. These are made to be used with a specific model of meter.\nSugar control solution. Each meter requires a specific solution. Many new meters are made to operate without a control solution.\nShort needles called lancets for pricking your skin.\nA pen-sized holder for the lancet (lancet device), which positions the lancet and controls how deeply it goes into your skin.\nClean cotton balls. These are used to stop the bleeding from the testing site.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Are there any devices that will check blood sugars without being pricked??",
  "answer": "The search for a successful technique began about 1975 and has continued to the present without a clinically or commercially viable product",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Is result shown in non-invasive glucometers accurate??",
  "answer": "noninvasive glucose meter was being marketed in a number of countries. Still, as the mean absolute deviation of this device was nearly 30% in clinical trials, 'further research efforts were desired to significantly improve the accuracy",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are diabetic shoes??",
  "answer": "Diabetic shoes, sometimes referred to as extra depth, therapeutic shoes or Sugar Shoes, are specially designed shoes, or shoe inserts, intended to reduce the risk of skin breakdown in diabetics with co-existing foot disease.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and my doctor advised me to use diabetic shoe why??",
  "answer": "People with diabetic neuropathy in their feet may have a false sense of security as to how much at risk their feet actually are. An ulcer under the foot can develop in a couple of hours. The primary goal of therapeutic footwear is to prevent complications, which can include strain, ulcers, calluses, or even amputations for patients with diabetes and poor circulation.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Should a doctor prescribe diabetic shoe ??",
  "answer": "diabetic shoes must be prescribed by a physician and fit by a qualified individual, such as an orthotist, podiatrist or pedorthist. The shoes must also be equipped with a removable orthotic.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Why is that a doctor sholud prescribe diabetic shoe what happens if I wear a wrong shoe??",
  "answer": "Neuropathy can also change the shape of a person's feet, which limits the range of shoes that can be worn comfortably.[3] In addition to meeting strict guidelines, diabetic shoes must be prescribed by a physician",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are Foot orthotics??",
  "answer": "Foot orthotics are devices such as shoe inserts, arch supports, or shoe fillers such as lifts, wedges and heels. The diabetic shoes and custom-molded inserts work together as a preventative system to help diabetics avoid foot injuries and improve mobility.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What is diabetic Sock??",
  "answer": "A diabetic sock is a non-binding and non-elasticized sock which is designed so as to not constrict the foot or leg. Diabetes raises the blood sugar level, which can increase the risk of foot ulcers.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the uses of diabetic socks??",
  "answer": "Diabetic socks are made to be unrestrictive of circulation.Some diabetic socks also control moisture,a feature which can reduce the risk of infection. Another beneficial feature of diabetic socks is seamless toe-closures to reduce pressure and blistering.",
  "consultNow": "No"
}, {
  "category": "Equipment",
  "Name of doctor": "Dr.Solomon",
  "question": "Why are electric blankets discouraged for people who have diabetes? What's the danger?",
  "answer": "Diabetes has many possible complications, including nerve damage (neuropathy).If you have any degree of nerve damage, you may not be able to sense if an electric blanket or heating pad is too hot — which can lead to inadvertent burns. The same issue applies to water temperature when bathing.",
  "consultNow": "No"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Can I use artificial sweeteners if I have diabetes?",
  "answer": "You can use most sugar substitutes if you have diabetes, Sugar substitutes don't affect your blood sugar level. In fact, most artificial sweeteners are considered \"free foods\" — foods containing less than 20 calories and 5 grams or less of carbohydrates — because they don't count as calories or carbohydrates on a diabetes exchange",
  "consultNow": "No"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "How does artificial sweetners work??",
  "answer": "Artificial sweeteners, also called sugar substitutes, offer the sweetness of sugar without the calories. Artificial sweeteners are many times sweeter than sugar, so it takes a smaller amount to sweeten foods. This is why foods made with artificial sweeteners may have fewer calories than those made with sugar.",
  "consultNow": "No"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Are sugar alchohols safe for diabetics??",
  "answer": "be cautious with sugar alcohols — including mannitol, sorbitol and xylitol. Sugar alcohols can increase your blood sugar level. And for some people, sugar alcohols may cause diarrhea.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic and on medication Can diabetes medications cause low sugar??",
  "answer": "Blood sugars less than 70mg/dl is known as hypoglycemia.Hypoglycemia is sometimes called an “insulin reaction” or “insulin shock,” because most people with diabetes know that insulin can cause hypoglycemia. However, hypoglycemia can be a side effect of many diabetes medications. Some medications are more likely than others to cause hypoglycemia.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What is hypoglycemia?? Can a diabetic patient be hypoglycemic??",
  "answer": "Hypoglycemia occurs when blood sugar drops below normal\nlevels or below 70 mg/dL. Yes diabetics can be hypoglycemic for various reasons.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic on medication is low sugar (Hypoglycemia) dangerus for diabetics??",
  "answer": "Hypoglycemia occurs when blood sugar drops below normal\nlevels or below 70 mg/dL. It often happens suddenly. If left\nuntreated, episodes can get worse and lead to seizures, coma,\nand even death.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic on medication what are the symptoms of low blood sugars??",
  "answer": "Each person reacts differently to hypoglycemia. It is important to learn your own body’s signs and symptoms when your\nblood glucose is low. Among the symptoms are:\nShakiness Sweating or chills\n Weakness or fatigue\nSleepiness\nIrritability or impatience\nAnger, stubbornness, or sadness\nNervousness or anxiety Headaches\nBlurred/impaired vision\nConfusion\nLack of coordination\nLightheadedness or dizziness\nRapid/fast heartbeat\nHunger and nausea\nNightmares",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How do I know if I’m having a hypoglycemic episode?",
  "answer": "Checking your blood sugar is the only way to know for sure that you are having a hypoglycemic episode. Sometimes, even though you may have signs of hypoglycemia, they may be caused by another condition; so, if possible, always check your blood sugar before assuming that low blood sugar is the cause of your symptoms.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How can I manage a hypoglycemic episode?",
  "answer": "1. As a diabetic, you should always be prepared, just in case, with: Juice or regular soda (4 oz or ½ cup) Sugar, honey, corn syrup (1 tablespoon) Raisins (2 tablespoons) Nonfat or 1% milk (8 oz) Hard candy Jellybeans Gumdrops Glucose tablets (follow package directions) If you do not have any of these recommendations on hand, eat or drink anything that contains sugar or easily digestible [simple] carbohydrates (15-20 grams) like bread, milk, fruits.\n 2. Recheck your blood sugar after 15 minutes.\n 3. If hypoglycemia continues, eat/drink another 15-20 grams of sugar or simple carbohydrates\n. 4. When blood sugar returns to normal, eat a small snack if your next planned meal or snack is more than 1-2 hours away.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What is the difference between functional and reactive hypoglycemia?",
  "answer": "Functional hypoglycemia refers to decreases in blood sugar that cannot be explained by any known pathology or disease. \nReactive hypoglycemia refers to hypoglycemia resulting from the body’s abnormal response to rapid rises in blood glucose levels caused by diet or stress.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Is it possible to be diabetic And hypoglycemic?",
  "answer": "A diet high in refined carbohydrates can cause the pancreas to overproduce insulin resulting in hypoglycemia. If this taxing of the pancreas goes on long enough, the pancreas begins to tire and fails to respond with insulin when needed. A temporary high glucose level is produced. When that same tired pancreas finally does respond, it does so with too much insulin causing hypoglycemia again. This is a hypoglycemic/pre-diabetic response. If the process continues the pancreas finally becomes exhausted and full-blown diabetes can be the final outcome. The dietary treatment for both conditions is the same.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Can stress trigger hypoglycemia?",
  "answer": "When you suffer from stress (real or imagined), your physical body reacts with what is known as the “fight or flight” response. The adrenal glands secrete the catecholamines, epinephrine and norepinephrine (adrenaline), which raise the blood glucose levels to prepare the body to fight or flee. Once that occurs, the pancreas begins to over-secrete insulin, and lead to hypoglycemis",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What causes hypoglycemia in people with diabetes?",
  "answer": "Hypoglycemia can occur as a side effect of some diabetes medications, including insulin and oral diabetes medications—pills—that increase insulin production\nIn people on insulin or pills that increase insulin production, low blood glucose can be due to\nmeals or snacks that are too small, delayed, or skipped\nincreased physical activity\nalcoholic beverages",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic on medication how can I prevent hypogycemia??",
  "answer": "Diabetes treatment plans are designed to match the dose and timing of medication to a person's usual schedule of meals and activities. Mismatches could result in hypoglycemia. You can get a customized treatment plan and strictly follow schedule of medication and diet",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic and I frequently have hypoglycemia how can this be treated??",
  "answer": "People who experience hypoglycemia several times in a week should call their health care provider. They may need a change in their treatment plan: less medication or a different medication, a new schedule for insulin or medication, a different meal plan, or a new physical activity plan.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Do I have to stay in hospital for treatment of hypoglycemia??",
  "answer": "Hospitalization in hypoglycemia depends on the severity of hypoglycemia. If sugars are too low and you are having unconsiousness and other symptoms of hypoglycemia you need hospitalization",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How does diabetic neuropathy affect my body ??",
  "answer": "Neuropathy can affect nerves throughout the body, causing numbness and sometimes pain in the hands, arms, feet, or legs, and problems with the digestive tract, heart, sex organs, and other body systems.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and I have burning sensation in feet and my doctor told it is because of diabetes can I smoke??",
  "answer": "Smoking increases the risk of foot problems and amputation. A health care provider may be able to provide help with quitting.",
  "consultNow": "Yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "I was taught to control my blood sugar by eating a certain amount of carbohydrates at every meal. Does this mean I can eat as many carb-free foods as I want?",
  "answer": "No, don't eat unlimited amounts of foods just because they're free of carbs (carbohydrates). Carbs aren't your only dietary consideration.\nEating a healthy, portion-controlled diet helps you manage your blood sugar levels and reduces your risk of diabetes-related conditions",
  "consultNow": "Yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "I've heard that you shouldn't eat sweet fruits such as chikoo or mangoes if you have diabetes. Is this true?",
  "answer": "It's a common myth that if you have diabetes you shouldn't eat certain foods because they're \"too sweet.\" Some fruits do contain more sugar than others, but that doesn't mean you shouldn't eat them if you have diabetes.\nThe total amount of carbohydrates in a food affects blood sugar levels more than does the source of carbohydrates or whether the source is a starch or sugar.",
  "consultNow": "Yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "I have diabetes, and I'm wondering if I can substitute honey for sugar in my diet?",
  "answer": "Generally, there's no advantage to substituting honey for sugar in a diabetes eating plan. Both honey and sugar will affect your blood sugar level.\nHoney is sweeter than granulated sugar, so you might use a smaller amount of honey for sugar in some recipes.",
  "consultNow": "Yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic and my friend advised me to follow glycemic index for my diet what is that??",
  "answer": "Some people with diabetes use the glycemic index (GI) as a guide in selecting foods for meal planning. The glycemic index classifies carbohydrate-containing foods according to their potential to raise your blood sugar level. Foods with a high glycemic index value tend to raise your blood sugar higher than do foods with a lower value.",
  "consultNow": "Yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Are there any problems if I plan my meal according to glycemic index??",
  "answer": "The glycemic index may have some benefits, but may be problematic as well. Concerns include:\nSingle food items, rather than combinations of foods, can impact blood sugar differently\nDoesn't consider all variables that affect blood sugar, such as how food is prepared or how much is eaten\nOnly includes foods that contain carbohydrates\nDoesn't rank foods based on nutrient content — foods with a low GI ranking may be high in calories, sugar or saturated fat",
  "consultNow": "Yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Are late-night snacks a no-no for people who have diabetes?",
  "answer": "If you have diabetes, late-night snacks aren't necessarily off-limits — but it's important to make wise choices.\nLate-night snacks add extra calories, which can lead to weight gain. And if you snack after your evening meal — especially if the foods contain carbohydrates — you may wake up the next morning with a high blood sugar level.",
  "consultNow": "Yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since 5 yrs,What should I eat if I feel hungry in late nights?",
  "answer": "If you're hungry after dinner, choose a \"free\" food, such as:\nOne sugar-free frozen cream pop\nFive baby carrots\nOne cup of light popcorn\nA small handful of goldfish-style crackers\nA can of diet soda\nOr swap the snack for a piece of gum or small hard candy. These \"free\" foods have few, if any, carbohydrates and calories, so they won't contribute to weight gain or increased blood sugar.",
  "consultNow": "Yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and on medications im worried about hypoglycemia in sleep and I feel like eating snack before going to bed , is this fine??",
  "answer": "If you take insulin or other diabetes medications and feel that you must snack before bedtime to prevent low blood sugar (hypoglycemia) during the night, talk to your doctor. He or she may recommend adjusting the dose of your medications to prevent the need for a late-night snack.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What is reactive hypoglycemia??",
  "answer": "Reactive hypoglycemia (postprandial hypoglycemia) is low blood sugar that occurs after a meal — usually within four hours after eating. Low blood sugar (hypoglycemia) usually occurs while fasting.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How do I know that Im having reactive hypoglycemia??",
  "answer": "Signs and symptoms of reactive hypoglycemia may include hunger, weakness, shakiness, sleepiness, sweating, lightheadedness, anxiety and confusion.",
  "consultNow": "No"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How is reactive hypoglycemia diagnosed??",
  "answer": "Generally, a medical evaluation is done to determine whether symptoms are caused by low blood sugar — and whether symptoms resolve once blood sugar returns to normal. Further evaluation of reactive hypoglycemia depends on the severity of signs and symptoms.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im suffering with reactive hypoglycemia how is that treated??",
  "answer": "For the majority of people, reactive hypoglycemia usually doesn't require medical treatment. It may help to pay attention to the timing and composition of your meals:\nEat several small meals and snacks throughout the day, no more than three hours apart during the waking hours.\nEat a well-balanced diet, including lean and nonmeat sources of protein, and high-fiber foods, including whole grains, fruit and vegetables.\nAvoid or limit sugary foods, especially on an empty stomach.\nBe sure to eat food if you're consuming alcohol and avoid using sugary soft drinks as mixers.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im recenty diagnosed diabetic should I stop taking alchohol??",
  "answer": "Most people with diabetes can have a moderate amount of alcohol. Research has shown that there can be some health benefits such as reducing risk for heart disease. But, moderation is important. If you have any questions about whether alcohol is safe for you, check with your doctor",
  "consultNow": "No"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic what is the amount of alchohol that I can take??",
  "answer": "People with diabetes should follow the same guidelines as those without diabetes if they choose to drink:\nWomen should have no more than 1 drink per day.\nMen should have no more than 2 drinks per day.\n*One drink is equal to a 12 oz beer, 5 oz glass of wine or 1 ½ oz distilled spirits (vodka, whiskey, gin, etc.).",
  "consultNow": "No"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the effects of alchohol on diabetes??",
  "answer": "While moderate amounts of alcohol may cause blood sugar to rise, excess alcohol can actually decrease your blood sugar level -- sometimes causing it to drop into dangerous levels, especially for people with type 1 diabetes.\nBeer and sweet wine contain carbohydrates and may raise blood sugar.\nAlcohol stimulates your appetite, which can cause you to overeat and may affect your blood sugar control.\nAlcoholic drinks often have a lot of calories, making it more difficult to lose excess weight.\nAlcohol may also affect your judgment or willpower, causing you to make poor food choices.\nAlcohol can interfere with the positive effects of oral diabetes medicines or insulin.",
  "consultNow": "No"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "What happens if I drink excessively im a diabetic also??",
  "answer": "Drinking heavily without eating can block your liver from releasing stored glucose into your bloodstream, causing hypoglycemia.",
  "consultNow": "No"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im having excessive thirst and frequent uination is this diabetes my blood sugars are normal what can be my diagnosis??",
  "answer": "Diabetes insipidus (DI) is a condition characterized by excessive thirst and excretion of large amounts of severely dilute urine, with reduction of fluid intake having no effect on the concentration of the urine.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "How is diabetes insipidus diagnosed??",
  "answer": "To distinguish DI from other causes of excess urination, blood glucose levels, bicarbonate levels, and calcium levels need to be tested. Measurement of blood electrolytes can reveal a high sodium level (hypernatremia as dehydration develops). Urinalysis demonstrates a dilute urine with a low specific gravity. Urine osmolarity and electrolyte levels are typically low.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "My doctor told me im have diabetes insipidus what is the cause for DI??",
  "answer": "Diabetes insipidus occurs when your body can't regulate how it handles fluids. Normally, your kidneys remove excess body fluids from your bloodstream. This fluid waste is temporarily stored in your bladder as urine, before you urinate. When your fluid regulation system is working properly, your kidneys make less urine when your body water is decreased, such as through perspiration, to conserve fluid.\nThe volume and composition of your body fluids remain balanced through a combination of oral intake and excretion by the kidneys. The rate of fluid intake is largely governed by thirst, although your habits can increase your intake far above the amount necessary. The rate of fluid excreted by your kidneys is greatly influenced by the production of anti-diuretic hormone (ADH), also called vasopressin.",
  "consultNow": "No"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Are there any types of diabetes insipidus??",
  "answer": "The way in which your system is disrupted determines which form of diabetes insipidus you have.Types of DI are central diabetes insipidus, Nephrogenic diabetes insipidus, gestational diabetes insipidus, Primary polydypsia",
  "consultNow": "No"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the risk factors for diabetes insipdus",
  "answer": "Nephrogenic diabetes insipidus that's present at or shortly after birth usually has a genetic cause that permanently alters the kidneys' ability to concentrate the urine. Nephrogenic diabetes insipidus usually affects males, though women can pass the gene on to their children.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diagnosed diabetes insipidus what happen if it is untreated??",
  "answer": "Dehydration\nExcept for primary polydipsia, which causes you to retain too much water, diabetes insipidus can cause your body to retain too little water to function properly, and you can become dehydrated. \nElectrolyte imbalance\nDiabetes insipidus can also cause an electrolyte imbalance. Electrolytes are minerals in your blood — such as sodium and potassium — that maintain the balance of fluids in your body.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "My doctor suspets im suffering from diabetes insipidus what are the tests for diagnosing DI??",
  "answer": "Some of the tests doctors commonly use to diagnose and determine the type of diabetes insipidus and in some cases, its cause, include:\nWater deprivation test.\nUrinalysis\nMRI",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im suffering with diabetes insipidus what are the precautions that I must take??",
  "answer": "Prevent dehydration. As long as you take your medication and have access to water when the medication's effects wear off, you'll prevent serious problems. Plan ahead by carrying water with you wherever you go, and keep a supply of medication in your travel bag, at work or at school.\nWear a medical alert bracelet or carry a medical alert card in your wallet. If you have a medical emergency, a health care professional will recognize immediately your need for special treatment.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What's the connection between diabetes and depression? How can I cope if I have both?",
  "answer": "If you have diabetes — either type 1 or type 2 — you have an increased risk of developing depression. And if you're depressed, you may have a greater chance of developing type 2 diabetes. The good news is that diabetes and depression can be treated together. And effectively managing one can have a positive effect on the other.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years and im feeling low these days what are the symptoms of depression??",
  "answer": "If you have diabetes, watch for signs and symptoms of depression, such as loss of interest in normal activities, feelings of sadness or hopelessness, and unexplained physical problems like back pain or headaches.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How is depression related to diabetes??",
  "answer": "Though the relationship between diabetes and depression isn't fully understood:\nThe rigors of managing diabetes can be stressful and lead to symptoms of depression.\nDiabetes can cause complications and health problems that may worsen symptoms of depression.\nDepression can lead to poor lifestyle decisions, such as unhealthy eating, less exercise, smoking and weight gain — all of which are risk factors for diabetes.\nDepression affects your ability to perform tasks, communicate and think clearly. This can interfere with your ability to successfully manage diabetes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and also having depression how is that managed??",
  "answer": "Diabetes self–management programs. Diabetes programs that focus on behavior have been successful in helping people improve their metabolic control, increase fitness levels, and manage weight loss and other cardiovascular disease risk factors. They can also help improve your sense of well-being and quality of life.\nPsychotherapy. Similarly, participants in psychotherapy, particularly cognitive behavioral therapy, have reported improvements in depression, which has resulted in better diabetes management.\nMedications and lifestyle changes. Medications — for both diabetes and depression — and lifestyle changes, including different types of therapy coupled with regular exercise, can improve both conditions.\nCollaborative care. New research shows that treatment supervised by a nurse case manager that steps up therapy when needed helps improve both depression and diabetes. This type of care may not be available in most health care systems.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "If I have diabetes, is there anything special I need to do to take care of my liver?",
  "answer": "Diabetes raises your risk of nonalcoholic fatty liver disease, a condition in which excess fat builds up in your liver even if you drink little or no alcohol.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Iis there a relation between diabetes and fatty liver im a diabetic since many years??",
  "answer": "Fatty liver disease may have played a role in the development of your type 2 diabetes initially. Once you have both conditions, poorly managed type 2 diabetes can make fatty liver disease worse.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years and im worried about developing fatty liver what are the symptoms of fatty liver??",
  "answer": "Fatty liver disease itself often causes no symptoms. But it raises your risk of developing liver inflammation or scarring (cirrhosis). It's also linked to an increased risk of liver cancer and heart disease.Diabetes raises your risk of nonalcoholic fatty liver disease",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since 5 yrs what can I do to avoid fatty liver ??",
  "answer": "Your best defense against fatty liver disease includes these strategies:\nWork with your health care team to achieve good control of your blood sugar.\nLose weight if you need to, and try to maintain a healthy weight.\nTake steps to reduce high blood pressure.\nKeep your low-density lipoprotein (LDL, or \"bad\") cholesterol and triglycerides — a type of blood fat — within recommended limits.\nDon't drink too much alcohol.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How is fatty liver diagnosed in diabetics??",
  "answer": "If you have diabetes, your doctor may recommend an ultrasound examination of your liver when you're first diagnosed and regular follow-up blood tests to monitor your liver function.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since 3 yrs what are the infection that are more frequent for me??",
  "answer": "Diabetes increases susceptibility to various types of infections. The most common sites of infection in diabetic patients are the skin and urinary tract.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im recently diagnosed diabetic what ENT infections should I watch out for??",
  "answer": "Malignant otitis externa and rhinocerebral mucormycosis are 2 head-and-neck infections seen almost exclusively in patients with diabetes.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im recently diagnosed diabetic what Urinary tract infections should I watch out for??",
  "answer": "Patients with diabetes have an increased risk of asymptomatic bacteriuria and pyuria, cystitis, and, more important, serious upper urinary tract infection.[3, 4] Intrarenal bacterial infection should be considered in the differential diagnosis of any patient with diabetes who presents with flank or abdominal pain.\nPyelonephritis makes control of diabetes more difficult by causing insulin resistance;",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Why do diabetics have itchy skin?",
  "answer": "Localized itching is often caused by diabetes. It can be caused by a yeast infection, dry skin, or poor circulation. When poor circulationthe flow of blood through the body's blood vessels and heart.This is the cause of itching, the itchiest areas may be the lower parts of the legs.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Why do diabetics have skin problems?",
  "answer": "People with diabetes are prone to dry skin, particularly when bloodglucose levels run high. This causes the body to lose fluids and skin to become dry. Dry skin can crack and itch, which can lead to infections. You may also get dry skin with diabetes if you have neuropathy.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Can infection raise blood sugars in diabetics??",
  "answer": "Illness or stress can trigger high blood sugars because hormones produced to combat illness or stress can also cause your blood sugarto rise. People who do not have diabetes can make enough extra insulin to keep their blood sugar in a normal range during times of stress and illness.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Can diabetes cause kidney failure?",
  "answer": "Diabetes can damage this system. High levels of blood sugar make thekidneys filter too much blood. All this extra work is hard on the filters. After many years, they start to leak and useful protein is lost in the urine.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "My insulin therapy is working, and my blood sugar is well-controlled. Isn't this enough to prevent diabetic macular edema? Do I really need an eye exam every year?",
  "answer": "Keep up your blood sugar control! But don't skip your yearly eye exam.\nKeeping your blood sugar levels under control can help reduce the likelihood of diabetes-related eye complications. But good blood sugar control doesn't eliminate your risk of developing problems with your eyes and vision.Diabetic retinopathy and diabetic macular edema often have no symptoms in their early stages. Annual eye exams increase the chances that your doctor will detect these conditions as soon as possible and treat them when necessary. Early intervention can prevent vision loss for many people.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic since many years Can I have a situation where my blood sugas are low and I don’t know that??",
  "answer": "Over time, repeated episodes of hypoglycemia can lead to hypoglycemia unawareness. The body and brain no longer produce signs and symptoms that warn of a low blood sugar, such as shakiness or irregular heartbeats. When this happens, the risk of severe, life-threatening hypoglycemia is increased.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What happens if my hypoglycemia is not properly treated??",
  "answer": "If you have diabetes, episodes of low blood sugar are uncomfortable and can be frightening. Repeated episodes of hypoglycemia may cause you to take less insulin to ensure that your blood sugar level doesn't go too low. But long-term high blood sugar levels can be dangerous, too, possibly causing damage to your nerves, blood vessels and various organs.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How is hypoglycemia diagnosed??",
  "answer": "Your doctor will use three criteria — often referred to as Whipple's triad — to diagnose hypoglycemia. Whipple's triad includes the following factors:\n\nSigns and symptoms of hypoglycemia. You may not exhibit signs and symptoms of hypoglycemia during your initial visit with your doctor. In this case, your doctor may have you fast overnight (or for a longer period). This will allow hypoglycemic symptoms to occur so that he or she can make a diagnosis.\nDocumentation of low blood glucose when the signs and symptoms occur. Your doctor will draw a sample of your blood to be analyzed in the laboratory.\nDisappearance of the signs and symptoms. The third part of the diagnostic triad involves whether your signs and symptoms go away when blood glucose levels are raised.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "How is hypoglycemia treated??",
  "answer": "Treatment of hypoglycemia involves:\nImmediate initial treatment to raise your blood sugar level\nTreatment of the underlying condition that's causing your hypoglycemia to prevent it from recurring",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and Im frequently forgetting things these days is this because of diabetes??",
  "answer": "Type 2 diabetes may increase the risk of Alzheimer's disease. The poorer your blood sugar control, the greater the risk appears to be. The exact connection between these two conditions still remains unclear.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "What happens if blood sugars are uncontrolled and too high more than 500 mg/dl ??",
  "answer": "Signs and symptoms of this life-threatening condition include a blood sugar reading higher than 600 mg/dL (33.3 mmol/L), dry mouth, extreme thirst, fever greater than 101 F (38 C), drowsiness, confusion, vision loss, hallucinations and dark urine. Your blood sugar monitor may not be able to give you an exact reading at such high levels and may instead just read \"high.\"\nHHNS is caused by sky-high blood sugar that turns blood thick and syrupy. It tends to be more common in older people with type 2 diabetes, and it's often preceded by an illness or infection. HHNS usually develops over days or weeks.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and iim having lot of coffee daily Does coffee affect blood sugar?",
  "answer": "The impact of caffeine on insulin action may be associated with higher or lower blood sugar levels. For some people with diabetes, about 200 milligrams of caffeine — or the equivalent of one to two 8-ounce cups (237 to 474 milliliters) of plain, brewed coffee — may cause this effect.\nCaffeine affects every person differently. If you have diabetes or you're struggling to control your blood sugar levels, limiting the amount of caffeine in your diet may provide a benefit.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Does alcohol use increase the risk of diabetes?",
  "answer": "Yes, alcohol use increases the risk of type 2 diabetes.\nAlthough studies show that drinking moderate amounts of alcohol may actually lower the risk of diabetes, the opposite is true for people who drink greater amounts of alcohol.\nModerate alcohol use is one drink a day for women of all ages and men older than age 65, and up to two drinks a day for men age 65 and younger.\nToo much alcohol can cause chronic inflammation of the pancreas (pancreatitis), which can impair its ability to secrete insulin and ultimately lead to diabetes.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Dose tobacco increase risk of developing diabetes??",
  "answer": "Tobacco use can increase blood sugar levels and lead to insulin resistance. The more you smoke, the greater your risk of diabetes.\nHeavy smokers — those who smoke more than 20 cigarettes a day — almost double their risk of developing diabetes, when compared with nonsmokers.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "My friend who is diabetic had been hostipatlized for uncontrolled blood sugars and he was diagnosed diabetic coma what is that??",
  "answer": "A diabetic coma is a life-threatening diabetes complication that causes unconsciousness. If you have diabetes, dangerously high blood sugar (hyperglycemia) or dangerously low blood sugar (hypoglycemia) can lead to a diabetic coma.\nIf you lapse into a diabetic coma, you're alive — but you can't awaken or respond purposefully to sights, sounds or other types of stimulation. Left untreated, a diabetic coma can be fatal.",
  "consultNow": "Yes"
}, {
  "category": "Complications",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a diabetic since many years and I had diabetic ketoacidosis what are the triggers for DKA??",
  "answer": "possible triggers of diabetic ketoacidosis include:\nPhysical or emotional trauma\nHeart attack\nAlcohol or drug abuse, particularly cocaine\nCertain medications, such as corticosteroids and some diuretics",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic on isulin Will insulin make me gain weight?",
  "answer": "The reason we need insulin—as a hormone made in our bodies or as a medication—is to push glucose into cells for energy. Insulin’s job is to process calories. For this reason, it can—but doesn’t have to—cause weight gain. To prevent weight gain: Practice portion control. Burn extra calories with exercise. If your blood sugar has been high for a while prior to starting insulin, you’ve likely been excreting calories in your urine instead of fueling your body. This won’t happen once your blood sugar is under control. If you experience hypoglycemia (low blood sugar), treat it with just 15 grams of carb.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Why is weight loss so important? What’s the best way for a person with type 2 to lose weight?",
  "answer": "Weight loss is vital, particularly just after a diagnosis of type 2 or prediabetes. Weight loss increases insulin sensitivity, allowing cells to more effectively use the insulin the body continues to make. Losing just 10–20 pounds can accomplish a boatload of benefits. Among them are improved blood sugar, blood pressure, and cholesterol levels and possibly taking fewer medications or lower doses. To lose weight slowly and steadily, change your lifestyle. The pounds you keep off over time are the most important to living a long life",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Can your menstrual cycle and/or going through menopause affect glucose levels?",
  "answer": "yes! It’s common for women to have hormone fluctuations the week before their period, and those can affect glucose control. After ovulating, estrogen and progesterone rise. “Estrogen can make women more sensitive to insulin and cause hypoglycemia. Glucose levels often return to their usual patterns after the first few days of the menstrual cycle.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "What should I do to prevent menstrual cycle affecting blood sugars??",
  "answer": "Check your glucose levels and analyze your monthly fluctuations to know your patterns. Then devise a management plan for these days. Menopause also can affect blood sugar. “During perimenopause, estrogen and progesterone can fluctuate and lead to glucose swings,”. An early sign of perimenopause for women who take insulin is hypoglycemia due to dropping progesterone.",
  "consultNow": "Yes"
}, {
  "category": "information",
  "Name of doctor": "Dr.Solomon",
  "question": "Is it true that complications of diabetes can be delayed and even prevented?",
  "answer": "Yes! Research shows that the earlier your diabetes is diagnosed and the sooner you start to aggressively get your blood sugar, blood pressure, and cholesterol into target ranges, the healthier you can be over the years. To stay healthy and detect any complications early, make sure your health care provider orders all the tests and checks you need. Let your provider know if you have any signs or symptoms of a potential problem. Today, diabetes complications don’t need to happen.",
  "consultNow": "Yes"
}, {
  "category": "counselling",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and How can I get motivated to take care of myself?",
  "answer": "Taking care of diabetes and getting through your daily to-do list along with your other responsibilities is demanding. It’s easy to understand why motivation waxes and wanes",
  "consultNow": "Yes"
}, {
  "category": "counselling",
  "Name of doctor": "Dr.Solomon",
  "question": "My doctor diagnosed me as diabetic how do I accept diabetes??",
  "answer": "Accepting that you have diabetes is largely an act of cognition—a realignment of what you view as real and vital to your existence and how it can impact your life. Diabetes becomes an integral part of a person’s life. Accept that diabetes will, for the rest of your life, be there. And it’s a very treatable disease, which places few restrictions on you if you follow treatment recommendations.",
  "consultNow": "Yes"
}, {
  "category": "Diet",
  "Name of doctor": "Dr.Solomon",
  "question": "Im recently diagnosed diabetic and I have to travel a lot what is that I have to do to keep my diabetes in control??",
  "answer": "Preplanning and having healthy snacks at the ready are keys to helping you eat healthy on the road. fresh fruit, small containers or cans of fruit (no syrup), fat-free yogurt, part-skim cheese (sticks, slices, and cubes), sugar-free pudding cups, nuts (any type), whole wheat crackers or pretzels, peanut butter, baby carrots, and 100-calorie snack packs (buy them or create your own). Also, drink plenty of water and no-calorie drinks.",
  "consultNow": "Yes"
}, {
  "category": "Insulin",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the types of insulins availble for treating diabetes??",
  "answer": "Rapid-acting insulin analogues are taken just as you're sitting down to eat a meal, or just after you've finished eating a meal.\nShort-acting insulin is taken 30 minutes before you eat.\nIntermediate-acting insulin is taken once or twice a day, at breakfast or bedtime—or both.\nPre-mixed insulin is a combination of short-acting and intermediate-acting insulin. You take it 30 minutes before a meal, and it can last for up to 24 hours—depending on the combination you're taking.\nIf you take long-acting insulin, you might only need one injection daily.",
  "consultNow": "Yes"
}, {
  "category": "Insulin",
  "Name of doctor": "Dr.Solomon",
  "question": "Im diabetic and im taking insulin injection where should I take it??",
  "answer": "The most common injection site is the abdomen (or stomach). The back of the upper arms, the upper buttocks or hips, and the outer side of the thighs are also used. These sites are the best to inject into for two reasons:\nThey have a layer of fat just below the skin to absorb the insulin, but not many nerves - which means that injecting there will be more comfortable than injecting in other parts of your body. \n \nThey make it easier to inject into the subcutaneous tissue, where insulin injection is recommended.",
  "consultNow": "Yes"
}, {
  "category": "Insulin",
  "Name of doctor": "Dr.Solomon",
  "question": "Should I take insulin injections daily at same site??",
  "answer": "You can rotate to different areas of your abdomen, keeping injection sites about an inch apart. Or you can inject insulin into other parts of your body, including your thigh, arm, and buttocks.",
  "consultNow": "Yes"
}, {
  "category": "Insulin",
  "Name of doctor": "Dr.Solomon",
  "question": "What happen if I inject insulin at same site daily ???",
  "answer": "Injecting in the same place much of the time can cause hard lumps or extra fat deposits to develop. These lumps are not only unsightly; they can also change the way insulin is absorbed, making it more difficult to keep your blood glucose on target.",
  "consultNow": "Yes"
}, {
  "category": "Insulin",
  "Name of doctor": "Dr.Solomon",
  "question": "Will the action of insulin be same where ever I inject it??",
  "answer": "Insulin is absorbed at different speeds depending on where you inject, so it's best to consistently use the same part of the body for each of your daily injections. For example, do not inject your lunch bolus dose in the abdomen on Monday and in the thigh on Tuesday. If you have picked the thigh for your evening injection, then continue to use the thigh for all of your evening injections.",
  "consultNow": "Yes"
}, {
  "category": "Type1 diabetes",
  "Name of doctor": "Dr.Solomon",
  "question": "My doctor my son 9yr old is suffering from type 1 diabetes what is it??",
  "answer": "In type 1 diabetes, the body does not produce insulin. The body breaks down the sugars and starches you eat into a simple sugar called glucose, which it uses for energy. Insulin is a hormone that the body needs to get glucose from the bloodstream into the cells of the body. With the help of insulin therapy and other treatments, even young children can learn to manage their condition and live long,",
  "consultNow": "Yes"
}, {
  "category": "Type1 diabetes",
  "Name of doctor": "Dr.Solomon",
  "question": "Can type 1 diabetes be treated??",
  "answer": "Despite active research, type 1 diabetes has no cure. But it can be managed. With proper treatment, people with type 1 diabetes can expect to live longer, healthier lives than did people with type 1 diabetes in the past.",
  "consultNow": "Yes"
}, {
  "category": "Type1 diabetes",
  "Name of doctor": "Dr.Solomon",
  "question": "My son 10 yrs old is having having frequent urination and also bedwetting what could be the reason is this diabetes??",
  "answer": "Type 1 diabetes signs and symptoms can come on quickly and may include:\nIncreased thirst\nFrequent urination\nBedwetting in children who previously didn't wet the bed during the night\nExtreme hunger\nUnintended weight loss\nIrritability and other mood changes\nFatigue and weakness\nBlurred vision\nIn females, a vaginal yeast infection",
  "consultNow": "Yes"
}, {
  "category": "Type1 diabetes",
  "Name of doctor": "Dr.Solomon",
  "question": "My son 10 yr old is diagnosed type 1 diabetes what could be the reason??",
  "answer": "The exact cause of type 1 diabetes is unknown. In most people with type 1 diabetes, the body's own immune system — which normally fights harmful bacteria and viruses — mistakenly destroys the insulin-producing (islet) cells in the pancreas. Genetics may play a role in this process, and exposure to certain environmental factors, such as viruses, may trigger the disease.",
  "consultNow": "Yes"
}, {
  "category": "Type1 diabetes",
  "Name of doctor": "Dr.Solomon",
  "question": "What are the risk factors for developing type 1 diabetes??",
  "answer": "Some known risk factors for type 1 diabetes include:\nFamily history. Anyone with a parent or sibling with type 1 diabetes has a slightly increased risk of developing the condition.\nGenetics. The presence of certain genes indicates an increased risk of developing type 1 diabetes.\nGeography. The incidence of type 1 diabetes tends to increase as you travel away from the equator. People living in Finland and Sardinia have the highest incidence of type 1 diabetes — about two to three times higher than rates in the United States and 400 times the incidence among people living in Venezuela.\nAge. Although type 1 diabetes can appear at any age, it appears at two noticeable peaks. The first peak occurs in children between 4 and 7 years old, and the second is in children between 10 and 14 years old.",
  "consultNow": "Yes"
}, {
  "category": "Type1 diabetes",
  "Name of doctor": "Dr.Solomon",
  "question": "Are there any risk factors for type 1 diabetes that are avoidable??",
  "answer": "type 1 diabetes have been investigated, though none have been proved. Some other possible risk factors include:\nExposure to certain viruses, such as the Epstein-Barr virus, Coxsackie virus, mumps virus and cytomegalovirus\nEarly exposure to cow's milk\nLow vitamin D levels\nDrinking water that contains nitrates\nEarly (before 4 months) or late (after 7 months) introduction of cereal and gluten into a baby's diet\nHaving a mother who had preeclampsia during pregnancy\nBeing born with jaundice",
  "consultNow": "Yes"
}, {
  "category": "Type1 diabetes",
  "Name of doctor": "Dr.Solomon",
  "question": "Im type 1 daibetic what are the pregancy complications that I may face??",
  "answer": "High blood sugar levels can be dangerous for both the mother and the baby. The risk of miscarriage, stillbirth and birth defects are increased when diabetes isn't well-controlled. For the mother, diabetes increases the risk of diabetic ketoacidosis, diabetic eye problems (retinopathy), pregnancy-induced high blood pressure and preeclampsia.",
  "consultNow": "Yes"
}, {
  "category": "Type1 diabetes",
  "Name of doctor": "Dr.Solomon",
  "question": "Im a type 1 diabetic can I bear pregnancy?? What are the precautions that I haveto take??",
  "answer": "Because the risk of pregnancy complications is higher for women with type 1 diabetes, experts recommend that women have a preconception evaluation and that A1C readings should be less than 7 percent before you attempt to get pregnant. Some drugs, such as high blood pressure medications and cholesterol-lowering medications, may need to be stopped before pregnancy.\nThe risk of birth defects is increased for women with type 1 diabetes, particularly when diabetes is poorly controlled during the first six to eight weeks of pregnancy, so planning your pregnancy is key. Careful management of your diabetes during pregnancy can decrease your risk of complications.",
  "consultNow": "Yes"
}, {
  "category": "Type1 diabetes",
  "Name of doctor": "Dr.Solomon",
  "question": "Is there any surgery done to treat type 1 diabetes?",
  "answer": "An emerging treatment approach, not yet available, is closed-loop insulin delivery, also known as the artificial pancreas. It links a continuous glucose monitor to an insulin pump. The device automatically delivers the correct amount of insulin when the monitor indicates the need for it. There are a number of different versions of the artificial pancreas, and clinical trials have had encouraging results. More research needs to be done before a fully functional artificial pancreas can receive regulatory approval.\nThe first step toward an artificial pancreas was approved in 2013. Combining a continuous glucose monitor with an insulin pump, this system stops insulin delivery when blood sugar levels drop too low. Studies on the device found that it could prevent low blood sugar levels overnight without significantly increasing morning blood sugar levels.",
  "consultNow": "Yes"
}];

var qandasSolomon2 = [
{
    "category" : "Complications",
    "Name of doctor" : "Dr. Vignesh",
    "question" : "I am having bad breath. I consulted dentist and they asked me to meet my diabetologist. Why",
    "answer" : "Diabetes is associated with dental problems too. Uncontrolled diabetes can result in gum problems like bleeding gums, loosening or shaky tooth, bad breath etc",
    "consultNow" : "yes"
  },
{
    "category" : "Symptoms",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I am having frequent urination , Increased thirst and ive noted significant weight loss what could be reason",
    "answer" : "These may be symptoms of diabetes.please consult doctor and check your blood sugar levels and HbA1c",
    "consultNow" : "Yes"
  },
{
    "category" : "Genetical",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 35 yr old male with positive history of diabetes in family am I at a risk of developing diabetes",
    "answer" : "Yes Diabetes is a hereditary diesease. Please consult doctor and undergo blood glucose related tests and know about risk factors for developing diabetes and ways to reduce risk of developing diabetes",
    "consultNow" : "Yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 32 yr male and im experiencing decreased libido is this because of diabetes??",
    "answer" : "Diabetes is also one of the causes for decreased libido other reasons include hypothyroidism,Anemia,smoking,alchohol abuse. Please consult doctor for ruling out diabetes and treating decreased libido",
    "consultNow" : "Yes"
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Does eating sweets lead to diabetes?",
    "answer" : "Studies show that sweetened foods can up diabetes risk, but sugar alone isn’t necessarily enough to cause the disease on its own.The tendency to get diabetes is mostly inherited. That means it's linked to the genes people get from their parents.",
    "consultNow" : "No"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My friend was recently diagnosed with diabetes. He complains that his feet feel very hot from time to time. Is this related to diabetes?",
    "answer" : "A painfully hot or burning sensation in the feet, especially in middle-aged and older people, could be caused by small fiber neuropathy. Diabetes is the most common cause of this condition; symptoms typically start with burning feet and numb toes. Even though your friend was only recently diagnosed with diabetes, if it is the cause of the burning in his feet, then he has probably had impaired glucose tolerance for years now. Peripheral neuropathy and peripheral vascular disease, which can be caused by diabetes, are potential culprits,",
    "consultNow" : "Yes"
  },
{
    "category" : "Diabetes information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What should my blood sugar be when I wake up (fasting) and before meals? What about after?",
    "answer" : "For most people with diabetes fasting or before-meals blood glucose (or blood sugar) goal of 70–130 mg/dl. One to two hours after eating, a postprandial blood sugar reading at or under 180 mg/dl is recommended.",
    "consultNow" : "No"
  },
{
    "category" : "Diabetes information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Can I get rid of diabetes if I stop eating carbs and/or lose a lot of weight?",
    "answer" : "No, but you can control it. If you have prediabetes or were just diagnosed with diabetes, losing a lot of weight can put the condition into remission.",
    "consultNow" : "yes (Dietician)"
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Why is it OK to eat fruit when it’s full of carbohydrate? Are some fruits better to eat than others?",
    "answer" : "People with diabetes need to eat a certain amount of carbs every day for energy and essential nutrients. Healthy sources of carbs include fruits, as well as vegetables, whole grains, legumes (beans), and low-fat dairy foods.",
    "consultNow" : "yes (Dietician)"
  },
{
    "category" : "Diabetes information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Why do I have to test my blood – the doctor does a blood test when I see him?",
    "answer" : "Testing your own blood gives you feedback on what your blood sugars do at various times of day and how they react to your medications, exercise, food intake, etc. By testing your own blood you help doctor to make decisions to improve the glucose control and to decide if the medications are working properly.",
    "consultNow" : "No"
  },
{
    "category" : "Diabetes information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Once you start diabetes medication, can you ever come off of it and control diabetes with just diet and exercise?",
    "answer" : "Some people are able to stop taking some diabetes medications if the blood sugars can be controlled by weight loss and increased activity. That should only be done with the medical provider’s guidance.",
    "consultNow" : "Yes"
  },
{
    "category" : "Medication",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is there a way to take insulin without giving shots?",
    "answer" : "At present the only way to get insulin is to take it by injection (syringe or an insulin pump). Insulin is a protein and is digested in the body if taken by mouth. There are many scientists working to see if insulin can be taken in other ways than injection",
    "consultNow" : "No"
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is there a simple way to eat so I don’t have high blood sugars?",
    "answer" : "There is no simple solution to eating to avoid raising blood sugars. A dietitian who specializes in diabetes is the best person to work with, but there will be times when sugars are high no matter what you eat.",
    "consultNow" : "yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How often, how long, and what times of day should I exercise?",
    "answer" : "The best time is the time you will do it! 30-45 minutes of aerobic exercise, 5-7 days a week is a great goal. Some examples are swimming, walking, tennis, bike riding, and dancing. A minimum of 30-45 minutes, 3 days a week is recommended in those who have been given the OK by their physician. It is alright to break the exercise into 3 or 4 smaller 15-20 minute segments throughout the day. Remember to check your blood sugar then warm up, and cool down for 5-10 minutes. This will help you avoid sore or injured muscles.",
    "consultNow" : "yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr.Solomon",
    "question" : "If I am prone to diabetes due to family heredity, what kind of exercises I should be doing to prevent myself from being diabetic.",
    "answer" : "you can do any form of exercise running jogging cardio yoga ect main aim is to burn your calories this even helps in making you fit and healthy . Try not to eat high sugar or high calorie diet regularly. consult dietician or physiotherapist for further information",
    "consultNow" : "yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How can exercise make a difference in my diabetes, What is the importance of diet in diabetes,",
    "answer" : "excercise makes your cells active and your cells become more sensitive to insulin so it can work more efficiently. Diet helps in controlling your blood glucose level which is essential to preventing long-term complications",
    "consultNow" : "No"
  },
{
    "category" : "Medication",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I am a diabetic and on Oral medications .Do I need to take my medications even on days that I Feel fine?",
    "answer" : "Yes diabetes medications should be taken regulary withut missing if you don’t take medicines regularly your sugars cannot be controlled and that leads to many other complications",
    "consultNow" : "No"
  },
{
    "category" : "Diagnosis",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Iam worried that im suffering from diabetes what are tests to rule out diabetes??",
    "answer" : "Tests for diabetes are Fasting Blood sugars level , Post prandial blood sugar level and HBA1c ,Consult doctor so that he will assess your condition and suggest appropriaate tests to rule out diabetes",
    "consultNow" : "yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Iam 70 yrs old and I have high blood pressure and diabetes as well. Though both are under control but every time I need to put extra pressure What couls be reason.",
    "answer" : "This may be due to Enlarged Prostrate which is common problem in elderly pls consult doctor for futher suggestions",
    "consultNow" : "yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I have diabetes and hypertension what are the type of exercises that help me and in what frequency.",
    "answer" : "Walk, go to the gym, yoga is good. Ellipticals are fine. Muscle strengthening exercises. Swimming, and running. Not advisable to lift weights.",
    "consultNow" : "yes"
  },
{
    "category" : "Diet / Exercise",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Iam 24 yrs old and I am having no physical activity am I prone to diabetes??",
    "answer" : "Now a days, there is no age limit to get diabetes. Usually, it is assumed that the people in our country are affected from 25 years. Always we should keep our lifestyle good. The food we eat should be nutritious and the place where we eat should be hygienic. Always, we should be physically active and at least we have to do meditation for at least 15 to 20 minutes in a day to relax our body and mind.",
    "consultNow" : "yes"
  },
{
    "category" : "Diet / Exercise",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What is the minimum age to be affected by diabetes??",
    "answer" : "Now a days, there is no age limit to get diabetes. Usually, it is assumed that the people in our country are affected from 25 years. Always we should keep our lifestyle good. The food we eat should be nutritious and the place where we eat should be hygienic. Always, we should be physically active and at least we have to do meditation for at least 15 to 20 minutes in a day to relax our body and mind.",
    "consultNow" : "yes"
  },
{
    "category" : "Equipment",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My dad is a diabetic is ther any way to moniter sugar levels by himself instead of going to diagnostic center",
    "answer" : "Now a days glucometers are available to measure blood glucose levels by individual himself . You can use them to moniter daily blood sugars but have to consult doctor every 3-6 months for regular checkup",
    "consultNow" : "yes"
  },
{
    "category" : "complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are the other health problems that will arise because of diabetes??",
    "answer" : "Diabetes make a person susceptible to many diseases like cardiac problems, hypertension, kidney diseases, nervous system problems and eyes and more suseptible to UTI Ect\n your questions make a big list,mentioning all the complications is not possible because complication vary from person to person . please consult doctor for more clear understanding of complications of diabetes",
    "consultNow" : "yes"
  },
{
    "category" : "Medication",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im recently diagnosed diabetic my doctor prescribed me insulin should I start on insulin or can there be another way of controlling diabetes",
    "answer" : "Diabetes can be controlled with drugs diet and exercise first we should know your blood sugar levels and HBA1c levels and type of diabetes you are having to comment on what type of treatment plan best suites for you.",
    "consultNow" : "yes"
  },
{
    "category" : "Medication",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Iam diabetic and often I keep missing my medication and I dont have any problem with that .Can this be done???",
    "answer" : "No You should take medications for diabetes continuously. This helps in maintaining blood sugar levels and avoid further complications that arise from diabetes",
    "consultNow" : "yes"
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How often should I consult doctor for diabetes",
    "answer" : "You can go for regular checkup of diabetes once every 3 months and adjust your medications depending on blood sugars and HBA1c",
    "consultNow" : "yes"
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My father is diabetic his blood sugars are not getting controlled even after using all the medications prescribed by doctor regularly. What is solution",
    "answer" : "Diabetes can be controlled with drugs diet and exercise first we should know your blood sugar levels and HBA1c levels and type of diabetes. Please consult doctor for complete assessment and preparing treatment plan",
    "consultNow" : "yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 30 yrs female diabetic and pregnant now will my baby have diabetes",
    "answer" : "Diabetes in the mother does not get transmitted directly to the baby. However, being the child of a diabetic parent, your child will have a higher chance of developing diabetes later in life.In pregnancy, however, one needs to control the sugars very strictly, otherwise the baby can have many problems including congenital anomalies, hypoglycemia, metabolic problems and growth problems etc.",
    "consultNow" : "Yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im suffering from erectile dysfunction my doctor asked me to check for diabetes why ???",
    "answer" : "It happens with diabetes.It happens because of impairment of nerves,blood vessels,muscle function in diabetes.Maintain normal body weight.Follow diet and exercise along with proper medication.",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Can diabetes be permanently cured or one have to live with it for rest of his life by taking medicines and strict diet?",
    "answer" : "Diabetic changes occurs at the cellular level. Once diagnosed,Diabetes can only be managed and controlled but cannot be cured. With a healthy lifestyle/Food/exercise we can always prevent Diabetes.",
    "consultNow" : "No"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 50 yr old female and im having diabetes since 3 yrs should I see opthalmologist or other speciality doctors for any complication ??",
    "answer" : "As long as you don’t have any symptoms you don’t need to visit other doctors keep your sugars in control and go regular checkups",
    "consultNow" : "yes"
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My grandfather is suffering with diabetes what food is good for him. Give some suggestions.",
    "answer" : "For a person with diabetes a balanced diet is to be given, which should provide exact calories based on his ideal body weight (IBW), blood sugar levels and extent of physical activity. He should avoid sweets, direct sugar and jaggery, deep fried foods, junk foods and pastries. Also should refrain from alcohol and smoking. Please consult our dietician for customized diet plan",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What is the reason for diabetes? What are symptoms of diabetes effected person? What are precautions to be taken if it is in starting stage?",
    "answer" : "diabetes is a chronic metabolic disorder that prevents the body to utilise glucose completely or partially. Symptoms include increased thirst, increased urination, increased hunger, weight loss in type 1 diabetes and obesity in type 2 diabetes. Precautions to be taken include- proper and balanced diet, distribution of foods in a systematic way, avoiding foods which are high in glycemic index and exercise.",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How can I know if I have diabetes?",
    "answer" : "Your health care provider can perform blood and urine tests to see if you have diabetes. Normal blood sugar is between 70 mg/dl and 100 mg/dl. The standard diagnosis of diabetes is made when two blood tests show that your fasting blood sugar level (blood sugar before you have eaten anything) is 126 mg/dl or greater.",
    "consultNow" : "yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My father has diabetes. Does that raise my risk?",
    "answer" : "Yes. Having a family member with diabetes raises your risk of developing type 1 by about 5 percent and type 2 diabetes by more than 30 percent.",
    "consultNow" : "yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I'm skinny, so I can't get diabetes, right?",
    "answer" : "Being overweight is a major risk factor for type 2 diabetes, but 20 percent of people who get it are slim. \"The number of type 2 diabetics is growing, especially in thin Asian populations have higher concentrations of visceral fat, which may be a contributing factor",
    "consultNow" : "yes"
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic person I eat only veg food so can you help me with the veg diet",
    "answer" : "Please consult our dietician so that you will be given a customized veg diet plan",
    "consultNow" : "yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I am 34 years old, I have diabetic I am using the tablets for that, but my both legs is paining in the night when I lay down on the bed.",
    "answer" : "This may be because of uncontrolled sugars please consult doctor and get this diagnosed",
    "consultNow" : "yes"
  },
{
    "category" : "Uncontrolled sugars",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My mother is diabetic and sugars are above 200 mg/dl can she go for surgery",
    "answer" : "Sugars need to be controlled and normal before under going any kind of surgery Please concentrate on controlling sugars with diet and exercise along with proper medication",
    "consultNow" : "yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Does consuming soft drinks lead to diabetes?",
    "answer" : "Consuming large quantity of sof drinks may lead to diabetes but that is not the only reasonfor diabetes . Diabetes may be hereditary and there are somany other factors that lead to diabetes",
    "consultNow" : "No"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is drinking fruit juice as good for you as eating fruit?",
    "answer" : "Both juice and fruit is good but if you compare fruit is far better than juice because the pulp is also going in your stomach. Never drink preservative juice from super market, drink fresh juice and always eat fresh fruits. Try not to keep fruits in refrigerator",
    "consultNow" : "No"
  },
{
    "category" : "Diagnosis",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I went through diabetic screening test before one week and it was 6.1 according to Hb1ac and I tested at home with glucometer it was 106 before meal and 175 after meal.",
    "answer" : "the stage you are in right now is in borderline for developing diabetes Try avoiding oily foods and start exercising. Consult dietician for customised diet plan and exercise plans",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I want to know the difference between type 1 & type 2 diabetics? And a patient is taking insulin regularly, is there any chance to have type 2 diabetics?",
    "answer" : "Type 1 diabetes (formerly called juvenile-onset or insulin-dependent diabetes), accounts for 5 to 10 out of 100 people who have diabetes. In type 1 diabetes, the body's immune system destroys the cells that release insulin, eventually eliminating insulin production from the body. Without insulin, cells cannot absorb sugar (glucose), which they need to produce energy. Type 2 diabetes (formerly called adult-onset or non-insulin-dependent diabetes) can develop at any age. It most commonly becomes apparent during adulthood. But type 2 diabetes in children is rising. Type 2 diabetes accounts for the vast majority of people who have diabetes-90 to 95 out of 100 people. In type 2 diabetes, the body isn't able to use insulin the right way. This is called insulin resistance. As type 2 diabetes gets worse, the pancreas may make less and less insulin. This is called insulin deficiency",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I am 61 years diabetic since 2005, I was under medication, my sugar level was near normal, but I do not want allopathy medicine, by any other treatment my sugar level will be brought to normal.",
    "answer" : "Diabetes can be controlled without medicines ,But only for those patients who are at a very early stage of diabetes which means that they have very low sugar derangement which can be handled by exercise and diet alone. Only way to know that is by trying dietary compliance and good exercise regime. After these efforts if your sugar gets in control then you can sure that you can avoid medicines. But remember two things. Checking of sugars should be regular. One time control does not mean consistent control. Second, if your sugars are out of control then don't keep avoiding medicines because your body is facing the bad effects of diabetes already.",
    "consultNow" : ""
  },
{
    "category" : "Diagnosis",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My mother has diabetes and now I am in fear that if at all I can cause with diabetes. My age is 22male and my weight is 72 and my stomach size is 38.",
    "answer" : "As of now you are not Diabetic but Yes, chances are you may also get diabetes. Please exercise daily and eat very healthy food to avoid it",
    "consultNow" : ""
  },
{
    "category" : "Diagnosis",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My blood sugars are in slightly on higher side and I had no symptoms for diabetes my doctor asked to go for HBA1c test why??",
    "answer" : "The A1C test is a blood test that provides information about a person's average levels of blood glucose, also called blood sugar, over the past 3 months. The A1C test is sometimes called the hemoglobin A1c, HbA1c, or glycosylated hemoglobin test.",
    "consultNow" : ""
  },
{
    "category" : "Information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 25 yr female, Pregnant I heard that pregnancy lead to diabetes. Does pregnancy lead to diabetes??",
    "answer" : "Gestational diabetes is thought to arise because the many changes,( hormonal and otherwise), that occur in the body during pregnancy that may lead to insulin resistance in some women that is generally not seen after pregnancy",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 36 yr male and im diabetic and my blood sugars are not in control even after regular medications I feel a lot of stress and tension in my job is this the reason for uncontrolled sugars??",
    "answer" : "Yes In general, stress raises blood sugar levels. It is generally temporary. When people are under prolonged stress, they may be less likely to follow through on all the tasks involved in healthy diabetes management .Please consult doctor for suggesting ways to control your sugars",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Did I do something to cause this diabetes?",
    "answer" : "People cannot cause their own diabetes. No one knows for sure what makes some people get diabetes and others not, but a person cannot cause diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Medication",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 45 yr female diabetic and started taking insulin recently since then Im gaining weight is this because of diabetes??",
    "answer" : "Insulin should not make you gain weight, but when blood sugars are high, sugar (calories) is lost in the urine. As blood sugars come down closer to normal, those calories are no longer lost and can produce a small weight gain. Most people who consume the right amount of calories for their body’s needs, do not gain weight.",
    "consultNow" : "Yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 48 yr male and diabetic my doctor asked me to start any exercise how does that help me?",
    "answer" : "In general, the overall affect is that it lowers blood sugar. There can be an initial rise in blood sugar immediately after intense exercise, followed by a prolonged blood sugar lowering affect.",
    "consultNow" : "No"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is there any standard for duration of exercise and type of exercise for diabetics???",
    "answer" : "The best time is the time you will do it! 30-45 minutes of aerobic exercise, 5-7 days a week is a great goal. Some examples are swimming, walking, tennis, bike riding, and dancing. A minimum of 30-45 minutes, 3 days a week is recommended in those who have been given the OK by their physician. It is alright to break the exercise into 3 or 4 smaller 15-20 minute segments throughout the day. Remember to check your blood sugar then warm up, and cool down for 5-10 minutes. This will help you avoid sore or injured muscles",
    "consultNow" : "Yes"
  },
{
    "category" : "Equipment",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and I had been prescribed insulin I want to know about insulin or pens that I can use??",
    "answer" : "An insulin pen is used to inject insulin for the treatment of diabetes. It is composed of an insulin cartridge (integrated or bought separately) and a dial to measure the dose, and is used with disposable pen needles to deliver the dose.",
    "consultNow" : ""
  },
{
    "category" : "Equipment",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and I had been advised for insulin is ther any way that I can avoid pricking me mutiple times for insulin injection?",
    "answer" : "An insulin pump is an alternative to multiple daily injections of insulin by insulin syringes or an insulin pen and allows forintensive insulin therapy when used in conjunction with blood glucose monitoring and carb counting .Please consult for more information",
    "consultNow" : ""
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im Diabetic and can I have alchohol ???",
    "answer" : "Yes, adults with diabetes can drink alcohol and should follow the same guidelines as the general public—an average of up to one drink per day for women and up to two drinks per day for men, with no more than three or four drinks in any single day for women and men, respectively. moderate alcohol consumption has minimal short- or long-term effects on glucose levels in people with type 1 or 2 diabetes",
    "consultNow" : ""
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 28 yrs female and im recently diagnosed diabetic will my blood sugars vary when im having menstruation(Periods)??",
    "answer" : "yes! It’s common for women to have hormone fluctuations the week before their period, and those can affect glucose control. After ovulating, estrogen and progesterone rise. “Estrogen can make women more sensitive to insulin and cause hypoglycemia. Progesterone can do the converse,Glucose levels often return to their usual patterns after the first few days of the menstrual",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Me and my wife both are diabeticc and on insuin can we share our syringes (Lancets) for giving insulin ??",
    "answer" : "No that should not be done .Blood-testing devices, including lancets syringes, should never be used by more than one person to prevent any chance of infection",
    "consultNow" : ""
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic should I always carry glucose tablets wth me???",
    "answer" : "Your risk for hypoglycemia depends on the category of blood glucose-lowering medication(s) you take, not your type of diabetes. Some medications can cause hypoglycemia, including insulin but Most of the commonly used blood glucose-lowering medications for type 2 diabetes don’t cause hypoglycemia . But it is always advisible to carry glucose tablets",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is it true that complications of diabetes can be delayed and even prevented",
    "answer" : "Yes! the earlier your diabetes is diagnosed and the sooner you start to aggressively get your blood sugar, blood pressure, and cholesterol into target ranges, the healthier you can be over the years. Please consult doctor for complete treatment plan to keep sugars in control",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and I frequently miss medications How can I get motivated to take care of myself",
    "answer" : "Taking care of diabetes and getting through your daily to-do list along with your other responsibilities is demanding Please consult our doctor for complete treatment plan and please download our app so that we will remind you and try to motivate you daily",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 26 yr pregnant when should I get my sugars checked??",
    "answer" : "all women who are not already diagnosed with diabetes be screened for gestational diabetes after the 24th week of pregnancy.Most women are screened for gestational diabetes between the 24th and 28th weeks of pregnancy.",
    "consultNow" : ""
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 25 yr female, Pregnant will I still be diabetic even after delivery of baby??",
    "answer" : "Even though your gestational diabetes will probably go away after your baby is born, you are at risk for gestational diabetes again and for type 2 diabetes later in life.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and my sugars are in control.Should I take any precautions when I fall sick",
    "answer" : "When you are sick, your body reacts by releasing hormones to fight infection. But these hormones raise blood sugar levels and at the same time make it more difficult for insulin to lower blood sugar. When you have diabetes, even a minor illness can lead to dangerously high blood sugar. This may cause life-threatening complications, such as diabetic ketoacidosis or a hyperosmolar state.",
    "consultNow" : "Yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and using birth control pills will these have any affect??",
    "answer" : "Birth control pills may raise your BG levels. Using them for longer than a year or 2 may also increase your risk of complications. For instance, if you develop high blood pressure while on the pill, you increase the chance that eye or kidney disease will worsen",
    "consultNow" : ""
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im pregnant and I what are the normal blood sugar levels that I should have",
    "answer" : "Fasting 60-90 mg/dL (whole blood) 69-104 mg/dL (plasma)\nBefore meals 60-105 mg/dL (whole blood) 69-121 mg/dL\n1 hour after meals 100-120 mg/dL (whole blood) 115-138 mg/dL\n2 a.m. - 6 a.m. 60-120 mg/dL (whole blood) 69-138 mg/dL",
    "consultNow" : ""
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is their a time frame that women with diabetes should follow for check-ups such as gynecological exams",
    "answer" : "Check-ups should be performed on a regular, consistent basis to ensure that the diabetes is not negatively affecting the reproductive organs. Your Doctor will determine how often you should visit with him/her depending on your overall health.",
    "consultNow" : ""
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 26 yr female can I breast feed my baby??",
    "answer" : "Breast milk provides the best nutrition for babies and breastfeeding is recommended for all mothers with either preexisting diabetes or gestational diabetes.",
    "consultNow" : ""
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I had diabetes before I was pregnant. Now that I am pregnant, how often should I monitor my BG levels",
    "answer" : "It is recommend that a woman with pre-existing diabetes (both type 1 & type 2) who becomes pregnant monitor her BG levels up to 8 times daily. In terms of your day-to-day routine, you should probably monitor: before each meal, 1 or 2 hours after each meal, at bedtime, occasionally at 2-3 a.m",
    "consultNow" : ""
  },
{
    "category" : "Consultation",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I had gestational diabetes. How soon after having the baby should I get my blood glucose rechecked",
    "answer" : "About 6-8 weeks after delivery. Like 90% of the women with gestational diabetes, your BG levels will probably return to normal right after your baby is born. However, you still run the risk of developing type 2 diabetes. In fact, prior studies have shown women who have had gestational diabetes are at risk (of up to 60%) for developing diabetes in the next 10 to 20 years.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 24 yr female diabetic what are the sex related problems that ill have?",
    "answer" : "Lack of interest in sex (libido), pain or discomfort during intercourse, and decreased production of vaginal lubrication to name a few",
    "consultNow" : "Yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I've read that belly fat is a diabetes risk factor. Should I worry about my muffin top",
    "answer" : "Yes. Excess fat around your midsection is linked to a higher risk of type 2 diabetes. (Type 1 diabetes has nothing to do with obesity). In particular, the visceral fat wrapped around your internal organs can pose a problem, and it increases insulin resistance (the problem in type 2 diabetes) more so than fat in other parts of your body.",
    "consultNow" : ""
  },
{
    "category" : "Treatment",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im already on insulin for diabetes why should I regularly check blood glucose levels",
    "answer" : "Self-monitored values are important so you can adjust your medications. If you take multiple daily injections, you should be testing at least four times a day and sometimes seven to eight times",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic andi take insulin before Breakfast what if I skip taking food after taking insulin",
    "answer" : "When you take insulin, or sulfonylureas like glipizide, you are at risk of hypoglycemia (Low blood sugar). Low blood sugar is dangerous you may feel giddy and even loose consiousness",
    "consultNow" : ""
  },
{
    "category" : "Treatment",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are the types of insulin treatments available to diabetes patients?",
    "answer" : "There’s long-acting basal insulin, which lasts 24 hours. Then there’s rapid-acting, which you inject every time you eat. Some are pre-mixed, which means you get a combination of intermediate and rapid. Type 2s typically start with long-acting insulin in addition to oral meds, and then they progress to injections of short-acting with the largest meals, and if that’s not enough then short-acting with every meal.",
    "consultNow" : "Yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im Diabetic can I be hypoglycemic ?? What are the effects of hypoglycemia??",
    "answer" : "Hypoglycemia, low blood sugar, is a short-term danger because it can be potentially lethal, causing loss of consciousness. It can lead to stroke or heart attack, cause less sensitivity to subsequent hypoglycemic episodes, and increase your risk of death in the future.",
    "consultNow" : "No"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Are artificial sweeteners bad for diabetics? How often can we really take them?",
    "answer" : "This is a controversial question. I believe artificial sweeteners are better than eating calories from sugar. They don’t cause diabetes. That said, usually we limit patients to two to three artificially sweetened drinks per day. Use of artificial sweeteners is associated with weight gain—and excess consumption can cause problems.",
    "consultNow" : "No"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since 5 yrs andI’m concerned about loss of eyesight. What are the preventive measures, and what are the early symptoms?",
    "answer" : "The best preventive measure is lowering your blood sugars. Every point drop in A1C means a 15 to 20 percent drop in retinopathy. Unfortunately, there aren’t really any early symptoms of retinopathy. If you wait for symptoms, it may be too late. You can only prevent diabetic retinopathy; you can’t reverse it. Annual exams are key. Timely laser treatment can prevent retinopathy from getting worse.",
    "consultNow" : "Yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I have Diabetic neuropathy. What are the most effective ways of treating the pain?",
    "answer" : "Controlling your blood sugar is the most important way to control nerve pain. Continued high blood sugar is toxic to your nerves. Effective blood sugar control can help stop the pain of neuropathy and even reverse the damage in some cases.",
    "consultNow" : "Yes"
  },
{
    "category" : "information",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and I consume alcholol does that interact with diabetes medications",
    "answer" : "Alchohol can cause glucose levels to raise or fall depending on amount of alcholol you consume. Combination of blood sugar lowering effect of alcholol and diabetic medication can cause hypoglycemia",
    "consultNow" : ""
  },
{
    "category" : "Equipment",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im Diabetic on medication how can I know that my sugars are less than normal??",
    "answer" : "Shakiness, Nervousness or anxiety, Sweating, chills and clamminess,Irritability or impatience,Confusion, includingdelirium,Rapid/fast heartbeat,Lightheadedness or dizziness,Hunger and nausea are symptoms of hypoglycemia (low blood sugars)",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is my eye sight affected due to diabetes Im a diabetic since 10 yrs??",
    "answer" : "Diabetic retinopathy is a complication of diabetes and a leading cause of blindness. It occurs when diabetes damages the tiny blood vessels inside the retina, the light-sensitive tissue at the back of the eye.",
    "consultNow" : "No"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Are my both eyes are affected in diabetes retinopathy??",
    "answer" : "If you have diabetic retinopathy, at first you may notice no changes to your vision. But over time, diabetic retinopathy can get worse and cause vision loss. Diabetic retinopathy usually affects both eyes.",
    "consultNow" : "Yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and on insulin since 6 yrs am I at a risk of developing blindness??",
    "answer" : "All people with diabetes -- both type 1 and type 2 -- are at risk for diabetic retinopathy. People with diabetes are also at increased risk for cataract and glaucoma. That's why everyone with diabetes should get a comprehensive dilated eye exam at least once a year.",
    "consultNow" : "Yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How does diabetes lead to loss of vision ?",
    "answer" : "Blood vessels damaged from diabetic retinopathy can cause vision loss in two ways.\nFragile, abnormal blood vessels can develop and leak blood into the center of the eye, blurring vision. This is proliferative retinopathy and is the fourth and most advanced stage of the disease.\nFluid can leak into the center of the macula, the part of the eye where sharp, straight-ahead vision occurs. The fluid makes the macula swell, blurring vision. This condition is called macular edema.",
    "consultNow" : "No"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since 10 yrs how do I know my eyes are being affected by that??",
    "answer" : "Diabetic retinopathy often has no early warning signs. Don't wait for symptoms. Be sure to have a comprehensive dilated eye exam at least once a year.",
    "consultNow" : "Yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Are there any stages in diabetic retinopathy??",
    "answer" : "mild nonproliferative retinopathy\nmoderate nonproliferative retinopathy\nsevere nonproliferative retinopathy\nproliferative retinopathy",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years and I see disturbance in my vision what is the reason??",
    "answer" : "This may be due to Diabetic Retinopathy,At first, you will see a few specks of blood, or spots, \"floating\" in your vision. If spots occur, see your eye care professional as soon as possible.Sometimes, the spots clear without treatment, and you will see better. However, bleeding can reoccur and cause severely blurred vision",
    "consultNow" : "Yes"
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years and I wanted my vision to be tested what are the tests that I can undergo??",
    "answer" : "Diabetic retinopathy and macular edema are detected during a comprehensive eye exam that includes a visual acuity test, dilated eye exam, and tonometry.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years and I have blurred vision ocassionally my doctor advised me for fluorescein angiogram what is that??",
    "answer" : "In this test, a special dye is injected into your arm. Pictures are taken as the dye passes through the blood vessels in your retina. The test allows your eye care professional to identify any leaking blood vessels and recommend treatment.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My eyes are affected due to diabetes how is that treated??",
    "answer" : "During the first three stages of diabetic retinopathy, no treatment is needed, unless you have macular edema. To prevent progression of diabetic retinopathy, people with diabetes should control their levels of blood sugar, blood pressure, and blood cholesterol.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic from many years and now im having diabetic retinopathy last stage how is that treated??",
    "answer" : "Proliferative retinopathy (4th stage in diabetic retinopathy) is treated with laser surgery. This procedure is called scatter laser treatment. Scatter laser treatment helps to shrink the abnormal blood vessels.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How is macular edema treated ???",
    "answer" : "prompt treatment of macular edema with anti-VEGF drugs, with or without laser treatment, resulted in better vision than laser treatment alone or steroid injections. When injected into the eye, these drugs reduce fluid leakage and interfere with the growth of new blood vessels in the retina.\nIn some cases, focal laser treatment is used along with the eye injections. Your doctor places up to several hundred small laser burns in the areas of the retina around the macula that are leaking.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im suffering with diabetic retinopathy my doctor advised me for laser treatment How is that done??",
    "answer" : "Both focal and scatter laser treatment are performed in your doctor's office or eye clinic. Before the surgery, your doctor will dilate your pupil and apply drops to numb the eye. The area behind your eye also may be numbed to prevent discomfort.The lights in the office will be dim. As you sit facing the laser machine, your doctor will hold a special lens to your eye. During the procedure, you may see flashes of light. These flashes eventually may create a stinging sensation that can be uncomfortable.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What can I do about some vision that had already occurred to me because of diabetic retinopathy??",
    "answer" : "If you have lost some sight from diabetic retinopathy, ask your eye care professional about low vision services and devices that may help you make the most of your remaining vision. You can consult a specialist in low vision.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic since many years how can I protect my vision??",
    "answer" : "It is recommended everyone with diabetes to have a comprehensive dilated eye exam at least once a year. If you have diabetic retinopathy, you may need an eye exam more often. People with proliferative retinopathy can reduce their risk of blindness by 95 percent with timely treatment and appropriate follow-up care.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Does controlling blood sugar slow the onset of diabetic retinopathy?",
    "answer" : "A major study has shown that better control of blood sugar levels slows the onset and progression of retinopathy. The people with diabetes who kept their blood sugar levels as close to normal as possible also had much less kidney and nerve disease. Better control also reduces the need for sight-saving laser surgery.This tight control of blood sugar control may not be best for everyone, including some elderly patients, children under age 13, or people with heart disease. Be sure to ask your doctor if such a control program is right for you.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic and im worried that I will lose my vision because of diabetes can you give me some suggestions to prevent this happening??",
    "answer" : "If you have diabetes, get a comprehensive dilated eye exam at least once a year.\nProliferative retinopathy can develop without symptoms. If it gets to this advanced stage, you are at high risk for vision loss or even blindness.\nMacular edema can develop without symptoms at any of the four stages of diabetic retinopathy.\nYou can develop both proliferative retinopathy and macular edema and still see fine. However, you are at high risk for vision loss.\nYour eye care professional can tell if you have macular edema or any stage of diabetic retinopathy. Whether or not you have symptoms, early detection and timely treatment can prevent vision loss.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Are there some researches being done for preventing diabetic retinopathy ??",
    "answer" : "The National Eye Institute, or NEI, is conducting and supporting research that seeks better ways to detect, treat, and prevent vision loss in people with diabetes. This research is conducted through studies in the laboratory and with patients.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im already on insulin for diabetes why should I regularly check blood glucose levels",
    "answer" : "monitoring once or twice a day is OK, not so much for adjusting medication and glucose levels but to get feedback about what you’re eating. Test before breakfast and before dinner.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My blood sugars are higher than normal but my doctor says im not diabetic yet and did not prescribe any medicines why???",
    "answer" : "Prediabetes means your blood glucose levels are higher than normal but not high enough for a diagnosis of diabetes.People with prediabetes are at an increased risk for developing type 2 diabetes and for heart disease and stroke. The good news is that if you have prediabetes, you can reduce your risk of getting type 2 diabetes. With modest weight loss and moderate physical activity, you can delay or prevent type 2 diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My father is diabetic am I at a risk of getting diabetes what are risk factors for diabetes",
    "answer" : "Risk factors for diabetes are\nbeing over 45 years of age\nbeing overweight or obese\nhaving a first-degree relative -- a parent, brother, or sister -- with diabetes\nbeing African American, American Indian or Alaska Native, Asian American or Pacific Islander, or Hispanic American/Latino. (Watch the video to learn more about native Americans and diabetes risk. To enlarge the video, click the brackets in the lower right-hand corner. To reduce the video, press the Escape (Esc) button on your keyboard.)\nhaving gestational diabetes, or giving birth to at least one baby weighing more than 9 pounds\nhaving blood pressure of 140/90 or higher, or having been told that you have high blood pressure.\nhaving abnormal cholesterol levels -- an HDL cholesterol level of 35 or lower, or a triglyceride level of 250 or higher\nbeing inactive or exercising fewer than three times a week.\nhaving polycystic ovary syndrome, also called PCOS (women only)\non previous testing, having prediabetes (an A1C level of 5.7 to 6.4 percent), impaired glucose tolerance (IGT) or impaired fasting glucose (IFG)\nhistory of cardiovascular disease (disease affecting the heart and blood vessels).",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "If I Have Diabetes, am I at Risk for Dental Problems?",
    "answer" : "If your blood glucose levels are poorly controlled, you are more likely to develop serious gum disease and lose more teeth than non-diabetics. Like all infections, serious gum disease may be a factor in causing blood sugar to rise and may make diabetes harder to control.Other oral problems associated to diabetes include: thrush, an infection caused by fungus that grows in the mouth, and dry mouth which can cause soreness, ulcers, infections and cavities.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How Can I Help Prevent Dental Problems Associated with Diabetes?",
    "answer" : "First and foremost, control your blood glucose level. Then, take good care of your teeth and gums, along with regular checkups every six months. To control thrush, a fungal infection, maintain good diabetic control, avoid smoking and, if you wear them, remove and clean dentures daily. Good blood glucose control can also help prevent or relieve dry mouth caused by diabetes",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What Can I Expect at My Checkup? Should I Tell My Dental Professional About My Diabetes?",
    "answer" : "People with diabetes have special needs and your dentist and hygienist are equipped to meet those needs—with your help. Keep your dentist and hygienist informed of any changes in your condition and any medication you might be taking. Postpone any non-emergency dental procedures if your blood sugar is not in good control.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im Diabetic and I want to know why ill get dental problems with that??",
    "answer" : "Glucose is present in your saliva—the fluid in your mouth that makes it wet. When diabetes is not controlled, high glucose levels in your saliva help harmful bacteria grow. These bacteria combine with food to form a soft, sticky film called plaque. Plaque also comes from eating foods that contain sugars or starches. Some types of plaque cause tooth decay or cavities. Other types of plaque cause gum disease and bad breath.\nGum disease can be more severe and take longer to heal if you have diabetes. In turn, having gum disease can make your blood glucose hard to control.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I have plaques in my mouth and im diabetic how does that progress??",
    "answer" : "Plaque that is not removed hardens over time into tartar and collects above your gum line. Tartar makes it more difficult to brush and clean between your teeth. Your gums become red and swollen, and bleed easily—signs of unhealthy or inflamed gums, called gingivitis.When gingivitis is not treated, it can advance to gum disease called periodontitis consult doctor for treatment",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How will I know if I am having mouth problems from diabetes?",
    "answer" : "Check your mouth for signs of problems from diabetes. If you notice any problems, see your dentist right away. Some of the first signs of gum disease are swollen, tender, or bleeding gums. Sometimes you won’t have any signs of gum disease. You may not know you have it until you have serious damage. Your best defense is to see your dentist twice a year for a cleaning and checkup.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Do people with diabetes lose their teeth more often and sooner than people without diabetes",
    "answer" : "Many factors play a role in the loss of teeth in people with diabetes. First, people with uncontrolled diabetes are more prone to the development of gingivitis and periodontal disease. If the infection persists, it can spread to the underlying bone that anchors the teeth. Complicating this situation is the fact that infections don’t resolve as quickly in people with diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years how do I maintain oral hygine??",
    "answer" : "Have your teeth and gums cleaned and checked by your dentist twice a year.\nPrevent plaque buildup on teeth by using dental floss at least once a day.\nBrush your teeth after every meal. Use a soft-bristled toothbrush.\nIf you wear dentures, remove them and clean them daily.\nIf you smoke, talk to your doctor about ways to quit.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years why do I need to keep my gums healthy??",
    "answer" : "Since people with diabetes are more prone to conditions that might harm their oral health, it’s vital to follow good oral hygiene practices, pay special attention to any changes in your oral health, and to call your dentist immediately if such changes occur.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 25yr female and diabetic what are the types of contraceptives that I can use??",
    "answer" : "There is no single contraceptive which is ideal for all women with diabetes. Each method has some disadvantages and some advantages. You and your healthcare provider should discuss the most appropriate method for you.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic since many years what are the eye problems that I may face???",
    "answer" : "The three major eye problems that people with diabetes need to be aware of are cataracts, glaucoma, and retinopathy.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diagnosed diabetic retinopathy and how I take care of myself??",
    "answer" : "Schedule regular eye exams to make sure you get treatment when you need it. Tell your doctor if you have any change in your vision. As long as you have diabetes, there is a chance you will develop retinopathy. However, careful control of your blood sugar levels will help delay and possibly prevent vision loss. Carolina Eye is a multi-subspecialty eye center provi",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is Diabetic retinopathy is due to some medicines that im taking???",
    "answer" : "To date, no drugs have been associated with the onset of diabetic retinopathy.However, certain drugs promote dilation of blood vessels and can accelerate the progression of diabetic retinopathy. Doctors know which drugs to avoid and, when necessary, will recommend more appropriate treatments.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is diabetic retinopathy painful will I feel any pain in eyes if I have diabetic retinopathy??",
    "answer" : "No, diabetic retinopathy is not painful. The eye examinations required and the treatments available are not painful either.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Are ther any aids that I can use if im suffering with diabetic retinopathy??",
    "answer" : "There are numerous vision aids (magnifiers, closed circuit televisions, etc.) that facilitate daily activities for people with advanced Diabetic retinopathy.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im having diabetic retinopathy should I follow any diet restrictions???",
    "answer" : "A very well-balanced diet and certain food guidelines are recommended for people with diabetic retinopathy. Sugars and fats, which increase blood sugar levels, must be avoided.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diagnosed diabetic retinopathy can I smoke??",
    "answer" : "It’s always a good idea to quit smoking. Smokers are at greater\nrisk of cardiovascular disease, high blood pressure in particular—\na risk factor in diabetic retinopathy.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 24 yr female pregnant how do I know whether I have diabetes or not??",
    "answer" : "Gestational diabetes is usually diagnosed between the 24th and 28th week of pregnancy (when insulin resistance usually begins). If you have had gestational diabetes before, or if your doctor is concerned about your risk of developing gestational diabetes, the test may be performed before the 13th week of pregnancy.\nTo screen for gestational diabetes, you will take a test called the oral glucose tolerance test.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im preganant I want to know risk factors for diabetes at pregnancy??",
    "answer" : "These factors increase your risk of developing diabetes during pregnancy:\nBeing overweight before becoming pregnant (if you are 20% or more over your ideal body weight)\nFamily history of diabetes (if your parents or siblings have diabetes)\nBeing over age 25\nPreviously giving birth to a baby that weighed more than 9 pounds\nPreviously giving birth to a stillborn baby\nHaving gestational diabetes with an earlier pregnancy\nBeing diagnosed with pre-diabetes\nHaving polycystic ovary syndrome\nKeep in mind that half of women who develop gestational diabetes have no known risk factors.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How do I monitor my blood sugar if I have gestational diabetes",
    "answer" : "Testing your blood sugar at certain times of the day will help determine if your exercise and eating patterns are keeping your blood sugar levels in control, or if you need extra insulin to protect your developing baby. Your doctor will tell you when and how often to test your blood sugar.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Do I need to take insulin if I have gestational diabetes",
    "answer" : "Based on your blood glucose monitoring results, your doctor will tell you if you need to take insulin injections during pregnancy.As your pregnancy progresses, the placenta will make more pregnancy hormones, and larger doses of insulin may be needed to control your blood sugar. Your doctor will adjust your insulin dosage based on your blood glucose log.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diagnosed to have gestational diabetes what are the complications that I may face??",
    "answer" : "Gestational diabetes may increase your risk of developing high blood pressure during pregnancy.Labor and delivery are generally not affected by gestational diabetes. However, if the baby has grown too large, or if your blood pressure is high, a cesarean delivery may be necessary.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Should I exercise if I have gestational diabetes",
    "answer" : "Every pregnant woman should check with her doctor before beginning an exercise program. Your doctor can give you personal exercise guidelines, based on your medical history. Thirty minutes of exercise every day, or most days, will help manage gestational diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic from 5 yrs How do I know my kidneys are not affected with diabetes?",
    "answer" : "By testing the urine. Diabetic nephropathy should be detected as early as possible. One of the first findings is the presence of very small amounts of protein in the urine. Therefore a urine albumin creatinine ratio (ACR) is an excellent test to determine who has early disease and who will respond to therapy. Please consult doctor for further suggestions",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Will my kidney function be affected due to diabetes??",
    "answer" : "Diabetic nephropathy is a progessive deterioraton in kidney function that is associated with diabetes. In type 1 diabetes, it is primarily associated with the diabetic pathology per se, while in type 2 it is also related to the associated comorbidities of hypertension and cardiovascular disease.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since 5 yrs and im having diabetic nephropathy how are my kidneys effected with diabetes",
    "answer" : "With diabetes, the small blood vessels in the body are injured. When the blood vessels in the kidneys are injured, your kidneys cannot clean your blood properly. Your body will retain more water and salt than it should, which can result in weight gain and ankle swelling. You may have protein in your urine. Also, waste materials will build up in your blood.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic will I compulsorily end up with Kidney failure??",
    "answer" : "Not everyone with diabetes develops kidney disease. Factors that can influence kidney disease development include genetics, blood sugar control, and blood pressure.The better a person keeps diabetes and blood pressure under control, the lower the chance of getting kidney disease.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic from 5 yrs what are the symptoms of kidney failure",
    "answer" : "The earliest sign of diabetic kidney disease is an increased excretion of albumin in the urine. This is present long before the usual tests done in your doctor's office show evidence of kidney disease, so it is important for you to have this test on a yearly basis. Weight gain and ankle swelling may occur. You will use the bathroom more at night. Your blood pressure may get too high.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are late signs of kidney failure??",
    "answer" : "As your kidneys fail, your blood urea nitrogen (BUN) levels will rise as well as the level of creatinine in your blood. You may also experience nausea, vomiting, a loss of appetite, weakness, increasing fatigue, itching, muscle cramps (especially in your legs) and anemia (a low blood count).",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 64 yrs old and im having diabetic nephropathy how can I keep my kidney functioning as long as possible??",
    "answer" : "The kidney doctor, called a nephrologist, will plan your treatment with you, your family and your dietitian. Two things to keep in mind for keeping your kidneys healthy are controlling high blood pressure in conjunction with an ACE inhibitor and following your renal diabetic diet. Restricting protein in your diet also might be helpful. You and your dietitian can plan your diet together",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years and my doctor said im suffering with end stage kidney disease what is that??",
    "answer" : "End stage renal failure, or kidney failure, occurs when your kidneys are no longer able to support you in a reasonably healthy state, and dialysis or transplantation is needed. This happens when your kidneys function at only 10 to 15 percent.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diagnosed diabetic nephropathy how can I be treated?",
    "answer" : "Lowering blood pressure and maintaining blood sugar control are absolutely necessary to slow the progression of diabetic nephropathy. Some medicines called angiotensin converting enzyme (ACE) inhibitors can help slow down the progression of kidney damage.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Can diabetic people can have kidney transplantation?",
    "answer" : "Yes. Once you get a new kidney, you may need a higher dose of insulin. Your appetite will improve so your new kidney will break down insulin better than your injured one. You will use steroids to keep your body from rejecting your new kidney. If your new kidney fails, dialysis treatment can be started while you wait for another kidney.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im suffering with diabetic nephropathy, How can I be treated if my kidneys are completely failed???",
    "answer" : "Three types of treatment can be used once your kidneys have failed: kidney transplantation, hemodialysis and peritoneal dialysis. To learn more about treatment options for kidney failure",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years how can I prevent kidney diseases from diabetes??",
    "answer" : "Diabetic kidney disease can be prevented by keeping blood sugar in your target range. Research has shown that tight blood sugar control reduces the risk of microalbuminuria by one third. In people who already had microalbuminuria, the risk of progressing to macroalbuminuria was cut in half. Other studies have suggested that tight control can reverse microalbuminuria.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I had protein in my urine but now the test is negative.\nHow can this happen?",
    "answer" : "Kidney disease is not the only reason for protein to appear in the urine. If you have a urinary tract infection (UTI) this can lead to protein being passed out in the urine. People with poorly controlled diabetes can be more prone to urinary tract infections because glucose in the urine provides a breeding ground for bacteria. This might need treatment with antibiotics.In some cases, if the infection persists, it can cause damage to the kidneys, so it is very important for people with diabetes to visit their doctor if they develop a urinary tract infection.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 58 yr old diabetic How can my doctor check for kidney failure???",
    "answer" : "As part of your annual health care review you should have a blood and urine test. Your urine will be checked for tiny particles of protein, called 'microalbumin'. These appear during the first stages of kidney disease, as the kidneys become 'leaky' and lose protein. At this stage, kidney disease can often be treated successfully, so this test is very important. The blood test will measure urea, creatine, and estimated glomerular function (eGFR) showing how well the kidneys are working.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and developed kidney disease will this ever go away???",
    "answer" : "If you have microalbuminuria, this may clear away, especially with treatment.If you have proteinuria (described above), over time the disease tends to get worse and progress to end-stage kidney failure. However, the length of time this takes can vary and it may take years. If your kidneys do begin to fail you should be referred to a kidney specialist. Once the kidney function goes below a certain level then you will need kidney dialysis or a kidney transplant.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im Diabetic since many years will I have kidney stones??",
    "answer" : "If you have type 2 diabetes, you may have very acidic urine. That increases your risk for developing kidney stones.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Do both type1 and type 2 diabetes lead to kidney diseases??",
    "answer" : "Yes. Type I diabetes which is the type that people generally get at younger age, can cause kidney disease in about one-third of the affected people. We now know that Type II diabetics also have a similar rate of developing kidney disease. However, Type II diabetes is far more common, which makes it the leading cause of kidney failure.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diagnosed gestational diabetes what will happen to my baby after delivery ??",
    "answer" : "Your baby’s blood sugar level will be tested immediately after birth. If the blood sugar is low, your baby will be given sugar water to drink, or by an intravenous tube in the vein.If you had gestational diabetes, there is an increased risk that your newborn will develop jaundice.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is my stomach and digestion is also affected by diabetes ??",
    "answer" : "Gastroparesis is a disorder affecting people with both type 1 and type 2 diabetes in which the stomach takes too long to empty its contents (delayed gastric emptying).",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic and my doctor told that im having gastroparesis what is that??",
    "answer" : "Gastroparesis, also called delayed gastric emptying, is a disorder that slows or stops the movement of food from the stomach to the small intestine. Normally, the muscles of the stomach, which are controlled by the vagus nerve, contract to break up food and move it through the gastrointestinal (GI) tract. Gastroparesis can occur when the vagus nerve is damaged by illness or injury and the stomach muscles stop working normally Diabetes is the most common known cause of gastroparesis.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and I feel full after eating very small amount of food why is this??",
    "answer" : "The most common symptoms of gastroparesis are nausea, a feeling of fullness after eating only a small amount of food, and vomiting undigested food—sometimes several hours after a meal.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic and my doctor told that im having gastroparesis what are the symptoms of gastroparesis??",
    "answer" : "The most common symptoms of gastroparesis are nausea, a feeling of fullness after eating only a small amount of food, and vomiting undigested food—sometimes several hours after a meal. Other symptoms of gastroparesis include\n\ngastroesophageal reflux (GER), also called acid reflux or acid regurgitation—a condition in which stomach contents flow back up into the esophagus, the organ that connects the mouth to the stomach\npain in the stomach area\nabdominal bloating\nlack of appetite\nSymptoms may be aggravated by eating greasy or rich foods, large quantities of foods with fiber",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years and ive been diagnosed to have gastroparesis what are thecomplication for that??",
    "answer" : "The problems of gastroparesis can include\n\nsevere dehydration due to persistent vomiting\ngastroesophageal reflux disease (GERD), which is GER that occurs more than twice a week for a few weeks; GERD can lead to esophagitis— irritation of the esophagus\nbezoars, which can cause nausea, vomiting, obstruction, or interfere with absorption of some medications in pill form\ndifficulty managing blood glucose levels in people with diabetes\nmalnutrition due to poor absorption of nutrients or a low calorie intake\ndecreased quality of life, including work absences due to severe symptoms",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How is gastroparesis treated if a person has diabetes?",
    "answer" : "An elevated blood glucose level directly interferes with normal stomach emptying, so good blood glucose control in people with diabetes is important. However, gastroparesis can make blood glucose control difficult. When food that has been delayed in the stomach finally enters the small intestine and is absorbed, blood glucose levels rise. Gastric emptying is unpredictable with gastroparesis, causing a person’s blood glucose levels to be erratic and difficult to control.\nThe primary treatment goals for gastroparesis related to diabetes are to improve gastric emptying and regain control of blood glucose levels. In addition to the dietary changes and treatments already described, a health care provider will likely adjust the person’s insulin regimen",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 28 yr male diabetic and im having hair loss is this because of diabetes??",
    "answer" : "If high blood sugar is causing circulation problems, the capillaries that supply blood to the hair follicles may die, leading to hair loss. Hyperglycemia can also disrupt the endocrine system, leading to androgen abnormalities that can cause the hair follicles to go dormant and lead to widespread hair loss.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 25 yrs male and diabetic now-a-days im felling tired and exhausted is this because of diabetes??",
    "answer" : "Yes, especially if your blood sugar levels are not under control, hyperglycemia usually makes you feel tired and without energy. When you experience high sugar levels your cells are not getting the energy they need to do their job. The lack of insulin to help cells get the energy (sugar) cause cells to “starve”, thus making you feel tired.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im having diabetes since 4yr and im 34 yrs old will diabetes effect my sex health??",
    "answer" : "Both men and women with diabetes can develop sexual problems because of damage to nerves and small blood vessels. Damage to autonomic nerves can hinder normal function. Reduced blood flow resulting from damage to blood vessels can also contribute to sexual dysfunction.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a 28 yr male and in having diabetes what are the sexual problems that I may face ??",
    "answer" : "Erectile dysfunction is a consistent inability to have an erection firm enough for sexual intercourse. The condition includes the total inability to have an erection and the inability to sustain an erection.\nRetrograde ejaculation is a condition in which part or all of a man's semen goes into the bladder instead of out the tip of the penis during ejaculation. Retrograde ejaculation occurs when internal muscles, called sphincters, do not function normally",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a 28 yr female and in having diabetes what are the sexual problems that I may face ??",
    "answer" : "Sexual problems may include\n1)decreased vaginal lubrication, resulting in vaginal dryness\n2)uncomfortable or painful sexual intercourse\n3)decreased or no desire for sexual activity\n4)decreased or absent sexual response",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 24 yr male and im diabetic how can I prevent sexual problems that may arise because of diabetes??",
    "answer" : "People with diabetes can lower their risk of sexual and urologic problems by keeping their blood glucose, blood pressure, and cholesterol levels close to the target numbers their health care provider recommends. Being physically active and maintaining a healthy weight can also help prevent the long-term complications of diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 26 yr female and diabetic what are reasons for sexual problems that I may face due to diabetes",
    "answer" : "Causes may include:\nNerve damage\nLess blood flow to the genital and vaginal areas\nHormonal changes\nSide effects of medications\nAlcohol abuse\nSmoking\nPsychological issues like anxiety, depression, stress\nInfections\nConditions related to pregnancy or menopause\nOther diseases",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How are sexual related issues due to diabetes are treated in women???",
    "answer" : "Prescription or over-the-counter vaginal lubricants may be useful for women experiencing vaginal dryness. Techniques to treat decreased sexual response include changes in position and stimulation during sexual relations. Psychological counseling may be helpful. Kegel exercises that help strengthen the pelvic muscles may improve sexual response.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Does diabetes affect fertility??",
    "answer" : "Poor blood sugar control is related to higher miscarriage rates during the first three months of pregnancy. Also, some women with type 2 diabetes may be overweight and/or have polycystic ovary syndrome, which may make getting pregnant harder.\nAgain, though, these are the types of issues that women with diabetes should talk about with their healthcare providers so that treatments can be explored.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years and my doctor said Im prone to diabetic neuropathy what is that??",
    "answer" : "Diabetic neuropathy is a type of nerve damage that can occur if you have diabetes. High blood sugar can injure nerve fibers throughout your body, but diabetic neuropathy most often damages nerves in your legs and feet.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic and my sugars are not under control how do I know that I have nerve related issues due to diabetes??",
    "answer" : "Depending on the affected nerves, symptoms of diabetic neuropathy can range from pain and numbness in your extremities to problems with your digestive system, urinary tract, blood vessels and heart. For some people, these symptoms are mild; for others, diabetic neuropathy can be painful, disabling and even fatal.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diagnosed with diabetic neuropathy, what are the types of diabetic neuropathy??",
    "answer" : "There are four main types of diabetic neuropathy. You may have just one type or symptoms of several types. Most develop gradually, and you may not notice problems until considerable damage has occurred.\nPeripheral neuropathy\nAutonomic neuropathy\nRadiculoplexus neuropathy (diabetic amyotrophy)\nMononeuropathy",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and my had diagnosed me that ive developed Peripheral neuropathy what is that??",
    "answer" : "Peripheral neuropathy is the most common form of diabetic neuropathy. Your feet and legs are often affected first, followed by your hands and arms. Signs and symptoms of peripheral neuropathy are often worse at night, and may include:\nNumbness or reduced ability to feel pain or temperature changes\nA tingling or burning sensation\nSharp pains or cramps\nIncreased sensitivity to touch — for some people, even the weight of a bed sheet can be agonizing\nMuscle weakness\nLoss of reflexes, especially in the ankle\nLoss of balance and coordination\nSerious foot problems, such as ulcers, infections, deformities, and bone and joint pain",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and my had diagnosed me that ive developed Autonomic neuropathy what is that??",
    "answer" : "The autonomic nervous system controls your heart, bladder, lungs, stomach, intestines, sex organs and eyes. Diabetes can affect the nerves in any of these areas, possibly causing:\nA lack of awareness that blood sugar levels are low (hypoglycemia unawareness)\nBladder problems, including urinary tract infections or urinary retention or incontinence\nConstipation, uncontrolled diarrhea or a combination of the two\nSlow stomach emptying (gastroparesis), leading to nausea, vomiting, bloating and loss of appetite\nDifficulty swallowing\nErectile dysfunction in men\nVaginal dryness and other sexual difficulties in women\nIncreased or decreased sweating\nInability of your body to adjust blood pressure and heart rate, leading to sharp drops in blood pressure after sitting or standing that may cause you to faint or feel lightheaded\nProblems regulating your body temperature\nChanges in the way your eyes adjust from light to dark\nIncreased heart rate when you're at rest",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and my had diagnosed me that ive developed Radiculoplexus neuropathy(diabetic amyotrophy) what is that??",
    "answer" : "Radiculoplexus neuropathy affects nerves in the thighs, hips, buttocks or legs. Also called diabetic amyotrophy, femoral neuropathy or proximal neuropathy, this condition is more common in people with type 2 diabetes and older adults.\nSymptoms are usually on one side of the body, though in some cases symptoms may spread to the other side. Most people improve at least partially over time, though symptoms may worsen before they get better. This condition is often marked by:\nSudden, severe pain in your hip and thigh or buttock\nEventual weak and atrophied thigh muscles\nDifficulty rising from a sitting position\nAbdominal swelling, if the abdomen is affected\nWeight loss",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and my had diagnosed me that ive developed Mononeuropathy what is that??",
    "answer" : "Mononeuropathy involves damage to a specific nerve. The nerve may be in the face, torso or leg. Mononeuropathy, also called focal neuropathy, often comes on suddenly. It's most common in older adults.\nAlthough mononeuropathy can cause severe pain, it usually doesn't cause any long-term problems. Symptoms usually diminish and disappear on their own over a few weeks or months. Signs and symptoms depend on which nerve is involved and may include:\nDifficulty focusing your eyes, double vision or aching behind one eye\nParalysis on one side of your face (Bell's palsy)\nPain in your shin or foot\nPain in your lower back or pelvis\nPain in the front of your thigh\nPain in your chest or abdomen",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diagnosed with diabetic neuropathy recently what are the other risk factors that lead to diabetic neuropathy??",
    "answer" : "These factors make you more susceptible to nerve damage:\nPoor blood sugar control. This is the greatest risk factor for every complication of diabetes, including nerve damage. Keeping blood sugar consistently within your target range is the best way to protect the health of your nerves and blood vessels.\nLength of time you have diabetes. Your risk of diabetic neuropathy increases the longer you have diabetes, especially if your blood sugar isn't well-controlled.\nKidney disease. Diabetes can cause damage to the kidneys, which may increase the toxins in the blood and contribute to nerve damage.\nBeing overweight. Having a body mass index greater than 24 may increase your risk of developing diabetic neuropathy.\nSmoking. Smoking narrows and hardens your arteries, reducing blood flow to your legs and feet. This makes it more difficult for wounds to heal and damages the integrity of the peripheral nerves.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diagnosed diabetic neuropathy what are the complication that I may face??",
    "answer" : "Diabetic neuropathy can cause a number of serious complications, including Loss of Limb , Charcot joints, Urinary tract infections and Urinary incontinence, Hypoglycemic unawareness , low blood pressure , Digestive problems, sexual dysfunction, Increased or decreased sweating",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic since many years what are tests I have to undergo to rule out diabetic neuropathy??",
    "answer" : "Diabetic neuropathy is usually presumptively diagnosed clinically by the patient's symptoms, medical history, and physical exam. However, there are other tests that can definitively diagnose the condition by actually measuring the loss of nerve function. Nerve conduction studies measure the speed of nerve signals in the arms and legs, while electromyography measures the electrical discharges produced in muscles. Other tests of nervous system function may be done on some patients. About 45% to 50% of all patients with diabetes are eventually diagnosed with some form of neuropathy",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How are nerves damaged if im having diabetes??",
    "answer" : "Diabetes damages blood vessels throughout the body. Some of these blood vessels are responsible for bringing oxygen to the nerves and nerve coverings of the peripheral nerves. Damaged nerves do not function effectively to relay messages to the brain and other areas of the body. The damaged nerves may send signals at the wrong time, send inappropriate or incorrect signals, send signals too slowly, or fail to transmit signals at all. This pattern of inappropriate signaling by the peripheral nerves causes the symptoms of peripheral neuropathy like weakness, numbness, and loss of balance. Sensations such as heat, cold, and pain may not be felt, and abnormal sensations such as burning or tingling may be experienced.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Are there any ways to avoid Diabetic nephropathy that I can do in my home",
    "answer" : "There are a number of self- and home care measures that you can take to relieve the symptoms of diabetic neuropathy. Examples are:\nUsing a device known as a bed cradle to keep bedcovers off of sensitive feet and lower legs\nUsing heat or cold patches, but since diabetic neuropathy can damage sensory nerves, care should be taken to avoid burns or freezing\nEating small, frequent meals and avoiding fatty foods may help those with digestive symptoms\nStanding up slowly or wearing elastic compression stockings can improve orthostatic hypotension\nExercises, stretching, or massage may help relieve pain",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years can I prevent developing diabetic neuropathy ??",
    "answer" : "Keeping diabetes under control is the best way to prevent or stop the progression of diabetic neuropathy. Your doctor can advise you about the best target range for your blood glucose levels, and keeping tight control of blood sugar within this range can help prevent neuropathy and other complications of diabetes. Avoiding smoking, getting exercise, and eating a healthy diet are other measures that can help people with diabetes have the best long-term outcomes.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diagnosed diabetic neuropathy how is that treated??",
    "answer" : "While diabetic neuropathy cannot be cured, there are treatments available to help manage some of the symptoms. Another treatment goal is keeping blood glucose levels under good control through a combination of diet and medication so that the neuropathy does not worsen. Keeping blood glucose levels under control has been shown to improve symptoms and prevent worsening of the pain.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are the best ways to take care of my feet if im diabetic???",
    "answer" : "some tips for foot care for people with diabetes or diabetic peripheral neuropathy:\n1. Regularly examine your feet for sores or injuries.\n2. Wear comfortable footwear that do not rub or cause blisters.\n3. Use warm water — not hot water — for washing. \n4. Never go barefoot.\n5. Protect your feet from temperature extremes.\n6. Moisturize the feet, but do not apply moisturizer between the toes. \n7. Cut your toenails once per week.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What is the serious consequences of diabetic neuropathy if untreated??",
    "answer" : "Amputation is a serious consequence of untreated neuropathy. if an injury to the feet occurs, it may not be felt or noticed. Lack of care for this injury can lead to a serious infection that will not heal, resulting in amputation of the foot in the most severe cases.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Why is diabetes troublesome for the feet?",
    "answer" : "Diabetes can be troublesome for the feet because it can cause numbness in the feet, and can deprive the feet of nutrients and oxygen, which increases the risk for infections and ulcers from injuries.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are the tests that are done for diabetic neuropathy??",
    "answer" : "Filament test. Sensitivity to touch may be tested using a soft nylon fiber called a monofilament.\nNerve conduction studies. This test measures how quickly the nerves in your arms and legs conduct electrical signals. It's often used to diagnose carpal tunnel syndrome.\nElectromyography (EMG). Often performed along with nerve conduction studies, electromyography measures the electrical discharges produced in your muscles.\nQuantitative sensory testing. This noninvasive test is used to assess how your nerves respond to vibration and changes in temperature.\nAutonomic testing. If you have symptoms of autonomic neuropathy, your doctor may request special tests to look at your blood pressure in different positions and assess your ability to sweat.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What is stroke? Im a diabetic since may years am I at risk for stroke ??",
    "answer" : "The risk of stroke is two and one-half times higher in people with diabetes. A stroke is damage to part of the brain tissue as a result of a loss of blood and oxygen. Brain tissue needs a constant supply of oxygen and nutrients to keep nerve cells and other parts of the tissue alive and functioning.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How can diabetes affect my feet?",
    "answer" : "Diabetes can cause two problems that can affect your feet:\nDiabetic neuropathy — Uncontrolled diabetes can damage your nerves. If you have damaged nerves in your legs and feet, you might not feel heat, cold or pain. This lack of feeling is called diabetic neuropathy. If you do not feel a cut or sore on your foot because of neuropathy, the cut could get worse and become infected.\nPeripheral vascular disease — Diabetes also affects the flow of blood. Without good blood flow, it takes longer for a sore or cut to heal. Poor blood flow in the arms and legs is called peripheral vascular disease. (The word \"peripheral\" means \"located away from a central point,\" and the word \"vascular\" refers to the blood vessels. Peripheral vascular disease is a circulation disorder that affects blood vessels away from the heart.)",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are some common foot problems of people with diabetes?",
    "answer" : "Athletes foot , fungal infection of nails, calluses,corns, blisters, dry skin, foot ulcers, ingrowing toe nails,hammertoes, plantar warts.For people with diabetes, these common foot problems can possibly lead to infection and serious complications, such as amputation.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How can diabetes affect my skin?",
    "answer" : "If your blood glucose is high, your body loses fluid, causing your skin to become dry. This occurs because the body is turning the water into urine to remove excess glucose from the blood. Your skin also can get dry if the nerves, especially those in your legs and feet, do not get the message to sweat (because of diabetic neuropathy). Sweating helps keep your skin soft and moist.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are the symptoms skin problems that may arise due to diabetes??",
    "answer" : "Dry skin can become red and sore, and can crack and peel. Germs can enter through the cracks in your skin and cause an infection. In addition, dry skin usually is itchy, and scratching can lead to breaks in the skin and infection.\nSkin problems are common in people with diabetes. Blood glucose provides an excellent breeding ground for bacteria and fungi, and can reduce the body’s ability to heal itself. These factors put people with diabetes at greater risk for skin problems.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are the common skin problems that may arise due to diabetes??",
    "answer" : "people with diabetes are more prone to getting these conditions, which can lead to serious complications. such as diabetic dermopathy, necrobiosis lipoidica diabeticorum and eruptive xanthomatosis occur only in people with diabetes.people with diabetes also can develop skin conditions that affect people who do not have diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years and is there any way to prevent skin problems that may arise due to diabetes??",
    "answer" : "Keeping your diabetes under control is the most important factor in preventing the skin-related complications of diabetes. Follow your health care provider’s advice regarding nutrition, exercise, and medication. Keep your blood glucose level within the range recommended by your health care provider. Proper skin care also can help reduce your risk of skin-related problems.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic since many years and I wanted to know when to contact doctor for skin problems??",
    "answer" : "Changes in skin color\nChanges in skin temperature\nSwelling in the foot or ankle\nPain in the legs\nOpen sores on the feet that are slow to heal or are draining\nIngrown toenails or toenails infected with fungus\nCorns or calluses\nDry cracks in the skin, especially around the heel\nUnusual and/or persistent foot odor",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How should I manage my diabetes medicines while I am pregnant?",
    "answer" : "If you take insulin to control your diabetes, your health care provider can tell you how to adjust your medicine. Generally, your body will require more insulin during pregnancy, especially during the last three months of pregnancy.\nIf you take oral medicines to control your diabetes, your health care provider might switch your medicine to insulin during pregnancy, since certain oral medicines could harm the developing baby.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and How should I plan meals while I am pregnant?",
    "answer" : "During pregnancy, you and your health care provider should work together to adjust your meal plan. Changing your meal plan will help you avoid problems with low and high blood glucose levels. Your meal plan will also be adjusted to include more calories for your growing baby. Your health care provider may suggest that you see a dietician to help with meal planning and obtaining better blood glucose control.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How can I help prevent dental problems associated with diabetes?",
    "answer" : "First and foremost, control your blood glucose level. Then take good care of your teeth and gums, along with regular dental check-ups every six months. - See more at: http://www.diabetes.org/living-with-diabetes/treatment-and-care/oral-health-and-hygiene/oral-health-faqs.html#sthash.9nqef0s9.dpuf",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since 5 yrs, What's the first stage of gum disease",
    "answer" : "The first stage of gum disease is gingivitis and if ignored, can develop into the more severe form of gum disease, known as periodontitis. When this happens, you may need gum surgery to save your teeth. - See more at: http://www.diabetes.org/living-with-diabetes/treatment-and-care/oral-health-and-hygiene/oral-health-faqs.html#sthash.9nqef0s9.dpuf",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since 5 yrs,What are the signs of gingivitis and/or serious gum disease",
    "answer" : "Some of the possible signs of gingivitis and/or serious gum disease include: Bleeding and red, swollen, or tender gums Gums that have pulled away from the teeth. Pus between the teeth and gums (when you press on the gums) Bad breath Permanent teeth that are loose or moving away from each other Changes in the way your teeth fit when you bite Changes in the fit of partial dentures or bridges",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How do I know if I have serious gum disease??",
    "answer" : "Often there are no signs of serious gum disease. You may not know you have it until you have some serious damage. Regular dental visits are your best weapon. - See more at: http://www.diabetes.org/living-with-diabetes/treatment-and-care/oral-health-and-hygiene/oral-health-faqs.html#sthash.9nqef0s9.dpuf",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic and my sugars are not in control can having stress is the reason for uncontrolled diabetes??",
    "answer" : "Stress can make it more difficult to control your diabetes as it may throw off your daily routine and can result in wear and tear on your body. Hormones from stress increase your blood pressure, raise your heart rate, and can cause blood sugar to rise. High blood sugar can make you feel down or tired. Low blood sugar may result in your feeling upset or nervous.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I am a 57 years old male suffering from diabetic 2 since june 2014. I am taking glyciphage 500 SR 1 tab b/f and 1/2 tab at 6pm. Hba1c was 7.70% . What should I do.",
    "answer" : "Hba1c is the test that improves after treatment. If it is not improved, it means you need to adjust dose or add another drug, and you should follow diabetic diet and physical exercise is also necessary. Multi drug therapy is a common feature of diabetes. See your doctor every three months,",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "I am 52 years old and I have uncontrolled diabetes and I feel restless in nights and do not get sleep until and unless I take sleeping tablets .How can this be treated??",
    "answer" : "Diabetes also leads to disturbed sleep .your sugars had to be controlled and have some physical exercise so that you will have good sleep at night consult doctor for treatment",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "My friend is diabetic and he is hospitalized or diabetic ketoacidosis what is that??",
    "answer" : "Diabetic ketoacidosis (DKA) is a serious condition that can lead to diabetic coma (passing out for a long time) or even death.\nWhen your cells don't get the glucose they need for energy, your body begins to burn fat for energy, which produces ketones. Ketones are chemicals that the body creates when it breaks down fat to use for energy. The body does this when it doesn’t have enough insulin to use glucose, the body’s normal source of energy. When ketones build up in the blood, they make it more acidic. They are a warning sign that your diabetes is out of control or that you are getting sick.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic since many years am I at arisk of diabetic ketoacidosis and is that dangerous??",
    "answer" : "Diabetic ketoacidosis (DKA) is a serious condition that can lead to diabetic coma (passing out for a long time) or even death.\nWhen your cells don't get the glucose they need for energy, your body begins to burn fat for energy, which produces ketones.High levels of ketones can poison the body. When levels get too high, you can develop DKA. DKA may happen to anyone with diabetes, though it is rare in people with type 2.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are the early symptoms of Diabetic ketoacidosis (DKA)??",
    "answer" : "DKA usually develops slowly. But when vomiting occurs, this life-threatening condition can develop in a few hours. Early symptoms include the following:\nThirst or a very dry mouth\nFrequent urination\nHigh blood glucose (blood sugar) levels\nHigh levels of ketones in the urine",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Is Diabets ketacidosis dangerous ??",
    "answer" : "Ketoacidosis (DKA) is dangerous and serious. If you have any of the symptoms of DKA, contact your health care provider IMMEDIATELY, or go to the nearest emergency room of your local hospital.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "How Do I Check for Ketones",
    "answer" : "You can detect ketones with a simple urine test using a test strip, similar to a blood testing strip. Ask your health care provider when and how you should test for ketones. -",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im diabetic since many years and im in good control os bood sugars when should I check for ketones??",
    "answer" : "Many experts advise to check your urine for ketones when your blood glucose is more than 240 mg/dl.When you are ill (when you have a cold or the flu, for example), check for ketones every 4 to 6 hours. And check every 4 to 6 hours when your blood glucose is more than 240 mg/dl.Also, check for ketones when you have any symptoms of DKA.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Can I go for regular exercise if I have ketones in urine??",
    "answer" : "Do NOT exercise when your urine tests show ketones and your blood glucose is high. High levels of ketones and high blood glucose levels can mean your diabetes is out of control. Check with your health care provider about how to handle this situation.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic and on my regular check ups I found urine test positive for ketones When should I go to hospital if I find ketones in urine test??",
    "answer" : "Ketones in urine is a serious condition called Diabetic ketoacidosis Visit hospoital at once if you experience the following conditions:\nYour urine tests show high levels of ketones.\nYour urine tests show high levels of ketones and your blood glucose level is high.\nYour urine tests show high levels of ketones and you have vomited more than twice in four hours.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are the causes of Diabetic ketoacidosis??",
    "answer" : "Three basic reasons for moderate or large amounts of ketones:\nNot enough insulin\nMaybe you did not inject enough insulin. Or your body could need more insulin than usual because of illness.\nNot enough food\nWhen you're sick, you often don't feel like eating, sometimes resulting in high ketone levels. High levels may also occur when you miss a meal.\nInsulin reaction (low blood glucose)\nIf testing shows high ketone levels in the morning, you may have had an insulin reaction while asleep.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are the risk factors for Diabetic ketoacidosis??",
    "answer" : "The risk of diabetic ketoacidosis is highest if you:\nHave type 1 diabetes\nFrequently miss insulin doses\nUncommonly, diabetic ketoacidosis can occur if you have type 2 diabetes. In some cases, diabetic ketoacidosis may be the first sign that a person has diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "what are the complications of Diabetic ketoacidosis??",
    "answer" : "Treatment complications include:\nLow blood sugar (hypoglycemia). Insulin allows sugar to enter your cells, causing your blood sugar level to drop. If your blood sugar level drops too quickly, you can develop low blood sugar.\nLow potassium (hypokalemia). The fluids and insulin used to treat diabetic ketoacidosis can cause your potassium level to drop too low. A low potassium level can impair the activities of your heart, muscles and nerves.\nSwelling in the brain (cerebral edema). Adjusting your blood sugar level too quickly can produce swelling in your brain. This complication appears to be more common in children, especially those with newly diagnosed diabetes.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "What are the blood tests that I should have for diagnosing diabetic ketoacidosis??",
    "answer" : "Blood tests used in the diagnosis of diabetic ketoacidosis will measure:\nBlood sugar level. If there isn't enough insulin in your body to allow sugar to enter your cells, your blood sugar level will rise (hyperglycemia). As your body breaks down fat and protein for energy, your blood sugar level will continue to rise.\nKetone level. When your body breaks down fat and protein for energy, acids known as ketones enter your bloodstream.\nBlood acidity. If you have excess ketones in your blood, your blood will become acidic (acidosis). This can alter the normal function of organs throughout your body.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "If im diagnosed diabetic ketoacidosis how will I be treated??",
    "answer" : "If you're diagnosed with diabetic ketoacidosis, you might be treated in the emergency room or admitted to the hospital. Treatment usually involves:\n\nFluid replacement. You'll receive fluids — either by mouth or through a vein (intravenously) — until you're rehydrated. The fluids will replace those you've lost through excessive urination, as well as help dilute the excess sugar in your blood.\nElectrolyte replacement. Electrolytes are minerals in your blood that carry an electric charge, such as sodium, potassium and chloride. The absence of insulin can lower the level of several electrolytes in your blood. You'll receive electrolytes through a vein to help keep your heart, muscles and nerve cells functioning normally.\nInsulin therapy. Insulin reverses the processes that cause diabetic ketoacidosis. In addition to fluids and electrolytes, you'll receive insulin therapy — usually through a vein. When your blood sugar level falls below 240 mg/dL (13.3 mmol/L) and your blood is no longer acidic, you may be able to stop intravenous insulin therapy and resume your normal insulin therapy.",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im a diabetic siince many years how do I prevent getting diabetic ketoacidosis??",
    "answer" : "Commit to managing your diabetes. Make healthy eating and physical activity part of your daily routine. Take oral diabetes medications or insulin as directed.\nMonitor your blood sugar level. You might need to check and record your blood sugar level at least three to four times a day — more often if you're ill or under stress. Careful monitoring is the only way to make sure your blood sugar level remains within your target range.\nAdjust your insulin dosage as needed. Talk to your doctor or diabetes educator about how to adjust your insulin dosage in relation to your blood sugar level, what you eat, how active you are, whether you're ill and other factors. If your blood sugar level begins to rise, follow your diabetes treatment plan to return your blood sugar level to your target range.\nCheck your ketone level. When you're ill or under stress, test your urine for excess ketones with an over-the-counter urine ketones test kit. If your ketone level is moderate or high, contact your doctor right away or seek emergency care. If you have low levels of ketones, you may need to take more insulin",
    "consultNow" : ""
  },
{
    "category" : "Complications",
    "Name of doctor" : "Dr.Solomon",
    "question" : "Im 58yrs male and diabetic and I have problems with my vision when should I go for doctor visit??",
    "answer" : "Careful management of your diabetes is the best way to prevent vision loss. If you have diabetes, see your eye doctor for a yearly eye exam with dilation — even if your vision seems fine. Pregnancy may worsen diabetic retinopathy, so if you're pregnant, your eye doctor may recommend additional eye exams throughout your pregnancy.\nContact your eye doctor right away if your vision changes suddenly or becomes blurry, spotty or hazy.",
    "consultNow" : ""
  }
  ];

qandasSolomon2.forEach(function(qanda) {
  qanda.consultNow = qanda.category.toLowerCase().startsWith('yes');
  qanda.consultDoctorType = qanda.category.split(' ')[1];
  qAndAModels.push(qanda);
});
console.log(qandasSolomon2.length, qAndAModels.length);


module.exports = function() {
  return qAndAModels;
};