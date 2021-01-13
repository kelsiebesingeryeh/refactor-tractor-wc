import { expect } from 'chai';

import User from '../src/user.js';
import Pantry from '../src/pantry.js';
import Recipe from '../src/recipe.js';
import Cookbook from '../src/cookbook.js';
import { testUsers, testIngredientsData, testRecipeData } from '../src/data/test-data.js';

let userData = testUsers[1];
let userData2 = testUsers[2];
let ingredientData = testIngredientsData;
let recipeData = testRecipeData;
let cookbook;
let user2;
let user1;
let pantryTest;
let pantryTest2;
let recipe;

describe('Pantry', () => {
  beforeEach( () => {
    cookbook = new Cookbook(recipeData)
    user1 = new User(userData.id, userData.name, userData.pantry)
    user2 = new User(userData2.id, userData2.name, userData2.pantry)
    pantryTest2 = new Pantry(user2.pantry);
    pantryTest = new Pantry(user1.pantry);
    recipe = new Recipe(cookbook.recipes[0], ingredientData)
  });

  it('should store a users pantry with the keys of ingredient and amount', () => {
    expect(pantryTest2.contents).to.equal(user2.pantry);
  })

  it('should determine whether a users pantry has enough ingredients to cook a given recipe', () => {
    expect(pantryTest.determineEnoughIngredients(recipe)).to.equal(true);
    expect(pantryTest2.determineEnoughIngredients(recipe)).to.equal(false);
  })

  it('should return the amounts of ingredients to be removed or added upon cooking recipe', () => {
    expect(pantryTest.removeIngredientsFromPantry(recipe)).to.deep.equal([
      { ingredient: 5555, amountToRemove: -8 },
      { ingredient: 1145, amountToRemove: -0.25 },
      { ingredient: 1111, amountToRemove: -0.25 },
      { ingredient: 2047, amountToRemove: -0.5 },
      { ingredient: 11220, amountToRemove: -0.5 },
      { ingredient: 777, amountToRemove: -1 },
      { ingredient: 1919, amountToRemove: -2 },
    ]);
    let shoppingList = pantryTest2.getMissingPartOfRecipe(recipe);
    expect(pantryTest2.addIngredientsToPantry(shoppingList)).to.deep.equal([
      { ingredient: 777, amountToAdd: 5 },
    ]);
  })

  it('should determine the amount of ingredients still needed to cook a given meal, based on what’s in my pantry', () => {
    expect(
      pantryTest2.getMissingPartOfRecipe(recipe).ingredients
    ).to.deep.equal([
      {
        name: "elbow macaroni",
        id: 5555,
        quantity: {
          amount: 8,
          unit: "oz",
        },
        estimatedCostInCents: 580,
        missing: 0,
      },
      {
        name: "butter",
        id: 1145,
        quantity: {
          amount: 0.25,
          unit: "c",
        },
        estimatedCostInCents: 617,
        missing: 0,
      },
      {
        name: "all purpose flour",
        id: 1111,
        quantity: {
          amount: 0.25,
          unit: "c",
        },
        estimatedCostInCents: 205,
        missing: 0,
      },
      {
        name: "salt",
        id: 2047,
        quantity: {
          amount: 0.5,
          unit: "tsp",
        },
        estimatedCostInCents: 100,
        missing: 0,
      },
      {
        name: "ground black pepper",
        id: 11220,
        quantity: {
          amount: 0.5,
          unit: "tsp",
        },
        estimatedCostInCents: 130,
        missing: 0,
      },
      {
        name: "milk",
        id: 777,
        quantity: {
          amount: 1,
          unit: "c",
        },
        estimatedCostInCents: 305,
        missing: 1,
      },
      {
        name: "shredded cheddar cheese",
        id: 1919,
        quantity: {
          amount: 2,
          unit: "c",
        },
        estimatedCostInCents: 555,
        missing: 0,
      },
    ]);
  })

  it('should calculate a cost of all missing ingredients', () => {
    expect(pantryTest2.calculateMissingCost(recipe)).to.equal('3.05')
  })

})
