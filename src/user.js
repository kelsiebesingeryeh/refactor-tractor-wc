class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1)
  }

  filterFavorites(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findFavorites(strgToSrch) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name.includes(strgToSrch)
      || recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(strgToSrch)
      });
    });
  }

  checkPantry(recipe) {
    let result;
    let singleRecipe = this.favoriteRecipes.find(item => item.name === recipe)
    singleRecipe.ingredients.forEach(ingredient => {
      this.pantry.forEach(item => {
        if ((ingredient.id === item.ingredient) &&
          (item.amount >= ingredient.quantity.amount)) {
          result = "You have the ingredients!";
        } else {
          result = `Sorry, you don't have the ingredients`;
        }
      })
    })
      return result;
  }
}


export default User;
