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
    expect(cookbook.recipes[1].name).to.equal("Pumpkin Cheesecake Breakfast Smoothie");
  });

  describe('findRecipe', () => {
    it('Should filter recipes by ingredients', () => {
      expect(cookbook.findRecipes('milk').length).to.equal(2);
      expect(cookbook.findRecipes('almond').length).to.equal(1);
      expect(cookbook.findRecipes('blue').length).to.equal(0);
    });

    it('Should filter recipes by name', () => {
      expect(cookbook.findRecipes('Macaroni').length).to.equal(1);
      expect(cookbook.findRecipes('Sesame Cookies').length).to.equal(0);
    });

    it('Should filter recipes by tag', () => {
      expect(cookbook.findRecipes('dinner').length).to.equal(1);
      expect(cookbook.findRecipes('comfort').length).to.equal(2);
      expect(cookbook.findRecipes('rasberry').length).to.equal(0);
    });
  });
})
