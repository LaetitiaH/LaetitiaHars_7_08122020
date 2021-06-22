function displayRecipeList() {
  // display tags list
  dropdownList.classList.add("d-flex");

  recipeList = filterRecipeList();

  // remove all recipes
  removeRecipeList();

  if (recipeList.length) {
    // insert recipe list in DOM
    insertRecipeList(recipeList);
  } else {
    // insert text information about no results
    displayNoRecipeText();
  }
  // display tags lists with new recipe list
  displayIngredientListDropdown();
  displayApplianceListDropdown();
  displayToolsListDropdown();
}

function filterRecipeList() {
  const recipeWithInputSearch = [];
  for (let recipe of initialRecipeList) {
    if (
      recipe.name.toLowerCase().includes(searchInputValue) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(searchInputValue)
      ) ||
      recipe.description.toLowerCase().includes(searchInputValue)
    ) {
      recipeWithInputSearch.push(recipe);
    }
  }

  return tagsListAll.reduce(
    (recipeWithInputSearch, tag) => {
      return recipeWithInputSearch.filter((recipe) =>
        recipe.ingredients.some(
          (ingredient) =>
            ingredient.ingredient.toLowerCase().includes(tag.value) ||
            recipe.appliance.toLowerCase().includes(tag.value) ||
            recipe.ustensils.some((ustensil) =>
              ustensil.toLowerCase().includes(tag.value)
            )
        )
      );
    },
    [...recipeWithInputSearch]
  );
}

function removeRecipeList() {
  const recipeListContentUpdated = document.querySelector("#recipeList");

  recipeListContentUpdated.childNodes.forEach((child) => {
    if (child.localName === "div") {
      child.remove();
    }
  });
}

function insertRecipeList(recipeList) {
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

function displayNoRecipeText() {
  const recipeListContentUpdated = document.querySelector("#recipeList");
  const noRecipeToDisplayText =
    "<div class='d-flex justify-content-center align-items-center no-recipe-list'> Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</div>";
  addHtmlContent(recipeListContentUpdated, noRecipeToDisplayText);

  // remove tags list
  dropdownList.classList.remove("d-flex");
  dropdownList.style.display = "none";
}
