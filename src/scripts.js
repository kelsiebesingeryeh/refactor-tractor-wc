import './css/base.scss';
import './css/styles.scss';

import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';
import users from './data/users';

import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';

let favButton = document.querySelector('.view-favorites');
let toCookButton = document.querySelector('.view-to-cook-list')
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');
let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');
let cookbook = new Cookbook(recipeData);
let user, pantry;

window.onload = onStartup();

homeButton.addEventListener("click", displayCardButtons);
favButton.addEventListener('click', viewFavorites);
toCookButton.addEventListener('click', viewRecipesToCook);
cardArea.addEventListener("click", displayCardButtons);
searchButton.addEventListener("click", displaySearchRecipes);

function onStartup() {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = users.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry)
  pantry = new Pantry(newUser.pantry)
  displayCards(cookbook.recipes);
  greetUser();
}

function viewFavorites() {
  if (user.favoriteRecipes.length) {
    favButton.classList.add('hidden')
    displayCards(user.favoriteRecipes);
    getFavorites();
  }
}

function viewRecipesToCook() {
  if (user.recipesToCook.length) {
    displayCards(user.recipesToCook);
  }
}

function compilePantryData(recipe) {
  let missingIngredients = pantry.determineIngredientsNeeded(recipe);
  let partialRecipeData = pantry.convertMissingToRecipeSyntax(missingIngredients, recipe);
  let newRecipe = new Recipe(partialRecipeData, ingredientsData);
  let costOfRemainingIngredients = newRecipe.calculateCost();
  let message;
  if (missingIngredients.length === 0){
    message = `You have the ingredients!`;
  } else {
    message = `Sorry, you don't have the ingredients`
  };
  return `<p>${message}</p>
  <p>Missing Ingredients:${missingIngredients.join(',')}</p>
  <p>To restock these ingredients will cost: $${costOfRemainingIngredients} </p>`
}


function displayCards(recipesList) {
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
    ${compilePantryData(recipe)}</div>`)
  })
}


function greetUser() {
  const userName = document.querySelector('.user-info');
  userName.innerText = `Welcome, ${user.name}.`;
}

function favoriteCard(event) {
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  if (!event.target.classList.contains('favorite-active')) {
    event.target.classList.add('favorite-active');
    favButton.innerHTML = 'View Favorites';
    user.addToList(specificRecipe, 'favoriteRecipes');
  } else if (event.target.classList.contains('favorite-active')) {
    event.target.classList.remove('favorite-active');
    user.removeFromList(specificRecipe,'favoriteRecipes')
    displayCards(user.favoriteRecipes);
    getFavorites();
    if (!user.favoriteRecipes.length) {
      favButton.innerHTML = 'You have no favorites!'
    }
  }
}

function addCardToCookList(event) {
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  if (!event.target.classList.contains('cook-list-active')) {
    event.target.classList.add('cook-list-active');
    user.addToList(specificRecipe, 'recipesToCook');
  } else if (event.target.classList.contains('favorite-active')) {
    event.target.classList.remove('favorite-active');
    user.removeFromList(specificRecipe,'favoriteRecipes')
    displayCards(user.favoriteRecipes);
    getFavorites();
    if (!user.favoriteRecipes.length) {
      favButton.innerHTML = 'You have no favorites!'
    }
  }
}

function displayCardButtons(event) {
  if (event.target.classList.contains('favorite')) {
    favoriteCard(event);
  } else if (event.target.classList.contains('add-button')) {
    addCardToCookList(event);
  } else if (event.target.classList.contains('card-picture')) {
    displayDirections(event);
  } else if (event.target.classList.contains('home')) {
    favButton.classList.remove("hidden");
    displayCards(cookbook.recipes);
    getFavorites();
  }
}


function displayDirections(event) {
  favButton.classList.remove("hidden");
  let newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let recipeObject = new Recipe(newRecipeInfo, ingredientsData);
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
}

function displaySearchRecipes(event) {
  let filteredRecipes = cookbook.findRecipes(searchInput.value.toLowerCase());
  displayCards(filteredRecipes);
  filteredRecipes.forEach(recipe => {
    if (user.favoriteRecipes.includes(recipe)) {
      document
        .querySelector(`.favorite${recipe.id}`)
        .classList.add("favorite-active");
    }
  })
}
