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

  removeIngredientsFromPantry(recipe){
    let newArr = [];
    let newInventory = this.contents.forEach(item => {
      recipe.ingredients.forEach(ing => {
        if(ing.id === item.ingredient){
          let obj = {"ingredient": item.ingredient, "amount": item.amount -= ing.quantity.amount }
          newArr.push(obj)
        }
      })
      return newArr
    })
    return this.contents = newArr
  }

  determineIngredientsNeeded(recipe){
    let neededIng = [];
    if(this.determineEnoughIngredients(recipe) === false){
      recipe.ingredients.forEach(ing => {
        this.contents.forEach(item => {
          if((ing.id === item.ingredient)
          && (ing.quantity.amount > item.amount)){
            return neededIng.push(ing.name);
          }
        })
      })
    }
    return neededIng;
  }



}

export default Pantry;
