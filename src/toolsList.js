//DOM element
const toolsMenu = document.querySelector(".tools-menu");

function displayToolsListDropdown(recipeList) {
  const toolsListDuplicated = recipeList.flatMap((recipe) =>
    recipe.ustensils.map((ustensil) => ustensil.toLowerCase())
  );

  // list of tools
  const toolsList = [...new Set(toolsListDuplicated)].sort();

  // html code for each tool
  const toolsListToInsert = toolsList
    .map(
      (tool) =>
        `<a class="dropdown-item text-white text-capitalize w-0" href="#">${tool}</a>`
    )
    .toString()
    .replace(/,/g, "");

  addHtmlContent(toolsMenu, toolsListToInsert);
}
