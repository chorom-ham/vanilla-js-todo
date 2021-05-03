function deleteList(EVENT) {}

function lineList() {}

function clickInput() {
  const input_text = document.getElementById("input_text").value;
  const li = document.createElement("li");
  const textNode = document.createTextNode(input_text);
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteList);
  textNode.addEventListener("click", lineList);
  li.setAttribute("id", input_text);
  li.appendChild(textNode);
  li.appendChild(delBtn);
  document.getElementById("task-list").appendChild(li);
}
