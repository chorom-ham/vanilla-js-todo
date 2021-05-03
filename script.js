const List = document.querySelector('#add_list');
const Input = document.querySelector('#input');
const Form = document.querySelector('form.todo_list');

//엔터 입력 시 추가
function EnterPress() {
    if (event.keycode === 13) {
        add_list();
    }
}

//toggle시 가운데 줄 긋고 폰트 회색으로 변경
function toggle_line(event) {
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
function delete_list(event) {
    const target = event.target;
    const list = target.parentNode;
    List.removeChild(list);
}

//list add
function add_list() {
    if (Input.value !== '') {
        const new_li = document.createElement('li');
        new_li.className = 'li_elem';
        const delete_button = document.createElement('button');
        delete_button.className = 'deleteButton';
        delete_button.innerText = 'X';
        const elem = document.createElement('elem');
        elem.innerText = Input.value;
        new_li.appendChild(elem);
        new_li.appendChild(delete_button);
        List.appendChild(new_li);

        delete_button.addEventListener('click', delete_list);
        elem.addEventListener('click', toggle_line);
        Input.value = '';
    }
}

Form.addEventListener('submit', (event) => {
    event.preventDefault();
    add_list();
});
