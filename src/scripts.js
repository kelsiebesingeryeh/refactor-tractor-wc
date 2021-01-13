import './css/index.scss';
import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';
import domUpdates from './domUpdates';

let favButton = document.querySelector('.view-favorites');
let toCookButton = document.querySelector('.view-to-cook-list')
let homeButton = document.querySelector('.home')
let mobileFavButton = document.querySelector(".view-favorites-mobile");
let mobileToCookButton = document.querySelector(".view-to-cook-list-mobile");
let mobileHomeButton = document.querySelector(".home-mobile");
let cardArea = document.querySelector('.all-cards');
let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');
let hamburgerMenu = document.querySelector('.hamburger');
let hamburgerMenuContent = document.querySelector(".hamburger-content");
let user, pantry, cookbook, users, recipes, ingredientData;

window.onload = loadData();

homeButton.addEventListener("click", returnHome);
favButton.addEventListener('click', viewFavorites);
toCookButton.addEventListener('click', viewRecipesToCook);
mobileFavButton.addEventListener("click", viewFavorites);
mobileToCookButton.addEventListener("click", viewRecipesToCook);
mobileHomeButton.addEventListener("click", returnHome);
cardArea.addEventListener("click", displayCardButtons);
searchButton.addEventListener("click", displaySearchRecipes);
hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  domUpdates.interactWithClassList("toggle", "hidden", event, hamburgerMenuContent);
}

function loadData() {
  return Promise.all([getUserData(), getRecipeData(), getIngredientData()])
    .then(data => {
      onStartup();
    })
    .catch(error => console.log(error))
}

function getUserData() {
  return fetch("http://localhost:3001/api/v1/users")
    .then(response => response.json())
    .then(userData => users = userData)
    .catch(error => console.log(error))
}

function getRecipeData() {
  return fetch("http://localhost:3001/api/v1/recipes")
    .then(response => response.json())
    .then(recipeData => recipes = recipeData)
    .catch(error => console.log(error))
}

function getIngredientData() {
  return fetch("http://localhost:3001/api/v1/ingredients")
    .then(response => response.json())
    .then(data => ingredientData = data)
    .catch(error => console.log(error))
}

function onStartup() {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = users.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry)
  pantry = new Pantry(newUser.pantry)
  cookbook = new Cookbook(recipes, ingredientData);
  domUpdates.greetUser(user);
  domUpdates.displayCards(recipes, cardArea, ['','','']);
}

function compilePantryData(recipe) {
  console.log('BOOM')
  let currentRecipe = new Recipe(recipe, ingredientData)
  let missingIngredients = []
  let costOfRemainingIngredients;
  if (!pantry.determineEnoughIngredients(currentRecipe)) {
    missingIngredients = pantry.getMissingPartOfRecipe(currentRecipe).ingredients.reduce((acc, ingredient) => {
      if (ingredient.missing > 0) {
        let specificIngredient = ingredientData.find(item => item.id === ingredient.id);
        acc.push(specificIngredient.name);
      }
      return acc;
    }, []);
    costOfRemainingIngredients = pantry.calculateMissingCost(currentRecipe)
    domUpdates.displayCostMessage(recipe.id, missingIngredients, costOfRemainingIngredients);
  } else {
    costOfRemainingIngredients = pantry.calculateMissingCost(currentRecipe)
    domUpdates.displayCostMessage(recipe.id, missingIngredients, costOfRemainingIngredients);
  }
}


function viewFavorites() {
  if (user.favoriteRecipes.length) {
    domUpdates.interactWithClassList('add', 'hidden', event, favButton);
    console.log(user.favoriteRecipes);
    domUpdates.displayCards(user.favoriteRecipes, cardArea, ['favoriteRecipes','recipesToCook','']);
    getFavorites();
  }
  user.favoriteRecipes.forEach(recipe => {
    if (user.recipesToCook.includes(recipe)) {
      let recipeID = document.querySelector(`.add-button${recipe.id}`);
      domUpdates.interactWithClassList('add', 'add-active', event, recipeID);
    }
  })
}

function viewRecipesToCook() {
  if (user.recipesToCook.length) {
    domUpdates.displayCards(user.recipesToCook, cardArea, ['recipesToCook','favoriteRecipes','']);
    getRecipesToCook();
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
    getFavorites();
    updateCurrentCardDisplay('favoriteRecipes');
  }
}

function addCardToCookList(event) {
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  if (!domUpdates.interactWithClassList('contains', 'add-active', event)) {
    domUpdates.interactWithClassList('add', 'add-active', event);
    user.addToList(specificRecipe, 'recipesToCook');
  } else if (domUpdates.interactWithClassList('contains', 'add-active', event)) {
    domUpdates.interactWithClassList('remove', 'add-active', event);
    user.removeFromList(specificRecipe,'recipesToCook');
    getRecipesToCook();
    updateCurrentCardDisplay('recipesToCook');
  }
}

function updateCurrentCardDisplay(cardFilterCategory) {
  console.log('REMOVE', 'current-action:',cardFilterCategory, 'current-display:',cardArea.classList);
  if(domUpdates.interactWithClassList('contains', `${cardFilterCategory}`, event, cardArea)){
    domUpdates.displayCards(user[cardFilterCategory], cardArea, [`${cardFilterCategory}`,'','']);
    user[cardFilterCategory].forEach(recipe => {
      if (user.favoriteRecipes.includes(recipe)) {
        let recipeID = document.querySelector(`.favorite${recipe.id}`);
        domUpdates.interactWithClassList('add', 'favorite-active', event, recipeID);
      }
      if (user.recipesToCook.includes(recipe)) {
        let recipeID = document.querySelector(`.add-button${recipe.id}`);
        domUpdates.interactWithClassList('add', 'add-active', event, recipeID);
      }
    });
  }
}

function displayCardButtons(event) {
  if (domUpdates.interactWithClassList('contains', 'favorite', event)) {
    favoriteCard(event);
  } else if (domUpdates.interactWithClassList('contains', 'add-button', event) || domUpdates.interactWithClassList('contains', 'add', event)) {
    addCardToCookList(event);
  } else if (domUpdates.interactWithClassList('contains', 'view-details', event)) {
    displayDirections(event);
  } else if (domUpdates.interactWithClassList('contains', 'cook-recipe-button', event)) {
    console.log(event.target)
    removeIngredients(event);
  } else if (domUpdates.interactWithClassList('contains', 'add-indredients-to-pantry', event)) {
    addIngredients(event);
  }
}

function returnHome() {
    domUpdates.interactWithClassList('remove', 'hidden', event, favButton);
    domUpdates.displayCards(cookbook.recipes, cardArea, ['','favoriteRecipes', 'recipesToCook']);
    getFavorites();
    getRecipesToCook();
}

function displayDirections(event) {
  domUpdates.interactWithClassList('remove', 'hidden', event, favButton)
  let newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let recipeObject = new Recipe(newRecipeInfo, ingredientData);
  let cost = recipeObject.calculateCost();
  domUpdates.interactWithClassList('add', 'all', event, cardArea);
  domUpdates.populateRecipeCard(cardArea, recipeObject, cost);
  compilePantryData(recipeObject)
}

function getFavorites() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.interactWithClassList('add', 'favorite-active', event, recipeID);
    })
  }
}

function removeIngredients(event) {
  let cookedRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let removedIngredients = pantry.removeIngredientsFromPantry(cookedRecipe)
  removedIngredients.forEach((ingredient) => {
    console.log("HI", ingredient);
    let postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: user.id,
        ingredientID: ingredient.ingredient,
        ingredientModification: ingredient.amountToRemove,
      }),
    };
     return fetch("http://localhost:3001/api/v1/users", postOption)
      .then((response) => response.json())
      .then((message) => {
        console.log(message);
        Promise.all([getUserData(), getRecipeData(), getIngredientData()])
      .then((data) => {
        user.pantry = users.find(entry => entry.id === user.id).pantry
        pantry.contents = user.pantry
        compilePantryData(cookedRecipe);
          })
        })
      .catch((error) => console.log(error));
      })
  };

function addIngredients(event) {
  let replaceRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let shoppingList = pantry.getMissingPartOfRecipe(replaceRecipe)
  console.log('SHOPPING LIST', shoppingList)
  let newIngredients = pantry.addIngredientsToPantry(shoppingList)
  console.log('NEW', newIngredients)
  newIngredients.forEach((ingredient) => {
    let postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: user.id,
        ingredientID: ingredient.ingredient,
        ingredientModification: ingredient.amountToAdd
      }),
    };
    return fetch("http://localhost:3001/api/v1/users", postOption)
      .then((response) => response.json())
      .then((message) => {
        console.log(message);
        Promise.all([getUserData(), getRecipeData(), getIngredientData()])
      .then((data) => {
        user.pantry = users.find(entry => entry.id === user.id).pantry
        pantry.contents = user.pantry
        compilePantryData(replaceRecipe)
          })
        })
      .catch((error) => console.log(error));
      })
  };

function getRecipesToCook() {
  if (user.recipesToCook.length) {
    user.recipesToCook.forEach(recipe => {
      let recipeID = document.querySelector(`.add-button${recipe.id}`);
      domUpdates.interactWithClassList('add', 'add-active', event, recipeID);
    })
  }
}

function displaySearchRecipes(event) {
  let filteredRecipes = cookbook.findRecipes(searchInput.value.toLowerCase());
  domUpdates.displayCards(filteredRecipes, cardArea, ['','favoriteRecipes', 'recipesToCook']);
  filteredRecipes.forEach(recipe => {
    if (user.favoriteRecipes.includes(recipe)) {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.interactWithClassList('add', 'favorite-active', event, recipeID);
    }
    if (user.recipesToCook.includes(recipe)) {
      let recipeID = document.querySelector(`.add-button${recipe.id}`);
      domUpdates.interactWithClassList('add', 'add-active', event, recipeID);
    }
    clearInputs(searchInput);
  })
}

function clearInputs(element) {
  element.value = "";
}