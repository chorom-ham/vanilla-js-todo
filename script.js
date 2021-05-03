let todoForm = document.querySelector('.todo_form');
let addButton = document.getElementById('add_button');
const todoInput = document.getElementById('todo_input');
let todoList = document.getElementById('todo_list');

function deleteTodo(event){
    let target = event.target;
    let deleteli = target.parentNode;
    todoList.removeChild(deleteli);
}

function toggleTodo(event){
    let target = event.target;
    if(target.style.textDecoration !== "line-through"){
        target.style.textDecoration = "line-through";
        alert("수고하셨습니다!");
    }
    else
        target.style.textDecoration = "none";
}

function addInput(){
    if (todoInput.value !== ''){
        let list = document.createElement("li");

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.className = "delete_button";

        let span = document.createElement("span");
        span.innerText = todoInput.value;
        list.appendChild(span);
        list.appendChild(deleteButton);
        todoList.appendChild(list);

        deleteButton.addEventListener('click', deleteTodo);
        span.addEventListener('click', toggleTodo);

        todoInput.value = '';
    }
}

function addHandler(){
    if(window.event.keyCode == 13){    // enterkey 눌렀을 때
        addInput();
    }
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addInput();
});