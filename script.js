var inputBox = document.querySelector("#inputBox");
var AddBtn = document.querySelector("#addButton");
var ToDoList = document.querySelector("#existList");

//할 일 추가
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

//완료한 할 일에 취소선 긋기
var itemList = document.querySelector("ul");
itemList.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);
