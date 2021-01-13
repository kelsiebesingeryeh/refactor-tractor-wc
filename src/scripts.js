import './css/index.scss';
import Cookbook from './cookbook';
import User from './user';
import Pantry from './pantry';
import Recipe from './recipe';
import domUpdates from './domUpdates';

let favButton = document.querySelector('.view-favorites');
let toCookButton = document.querySelector('.view-to-cook-list')
let homeButton = document.querySelector('.home')
let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');

let hamburgerMenu = document.querySelector('.hamburger');
let hamburgerMenuContent = document.querySelector(".hamburger-content");
let mobileFavButton = document.querySelector(".view-favorites-mobile");
let mobileToCookButton = document.querySelector(".view-to-cook-list-mobile");
let mobileHomeButton = document.querySelector(".home-mobile");

let cardArea = document.querySelector('.all-cards');

let user, pantry, cookbook;

window.onload = onStartup();

homeButton.addEventListener("click", returnHome);
favButton.addEventListener('click', viewFavorites);
toCookButton.addEventListener('click', viewRecipesToCook);
searchButton.addEventListener("click", viewSearchedRecipes);

hamburgerMenu.addEventListener('click', toggleMenu);
mobileFavButton.addEventListener("click", viewFavorites);
mobileToCookButton.addEventListener("click", viewRecipesToCook);
mobileHomeButton.addEventListener("click", returnHome);

cardArea.addEventListener("click", handleCardAreaButtons);

function onStartup() {
  return Promise.all([getUserData(), getRecipeData(), getIngredientData()])
    .then(data => {
      let userData = data[0];
      let recipeData = data[1];
      let ingredientData = data[2];
      buildPage(userData, recipeData, ingredientData);
    })
    .catch(error => console.log(error))
}

function getUserData() {
  return fetch("http://localhost:3001/api/v1/users")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

function getRecipeData() {
  return fetch("http://localhost:3001/api/v1/recipes")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

function getIngredientData() {
  return fetch("http://localhost:3001/api/v1/ingredients")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

function buildPage(users, recipes, ingredients) {
  createUserWorld(users, recipes, ingredients);
  domUpdates.greetUser(user);
  domUpdates.displayCards(cookbook.recipes, cardArea, ['','','']);
}

function createUserWorld(users, recipes, ingredients) {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = users.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry)
  pantry = new Pantry(newUser.pantry)
  cookbook = new Cookbook(recipes, ingredients);
}

function handleCardAreaButtons(event) {
  if (domUpdates.interactWithClassList('contains', 'favorite', event)) {
    addCardToFavoritesOrCookList(event, 'favoriteRecipes', 'favorite-active');
  } else if (domUpdates.interactWithClassList('contains', 'add-button', event) || domUpdates.interactWithClassList('contains', 'add', event)) {
    addCardToFavoritesOrCookList(event, 'recipesToCook', 'add-active')
  } else if (domUpdates.interactWithClassList('contains', 'view-details', event)) {
    viewRecipeDetails(event);
  } else if (domUpdates.interactWithClassList('contains', 'cook-recipe-button', event)) {
    console.log(event.target)
    removeIngredientsUsedToCookRecipe(event);
  } else if (domUpdates.interactWithClassList('contains', 'add-indredients-to-pantry', event)) {
    addMissingIngredientsNeededForRecipe(event);
  }
}

function addCardToFavoritesOrCookList(event, listCategory, activeClassName) {
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  if (!domUpdates.interactWithClassList('contains', activeClassName, event)) {
    domUpdates.interactWithClassList('add', activeClassName, event);
    user.addToList(specificRecipe, listCategory);
  } else if (domUpdates.interactWithClassList('contains', activeClassName, event)) {
    domUpdates.interactWithClassList('remove', activeClassName, event);
    user.removeFromList(specificRecipe, listCategory)
    refreshCurrentCardFilter(listCategory);
  }
}

function refreshCurrentCardFilter(cardFilterCategory) {
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

function viewFavorites() {
  if (user.favoriteRecipes.length) {
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

function returnHome() {
    domUpdates.interactWithClassList('remove', 'hidden', event, favButton);
    domUpdates.displayCards(cookbook.recipes, cardArea, ['','favoriteRecipes', 'recipesToCook']);
    getFavorites();
    getRecipesToCook();
}

function getFavorites() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      domUpdates.interactWithClassList('add', 'favorite-active', event, recipeID);
    })
  }
}

function getRecipesToCook() {
  if (user.recipesToCook.length) {
    user.recipesToCook.forEach(recipe => {
      let recipeID = document.querySelector(`.add-button${recipe.id}`);
      domUpdates.interactWithClassList('add', 'add-active', event, recipeID);
    })
  }
}

// fupopulateCardLabels(filter) {
//   user.recipesToCook.forEach(recipe => {
//     if (user.favoriteRecipes.includes(recipe)) {
//       let recipeID = document.querySelector(`.favorite${recipe.id}`);
//       domUpdates.interactWithClassList('add', 'favorite-active', event, recipeID);
//     }
//   })
// }

function viewSearchedRecipes(event) {
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

function viewRecipeDetails(event) {
  domUpdates.interactWithClassList('remove', 'hidden', event, favButton)
  let newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let recipeObject = new Recipe(newRecipeInfo, cookbook.ingredients);
  let cost = recipeObject.calculateCost();
  domUpdates.interactWithClassList('add', 'all', event, cardArea);
  domUpdates.populateRecipeDetails(cardArea, recipeObject, cost);
  compilePantryData(recipeObject)
}

function compilePantryData(recipe) {
  let currentRecipe = new Recipe(recipe, cookbook.ingredients)
  let missingIngredients = []
  let costOfRemainingIngredients;
  if (!pantry.determineEnoughIngredients(currentRecipe)) {
    missingIngredients = listMissingIngredients(currentRecipe);
    costOfRemainingIngredients = pantry.calculateMissingCost(currentRecipe);
    domUpdates.displayCostMessage(recipe.id, missingIngredients, costOfRemainingIngredients);
  } else {
    costOfRemainingIngredients = pantry.calculateMissingCost(currentRecipe)
    domUpdates.displayCostMessage(recipe.id, missingIngredients, costOfRemainingIngredients);
  }
}

function listMissingIngredients(recipe) {
  return pantry.getMissingPartOfRecipe(recipe).ingredients.reduce((acc, ingredient) => {
    if (ingredient.missing > 0) {
      let specificIngredient = cookbook.ingredients.find(item => item.id === ingredient.id);
      acc.push(specificIngredient.name);
    }
    return acc;
  }, []);
}

function addMissingIngredientsNeededForRecipe(event) {
  let replaceRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let shoppingList = pantry.getMissingPartOfRecipe(replaceRecipe)
  let newIngredients = pantry.addIngredientsToPantry(shoppingList)
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
        let updatedUserData = data[0];
        user.pantry = updatedUserData.find(entry => entry.id === user.id).pantry
        pantry.contents = user.pantry
        compilePantryData(replaceRecipe)
          })
        })
      .catch((error) => console.log(error));
      })
  };

function removeIngredientsUsedToCookRecipe(event) {
  let cookedRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let removedIngredients = pantry.removeIngredientsFromPantry(cookedRecipe)
  removedIngredients.forEach((ingredient) => {
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
        let updatedUserData = data[0];
        user.pantry = updatedUserData.find(entry => entry.id === user.id).pantry
        pantry.contents = user.pantry
        compilePantryData(cookedRecipe);
          })
        })
      .catch((error) => console.log(error));
      })
  };


function toggleMenu() {
  domUpdates.interactWithClassList("toggle", "hidden", event, hamburgerMenuContent);
}
