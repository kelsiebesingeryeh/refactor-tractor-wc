import './css/base.scss';
import './css/styles.scss';

// import recipeData from './data/recipes';
// import ingredientsData from './data/ingredients';
// import users from './data/users';

import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';
import domUpdates from './domUpdates';

let favButton = document.querySelector('.view-favorites');
let toCookButton = document.querySelector('.view-to-cook-list')
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');
let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');
let user, pantry, cookbook, users, ingredientData;

window.onload = loadData();

homeButton.addEventListener("click", displayCardButtons);
favButton.addEventListener('click', viewFavorites);
toCookButton.addEventListener('click', viewRecipesToCook);
cardArea.addEventListener("click", displayCardButtons);
searchButton.addEventListener("click", displaySearchRecipes);

function loadData() {
  getRecipeData();
  getUserData();
  getIngredientData();
}
function getUserData() {
  fetch("http://localhost:3001/api/v1/users")
  .then((response) => response.json())
  .then(userData => users = userData)
  .then((userData) => onStartup());
}

function getRecipeData() {
  fetch("http://localhost:3001/api/v1/recipes")
    .then((response) => response.json())
    .then((recipeData) => {
      cookbook = new Cookbook(recipeData)
      domUpdates.displayCards(cookbook.recipes, cardArea)
    })
  }

  function getIngredientData() {
    fetch("http://localhost:3001/api/v1/ingredients")
    .then(response => response.json())
    .then(data => ingredientData = data)
  }

function onStartup() {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = users.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry)
  pantry = new Pantry(newUser.pantry)
  domUpdates.greetUser(user);
  getFavorites();
}



function viewFavorites() {
  if (user.favoriteRecipes.length) {
    favButton.classList.add('hidden')
    domUpdates.displayCards(user.favoriteRecipes, cardArea);
    getFavorites();
  }
}

function viewRecipesToCook() {
  if (user.recipesToCook.length) {
    domUpdates.displayCards(user.recipesToCook, cardArea);
  }
}

// function compilePantryData(recipe) {
//   let missingIngredients = pantry.determineIngredientsNeeded(recipe);
//   let partialRecipeData = pantry.convertMissingToRecipeSyntax(missingIngredients, recipe);
//   let newRecipe = new Recipe(partialRecipeData, ingredientsData);
//   let costOfRemainingIngredients = newRecipe.calculateCost();
//   let message;
//   if (missingIngredients.length === 0){
//     message = `You have the ingredients!`;
//   } else {
//     message = `Sorry, you don't have the ingredients`
//   };
//   return `<p>${message}</p>
//   <p>Missing Ingredients:${missingIngredients.join(',')}</p>
//   <p>To restock these ingredients will cost: $${costOfRemainingIngredients} </p>`
// }


function favoriteCard(event) {
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  if (!domUpdates.interactWithClassList('contains', 'favorite-active', event)) {
    domUpdates.interactWithClassList('add', 'favorite-active', event);
    domUpdates.displayOneLiners(favButton, 'View Favorites')
    user.addToList(specificRecipe, 'favoriteRecipes');
  } else if (domUpdates.interactWithClassList('contains', 'favorite-active', event)) {
    domUpdates.interactWithClassList('remove', 'favorite-active', event);
    user.removeFromList(specificRecipe,'favoriteRecipes')
    domUpdates.displayCards(user.favoriteRecipes, cardArea);
    getFavorites();
  }
}

function addCardToCookList(event) {
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  if (!domUpdates.interactWithClassList('contains', 'cook-list-active', event)) {
    domUpdates.interactWithClassList('add', 'cook-list-active', event);
    user.addToList(specificRecipe, 'recipesToCook');
  } else if (domUpdates.interactWithClassList('contains', 'cook-list-active', event)) {
    domUpdates.interactWithClassList('remove', 'cook-list-active', event);
    user.removeFromList(specificRecipe,'recipesToCook')
  }
}

function displayCardButtons(event) {
  if (domUpdates.interactWithClassList('contains', 'favorite', event)) {
    favoriteCard(event);
  } else if (domUpdates.interactWithClassList('contains', 'add-button', event) || domUpdates.interactWithClassList('contains', 'add', event)) {
    addCardToCookList(event);
  } else if (domUpdates.interactWithClassList('contains', 'card-picture', event)) {
    displayDirections(event);
  } else if (domUpdates.interactWithClassList('contains', 'home', event)) {
    domUpdates.interactWithClassList('remove', 'hidden', event, favButton);
    domUpdates.displayCards(cookbook.recipes, cardArea);
    getFavorites();
  }
}



function displayDirections(event) {
  favButton.classList.remove("hidden");
  let newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let recipeObject = new Recipe(newRecipeInfo, ingredientData);
  let cost = recipeObject.calculateCost()
  let costInDollars = (cost / 100).toFixed(2)
  cardArea.classList.add('all');
  cardArea.innerHTML = `<h3>${recipeObject.name}</h3>
  <p class='all-recipe-info'>
  <strong>It will cost: </strong><span class='cost recipe-info'>
  $${costInDollars}</span><br><br>
  <strong>You will need: </strong><span class='ingredients recipe-info'></span>
  <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
  </span></ol>
  </p>`;
  let ingredientsSpan = document.querySelector('.ingredients');
  let instructionsSpan = document.querySelector('.instructions');
  recipeObject.ingredients.forEach(ingredient => {
    ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
    ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
    ${ingredient.name}</li></ul>
    `)
  })
  recipeObject.instructions.forEach(instruction => {
    instructionsSpan.insertAdjacentHTML('beforebegin', `<li>
    ${instruction.instruction}</li>
    `)
  })
}

function getFavorites() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
    })
  }
  if (!user.favoriteRecipes.length) {
    domUpdates.displayOneLiners(favButton, 'You have no favorites!')
  }
}

function displaySearchRecipes(event) {
  let filteredRecipes = cookbook.findRecipes(searchInput.value.toLowerCase());
  domUpdates.displayCards(filteredRecipes, cardArea);
  filteredRecipes.forEach(recipe => {
    if (user.favoriteRecipes.includes(recipe)) {
      document
        .querySelector(`.favorite${recipe.id}`)
        .classList.add("favorite-active");
    }
  })
}
