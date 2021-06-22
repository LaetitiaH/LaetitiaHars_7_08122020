// Variables initializers
const initialRecipeList = getRecipesList();
let recipeList = [];
let searchInputValue = "";
let tagsListAll = [];

// DOM
const recipeListContent = document.querySelector("#recipeList");
const searchInput = document.querySelector("#search");
const dropdownList = document.querySelector("#dropdownList");
const template = document.querySelector("#recipe-card");
const tagsList = document.querySelector(".tagsList");

// display Recipe list and tags lists on first access on page
displayRecipeList();

// EventListener on change search-input to filter RecipeList
searchInput.addEventListener("input", (event) => {
  const lettersNumber = event.currentTarget.value.length;
  const searchValue = event.currentTarget.value;

  if (lettersNumber >= 3) {
    searchInputValue = searchValue.toLowerCase();
  } else {
    searchInputValue = "";
  }
  displayRecipeList();
});
