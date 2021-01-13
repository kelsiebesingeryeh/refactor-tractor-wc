import {
  expect
} from 'chai';

import Cookbook from '../src/cookbook';
import {
  testIngredientsData,
  testRecipeData
} from '../src/data/test-data.js';

let cookbook;

describe('Cookbook', () => {
  beforeEach(() => {
    cookbook = new Cookbook(testRecipeData, testIngredientsData);
  });

  it('Should store all recipes', () => {
    expect(cookbook.recipes[0].name).to.equal("Simple Macaroni and Cheese");
    expect(cookbook.recipes[2].name).to.equal("Pumpkin Cheesecake Breakfast Smoothie");
  });

  it('Should filter recipes by ingredients', () => {
    expect(cookbook.findRecipesByTagNameOrIngredient("milk").length).to.equal(
      2
    );
    expect(cookbook.findRecipesByTagNameOrIngredient('almond').length).to.equal(0);
  });
  it('Should filter recipes by name', () => {
    expect(cookbook.findRecipesByTagNameOrIngredient('macaroni').length).to.equal(1);
    expect(cookbook.findRecipesByTagNameOrIngredient('sesame cookies').length).to.equal(0);
  });
  it('Should filter recipes by tag', () => {
    expect(cookbook.findRecipesByTagNameOrIngredient('pasta').length).to.equal(1);
    expect(cookbook.findRecipesByTagNameOrIngredient('comfort food').length).to.equal(2);
    expect(cookbook.findRecipesByTagNameOrIngredient('rasberry').length).to.equal(0);
  });
})