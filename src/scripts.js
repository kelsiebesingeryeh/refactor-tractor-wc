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
let user, pantry, cookbook, users, recipes, ingredientData;

window.onload = loadData();

homeButton.addEventListener("click", displayCardButtons);
favButton.addEventListener('click', viewFavorites);
toCookButton.addEventListener('click', viewRecipesToCook);
cardArea.addEventListener("click", displayCardButtons);
searchButton.addEventListener("click", displaySearchRecipes);

function loadData() {
  return Promise.all([getUserData(), getRecipeData(), getIngredientData()]).then(data => {
    onStartup();
  })
}

function getUserData() {
  return fetch("http://localhost:3001/api/v1/users")
  .then(response => response.json())
  .then(userData => users = userData)
}

function getRecipeData() {
  return fetch("http://localhost:3001/api/v1/recipes")
    .then(response => response.json())
    .then(recipeData => recipes = recipeData)
      // cookbook = new Cookbook(recipeData, ingredientData);
  }

  function getIngredientData() {
    return fetch("http://localhost:3001/api/v1/ingredients")
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
  domUpdates.displayCards(recipes, cardArea);
  compilePantryData(recipes);
}

function compilePantryData(recipesList) {
  let recipeCount = 0;
  recipesList.forEach(recipe => {
    let currentRecipe = new Recipe(recipe, ingredientData)
    let missingIngredients = []
    let costOfRemainingIngredients;
    if(!pantry.determineEnoughIngredients(currentRecipe)){
    missingIngredients = pantry.getMissingPartOfRecipe(currentRecipe).ingredients.reduce((acc, ingredient) => {
      if(ingredient.missing > 0) {
        let specificIngredient = ingredientData.find(item => item.id === ingredient.id);
        acc.push(specificIngredient.name);
      }
      return acc;
      }, []
    );
    costOfRemainingIngredients = pantry.calculateMissingCost(currentRecipe)
    console.log(costOfRemainingIngredients)
    domUpdates.displayCostMessage(recipe.id, missingIngredients, costOfRemainingIngredients);
    recipeCount ++
    console.log(false,recipeCount,recipe ,missingIngredients, costOfRemainingIngredients)
  } else {
    costOfRemainingIngredients = pantry.calculateMissingCost(currentRecipe)
    domUpdates.displayCostMessage(recipe.id, missingIngredients, costOfRemainingIngredients);
    recipeCount ++
    console.log(true,recipeCount, "NONE",missingIngredients, "0", costOfRemainingIngredients)
  }
  });
}


function viewFavorites() {
  if (user.favoriteRecipes.length) {
    domUpdates.interactWithClassList('add', 'hidden', event, favButton);
    domUpdates.displayCards(user.favoriteRecipes, cardArea);
    compilePantryData(user.favoriteRecipes);
    getFavorites();
  }
}

function viewRecipesToCook() {
  if (user.recipesToCook.length) {
    domUpdates.displayCards(user.recipesToCook, cardArea);
    compilePantryData(user.recipesToCook);
  }
  user.recipesToCook.forEach(recipe => {
    if (user.favoriteRecipes.includes(recipe)) {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.interactWithClassList('add', 'favorite-active', event, recipeID);
    }
  })
}


function favoriteCard(event) {
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  if (!domUpdates.interactWithClassList('contains', 'favorite-active', event)) {
    domUpdates.interactWithClassList('add', 'favorite-active', event);
    user.addToList(specificRecipe, 'favoriteRecipes');
  } else if (domUpdates.interactWithClassList('contains', 'favorite-active', event)) {
    domUpdates.interactWithClassList('remove', 'favorite-active', event);
    user.removeFromList(specificRecipe,'favoriteRecipes')
    domUpdates.displayCards(user.favoriteRecipes, cardArea);
    compilePantryData(user.favoriteRecipes);
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
    domUpdates.displayCards(recipes, cardArea);
    compilePantryData(recipes);
    getFavorites();
  }
}



function displayDirections(event) {
  cookbook = new Cookbook(recipes, ingredientData);
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
  compilePantryData(filteredRecipes);
  filteredRecipes.forEach(recipe => {
    if (user.favoriteRecipes.includes(recipe)) {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.interactWithClassList('add', 'favorite-active', event, recipeID);
    }
  })
}

// function compilePantryData(recipesList) {
//   let recipeCount = 0;
//   recipesList.forEach(recipe => {
//     let currentRecipe = new Recipe(recipe, ingredientData)
//     let missingIngredients = []
//     let costOfRemainingIngredients = 0
//     if(!pantry.determineEnoughIngredients(currentRecipe)){
//     missingIngredients = pantry.getMissingPartOfRecipe(currentRecipe).ingredients.reduce((acc, ingredient) => {
//       if(ingredient.missing > 0) {
//         let specificIngredient = ingredientData.find(item => item.id === ingredient.id);
//         acc.push(specificIngredient.name);
//       }
//       return acc;
//       }, []
//     );
//     let costOfRemainingIngredients = pantry.calculateMissingCost(currentRecipe).toFixed(2);
//     domUpdates.displayCostMessage(recipe.id, missingIngredients, costOfRemainingIngredients);
//     recipeCount ++
//     console.log(recipeCount,recipe ,missingIngredients, costOfRemainingIngredients)
//   } else {
//     domUpdates.displayCostMessage(recipe.id, missingIngredients, costOfRemainingIngredients);
//     recipeCount ++
//     console.log(recipeCount, "NONE",missingIngredients, "0", costOfRemainingIngredients)
//   }
//   });
// }
