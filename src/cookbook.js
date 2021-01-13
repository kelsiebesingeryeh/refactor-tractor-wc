class Cookbook {
  constructor(recipeData, ingredientsData) {
    this.recipes = recipeData;
    this.ingredients = ingredientsData;
  }

  findRecipesByTagNameOrIngredient(searchText) {
    return this.recipes.filter(recipe => {
      return recipe.ingredients.find(ingredient => {
        let ingredientName = this.convertIngredientIdToName(ingredient);
        return ingredientName.includes(searchText)
        || recipe.name.toLowerCase().includes(searchText)
        || recipe.tags.includes(searchText)
      });
    });
  }
  
  
  convertIngredientIdToName(ingredient) {
    let ingredientData = this.ingredients.find(entry => entry.id === ingredient.id);
    return ingredientData.name;
  }

}

export default Cookbook;
