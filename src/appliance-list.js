//DOM element
const applianceMenu = document.querySelector(".appliance-menu");
const searchApplianceInput = document.querySelector("#searchAppliance");

// EventListener on change search-input to filter RecipeList
searchApplianceInput.addEventListener("input", (event) => {
  const applianceValue = event.currentTarget.value.toLowerCase();

  displayApplianceListDropdown(applianceValue);
});

applianceMenu.addEventListener("click", (event) => {
  if (!event.target.innerHTML.includes(">")) {
    displayRecipeListByTag(event, "appliance");
  } else {
    event.stopPropagation();
  }
});
