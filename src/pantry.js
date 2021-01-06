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
    return this.contents.reduce((acc, item) => {
      recipe.ingredients.forEach(ing => {
        if(ing.id === item.ingredient){
          let obj = {
            "ingredient": item.ingredient,
            "amount": item.amount -= ing.quantity.amount
          }
          acc.push(obj)
        }
      })
      return acc;
    }, [])
  }

  determineIngredientsNeeded(recipe){
    if(this.determineEnoughIngredients(recipe) === false){
      return recipe.ingredients.reduce((acc, ing) => {
        this.contents.forEach(item => {
          if((ing.id === item.ingredient)
          && (ing.quantity.amount > item.amount)){
            acc.push(ing.name);
          }
        })
        return acc;
      }, [])
    }
    
}



export default Pantry;
