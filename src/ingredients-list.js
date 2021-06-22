//DOM element
const ingredientsMenu = document.querySelector(".ingredients-menu");
const searchIngredientsInput = document.querySelector("#searchIngredients");

// EventListener on change search-input to filter RecipeList
searchIngredientsInput.addEventListener("input", (event) => {
  const ingredientsValue = event.currentTarget.value.toLowerCase();

  displayIngredientListDropdown(ingredientsValue);
});

ingredientsMenu.addEventListener("click", (event) => {
  if (!event.target.innerHTML.includes(">")) {
    displayRecipeListByTag(event, "ingredient");
  } else {
    event.stopPropagation();
  }
});
