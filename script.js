//const 설정
const List = document.querySelector('#addList');
const Input = document.querySelector('#input');
const Form = document.querySelector('form.todo-list');

//엔터 입력 시 추가
function EnterPress() {
    if (event.keycode === 13) {
        addList();
    }
}

//toggle시 가운데 줄,  폰트 회색으로 변경
function toggleLine(event) {
    const target = event.target;
    if (target.style.textDecoration !== 'line-through') {
        target.style.textDecoration = 'line-through';
        target.style.color = 'gray';
    } else {
        target.style.textDecoration = 'none';
        target.style.color = 'black';
    }
}

//list delete
function deleteList(event) {
    const target = event.target;
    const list = target.parentNode;
    List.removeChild(list);
}

//list add
function addList() {
    if (Input.value !== '') {
        const newList = document.createElement('li');
        newList.className = 'listElement';
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerText = 'X';
        const element = document.createElement('element');
        element.innerText = Input.value;
        newList.appendChild(element);
        newList.appendChild(deleteButton);
        List.appendChild(newList);

        deleteButton.addEventListener('click', deleteList);
        element.addEventListener('click', toggleLine);
        Input.value = '';
    }
}

Form.addEventListener('submit', (event) => {
    event.preventDefault();
    addList();
});
