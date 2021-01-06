class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients.map(recipeIngredient => {
      let ingredientInfo = ingredientsData.find(ingredient => ingredient.id === recipeIngredient.id);
      return {...recipeIngredient,...ingredientInfo};
    });
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
  }


  calculateCost() {
    const totalCents = this.ingredients.reduce((costTally, ingredient) => {
      return costTally += ingredient.estimatedCostInCents;
    }, 0);
    return totalCents / 100;
  }

  getInstructions() {
    return this.instructions;
  }

}

export default Recipe;
