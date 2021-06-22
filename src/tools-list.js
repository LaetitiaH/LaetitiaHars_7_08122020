//DOM element
const toolsMenu = document.querySelector(".tools-menu");
const searchToolsInput = document.querySelector("#searchTools");

// EventListener on change search-input to filter RecipeList
searchToolsInput.addEventListener("input", (event) => {
  const toolsValue = event.currentTarget.value.toLowerCase();

  displayToolsListDropdown(toolsValue);
});

toolsMenu.addEventListener("click", (event) => {
  if (!event.target.innerHTML.includes(">")) {
    displayRecipeListByTag(event, "tool");
  } else {
    event.stopPropagation();
  }
});
