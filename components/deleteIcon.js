import { displayTasks } from "./readTasks.js";
//Crea el icono borrar
const iconBorrar = (id) => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', () => borrar(id));
    return i;
}

//Borrar tarea
const borrar = (id) => {
    const li = document.querySelector(".cardsList");
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex(item => item.id === id);
    tasks.splice(index, 1);
    li.innerHTML = ''; //Cada vez que carga la pagina, se muestra la lista como vacia
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(); //Permite recargar la pagina
    //const task = event.target.parentElement; //Selecciona el elemento de la lista
    //task.remove();
};
export default iconBorrar;