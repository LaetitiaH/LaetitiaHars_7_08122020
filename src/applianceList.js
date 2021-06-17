//DOM element
const applianceMenu = document.querySelector(".appliance-menu");

function displayApplianceListDropdown(recipeList) {
  const applianceListDuplicated = recipeList.map((ingredient) =>
    ingredient.appliance.toLowerCase()
  );

  // list of appliance
  const applianceList = [...new Set(applianceListDuplicated)].sort();

  // html code for each appliance
  const applianceListToInsert = applianceList
    .map(
      (appliance) =>
        `<a class="dropdown-item text-white text-capitalize w-0" href="#">${appliance}</a>`
    )
    .toString()
    .replace(/,/g, "");

  addHtmlContent(applianceMenu, applianceListToInsert);
}
