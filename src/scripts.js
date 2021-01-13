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
searchButton.addEventListener("click", searchRecipes);

hamburgerMenu.addEventListener('click', toggleHamburgerMenuDropdown);
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
  domUpdates.displayCards(cookbook.recipes, cardArea, ['', '', '']);
}

function createUserWorld(users, recipes, ingredients) {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = users.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry, ingredients)
  pantry = new Pantry(newUser.pantry)
  cookbook = new Cookbook(recipes, ingredients);
}

function viewFavorites() {
  if (user.favoriteRecipes.length) {
    domUpdates.displayCards(user.favoriteRecipes, cardArea, ['favoriteRecipes', 'recipesToCook', '']);
  }
  displayRecipeFavoriteOrCooklistLabels(user.favoriteRecipes);
}

function viewRecipesToCook() {
  if (user.recipesToCook.length) {
    domUpdates.displayCards(user.recipesToCook, cardArea, ['recipesToCook', 'favoriteRecipes', '']);
  }
  displayRecipeFavoriteOrCooklistLabels(user.recipesToCook);
}

function returnHome() {
  domUpdates.displayCards(cookbook.recipes, cardArea, ['', 'favoriteRecipes', 'recipesToCook']);
  displayRecipeFavoriteOrCooklistLabels(cookbook.recipes);
}

function toggleHamburgerMenuDropdown() {
  domUpdates.interactWithClassList("toggle", "hidden", event, hamburgerMenuContent);
}

function searchRecipes() {
  viewSearchedRecipes();
  searchInput.value = "";
}

function viewSearchedRecipes() {
  let filteredRecipes;
  if (domUpdates.interactWithClassList('contains', 'favoriteRecipes', event, cardArea)) {
    filteredRecipes = user.findFavorites(searchInput.value);
  } else {
    filteredRecipes = cookbook.findRecipesByTagNameOrIngredient(searchInput.value.toLowerCase());
  }
  domUpdates.displayCards(filteredRecipes, cardArea, ['', 'favoriteRecipes', 'recipesToCook']);
  displayRecipeFavoriteOrCooklistLabels(filteredRecipes);
}

function handleCardAreaButtons(event) {
  if (domUpdates.interactWithClassList('contains', 'favorite', event)) {
    addCardToFavoritesOrCookList(event, 'favoriteRecipes', 'favorite-active', '-fav');
  } else if (domUpdates.interactWithClassList('contains', 'add-button', event) || domUpdates.interactWithClassList('contains', 'add', event)) {
    addCardToFavoritesOrCookList(event, 'recipesToCook', 'add-active', '-add')
  } else if (domUpdates.interactWithClassList('contains', 'view-details', event)) {
    viewRecipeDetails(event);
  } else if (domUpdates.interactWithClassList('contains', 'cook-recipe-button', event)) {
    removeIngredientsUsedToCookRecipe(event);
  } else if (domUpdates.interactWithClassList('contains', 'add-ingredients-to-pantry', event)) {
    addMissingIngredientsNeededForRecipe(event);
  }
}

function addCardToFavoritesOrCookList(event, listCategory, activeClassName, idName) {
  let specicId = Number(event.target.id.replace(idName, ''))
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === specicId)
  if (!domUpdates.interactWithClassList('contains', activeClassName, event)) {
    domUpdates.interactWithClassList('add', activeClassName, event);
    user.addToList(specificRecipe, listCategory);
  } else if (domUpdates.interactWithClassList('contains', activeClassName, event)) {
    domUpdates.interactWithClassList('remove', activeClassName, event);
    user.removeFromList(specificRecipe, listCategory)
    refreshCurrentCardFilterWithUpdatedList(listCategory);
  }
}

function refreshCurrentCardFilterWithUpdatedList(listCategory) {
  if (domUpdates.interactWithClassList('contains', `${listCategory}`, event, cardArea)) {
    domUpdates.displayCards(user[listCategory], cardArea, [`${listCategory}`, '', '']);
    displayRecipeFavoriteOrCooklistLabels(user[listCategory]);
  }
}

function displayRecipeFavoriteOrCooklistLabels(currentCardFilter) {
  currentCardFilter.forEach(recipe => {
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

function viewRecipeDetails(event) {
  let newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id));
  let recipeObject = new Recipe(newRecipeInfo, cookbook.ingredients);
  let cost = recipeObject.calculateCost();
  domUpdates.interactWithClassList('add', 'all', event, cardArea);
  domUpdates.populateRecipeDetails(cardArea, recipeObject, cost);
  compilePantryData(recipeObject);
}

function compilePantryData(recipe) {
  let missingIngredients = []
  let costOfRemainingIngredients;
  if (!pantry.determineEnoughIngredients(recipe)) {
    missingIngredients = listMissingIngredients(recipe);
    costOfRemainingIngredients = pantry.calculateMissingCost(recipe);
    domUpdates.displayCostMessage(recipe.id, missingIngredients, costOfRemainingIngredients);
  } else {
    costOfRemainingIngredients = pantry.calculateMissingCost(recipe)
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
    let postOption = createPostOption(ingredient, 'amountToAdd');
    return updatePantryDataWithNewIngredientQuantities(postOption, replaceRecipe);
  })
};

function removeIngredientsUsedToCookRecipe(event) {
  let newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id));
  let cookedRecipe = new Recipe(newRecipeInfo, cookbook.ingredients);
  let removedIngredients = pantry.removeIngredientsFromPantry(cookedRecipe)
  removedIngredients.forEach((ingredient) => {
    let postOption = createPostOption(ingredient, 'amountToRemove');
    return updatePantryDataWithNewIngredientQuantities(postOption, cookedRecipe);
  })
};

function createPostOption(ingredient, modifyingProperty) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: user.id,
      ingredientID: ingredient.ingredient,
      ingredientModification: ingredient[modifyingProperty]
    }),
  };
}

function updatePantryDataWithNewIngredientQuantities(postOption, recipe) {
  return fetch("http://localhost:3001/api/v1/users", postOption)
    .then((response) => response.json())
    .then((message) => {
      console.log(message);
      Promise.all([getUserData(), getRecipeData(), getIngredientData()])
        .then((data) => {
          let updatedUserData = data[0];
          user.pantry = updatedUserData.find(entry => entry.id === user.id).pantry
          pantry.contents = user.pantry
          compilePantryData(recipe);
        })
    })
    .catch((error) => console.log(error));
}