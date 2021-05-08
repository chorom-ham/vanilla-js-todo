var inputBox = document.querySelector("#inputBox");
var AddBtn = document.querySelector("#addButton");
var ToDoList = document.querySelector("#existList");
var numberOfToDo = 1; //

//할 일 추가
function addNewToDo() {
  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.className = "deleteBtn";
  deleteBtn.id = "deleteBtn" + numberOfToDo;
  var newToDo = document.createElement("li");
  newToDo.innerHTML = inputBox.value;
  inputBox.value = "";
  newToDo.id = "li" + numberOfToDo;
  newToDo.append(deleteBtn);
  existList.append(newToDo);
  numberOfToDo++;
}

function enterKey() {
  if (window.event.keyCode == 13) {
    addNewToDo();
  }
}

AddBtn.addEventListener("click", addNewToDo);

//취소선 긋기
function drawCancelLine(event) {
  if (event.target.tagName == "LI") {
    event.target.classList.toggle("checked");
  }
}

var itemList = document.querySelector("ul");
itemList.addEventListener("click", drawCancelLine);

// X 누르면 할 일 삭제
function deleteTodo(event) {
  var deleteList = event.target.parentNode;
  existList.removeChild(deleteList);
}

existList.addEventListener("click", deleteTodo);
