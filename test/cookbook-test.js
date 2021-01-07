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
    expect(cookbook.recipes[0].name).to.equal("Simple Macaroni and Cheese");
    expect(cookbook.recipes[2].name).to.equal("Pumpkin Cheesecake Breakfast Smoothie");
  });

  it('Should filter recipes by ingredients', () => {
    expect(cookbook.findRecipes('milk').length).to.equal(2);
    expect(cookbook.findRecipes('almond').length).to.equal(1);
    expect(cookbook.findRecipes('blue').length).to.equal(0);
  });

  it('Should filter recipes by name', () => {
    expect(cookbook.findRecipes('macaroni').length).to.equal(1);
    expect(cookbook.findRecipes('sesame cookies').length).to.equal(0);
  });

  it('Should filter recipes by tag', () => {
    expect(cookbook.findRecipes('pasta').length).to.equal(1);
    expect(cookbook.findRecipes('comfort food').length).to.equal(2);
    expect(cookbook.findRecipes('rasberry').length).to.equal(0);
  });
})
