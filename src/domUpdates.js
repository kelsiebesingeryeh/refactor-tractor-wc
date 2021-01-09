let domUpdates = {
  displayCards(recipesList, cardArea) {
    cardArea.classList.remove('all')
    cardArea.innerHTML = '';
    recipesList.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
      class='card'>
      <header id='${recipe.id}' class='card-header'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
      <img id='${recipe.id}' class='add'
      src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
      recipes to cook'></button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe
      </label>
      <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'>
      </button></header>
      <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
      <img id='${recipe.id}' tabindex='0' class='card-picture'
      src='${recipe.image}' alt='Food from recipe'>
      $compilePantryData(recipe)</div>`)
    })
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
  }
}


export default domUpdates;
