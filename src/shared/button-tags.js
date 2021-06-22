function displayButtonTagList(tagsListAll, tagsList) {
  removeButtonTagsList(tagsList);
  insertButtonTagList(tagsListAll);
  startListenerRemoveButtonTagList();
}

function removeButtonTagsList(tagsList) {
  tagsList.childNodes.forEach((child) => {
    if (child.localName === "button") {
      child.remove();
    }
  });
}

function insertButtonTagList(tagList) {
  tagList.forEach((tag) => {
    const tagTemplate = document.querySelector("#tag-button");
    // initialize template clone of template
    const template_clone = tagTemplate.content.cloneNode(true);
    const tagButtonText = template_clone.querySelector(".tag");
    const tagsButton = template_clone.querySelectorAll(".tag-button");
    const tagButton = tagsButton[tagsButton.length - 1];
    addTextContent(tagButtonText, tag.value);

    if (tag.type === "ingredient") {
      addClass(tagButton, "btn-primary");
    } else if (tag.type === "appliance") {
      addClass(tagButton, "btn-success");
    } else {
      addClass(tagButton, "btn-danger");
    }

    // create Dom elements
    tagsList.appendChild(template_clone);
  });
}

function startListenerRemoveButtonTagList() {
  const tagsButton = document.querySelectorAll(".tag-button");
  tagsButton.forEach((tagButton) => {
    tagButton.addEventListener("click", (event) => {
      const value = event.currentTarget.innerText.toLowerCase();

      tagsListAll = tagsListAll.filter(
        (tag) => tag.value.toLowerCase() !== value
      );

      displayRecipeList();
      displayButtonTagList(tagsListAll, tagsList);
    });
  });
}
