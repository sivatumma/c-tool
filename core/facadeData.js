var cusines = ["Maharastra",
            "Karnataka",
            "Gujarati",
            "West Bengal",
            "Andhra Pradesh",
            "Telangana",
            "Arunachal pradesh",
            "Assam",
            "Bihar",
            "Chhattishgarh",
            "Goa",
            "Haryana",
            "HP",
            "J & K",
            "Jharkhand",
            "Kerala",
            "MP",
            "Manipur",
            "Maghalaya",
            "Mizoram",
            "Nagaland",
            "Orissa",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "TN",
            "Tripura",
            "UP",
            "Uttarakhand"
      ],
      mealTypes = ["Breakfast",
            "Lunch",
            "Dinner",
            "Desert",
            "Side Dish",
            "Sweet",
            "Snack",
            "Drink"
      ],
      diseaseFriendlies = ["Diabetes",
            "Hypertension",
            "Cholesterol"
      ],
      foodTypes = ["Vegetarian",
            "Non Vegetarian",
            "Contains Egg only"
      ],
      servingUnits = ["1 cup",
            "1 bowl",
            "1 glass",
            "1 Teaspoon",
            "1 Tablespoon",
            "1 piece"
      ],
      giIndexes = ["Low",
            "Medium",
            "High"
      ],
      uoms = ["ml",
            "mg",
            "gm",
            "µg"
      ];

module.exports = exports = function(){
      return {
            cusines:cusines,
            mealTypes:mealTypes,
            diseaseFriendlies:diseaseFriendlies,
            foodTypes:foodTypes,
            servingUnits:servingUnits,
            giIndexes:giIndexes,
            uoms:uoms

      };
}