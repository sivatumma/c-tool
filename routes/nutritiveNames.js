var _ = require('lodash');

module.exports = function(q) {
	var nutritives = ["Bajra",
		"Barley",
		"Italian millet",
		"Jowar",
		"Maize dry",
		"Maize tender",
		"Panivaragu",
		"Ragi",
		"Rice Parboiled, hand pounded.",
		"Rice parboiled ,milled",
		"Rice, raw, hand pounded",
		"Rice raw milled",
		"Rice bran",
		"Rice flakes",
		"Rice Puffed",
		"Samai",
		"Sanwa millet",
		"Varagu",
		"Wheat bulgar(parboiled)",
		"Wheat whole",
		"Wheat flour Whole",
		"Wheat flour refines",
		"Wheat germ",
		"Wheat semolina",
		"Wheat vermicelli",
		"Wheat bread(brown)",
		"Wheat bread(white)",
		"Bengal gram whole",
		"Bengal gram dal",
		"Bengal gram roasted",
		"Black gram dal",
		"Cow pea",
		"Field beans dry",
		"Green gram whole",
		"Green gram dal",
		"Horse gram whole",
		"Kesari dal",
		"Lentil",
		"Moth beans",
		"Peas green",
		"Peas dry",
		"Peas roasted",
		"Red gram dal",
		"Red gram tender",
		"Soy bean",
		"Agathi",
		"Amaranth Gangeticus tender",
		"Amaranth Gangeticus stem",
		"Amaranth Paniculatus",
		"Amaranth Spinosos",
		"Amaranth viridis",
		"Ambatchuka",
		"Bathua leaves",
		"Beet greens",
		"Betel leaves",
		"Brussels sprouts",
		"Cabbage",
		"Carrot leaves",
		"Celery leaves",
		"Celery stalk",
		"Chekkurmanis",
		"Colocasia leaves (black variety)",
		"Colocasia leaves(green variety)",
		"Coriander leaves",
		"Cow pea leaves",
		"Curry leaves",
		"Drum stick leaves",
		"Fenugreek leaves",
		"Fetid cassia fresh",
		"Garden cress",
		"Gogu",
		"Ipomoea leaves",
		"Knol-khol greens",
		"Kuppameni",
		"Lettuce",
		"Manatakkali leaves",
		"Mayalu",
		"Mint",
		"Mukarrate keerai",
		"Mustard leaves",
		"Nerringi",
		"Parsley",
		"Paruppu keerai",
		"Ponnanganni",
		"Radish leaves",
		"Radish leaves table",
		"Rape leaves",
		"Safflower leaves",
		"Shepu",
		"Spinach",
		"Tamarind leaves tender",
		"Turnip greens",
		"Banana rhizome",
		"Beetroot",
		"Carrot",
		"Colocasia",
		"Mango ginger",
		"Onion big",
		"Onion small",
		"Parsnip",
		"Potato",
		"Radish pink",
		"Radish table",
		"Radish white",
		"Sweet potato",
		"Tapioca",
		"Tapioca chips dried",
		"Turnip",
		"Yam elephant",
		"Yam ordinary",
		"Yam wild",
		"OTHER VEGETABLES",
		"Ash gourd",
		"Beans( scarlet runner)",
		"Bitter gourd",
		"Bitter gourd small",
		"Bottle gourd",
		"Brinjal",
		"Broad beans",
		"Cauliflower",
		"Cho cho marrow",
		"Cluster beans",
		"Colocasia stem",
		"Cow pea pods",
		"Cucumber",
		"Double beans",
		"Drum stick",
		"Field beans tender",
		"French beans",
		"Ghosala",
		"Gaint chillies",
		"Jack fruit ,tender",
		"Jack fruit, seeds",
		"Kankoda",
		"Kovai",
		"Knoll-kohl",
		"Ladies finger",
		"Leeks",
		"Lotus stem dry",
		"Mango green",
		"Onion stalks",
		"Papaya green",
		"Parwar",
		"Pink beans",
		"Plantain flower",
		"Plantain green",
		"Plantain stem",
		"Pumpkin fruit",
		"Ridge gourd",
		"Snake gourd",
		"Sundakkai dry",
		"Sword beans",
		"Tinda tender",
		"Tomato green",
		"Vegetable marrow",
		"Water chest nut fresh",
		"Almond",
		"Areca nut",
		"Cashew nut",
		"Chilgoza",
		"Coconut dry",
		"Coconut fresh",
		"Coconut milk",
		"Coconut water",
		"Coconut meal deoiled.",
		"Gingerly seeds",
		"Groundnut",
		"Groundnut roasted",
		"Linseed seeds",
		"Mustard seeds",
		"Niger seeds",
		"Pistachio nut",
		"Piyal seeds",
		"Sunflower seeds",
		"Walnut",
		"Asafetida",
		"Cardamom",
		"Chillies dry",
		"Chillies green",
		"Cloves dry",
		"Cloves green",
		"Coriander",
		"Cumin seeds",
		"Fenugreek seeds",
		"Garlic dry",
		"Ginger fresh",
		"Mace",
		"Nutmeg fruit",
		"Omum",
		"Pepper green",
		"Tamarind pulp",
		"Turmeric",
		"Ambada",
		"Amla",
		"Apple",
		"Apricot fresh",
		"Apricot dried",
		"Bael fruit",
		"Banana ripe",
		"Bilimbi",
		"Bread fruit",
		"Bullock’s heart",
		"Cape gooseberry",
		"Cashew fruit",
		"Cherries red",
		"Currants black",
		"Dates dried",
		"Figs (ficus carcia)",
		"Grapes blue variety",
		"Grapes pale green variety",
		"Grape fruit marsh’s Seedless",
		"Grape fruit trimph",
		"Guava country",
		"Guava hill",
		"Jack fruit",
		"Jamb safed",
		"Jambu fruit",
		"Korukkapalli",
		"Lakuch",
		"Lemon",
		"Lemon sweet",
		"Lichi",
		"Lime",
		"Lime sweet Malta",
		"Lime sweet musambi",
		"Loquat",
		"Mahua ripe",
		"Mango ripe",
		"Melon musk",
		"Melon water",
		"Mulberry",
		"Orange",
		"Orange juice",
		"Palmyra fruit tender",
		"Papaya ripe",
		"Passion fruit",
		"Passion fruit juice",
		"Peaches",
		"Pears",
		"Parsimmon",
		"Phalsa",
		"Pine apple",
		"Plum",
		"Pomegranate",
		"Pummelo",
		"Quince",
		"Raisins",
		"Raspberry",
		"Rose apple",
		"Sapota",
		"Seethaphal",
		"Strawberry",
		"Tomato ripe",
		"Tomatillo",
		"Tree tomato",
		"Wood apple",
		"Zizphus",
		"Air",
		"Bacha",
		"Bam",
		"Beley",
		"Bhanger fresh",
		"Bhangan Bata",
		"Bhekti fresh",
		"Bhole",
		"Boal",
		"Cat fish",
		"Chital",
		"Crab muscle",
		"Fouli",
		"Hilsa",
		"Horse mackerel",
		"Kalabasu",
		"Katla",
		"Khoyra fresh",
		"Koi",
		"Lata",
		"Magur",
		"Mrigal",
		"Mullet",
		"Pabda",
		"Pangas",
		"Parsey fresh",
		"Pomfrets white",
		"Prawn",
		"Puti",
		"Ribbon fish fresh",
		"Rohu",
		"Sardine",
		"Sarputi",
		"Shark",
		"Shrimp(small., dried)",
		"Seer",
		"Singhi",
		"Sole",
		"Tengra fresh",
		"White bait",
		"Beef meal",
		"Beef muscle",
		"Buffalo meat",
		"Egg, duck",
		"Egg, hen",
		"Fowl",
		"Goat meat(lean)",
		"Liver Goat",
		"Liver Sheep",
		"Mutton",
		"Pork, muscle",
		"Milk ass’s",
		"Milk buffalo’s",
		"Milk cow’s",
		"Milk goat’s",
		"Milk human",
		"Curds (cow’s milk)",
		"Skimmed milk ,liquid",
		"Channa,cow’s milk",
		"Cheese",
		"Khoa(whole cow milk)",
		"Skimmed milk powder (cow’s milk)",
		"Whole milk powder (cow’s milk)",
		"Butter",
		"Ghee(cow)",
		"Ghee(buffalo)",
		"Hydrogenated oil(fortified)"
	];

	return _.filter(nutritives, function(x) {
		console.log(q);
		return x.toLowerCase().startsWith(q.toLowerCase());
	});
}