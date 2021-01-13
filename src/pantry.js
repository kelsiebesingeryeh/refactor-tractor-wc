class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

getMissingPartOfRecipe(recipe) {
  let newRecipe = Object.keys(recipe).reduce((acc, key) => {
    acc[key] = recipe[key]
    return acc;
  }, {})
  let newIngredients = newRecipe.ingredients.map(ingredient => {
      if(!this.contents.some(entry => entry.ingredient === ingredient.id)) {
        ingredient.missing = ingredient.quantity.amount;
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
    const totalCents = shoppingList.ingredients.reduce((costTally, ingredient) => {
      let costForRecipe = ingredient.estimatedCostInCents * ingredient.missing;
      return costTally += costForRecipe;
    }, 0);
    return (totalCents / 100).toFixed(2);
  }

  removeIngredientsFromPantry(recipe){
  let ingredientsInPantry = recipe.ingredients.reduce((acc, ingredient) => {
    this.contents.forEach(item => {
      if(ingredient.id === item.ingredient){
        let obj = {
          "ingredient": item.ingredient,
          "amountToRemove":  -1 * ingredient.quantity.amount
        }
        acc.push(obj)
      }
    })
    return acc;
  }, [])
  this.contents = ingredientsInPantry;
  // return ingredientsInPantry;
}

addIngredientsToPantry(recipe){
let ingredientsInPantry = recipe.ingredients.reduce((acc, ingredient) => {
    console.log('OUT',ingredient.missing, ingredient.missing > 0)
  if(ingredient.missing > 0){
      console.log('IN',ingredient.id)
      console.log('true')
        let obj = {
          "ingredient": ingredient.id,
          "amountToAdd": ingredient.missing,
          };
        acc.push(obj)
      }
      return acc
    }, [])
    this.contents = ingredientsInPantry;
    // return ingredientsInPantry;
  }


}


export default Pantry;
