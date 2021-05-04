var inputBox = document.querySelector("#inputBox");
var AddBtn = document.querySelector("#addButton");
var ToDoList = document.querySelector("#existList");

function addNewToDo() {
  var newToDo = document.createElement("li");
  newToDo.innerHTML = inputBox.value;
  newToDo.innerHTML +=
    "<button id = 'deleteBtn' type = 'button' onclick = 'remove' style = 'background-color: pink'> ❌</button>";
  existList.append(newToDo);
}

function enterKey() {
  if (window.event.keyCode == 13) {
    addNewToDo();
  }
}

AddBtn.addEventListener("click", addNewToDo);
