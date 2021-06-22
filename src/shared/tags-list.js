function insertTagList(listToDeDuplicated, value, element) {
  let listSort;

  // list of tools
  if (value) {
    const listToDeDuplicatedFiltered = listToDeDuplicated.filter((item) =>
      item.includes(value)
    );

    listSort = [...new Set(listToDeDuplicatedFiltered)].sort();
  } else {
    listSort = [...new Set(listToDeDuplicated)].sort();
  }
  // html code for each tool
  const toolsListToInsert = listSort
    .map(
      (item) =>
        `<a class="dropdown-item text-white text-capitalize w-0" href="#">${item}</a>`
    )
    .toString()
    .replace(/,/g, "");

  addHtmlContent(element, toolsListToInsert);
}

function displayIngredientListDropdown(ingredientValue) {
  const ingredientsListDuplicated = recipeList
    .flatMap((recipe) => recipe.ingredients)
    .map((ingredient) => ingredient.ingredient.toLowerCase());

  insertTagList(ingredientsListDuplicated, ingredientValue, ingredientsMenu);
}

function displayApplianceListDropdown(applianceValue) {
  const applianceListDuplicated = recipeList.map((ingredient) =>
    ingredient.appliance.toLowerCase()
  );

  insertTagList(applianceListDuplicated, applianceValue, applianceMenu);
}

function displayToolsListDropdown(toolsValue) {
  const toolsListDuplicated = recipeList.flatMap((recipe) =>
    recipe.ustensils.map((ustensil) => ustensil.toLowerCase())
  );

  insertTagList(toolsListDuplicated, toolsValue, toolsMenu);
}

function displayRecipeListByTag(event, type) {
  const value = event.target.textContent.toLowerCase();

  const isAlreadySelected = tagsListAll.find((v) => v.value === value);

  if (!isAlreadySelected) {
    tagsListAll = [...tagsListAll, { value: value, type: type }];

    displayRecipeList();
    displayButtonTagList(tagsListAll, tagsList);
  }
}
