//Coloca los estilos cuando el usuario da click para completar la tarea
const checkCompletado = (id) => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    // var contenedor = document.querySelector('.task');

    i.addEventListener('click', (event)  => completeTask(event, id));
        return i;
};

    const completeTask = (event, id) => {
        const element = event.target;
    // contenedor.classList.toggle('subrayado');
    element.classList.toggle('fas'); 
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    const tasks = JSON.parse(localStorage.getItem('tasks')); //Lo volvemos un objeto para manipularlo con JS
    const index = tasks.findIndex(item => item.id === id); //Busca el indice con el id correspondiente
    tasks[index]['complete'] = !tasks[index]['complete']; //Le negamos si esta completa o viceversa
    localStorage.setItem('tasks', JSON.stringify(tasks)); //Guardamos en el localStorage
    };
    

export default checkCompletado;