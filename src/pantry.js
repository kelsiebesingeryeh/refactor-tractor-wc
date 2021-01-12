class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }


  // determineEnoughIngredients(recipe) {
  //   let result;
  //   recipe.ingredients.forEach(ingredient => {
  //     this.contents.forEach(item => {
  //       if((item.ingredient === ingredient.id)
  //       && (item.amount < ingredient.quantity.amount)){
  //         result = false;
  //         return result;
  //       } else if((item.ingredient === ingredient.id)
  //       && (item.amount >= ingredient.quantity.amount)) {
  //         result = true;
  //       }
  //     })
  //   })
  //   return result;
  // }

getMissingPartOfRecipe(recipe) {
  let newRecipe = Object.keys(recipe).reduce((acc, key) => {
    acc[key] = recipe[key]
    return acc;
  }, {})
  let newIngredients = newRecipe.ingredients.map(ingredient => {
      if(!this.contents.some(entry => entry.ingredient === ingredient.id)) {
        return ingredient;
      } else {
        this.contents.forEach(entry => {
          if(entry.ingredient === ingredient.id && entry.amount < ingredient.quantity.amount) {
            let missingAmount = ingredient.quantity.amount - entry.amount;
            ingredient.missing = missingAmount;
          } else if(entry.ingredient === ingredient.id && entry.amount >= ingredient.quantity.amount){
            ingredient.missing = 0;
          }
        })
        return ingredient;
      }
    });
    newRecipe.ingredients = newIngredients;
    return newRecipe;
  }

  determineEnoughIngredients(recipe) {
    let recipeCheck = this.getMissingPartOfRecipe(recipe)
    return recipeCheck.ingredients.every(item => item.missing === 0)
}

  calculateMissingCost(recipe) {
    let shoppingList = this.getMissingPartOfRecipe(recipe);
    const totalCents = shoppingList.ingredients.reduce((acc, ingredient) => {
      let costForRecipe;
      recipe.ingredients.forEach(item => {
        if(ingredient.id === item.id){
          acc += item.estimatedCostInCents * ingredient.missing;
        }
      })
      return acc;
    }, 0);
    return totalCents * .01;
  }


}


export default Pantry;
