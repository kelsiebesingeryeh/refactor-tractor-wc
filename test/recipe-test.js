import {
  expect
} from 'chai';

import Recipe from '../src/recipe.js';
import {
  testIngredientsData,
  testRecipeData
} from '../src/data/test-data.js';

let recipe;

describe('Recipe', () => {
  beforeEach(() => {
    recipe = new Recipe(testRecipeData[0], testIngredientsData);
  });

  it('Should hold its own ingredient data', () => {
    expect(recipe.ingredients).to.deep.equal([{
        id: 5555,
        quantity: {
          amount: 8,
          unit: "oz"
        },
        missing: 0,
        name: "elbow macaroni",
        estimatedCostInCents: 580,
      },
      {
        id: 1145,
        quantity: {
          amount: 0.25,
          unit: "c"
        },
        missing: 0,
        name: "butter",
        estimatedCostInCents: 617,
      },
      {
        id: 1111,
        quantity: {
          amount: 0.25,
          unit: "c"
        },
        missing: 0,
        name: "all purpose flour",
        estimatedCostInCents: 205,
      },
      {
        id: 2047,
        quantity: {
          amount: 0.5,
          unit: "tsp"
        },
        missing: 0,
        name: "salt",
        estimatedCostInCents: 100,
      },
      {
        id: 11220,
        quantity: {
          amount: 0.5,
          unit: "tsp"
        },
        missing: 0,
        name: "ground black pepper",
        estimatedCostInCents: 130,
      },
      {
        id: 777,
        quantity: {
          amount: 1,
          unit: "c"
        },
        missing: 0,
        name: "milk",
        estimatedCostInCents: 305,
      },
      {
        id: 1919,
        quantity: {
          amount: 2,
          unit: "c"
        },
        missing: 0,
        name: "shredded cheddar cheese",
        estimatedCostInCents: 555,
      },
    ]);
  })

  it('Should hold its own instruction data', () => {
    expect(recipe.instructions).to.deep.equal([{
        "number": 1,
        "instruction": "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. Drain."
      },
      {
        "number": 2,
        "instruction": "Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes."
      },
      {
        "number": 3,
        "instruction": "Fold macaroni into cheese sauce until coated."
      },
    ]);
  })

  it('Should be able to calculate the cost of its ingredients', () => {
    expect(recipe.calculateCost()).to.equal('63.76');
  });

});