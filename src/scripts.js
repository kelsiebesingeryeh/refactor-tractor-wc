// import './css/_variables.scss';
import './css/index.scss';

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
  // getRecipeData();
  getIngredientData();
  getUserData();
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
      cookbook = new Cookbook(recipeData, ingredientData)
      domUpdates.displayCards(cookbook.recipes, cardArea)
    })
  }

  function getIngredientData() {
    fetch("http://localhost:3001/api/v1/ingredients")
    .then(response => response.json())
    .then(data => {
      ingredientData = data;
      getRecipeData();
    })
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
    domUpdates.interactWithClassList('add', 'hidden', event, favButton);
    domUpdates.displayCards(user.favoriteRecipes, cardArea);
    getFavorites();
  }
}

function viewRecipesToCook() {
  if (user.recipesToCook.length) {
    domUpdates.displayCards(user.recipesToCook, cardArea);
  }
  user.recipesToCook.forEach(recipe => {
    if (user.favoriteRecipes.includes(recipe)) {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.interactWithClassList('add', 'favorite-active', event, recipeID);
    }
  })
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
  if (!domUpdates.interactWithClassList('contains', 'add-active', event)) {
    domUpdates.interactWithClassList('add', 'add-active', event);
    user.addToList(specificRecipe, 'recipesToCook');
  } else if (domUpdates.interactWithClassList('contains', 'add-active', event)) {
    domUpdates.interactWithClassList('remove', 'add-active', event);
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
  domUpdates.interactWithClassList('remove', 'hidden', event, favButton)
  let newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let recipeObject = new Recipe(newRecipeInfo, ingredientData);
  let cost = recipeObject.calculateCost();
  let costInDollars = (cost / 100).toFixed(2);
  domUpdates.interactWithClassList('add', 'all', event, cardArea);
  domUpdates.populateRecipeCard(cardArea, recipeObject, costInDollars);
}

function getFavorites() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.interactWithClassList('add', 'favorite-active', event, recipeID);
    })
  }
}

function displaySearchRecipes(event) {
  let filteredRecipes = cookbook.findRecipes(searchInput.value.toLowerCase());
  domUpdates.displayCards(filteredRecipes, cardArea);
  filteredRecipes.forEach(recipe => {
    if (user.favoriteRecipes.includes(recipe)) {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.interactWithClassList('add', 'favorite-active', event, recipeID);
    }
  })
}
