import { uniqueDates } from '../services/date.js';
import checkCompletado from './checkComplete.js';
import iconBorrar from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

//Agregando la tarea
export const addTask = (evento) => {
        //Evita el evento por defecto del input
        evento.preventDefault();


        var input = document.querySelector(".inputForm").value;
        var inputP = document.querySelector(".inputForm"); //Debemos seleccionarlo solo para poder limpiarlo (sin value)
        var ul = document.querySelector('.cardsList');
          //Parte del input de fecha
        var inputDate = document.querySelector('[data-form-date]');
        var date = inputDate.value;
        const dateFormat = moment(date).format('DD/MM/YYYY');//moment es una libreria para fechas y le damos formato a nuestra fecha
        const complete = false; //Para completar la tarea

         //Objeto para input de texto y fecha
        const taskObj = {
            input,
            dateFormat,
            complete,
            id: uuid.v4()
        }

    //Valida si esta vacío el input
    if(input === "" || date === ""){
        return; //Detenerse aqui y no hacer nada
    }  

    //Para guardar las tareas, tomamos los datos por el nombre de la llave o si es null le agregamos un arreglo vacío
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(taskObj);  //Agregando el objeto al arreglo
    localStorage.setItem('tasks', JSON.stringify(taskList));

    ul.innerHTML = ''; //Inicia la lista como vacío
    inputP.value = '' ;//Seleccionamos el elemento sin .value para poder limpiarlo
    inputDate.value = '';

    displayTasks(); //Crea y agrega las tareas
};



//Creando los elementos para la tarea
export const crearTarea = ({input, dateFormat, complete, id}) => {
    //Codigo inicial de las tareas
    const tarjeta = document.createElement('li');
    tarjeta.classList.add("card");
    
    //span donde va la fecha
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;

    const check = checkCompletado(id);
    //Si complete es verdadero, agrega las clases de css para poner azul el check
    if(complete){
        check.classList.toggle('fas'); 
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    //Contenedor de las tareas
    const contentTarea = document.createElement('div');
    contentTarea.appendChild(check); //Agrega el elemento creado a partir de esa funcion
    contentTarea.classList.add('content-tarea');
    const tarea = document.createElement('span');
    
    tarea.classList.add('task');
    tarea.innerText = input;
    contentTarea.appendChild(tarea); //Agregamos al div la tarea o el elemento span
    tarjeta.appendChild(contentTarea); //Elemento li
    // tarjeta.appendChild(dateElement); //Agregando la fecha
     //Agregando el icono borrar;
    tarjeta.appendChild(iconBorrar(id)); 
    
    return tarjeta;
};