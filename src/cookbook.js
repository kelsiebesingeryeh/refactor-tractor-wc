class Cookbook {
  constructor(recipeData) {
    this.recipes = recipeData;
  }

  findRecipes(searchText) {
    return this.recipes.filter(recipe => {
      return recipe.ingredients.find(ingredient => {
        return ingredient.name.toLowerCase().includes(searchText) ||
        recipe.name.toLowerCase().includes(searchText) || recipe.tags.includes(searchText)
      });
    })
  }
}

export default Cookbook;
