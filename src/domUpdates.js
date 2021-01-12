let domUpdates = {
  displayCards(recipesList, cardArea, pantry) {
    cardArea.classList.remove('all')
    cardArea.innerHTML = '';
    recipesList.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
      class='card'>
      <header id='${recipe.id}' class='card-header'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button id='${recipe.id}' aria-label='add-button' class='add-button add-button${recipe.id} card-button'></button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe
      </label>
      <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'>
      </button></header>
      <img id='${recipe.id}' tabindex='0' class='card-picture'
      src='${recipe.image}' alt='Food from recipe'>
      <p id='${recipe.id}' class='recipe-name'>${recipe.name}</p>
      <label for='view-details' class='hidden'>Click to view recipe details
      </label>
      <button id='${recipe.id}' aria-label='view-recipe-button' class='view-details view-details${recipe.id}'>View Recipe</button>
      </div>
      `)
    })
  },

  displayCostMessage(id, missingIngredients, costOfRemainingIngredients) {
    let detailsDiv = document.querySelector(`.cook-details`);
    if(missingIngredients.length === 0){
      detailsDiv.innerHTML = `<p class='details-title'>Yes You Can!</p><p class='details-message'>You have ALL the ingredients in your pantry to cook this meal.</p>`
    } else {
      detailsDiv.innerHTML = `<p class='details-title'>No You Can't!</p><p class='details-message'>You will have to go shopping to get some of the ingredients needed to cook this meal.</p>
      <p class='details-missing'>Missing Ingredients: ${missingIngredients.join(', ')}</p>
      <p class='details-cost'>To restock these ingredients will cost: $${costOfRemainingIngredients}</p>`;
    };
  },

  greetUser(user) {
    const userName = document.querySelector('.user-info');
    userName.innerText = `Welcome, ${user.name}.`;
  },
  interactWithClassList(method, className, event, element) {
    if (method === 'add' && element) {
      element.classList.add(className);
    } else if (method === 'remove' && element) {
      element.classList.remove(className);
    } else if (method === 'add' && element === undefined) {
      event.target.classList.add(className);
    } else if (method === 'remove' && element === undefined) {
      event.target.classList.remove(className);
    } else if (method === 'contains') {
      return event.target.classList.contains(className);
    } else if (method === 'toggle' && element) {
      element.classList.toggle(className);
    }
  },
  displayOneLiners(element, text) {
    element.innerText = text;
  },
  populateRecipeCard(cardArea, recipeObject, costInDollars) {
    cardArea.innerHTML = `
    <article class= "recipe-details">
    <h3>${recipeObject.name}</h3>
    <div class='all-recipe-info'>
    <p class='recipe-ingredients'>
    <strong>It will cost: </strong><span class='cost recipe-info'>
    $${costInDollars}</span><br><br>
    <strong>You will need: </strong><span class='ingredients recipe-info'></span>
    </p>
    <div class='recipe-instructions'>
    <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
    </span></ol>
    </div>
    </div>
    </article>
    <article class='cook-recipe'>
      <h3>Can I Cook It?</h3>
      <div class='cook-details'>COOK</div>
      <label for='add-ingredients-to-pantry' class='hidden'>Click to add missing ingredients to your pantry
      </label>
      <button aria-label='add-ingredients-button' class='add-indredients-to-pantry'>Add Ingredients</button>
      <label for='cook-recipe' class='hidden'>Click to cook this recipe, and remove ingredients from your pantry
      </label>
      <button aria-label='add-ingredients-button' class='cook-recipe'>Cook Recipe</button>
    </article>`;
    let ingredientsSpan = document.querySelector('.ingredients');
    let instructionsSpan = document.querySelector('.instructions');
    recipeObject.ingredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
      ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
      ${ingredient.name}</li></ul>
      `)
    })
    recipeObject.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `<li class='instruction-li'>
      ${instruction.instruction}</li>
      `)
    })
  }
}


export default domUpdates;
