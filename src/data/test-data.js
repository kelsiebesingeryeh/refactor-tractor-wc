export let testUsers = [
  {
    id: 500,
    name: "Marty McFly",
    pantry: [
      {
        ingredient: 5555,
        amount: 9,
      },
      {
        ingredient: 1145,
        amount: 1,
      },
      {
        ingredient: 1111,
        amount: 3,
      },
      {
        ingredient: 2047,
        amount: 5,
      },
      {
        ingredient: 11220,
        amount: 4,
      },
      {
        ingredient: 777,
        amount: 1,
      },
      {
        ingredient: 1919,
        amount: 3,
      },
    ],
  },

  {
    id: 501,
    name: "Doc Brown",
    pantry: [
      {
        ingredient: 5555,
        amount: 9,
      },
      {
        ingredient: 1145,
        amount: 1,
      },
      {
        ingredient: 1111,
        amount: 3,
      },
      {
        ingredient: 2047,
        amount: 5,
      },
      {
        ingredient: 11220,
        amount: 4,
      },
      {
        ingredient: 777,
        amount: 1,
      },
      {
        ingredient: 1919,
        amount: 3,
      },
    ],
  },
  {
    id: 502,
    name: "Biff Tannen",
    pantry: [
      {
        ingredient: 5555,
        amount: 9,
      },
      {
        ingredient: 1145,
        amount: 1,
      },
      {
        ingredient: 1111,
        amount: 3,
      },
      {
        ingredient: 2047,
        amount: 5,
      },
      {
        ingredient: 11220,
        amount: 4,
      },
      {
        ingredient: 777,
        amount: 0,
      },
      {
        ingredient: 1919,
        amount: 3,
      },
    ],
  },
];
export let testRecipeData = [
  {
    name: "Simple Macaroni and Cheese",
    id: 595736,
    image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    ingredients: [
      {
        id: 5555,
        quantity: {
          amount: 8,
          unit: "oz",
        },
      },
      {
        id: 1145,
        quantity: {
          amount: 0.25,
          unit: "c",
        },
      },
      {
        id: 1111,
        quantity: {
          amount: 0.25,
          unit: "c",
        },
      },
      {
        id: 2047,
        quantity: {
          amount: 0.5,
          unit: "tsp",
        },
      },
      {
        id: 11220,
        quantity: {
          amount: 0.5,
          unit: "tsp",
        },
      },
      {
        id: 777,
        quantity: {
          amount: 1,
          unit: "c",
        },
      },
      {
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
        id: 1009016,
        quantity: {
          amount: 1.5,
          unit: "cups",
        },
      },
      {
        id: 9003,
        quantity: {
          amount: 2,
          unit: "",
        },
      },
      {
        id: 20027,
        quantity: {
          amount: 1,
          unit: "tablespoon",
        },
      }
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
  {
    name: "Pumpkin Cheesecake Breakfast Smoothie",
    id: 543687,
    image: "https://spoonacular.com/recipeImages/543687-556x370.jpg",
    ingredients: [
      {
        id: 93607,
        quantity: {
          amount: 1,
          unit: "cup",
        },
      },
      {
        id: 18942,
        quantity: {
          amount: 1,
          unit: "Tbsp",
        },
      },
      {
        id: 11424,
        quantity: {
          amount: 0.5,
          unit: "cup",
        },
      },
    ],
    instructions: [
      {
        number: 1,
        instruction:
          "Add all ingredients to a blender (except graham crackers if using). Cover and blend until well pureed then serve topped with crushed graham crackers if desired.*The banana is mostly what gives this smoothie it's sweetness, so I recommend using one that is speckled (not mushy though).Recipe Source: Cooking Classy",
      },
    ],
    tags: ["morning meal", "brunch", "breakfast", "comfort food"],
  },
];
export let testIngredientsData = [
  {
    id: 5555,
    name: "elbow macaroni",
    estimatedCostInCents: 580,
  },
  {
    id: 1145,
    name: "butter",
    estimatedCostInCents: 617,
  },
  {
    id: 1111,
    name: "all purpose flour",
    estimatedCostInCents: 205,
  },
  {
    id: 2047,
    name: "salt",
    estimatedCostInCents: 100,
  },
  {
    id: 11220,
    name: "ground black pepper",
    estimatedCostInCents: 130,
  },
  {
    id: 777,
    name: "milk",
    estimatedCostInCents: 305,
  },
  {
    id: 1919,
    name: "shredded cheddar cheese",
    estimatedCostInCents: 555,
  },
  {
    id: 1009016,
    name: "apple cider",
    estimatedCostInCents: 10,
  },
  {
    id: 9003,
    name: "pork chops",
    estimatedCostInCents: 15,
  },
  {
    id: 20027,
    name: "honey",
    estimatedCostInCents: 20,
  },
  {
    id: 93607,
    name: "pumpkin",
    estimatedCostInCents: 120,
  },
  {
    id: 18942,
    name: "soy milk",
    estimatedCostInCents: 220,
  },
  {
    id: 11424,
    name: "maple syrup",
    estimatedCostInCents: 230,
  },
];

export default { testUsers, testIngredientsData, testRecipeData };
