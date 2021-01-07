import { expect } from 'chai';

import User from '../src/user.js';
import {
  testUsers,
  testIngredientsData,
  testRecipeData,
} from "../src/data/test-data.js";

let userData = testUsers[0]
let user1;

describe('User', () => {
  beforeEach(() => {
    user1 = new User(userData.id, userData.name, userData.pantry, userData.favoriteRecipes);
  });

  it('Should have a property of favoriteRecipes with a default value', () => {
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to add recipes to favoriteRecipes', () =>{
    user1.addToList(testRecipeData[0], "favoriteRecipes");
    expect(user1.favoriteRecipes.includes(testRecipeData[0])).to.eql(true);
  });

  it('Should be able to remove recipes from favoriteRecipes', () =>{
    user1.removeFromFavorites(testUsers);
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to filter through favoriteRecipes by tag', () => {
    user1.addToList(testRecipeData[0], "favoriteRecipes");
    user1.addToList(testRecipeData[1], "favoriteRecipes");
    expect(user1.filterFavorites("cheese")).to.eql([testRecipeData[0]]);
  });

  it('Should be able to search favoriteRecipes by name or ingredient', () => {
    user1.addToList(testRecipeData[0], "favoriteRecipes");
    user1.addToList(testRecipeData[1], "favoriteRecipes");
    expect(user1.findFavorites("milk")).to.eql([testRecipeData[0]]);
  });

  it('Should be able to check ingredients in User/s pantry for a given recipe', () => {
    user1.addToList(testRecipeData[0], "favoriteRecipes");
    user1.addToList(testRecipeData[1], "favoriteRecipes");
    console.log(testUsers.pantry)
    expect(user1.checkPantry('Simple Macaroni and Cheese')).to.eql('You have the ingredients!');
  });

  it('Should inform User if they lack required ingredients for a given recipe', () => {
    user1.addToList(testRecipeData[0], "favoriteRecipes");
    user1.addToList(testRecipeData[1], "favoriteRecipes");
    expect(user1.checkPantry("Maple Dijon Apple Cider Grilled Pork Chops")).to.eql(`Sorry, you don't have the ingredients`);
  });

});
