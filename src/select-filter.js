// DOM Element
const dropdownInput = document.querySelectorAll(".dropdown-search");
const ingredientDropdown = $("#ingredientDropdown");
const applianceDropdown = $("#applianceDropdown");
const toolsDropdown = $("#toolsDropdown");
const screenWidth = window.outerWidth - 50;

// On click on ingredient Dropdown dropdown, open dropdown
ingredientDropdown.on("shown.bs.dropdown", (event) => {
  const expandedDropdownWidth = event.target.scrollWidth;

  openDropdown(
    ".dropdown-toggle-tools",
    ".ingredients-menu",
    ".dropdown-searchIngredients",
    ".dropdown-ingredients-text",
    expandedDropdownWidth
  );
});

// On click on appliance Dropdown dropdown, open dropdown
applianceDropdown.on("shown.bs.dropdown", (event) => {
  const expandedDropdownWidth = event.target.scrollWidth;

  openDropdown(
    ".dropdown-toggle-appliance",
    ".appliance-menu",
    ".dropdown-searchAppliance",
    ".dropdown-appliance-text",
    expandedDropdownWidth
  );
});

// On click on tools Dropdown dropdown, open dropdown
toolsDropdown.on("shown.bs.dropdown", (event) => {
  const expandedDropdownWidth = event.target.scrollWidth;

  openDropdown(
    ".dropdown-toggle-tools",
    ".tools-menu",
    ".dropdown-searchTools",
    ".dropdown-tools-text",
    expandedDropdownWidth
  );
});

// On click on Ingredients close dropdown, close dropdown
ingredientDropdown.on("hide.bs.dropdown", () => {
  closeDropdown(
    ".dropdown-toggle-ingredients",
    ".dropdown-searchIngredients",
    ".dropdown-ingredients-text"
  );
});

// On click on Appliance close dropdown, close dropdown
applianceDropdown.on("hide.bs.dropdown", () => {
  closeDropdown(
    ".dropdown-toggle-appliance",
    ".dropdown-searchAppliance",
    ".dropdown-appliance-text"
  );
});

// On click on Tools close dropdown, close dropdown
toolsDropdown.on("hide.bs.dropdown", () => {
  closeDropdown(
    ".dropdown-toggle-tools",
    ".dropdown-searchTools",
    ".dropdown-tools-text"
  );
});

function openDropdown(
  toggleSelector,
  menuSelector,
  searchSelector,
  searchTextSelector,
  expandedDropdownWidth
) {
  const select = document.querySelector(toggleSelector);
  const openSelect = document.querySelector(menuSelector);
  const search = document.querySelector(searchSelector);
  const searchText = document.querySelector(searchTextSelector);

  if (expandedDropdownWidth < screenWidth) {
    openSelect.style.top = "-5px !important";
    select.style.width = `${expandedDropdownWidth}px`;
    openSelect.style.width = `${expandedDropdownWidth}px`;
    openSelect.style.maxHeight = "390px";
  } else {
    select.style.width = `${screenWidth}px`;
    openSelect.style.width = `${screenWidth}px`;
    openSelect.style.maxHeight = "600px";
  }

  search.style.display = "flex";
  searchText.style.display = "none";
}

function closeDropdown(toggleSelector, searchSelector, searchTextSelector) {
  const select = document.querySelector(toggleSelector);
  const search = document.querySelector(searchSelector);
  const searchText = document.querySelector(searchTextSelector);
  select.style.width = "170px";
  search.style.display = "none";
  searchText.style.display = "flex";
}

// On click on input form
dropdownInput.forEach((input) =>
  input.addEventListener("click", (evt) => {
    evt.stopPropagation();
  })
);
