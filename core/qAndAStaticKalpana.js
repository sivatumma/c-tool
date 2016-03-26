var _ = require('underscore');
var qAndAModels = [];

var qandasKalpana = [
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am 25 years old female recently diagnosed with Type II Diabetic, my physician suggested me to do some exercises? What kind of exercises suits me?",
    "answer" : "Regular exercise program for diabetics has a profound effect on the regulation of their blood glucose levels. Start slowly, with 5 to 10 minutes a day, and add a little more time each week. Try brisk walking, hiking, climbing stairs, swimming or join a aerobics class, Dancing, riding a bicycle outdoors or a stationary bicycle indoors. Before starting exercise consult Doctor.",
    "consultNow" : "yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What is the best exercise regime for diabetes?",
    "answer" : "Walking is often an effective form of exercise. It has been shown to prevent or delay the onset of diabetes in those with impaired glucose tolerance. As such, an exercise as simple as walking is important to reduce the risk of developing diabetes. How much should you walk and how fast should you walk consult doctor?",
    "consultNow" : "yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am 40 years old male suffering with diabetes since 10 years, my life style is sedentary and I would like burn fat at abdomen? What kind of exercises suits me?",
    "answer" : "Start doing the following exercises like Tummy-Tightening Tips, Toe Tap, Bent-Knee Crunch, Bicycle Crunch, Leg Circles, Windshield Wipers, Double-Arm Reach, Side Crunch, Side Bend, Reverse Oblique Crunch, Elbow Twists, Arm Extensions, Modified Plank Pose, Child's Pose. Before starting exercise consult Doctor. Pictures",
    "consultNow" : "yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am 38 years old male diagnosed with type II diabetes 6 months ago, I noticed that there is weakness in my muscle, Can you suggest me some exercises that strengths my muscle?",
    "answer" : "Strength training is a light to moderate physical activity that builds muscle and keeps your bones healthy. You can lift weight to stimulate the particular set of muscles. Some simple exercises that target a particular set of muscles include:a. Bench pressing (for extensors of elbow or triceps and pectorals major. b. Arm curls (especially targets biceps and deltoids). c. Cycling (for hamstrings)",
    "consultNow" : "yes"
  },
{
    "category" : "Advise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "When is the best time of day for me to do physical activity for a diabetic patient?",
    "answer" : "Your Physician will help you decide the best time of day for you to do physical activity based on your daily schedule, healthy eating plan, and diabetes medicines. If you have type 1 diabetes, try not to do vigorous physical activity when you have ketones in your blood or urine. Ketones are chemicals your body might make when your blood glucose levels are too high and your insulin level is too low. If you are physically active when you have ketones in your blood or urine, your blood glucose levels may go even higher. Light or moderate physical activity can help lower blood glucose if you have type 2 diabetes and you don’t have ketones but, Ketones are rare in people with type 2 diabetes.",
    "consultNow" : "yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What are the Points to Remember before starting the exercise for diabetic patient?",
    "answer" : "1.To make sure you stay active, find activities you like to do. Ask a friend or family member to be your exercise buddy. 2. Write down your blood glucose levels and when and how long you are physically active in a record book. 3. Doctors suggest that you aim for 30 to 60 minutes of moderate to vigorous physical activity most days of the week. 4. Children and adolescents with type 2 diabetes who are 10 to 17 years old should aim for 60 minutes of moderate to vigorous activity every day. 5. Not all physical activity has to take place at the same time. For example, you might take a walk for 20 minutes, lift hand weights for 10 minutes, and walk up and down the stairs for 5 minutes. 6. Doing moderate to vigorous aerobic exercise for 30 to 60 minutes a day most days of the week provides many benefits. You can even split up these minutes into several parts. 7. Start exercising slowly, with 5 to 10 minutes a day, and add a little more time each week. Try walking briskly, hiking, or climbing stairs.",
    "consultNow" : "yes"
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am 45 years old female diagnosed with Diabetic and Hypertension 10 years ago, I travel daily about 80 kms and unable to find time to do exercises? Could you suggest me the simple exercises which suits me in my daily routine life?",
    "answer" : "Increase daily activity by spending less time watching TV or at the computer. Try these simple ways to add light, moderate, or vigorous physical activities in your life every day: 1. Walk around while you talk on the phone. 2. If you have kids or grand kids, visit a zoo or a park with them. 3. Take a walk through your neighborhood. 4. When you watch TV, get up and walk around the room during commercials. 5. Do chores, such as work in the garden or rake leaves, clean the house, or wash the car. 6. Stretch out your chores. For example, make two trips to take the laundry downstairs instead of one. 7. Park at the far end of the shopping center parking lot and walk to the store. 8. Take the stairs instead of the elevator. 9. Stretch or walk around instead of taking a coffee break and eating.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "My daughter is suffering with type I diabetes, doctor suggested to do some aerobic exercises? Could you suggest me some aerobic exercises?",
    "answer" : "Aerobic exercise is activity that uses large muscles, makes your heart beat faster, and makes you breathe harder by warming up and cooling down before and after you exercise. Start slowly, with 5 to 10 minutes a day, and add a little more time each week. Aerobic activities can include: rowing, running, walking Cycling.",
    "consultNow" : "yes"
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am 33 years female employee suffering diabetic nephropathy with swollen leg and ankles, doctor suggested me to do some exercises? Could you suggest me some exercises?",
    "answer" : "Here are some seated exercise that you may try. 1.Try ankle pumps by pointing your toes outwards, and then flexing them back to your body. Do this for about 30 seconds, relax and repeat it 10 times. 2. Exercise should be combined with compression therapy to provide the best benefits. Compression stockings essentially provide passive leg exercises. They help the leg muscle generate a pump pressure which squeezes out water from the legs, constricts blood vessels and encourage the lymphatic system to draw away fluids from the limbs.",
    "consultNow" : ""
  },
{
    "category" : "Tips",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Iam 45 years old male suffering with type II diabetic and obese too?Could you suggest me some tips to reduce my weight?",
    "answer" : "1.Try quick workouts: As long as you're totaling 30 minutes of exercise each day, several brief workouts are fine.2.Focus on overall activity: Increase activity in general—such as walking or climbing stairs—rather than a particular type of exercise. 3.Get a pedometer: Having a goal of 10,000 steps a day (about five miles) was important, even if the goal wasn't reached. Pedometer users lost more weight, had a greater drop in blood pressure, and walked about 2,500 steps more per day than those who didn't use a pedometer. 4.Work out with a friend: Working out with friends can be an important motivator. 5.Use visual cues: Put a note on the refrigerator or keep your walking shoes next to the back door as a reminder to go for a walk and it'll be more likely to happen.6.Test yourself regularly: Keep up with your hemoglobin A1C and blood glucose testing. Good test results can encourage you to keep with an exercise program, even when it feels tedious.",
    "consultNow" : ""
  },
{
    "category" : "Knowledge",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Is weight training ok for people with diabetes?",
    "answer" : "If you have diabetes and are new to weight training, it is important to get proper guidance and supervision. Whether you are using resistance machines or free weights, learning the correct posture and position will go a long way towards preventing injuries.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What if your diabetes is affecting your eyes?",
    "answer" : "If you have an active proliferative retinopathy, you must avoid strenuous exercise and any activity that dramatically increases blood pressure. Exercises such as walking, swimming, stationary cycling and low impact aerobics are suitable.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What if your diabetes is affecting your kidneys?",
    "answer" : "If you have diabetic nephropathy, you should avoid activities which cause the systolic blood pressure to rise to 180-200 mmHg, unless your blood pressure is carefully monitored during exercise.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "How can physical activity help me take care of my diabetes?",
    "answer" : "Starting a physical activity program can help you lose weight or keep a healthy weight and keep your blood glucose levels on target range. It also helps the hormone insulin absorb glucose into all your body’s cells, including your muscles, for energy.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What should I do before I start a physical activity program?",
    "answer" : "Before you start a physical activity program, you should A, Talk with your health care team(doctor, nurse,physiotherapist, dietician) B, Plan ahead C, Find an exercise buddy D, Decide how you’ll track your physical activity E, Decide how you’ll reward yourself",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Why is exercise important in controlling diabetes?",
    "answer" : "Exercise is especially good for people with diabetes because it helps control weight, helps insulin work better to lower blood glucose, is good for your heart and lungs, gives you more energy. Before you begin exercising, Consult your doctor",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Do I have to exercise all at once?",
    "answer" : "Split your 30 minutes of daily exercise as you please—say, 20 minutes after lunch and 10 minutes after dinner—but keep each session at least 10 minutes long",
    "consultNow" : ""
  },
{
    "category" : "Medications",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Do I need to change my insulin dosage when I begin a fitness plan?",
    "answer" : "Physical activity helps your body use insulin more efficiently and reduces the amount of glucose in your blood. Plus, the result of being active—bigger muscles—allows your body extra storage space for glucose. So, to avoid hypoglycemia during and after exercise, it may be necessary to scale back your insulin. Before changing the dosage of insulin consult Doctor now?",
    "consultNow" : ""
  },
{
    "category" : "Medications",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Do oral medications put me at risk for exercise-induced hypoglycemia?",
    "answer" : "While people who take insulin need to be cautious about low blood glucose, those with type 2 who are on oral medications have less to worry about. Test your blood glucose pre- and post-workout to see how your numbers change. Always consult doctor before you start exercise",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "My blood glucose level is high. Can I still work out?",
    "answer" : "As long as your blood glucose levels are under 250 mg/dl, you're safe to exercise. If they rise higher, exercise with caution. People with type 1 should test for ketones once the meter reads 250. It's unwise to exercise if ketones are present in more than trace amounts.",
    "consultNow" : ""
  },
{
    "category" : "Lifestyle",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "When is the best time to exercise?",
    "answer" : "If you're not a morning person, you're unlikely to be successful in any fitness pursuits that involve rolling out of bed at 5 a.m., and that's fine. Working out 20 minutes after dinner led to better blood glucose control than exercising 20 minutes before the meal.",
    "consultNow" : ""
  },
{
    "category" : "Knowledge",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Do I really need to check with my doctor before working out?",
    "answer" : "If you're already active and looking to start a new activity—or plan on starting slow with, say, a walking program—you can do so without your doc's go-ahead.",
    "consultNow" : ""
  },
{
    "category" : "Knowledge",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Is it dangerous to exercise when the weather is hot?",
    "answer" : "Working up a sweat when it's sweltering out can lead to dehydration in anyone. But people with diabetes should take extra caution. \"There's some increased risk of dehydration, and for people with diabetes that risk is accentuated because with dehydration often the glucose levels become increased,\" Always consult doctor before you start exercise in hot weather?",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Do I have to warm up and cool down?",
    "answer" : "Yes. You should add five minutes of light aerobic activity to the start of your workout and close with five minutes of stretching. \"The warm-up is meant to literally heat your body up, to help you avoid injury by creating more elasticity in your muscles and tendons,\" \"The cooldown is to help your heart recover and to stretch out tight muscles.\"",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Should I lift weights during exercise?",
    "answer" : "Either aerobic exercise (jogging, biking, or swimming) or resistance training (like weight lifting) can improve your glycemic control.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "How often—and how heavy a weight—should I lift?",
    "answer" : "You should aim to complete eight to 10 repetitions per exercise, working your way up to three sets for each exercise. Pick a weight that you can't lift more than 12 times in a row with good form. If you hit rep No. 12 and your muscles aren't fatigued, switch to a heavier weight. Consult doctor before you lift weights",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What is interval training, and should I do it?",
    "answer" : "If you work out on a stationary bike, for example, punctuate a steady cruising speed with a minute or two of extra-fast pedaling every five minutes. You can also interval train outside: \"Every few minutes, try to walk faster from one driveway to the next driveway,\"",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Which exercises should I do, and which muscles should I target?",
    "answer" : "To build strength, focus on your major muscle groups and watch smaller muscles form in the process. \"Train your back and you will hit the biceps automatically. Train the chest and you will hit the shoulders and triceps as well,\". \"Train your buttocks, thighs, and hamstrings, and you will hit the calves, too. Then don't forget a little abs work.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Do I need to start slow if I'm new to exercising?",
    "answer" : "Begin with a stationary bike before you hit the trails, or go for a nightly stroll before you try a hike. \"Give your body two weeks to acclimate to the exercise regimen to avoid injury,\"Then you can start stepping things up.\"",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Iam 42 years old male suffering with diabetic neuropathy . Repetitive exercise may lead to fracture ?",
    "answer" : "Repetitive exercise on insensitive feet can lead to ulceration and fractures. “Limit your choice of exercise to low impact or non-weight bearing activities,” Consult doctor before you start exercise",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I heard that people who are suffering with diabetic retinopathy should avoid exercises? Is that true?",
    "answer" : "Yes it true. Patients with diabetes and active PDR should avoid activities that involve strenuous lifting; harsh, high-impact activities; or placing the head in an inverted position for extended periods of time.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Will exercise cause a low blood sugar?",
    "answer" : "In general, the longer, more vigorous, and more intense the exercise, the more likely that the exercise will lower the blood sugar. Always check your sugar levels before you start exercise.",
    "consultNow" : ""
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What kind of food should I take to prevent or treat a low blood sugar during exercise?",
    "answer" : "It may be necessary to eat a carbohydrate-containing snack to prevent a low blood sugar especially if the exercise is unplanned or prolonged. Ideally, the snack should be a liquid or readily absorbed form of simple carbohydrate. Remember that complex carbohydrate takes a longer time to digest.",
    "consultNow" : ""
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "My husband has had type 2 diabetes for 15 years. He has gotten his food and exercise in pretty good shape and has his A1C down to 6.5. My concern is that he will do strenuous exercise in the morning, often for 2 hours, before he eats a meal. Is it safe to exercise this long while fasting?",
    "answer" : "Much depends on what his pre and post-exercise levels are as well as his overall health and energy. If he experiences lows 30-60 minutes post-exercise, then he needs to fuel up before exercising. Some version of a meal shake - containing a balance of carbs, protein and fat - works well for many people. If he has no issues, then his body appears to have adapted to the consistent program he has developed that appears to be working for him.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I have type 1 Diabetes for 26 years and I am 15 pounds over my ideal weight. For the last 6 weeks I've been attending a fitness boot camp. I find that my sugar levels may start at around 100 but steadily rise for the hour after exercising. Is this normal?",
    "answer" : "Exercise is a \"stressor\", meaning that in the short term, exercising will raise glucose levels before they drop down. Without diabetes, levels only rise up to a threshold point. With type 1, especially, levels may rise and take several hours to come back down. This is another reason why it is more challenging to find the right insulin dosages for the various differences in the day's activities and eating. Of course, exercise is always encouraged, as lean tissue burns up more calories, requiring more fuel. This fuel is accessible from glucose in the bloodstream. In the long run, your levels should eventually be lower. If you should drop too low a few hours after exercising, reassess your coverage for exercise. Losing your extra body fat should eventually help you in get better post exercise numbers.",
    "consultNow" : ""
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Is it good to do exercise after dinner for people with pre-diabetes?",
    "answer" : "There is no perfect exercise, but at that hour and having just eaten, a good walk is usually the best for most people. Any activity that is too long and/or strenuous later at night may cause one to stay awake. For some folks, especially those on insulin, strenuous evening exercise may cause early morning low blood sugars. Try those after dinner exercises you enjoy and see how they affect you. Ultimately, you are shooting for lower fasting glucose levels.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I have type 1 diabetes, have good health, and enjoy taking high intensity aerobic classes like Zumba. The problem is that my blood sugar often drops to 45-60 during the class no matter how much I carb up prior. I try to start with a BG of 150-170 and check half way through then treat with glucose tabs or juice and keep going. After class, my BG may range from 60-100 but then rises up to 200+ for the next few hours and I have to treat with insulin. What can I do?",
    "answer" : "You are definitely experiencing the exercise effect, which will raise your blood sugar for up to 4 hours after exercising. Have you started by cutting your post-exercise treatment dose in half? Also, if you are eating within that 3 hour time frame, stick to a lower carbohydrate protein/veggie type meal rather than any starchy carbs. Also, are you changing your basal rate for exercise? I know some very active folks program as many as 8 rates/day. Sounds like you should lower yours for class if you are not already doing so.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Why does my blood sugar increase after exercise? I had a blood sugar reading of 135 first thing in the morning. After a 3 mile walk my reading was 155. I had nothing to eat or drink during this time. I repeated this test and got the same results a few days later (132 and 154).",
    "answer" : "Wait an hour after you exercise and see if you get the same results. Exercise is a stressor, so blood sugar will be higher immediately after your session. Also, blood sugars tend to be higher in the mornings because of hormonal activity during the night.",
    "consultNow" : ""
  },
{
    "category" : "Knowledge",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I have had type 1 diabetes for 23 years. There was a time when my blood sugars would plummet after a workout. However, now when I exercise, my blood sugars are sky rocketing and I'm not eating anything. My blood sugars are perfect before I workout. What is up with this?",
    "answer" : "If the intensity of your workout has increased and you are testing within the 1/2-1 hr. post-exercise, it may be you need to wait longer for the post test. Exercise will generally increase levels in the short run, then drop in the long run. This is even more pronounced with insulin dependence. You may need to adjust your carb/insulin ratio before you workout. If all else is the same in your life except for the workout intensity, then rechecking even up to 4 hours later may be a path to try, in the short run, to see what the drops may be, then discuss any needed adjustments to your protocol with your physician if necessary.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am a type 1 diabetic and I am trying to incorporate exercise in the morning. However, it seems that my blood sugar spikes when I do this. This morning my blood sugar was 182 when I woke up. I did a 20 min work out video and took a shower. About a half hour later I tested my blood sugar and it was 300. Is there anything I can do to avoid this? I should mention I take lantus before bed and humalog with meals. When I exercise at other times of the day my blood sugar usually goes low.",
    "answer" : "Blood sugar levels are generally higher in the morning anyway due to the rise of hormones - this is known as the Dawn Phenomena. In the short run, exercise is a stressor and will elevate levels. In most folks, 30-60 minutes after exercise, levels will lower. Often in type 1 diabetes, however, it takes longer for levels to come down post exercise. You should discuss this with your physician to see about a target for the fasting levels pre exercise and how that is to be accomplished with your current protocol. As we know, this is easier said than done.",
    "consultNow" : ""
  },
{
    "category" : "Lifestyle",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "When is the best timeof day to exercise? I don't want to exercise and have my blood sugar drop.",
    "answer" : "The best time to exercise is any time that you can fit it in as opposed to skipping it! It is also important to have enough fuel in your system to cover your activity. There are general guidelines: for a 30 minute brisk walk, it is recommended to have 15 grams of carbs if your blood sugar is <120. This would mean a small fruit or a yogurt can work well as it has carb and protein. As your exercise time increases, so may your intake needs. The best way to determine your needs and best exercise zone is to test before and after exercising. If you are comfortable soon after your meal, that is a great time as you are well fueled.",
    "consultNow" : ""
  },
{
    "category" : "Knowledge",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I plan to do a one-week, 75 mile backpacking trip this summer. As you may know, backpackers often burn 4000 to 6000 calories per day, due to the strenuous nature of the exercise. Presumably, during exercise like this, my body will require much larger than normal amounts of carbs. Is there any guidance you can offer regarding the appropriate increase? What kind of percentage split between carbs, protein and fat would you recommend?",
    "answer" : "Good for you! Now, no one shoe fits all; gender, height, weight, body fat %, etc. all determine one's needs. Checking your glucose levels will let you know how your food is working for you. Legumes and whole grains like quinoa and wild rice can be part of a good carb loading program. If you are eating unrefined foods on this trip as opposed to quick acting carbs like candy/energy bars, you may find your energy more stable for longer periods. Nut butters work well on such trips. Bananas are a good sustaining fruit. Eggs are a good protein source for those who eat them, especially for the morning start. Since the general guideline is for 45-65% of intake to be from carbs, a 4000 calorie intake would be 450 grams form carbs at 45%. Remember: veggies are carbs. These are your immediate muscle fuel sources. Pack smart, and check as often as you think you need to, and avoid low blood sugar.",
    "consultNow" : ""
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I have been diabetic for 43 years and on the pump for 17 years. I am a bicyclist and train hard for races. I ride five days a week. I do not suspend or lower my basal during training. This year I have scaled back slightly and do two recovery rides a week. I have found that the recovery rides make my blood sugar skyrocket to as high as 411. I have tried eating different things prior to training but nothing makes a difference. What suggestions do you have to keep my BG from raising so quickly and so high?",
    "answer" : "With the regimen you have described, I would think you have different basal rates programmed into your pump, being different on the recovery days, reflecting a higher rate. What you eat is, of course, a factor, but your insulin:carb ratio may also need to be increased on those days. Be sure you are not eating refined carbs on your recovery days, aiming for higher fiber sources. Your pump company can also be a good resource if you already haven't tapped them for assistance with this issue.",
    "consultNow" : ""
  },
{
    "category" : "Diet",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "My girlfriend has type I diabetes and is considering training for a full marathon 10 months from now. She is currently about 40 lbs over weight and is not running. I know she needs special advice from her doctor and possibly a nutritionist, but I don't want to set her up for a goal she cannot accomplish.",
    "answer" : "Jumping right in to run would not be a good thing. The first thing to consider is if her blood sugar levels are in close-to-normal ranges. Hopefully, her physician has given her ranges to target. Exercise for Type 1's needs to be closely monitored, especially when doing longer sessions such as running a marathon. She will also need to be aware that hypoglycemia may actually occur during sleeping hours depending on the duration of the activity and food intake. Good hydration is also a \"must\". I would suggest that if she is serious, she needs to gets some guidelines from her physician. Daily, she should do a minimum of 45 minutes fast walking, gradually increasing, including stretching before and after. If she is cleared as healthy for a marathon by her physician, she needs to be prepared to monitor her glucose carefully before, during, and after exercise. Be sure she has proper footwear, and checks her feet daily.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "When I exercise my upper body, my blood sugar goes up and when I exercise the lower part, my blood sugar goes down, why is this?",
    "answer" : "How soon after exercising are you checking your blood sugars? For those not on insulin, I always suggest at least an hour, since exercise will raise your blood sugars initially, then \"settle\" down. If you are more dependent on insulin, blood sugars may be high several hours later. Lower body exercises generally burn more fuel (sugar) due to increased muscle mass. It may just be that on those days your blood sugars are coming down more quickly. Try consistent timing of testing, and see if you don't notice a change.",
    "consultNow" : ""
  },
{
    "category" : "Lifestyle",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I have type 2 diabetes andhave been walking 4-5 miles every night for the past six months. How come I'm not losing any weight?",
    "answer" : "Lean tissue weighs more than fat soyou often won’t see the number on the scale change, but will feel better, have more energy, better glucose levels, etc. In time, the weight number starts to come down. Keep up the exercise. Get assistance with your eating if you are at all unclear about how to manage food intake with diabetes. Usually there is room for improvement here.",
    "consultNow" : ""
  },
{
    "category" : "Lifestyle",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I usually run 10 to 14 miles on the weekends but I was recently diagnosed with type 2 diabetes. First, why does exercise seem to raise my blood sugar? What do you suggest eating before, during and after the run to give me the energy needed to complete this? I've always carried the little energy gel packs but I'm not sure this is the wise choice with diabetes.",
    "answer" : "To address your first question, a run of that intensity will certainly first elevate your blood sugar before it lowers. It is suggested to generally wait at least 1 our post-exercise before testing. Your pre-run snack accomplishes 2 things: get quick energy fuel while having some in reserves. The first rule is to eat whole, \"real\" foods such as pure ground peanut butter. A breakfast shake does very well for many people. You want minimal digestion with maximum absorption. What constitutes the best pre-run meal can vary among individuals, and much depends on how you eat the rest of the time. This means creating a fine balance among carbs, protein and fat so that you have a good access to both immediate and long term fuel. My personal morning preference before a workout is in a shake form. Some people can manage a yogurt based smoothie. Peanut butter stirred into oatmeal (if that appeals to you) is a better carbohydrate source than a bagel because of its fiber types. There are also many meal replacement powders out there: some good; others not so good. Berries and banana are good fruit choices to consider adding in a small amount. Long runs do require fuel and hydration without upsetting salt balance. Of course, your weather conditions must be factored in. As a general rule, for each hour of exercise, 30-50 grams of carbs are recommended so a gel pack may be appropriate during the run only. After a long run you want immediate carbohydrate replacement like a low-fat yogurt, and then having a meal awhile later. In general, eating legumes, lean \"flesh\" foods, and veggies on a daily basis can provide the best foundation for overall performance. No two people with diabetes are alike. You are going to have to \"self-experiment\" over time to see what works. Diabetes doesn't mean \"stop\"; it does mean \"pay closer attention\" and continue to enjoy life.",
    "consultNow" : ""
  },
{
    "category" : "Knowledge",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What is the optimal time of day for exercise?",
    "answer" : "before breakfast (and morning insulin) - provided a good meal is consumed the night before - or late afternoon (before evening insulin), with regular meals during the day, may be the most appropriate times to exercise. Exercising in the morning is not always possible or practical, and more often sporting activities are held in the afternoon and evening. However, as mentioned above if insulin is insufficient then hyperglycemia can develop.",
    "consultNow" : ""
  },
{
    "category" : "Knowledge",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What should be done before exercise?",
    "answer" : "The intensity, duration, and energy requirement of the exercise should be estimated prior to activity.Measure blood glucose concentration to determine how well it is under control.If blood glucose is <5 mmol/L, extra carbohydrate before exercise is recommended. a. If blood glucose is 5-15 mmol/L, extra carbohydrate may not be required if short exercise duration. b. If blood glucose is >15 mmol/L, delay exercise and measure urine ketones. c. If urine ketones are negative, exercise can be performed, and extra carbohydrate is not required. d. If urine ketones are positive, take insulin and delay exercise until ketones are negative.",
    "consultNow" : ""
  },
{
    "category" : "Knowledge",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am 39years female suffering with diabetic I often wear shoes to do exercise. What are the precautions which needs to be followed?",
    "answer" : "As most exercise is done standing up, it is important to ensure that you are wearing adequate footwear. Therefore, in order to prevent foot problems, you should: 1. Inspect feet daily for signs of friction or pressure sores. 2. Speak with your physician, podiatrist or diabetes educator about proper foot care procedures. 3. Buy shoes which are well-made for the type of exercise you do and which fit you. 4. Consult a shoe retailer who specializes in exercise foot wear. 5. Buy cotton, absorbent socks.",
    "consultNow" : ""
  },
{
    "category" : "Symptom",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am 39 years old, suffering with heel and leg pain and rarely found tingling sensation in my feet. Do I need to consult doctor or the pain will reduce with exercise?",
    "answer" : "First of all you need to consult doctor before you start any exercise, but to reduce pain you can start doing exercises like, Sit in chair and place an ankle on ground, then start doing ankle rotation(draw a circle in air), move you ankle inwards and outwards, then move ankle upwards and downwards. Do each exercise for about 5 minutes and 3 times a day.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "My father underwent surgery of amputation of big toe due to chronic diabetics? He always watches Television for hours together, I found there is swelling in his ankle and feet? Can you prescribe some exercise that reduce swelling?",
    "answer" : "Due to sedentary lifestyle your father is suffering with swelling of ankle, here are the simple exercises which helps in decrease if swelling 1. Heel and Toe Raises. 2. Foot Rocker 3. Resistance Band In and Outs 4. Toe Squeeze 5. Point and Flex. 6. Make a figure of eight in air.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am suffering with pheripheral neuropathy since 3 years. I am fed up taking medications to reduce pain? Is there any exercise that reduce pain?",
    "answer" : "Peripheral neuropathy increases the risk of loss of balance—and subsequently the increased risk of falling. Here are some of exercise....1. Balance exercises: while standing near a kitchen counter or wall for support. 2.Standing Knee Raises: Place one or both hands on the kitchen counter and raise the knee of one leg. 3.Calf Stretch: While you're performing calf raises for the strength benefits, take a moment to let your heels hang off the edge of the step to stretch the calf muscle and the back of your ankle. 4.Hamstring Stretch: Sit on a sturdy chair and extend one leg, keeping it parallel to the floor. Bend gently at the hips, pushing the heel of your straight leg into the floor as you lean forward. Hold for a count of 10. To increase the intensity of the stretch, try reaching forward with the hand opposite the extended leg.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Charcot fractures have completely destroyed my left foot to the point that I am totally non-ambulatory. Since I cannot walk for exercise, are there any other ways you know of that I can exercise to help keep my blood sugars down and keep my muscles from atrophying? I do not have access to a pool, so water exercise is out.",
    "answer" : "For anyone with Charcot’s fractures or other serious foot problems, non-weight-bearing exercises are the best option. These include activities performed in a seated, reclining, or lying position. Examples include use of a stationary cycle (upright or recumbent), rowing machine, arm ergometer, or hand weights. If using a stationary bike, look for one with arm handles that you move back and forth, as this provides the best full-body workout. Straps on the pedals will help keep your foot in place for single-legged pedaling.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What Effect Do Good Exercise Regimes Have on Diabetic Nephropathy Patients?Then, what types of exercise are recommended to patients?",
    "answer" : "Diabetic Nephropathy is a complication of diabetes that is caused by uncontrolled high blood sugar. Aside from the Diet Therapy and medicine control, a good exercise plan is also vary vital to manage health for patients. Generally speaking, diabetic kidney disease patients are recommended to do some moderate exercise rather strenuous exercise. These exercises include walking, jogging, swimming, TaiChi, yoga and so on. Doing them regularly will help you keep health and good mood",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "Can Diabetic Nephropathy Patients Exercise?",
    "answer" : "If the conditions are steady and can be controlled, proper exercise is good for improving the patients’ physique and adjusting mood. But diabetic nephropathy patients need to reduce exercise intensity and time when you do exercise. In the following conditions, exercise therapy is not recommended they are:Poor Control of Blood Pressure, Severe Renal Insufficiency,Repeated Swelling, Continuous Heavy Proteinuria.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am 30 years old male suffering with diabetic since 5 years, I have repeated swelling in my feet even after exercise? Can you explain the reason?",
    "answer" : "When you do exercise, neuroendocrine changes can facilitate accumulation of water and sodium in the body, and aggravate swelling. Thereby, if repeated swelling exists, and you feel extremely exhausted and have swelling in lower limps and face after doing exercise, you should stop exercising.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am suffering with Proteinuria since 3 years now I am 40 years old? I have a habit of doing daily Physical activity for about 2 hours, but recently I stop it, Can I start now?",
    "answer" : "You should take exercise at least half an hour a time, once each day, five days a week. You will find changes if you persist for months. Of course each individual differs, and you need a specific exercise schedule. Relatively strenuous exercise can increase the secretion of proteinuria, and proteinuria increase itself can deteriorate kidney impairment.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "My Grand father is having severe renal insufficiency since 8 years? Is it advisable to do exercises or not?",
    "answer" : "Exercise is not suggested because when renal insufficiency becomes serious, and the symptoms due to toxins accumulation of uremia appear, like poor appetite, abdominal distention nausea, skin itching, anemia and so on",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "What effect do proper exercises have on diabetic renal disease patients?",
    "answer" : "Regular physical activity improves insulin resistance and lipid profile (reduction in triglyceride and increase in high-density lipoprotein (HDL) and lowers blood pressure. 1. They can help patients strengthen immune system and enhance immunity. 2. Proper exercises can play a significant role in reducing associated cardiovascular and lifestyle risk factors. 3. These things also enhance quality of life and reduce stress, anxiety and depression.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am suffering with autonomic neuropathy since 3 years now I am 55 years old male? Can I start doing exercise now?",
    "answer" : "Be Caution when you are : Exercising in extreme heat where dehydration can occur, activities requiring rapid changes in movement that may result in fainting. Talk to your doctor before starting an exercise program - you may need an exercise stress test. Beneficial Activities: Mild to moderate aerobic activities and resistance training, but increase the length of time you exercise slowly. Follow your doctor’s recommendations.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "when I am doing aerobic exercises like running on treadmill,i feel a burning sensation and pain on feet? Then I crossed checked my feet I found a small blisters in the area of big toe? Do I need to stop exercises?",
    "answer" : "Yes, you need to stop exercise until blisters are cured. Monitor your feet closely for blisters both before and after exercise. If you see any changes, such as blisters, red areas, unusual blemishes, swelling or cuts, contact your podiatrist or doctor immediately.",
    "consultNow" : ""
  },
{
    "category" : "Symptom",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am suffering with tingling sensation in the hand and fingers for about 3 weeks. I am worried about diabetic ,I would like to know some exercises that reduce tingling sensation?",
    "answer" : "The first step that you need to do is Consult Doctor before starting any exercises. Here are some simple exercises that reduce tingling Fingers and Hands: 1. Finger Bends: Hold your hand out in front of you in a \"high five\" style. With your fingers close together, slowly bend your fingers downward. Keep your wrist and palm straight, and only bend the fingers. Hold this position for a few seconds and then unbend your fingers into the starting position again. Repeat the exercise several times on each hand. 2. Fist Bends: Hold your hand out in front of you with your fingers spread apart and pointing upward toward the ceiling. Now gently close your hand into a loose fist, with the thumb on the outside. Hold this position for a few seconds and then release back to the starting position. Repeat several more times with each hand. 3.Resisted Finger Flex: For this exercise you will need a table and a squeezable ball or a rolled-up sock. Sit next to a table and rest your arm on the surface with your palm facing up. With a ball in your hand, make a fist gripping the ball with all five fingers. Hold the grip for a few seconds and then release. Repeat the exercise several times. This exercise will help bring some strength and blood flow back into your fingers, hand and arm. 4. Five-Finger Movement: The five-finger movement exercise can also help relieve the tingling in your hands by stimulating the muscles and helping increase blood flow through motion. Sit by a table with your arm on the table. While keeping your arm and wrist flat on the surface, move your thumb and touch the tip of your pinkie finger. Then do the same with your ring finger, middle finger and index finger, respectively. Then repeat touching each tip in the reverse direction. Perform this exercise several times on both hands.",
    "consultNow" : ""
  },
{
    "category" : "Complication",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am suffering with type I diabetic, so hypoglycemia is apart of my life but recently I am gaining weight by having more carbohydrates, now I want to reduce my weight, can I do some exercises or no?",
    "answer" : "Yes you can do exercises, but If you experience hypoglycemia during or after exercise, treat it immediately by having 15-20 grams of fast-acting carbohydrate (sports drinks, regular soda, or glucose tabs are all good ideas). Wait 15-20 minutes and check your blood glucose again. If it is still low and your symptoms of hypoglycemia don't go away, repeat the treatment. After you feel better, be sure to eat regular meals and snacks as planned to keep your blood glucose level up. If you want to continue your workout, you will usually need to take a break to treat your low blood glucose, depending on what activity you are doing and how much insulin you have circulating in your bloodstream.",
    "consultNow" : ""
  },
{
    "category" : "Surgery",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "My brother in law under went Pancreatectomy, and he developed diabetes, can he do some exercises?",
    "answer" : "Before starting exercises consult Doctor. Start with simple walking but avoid strenuous activities and exercises. You can increase the distance you walk gradually to a level what can be tolerated better.",
    "consultNow" : ""
  },
{
    "category" : "Tips",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I would like to know the exercise tips?",
    "answer" : "1.Drink extra fluid before, during (only if prolonged exercise) and after exercise to avoid dehydration. The fluid may be water or a sweetened drink if extra carbohydrate is required. 250 ml every 15 minutes or one litre of fluid per hour is recommended. 2.Take extra carbohydrate before and during exercise to prevent hypoglycaemia. Extra carbohydrate is often needed after exercise. Discuss adjusting carbohydrate intake with your doctor or dietitian. 3.Monitor your blood glucose levels before, if possible during (at least initially), and after exercise to assess your requirements for extra food.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I am suffering with diabetics for about 40 years and I am under medication, recently I found that my foot is Worsening because of complications?Please suggest me how to prevent foot problems?",
    "answer" : "As most exercise is done standing up, it is important to ensure that you are wearing adequate footwear. Foot problems can occur when: a. Shoes fit poorly b. Socks are not worn or are not absorbent c. Friction or pressure points develop on feet d. Inspect feet daily for signs of friction or pressure sores. e. Speak with your physician, podiatrist or diabetes educator about proper foot care procedures. f. Buy shoes which are well-made for the type of exercise you do and which fit you. g. Consult a shoe retailer who specializes in exercise foot wear. h. Buy cotton, absorbent socks.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "My father underwent surgery of amputation of foot due to chronic diabetics? Can he use diabetic socks to protect another feet?",
    "answer" : "Yes, he can use them. Some of the Benificial affects of Diabetic Sock are: 1. Diabetic sock is a non-binding and non-elasticized sock which is designed so as to not constrict the foot or leg and control moisture,which reduce the risk of infection. 2. Another beneficial feature of diabetic socks is seamless toe-closures to reduce pressure and blistering.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "Dr. Kalpana",
    "question" : "I found a small wound on my foot since one month, I have neglected it and after one month there is change wound size but I never felt pain in my foot. I am afraid that whether am I diabetic or not? Can you prescribe some foot wear which cure my Foot ulcer?",
    "answer" : "",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What should my blood sugar be when I wake up (fasting) and before meals? What about after?",
    "answer" : "For most people with diabetes, the American Diabetes Association recommends a fasting or before-meals blood glucose (or blood sugar) goal of 70–130 mg/dl. One to two hours after eating, a postprandial blood sugar reading at or under 180 mg/dl is recommended.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Does a diagnosis of type 2 diabetes mean I will have to go on insulin?",
    "answer" : "No. People with type 2 diabetes may or may not ever need to take insulin injections, depending on several factors, including the timing of diagnosis. Research indicates that if type 2 diabetes is treated early and blood sugar is controlled initially and over the years, the pancreas is more likely to produce enough insulin longer. But a person who lives with type 2 upward of 15 years is unlikely to continue to make sufficient insulin and will need to take it via syringe, pen, or pump.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Can I get rid of type 2 diabetes if I stop eating carbs and/or lose a lot of weight?",
    "answer" : "No, but you can control it. If you have prediabetics or were just diagnosed with type 2, losing a lot of weight can put the condition into remission. Weight regain, aging, and the natural progression of type 2 diabetes can bring it back. “Not eating carbohydrate or severely restricting it is nearly impossible for any length of time. It’s also not healthy, because you won’t get essential nutrients,\"",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What is prediabetes?",
    "answer" : "prediabetics means your blood glucose levels are higher than normal but not high enough for a diagnosis of diabetes. . People with prediabetics are at an increased risk for developing type 2 diabetes and for heart disease and stroke. The good news is that if you have prediabetics, you can reduce your risk of getting type 2 diabetes. With modest weight loss and moderate physical activity, you can delay or prevent type 2 diabetes.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What can I do if I want to prevent prediabetics?",
    "answer" : "Studies have shown that most people with prediabetes develop type 2 diabetes within a few years, unless they change their lifestyle. Most people with prediabetes don’t have any symptoms. Your doctor can test your blood to find out if your blood glucose levels are higher than normal. Losing weight—at least 5 to 10 percent of your starting weight—can prevent or delay diabetes or even reverse prediabetes. That’s 10 to 20 pounds for someone who weighs 200 pounds. You can lose weight by cutting the amount of calories and fat you consume and by being physically active at least 30 to 60 minutes every day. Physical activity also helps your body use the hormone insulin properly. Your body needs insulin to use glucose for energy. Medicine can help control the amount of glucose in your blood. Ask your doctor if medicine to control glucose is right for you.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "If diabetes is not managed, what problems might occur?",
    "answer" : "Diabetes is a very serious disease. Over time, diabetes that is not well managed causes serious damage to the eyes, kidneys, nerves, and heart, gums and teeth. If you have diabetes, you are more likely than someone who does not have diabetes to have heart disease or a stroke. People with diabetes also tend to develop heart disease or stroke at an earlier age than others. The best way to protect yourself from the serious complications of diabetes is to manage your blood glucose, blood pressure, and cholesterol and avoid smoking. It is not always easy, but people who make an ongoing effort to manage their diabetes can greatly improve their overall health.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Who is at risk for developing type 2 diabetes?",
    "answer" : "Here are the risk factors for type 2 diabetes. 1.Being over 45 years of age 2.Being overweight or obese 3.Having a first-degree relative -- a parent, brother, or sister -- with diabetes 4.Being African American, American Indian or Alaska Native, Asian American or Pacific Islander, or 5.Having gestational diabetes, or giving birth to at least one baby weighing more than 9 pounds 6.Having blood pressure of 140/90 or higher, or having been told that you have high blood pressure. 7.Having abnormal cholesterol levels -- an HDL cholesterol level of 35 or lower, or a triglyceride level of 250 or higher 8.Being inactive or exercising fewer than three times a week. 9.Having polycystic ovary syndrome, also called PCOS (women only) 10.On previous testing, having prediabetes (an A1C level of 5.7 to 6.4 percent), impaired glucose tolerance (IGT) or impaired fasting glucose (IFG) 11.History of cardiovascular disease (disease affecting the heart and blood vessels).",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What kind of meal plan should a person with diabetes follow?",
    "answer" : "Ask your doctor to give you the name of someone trained to help you create a healthy eating plan, such as a dietitian. Your healthy eating plan will include 1.Breads, cereals, rice, and whole grains 2.Fruits and vegetables 3.Meat and meat substitutes 4.Dairy products 5.Healthy fats.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Who should be tested for diabetes?",
    "answer" : "Because type 2 diabetes is more common in older people, anyone who is 45 or older should consider getting tested. If you are 45 or older and overweight, getting tested is strongly recommended. If you are younger than 45, overweight, and have one or more risk factors, you also should talk with your doctor about being tested.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "How can diabetes affect my teeth and gums?",
    "answer" : "People with diabetes can have tooth and gum problems more often if their blood glucose stays high. Glucose is present in your saliva—the fluid in your mouth that makes it wet. When diabetes is not controlled, high glucose levels in your saliva help harmful bacteria grow. These bacteria combine with food to form a soft, sticky film called plaque. Plaque also comes from eating foods that contain sugars or starches. Some types of plaque cause tooth decay or cavities. Other types of plaque cause gum disease and bad breath. The most common mouth problems from diabetes are 1. Gingivitis (unhealthy or inflamed gums) 2. Periodontitis (an infection of the gums) 3. Thrush or candidiasis 4. Dry mouth 5. Oral burning (a burning sensation inside the mouth).",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "How can I protect my teeth and gums?",
    "answer" : "Here are ways to protect your teeth and gums. 1. Keep your blood glucose as close to normal as possible. 2. Use dental floss at least once a day. Flossing helps prevent the buildup of plaque on your teeth. 3.Plaque can harden and grow under your gums and cause problems. Using a sawing motion, 4.Gently bring the floss between the teeth, scraping from bottom to top several times. 5.Brush your teeth after each meal and snack. Use a soft toothbrush. Turn the bristles against the 6. Gum line and brush gently. Use small, circular motions. Brush the front, back, and top of each tooth. 7. If you wear false teeth, keep them clean. 8. Call your dentist right away if you have problems with your teeth and gums.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Hi I am suffering with Diabetic since 5 years and I would like to know When to Stop Exercising?",
    "answer" : "Stop exercising if you 1.Have pain or pressure in your chest, neck, shoulder, or arm 2.Feel dizzy or sick to your stomach 3.Break out in a cold sweat 4.Muscle cramps 5.Feel severe pain in joints, feet, ankles, or legs.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Will a poorly controlled blood glucose level have any affect on developing gum disease?",
    "answer" : "Yes. High blood glucose levels make gum disease get worse. Like all infections, gum disease can be a factor in causing blood sugar to rise and make diabetes harder to control.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Should I tell my dentist and hygienist that I have diabetes?",
    "answer" : "Yes. People with diabetes have special needs. Keep your dentist and dental hygienist informed of any changes in your condition and any medication(s) you might be taking. Postpone any non-emergency dental procedures if your blood sugar is not in good control",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "How do I know if I have serious gum disease?",
    "answer" : "Often there are no signs of serious gum disease. You may not know you have it until you have some serious damage. Regular dental visits are your best weapon.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What's the first stage of gum disease?",
    "answer" : "The first stage of gum disease is gingivitis and if ignored, can develop into the more severe form of gum disease, known as periodontitis. When this happens, you may need gum surgery to save your teeth.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What are the signs of gingivitis and/or serious gum disease?",
    "answer" : "Some of the possible signs of gingivitis and/or serious gum disease include: Bleeding and red, swollen, or tender gums Gums that have pulled away from the teeth. Pus between the teeth and gums (when you press on the gums) Bad breath Permanent teeth that are loose or moving away from each other Changes in the way your teeth fit when you bite Changes in the fit of partial dentures or bridges. If you have any of the above, see your dentist.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "How can I help prevent dental problems associated with diabetes?",
    "answer" : "First and foremost, control your blood glucose level. Then take good care of your teeth and gums, along with regular dental check-ups every six months. Additional Oral Care Tips for Those with Diabetes 1. Have a dental checkup every six months, or as often as indicated by a professional. 2.Tell your dentist or hygienest that you have diabetes and any other medical condition. 3.Brush for two minutes a day with a toothpaste with an antigingival/antibacterial ingredient to help prevent gingivitis and one that accepted by the American Dental Association. Contact your dentist or hygienist if you experience any of these signs of gum disease: a.Gums that bleed or are red, puffy or swollen, or sore b.Gums that have pulled away from the teeth c. Changes in the way your teeth fit together when you bite d.Pus that appears between your teeth and your gums e.Constant bad breath or a bad taste in your mouth",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Why are women with diabetes pre-disposed to developing recurrent yeast infections?",
    "answer" : "The glucose (sugar) in your body is the perfect trigger to encourage and grow yeast within your body.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What are the complications of using birth control pills while having diabetes?",
    "answer" : "Birth control pills may raise your BG levels. Using them for longer than a year or 2 may also increase your risk of complications. For instance, if you develop high blood pressure while on the pill, you increase the chance that eye or kidney disease will worsen.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Will menopause affect my diabetes?",
    "answer" : "Yes. The changes in hormonal levels and balance, may lead to BG levels that are out of control. Women with diabetes are also at risk of developing premature menopause and consequent increased risks of cardiovascular disease.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Are there any diabetes medications that have a higher incidence of side effects amongst women who use them?",
    "answer" : "Yes, the oral medications classified as thiazolidinediones (TZDs) may cause women who are not ovulating and haven't gone through menopause to begin ovulating again, enabling them to conceive. Also, oral contraceptives may be less effective when taking this medication.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Is their a time frame that women with diabetes should follow for check-ups such as gynecological exams?",
    "answer" : "Check-ups should be performed on a regular, consistent basis to ensure that the diabetes is not negatively affecting the reproductive organs. Your health care provider will determine how often you should visit with him/her depending on your overall health.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Can women with diabetes breastfeed their babies?",
    "answer" : "Unless your health care team advises you otherwise, yes. Breast milk provides the best nutrition for babies and breastfeeding is recommended for all mothers with either preexisting diabetes or gestational diabetes.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "I had diabetes before I was pregnant. Now that I am pregnant, how often should I monitor my BG levels?",
    "answer" : "Most health care professionals recommend that a woman with pre-existing diabetes (both type 1 & type 2) who becomes pregnant monitor her BG levels up to 8 times daily. In terms of your day-to-day routine, you should probably monitor: before each meal, 1 or 2 hours after each meal, at bedtime, occasionally at 2-3 a.m.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "I had gestational diabetes. How soon after having the baby should I get my blood glucose rechecked?",
    "answer" : "About 6-8 weeks after delivery. Like 90% of the women with gestational diabetes, your BG levels will probably return to normal right after your baby is born. However, you still run the risk of developing type 2 diabetes. In fact, prior studies have shown women who have had gestational diabetes are at risk (of up to 60%) for developing diabetes in the next 10 to 20 years.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What are the risks of hormone replacement therapy?",
    "answer" : "The risks are increased incidence of breast cancer and uterine cancer while using estrogen. However, when estrogen and progesterone are administered together and in the correct doses, the risk of cancer of the uterus or endometrium is reduced.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "I am diabetic since 2 years,now I am 35 years old , Will my children inherit diabetes from me?",
    "answer" : "It all depends on risk factors that include: no diabetes in the family—11% chance of type 2 diabetes by age 70 and 1% chance of type 1 diabetes by age 50. One parent with type 1 diabetes—6% chance of type 1 diabetes (father with type 1 diabetes), 4% chance of type 1 diabetes (mother with diabetes who was younger that 25 when the child was born) and 1% chance of type 1 diabetes (mother with diabetes who was older than 25 when the child was born). *Risk doubles if the parent was diagnosed by age 11*",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What should my A1C (Hemoglobin A1C) be while I am pregnant?",
    "answer" : "An A1C (Hemoglobin A1C) is a blood test that can predict average blood glucose levels for about 8-12 weeks. People without diabetes generally have an A1C of less than 6%, though this usually drops to less than 5% during pregnancy. Women with diabetes should strive for \"near normal\" A1Cs prior to, as well as during, pregnancy.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "The Nutrition Facts label on food packages tells me how many grams of sugar are in foods. How much sugar am I allowed to have?",
    "answer" : "\"Sugar\" is listed on the food label under Total Carbohydrate because it is a carbohydrate. Carbohydrates have the greatest effect on blood glucose (blood sugar) levels. Nearly all of the carbohydrates you eat will eventually be made into glucose. For this reason, the total amount of carbohydrates you eat is more important than the source of those carbohydrates. It doesn't matter if it is carbohydrates from fruits, breads, cereal, candy or maple syrup. All carbohydrates will cause your blood glucose to rise. In following your meal plan, try to include carbohydrates that provide good nutrition (vitamins, minerals and fiber) instead of carbohydrates that have little or no nutritional value.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Should I be concerned about fat in my diet?",
    "answer" : "Yes! People with diabetes are more likely to develop heart disease than those without diabetes. For that reason, the following guidelines are good rules of thumb: watch your portions add healthy fats like monounsaturated fats and polyunsaturated fats, omega 3 fatty acids, less than 10% of total calories from saturated fat, avoid trans fats, and 300 grams or less of cholesterol per day.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "I am not particularly active, and I haven’t exercised in years. Is it safe for me to start now?",
    "answer" : "If you haven’t been active for a long time, it’s important to start out at a low level of effort and work your way up slowly. Beginning slowly will help you become more fit without straining your body. For example, you may want to start with walking, biking, or swimming at a comfortable pace and then gradually do more, or start strengthening exercises with 1- or 2-pound weights and gradually add heavier weights. You may want to talk with your doctor if you decide to start a vigorous exercise program or significantly increase your physical activity.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "I have a medical condition (such as arthritis, high blood pressure, diabetes, heart disease). Is it safe for me to exercise?",
    "answer" : "Exercise is safe for almost everyone. In fact, studies show that people with arthritis, high blood pressure, diabetes, or heart disease benefit from regular exercise and physical activity. In some cases, exercise actually can improve some of these conditions. You may want to talk with your doctor about how your health condition might affect your ability to be active.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "Isn’t it better for older adults to \"take it easy\" and save their strength?",
    "answer" : "Regular physical activity is very important to the health and abilities of older people. In fact, studies show that \"taking it easy\" is risky. For the most part, when older people lose their ability to do things on their own, it doesn’t happen just because they’ve aged. It’s usually because they’re not active. According to the U.S. Surgeon General’s Report on Physical Activity and Health, inactive people are nearly twice as likely to develop heart disease as those who are more active. Lack of physical activity also can lead to more visits to the doctor, more hospitalizations, and more use of medicines for a variety of illnesses.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "I find it hard to make myself be active. What can I do?",
    "answer" : "You are more likely to keep going if you choose activities you enjoy, if you can fit them into your schedule, if you believe you’ll benefit from them, and if you feel you can do them safely and correctly. Making a contract with a friend or family member also may help you keep your commitment. Setting small, realistic goals, checking your progress, and rewarding yourself when you reach your goal also can help. If you can stick with an exercise routine or physical activity for at least 6 months, it’s a good sign that you’re on your way to making physical activity a regular habit.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "How do I find time to be active?",
    "answer" : "There are a number of ways to fit exercise and physical activity into your schedule. For example, exercise first thing in the morning before your day gets too busy, or combine physical activity with a task that’s already part of your day, such as walking the dog or doing household chores. If you don’t have 30 minutes in your daily routine to be active, look for three 10-minute periods.",
    "consultNow" : ""
  },
{
    "category" : "Device",
    "Name of doctor" : "",
    "question" : "What kind of equipment do I need? I can’t afford exercise equipment.",
    "answer" : "For many activities, you don’t need any equipment. All you need for brisk walking, for example, is a pair of comfortable, non-skid shoes. For strength training, you can make your own weights from unbreakable household items. Many communities offer free or low-cost programs for seniors. Check with your local parks and recreation department or senior center about the facilities and programs in your area. In addition, some local fitness centers may offer senior discounts.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "What if I have an injury or health problem that keeps me from exercising for a while? How do I know if it’s safe for me to start again?",
    "answer" : "If you miss a few days or weeks of exercise because of an injury or illness, don’t be discouraged. Once you recover, you can start again and be successful. Talk with your doctor about when you can resume your regular routine. When you start again, begin at about half the effort you were putting in when you stopped, then gradually build back up. With a little time, you’ll be back at the same, or a better, fitness level.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "I am 81 years old. Should I be exercising, and will it make a difference at my age?",
    "answer" : "Yes, staying active is important throughout life. Regular exercise and physical activity help you stay strong and fit enough to keep doing the things you enjoy. No matter what your age, you can find activities that meet your fitness level and needs.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "Do I need to do other exercises in addition to my usual walking routine?",
    "answer" : "Most people tend to focus on one type of exercise or activity and think they’re doing enough. Try to do all four types — endurance, strength, flexibility, and balance — because each one has different benefits. Doing one kind also can improve your ability to do the others. In addition, variety helps reduce boredom and risk of injury.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "I don’t do any kind of physical activity, but I watch my diet and I’m not overweight. Isn’t that enough?",
    "answer" : "Eating a nutritious diet and maintaining a healthy weight are only part of a healthy lifestyle. Regular physical activity is important to the physical and mental health of almost everyone, including older adults. Being physically active can help you stay strong and fit enough to keep doing the things you enjoy and to stay independent as you get older. Together, healthy habits such as physical activity, a balanced diet, and not smoking will help you achieve the best of health.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "I am overweight and have pain when I do any exercise, even walking. What should I do?",
    "answer" : "Extra weight can put pressure on your joints. Here are a couple of things to try: Find little ways to increase your activity slowly and, at the same time, start cutting down on calories. For example, when you drive somewhere, park a little distance away, and walk the rest of the way. Instead of using the television remote, get up to change the channel. Try activities that aren't weight-bearing, such as bicycling, swimming, and water aerobics. Many communities offer year-round fitness programs at public swimming pools.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "How can I find time to work exercise into my busy life?",
    "answer" : "Not having enough time is a problem for many of us. If you find it hard to exercise at the same time every day, here are a couple of things you might want to try: Make exercise a priority. Schedule time to exercise as if you were scheduling an appointment. Write it on your calendar. If you stick to your schedule, it will become a habit in time. Find ways to move more during your daily routine. Take the stairs instead of the elevator, or get off the bus one stop before your regular stop and walk the rest of the way.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "What Can Physical Activity Do for Me?",
    "answer" : "1. Helps keep your blood glucose, blood pressure, HDL cholesterol and triglycerides on target 2. Lowers your risk for pre-diabetes, type 2 diabetes, heart disease and stroke 3. Relieves stress 4. Strengthens your heart, muscles and bones 5.Improves your blood circulation and tones your muscles 6. Keeps your body and your joints flexible",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "What Kinds of Physical Activity are Best for diabetic patients?",
    "answer" : "A complete physical activity routine includes four kinds of activity: Activity—walking, using the stairs, moving around—throughout the day Aerobic exercise, such as brisk walking, swimming, or dancing Strength training, like lifting light weights Flexibility exercises, such as stretching",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "Can you prescribe me some aerobic exercises?",
    "answer" : "Aerobic exercise makes your heart and bones strong, relieves stress and improves blood circulation. Here are some ways to get aerobic exercise: 1. Take a brisk walk every day. 2. Go dancing or take a dance aerobics class. 3.Swim or do water aerobics . 4.Take a bicycle ride outdoors or use a stationary bicycle indoors",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "Even though I am diabetic patient, I want to built a strong bones and muscles and makes everyday chores like carrying groceries easier",
    "answer" : "Do your strength routine several times a week. Here are some ways to do strength training: 1. Lift light weights at home with caution. 2.Join a class that uses weights, elastic bands, or plastic tubes. 3. When you travel,make time to use the hotel fitness center. Or bring lightweight, easy to pack resistance bands with you.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "Can you prescribe me some flexibility exercises?",
    "answer" : "Flexibility exercises, also called stretching, help keep your joints limber and lower your chances of getting hurt. Gentle stretching for 5 to 10 minutes helps your body warm up and get ready for activities and cool down afterwards.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "How do I make sure I am exercising safely?",
    "answer" : "1. In order to prepare the body for exercise there must always be some kind of warm-up which involves gently raising the pulse and getting the muscles warm for 5-10 minutes before the main exercise activity. Instructor-led sessions will build this into the activity. 2. However, if you are exercising independently, and this includes doing heavy housework, DIY and gardening, remember to start the activity gently and build up. 3. It is also important to cool-down following exercise, to avoid feeling faint and dizzy and to help the body return to a resting state. Spend 5-10 minutes repeating the activities undertaken in the warm-up",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "What do we mean by moderate activity?",
    "answer" : "A scale known as Borg’s scale of Rate of Perceived Exertion (RPE) is used to rate how hard the exerciser is working. Moderate activity means the exerciser should feel some breathlessness, be aware that his/her pulse is raised, be sweating, know that he/she is using his/her muscles, but still be able to hold some brief conversation.",
    "consultNow" : ""
  },
{
    "category" : "Exercise",
    "Name of doctor" : "",
    "question" : "How long do these effects from exercise last for?",
    "answer" : "The good news is that if someone regularly exercises these benefits can be permanent, and for someone with diabetes it can mean reducing their medication. If younger members of families with a predisposition to diabetes exercise regularly they could avoid diabetes altogether. A single bout of exercise can benefit the body’s sensitivity to insulin for 16-18 hours, exerting effects on blood glucose control for 24-48 hours but these effects have worn off by 60-72 hours. Even a little bit of exercise is better than none at all, and a little and often approach to exercise can be of benefi",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "I am diagnosed with diabetic retinopathy? Is there any eye exercise which reduce my retinopathy?",
    "answer" : "There no exercise for diabetic retinopathy. Resistance exercises(exercise that is done with weight machine, free weights, or rubber exercise bands) can raise your blood pressure in short term, this may cause bleeding in your eye if you have certain kind of eye problems.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Do I need to start slow if I'm new to exercising?",
    "answer" : "Begin with a stationary bike before you hit the trails. Give your body two weeks to acclimate to the exercise regimen to avoid injury. Then you can start stepping things up. Once you get going, you may be surprised at how much you enjoy being active, challenging your body, and reaping rewards like better mobility. You may even look forward to a brisk bike ride after a long workday or a cool swim on a sweltering summer afternoon. It's very rewarding to see that if you do an activity, it made your blood sugar go down, In fact, even if you've been recently diagnosed with diabetes, you may find you're healthier (and happier!) after your diagnosis than you were before.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Which exercises should I do, and which muscles should I target?",
    "answer" : "Find an activity you enjoy and you'll be more likely to stick with it. if you simply want to get fit and get it over with, incline walking on a treadmill. To build strength, focus on your major muscle groups and watch smaller muscles form in the process. \"Train your back and you will hit the biceps automatically. Train the chest and you will hit the shoulders and triceps as well.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "I hate to go to the gym. What else can I do?",
    "answer" : "Exercise isn't synonymous with plugging away endlessly on a treadmill. \"Go for a walk, hike, swim, or bike ride to get into nature and burn some calories, make a list of places in your town or city you'd like to explore on foot, then start checking them off. \"Find something you love. Try dance classes, spinning, martial arts, Make it something you enjoy doing, and you're more likely to stick with it.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "My blood glucose level is high. Can I still work out?",
    "answer" : "As long as your blood glucose levels are under 250 mg/dl, you're safe to exercise. If they rise higher, exercise with caution. People with type 1 should test for ketones once the meter reads 250. It's unwise to exercise if ketones are present in more than trace amounts.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Do oral medications put me at risk for exercise-induced hypoglycemia?",
    "answer" : "While people who take insulin need to be cautious about low blood glucose, those with type 2 who are on oral medications have less to worry about. Test your blood glucose pre- and post-workout to see how your numbers change. Consult doctor before you start exercise",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Do I need to change my insulin dosage when I begin a fitness plan?",
    "answer" : "Maybe. Physical activity helps your body use insulin more efficiently and reduces the amount of glucose in your blood and the result of being active—bigger muscles—allows your body extra storage space for glucose. So, to avoid hypoglycemia during and after exercise, it may be necessary to scale back your insulin. For instance, if you plan to work out after lunch, you may need to reduce the insulin you take with your meal. A good place to start is by decreasing your dose by about 20 percent. But remember, what works for one person may not work for another, so test often.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Do I have to exercise all at once?",
    "answer" : "Split your 30 minutes of daily exercise as, 20 minutes after lunch and 10 minutes after dinner but keep each session at least 10 minutes long.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "My husband has type 2 diabetes and is a truck driver. What foods can he take on the road?",
    "answer" : "“Preplanning and having healthy snacks at the ready are keys to helping you eat healthy on the road, I suggests to have fresh fruit, small containers of fruit (no syrup), fat-free yogurt, part-skim cheese (sticks, slices, and cubes), sugar-free pudding cups, nuts (any type), whole wheat crackers or pretzels, peanut butter, baby carrots, and 100-calorie snack packs (buy them or create your own). Also, drink plenty of water and no-calorie drinks.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Will insulin make me gain weight?",
    "answer" : "The reason we need insulin—as a hormone made in our bodies or as a medication—is to push glucose into cells for energy. Insulin’s job is to process calories. For this reason, it can—but doesn’t have to—cause weight gain",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Why is weight loss so important? What’s the best way for a person with type 2 to lose weight?",
    "answer" : "Weight loss is vital, particularly just after a diagnosis of type 2 or prediabetes. Weight loss increases insulin sensitivity, allowing cells to more effectively use the insulin the body continues to make. Losing just 10–20 pounds can accomplish a boatload of benefits. Among them are improved blood sugar, blood pressure, and cholesterol levels and possibly taking fewer medications or lower doses. To lose weight slowly and steadily, change your lifestyle. The pounds you keep off over time are the most important to living a long life.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "I am diabetic,Can I drink alcohol?",
    "answer" : "Yes, adults with diabetes can drink alcohol and should follow the same guidelines as the general public—an average of up to one drink per day for women and up to two drinks per day for men, with no more than three or four drinks in any single day for women and men, respectively. Research shows moderate alcohol consumption has minimal short- or long-term effects on glucose levels in people with type 1 or 2 diabetes. Although alcoholic drinks are made from grains or fruits (starches or sugars) through the processes of fermentation and distillation, alcohol cannot be changed into glucose, she says. Also, alcohol is the only nutrient that doesn’t require insulin to be broken down for energy; carbohydrate, protein, and fat do. However, drinking more than three drinks per day over time has been shown to make glucose control a challenge. For people who take insulin or another blood glucose-lowering medication that can cause hypoglycemia, eat some food when drinking alcohol. A cautionary note to people with type 1 diabetes: Significant alcohol intake can cause hypoglycemia a number of hours later, so regularly check blood sugar levels when you drink.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Can your menstrual cycle and/or going through menopause affect glucose levels?",
    "answer" : "Yes, It’s common for women to have hormone fluctuations the week before their period, and those can affect glucose control. After ovulating, estrogen and progesterone rise. “Estrogen can make women more sensitive to insulin and cause hypoglycemia. Progesterone can do the converse.Glucose levels often return to their usual patterns after the first few days of the menstrual cycle. “Check your glucose levels and analyze your monthly fluctuations to know your patterns. Menopause also can affect blood sugar. “During perimenopause, estrogen and progesterone can fluctuate and lead to glucose swings,”An early sign of perimenopause for women who take insulin is hypoglycemia due to dropping progesterone.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What Foods Should I Eat Before and After Exercise?",
    "answer" : "Foods that contain carbohydrate are quick and easy to digest for energy. “Eat foods like bread, crackers, pretzels, dry cereal, 100 percent fruit juice, or sports drink with calories,But if weight loss is a goal and you aren’t at risk of hypoglycemia, just drink water—ditto for after exercise. Unless your workout was particularly exhausting or lasted several hours, you don’t need food. People who take insulin and are physically active should consult their health care provider about how to adjust insulin dosages.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Why can’t my wife and I use the same lancet if we clean it?",
    "answer" : "The Centre for Disease Control and prevention strongly recommends that blood-testing devices, including lancets, should never be used by more than one person to prevent any chance of infection, and alcohol may not sufficiently disinfect a lancet.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Can I get rid of diabetes? Will it ever go away?",
    "answer" : "Once you are diagnosed with type 1 or type 2 diabetes, you have it for the rest of your life. To stay healthy, keep your blood sugar, blood pressure, and cholesterol under good control. To do so, eat healthy, be physically active, and take your prescribed medications. Also get the tests and checks you need to detect complications early and treat them aggressively.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Should I always carry glucose tablets?",
    "answer" : "Your risk for hypoglycemia depends on the category of blood glucose-lowering medication(s) you take, not your type of diabetes. Some medications can cause hypoglycemia, including insulin; those in the sulfonylurea category, such as glyburide (Diabeta, Glynase, Micronase), glipizide (Glucotrol), and glimepiride (Amaryl); and those in the glinide category, such as repaglinide (Prandin) and nateglinide (Starlix). If you take one of these medications, always carry treatment. Most of the commonly used blood glucose-lowering medications for type 2 diabetes don’t cause hypoglycemia.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Is it true that complications of diabetes can be delayed and even prevented?",
    "answer" : "Yes! Research shows that the earlier your diabetes is diagnosed and the sooner you start to aggressively get your blood sugar, blood pressure, and cholesterol into target ranges, the healthier you can be over the years. To stay healthy and detect any complications early, make sure your health care provider orders all the tests and checks you need. Let your provider know if you have any signs or symptoms of a potential problem. Today, diabetes complications don’t need to happen.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Will I need to be on insulin the rest of my life? Why can’t I take pills instead?",
    "answer" : "If you have type 2 diabetes and were put on insulin, it’s likely you need it to bring your blood sugar down farther than pills could. In this case, you’ll likely need to take insulin injections the rest of your life. If, however, you started taking insulin when you had an infection, needed surgery, or were hospitalized for a medical reason, your need for insulin may be temporary. These situations raise stress, and stress can raise blood sugar levels. When the stress abates, you may be able to taper or stop taking insulin and get back to your previous medication regimen.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "If I had gestational diabetes that went away, should I worry?",
    "answer" : "Unfortunately, your risk of developing type 2 diabetes after gestational diabetes increases substantially -- between 20 percent and 50 percent. (Gestational diabetes occurs when hormones that help a baby's placenta develop interfere with the mother's insulin, resulting in higher blood sugars. It occurs in about 4 percent of U.S. pregnancies each year.) Your personal odds depend upon other factors like ethnicity, genetics, and weight. Losing weight after you've had a baby can help limit your risk.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : ". Can a person have both type 1 and type 2 diabetes at the same time?",
    "answer" : "Generally speaking, we do not diagnose both disorders in the same individual. If people have type 1 diabetes,they are completely lacking effective circulating insulin. By definition, this is not the case in people with type 2 diabetes, so having the one disorder effectively rules out the other. However, people with type 1 diabetes may be prone to the same metabolic problems as those with type 2 diabetes.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Does stress affect my risk of getting diabetes?",
    "answer" : "The perception of stress differs greatly among individuals. What one person may perceive as stressful, another may not. For this reason, stress is quite hard to measure in real-life situations. Artificial measures of accepted stress, such as electric shocks or deprivation of sleep, are very hard to apply to day-to-day life. However, people who report that they are more stressed, regardless of the actual nature of the stress itself, are more likely to suffer from diabetes.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What other factors increase my risk of getting diabetes?",
    "answer" : "Besides excess weight, hereditary risk, and lack of exercise, another factor that can increase the risk of developing diabetes is the use of certain medications. Among these medications, the type associated most strongly with increased risk are the steroids(also called glucocorticoids), whose members include prednisone, methylprednisolone, hydrocortisone, and dexamethasone. The steroids belong to a class of naturally occurring stress hormones known as counterregulatory hormones, which prepare the body to Combat stress. They tend to raise blood sugar.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Are there any natural herbs, minerals,or other remedies that prevent diabetes?",
    "answer" : "While it would be premature to answer yes to this question, it does appear that certain compounds can favorably impact the blood sugar and may have the potential to delay or prevent diabetes. Those for whom there is at least some evidence include uncooked walnuts, gymnema sylvestre (also known as gurmarbooti or gurmar), green tea, and certain compounds of chromium, zinc, and vanadium. While it is not known how most of these compounds work, the metallic compounds may work by facilitating the body’s mechanism for releasing insulin, or responding to insulin.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What is non-diabetic hypoglycemia?",
    "answer" : "Hypoglycemia is the condition when your blood glucose (sugar) levels are too low. It happens to people with diabetes when they have a mismatch of medicine, food, and/or exercise. Non-diabetic hypoglycemia, a rare condition, is low blood glucose in people who do not have diabetes. There are two kinds of non-diabetic hypoglycemia: Reactive hypoglycemia, which happens within a few hours of eating a meal Fasting hypoglycemia, which may be related to a disease",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What causes non-diabetic hypoglycemia?",
    "answer" : "The two kinds of non-diabetic hypoglycemia have different causes. Researchers are still studying the causes of reactive hypoglycemia. They know, however, that it comes from having too much insulin in the blood, leading to low blood glucose levels.",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "What is Reactive hypoglycemia and its cause?",
    "answer" : "Having pre-diabetes or being at risk for diabetes, which can lead to trouble making the right amount of insulin\nStomach surgery, which can make food pass too quickly into your small intestine\nRare enzyme deficiencies that make it hard for your body to break down food",
    "consultNow" : ""
  },
{
    "category" : "",
    "Name of doctor" : "",
    "question" : "Fasting hypoglycemia",
    "answer" : "Medicines, such as 1. Salicylates (a type of pain reliever) 2. Sulfa drugs (an antibiotic) 3. Pentamidine (to treat a serious kind of pneumonia) 4. quinine (to treat malaria) 5. Alcohol, especially with binge drinking 6. Serious illnesses, such as those affecting the liver, heart, or kidneys 7. Low levels of certain hormones, such as cortisol, growth hormone, glucagon, or epinephrine 8. Tumors, such as a tumor in the pancreas that makes insulin or a tumor that makes a similar hormone called IGF-II",
    "consultNow" : ""
  }];

qandasKalpana.forEach(function(qanda){
  qanda.consultNow = qanda.category.toLowerCase() == 'yes';
  qAndAModels.push(qanda);
});
console.log(qandasKalpana.length, qAndAModels.length);


module.exports = function() {
    return qAndAModels;
};