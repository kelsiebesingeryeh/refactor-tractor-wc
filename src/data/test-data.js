export let testUsers = [{
    "id": 500,
    "name": "Marty McFly",
    "pantry": [{
            "ingredient": 5555,
            "amount": 2
        },
        {
            "ingredient": 1111,
            "amount": 3
        },
        {
            "ingredient": 2047,
            "amount": 5
        },
        {
            "ingredient": 11220,
            "amount": 4
        },
        {
            "ingredient": 777,
            "amount": 1
        },
        {
            "ingredient": 1919,
            "amount": 3
        }
    ]
}]

export let testRecipeData = [
  {
    name: "Simple Macaroni and Cheese",
    id: 595736,
    image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    ingredients: [
      {
        name: "elbow macaroni",
        id: 5555,
        quantity: {
          amount: 8,
          unit: "oz",
        },
      },
      {
        name: "butter",
        id: 1145,
        quantity: {
          amount: 0.25,
          unit: "c",
        },
      },
      {
        name: "all purpose flour",
        id: 1111,
        quantity: {
          amount: 0.25,
          unit: "c",
        },
      },
      {
        name: "salt",
        id: 2047,
        quantity: {
          amount: 0.5,
          unit: "tsp",
        },
      },
      {
        name: "ground black pepper",
        id: 11220,
        quantity: {
          amount: 0.5,
          unit: "tsp",
        },
      },
      {
        name: "milk",
        id: 777,
        quantity: {
          amount: 1,
          unit: "c",
        },
      },
      {
        name: "shredded cheddar cheese",
        id: 1919,
        quantity: {
          amount: 2,
          unit: "c",
        },
      },
    ],
    instructions: [
      {
        number: 1,
        instruction:
          "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. Drain.",
      },
      {
        number: 2,
        instruction:
          "Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes.",
      },
      {
        number: 3,
        instruction: "Fold macaroni into cheese sauce until coated.",
      },
    ],
    tags: ["cheese", "dinner", "pasta", "comfort food"],
  },
  {
    name: "Maple Dijon Apple Cider Grilled Pork Chops",
    id: 678353,
    image: "https://spoonacular.com/recipeImages/678353-556x370.jpg",
    ingredients: [
      {
        name: "apple cider",
        id: 1009016,
        quantity: {
          amount: 1.5,
          unit: "cups",
        },
      },
      {
        name: "apples",
        id: 9003,
        quantity: {
          amount: 2,
          unit: "",
        },
      },
      {
        name: "cornstarch",
        id: 20027,
        quantity: {
          amount: 1,
          unit: "tablespoon",
        },
      },
      {
        name: "dijon mustard",
        id: 1002046,
        quantity: {
          amount: 1,
          unit: "tablespoon",
        },
      },
      {
        name: "garlic",
        id: 11215,
        quantity: {
          amount: 1,
          unit: "clove",
        },
      },
      {
        name: "grainy mustard",
        id: 1012046,
        quantity: {
          amount: 1,
          unit: "tablespoon",
        },
      },
      {
        name: "maple syrup",
        id: 19911,
        quantity: {
          amount: 0.25,
          unit: "cup",
        },
      },
      {
        name: "Miso Soybean Paste",
        id: 16112,
        quantity: {
          amount: 1,
          unit: "tablespoon",
        },
      },
      {
        name: "pork chops",
        id: 10010062,
        quantity: {
          amount: 24,
          unit: "ounce",
        },
      },
      {
        name: "salt and pepper",
        id: 1102047,
        quantity: {
          amount: 4,
          unit: "servings",
        },
      },
      {
        name: "soy sauce",
        id: 16124,
        quantity: {
          amount: 1,
          unit: "tablespoon",
        },
      },
      {
        name: "sriracha",
        id: 1016168,
        quantity: {
          amount: 1,
          unit: "tablespoon",
        },
      },
    ],
    instructions: [
      {
        number: 1,
        instruction:
          "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
      },
    ],
    tags: ["lunch", "main course", "main dish", "dinner"],
  },
];

export let testIngredientsData = [
        {
            "id": 5555,
            "name": "elbow macaroni",
            "estimatedCostInCents": 580
        },
        {
            "id": 1145,
            "name": "butter",
            "estimatedCostInCents": 617
        },
        {
            "id": 1111,
            "name": "all purpose flour",
            "estimatedCostInCents": 205
        },
        {
            "id": 2047,
            "name": "salt",
            "estimatedCostInCents": 100
        },
        {
            "id": 11220,
            "name": "ground black pepper",
            "estimatedCostInCents": 130
        },
        {
            "id": 7777,
            "name": "milk",
            "estimatedCostInCents": 305
        },
        {
            "id": 1919,
            "name": "shredded cheddar cheese",
            "estimatedCostInCents": 555
        },

]

export default { testUsers, testIngredientsData, testRecipeData };