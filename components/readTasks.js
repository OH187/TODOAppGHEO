import { crearTarea } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTasks = () => {
    var ul = document.querySelector(".cardsList"); //Seleccionams la ul del DOM

    //Para guardar las tareas, tomamos los datos por el nombre de la llave o si es null le agregamos un arreglo vacío
    const taskList = JSON.parse(localStorage.getItem('tasks')) || []; //JSON parse para convertir a un objeto JS
    const dates = uniqueDates(taskList);
    orderDates(dates);
    

             // crea un nuevo objeto `Date`
            var today = new Date();
            var now = today.getDay();// obtener la fecha y la hora
            const dateNow = moment(now, 'DD/MM/YYYY')

        //Recorre el arreglo
        dates.forEach(date => {
            ul.appendChild(dateElement(date)); //Agrega la agrupacion de fechas
            const dateMoment = moment(date,'DD/MM/YYYY');
            

            //Organiza las tareas por bloques segun su fecha
            taskList.forEach((task) => {
                const dateTask = moment(task.dateFormat, 'DD/MM/YYYY');
                const diff = dateMoment.diff(dateTask); //Verifica si una fecha es igual a la otra. diff es la libreria moment
                const diferencia = dateTask.diff(dateNow);
                
                
                if(diff === 0){
                ul.appendChild(crearTarea(task)); //Agregamos la li a la ul desde localStorage
                }
            });


        });
        
}