//Crea el icono borrar
const iconBorrar = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', borrar);
    return i;
}

//Borrar tarea
const borrar = (e) =>{
    const task = e.target.parentElement; //Selecciona el elemento de la lista
    task.remove();
};
export default iconBorrar;