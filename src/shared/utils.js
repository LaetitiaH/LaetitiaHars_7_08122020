function addAttribute(selecteur, attribute, value) {
  selecteur.setAttribute(attribute, value);
}

function removeAttribute(selecteur, attribute) {
  selecteur.removeAttribute(attribute);
}

function addTextContent(selecteur, value) {
  selecteur.textContent = value;
}

function addHtmlContent(selecteur, value) {
  selecteur.innerHTML = value;
}

function removeClass(selecteur, value) {
  selecteur.classList.remove(value);
}

function addClass(selecteur, value) {
  selecteur.classList.add(value);
}

function toggleClass(selecteur, value) {
  selecteur.classList.toggle(value);
}
