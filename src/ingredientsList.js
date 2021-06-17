//DOM element
const ingredientsMenu = document.querySelector(".ingredients-menu");

function displayIngredientListDropdown(recipeList) {
  const ingredientsListDuplicated = recipeList
    .flatMap((recipe) => recipe.ingredients)
    .map((ingredient) => ingredient.ingredient.toLowerCase());

  // list of ingredients
  const ingredientsList = [...new Set(ingredientsListDuplicated)].sort();

  // html code for each ingredients
  const ingredientsListToInsert = ingredientsList
    .map(
      (ingredient) =>
        `<a class="dropdown-item text-white text-capitalize w-0" href="#">${ingredient}</a>`
    )
    .toString()
    .replace(/,/g, "");

  addHtmlContent(ingredientsMenu, ingredientsListToInsert);
}
