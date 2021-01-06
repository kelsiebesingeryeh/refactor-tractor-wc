import { expect } from 'chai';

import User from '../src/user.js';
import {
  testUsers,
  testIngredientsData,
  testRecipeData,
} from "../src/data/test-data.js";

let user1 = testUsers[0]

describe.only('User', () => {
  beforeEach(() => {
    user1 = new User(user1.id, user1.name, user1.pantry, user1.favoriteRecipes);
  });

  it('Should have a property of favoriteRecipes with a default value', () => {
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to add recipes to favoriteRecipes', () =>{
    user1.addToFavorites(testRecipeData[0]);
    expect(user1.favoriteRecipes.includes(testRecipeData[0])).to.eql(true);
  });

  it('Should be able to remove recipes from favoriteRecipes', () =>{
    user1.removeFromFavorites(testUsers);
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('Should be able to filter through favoriteRecipes by tag', () => {
    user1.addToFavorites(testRecipeData[0]);
    user1.addToFavorites(testRecipeData[1]);
    expect(user1.filterFavorites("cheese")).to.eql([testRecipeData[0]]);
  });

  it('Should be able to search favoriteRecipes by name or ingredient', () => {
    user1.addToFavorites(testRecipeData[0]);
    user1.addToFavorites(testRecipeData[1]);
    expect(user1.findFavorites("milk")).to.eql([testRecipeData[0]]);
  });

  it('Should be able to check ingredients in User/s pantry for a given recipe', () => {
    user1.addToFavorites(testRecipeData[0]);
    user1.addToFavorites(testRecipeData[1]);
    expect(user1.checkPantry()).to.eql('You have the ingredients!');
  });

  it('Should inform User if they lack required ingredients for a given recipe', () => {
    expect(user1.checkPantry("butter")).to.eql(617);
  });
});
