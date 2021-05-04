var inputBox = document.querySelector("#inputBox");
var AddBtn = document.querySelector("#addButton");
var ToDoList = document.querySelector("#existList");
var cnt = 1;

//할 일 추가
function addNewToDo() {
  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.id = "deleteBtn";
  var newToDo = document.createElement("li");
  newToDo.innerHTML = inputBox.value;
  newToDo.id = "li" + cnt;
  newToDo.append(deleteBtn);
  existList.append(newToDo);
  cnt++;
}

function enterKey() {
  if (window.event.keyCode == 13) {
    addNewToDo();
  }
}

AddBtn.addEventListener("click", addNewToDo);

//취소선 긋기
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

// X 누르면 할 일 삭제
deleteBtn.onclick = function deleteToDo(event) {
  var li = document.getElementById("li" + event.target.id.slice(9));
  existList.remove(li);
};
