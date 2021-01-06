class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

  determineEnoughIngredients(recipe){
    let result;
    recipe.ingredients.forEach(ingredient => {
      this.contents.forEach(item => {
        if((ingredient.id === item.ingredient)
        && (ingredient.quantity.amount <= item.amount)){
          result = true;
        } else {
          result = false;
        }
      })
    })
    return result;
  }

  determineIngredientsNeeded(){

  }

  removeIngredientsFromPantry(){

  }



}

export default Pantry;
