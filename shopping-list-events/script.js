const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const listItems = document.getElementsByTagName("LI");
const deleteBtn = document.getElementsByTagName("button");

function listLength() {
  console.log(listItems.length);
  return listItems.length;
}

for (i = 0; i < listLength(); i++) {
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete!"));
  listItems[i].appendChild(btn);
  btn.onclick = removeParent;
}

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

function checked(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

function deleteBtnsLength() {
  console.log(deleteBtn.length);
  return deleteBtn.length;
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  // the delete button is created for each new list item
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete!"));
  li.appendChild(btn);

  // btn.onclick = removeParent;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// ul.addEventListener("click", checked);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
