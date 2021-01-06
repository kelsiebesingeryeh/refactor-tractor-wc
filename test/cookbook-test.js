import {expect} from 'chai';

import Cookbook from '../src/cookbook';
import {
  testIngredientsData,
  testRecipeData
} from '../src/data/test-data.js';

let cookbook;

describe('Cookbook', () => {
  beforeEach(() => {
    cookbook = new Cookbook(testRecipeData);
  });

  it('Should store all recipes', () => {
    expect(cookbook.recipes).to.deep.equal([
      {
        "name": "Simple Macaroni and Cheese",
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [{
                "name": "elbow macaroni",
                "id": 5555,
                "quantity": {
                    "amount": 8,
                    "unit": "oz"
                }
            },
            {
                "name": "butter",
                "id": 1145,
                "quantity": {
                    "amount": .25,
                    "unit": "c"
                }
            },
            {
                "name": "all purpose flour",
                "id": 1111,
                "quantity": {
                    "amount": .25,
                    "unit": "c"
                }
            },
            {
                "name": "salt",
                "id": 2047,
                "quantity": {
                    "amount": 0.5,
                    "unit": "tsp"
                }
            },
            {
                "name": "ground black pepper",
                "id": 11220,
                "quantity": {
                    "amount": 0.5,
                    "unit": "tsp"
                }
            },
            {
                "name": "milk",
                "id": 777,
                "quantity": {
                    "amount": 1,
                    "unit": "c"
                }
            },

            {
                "name": "shredded cheddar cheese",
                "id": 1919,
                "quantity": {
                    "amount": 2,
                    "unit": "c"
                }
            },
        ],
        "instructions": [{
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
        ],
        "tags": [
            "cheese",
            "dinner",
            "pasta",
            "comfort food",
        ]
    }]);
  });

  describe('findRecipe', () => {
    it('Should filter recipes by ingredients', () => {
      expect(cookbook.findRecipe('yolk').length).to.equal(2);
    });

    it('Should filter recipes by tag', () => {
      expect(cookbook.findRecipe('Sesame Cookies').length).to.equal(1);
    });
  });
})
