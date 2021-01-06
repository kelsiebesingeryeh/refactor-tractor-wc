## script.js

**onStartup()**
on window load, generating random user id:
- instantiating new User, Pantry class
- calling populateCards();
- calling greetUser();

**populateCards()**
_param_: all recipes
- inserting adjacent HTML to load a recipe card
- calling getFavorites();

**greetUser()**
- adding querySelector to `.user-name`
- splits user name (maybe not necessary)
_notes:_
- change innerText to 'Welcome user.name.'
- delete username span and just use <p>
- update QS to fix this

**getFavorites()**
- conditional checking if there are fav in array
- QS to specificRecipe id, changing class list to new star favButton

_notes:_
- delete else return

**viewFavorites()**
- checking if classlists contains 'all', remove 'all'
- conditional checking: if there are no fav display 'no favorites'
- inner HTML each favorite cards

_notes:_
- delete return
- revisit 'all' classList

**favoriteCard()**
- event target on specificRecipe card
- conditional: if the card does not have a class of 'favorites active' add it, else remove it

_notes_:
- refactor favButton

**cardButtonConditionals()**
- main event handler, actions for all cards

_notes_:
- click on picture, does not display directions --- VISIT **displayDirections()**

**displayDirections()**
- finding recipe in Cookbook
- instantiates an new Recipe class
- declare food cost
- innerHTML of cards with instructions
- then adding recipe information to innerHTML a second time
- then adding instructions

_notes_:
- data/Dom helpers
- condense innerHTML


## Extra Functionality Needed
- manipulate dom for search Functionality - scripts.js
- fix instructions displayDirections - scripts.js
- recipesToCook Functionality (user class) - user.js
- missing ingredients with cost display (if user does not have enough ingredients) - pantry.js
