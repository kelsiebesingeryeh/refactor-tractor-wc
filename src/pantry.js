class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }


  determineEnoughIngredients(recipe) {
    let result;
    recipe.ingredients.forEach(ingredient => {
      if(!this.contents.some(entry => entry.ingredient === ingredient.id)) {
        result = false;
      } else if(this.contents.some(entry => entry.ingredient === ingredient.id && entry.amount < ingredient.quantity.amount)) {
        result = false;
      }
    })
    if(result === undefined) {
      result = true;
    }
    return result;
  }


  getMissingPartOfRecipe(recipe) {
    let newIngredients;
    if(this.determineEnoughIngredients(recipe)) {
      return recipe;
    } else {
      newIngredients = recipe.ingredients.map(ingredient => {
        if(!this.contents.some(entry => entry.ingredient === ingredient.id)) {
          return ingredient;
        } else {
          let newIngredient;
          this.contents.forEach(entry => {
            if(entry.ingredient === ingredient.id && entry.amount < ingredient.quantity.amount) {
              let missingAmount = ingredient.quantity.amount - entry.amount;
              ingredient.quantity.amount = missingAmount;
              newIngredient = ingredient;
            } else if(entry.ingredient === ingredient.id && entry.amount >= ingredient.quantity.amount){
              ingredient.quantity.amount = 0;
              newIngredient = ingredient;
            }
          })
          return newIngredient;
        }
      });
      recipe.ingredients = newIngredients;
      return recipe;
    }
  }

}






























//   determineEnoughIngredients(recipe){
//     let result;
//     recipe.ingredients.forEach(ingredient => {
//       this.contents.forEach(item => {
//         if((ingredient.id === item.ingredient)
//         && (ingredient.quantity.amount <= item.amount)){
//           result = true;
//         } else {
//           result = false;
//         }
//       })
//     })
//     return result;
//   }
//
//   removeIngredientsFromPantry(recipe){
//     return this.contents.reduce((acc, item) => {
//       recipe.ingredients.forEach(ing => {
//         if(ing.id === item.ingredient){
//           let obj = {
//             "ingredient": item.ingredient,
//             "amount": item.amount -= ing.quantity.amount
//           }
//           acc.push(obj)
//         }
//       })
//       return acc;
//     }, [])
//   }
//
//   determineIngredientsNeeded(recipe){
//     if(this.determineEnoughIngredients(recipe) === false){
//       return recipe.ingredients.reduce((acc, ing) => {
//         this.contents.forEach(item => {
//           if((ing.id === item.ingredient)
//           && (ing.quantity.amount > item.amount)){
//             if (!acc.includes(ing.name)){
//               acc.push(ing.name);
//             }
//           }
//         })
//         return acc;
//       }, [])
//     }
//   }
//
//   convertMissingToRecipeSyntax(missingIngredients, recipe){
//     return missingIngredients.reduce((acc, item) => {
//       let obj = {};
//       recipe.ingredients.forEach(ing => {
//         this.contents.forEach(content => {
//         if((item === ing.name) && (content.ingredient === ing.id)){
//           obj.name = item;
//           obj.id = ing.id;
//           obj.quantity = {amount: (ing.quantity.amount - content.amount)}
//         }
//         })
//       })
//       if(!acc.ingredients.includes(obj)){
//         acc.ingredients.push(obj)
//       }
//       return acc;
//     }, {name: "Shopping List", id: 0, image: "", ingredients: [], instructions: [], tags: []})
//   }
// }



export default Pantry;
