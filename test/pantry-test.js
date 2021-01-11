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

describe.only('Pantry', () => {
  beforeEach( () => {
    cookbook = new Cookbook(recipeData)
    user1 = new User(userData.id, userData.name, userData.pantry)
    user2 = new User(userData2.id, userData2.name, userData2.pantry)
    pantryTest2 = new Pantry(user2.pantry);
    pantryTest = new Pantry(user1.pantry);
    recipe = new Recipe(cookbook.recipes[0], ingredientData)
  });

  it.skip('should store a users pantry with the keys of ingredient and amount', () => {
    expect(pantryTest.contents).to.equal(user2.pantry);
  })

  it.skip('should determine wheter a users pantry has enough ingredients to cook a given recipe', () => {
    expect(pantryTest.determineEnoughIngredients(recipe)).to.equal(true);
    expect(pantryTest2.determineEnoughIngredients(recipe)).to.equal(false);
  })

  it.skip('should remove the ingredients used for a given meal from my pantry, once that meal has been cooked', () => {
    pantryTest.removeIngredientsFromPantry(recipe)
    expect(pantryTest.contents).to.deep.equal([
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
    // expect(pantryTest.determineIngredientsNeeded(recipe)).to.deep.equal(['elbow macaroni', 'milk', 'shredded cheddar cheese'])
    expect(pantryTest2.getMissingPartOfRecipe(recipe).ingredients).to.deep.equal([
      {
        name: "elbow macaroni",
        id: 5555,
        quantity: {
          amount: 0,
          unit: "oz",
        },
        estimatedCostInCents: 580
      },
      {
        name: "butter",
        id: 1145,
        quantity: {
          amount: 0,
          unit: "c",
        },
        estimatedCostInCents: 617
      },
      {
        name: "all purpose flour",
        id: 1111,
        quantity: {
          amount: 0,
          unit: "c",
        },
        estimatedCostInCents: 205
      },
      {
        name: "salt",
        id: 2047,
        quantity: {
          amount: 0,
          unit: "tsp",
        },
        estimatedCostInCents: 100
      },
      {
        name: "ground black pepper",
        id: 11220,
        quantity: {
          amount: 0,
          unit: "tsp",
        },
        estimatedCostInCents: 130
      },
      {
        name: "milk",
        id: 777,
        quantity: {
          amount: 1,
          unit: "c",
        },
        estimatedCostInCents: 305
      },
      {
        name: "shredded cheddar cheese",
        id: 1919,
        quantity: {
          amount: 0,
          unit: "c",
        },
        estimatedCostInCents: 555
      },
    ]);
  })

  it.skip('should calculate a cost of all missing ingredients', () => {
    pantryTest2.removeIngredientsFromPantry(recipe)
    let missingIngredients = pantryTest2.determineIngredientsNeeded(recipe)
    expect(pantryTest2.convertMissingToRecipeSyntax(missingIngredients, recipe)).to.deep.equal({
      name: "Shopping List",
      id: 0,
      image: "",
      ingredients: [
        {
          name: "elbow macaroni",
          id: 5555,
          quantity: {
            amount: 7
          },
        },
        {
          name: "milk",
          id: 777,
          quantity: {
            amount: 1,
          },
        },
        {
          name: "shredded cheddar cheese",
          id: 1919,
          quantity: {
            amount: 1,
          },
        },
      ],
      instructions: [],
      tags: [],
    })
  })

})
