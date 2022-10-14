// Immediately invoked function expression IIFE, son funciones en cuanto se declaran se ejecutan, permite ocultar funciones al usuario
import { addTask } from './components/addTask.js'
import { displayTasks } from './components/readTasks.js';

let botonAgregar = document.querySelector(".btnCreate");

botonAgregar.addEventListener('click', addTask);
displayTasks();
