const listContainer = document.getElementById("listContainer");
const inputItem = document.getElementById("inputItem");

const checkInput = function () {
  if (inputItem.value === "") {
    alert("Please provide input");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputItem.value;
    listContainer.appendChild(li);
    inputItem.value = "";
  }
};
