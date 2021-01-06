class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients.reduce((ingredientList, recipeIngredient) => {
      let ingredientInfo = ingredientsData.find(ingredient => ingredient.id === recipeIngredient.id)
      return ingredientList.push({...recipeIngredient,...ingredientInfo})
      }, []);
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
  }


  calculateCost() {
    const costReducer = (costTally, ingredient) => {
      return costTally += ingredient.estimatedCostInCents;
    }
    return this.ingredients.reduce(costReducer, 0)
  }

  getInstructions() {
    return this.instructions;
  }

}

export default Recipe;
