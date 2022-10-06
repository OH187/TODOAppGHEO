import checkCompletado from './components/checkComplete.js';
import iconBorrar from './components/deleteIcon.js';
// Immediately invoked function expression IIFE, son funciones en cuanto se declaran se ejecutan, permite ocultar funciones al usuario


let botonAgregar = document.querySelector(".btnCreate");

//Agregando la tarea
const crearTarea = (evento) => {
    evento.preventDefault();
    var ul = document.querySelector(".cardsList");
    var input = document.querySelector(".inputForm").value;
    let tarjeta = document.createElement('li');
    tarjeta.classList.add("card"); 

    const contentTarea = document.createElement('div');
    contentTarea.appendChild(checkCompletado()); //Agrega el elemento creado a partir de esa funcion
    contentTarea.classList.add('content-tarea');
    const tarea = document.createElement('span');
    tarea.classList.add('task');
    tarea.innerText = input;
    contentTarea.appendChild(tarea); //Agregamos al div la tarea o el elemento span
    tarjeta.appendChild(contentTarea); //Elemento li
    

    //Valida si no esta vacío el el input
    if(input !== ""){
        ul.appendChild(tarjeta);
    }
    // input = ' ';
    tarjeta.appendChild(iconBorrar());
};

botonAgregar.addEventListener('click', crearTarea);

