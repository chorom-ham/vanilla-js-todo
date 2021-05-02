let addButton = document.querySelector(".add_button");
addButton.addEventListner("click", addInput);

function deleteTodo(event){
    let deleteli = event.target.parentNode;
    todoList.removeChild(deleteli);
}

function toggleTodo(event){
    event.target.todoList.toggle('done');
}

function addInput(){
    let todo = document.querySelector(".todo_input").value;
    
    if (todo != null){
        let todoList = document.createElement("li");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.name
        deleteButton.className = "delete_button";
        let span = document.createElement("span");
        span.innerText = todo;
        todoList.appendChild(span);
        todoList.appendChild(deleteButton);
        deleteButton.addEventListener("click", deleteTodo);
        span.addEventListener("click", toggleTodo);
        document.querySelector(".todo_input").value = "";
    }
}

function addHandler(){
    // enterkey 눌렀을 때
    if(window.event.keyCode == 13){
        addInput();
    }
}