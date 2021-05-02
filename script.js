document.querySelector(".inputBar").addEventListener("submit", e=>{e.preventDefault();});

function addList(){
    // 할 일 내용
    var span = document.createElement("span");
    span.className = "item";
    var text = document.querySelector("#newItem").value;
    span.innerText = text;
    span.style.textDecoration = "none";
    span.addEventListener("click", toggleLine);

    // 삭제 버튼
    var button = document.createElement("button");
    button.className = "deleteButton";
    button.innerText = "X";
    button.addEventListener("click", deleteItem);

    // 리스트에 추가
    var line = document.createElement("li");
    line.className = "line";
    line.appendChild(span);
    line.appendChild(button);
    document.querySelector("#list").appendChild(line);
    
    // 입력 내용 초기화
    document.querySelector("#newItem").value = "";
}

function checkEnter(){
    if (window.keyCode == 13){
        addList();
    }
}

function toggleLine(item){
    if (item.target.style.textDecoration === "none"){
        item.target.style.textDecoration = "line-through";
    }
    else{
        item.target.style.textDecoration = "none";
    }
}

function deleteItem(item){
    var a = item.target.parentNode.firstChild.innerText;
    if (confirm(a+"을/를 삭제하시겠습니까?")){
        document.querySelector("#list").removeChild(item.target.parentNode);
    }
}