# Refactor Tractor - What's Cookin'
#### Turing School of Software Design - Mod2 Group Project
#### Assigned Repo: WC-A  || Instructor: David Whitaker

The details of this project are outlined in [this project spec](https://frontend.turing.io/projects/module-2/refactor-tractor-wc.html)

### Contributors
- Kelsie Besinger-Yeh : [github profile](https://github.com/kelsiebesingeryeh)
- Kelly Dinneen : [github profile](https://github.com/kellydinneen)
- Kevin Hartmann : [github profile](https://github.com/kevinhartmann23)

## Table of Contents
1. [Introduction](#introduction)
2. [Instructions](#setup-instructions)
3. [How-To](#using-whats-cookin)
4. [Challenges & Wins](#challenges-&-wins)
5. [Appreciation](#appreciation)

## Introduction
  In this project we were tasked to refactor a project that was made by someone else, and change the data from a hard file to pulling data from an API. The goal of this project was for us to build comfortability around working on someone else's code and ready us for the our first job within the industry. Please follow the [setup instructions](#setup-instructions) below on how to begin!

## Setup Instructions

#### Clone This Repo

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

#### Setup

After you have gone through the steps of cloning down this repo and editing the remote:
Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with some `h1` text and a pink background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

## View Our Code in Action
Simply visit our deployed site [here]()

OR

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash
Project is running at http://localhost:8080/
```

Go to `http://localhost:8080/` in your browser to view your code running in the browser.

### Testing

We have created a series of tests for our data model. If you would like to run a few of these tests (or add new features), choose a test file and run `npm test test/[selected test file]` in your terminal.
You will see that we have provided a set test data file to make testing much smoother and easier to read.

[Back to Top of Page](#table-of-contents)

---

## Using Whats Cookin
A user is randomly selected, and immediately brought to their home page on page load. From here, the user can view all of the recipes available to them.

### Adding Recipes to Cooklist
A user can add recipes to their cook list by simply clicking the '⁺' on any individual card. Notice how the ⁺ turns into a ✓ after a recipe is added to the recipe cook list.

Then the user can view that specific list to view only recipes they would like to cook.

### Adding Recipes to Favorites
Similar to adding recipes, a user can favorite recipes. This can be done by clicking on the star on any recipe card. Then, the user can visit their favorites page to view their favorites only.

![demo-adding-fav](https://media.giphy.com/media/3U7PdzLzDAvCUsTLno/giphy.gif)


### Searching Recipes by Tag, Ingredient, or Keyword
Additionally, their is a search bar. Here a user can search for any recipe by title, ingredients, or tags related to a recipe. This search will filter through the Whats Cookin Cook Book and display any recipes related to the user's serach. If a user uses the search bar while viewing the "My Favorites" tab, the search terms will only filter favorited recipes.

![demo-search](https://media.giphy.com/media/xkQ20nfeZtgXFS8ub7/giphy.gif)

Try it out! Try searching for `dinner`. Notice how the some recipes disappear as they do not relate to dinner.

### Viewing Recipe Details
At any time, a user can choose to view a selected recipe in more detail. After clicking `View Recipe`, the user is provdied with a recipe card. The recipe card displays all ingredients and instructions for the selected recipe.

![demo-search](https://media.giphy.com/media/paymxPquLba1ulgefm/giphy.gif)

### Cooking Recipes and Shopping for Ingredients
In the recipe details view, the user is also given a `Can I Cook It?` card. This card will either display `Yes You Can!` (when the user has sufficient ingredients) allowing the user to cook the recipe and remove those required ingredients from their pantry. Otherwise, if the user does not have sufficient ingredients, the card will display `No You Can't!` and will list all ingredients missing in the user's pantry. From there, A user can click the `Add Ingredients,` button which will restock the ingredients needed to cook the chosen recipe in the user's pantry.

At anytime, the user can return to the main page by clicking the `Home` button.

[Back to Top of Page](#table-of-contents)

---

### Challenges
- **One:** Our major technical challenge was a bug that occurred when we attempted to compile information about the ingredients a user was missing for each recipe. Somehow, in a way we still have yet to understand, the function that looped through recipes to compile missing ingredient data would also update the basic recipe information in our data model, changing the listed ingredient amounts on each recipe. This problem persisted, it seemed, no matter where in the callstack we called this function, and no matter how many degrees of separation we created between the original input data (`cookpook.recipes`) and our use of it to determine the quantities of missing ingredients. After much frustration, a combination of teamwork and independent problem solving, and a meeting with a mentor, we stumbled upon two work-arounds: (a) manipulating an independent `missing` property of `recipe.ingredients` rather than the `amount` property that impacts the DOM and (2) displaying the missing ingredient information for only one recipe at a time. *Though these solutions were a relief, our inability to really get to the bottom of this bug showed us that we have a lot to learn about mutability in object-based programming and scope across asynchronous javascript.*
- **Two:** We had trouble keeping a regular break schedule on this project, and definitely experienced the effects of burnout after long days and evenings dealing with unfamiliar content and bugs that wouldn't budge. *We learned that we were much more productive after taking a moment for ourselves, or better yet, after a good night's sleep.*

### Wins
- **One:** We really hit it out of the park with our git workflow and project management on this project. Our issue maintenance was consistent, our PRs and reviews were frequent, and we always made time to step back, discuss priorities, and come up with action plans. We also struck a healthy balance between paired coding and independent work, allowing us to check off simple issues efficiently while supporting eachother and avoiding any major miscommunications.
- **Two:** As our first real attempt at using network requests, this project was a great success! We may not be experts yet, but the learning curve with aynchronous code and endpoints was steep. We have learned a lot, and after a few brief run ins with the inside of a server, we are ... excited to dip our toes into the backend?
- **Three:** We used webpack and deployed a site from the command line, and our only real hiccup was a stray comma!

### Appreciation
Thanks to David Whitaker, Travis Rollins, and Brianna Delvalle

enter appreciation here:


[Back to Top of Page](#table-of-contents)

<!-- ## Deploying to GitHub Pages

_If you are finished with the functionality and testing of your project_, then you can consider deploying your project to the web! This way anyone can play it without cloning down your repo.

[GitHub Pages](https://pages.github.com/) is a great way to deploy your project to the web. Don't worry about this until your project is free of bugs and well tested!

If you _are_ done, you can follow [this procedure](./gh-pages-procedure.md) to get your project live on GitHub Pages. -->
