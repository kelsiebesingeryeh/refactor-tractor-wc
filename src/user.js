class User {
  constructor(id, name, pantry, ingredientData) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.ingredients = ingredientData;
  }

  addToList(recipe, list) {
    if (!this[list].includes(recipe)) {
      this[list].push(recipe);
    }
  }

  removeFromList(recipe, list) {
    const i = this[list].indexOf(recipe);
    this[list].splice(i, 1);
  }

  findFavorites(searchText) {
    return this.favoriteRecipes.filter((recipe) => {
      return recipe.ingredients.find((ingredient) => {
        let ingredientName = this.convertIngredientIdToName(ingredient);
        return (
          ingredientName.includes(searchText) ||
          recipe.name.toLowerCase().includes(searchText) ||
          recipe.tags.includes(searchText)
        );
      });
    });
  }

  convertIngredientIdToName(ingredient) {
    let ingredientData = this.ingredients.find(
      (entry) => entry.id === ingredient.id
    );
    return ingredientData.name;
  }

  checkPantry(recipe) {
    let result;
    let singleRecipe = this.favoriteRecipes.find(
      (item) => item.name === recipe
    );
    singleRecipe.ingredients.forEach((ingredient) => {
      this.pantry.forEach((item) => {
        if (
          ingredient.id === item.ingredient &&
          item.amount >= ingredient.quantity.amount
        ) {
          result = "You have the ingredients!";
        } else {
          result = `Sorry, you don't have the ingredients`;
        }
      });
    });
    return result;
  }
}


export default User;