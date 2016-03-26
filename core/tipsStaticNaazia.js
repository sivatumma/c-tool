var _ = require('underscore');
var tipModels = [];

var tipsNaazia = [{
    "EXERCISE" : "",
    "FOOD" : "Night time snacking! Snacking at night can be a tricky issue and is usually ends up being regretful , here's what you need to make it more merry, have seed mixes handy, seeds like sunflower,flax,watermelon and chia seeds can be mixed in equal proportions an can be had as it is, as a health snack, or can be sprinkled over a salad to make it more healthy and wholesome, another go-to night snack can be a protein smoothie, with nuts, low fat milk, and some whey made into a smoothie like consistency by adding a tsp of oats to it",
    "STRESS" : "",
    "DO THIS NOT THAT" : "switch fried salted nuts with dry roasted ones , toss them into your salads or make them your go-to snack",
    "TRY A RECIPE/SALAD DAY" : "Salad inspiration! Toss in tomato wedges, grated cucumber,basil, Drizzles with apple cider vinegar and olive oil; and season with pinch of pepper. For a bowl full of goodness",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "Skip breakfast for quick weight loss! Now that’s a very popular myth! Skipping breakfast never helps, infact skipping any meal helps you in no way,skipping breakfast specially , lowers your metabolism and make you indulge in the next meal that you have , thus shooting blood sugar levels instantly , something that one being a diabetic should always avoid"
  },
{
    "EXERCISE" : "",
    "FOOD" : "Split your 3 large meals into 6 small frequent healthy meals, overindulging can shoot up your sugar level and adds up unwanted calories,adequate breakfast at 8/9 followed by a mid morning snack like at 11am, can help overindulging during lunch time and keeps the blood sugar level in check",
    "STRESS" : "",
    "DO THIS NOT THAT" : "Avoid sugar : Flavor your oatmeal with cinnamon , a spice thought to naturally aid in lowering blood sugar, spinkle a pinch or two in your bowl of oatmeal to boost your metabolism, its loaded with antioxidants,reduces bad cholesterol, and can increase insulin sessitivity in your body, which means your body can sense the insulin produced better thus helping keep blood sugar level in check",
    "TRY A RECIPE/SALAD DAY" : "Salad inspiration! High pro- throw handful of bean sprouts into a bowl of chopped tomato, cucmner,mint,corainder,and thinly sliced yellow bell pepper , with hald a lemon zest, toss them all together for some healthy goodness",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "MYTH: You must avoid sugar at all costs. Fact: The good news is that you can enjoy your favorite treats as long as you plan properly and limit those hidden sugars in many packaged foods. Dessert doesn’t have to be off limits, as long as it’s a part of a healthy meal plan or combined with exercise."
  },
{
    "EXERCISE" : "",
    "FOOD" : "Power protein in every meal! Including a protein component in every meal ou eat is important, as it keeps you full longer,helps build muscle mass and encourages fat burn include seafoods, lean meat, egg whites, yogurt, cheese, soy, nuts, or beans into your meals and snacks.",
    "STRESS" : "",
    "DO THIS NOT THAT" : "Eat regularly and keep a food diary If you’re overweight, you may be encouraged to note that you only have to lose 7% of your body weight to cut your risk of diabetes in half. And you don’t have to obsessively count calories or starve yourself to do it. Research shows that the two most helpful strategies involve following a regular eating schedule and recording what you eat.",
    "TRY A RECIPE/SALAD DAY" : "Summer salad inspiration! Zucinini-squash-cucumber-raw mango, grated in equal portions with lmon juice and salt pinch",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "MYTH: A high-protein diet is best. Fact: Studies have shown that eating too much protein, especially animal protein, may actually cause insulin resistance, a key factor in diabetes. A healthy diet includes protein, carbohydrates, and fats. Our bodies need all three to function properly. The key is a balanced diet"
  },
{
    "EXERCISE" : "",
    "FOOD" : "How about a healthy switch today! Switch your regular only wheat atta to an even better multigrain , here's a simple diabetic atta ,recipe to 1 kg of whole wheat flour add, 50gms each of oats,ragi,split bengal gram or chana daal, soy bean and about 15-20 gms of fenugreek seeds, gring to fine texture and use regularly",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "summery strawberry tomato salad- add tomato wedges to chopped starwberies, squeez a quarter lemon, black pepper , pinch of salt , share the love",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "MYTH: You have to cut way down on carbs. Fact: Again, the key is to eat a balanced diet. The serving size and the type of carbohydrates you eat are especially important. Focus on whole grain carbs since they are a good source of fiber and they are digested slowly, keeping blood sugar levels more even."
  },
{
    "EXERCISE" : "",
    "FOOD" : "Steel cut oats v/s Rolled oats: So which type of oat to go with, the answer is steel cut/irish style oats. These contain a higher amount of soluble fiber, which helps regulate your blood sugar and has a lower Glycemic index , avoid instant oats as they are highly processed and less in fiber, rolled oats on the other side has a glycemix index a little high than the steel cut ones",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Go Thai!Easy Green papaya salad- to grated green papaya, add lemon juice,chopped fresh red chilli, garlic pods,coriander,chopped tomato,pinch of sugar, salt, toss them all well and enjoy",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "MYTH: You’ll no longer be able to eat normally. You need special diabetic meals. Fact: The principles of healthy eating are the same—whether or not you’re trying to prevent or control diabetes. Expensive diabetic foods generally offer no special benefit. You can easily eat with your family and friends if you eat in moderation"
  },
{
    "EXERCISE" : "",
    "FOOD" : "Sleep your way to health! When you're sleep deprived, your body overproduces the appetite-stimulating hormone ghrelin but under-produces the hormone leptin, which tells you when you're full. Getting enough sleep may make you feel rested and full and keep you from doing unnecessary snacking.",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Recipe inspiration:Healthy lentil soup: High fiber , protein rich : In a large soup pot, heat oil over medium heat. Add onions, carrots, and celery; cook and stir until onion is tender. Stir in garlic, bay leaf, oregano, and basil; cook for 2 minutes. Stir in lentils, and add water and tomatoes. Bring to a boil. Reduce heat, and simmer for at least 1 hour. When ready to serve stir in spinach, and cook until it wilts. Stir in vinegar, and season to taste with salt and pepper, and more vinegar if desired.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "If you are overweight or obese, you will eventually develop type 2 diabetes. Fact: Being overweight is a risk factor for developing this disease, but other risk factors such as family history, ethnicity and age also play a role. Unfortunately, too many people disregard the other risk factors for diabetes and think that weight is the only risk factor for type 2 diabetes. Most overweight people never develop type 2 diabetes, and many people with type 2 diabetes are at a normal weight or only moderately overweight. - See more at: http://www.diabetes.org/diabetes-basics/myths/#sthash.eBgtDv2i.dpuf"
  },
{
    "EXERCISE" : "",
    "FOOD" : "Alcohol watch! While moderate amounts of alcohol may cause blood sugar to rise, excess alcohol can actually decrease your blood sugar level -- sometimes causing it to drop into dangerous levels, especially for people with type 1 diabetes,Alternate each alcoholic drink with a glass of water. This helps keeps you hydrated and clear-headed, so you can keep track of how much you’re drinking",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Baked Kale/Spinach Chips : Preheat an oven to 350 degrees F (175 degrees C). Line a non insulated cookie sheet with parchment paper. With a knife or kitchen shears carefully remove the leaves from the thick stems and tear into bite size pieces. Wash and thoroughly dry kale with a salad spinner. Drizzle kale with olive oil and sprinkle with seasoning salt.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "Myth: Eating too much sugar causes diabetes. Fact: The answer is not so simple. Type 1 diabetes is caused by genetics and unknown factors that trigger the onset of the disease; type 2 diabetes is caused by genetics and lifestyle factors. Being overweight does increase your risk for developing type 2 diabetes, and a diet high in calories from any source contributes to weight gain. Research has shown that drinking sugary drinks is linked to type 2 diabetes. The American Diabetes Association recommends that people should avoid intake of sugar-sweetened beverages to help prevent diabetes. Sugar-sweetened beverages include beverages like: regular soda fruit punch fruit drinks energy drinks sports drinks sweet tea other sugary drinks. These will raise blood glucose and can provide several hundred calories in just one serving! See for yourself: Just one 12-ounce can of regular soda has about 150 calories and 40 grams of carbohydrate. This is the same amount of carbohydrate in 10 teaspoons of sugar! One cup of fruit punch and other sugary fruit drinks have about 100 calories (or more) and 30 grams of carbohydrate. - See more at: http://www.diabetes.org/diabetes-basics/myths/#sthash.eBgtDv2i.dpuf"
  },
{
    "EXERCISE" : "",
    "FOOD" : "Stick to regular meal times: Regular eating habits helps your body regulate blood sugar levels efficiently , be reqular with your meals and meal time, typical gap between two meals should ideally be 2-3 hours , which means breakfast at 8, mid morning snack at 11 and lunch ideally between 1-1:30, maintain a food diary , have regular reminders to get used to eating on time",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Easy Apple Coleslaw : In a large bowl, combine cabbage, red apple, green apple, carrot, red bell pepper, and green onions. In a small bowl, mix together mayonnaise, brown sugar, and lemon juice. Pour dressing over salad.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "Myth: People with diabetes should eat special diabetic foods. Fact: A healthy meal plan for people with diabetes is generally the same as a healthy diet for anyone – low in saturated and trans fat, moderate in salt and sugar, with meals based on lean protein, non-starchy vegetables, whole grains, healthy fats and fruit. Diabetic and \"dietetic\" foods generally offer no special benefit. Most of them still raise blood glucose levels, are usually more expensive and can also have a laxative effect if they contain sugar alcohols."
  },
{
    "EXERCISE" : "",
    "FOOD" : "Fibre up! Fibre helps Normalize bowel movements , Lowers cholesterol levels,Helps control blood sugar levels,Aids in achieving healthy weight etc , a healthy adult requires 25-30 gm of fiber / day, some good sources of fiber are oats, beans,whole grains,fruits , seeds like sunflower , flax etc , make yourself a health bowl of whole grain cereal , with nuts, and seeds sprinkled to have a health hearty bowl of good health",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Zesty Quinoa Salad: Bring quinoa and water to a boil in a saucepan. Reduce heat to medium-low, cover, and simmer until quinoa is tender and water has been absorbed, 10 to 15 minutes. Set aside to cool.Whisk olive oil, lime juice, cumin, 1 teaspoon salt, and red pepper flakes together in a bowl.Combine quinoa, tomatoes, black beans, and green onions together in a bowl. Pour dressing over quinoa mixture; toss to coat. Stir in cilantro; season with salt and black pepper. Serve immediately or chill in refrigerator.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "Myth: If you have diabetes, you should only eat small amounts of starchy foods, such as bread, potatoes and pasta. Fact: Starchy foods can be part of a healthy meal plan, but portion size is key. Whole grain breads, cereals, pasta, rice and starchy vegetables like potatoes, yams, peas and corn can be included in your meals and snacks. In addition to these starchy foods, fruits, beans, milk, yogurt, and sweets are also sources of carbohydrate that you need to count in your meal plan. Wondering how much carbohydrate you can have? A place to start is about 45-60 grams of carbohydrate per meal. However, you may need more or less carbohydrate at meals depending on how you manage your diabetes. You and your health care team can figure out the right amount for you. Once you know how much carb to eat at a meal, choose your food and the portion size to match."
  },
{
    "EXERCISE" : "",
    "FOOD" : "Salt check! Decreasing the amount of sodium in the diet can help you lower your blood pressure. Lowering blood pressure also means decreased risk for heart attack or stroke, both of which are common diabetes complications , cutting down on salt can be tricky, as most of the salt consumed comes from the invisible sources of salt like pickles, papads, snacks rich in monosodium glutamate (MSG) , canned & preserved foods, processed meats like sausages , ready to make soups and other convinience foods, cut down on such ready to eat convinient foods , use low sodium salt available in the market , eat pickles and chutneys in moderation and avoid completely if possible",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Spinach and Leek White Bean Soup: Heat olive oil in a large saucepan or soup pot over medium heat. Add the leeks and garlic; saute until tender, about 5 minutes. Stir in the chicken broth, cannellini beans, bay leaves and cumin. Bring to a boil, then reduce the heat to low, and stir in the couscous. Cover, and simmer for 5 minutes. Stir in spinach and season with salt and pepper. Serve immediately.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "Myth: People with diabetes can't eat sweets or chocolate. Fact: If eaten as part of a healthy meal plan, or combined with exercise, sweets and desserts can be eaten by people with diabetes. They are no more \"off limits\" to people with diabetes than they are to people without diabetes. The key to sweets is to have a very small portion and save them for special occasions so you focus your meal on more healthful foods."
  },
{
    "EXERCISE" : "",
    "FOOD" : "Never drink on an empty stomach. Food helps slow down the rate at which your body absorbs alcohol, meaning glucose production isn’t affected as dramatically, Try switching to low alcohol drinks. These are often lighter, healthier alternatives to your favourite beverages, and can help you keep your sugar consumption in check",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Black Bean Salsa : In a large bowl, mix together black beans, Mexican-style corn, diced tomatoes with green chile peppers, tomatoes and green onion stalks. Garnish with desired amount of cilantro leaves. Chill in the refrigerator at least 8 hours, or overnight, before serving.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "Myth: If you have type 2 diabetes and your doctor says you need to start using insulin, it means you're failing to take care of your diabetes properly. Fact: For most people, type 2 diabetes is a progressive disease. When first diagnosed, many people with type 2 diabetes can keep their blood glucose at a healthy level with oral medications. But over time, the body gradually produces less and less of its own insulin, and eventually oral medications may not be enough to keep blood glucose levels normal. Using insulin to get blood glucose levels to a healthy level is a good thing, not a bad one."
  },
{
    "EXERCISE" : "",
    "FOOD" : "Police your portions! : Portion control is an art, an art when mastered can help you make smart food choices, to keep a check on the portion size simply cut down huge helping of food to half, eat slowly , and eat in a gen colour plate, yes you heard it right, green colour is an appetite suppresant , that doesnt mean starving yourself but eating controlled portions of food",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Summer Bean Salsa: Stir together the black beans, tomatoes, and corn. Add the onion, mango, lime juice, and olive oil and stir. Garnish with cilantro to serve.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "People with diabetes can drink alcohol in moderation. The same guidelines for alcohol that apply to the general public also apply to most people with diabetes: If you want to drink alcohol, do so in moderation. If you take a blood glucose-lowering medication that can cause hypoglycemia, make sure you check your glucose level prior to drinking alcohol, and carry something with you to treat hypoglycemia should it occur. However, if you take medications and have other medical issues that might interact negatively with alcohol, check with your health care provider as a precaution."
  },
{
    "EXERCISE" : "",
    "FOOD" : "Rate Your Plate! Take a good hard look at your plates -- the foods you choose and the portions you eat. Rate your plates to see if they measure up. For lunch and dinner, do you fill half your plate with vegetables, a quarter with starch or grain, and the remaining quarter with a lean protein source like lean meats or beans? Is there a serving of fruit and low-fat milk or yogurt at the majority of your meals? Do you choose whole grains instead of refined varieties?",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Whole Grain Pancakes: In a large bowl, stir together the whole wheat flour, oats, cornmeal, flaxseed meal, brown sugar, baking powder, and baking soda. Pour in buttermilk and egg. Stir just until smooth. Heat a large skillet or griddle over medium heat. Coat with cooking spray. Drop batter by large spoonfuls onto the griddle, and cook until bubbles form and the edges are dry. Flip, and cook until browned on the other side. Repeat with remaining batter.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "Aspartame has not been shown to cause Alzheimer's disease. Negative allegations that associate aspartame with dementia are not based on science. Leading health and diabetes authorities—including the American Diabetes Association, the Academy of Nutrition and Dietetics, and the American Academy of Pediatrics—agree that aspartame, along with other low-calorie sweeteners approved by the FDA and other regulatory organizations around the world, are safe for people of all ages, including people with diabetes. The body breaks down aspartame into the amino acids, aspartic acid, and phenylalanine, as well as a small amount of methanol. These components are found naturally in foods such as meats, milk, fruits, and vegetables, and in higher amounts than what you'd consume drinking or eating aspartame. Your body uses these components in exactly the same way, whether they come from common foods or aspartame. Aspartame, along with other sugar substitutes, offers people with diabetes greater variety and flexibility in food choices and helps them satisfy sweet cravings."
  },
{
    "EXERCISE" : "",
    "FOOD" : "Healthy oils! eating more monounsaturated (Common sources: olive oil, avocadoes and nuts) and polyunsaturated sources(nuts, seeds, fish etc) is more important than eating less total fat. The message to limit the unhealthful saturated fats (including trans fats) is particularly pertinent and strong for people with diabetes. Saturated fat is known to increase insulin resistance, the underlying cause of abnormal blood glucose, lipids, and blood pressure in people with prediabetes and type 2.",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Summer crunch salad In a bowl, toss mushrooms with half the lemon juice and set aside – the lemon juice will soften the mushrooms. Blanch the beans in boiling salted water for 5-6 mins until they still have a crunch, but they are not squeaky, then drain and cool in iced water. Toss the beans and mushrooms together in a bowl with the herbs and season with salt and pepper. Toss through the tomatoes, remaining lemon juice and the olive oil and scatter with Parmesan just before serving.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "Does Cinnamon Lower Blood Sugar? Maybe! It's a possibility that cinnamon lowers blood sugar. Regular ground cinnamon and cinnamon sticks were used in studies to test whether cinnamon lowers blood sugar. In the studies, the suggested intake amount to experience a decrease in blood sugar was 1/2 teaspoon per day. However, the research on cinnamon is not conclusive, and the use of cinnamon has not become part of common clinical practice. More research is needed before conclusions can be made about cinnamon's role in treating diabetes."
  },
{
    "EXERCISE" : "",
    "FOOD" : "Fruit first! Uncontrolled sweet cravings? No worries , you have fruits to the rescue! Fruits are healthy , loaded with goodness and have healthy calories as compared to heavy desserts , also keep handy dry fruits like dry figs, peaches , dates ,cherries , raisins , plums etc to address those cravings in a healthy, satisfying and guilt free way",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Chickpea Salad with Curried Yogurt Dressing: To make Dressing: whisk together yogurt, lemon juice, curry powder, and cayenne (if using) in small bowl. 2 | To make Salad: Toss together chickpeas, apple, celery, parsley, raisins, green onions, and walnuts in large bowl. Gently fold in Dressing. Season with salt and pepper, if desired. Serve with lemon wedges.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "Do Eggs Raise Cholesterol?: It's false. Eggs don't automatically raise cholesterol. People with diabetes can safely eat a few eggs a week. The number of eggs you should eat depends on your risk for or whether you have cardiovascular disease. Prepare eggs healthfully: The best way to cook is to scramble eggs in a nonstick pan, using a healthy liquid oil or oil spray, or poach them in water. A fried egg, especially one fried in butter, will contain some saturated fat from the butter. Consider frying an egg with a bit of vegetable oil instead of butter. There's very little saturated fat in an egg itself."
  },
{
    "EXERCISE" : "",
    "FOOD" : "When a person drinks alcohol, the body reacts to it as a toxin, and channels all energy into expelling it. This means that other processes are interrupted – including the production of glucose and the hormones needed to regulate it. This is most noticeable in heavy drinkers, as over time drinking too much alcohol decreases the effectiveness of insulin, which leads to high blood sugar levels",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Herbed French Lentil Salad: Combine lentils and 4 cups of water in a large saucepan. Bring to a boil and then reduce heat to low; simmer for about 20 minutes or until lentils are soft enough to eat, but still firm. Remove from heat and drain. In a large bowl, whisk together vinegar, olive oil, garlic, salt and pepper. Add lentils, zucchini, red pepper, and herbs and stir until combined. For best flavor, refrigerate at least 3 hours before serving.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : "Fruit and Blood Sugar: It's false. People with diabetes should eat fruit. While it's true that any food that contains carbohydrate (including fruit) will raise blood sugar if there’s not sufficient insulin (either made by the body or via injection) available, it doesn't mean you should eliminate healthy sources of carbs from your eating plan. One way to help keep your blood sugar under control is to make sure your portions of carbohydrate-containing foods aren't too large. When choosing fruit, opt for fresh fruit, frozen fruit with no added sugar, or canned fruit in light syrup or 100 percent fruit juice. The Dietary Guidelines for Americans recommend that everyone, including people with diabetes, eat about 2-1/2 cups of fruit per day. Fruits and vegetables, whether fresh, frozen, or canned, are excellent sources of important vitamins, minerals, and dietary fiber. In fact, most people don't eat enough fruits and vegetables, which provide essential nutrients such as vitamins A and C, potassium, and magnesium. Another plus: Fruits and vegetables are relatively low in calories."
  },
{
    "EXERCISE" : "",
    "FOOD" : "Spotting hidden sugar Being smart about sweets is only part of the battle, though. Sugar is also hidden in many packaged foods, fast food meals, and grocery store staples such as bread, cereals, sweet drinks, canned soups and vegetables, pasta sauce, margarine, instant mashed potatoes, frozen dinners, low-fat meals, and ketchup. By cutting back on the amount of hidden sugar you consume in these types of foods can even allow you to eat more of the sweet treats you crave. The first step is to learn how to identify hidden sugars on food labels.",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Cucumber Chickpea Salad with Lemony Tahini Dressing: Combine the chickpeas, cucumber, and mint leaves in a large bowl. In a small bowl, whisk together the tahini, lemon juice, and olive oil. Add a tablespoon (or two) of water if needed. (The dressing can be on the thick side because it will thin out a bit after you toss it with the salad.) Pour the dressing into the large bowl and toss to coat. Add salt to taste",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "Cut down on sodium by saying no to gravy, canned foods and processed foods When eating out, ask for no or less gravy with your mixed vegetable rice. Also, go easy on soups, dipping sauces and creamy salad dressings. Avoid canned foods and soups as they tend to contain lots of sodium. Canned beans for example, can contain as much as 500 mg of sodium per serving. However, there are some canned foods with lower sodium content. Look out for these foods that come with the healthier choice logo. Frozen peas and pasteurized milk are fine, but potato chips, processed meats (bacon, ham, luncheon meat) and frozen dinners are all too high in sodium.",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Cashew Cabbage Crunch Salad Chop cabbage into bite size pieces, add to large colander and toss with salt. Cover and set aside to drain (at least one hour). Meanwhile, in large bowl, whisk together vinegar, olive oil, maple syrup, Dijon mustard, garlic, onion, and caraway seeds to make a dressing. Set aside to marinate. Toss cabbage in colander to remove excess water, add to dressing mixture in bowl. Add carrot, edamame, cashews and avocado, toss together to combine and coat completely.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "ASIAN QUINOA SALAD Add water, quinoa, and salt to a medium saucepan and bring to a boil over medium heat. Boil for 5 minutes. Turn the heat to low and simmer for about 15 minutes, or until water is absorbed. Remove from heat and fluff with a fork. 2. Place the quinoa in a large bowl and add the cabbage, edamame, red pepper, carrots, and cucumber. Set aside. 3. In a small bowl, whisk together the soy sauce, sesame oil, rice wine vinegar, green onions, cilantro, sesame seeds, ginger, red pepper flakes, salt, and pepper. 4. Pour the dressing over the quinoa salad and stir to combine",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Rainbow Chopped Salad To prepare salad: Combine bell peppers, broccoli, carrots, radishes and onion in a medium bowl. Add 1/2 cup of the dressing and toss to coat. Refrigerate until ready to serve. (Refrigerate extra dressing for up to 1 week.)",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Mixed Vegetable Salad Platter: Grate the zucchini and carrot, chop the sun-dried tomatoes, finely slice the red cabbage and chop the parsley. Place into a bowl. In a separate small bowl whisk together the olive oil, lemon juice, salt, and pepper. Pour the vinaigrette over the vegetables and toss until evenly distributed. Put the mixture into a serving dish and top with olives and feta cheese. Serve family-style and enjoy! Top with freshly ground pepper and an extra drizzle of olive oil or vinaigrette if desired.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "California Spinach Salad Pile on the desired amount of spinach leaves in a salad bowl or plate. Slice up the avocado and the bell pepper, and add to salad. Sprinkle a handful of alfalfa sprouts on top. Make dressing. add a scoop of hung curd/Low fat greek yoghurt, pinch of pepper,1 tsp lime juice,handful of parsley,1 tsp olive oil, 1/2 finely chopped red pepper, throw all of the ingredients in a grinder and pulse until well-combined. If doing things by hand, chop all ingredients very finely and stir until well-combined. Drizzle over the salad and toss to combine.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Veggie-Packed Quinoa : In a medium saucepan, bring quinoa and 2 cups water to a boil. Reduce heat to simmer and continue cooking, covered, until water is absorbed, about 10 to 15 minutes. While quinoa is cooking, sauté spinach, onions, chickpeas, and mushrooms in a skillet with 1 drizzle olive oil. Season as desired (we like Sriracha, curry powder, paprika, or oregano). When quinoa is cooked, add to skillet with veggies and stir until well combined",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Chickpea, Kale, and Tomato Soup: Heat a medium-sized pot with tall sides over medium-high heat. Add olive oil, onion, zucchini, and ginger. Season to taste with salt. Once onion is translucent, add enough water to cover vegetables, canned tomatoes (with juice), kale, tomato, chickpeas, chili, and cumin. Bring to a boil. Reduce heat to low, covered, and let simmer for 25 minutes, stirring occasionally. Enjoy chunky style as-is, or wait for soup to cool and blend until creamy.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Quinoa and Vegetable Soup: In a saucepan, heat olive oil and sauté few broccoli florets,mushroom dices,asparagus,celery,carrot,onion until they begin to soften. Add quinoa, 2 cups of water, and seasonings like pepper,oregano etc, and bring to a boil. Cover and let simmer for 10 minutes, or until quinoa is fully cooked.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Quick Chilled Cantaloupe Soup with Lime & Basil:add cubed melon, 1/2 cup plain yogurt 1/8 tsp ground (powdered) ginger,Zest of half lime,Juice of 1/2 lime 1 tsp honey (optional) 2-3 mint leaves (optional, but delicious) 2-3 basil leaves A pinch of salt 2-3 Tbsp water if needed to thin the soup to desired consistency, blend all the above ingredients combined togther to form a perfectly viscous consistency as desired",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Chilled Cucumber Soup with Mint & Yogurt: In a blender add 1/2 cup fresh thick curd, add chopped cucumber , mint leaves (10-15), Half green chillie, a pinch of salt , 1 cup water and blend to a very smooth consistency, enjoy with garlic bread or as it is",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Ginger and Carrot Soup : Warm oil in a pot over medium heat. Add onion; sauté until softened, 6 to 8 minutes. Add ginger and garlic; sauté until fragrant, about 1 minute. 2. Raise heat to medium-high; stir in carrots. Pour broth into pot, cover and bring to a simmer. Remove cover, reduce heat to medium to maintain a simmer and cook until carrots are very tender, about 25 minutes. Remove soup from heat and let cool slightly. 3. Working in batches, purée soup in a blender until smooth. Transfer to a large bowl, cover and refrigerate until chilled, at least 2 hours. 4. Just before serving, stir in lime juice and yogurt. Season with salt and pepper. Serve chilled, garnished with lime wedges, if desired.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Kitchen Spices Tea A special detox tea which includes a combination of ingredients helpful in improving digestion and breaking down fat. Along with it, these powerful ingredients will help in removing ama, the key to loosing excess fat, and hence unclogging the various channels in our body. Main Ingredients:  ½ teaspoon of whole cumin seeds  ½ teaspoon of whole coriander seeds  ½ teaspoon of whole fennel seeds  Pinch of cinnamon powder • The best time is to prepare it early morning. • Take four-five cups of fresh water and boil it. • Now add the above mentioned ingredients to a container (with a lid). • Mix the boiled water and these seeds. • Put the mixture on heat and boil it for another five minutes without removing the lid. • Strain out the seeds and pour the liquid into a thermos or glass. • Drink the mixture throughout the day taking small sips, but it works best when it is either warm or hot.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Cinnamon Tea The level of blood sugar causes variation on body weight directly as it affects the hunger and energy levels. A balanced blood sugar level indicates that the individual will not likely have a disproportionally large appetite. This means that the body will be more apt to use fat rather than storing it. As the research continues, Preliminary studies have shown positive results about the fact that cinnamon helps in manage blood sugar levels. Wouldn’t you love a spicy tea everyday to boost your weight loss program? Main Ingredients:  1 teaspoon of ground cinnamon  1 cinnamon stick  1 cup of fresh water • Place the cinnamon in a mug. • Boil one cup of water. • Cover the mixture with boiling water. • Steep for at least ten to fifteen minutes. • Strain and drink one or two times a day.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Ginseng Tea Ginseng, one of other eleven perennial plants having fleshy roots belonging to the genus Panax, is effective in losing weight if you have excess of vata dosha. The best ones out of various types of ginseng are American ginseng and Asian or Korean ginseng. Ginseng is known for fighting fatigue, increasing metabolism rate, boosting energy levels and mental alertness. This is clinically proved that patients, who were given ginseng daily, were able to fight the crippling fatigue caused by chemotherapy. Without proper exercise, it’s almost impossible to lose weight in a healthy way. Along with providing energy, this tea helps in balancing blood sugar levels. Main Ingredients:  1 teaspoon or 5 grams of chopped American or Korean ginseng  1 cup of fresh water  Raw honey or lemon (to taste) • 1 teaspoon of chopped ginseng should be measured with 1 teacup of water. • Take 1 cup of boiling water and pour over the ginseng. • Steep for approximate five to eight minutes. • Strain and drink the tea two times daily.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Sweet Potato-and-Ginger Soup 3 cups water 3 cups peeled, diced sweet potato 1/4 cup julienne-cut peeled fresh ginger 2 tablespoons sugar 3/4 teaspoon salt Preparation Bring water to a boil in a large saucepan. Add remaining ingredients. Cover, reduce heat, and simmer 30 minutes. Place half of sweet potato mixture in a blender; process until smooth. Return pureed mixture to saucepan; cook over medium heat until thoroughly heated.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Lentils And Spinach: Heat oil in a heavy pan over medium heat. Saute onion for 10 minutes or so, until it begins to turn golden. Add minced garlic and saute for another minute or so. Add lentils and water to the saucepan. Bring mixture to a boil. Cover, lower heat, and simmer about 35 minutes, until lentils are soft ( this may take less time, depending on your water and the lentils). Meanwhile cook the spinach in microwave according to package directions. Add spinach, salt and cumin to the saucepan. Cover and simmer until all is heated, about ten minutes. Grind in plenty of pepper and press in extra garlic to taste.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Banana Ginger Smoothie: Soothe digestion, heartburn, nausea, and other stomach trouble with the fresh ginger in this natural remedy smoothie recipe. SERVINGS: 2 1 banana, sliced ¾ c (6 oz) vanilla yogurt 1 Tbsp honey ½ tsp freshly grated ginger COMBINE the banana, yogurt, honey, and ginger. Blend until smooth",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Cinnamon Apple Smoothie: coconut water almonds vanilla extract 1 teaspoon ground cinnamon 1 chopped apple 1/2 scoop unsweetened protein powder 1 tablespoon flaxseed meal (ground flaxseed) DIRECTIONS Combine all ingredients into a blender, and pulse for approximately 10-15 seconds. If you're going to drink it immediately, add three ice cubes to chill it. If you're preparing ahead of time, chill in the fridge overnight.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Carrot-Mango Green Tea Smoothies: In a small saucepan bring water to boiling. Add carrots; cover and cook for 10 to 15 minutes or until very tender, adding Carrot-Mango Green Tea Smoothies: ginger slices for the last 2 minutes of cooking. Remove from the heat and add tea bags. Cover and steep for 4 minutes. Remove tea bags, squeezing out all the tea. Remove ginger slices. Set pan on a hot pad in the refrigerator for 10 minutes. Transfer carrot mixture to a blender. Add mango, honey, and chia (if using). Cover and blend until smooth. Pour into glasses to serve.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Green Smoothie: Handful of spinach 3 slices of cucumber 1/2 stalk of celery 1 teaspoon of organic cinnamon 2 frozen strawberries 1 tablespoon of flax seed 1/2 cup of blueberries(frozen or fresh) 3 tablespoon of organic rolled oats 1 tablespoon of raw cacao 6 ounces of unsweetened almond milk Blast all the ingredients in a Nutri Bullet and enjoy! Makes around 8 to 10 ounces.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  },
{
    "EXERCISE" : "",
    "FOOD" : "",
    "STRESS" : "",
    "DO THIS NOT THAT" : "",
    "TRY A RECIPE/SALAD DAY" : "Wheatgrass Smoothie: green grapes wheatgrass, torn Apple pineapple slices ¼ cup ice ½ cup soy milk (use more as needed) , In blender, combine all ingredients and blend until smooth.",
    "GO NATURAL" : "",
    "RATE YOUR DAY" : "",
    "MYTHS BUSTED" : ""
  }];


tipsNaazia.forEach(function(tip) {
    for (key in tip) {
        if (tip[key].length > 0) {
            var t = {};
            t.tip = tip[key];
            t.category = key;
            t.createdBy = "naazia.kauser@callhealth.co.in";
            t.suitableForDisease = "Diabetes";
            tipModels.push(t);
        }
    }
});

console.log(tipsNaazia.length);
module.exports = function() {
    return tipModels;
};