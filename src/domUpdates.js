let domUpdates = {
  displayCards(recipesList, cardArea, viewLabels) {
    this.interactWithClassList('remove', `all`, event, cardArea);
    this.interactWithClassList('add', `${viewLabels[0]}`, event, cardArea);
    this.interactWithClassList('remove', `${viewLabels[1]}`, event, cardArea);
    this.interactWithClassList('remove', `${viewLabels[2]}`, event, cardArea);
    cardArea.innerHTML = '';
    recipesList.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}-card'
      class='card'>
      <header id='${recipe.id}-header' class='card-header'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button id='${recipe.id}-add' aria-label='Add Recipe To Cook List' class='add-button add-button${recipe.id} card-button'></button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe
      </label>
      <button id='${recipe.id}-fav' aria-label='Favorite Button' class='favorite favorite${recipe.id} card-button'>
      </button></header>
      <div class="image-styling">
        <img id='${recipe.id}-img' tabindex='0' class='card-picture'
        src='${recipe.image}' alt='Food from recipe'>
      </div>
        <div class='info-card'>
          <p id='${recipe.id}-name' class='recipe-name'>${recipe.name}</p>
          <label for='view-details' class='hidden'>Click to view recipe details
          </label>
          <button id='${recipe.id}' aria-label='View Recipe' class='view-details view-details${recipe.id}'>View Recipe</button>
        </div>
      </div>
      `)
    })
  },

  displayCookDetails(id, missingIngredients, costOfRemainingIngredients) {
    let detailsArticle = document.querySelector(`.cook-recipe`);
    if(missingIngredients.length === 0){
      detailsArticle.innerHTML =
        `<h3>Can I Cook It?</h3>
        <div class='cook-details'>
        <p class='details-title'>Yes You Can!</p><p class='details-message'>You have ALL the ingredients in your pantry to cook this meal.</p>
        </div>
        <label for='add-ingredients-to-pantry' class='hidden'>Click to add missing ingredients to your pantry
        </label>
        <button aria-label='Add Ingredients To Pantry' id='${id}' class='add-indredients-to-pantry disabled' disabled>Add Ingredients</button>
        <label for='cook-recipe' class='hidden'>Click to cook this recipe, and remove ingredients from your pantry
        </label>
        <button aria-label='Cook This Recipe' id='${id}' class='cook-recipe-button'>Cook Recipe</button>`;
    } else {
      detailsArticle.innerHTML =
        `<h3>Can I Cook It?</h3>
        <div class='cook-details'>
        <p class='details-title'>No You Can't!</p><p class='details-message'>You will have to go shopping to get some of the ingredients needed to cook this meal.</p>
        <p class='details-missing'><b>Missing Ingredients:</b><br>${missingIngredients.join(', ')}</p>
        <p class='details-cost'>To restock these ingredients will cost: $${costOfRemainingIngredients}</p>
        </div>
        <label for='add-ingredients-to-pantry' class='hidden'>Click to add missing ingredients to your pantry
        </label>
        <button aria-label='Add Ingredients To Pantry' id='${id}' class='add-indredients-to-pantry'>Add Ingredients</button>
        <label for='cook-recipe' class='hidden'>Click to cook this recipe, and remove ingredients from your pantry
        </label>
        <button aria-label='Cook This Recipe' id='${id}' class='cook-recipe-button disabled' disabled>Cook Recipe</button>`;
    };
  },

  greetUser(user) {
    const userName = document.querySelector('.user-info');
    userName.innerText = `Welcome, ${user.name}.`;
  },
  interactWithClassList(method, className, event, element) {
    if (method === 'add' && element && className) {
      element.classList.add(className);
    } else if (method === 'remove' && element && className) {
      element.classList.remove(className);
    } else if (method === 'contains' && className && element) {
      return element.classList.contains(className);
    } else if (method === 'add' && element === undefined && className) {
      event.target.classList.add(className);
    } else if (method === 'remove' && element === undefined && className) {
      event.target.classList.remove(className);
    } else if (method === 'contains' && className && element === undefined) {
      return event.target.classList.contains(className);
    } else if (method === 'toggle' && element && className) {
      element.classList.toggle(className);
    }
  },
  displayOneLiners(element, text) {
    element.innerText = text;
  },
  populateRecipeDetails(cardArea, recipeObject, costInDollars) {
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
    <article class='cook-recipe'></article>`;

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