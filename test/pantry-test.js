import { expect } from 'chai';

import User from '../src/user.js';
import Pantry from '../src/pantry.js';
import Recipe from '../src/recipe.js';
import Cookbook from '../src/cookbook.js';
import { testUsers, testIngredientsData, testRecipeData } from '../src/data/test-data.js';

let userData = testUsers[0];
let ingredientData = testIngredientsData;
let recipeData = testRecipeData;
let cookbook;
let user1;
let pantry;
let recipe;

describe.only('Pantry', () => {
  beforeEach( () => {
    cookbook = new Cookbook(recipeData)
    user1 = new User(userData.id, userData.name, userData.pantry)
    pantry = new Pantry(user1.pantry);
    recipe = new Recipe(cookbook.recipes[0], ingredientData)
  });

  it('should store a users pantry with the keys of ingredient and amount', () => {
    expect(pantry.contents).to.equal(user1.pantry);
  })

  it.only('should determine wheter a users pantry has enough ingredients to cook a given recipe', () => {
    expect(pantry.determineEnoughIngredients(recipe)).to.equal(true)
  })

  it('should remove the ingredients used for a given meal from my pantry, once that meal has been cooked', () => {
    pantry.removeIngredientsFromPantry()
    expect(pantry.contents).to.equal([
        {
            "ingredient": 5555,
            "amount": 1
        },
        {
            "ingredient": 1145,
            "amount": .75
        },
        {
            "ingredient": 1111,
            "amount": 2.75
        },
        {
            "ingredient": 2047,
            "amount": 4.5
        },
        {
            "ingredient": 11220,
            "amount": 3.5
        },
        {
            "ingredient": 777,
            "amount": 0
        },
        {
            "ingredient": 1919,
            "amount": 1
        }
      ])
  })

  it('should determine the amount of ingredients still needed to cook a given meal, based on what’s in my pantry', () => {
    pantry.removeIngredientsFromPantry()
    expect(pantry.determineIngredientsNeeded()).to.equal('You need more:', ['elbow macaroni', 'shredded cheddar cheese'])
  })

})
