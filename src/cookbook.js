class Cookbook {
  constructor(recipeData) {
    this.recipes = recipeData;
  }

  findRecipes(searchText) {
    return this.recipes.filter(recipe => {
      return recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(searchText) ||
        recipe.name.includes(searchText) || recipe.tags.includes(searchText)
      });
    })
  }
}

export default Cookbook;
