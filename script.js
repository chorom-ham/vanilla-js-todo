const List = document.querySelector('#add_list');
const Input = document.querySelector('#input');
const Form = document.querySelector('form.todo_list');

function EnterPress() {
    if (event.keycode === 13) {
        add_list();
    }
}

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

function delete_list(event) {
    const target = event.target;
    const list = target.parentNode;
    List.removeChild(list);
}

function add_list() {
    if (Input.value) {
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
