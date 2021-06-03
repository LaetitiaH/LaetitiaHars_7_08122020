// Variables initializers

const initialRecipeList = getRecipesList();

// DOM
const recipeListContent = document.querySelector("#recipeList");

const template = document.querySelector("#recipe-card");

displayRecipeList(initialRecipeList);

// display Recipe list
function displayRecipeList(recipeList) {
  recipeList.forEach((recipe) => {
    // initialize template clone of template
    const template_clone = template.content.cloneNode(true);

    displayRecipeInformations(template_clone, recipe);

    // create Dom elements
    recipeListContent.appendChild(template_clone);
  });
}

// Insert Informations about recipe in template
function displayRecipeInformations(template, recipe) {
  const recipeTitle = template.querySelector(".card-title");
  const recipePrice = template.querySelector(".recipe-price");
  const recipeIngredientsList = template.querySelector("ul");
  const ingredientsList = recipe.ingredients
    .map((ingredient) => {
      const quantity = getQuantity(ingredient);
      return `<li><span class="fw-bold">${ingredient.ingredient}</span>${quantity}</li>`;
    })
    .toString()
    .replace(/,/g, "");
  const recipeInstructions = template.querySelector(".recipe-instructions");
  addTextContent(recipeTitle, recipe.name);
  addTextContent(recipePrice, `${recipe.time} min`);
  addHtmlContent(recipeIngredientsList, ingredientsList);
  addTextContent(recipeInstructions, recipe.description);
}

function getQuantity(ingredient) {
  if (!ingredient.unit && ingredient.quantity) {
    return ` : ${ingredient.quantity}`;
  } else if (ingredient.unit && ingredient.quantity) {
    return ` : ${ingredient.quantity}  ${ingredient.unit}`;
  } else {
    return "";
  }
}
