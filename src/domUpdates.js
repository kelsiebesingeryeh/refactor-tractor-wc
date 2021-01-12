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
      <div class='cost${recipe.id}'>COST</div>
      </div>
      `)
    })
  },

  displayCostMessage(enoughIngredients, id, missingIngredients, costOfRemainingIngredients) {
    let costDiv = document.querySelector(`.cost${id}`);
    if(enoughIngredients){
      let message = `You have the ingredients!`;
      costDiv.innerHTML = `<p>You have the ingredients!</p>;
      <button>Cook</button>`
    } else {
      costDiv.innerHTML = `<p>You do not have the ingredients!</p><p>Missing Ingredients: ${missingIngredients.join(', ')}</p>
      <p>To restock these ingredients will cost: $${costOfRemainingIngredients}</p>`;
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
