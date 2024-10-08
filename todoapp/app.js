const inputTarea = document.getElementById('tareatxt');
const btnAdd = document.getElementById('addtarea');
const myForm = document.querySelector('#myform');
const divTareas = document.getElementById('tareas');

let tareas = [];

let colorDeDiv = 0;

const addTarea = () => {
    const tarea = inputTarea.value;
    if (tarea.trim() !== "") {
        divTareas.appendChild(createTarea(tarea));
        inputTarea.value = '';
    }
}

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTarea();
})

const createTarea = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const buttonEliminar = document.createElement('button');
    const buttonEditar = document.createElement('button');

    p.innerText = tarea;
    buttonEliminar.innerText = 'Eliminar';
    buttonEditar.innerText = 'Editar';

    buttonEliminar.addEventListener('click', deleteItem);

    buttonEditar.addEventListener('click', () => {
        editTarea(div, p);
    });

    div.appendChild(p);
    div.appendChild(buttonEditar);
    div.appendChild(buttonEliminar);

    switch (colorDeDiv) {
        case 0:
            div.classList.add('alert', 'danger');
            colorDeDiv++;
            break;
        case 1:
            div.classList.add('alert', 'warning');
            colorDeDiv++;
            break;
        case 2:
            div.classList.add('alert', 'success');
            colorDeDiv = 0;
            break;
    }

    return div;
}

const deleteItem = (e) => {
    const pa = e.target.parentElement;
    pa.remove();
}

const editTarea = (div, p) => {
    const inputEdit = document.createElement('input');
    inputEdit.type = 'text';
    inputEdit.value = p.innerText;

    const buttonGuardar = document.createElement('button');
    buttonGuardar.innerText = 'Guardar';

    div.replaceChild(inputEdit, p);
    const buttonEditar = div.querySelector('button:nth-child(2)');
    div.replaceChild(buttonGuardar, buttonEditar);

    buttonGuardar.addEventListener('click', () => {
        p.innerText = inputEdit.value;
        div.replaceChild(p, inputEdit);
        div.replaceChild(buttonEditar, buttonGuardar);
    });
}

btnAdd.addEventListener('click', addTarea);