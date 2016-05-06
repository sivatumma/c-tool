var _ = require('underscore');
var exerciseModels = [];
var count = 0;
var exercisesKalpana = {
  "1" : {
    "itemNumber" : 1,
    "name" : "Aerobics class",
    "met" : 7
  },
  "2" : {
    "itemNumber" : 2,
    "name" : "Aerobics, general",
    "met" : 3.3
  },
  "3" : {
    "itemNumber" : 3,
    "name" : "Aerobics, high impact",
    "met" : 7
  },
  "4" : {
    "itemNumber" : 4,
    "name" : "Aerobics, low impact",
    "met" : 2.3
  },
  "5" : {
    "itemNumber" : 5,
    "name" : "Aerobics, with 10-12 inch step",
    "met" : 7
  },
  "6" : {
    "itemNumber" : 6,
    "name" : "Aerobics, with 6-8 inch step",
    "met" : 7.5
  },
  "7" : {
    "itemNumber" : 7,
    "name" : "alisthenics / exercise - moderate",
    "met" : 6
  },
  "8" : {
    "itemNumber" : 8,
    "name" : "Arc Trainer , easy resistance 25, 120 steps per minute",
    "met" : 3
  },
  "9" : {
    "itemNumber" : 9,
    "name" : "Arc Trainer, intense, resistance 55, 120 steps per minute",
    "met" : 3.5
  },
  "10" : {
    "itemNumber" : 10,
    "name" : "Arc Trainer, light, resistance 15, 120 steps per minute",
    "met" : 3
  },
  "11" : {
    "itemNumber" : 11,
    "name" : "Arc Trainer, moderate, resistance 35, 120 steps per minute",
    "met" : 4
  },
  "12" : {
    "itemNumber" : 12,
    "name" : "Arc Trainer, vigorous, resistance 45, 120 steps per minute",
    "met" : 7
  },
  "13" : {
    "itemNumber" : 13,
    "name" : "Archery (non-hunting)",
    "met" : 3
  },
  "14" : {
    "itemNumber" : 14,
    "name" : "Ashtanga yoga",
    "met" : 3
  },
  "15" : {
    "itemNumber" : 15,
    "name" : "Automobile repair",
    "met" : 3.5
  },
  "16" : {
    "itemNumber" : 16,
    "name" : "Backpacking, general",
    "met" : 1.5
  },
  "17" : {
    "itemNumber" : 17,
    "name" : "Badminton, competitive",
    "met" : 8
  },
  "18" : {
    "itemNumber" : 18,
    "name" : "Badminton, social, general",
    "met" : 6
  },
  "19" : {
    "itemNumber" : 19,
    "name" : "Ballet Butt Plie",
    "met" : 7
  },
  "20" : {
    "itemNumber" : 20,
    "name" : "Barre class",
    "met" : 8
  },
  "21" : {
    "itemNumber" : 21,
    "name" : "Baseball",
    "met" : 7
  },
  "22" : {
    "itemNumber" : 22,
    "name" : "Basketball - officiating",
    "met" : 6
  },
  "23" : {
    "itemNumber" : 23,
    "name" : "Basketball - shooting baskets",
    "met" : 8
  },
  "24" : {
    "itemNumber" : 24,
    "name" : "Basketball 1/2 court",
    "met" : 7
  },
  "25" : {
    "itemNumber" : 25,
    "name" : "Basketball full court",
    "met" : 10
  },
  "26" : {
    "itemNumber" : 26,
    "name" : "Basketball, game",
    "met" : 7
  },
  "27" : {
    "itemNumber" : 27,
    "name" : "Basketball, nongame, general",
    "met" : 6
  },
  "28" : {
    "itemNumber" : 28,
    "name" : "Basketball, wheelchair",
    "met" : 8
  },
  "29" : {
    "itemNumber" : 29,
    "name" : "Belly dancing",
    "met" : 7
  },
  "30" : {
    "itemNumber" : 30,
    "name" : "Biathlon, >8.0 mph, racing",
    "met" : 10
  },
  "31" : {
    "itemNumber" : 31,
    "name" : "Biathlon, 2.5 mph, slow or light effort",
    "met" : 3
  },
  "32" : {
    "itemNumber" : 32,
    "name" : "Biathlon, 4-5 mph, moderate effort",
    "met" : 6
  },
  "33" : {
    "itemNumber" : 33,
    "name" : "Biathlon, 5-8 mph, vigorous effort",
    "met" : 8
  },
  "34" : {
    "itemNumber" : 34,
    "name" : "Biathlon, uphill, maximum effort",
    "met" : 10
  },
  "35" : {
    "itemNumber" : 35,
    "name" : "Bicycling / biking - mountain",
    "met" : 8
  },
  "36" : {
    "itemNumber" : 36,
    "name" : "Bicycling / cycling 12-14 mph",
    "met" : 9
  },
  "37" : {
    "itemNumber" : 37,
    "name" : "Bicycling / cycling 14-16 mph",
    "met" : 10
  },
  "38" : {
    "itemNumber" : 38,
    "name" : "Bicycling, <10 mph, leisure",
    "met" : 3.5
  },
  "39" : {
    "itemNumber" : 39,
    "name" : "Bicycling, <10 mph, leisure (cycling, biking, bike riding)",
    "met" : 4
  },
  "40" : {
    "itemNumber" : 40,
    "name" : "Bicycling, >20 mph, racing (cycling, biking, bike riding)",
    "met" : 5
  },
  "41" : {
    "itemNumber" : 41,
    "name" : "Bicycling, 10-12 mph, light (cycling, biking, bike riding)",
    "met" : 3
  },
  "42" : {
    "itemNumber" : 42,
    "name" : "Bicycling, 12-14 mph, moderate (cycling, biking, bike riding)",
    "met" : 6
  },
  "43" : {
    "itemNumber" : 43,
    "name" : "Bicycling, 14-16 mph, vigorous (cycling, biking, bike riding)",
    "met" : 9
  },
  "44" : {
    "itemNumber" : 44,
    "name" : "Bicycling, 16-20 mph, very fast (cycling, biking, bike riding)",
    "met" : 10
  },
  "45" : {
    "itemNumber" : 45,
    "name" : "Bikram / hot yoga",
    "met" : 9
  },
  "46" : {
    "itemNumber" : 46,
    "name" : "Billiards",
    "met" : 5
  },
  "47" : {
    "itemNumber" : 47,
    "name" : "Bowling",
    "met" : 6
  },
  "48" : {
    "itemNumber" : 48,
    "name" : "Boxing - in ring",
    "met" : 9
  },
  "49" : {
    "itemNumber" : 49,
    "name" : "Boxing - punching bag",
    "met" : 8
  },
  "50" : {
    "itemNumber" : 50,
    "name" : "Brush teeth",
    "met" : 1.5
  },
  "51" : {
    "itemNumber" : 51,
    "name" : "Calisthenics (pushups, sit-ups",
    "met" : 8
  },
  "52" : {
    "itemNumber" : 52,
    "name" : "Calisthenics (pushups, sit-ups), vigorous effort",
    "met" : 10
  },
  "53" : {
    "itemNumber" : 53,
    "name" : "Calisthenics / exercise - moderate",
    "met" : 6
  },
  "54" : {
    "itemNumber" : 54,
    "name" : "Calisthenics / exercise - vigorous",
    "met" : 10
  },
  "55" : {
    "itemNumber" : 55,
    "name" : "Calisthenics, home, light/moderate effort",
    "met" : 7
  },
  "56" : {
    "itemNumber" : 56,
    "name" : "Canoeing 2 mph",
    "met" : 5
  },
  "57" : {
    "itemNumber" : 57,
    "name" : "Canoeing 4 mph",
    "met" : 7
  },
  "58" : {
    "itemNumber" : 58,
    "name" : "Canoeing, on camping trip",
    "met" : 6
  },
  "59" : {
    "itemNumber" : 59,
    "name" : "Canoeing, rowing, >6 mph, vigorous effort",
    "met" : 10
  },
  "60" : {
    "itemNumber" : 60,
    "name" : "Canoeing, rowing, crewing, competition",
    "met" : 9
  },
  "61" : {
    "itemNumber" : 61,
    "name" : "Canoeing, rowing, light effort",
    "met" : 3
  },
  "62" : {
    "itemNumber" : 62,
    "name" : "Canoeing, rowing, moderate effort",
    "met" : 6
  },
  "63" : {
    "itemNumber" : 63,
    "name" : "Card playing",
    "met" : 1.5
  },
  "64" : {
    "itemNumber" : 64,
    "name" : "Cardio exercise",
    "met" : 8
  },
  "65" : {
    "itemNumber" : 65,
    "name" : "Carpentry, general",
    "met" : 7
  },
  "66" : {
    "itemNumber" : 66,
    "name" : "Carpentry/Workshop",
    "met" : 8
  },
  "67" : {
    "itemNumber" : 67,
    "name" : "Carrying an Infant",
    "met" : 8
  },
  "68" : {
    "itemNumber" : 68,
    "name" : "Casino gambling - standing",
    "met" : 3
  },
  "69" : {
    "itemNumber" : 69,
    "name" : "Chef – cooking",
    "met" : 5
  },
  "70" : {
    "itemNumber" : 70,
    "name" : "Chopping wood",
    "met" : 9
  },
  "71" : {
    "itemNumber" : 71,
    "name" : "Circuit training - cross fit",
    "met" : 9
  },
  "72" : {
    "itemNumber" : 72,
    "name" : "Circuit training, general",
    "met" : 8
  },
  "73" : {
    "itemNumber" : 73,
    "name" : "Cleaning Gutters",
    "met" : 5
  },
  "74" : {
    "itemNumber" : 74,
    "name" : "Cleaning windows",
    "met" : 3
  },
  "75" : {
    "itemNumber" : 75,
    "name" : "Cleaning, heavy, vigorous effort",
    "met" : 8
  },
  "76" : {
    "itemNumber" : 76,
    "name" : "Cleaning, light, moderate effort",
    "met" : 5
  },
  "77" : {
    "itemNumber" : 77,
    "name" : "Clearing light brush,thinning garden",
    "met" : 8
  },
  "78" : {
    "itemNumber" : 78,
    "name" : "Coach- team sports",
    "met" : 8
  },
  "79" : {
    "itemNumber" : 79,
    "name" : "Combat class",
    "met" : 7
  },
  "80" : {
    "itemNumber" : 80,
    "name" : "Construction/Remodeling",
    "met" : 7
  },
  "81" : {
    "itemNumber" : 81,
    "name" : "Cooking",
    "met" : 7
  },
  "82" : {
    "itemNumber" : 82,
    "name" : "Cricket",
    "met" : 10
  },
  "83" : {
    "itemNumber" : 83,
    "name" : "Croquet/ Golf",
    "met" : 8
  },
  "84" : {
    "itemNumber" : 84,
    "name" : "Crossfit class",
    "met" : 7
  },
  "85" : {
    "itemNumber" : 85,
    "name" : "Crutches walking",
    "met" : 3.5
  },
  "86" : {
    "itemNumber" : 86,
    "name" : "Curtsy Kick",
    "met" : 6
  },
  "87" : {
    "itemNumber" : 87,
    "name" : "Custodial work - light",
    "met" : 3
  },
  "88" : {
    "itemNumber" : 88,
    "name" : "Custodial work - moderate",
    "met" : 6
  },
  "89" : {
    "itemNumber" : 89,
    "name" : "Cycling - leisure",
    "met" : 5
  },
  "90" : {
    "itemNumber" : 90,
    "name" : "Cycling / cycling 12-14 mph",
    "met" : 7
  },
  "91" : {
    "itemNumber" : 91,
    "name" : "Cycling / cycling 14-16 mph",
    "met" : 8
  },
  "92" : {
    "itemNumber" : 92,
    "name" : "Dancing - aerobic, ballet, modern",
    "met" : 8
  },
  "93" : {
    "itemNumber" : 93,
    "name" : "Dancing - ballroom slow",
    "met" : 6
  },
  "94" : {
    "itemNumber" : 94,
    "name" : "Dancing - disco, folk, step, line, polka, country",
    "met" : 8
  },
  "95" : {
    "itemNumber" : 95,
    "name" : "Dancing - ethnic, cultural",
    "met" : 7
  },
  "96" : {
    "itemNumber" : 96,
    "name" : "Dancing - fast ballroom",
    "met" : 8
  },
  "97" : {
    "itemNumber" : 97,
    "name" : "Dancing - tap",
    "met" : 7
  },
  "98" : {
    "itemNumber" : 98,
    "name" : "Dancing, aerobic, ballet or modern, twist",
    "met" : 9
  },
  "99" : {
    "itemNumber" : 99,
    "name" : "Dancing, ballroom, fast",
    "met" : 9
  },
  "100" : {
    "itemNumber" : 100,
    "name" : "Dancing, ballroom, slow",
    "met" : 3
  },
  "101" : {
    "itemNumber" : 101,
    "name" : "Dancing, general",
    "met" : 5
  },
  "102" : {
    "itemNumber" : 102,
    "name" : "Darts",
    "met" : 3
  },
  "103" : {
    "itemNumber" : 103,
    "name" : "Digging,spading, composting",
    "met" : 5
  },
  "104" : {
    "itemNumber" : 104,
    "name" : "Diving, springboard or platform",
    "met" : 6
  },
  "105" : {
    "itemNumber" : 105,
    "name" : "Driving",
    "met" : 5
  },
  "106" : {
    "itemNumber" : 106,
    "name" : "Dusting or polishing furniture",
    "met" : 6
  },
  "107" : {
    "itemNumber" : 107,
    "name" : "Eagle Lunge",
    "met" : 5
  },
  "108" : {
    "itemNumber" : 108,
    "name" : "Elder care,Disabled adult",
    "met" : 4
  },
  "109" : {
    "itemNumber" : 109,
    "name" : "Elliptical Trainer",
    "met" : 9
  },
  "110" : {
    "itemNumber" : 110,
    "name" : "Farming/Feeding livestock",
    "met" : 8
  },
  "111" : {
    "itemNumber" : 111,
    "name" : "Fencing",
    "met" : 7
  },
  "112" : {
    "itemNumber" : 112,
    "name" : "Fishing",
    "met" : 4
  },
  "113" : {
    "itemNumber" : 113,
    "name" : "Fishing from boat, sitting",
    "met" : 5
  },
  "114" : {
    "itemNumber" : 114,
    "name" : "Fishing from river bank, standing",
    "met" : 6
  },
  "115" : {
    "itemNumber" : 115,
    "name" : "Fishing in stream, in waders",
    "met" : 6
  },
  "116" : {
    "itemNumber" : 116,
    "name" : "Fishing, general",
    "met" : 3.5
  },
  "117" : {
    "itemNumber" : 117,
    "name" : "Fishing, ice, sitting",
    "met" : 6
  },
  "118" : {
    "itemNumber" : 118,
    "name" : "Football - full contact",
    "met" : 8
  },
  "119" : {
    "itemNumber" : 119,
    "name" : "Football - playing catch",
    "met" : 9
  },
  "120" : {
    "itemNumber" : 120,
    "name" : "Football - touch",
    "met" : 7
  },
  "121" : {
    "itemNumber" : 121,
    "name" : "Football, competitive",
    "met" : 9
  },
  "122" : {
    "itemNumber" : 122,
    "name" : "Football, touch, flag, general",
    "met" : 6
  },
  "123" : {
    "itemNumber" : 123,
    "name" : "Frisbee playing",
    "met" : 5
  },
  "124" : {
    "itemNumber" : 124,
    "name" : "Frisbee playing, general",
    "met" : 4.5
  },
  "125" : {
    "itemNumber" : 125,
    "name" : "Frisbee, Ultimate",
    "met" : 6
  },
  "126" : {
    "itemNumber" : 126,
    "name" : "Gardening -container",
    "met" : 5.5
  },
  "127" : {
    "itemNumber" : 127,
    "name" : "Gardening with heavy power tools",
    "met" : 7.5
  },
  "128" : {
    "itemNumber" : 128,
    "name" : "Gardening, general",
    "met" : 6
  },
  "129" : {
    "itemNumber" : 129,
    "name" : "General exercise",
    "met" : 7
  },
  "130" : {
    "itemNumber" : 130,
    "name" : "Golf - cart",
    "met" : 7
  },
  "131" : {
    "itemNumber" : 131,
    "name" : "Golf - pull cart",
    "met" : 7.5
  },
  "132" : {
    "itemNumber" : 132,
    "name" : "Golf, carrying clubs",
    "met" : 8
  },
  "133" : {
    "itemNumber" : 133,
    "name" : "Golf, using power cart",
    "met" : 5
  },
  "134" : {
    "itemNumber" : 134,
    "name" : "Gym - Abs/Core",
    "met" : 8
  },
  "135" : {
    "itemNumber" : 135,
    "name" : "Gym - Back",
    "met" : 7
  },
  "136" : {
    "itemNumber" : 136,
    "name" : "Gym - Chest",
    "met" : 8
  },
  "137" : {
    "itemNumber" : 137,
    "name" : "Gym - Elliptical",
    "met" : 9
  },
  "138" : {
    "itemNumber" : 138,
    "name" : "Gym - Exercise Bike",
    "met" : 9
  },
  "139" : {
    "itemNumber" : 139,
    "name" : "Gym - Jacob's Ladder",
    "met" : 9
  },
  "140" : {
    "itemNumber" : 140,
    "name" : "Gym - Kettlebell",
    "met" : 8
  },
  "141" : {
    "itemNumber" : 141,
    "name" : "Gym - Legs",
    "met" : 7
  },
  "142" : {
    "itemNumber" : 142,
    "name" : "Gym - Other Machine",
    "met" : 7
  },
  "143" : {
    "itemNumber" : 143,
    "name" : "Gym - Rowing Machine",
    "met" : 10
  },
  "144" : {
    "itemNumber" : 144,
    "name" : "Gym - Stair Machine",
    "met" : 10
  },
  "145" : {
    "itemNumber" : 145,
    "name" : "Gym - Total Body",
    "met" : 9
  },
  "146" : {
    "itemNumber" : 146,
    "name" : "Gym - Treadmill",
    "met" : 10
  },
  "147" : {
    "itemNumber" : 147,
    "name" : "Gym - TRX",
    "met" : 7
  },
  "148" : {
    "itemNumber" : 148,
    "name" : "Gym - Upper Body",
    "met" : 8
  },
  "149" : {
    "itemNumber" : 149,
    "name" : "Gym - Versa Climber",
    "met" : 8.5
  },
  "150" : {
    "itemNumber" : 150,
    "name" : "Gymnastics, general",
    "met" : 7.5
  },
  "151" : {
    "itemNumber" : 151,
    "name" : "Hacky sack",
    "met" : 6.5
  },
  "152" : {
    "itemNumber" : 152,
    "name" : "Hairstyling",
    "met" : 1.5
  },
  "153" : {
    "itemNumber" : 153,
    "name" : "Handball, general",
    "met" : 5
  },
  "154" : {
    "itemNumber" : 154,
    "name" : "Handball, team",
    "met" : 6.5
  },
  "155" : {
    "itemNumber" : 155,
    "name" : "Handbike",
    "met" : 5
  },
  "156" : {
    "itemNumber" : 156,
    "name" : "Hang Gliding",
    "met" : 6
  },
  "157" : {
    "itemNumber" : 157,
    "name" : "Hanging sheetrock",
    "met" : 5.5
  },
  "158" : {
    "itemNumber" : 158,
    "name" : "Hatha yoga",
    "met" : 6.5
  },
  "159" : {
    "itemNumber" : 159,
    "name" : "Hiking",
    "met" : 7
  },
  "160" : {
    "itemNumber" : 160,
    "name" : "Hiking, climbing hills (carrying <10 lb load)",
    "met" : 7.5
  },
  "161" : {
    "itemNumber" : 161,
    "name" : "Hiking, climbing hills (carrying 10-20 lb load)",
    "met" : 8
  },
  "162" : {
    "itemNumber" : 162,
    "name" : "Hiking, cross country",
    "met" : 8
  },
  "163" : {
    "itemNumber" : 163,
    "name" : "Hockey",
    "met" : 7
  },
  "164" : {
    "itemNumber" : 164,
    "name" : "Hockey, field",
    "met" : 8
  },
  "165" : {
    "itemNumber" : 165,
    "name" : "Hockey, ice",
    "met" : 8.5
  },
  "166" : {
    "itemNumber" : 166,
    "name" : "Hopscotch/Dodge ball",
    "met" : 7
  },
  "167" : {
    "itemNumber" : 167,
    "name" : "Horse grooming",
    "met" : 6
  },
  "168" : {
    "itemNumber" : 168,
    "name" : "Horseback riding - galloping",
    "met" : 7.5
  },
  "169" : {
    "itemNumber" : 169,
    "name" : "Horseback riding - trotting",
    "met" : 8
  },
  "170" : {
    "itemNumber" : 170,
    "name" : "Horseback riding - walking",
    "met" : 6
  },
  "171" : {
    "itemNumber" : 171,
    "name" : "Horseback riding, general",
    "met" : 7
  },
  "172" : {
    "itemNumber" : 172,
    "name" : "Housework",
    "met" : 7
  },
  "173" : {
    "itemNumber" : 173,
    "name" : "Hunting",
    "met" : 7.5
  },
  "174" : {
    "itemNumber" : 174,
    "name" : "Ice stock sport",
    "met" : 6.5
  },
  "175" : {
    "itemNumber" : 175,
    "name" : "Insanity class",
    "met" : 9
  },
  "176" : {
    "itemNumber" : 176,
    "name" : "Iron Burpee",
    "met" : 7
  },
  "177" : {
    "itemNumber" : 177,
    "name" : "Ironing",
    "met" : 4
  },
  "178" : {
    "itemNumber" : 178,
    "name" : "Jai alai sport",
    "met" : 7
  },
  "179" : {
    "itemNumber" : 179,
    "name" : "Jazzercise",
    "met" : 7.5
  },
  "180" : {
    "itemNumber" : 180,
    "name" : "Jet skiing (riding jet ski, water ski-mobiling)",
    "met" : 6.5
  },
  "181" : {
    "itemNumber" : 181,
    "name" : "Jogging",
    "met" : 8
  },
  "182" : {
    "itemNumber" : 182,
    "name" : "Judo - martial arts",
    "met" : 8.5
  },
  "183" : {
    "itemNumber" : 183,
    "name" : "Judo, karate, kick boxing, tae kwan do",
    "met" : 8
  },
  "184" : {
    "itemNumber" : 184,
    "name" : "Jumping jacks - moderate",
    "met" : 8.5
  },
  "185" : {
    "itemNumber" : 185,
    "name" : "Jumping jacks - vigorous",
    "met" : 10
  },
  "186" : {
    "itemNumber" : 186,
    "name" : "Jumping on trampoline",
    "met" : 9
  },
  "187" : {
    "itemNumber" : 187,
    "name" : "Kayaking",
    "met" : 6.5
  },
  "188" : {
    "itemNumber" : 188,
    "name" : "Kickball",
    "met" : 7
  },
  "189" : {
    "itemNumber" : 189,
    "name" : "Kickboxing",
    "met" : 8
  },
  "190" : {
    "itemNumber" : 190,
    "name" : "Kissing, hugging",
    "met" : 5
  },
  "191" : {
    "itemNumber" : 191,
    "name" : "Kite Skiing",
    "met" : 6.5
  },
  "192" : {
    "itemNumber" : 192,
    "name" : "Kite Surfing",
    "met" : 7
  },
  "193" : {
    "itemNumber" : 193,
    "name" : "Knockout",
    "met" : 8
  },
  "194" : {
    "itemNumber" : 194,
    "name" : "Lacrosse sport",
    "met" : 7.5
  },
  "195" : {
    "itemNumber" : 195,
    "name" : "Laundry",
    "met" : 6
  },
  "196" : {
    "itemNumber" : 196,
    "name" : "Laying or removing carpet",
    "met" : 7
  },
  "197" : {
    "itemNumber" : 197,
    "name" : "Lifting weights - general",
    "met" : 6
  },
  "198" : {
    "itemNumber" : 198,
    "name" : "Lifting weights - vigorous",
    "met" : 9
  },
  "199" : {
    "itemNumber" : 199,
    "name" : "Line dancing",
    "met" : 6
  },
  "200" : {
    "itemNumber" : 200,
    "name" : "Loading/Unloading a Car",
    "met" : 6.5
  },
  "201" : {
    "itemNumber" : 201,
    "name" : "Marching band",
    "met" : 6
  },
  "202" : {
    "itemNumber" : 202,
    "name" : "Marching band, playing instrument(walking)",
    "met" : 7
  },
  "203" : {
    "itemNumber" : 203,
    "name" : "Marching, rapidly, military",
    "met" : 8.5
  },
  "204" : {
    "itemNumber" : 204,
    "name" : "Martial arts",
    "met" : 7
  },
  "205" : {
    "itemNumber" : 205,
    "name" : "Massage therapist",
    "met" : 7.5
  },
  "206" : {
    "itemNumber" : 206,
    "name" : "Mild stretching",
    "met" : 5
  },
  "207" : {
    "itemNumber" : 207,
    "name" : "Mopping",
    "met" : 6
  },
  "208" : {
    "itemNumber" : 208,
    "name" : "Motocross racing",
    "met" : 7
  },
  "209" : {
    "itemNumber" : 209,
    "name" : "Moving furniture, household",
    "met" : 6
  },
  "210" : {
    "itemNumber" : 210,
    "name" : "Moving household items, boxes, upstairs",
    "met" : 7.5
  },
  "211" : {
    "itemNumber" : 211,
    "name" : "Moving household items, carrying boxes",
    "met" : 6.5
  },
  "212" : {
    "itemNumber" : 212,
    "name" : "Mowing - push",
    "met" : 5.5
  },
  "213" : {
    "itemNumber" : 213,
    "name" : "Mowing – riding",
    "met" : 4
  },
  "214" : {
    "itemNumber" : 214,
    "name" : "Mowing lawn, general",
    "met" : 5
  },
  "215" : {
    "itemNumber" : 215,
    "name" : "Mowing lawn, riding mower",
    "met" : 2.5
  },
  "216" : {
    "itemNumber" : 216,
    "name" : "Music playing, cello, flute, horn, woodwind",
    "met" : 6
  },
  "217" : {
    "itemNumber" : 217,
    "name" : "Music playing, drums",
    "met" : 6.5
  },
  "218" : {
    "itemNumber" : 218,
    "name" : "Music playing, guitar, classical, folk(sitting)",
    "met" : 5
  },
  "219" : {
    "itemNumber" : 219,
    "name" : "Music playing, guitar, rock/roll band(standing)",
    "met" : 1.5
  },
  "220" : {
    "itemNumber" : 220,
    "name" : "Music playing, piano, organ, violin, trumpet",
    "met" : 3
  },
  "221" : {
    "itemNumber" : 221,
    "name" : "Organizing a room",
    "met" : 5
  },
  "222" : {
    "itemNumber" : 222,
    "name" : "P90X class",
    "met" : 9
  },
  "223" : {
    "itemNumber" : 223,
    "name" : "Packing Suitcase",
    "met" : 2
  },
  "224" : {
    "itemNumber" : 224,
    "name" : "Paddle board - standing",
    "met" : 5
  },
  "225" : {
    "itemNumber" : 225,
    "name" : "Paddleboat – sitting",
    "met" : 4.5
  },
  "226" : {
    "itemNumber" : 226,
    "name" : "Painting house",
    "met" : 5.5
  },
  "227" : {
    "itemNumber" : 227,
    "name" : "Paragliding",
    "met" : 5
  },
  "228" : {
    "itemNumber" : 228,
    "name" : "Pilates",
    "met" : 7
  },
  "229" : {
    "itemNumber" : 229,
    "name" : "Pilates Advanced",
    "met" : 8.5
  },
  "230" : {
    "itemNumber" : 230,
    "name" : "Pilates Beginner",
    "met" : 7.5
  },
  "231" : {
    "itemNumber" : 231,
    "name" : "Pilates class",
    "met" : 10
  },
  "232" : {
    "itemNumber" : 232,
    "name" : "Pilates Intermediate",
    "met" : 8.5
  },
  "233" : {
    "itemNumber" : 233,
    "name" : "Playing board games",
    "met" : 2.5
  },
  "234" : {
    "itemNumber" : 234,
    "name" : "Playing guitar",
    "met" : 3
  },
  "235" : {
    "itemNumber" : 235,
    "name" : "Playing piano",
    "met" : 3.5
  },
  "236" : {
    "itemNumber" : 236,
    "name" : "Plumbing activities",
    "met" : 1.5
  },
  "237" : {
    "itemNumber" : 237,
    "name" : "Polo",
    "met" : 8
  },
  "238" : {
    "itemNumber" : 238,
    "name" : "Power yoga",
    "met" : 8.5
  },
  "239" : {
    "itemNumber" : 239,
    "name" : "Pull-ups, vigorous",
    "met" : 9
  },
  "240" : {
    "itemNumber" : 240,
    "name" : "Punching bag",
    "met" : 7.5
  },
  "241" : {
    "itemNumber" : 241,
    "name" : "Push stroller with child",
    "met" : 3
  },
  "242" : {
    "itemNumber" : 242,
    "name" : "Pushing or pulling stroller with child",
    "met" : 3.5
  },
  "243" : {
    "itemNumber" : 243,
    "name" : "Pushups - moderate",
    "met" : 6.5
  },
  "244" : {
    "itemNumber" : 244,
    "name" : "Pushups - vigorous",
    "met" : 10
  },
  "245" : {
    "itemNumber" : 245,
    "name" : "Push-ups, vigorous",
    "met" : 10
  },
  "246" : {
    "itemNumber" : 246,
    "name" : "Putting away Groceries",
    "met" : 3.5
  },
  "247" : {
    "itemNumber" : 247,
    "name" : "Race walking",
    "met" : 7.5
  },
  "248" : {
    "itemNumber" : 248,
    "name" : "Racquetball casual",
    "met" : 7
  },
  "249" : {
    "itemNumber" : 249,
    "name" : "Racquetball competitive",
    "met" : 8
  },
  "250" : {
    "itemNumber" : 250,
    "name" : "Racquetball, casual, general",
    "met" : 7.5
  },
  "251" : {
    "itemNumber" : 251,
    "name" : "Raking lawn",
    "met" : 6
  },
  "252" : {
    "itemNumber" : 252,
    "name" : "Rappelling",
    "met" : 8.5
  },
  "253" : {
    "itemNumber" : 253,
    "name" : "Reading",
    "met" : 1
  },
  "254" : {
    "itemNumber" : 254,
    "name" : "Rearranging Furniture",
    "met" : 4.5
  },
  "255" : {
    "itemNumber" : 255,
    "name" : "Repelling",
    "met" : 6.5
  },
  "256" : {
    "itemNumber" : 256,
    "name" : "Riding in a bus",
    "met" : 6
  },
  "257" : {
    "itemNumber" : 257,
    "name" : "Riding in a car",
    "met" : 4
  },
  "258" : {
    "itemNumber" : 258,
    "name" : "Riding in a subway",
    "met" : 6
  },
  "259" : {
    "itemNumber" : 259,
    "name" : "Riding in a train",
    "met" : 5.5
  },
  "260" : {
    "itemNumber" : 260,
    "name" : "Rock climbing",
    "met" : 8
  },
  "261" : {
    "itemNumber" : 261,
    "name" : "Rock climbing, ascending rock",
    "met" : 9
  },
  "262" : {
    "itemNumber" : 262,
    "name" : "Rock climbing, rappelling",
    "met" : 9
  },
  "263" : {
    "itemNumber" : 263,
    "name" : "Roller blading (in-line skating)",
    "met" : 7.5
  },
  "264" : {
    "itemNumber" : 264,
    "name" : "Roofing",
    "met" : 6
  },
  "265" : {
    "itemNumber" : 265,
    "name" : "Rope jumping",
    "met" : 8.5
  },
  "266" : {
    "itemNumber" : 266,
    "name" : "Rope jumping, fast",
    "met" : 9
  },
  "267" : {
    "itemNumber" : 267,
    "name" : "Rope jumping, moderate, general",
    "met" : 7.5
  },
  "268" : {
    "itemNumber" : 268,
    "name" : "Rope jumping, slow",
    "met" : 6
  },
  "269" : {
    "itemNumber" : 269,
    "name" : "Rowing machine - moderate",
    "met" : 6
  },
  "270" : {
    "itemNumber" : 270,
    "name" : "Rowing machine - vigorous",
    "met" : 10
  },
  "271" : {
    "itemNumber" : 271,
    "name" : "Rowing, stationary, light effort",
    "met" : 4.5
  },
  "272" : {
    "itemNumber" : 272,
    "name" : "Rowing, stationary, moderate effort",
    "met" : 7.5
  },
  "273" : {
    "itemNumber" : 273,
    "name" : "Rowing, stationary, very vigorous effort",
    "met" : 10
  },
  "274" : {
    "itemNumber" : 274,
    "name" : "Rowing, stationary, vigorous effort",
    "met" : 9.5
  },
  "275" : {
    "itemNumber" : 275,
    "name" : "Rugby",
    "met" : 8.5
  },
  "276" : {
    "itemNumber" : 276,
    "name" : "Run - Adventure Race",
    "met" : 10
  },
  "277" : {
    "itemNumber" : 277,
    "name" : "Run - Brick",
    "met" : 6.5
  },
  "278" : {
    "itemNumber" : 278,
    "name" : "Run - Cross Country",
    "met" : 6
  },
  "279" : {
    "itemNumber" : 279,
    "name" : "Run - General",
    "met" : 7
  },
  "280" : {
    "itemNumber" : 280,
    "name" : "Run - Group",
    "met" : 5.5
  },
  "281" : {
    "itemNumber" : 281,
    "name" : "Run - Hills",
    "met" : 9
  },
  "282" : {
    "itemNumber" : 282,
    "name" : "Run - Interval Training",
    "met" : 8.5
  },
  "283" : {
    "itemNumber" : 283,
    "name" : "Run - Race/Event",
    "met" : 9
  },
  "284" : {
    "itemNumber" : 284,
    "name" : "Running 10 mph",
    "met" : 9
  },
  "285" : {
    "itemNumber" : 285,
    "name" : "Running 12 mph",
    "met" : 9.5
  },
  "286" : {
    "itemNumber" : 286,
    "name" : "Running 5 mph",
    "met" : 6.5
  },
  "287" : {
    "itemNumber" : 287,
    "name" : "Running 6 mph",
    "met" : 7
  },
  "288" : {
    "itemNumber" : 288,
    "name" : "Running 7 mph",
    "met" : 7.5
  },
  "289" : {
    "itemNumber" : 289,
    "name" : "Running 8 mph",
    "met" : 8
  },
  "290" : {
    "itemNumber" : 290,
    "name" : "Sailing, boat/board, windsurfing, general",
    "met" : 7.5
  },
  "291" : {
    "itemNumber" : 291,
    "name" : "Sailing, in competition",
    "met" : 8
  },
  "292" : {
    "itemNumber" : 292,
    "name" : "Scrubbing floors",
    "met" : 6.5
  },
  "293" : {
    "itemNumber" : 293,
    "name" : "Scuba diving",
    "met" : 7.5
  },
  "294" : {
    "itemNumber" : 294,
    "name" : "Sex - foreplay",
    "met" : 5
  },
  "295" : {
    "itemNumber" : 295,
    "name" : "Sex - intercourse",
    "met" : 5.5
  },
  "296" : {
    "itemNumber" : 296,
    "name" : "Shaping Sweep",
    "met" : 7
  },
  "297" : {
    "itemNumber" : 297,
    "name" : "Shopping",
    "met" : 5.5
  },
  "298" : {
    "itemNumber" : 298,
    "name" : "Shoveling snow",
    "met" : 7
  },
  "299" : {
    "itemNumber" : 299,
    "name" : "Showering",
    "met" : 3
  },
  "300" : {
    "itemNumber" : 300,
    "name" : "Shuffleboard, lawn bowling",
    "met" : 6
  },
  "301" : {
    "itemNumber" : 301,
    "name" : "Sitting / resting",
    "met" : 1
  },
  "302" : {
    "itemNumber" : 302,
    "name" : "Situps / crunches - moderate",
    "met" : 7
  },
  "303" : {
    "itemNumber" : 303,
    "name" : "Situps / crunches - vigorous",
    "met" : 10
  },
  "304" : {
    "itemNumber" : 304,
    "name" : "Sit-ups, vigorous",
    "met" : 10
  },
  "305" : {
    "itemNumber" : 305,
    "name" : "Skateboarding",
    "met" : 8
  },
  "306" : {
    "itemNumber" : 306,
    "name" : "Skating - moderate",
    "met" : 6.5
  },
  "307" : {
    "itemNumber" : 307,
    "name" : "Skating - vigorous",
    "met" : 9.5
  },
  "308" : {
    "itemNumber" : 308,
    "name" : "Skating, cross-country, >8.0 mph, racing",
    "met" : 8.5
  },
  "309" : {
    "itemNumber" : 309,
    "name" : "Skating, cross-country, 2.5 mph, slow or light effort",
    "met" : 4
  },
  "310" : {
    "itemNumber" : 310,
    "name" : "Skating, cross-country, 4-5 mph, moderate effort",
    "met" : 6
  },
  "311" : {
    "itemNumber" : 311,
    "name" : "Skating, cross-country, 5-8 mph, vigorous effort",
    "met" : 10
  },
  "312" : {
    "itemNumber" : 312,
    "name" : "Skating, cross-country, uphill, maximum effort",
    "met" : 10
  },
  "313" : {
    "itemNumber" : 313,
    "name" : "Skating, ice, 9 mph or less",
    "met" : 6.5
  },
  "314" : {
    "itemNumber" : 314,
    "name" : "Skating, ice, general",
    "met" : 6
  },
  "315" : {
    "itemNumber" : 315,
    "name" : "Skating, ice, rapidly, > 9 mph",
    "met" : 8.5
  },
  "316" : {
    "itemNumber" : 316,
    "name" : "Skating, ice, speed, competitive",
    "met" : 9.5
  },
  "317" : {
    "itemNumber" : 317,
    "name" : "Skating, roller (rollerblading, roller blading)",
    "met" : 8
  },
  "318" : {
    "itemNumber" : 318,
    "name" : "Ski jumping (climb up carrying skis)",
    "met" : 8.5
  },
  "319" : {
    "itemNumber" : 319,
    "name" : "Skiing - cross country",
    "met" : 7.5
  },
  "320" : {
    "itemNumber" : 320,
    "name" : "Skiing - downhill",
    "met" : 6.5
  },
  "321" : {
    "itemNumber" : 321,
    "name" : "Skiing - water",
    "met" : 6
  },
  "322" : {
    "itemNumber" : 322,
    "name" : "Skiing, cross-country, >8.0 mph, racing",
    "met" : 9.5
  },
  "323" : {
    "itemNumber" : 323,
    "name" : "Skiing, cross-country, 2.5 mph, slow or light effort",
    "met" : 3
  },
  "324" : {
    "itemNumber" : 324,
    "name" : "Skiing, cross-country, 4-5 mph, moderate effort",
    "met" : 6
  },
  "325" : {
    "itemNumber" : 325,
    "name" : "Skiing, cross-country, 5-8 mph, vigorous effort",
    "met" : 10
  },
  "326" : {
    "itemNumber" : 326,
    "name" : "Skiing, cross-country, uphill, maximum effort",
    "met" : 9.5
  },
  "327" : {
    "itemNumber" : 327,
    "name" : "Skiing, downhill, light effort",
    "met" : 3.5
  },
  "328" : {
    "itemNumber" : 328,
    "name" : "Skiing, downhill, moderate effort",
    "met" : 6
  },
  "329" : {
    "itemNumber" : 329,
    "name" : "Sledding, tobogganing",
    "met" : 4.5
  },
  "330" : {
    "itemNumber" : 330,
    "name" : "Sleeping",
    "met" : 1
  },
  "331" : {
    "itemNumber" : 331,
    "name" : "Snorkeling",
    "met" : 8.5
  },
  "332" : {
    "itemNumber" : 332,
    "name" : "Snowmobiling",
    "met" : 7
  },
  "333" : {
    "itemNumber" : 333,
    "name" : "Soccer casual",
    "met" : 6.5
  },
  "334" : {
    "itemNumber" : 334,
    "name" : "Soccer competitive",
    "met" : 7.5
  },
  "335" : {
    "itemNumber" : 335,
    "name" : "Spin class",
    "met" : 8
  },
  "336" : {
    "itemNumber" : 336,
    "name" : "Spinning - moderate",
    "met" : 6.5
  },
  "337" : {
    "itemNumber" : 337,
    "name" : "Spinning - vigorous",
    "met" : 8.5
  },
  "338" : {
    "itemNumber" : 338,
    "name" : "Stair Step Machine",
    "met" : 10
  },
  "339" : {
    "itemNumber" : 339,
    "name" : "Standing",
    "met" : 5.5
  },
  "340" : {
    "itemNumber" : 340,
    "name" : "Stationary bicycle / spinning - moderate",
    "met" : 6.5
  },
  "341" : {
    "itemNumber" : 341,
    "name" : "Stationary bicycle / spinning - vigorous",
    "met" : 8.5
  },
  "342" : {
    "itemNumber" : 342,
    "name" : "Step aerobics - high impact",
    "met" : 8
  },
  "343" : {
    "itemNumber" : 343,
    "name" : "Step aerobics - low impact",
    "met" : 5.5
  },
  "344" : {
    "itemNumber" : 344,
    "name" : "Stretching",
    "met" : 5
  },
  "345" : {
    "itemNumber" : 345,
    "name" : "Studying",
    "met" : 1
  },
  "346" : {
    "itemNumber" : 346,
    "name" : "Surfing",
    "met" : 3.5
  },
  "347" : {
    "itemNumber" : 347,
    "name" : "Swimming - moderate",
    "met" : 6
  },
  "348" : {
    "itemNumber" : 348,
    "name" : "Swimming - vigorous",
    "met" : 10
  },
  "349" : {
    "itemNumber" : 349,
    "name" : "Swimming, sidestroke, general",
    "met" : 10
  },
  "350" : {
    "itemNumber" : 350,
    "name" : "Table tennis",
    "met" : 5
  },
  "351" : {
    "itemNumber" : 351,
    "name" : "Table tennis, ping pong",
    "met" : 5.5
  },
  "352" : {
    "itemNumber" : 352,
    "name" : "Tae Bo (kick)",
    "met" : 6.5
  },
  "353" : {
    "itemNumber" : 353,
    "name" : "Tae Kwon Do(Martial arts)",
    "met" : 7.5
  },
  "354" : {
    "itemNumber" : 354,
    "name" : "Tai chi",
    "met" : 7.5
  },
  "355" : {
    "itemNumber" : 355,
    "name" : "Tailoring, Cutting",
    "met" : 5.5
  },
  "356" : {
    "itemNumber" : 356,
    "name" : "Talking on phone",
    "met" : 1
  },
  "357" : {
    "itemNumber" : 357,
    "name" : "Teaching aerobics class",
    "met" : 5
  },
  "358" : {
    "itemNumber" : 358,
    "name" : "Tennis - doubles",
    "met" : 8
  },
  "359" : {
    "itemNumber" : 359,
    "name" : "Tennis - singles",
    "met" : 8.5
  },
  "360" : {
    "itemNumber" : 360,
    "name" : "Tennis, general",
    "met" : 7
  },
  "361" : {
    "itemNumber" : 361,
    "name" : "Touring/Traveling",
    "met" : 4.5
  },
  "362" : {
    "itemNumber" : 362,
    "name" : "Unicycling",
    "met" : 3.5
  },
  "363" : {
    "itemNumber" : 363,
    "name" : "Vinyasa yoga",
    "met" : 5.5
  },
  "364" : {
    "itemNumber" : 364,
    "name" : "Volleyball - competitive",
    "met" : 8
  },
  "365" : {
    "itemNumber" : 365,
    "name" : "Volleyball - recreation",
    "met" : 6.5
  },
  "366" : {
    "itemNumber" : 366,
    "name" : "Volleyball, beach",
    "met" : 6
  },
  "367" : {
    "itemNumber" : 367,
    "name" : "Volleyball, competitive, in gymnasium",
    "met" : 7
  },
  "368" : {
    "itemNumber" : 368,
    "name" : "Volleyball, noncompetitive; 6-9 member team",
    "met" : 7.5
  },
  "369" : {
    "itemNumber" : 369,
    "name" : "Wakeboarding",
    "met" : 5
  },
  "370" : {
    "itemNumber" : 370,
    "name" : "walk",
    "met" : 2.3
  },
  "371" : {
    "itemNumber" : 371,
    "name" : "Walk - Elliptical",
    "met" : 3.5
  },
  "372" : {
    "itemNumber" : 372,
    "name" : "Walk - General",
    "met" : 2.5
  },
  "373" : {
    "itemNumber" : 373,
    "name" : "Walk - Hike",
    "met" : 3
  },
  "374" : {
    "itemNumber" : 374,
    "name" : "Walk - Power",
    "met" : 4
  },
  "375" : {
    "itemNumber" : 375,
    "name" : "Walk - Stairs",
    "met" : 5.5
  },
  "376" : {
    "itemNumber" : 376,
    "name" : "Walk - Stroller",
    "met" : 6
  },
  "377" : {
    "itemNumber" : 377,
    "name" : "Walk - Treadmill",
    "met" : 5
  },
  "378" : {
    "itemNumber" : 378,
    "name" : "Walk / run play with kids",
    "met" : 3.5
  },
  "379" : {
    "itemNumber" : 379,
    "name" : "Walking - up stairs",
    "met" : 5
  },
  "380" : {
    "itemNumber" : 380,
    "name" : "Walking 2 mph",
    "met" : 3.5
  },
  "381" : {
    "itemNumber" : 381,
    "name" : "Walking 3 mph",
    "met" : 3.8
  },
  "382" : {
    "itemNumber" : 382,
    "name" : "Walking 4 mph",
    "met" : 4
  },
  "383" : {
    "itemNumber" : 383,
    "name" : "Walking the dog",
    "met" : 5
  },
  "384" : {
    "itemNumber" : 384,
    "name" : "Walking, 2.5 mph",
    "met" : 3.5
  },
  "385" : {
    "itemNumber" : 385,
    "name" : "Walking, 2.5 mph, downhill",
    "met" : 2.5
  },
  "386" : {
    "itemNumber" : 386,
    "name" : "Walking, 2.5 mph, leisurely pace",
    "met" : 2
  },
  "387" : {
    "itemNumber" : 387,
    "name" : "Walking, 3.0 mph, 75cm pace",
    "met" : 3
  },
  "388" : {
    "itemNumber" : 388,
    "name" : "Walking, 3.5 mph, brisk pace",
    "met" : 4
  },
  "389" : {
    "itemNumber" : 389,
    "name" : "Walking, 3.5 mph, uphill",
    "met" : 4.5
  },
  "390" : {
    "itemNumber" : 390,
    "name" : "Walking, 4.0 mph, very brisk pace",
    "met" : 5
  },
  "391" : {
    "itemNumber" : 391,
    "name" : "Walking, 4.5 mph, very, very brisk pace",
    "met" : 6
  },
  "392" : {
    "itemNumber" : 392,
    "name" : "Washing car",
    "met" : 4.5
  },
  "393" : {
    "itemNumber" : 393,
    "name" : "Washing dishes",
    "met" : 4.5
  },
  "394" : {
    "itemNumber" : 394,
    "name" : "Water Aerobics",
    "met" : 8.5
  },
  "395" : {
    "itemNumber" : 395,
    "name" : "Weaving cloth",
    "met" : 3.5
  },
  "396" : {
    "itemNumber" : 396,
    "name" : "Workout Video class",
    "met" : 8
  },
  "397" : {
    "itemNumber" : 397,
    "name" : "Writing",
    "met" : 2
  },
  "398" : {
    "itemNumber" : 398,
    "name" : "Yard work",
    "met" : 4.5
  },
  "399" : {
    "itemNumber" : 399,
    "name" : "Yoga",
    "met" : 4
  },
  "400" : {
    "itemNumber" : 400,
    "name" : "Yoga - Ashtanga",
    "met" : 3.5
  },
  "401" : {
    "itemNumber" : 401,
    "name" : "Yoga - Bikram",
    "met" : 4
  },
  "402" : {
    "itemNumber" : 402,
    "name" : "Yoga - General Yoga",
    "met" : 4.5
  },
  "403" : {
    "itemNumber" : 403,
    "name" : "Yoga - Hot",
    "met" : 5.5
  },
  "404" : {
    "itemNumber" : 404,
    "name" : "Yoga - Power",
    "met" : 6
  },
  "405" : {
    "itemNumber" : 405,
    "name" : "Yoga - Vinyasa",
    "met" : 5
  },
  "406" : {
    "itemNumber" : 406,
    "name" : "Yoga21",
    "met" : 6
  },
  "407" : {
    "itemNumber" : 407,
    "name" : "Zumba dance",
    "met" : 8
  }
};


for (var key in exercisesKalpana) {
  count++;
  var exercise = exercisesKalpana[key];
  exerciseModels.push(exercise);
}
console.log(count, exerciseModels.length, exerciseModels[exerciseModels.length - 1]);


module.exports = function() {
  return exerciseModels;
};