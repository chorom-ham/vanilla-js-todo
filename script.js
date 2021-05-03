var button = document.getElementById("enter");
var input_data = document.getElementById("input_text");
var ul = document.querySelector("ul");

ul.onclick = function (event) {
  event.target.classList.toggle("done");
};

function deleteList(EVENT) {
  const btnLi = event.target.parentElement;
  btnLi.remove(btnLi.id);
}

function clickInput() {
  const input_text = input_data.value;
  if (input_text.length > 0) {
    var li = document.createElement("li");
    const textNode = document.createTextNode(input_text);
    var btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteList);

    li.appendChild(textNode);
    li.innerHTML = li.innerHTML + " ";
    li.appendChild(btn);
    ul.appendChild(li);

    input_data.value = "";
  }
}

function checkKey(event) {
  if (event.keyCode === 13) {
    clickInput();
  }
}

button.addEventListener("click", clickInput);
input_data.addEventListener("keypress", checkKey);
