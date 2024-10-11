const inputTarea = document.getElementById('tareatxt');
const btnAdd = document.getElementById('addtarea');
const myForm = document.querySelector('#myform');
const divTareas = document.getElementById('tareas');

let arrayTareas = localStorage.getItem('tareas')
                           ? JSON.parse(localStorage.getItem('tareas'))
                           : [];

let colorDeDiv = 0;

const addTarea = () => {
    const tarea = inputTarea.value;
    if (tarea.trim() !== "") {
        inputTarea.value = '';
        arrayTareas.push({
            tarea: tarea,
            estado: 'danger',
            id:Math.floor(Math.random() * 1000000)

        });
        construyeDivs();
        localStorage.setItem('tareas', JSON.stringify(arrayTareas));
    }
};

const changeColor = (e) => {
    const cDiv = e.target;
    const id = Number(cDiv.getAttribute('data-id'));
    const encontrado = arrayTareas.findIndex(tarea => tarea.id === id);
    
    if (encontrado !== -1) {
        if(cDiv.classList.contains('danger')) {
            cDiv.classList.remove('danger');
            cDiv.classList.add('warning');
            arrayTareas[encontrado].estado = "warning";
        } else if (cDiv.classList.contains('warning')) {
            cDiv.classList.remove('warning');
            cDiv.classList.add('success');
            arrayTareas[encontrado].estado = "success";
        } else if (cDiv.classList.contains('success')) {
            cDiv.classList.remove('success');
            cDiv.classList.add('danger');
            arrayTareas[encontrado].estado = "danger";
        };
        localStorage.setItem('tareas', JSON.stringify(arrayTareas));
    }
};


construyeDivs = () => {
    divTareas.innerHTML = '';
    arrayTareas.forEach(tarea => {
        divTareas.appendChild(createTarea(tarea));
    });
};

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTarea();
});

const createTarea = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const buttonEliminar = document.createElement('button');
    const buttonEditar = document.createElement('button');

    p.innerText = tarea.tarea;
    buttonEliminar.innerText = 'Eliminar';
    buttonEditar.innerText = 'Editar';

    buttonEliminar.addEventListener('click', deleteItem);

    buttonEditar.addEventListener('click', () => {
        editTarea(div, p);
    });

    div.appendChild(p);
    div.appendChild(buttonEditar);
    div.appendChild(buttonEliminar);

    div.classList.add('alert');
    div.classList.add(tarea.estado);
    div.setAttribute('data-id', tarea.id);

    div.addEventListener('click', changeColor);

    return div;
};

const deleteItem = (e) => {
    const pa = e.target.parentElement;
    const id = Number(pa.getAttribute('data-id'));
    arrayTareas = arrayTareas.filter(tarea => tarea.id !== id);
    pa.remove();
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
};


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
};

construyeDivs();
btnAdd.addEventListener('click', addTarea);