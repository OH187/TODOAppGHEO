//Coloca los estilos cuando el usuario da click para completar la tarea
const checkCompletado = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    // var contenedor = document.querySelector('.task');

    i.addEventListener('click', () => {
    // contenedor.classList.toggle('subrayado');
    i.classList.toggle('fas'); 
    i.classList.toggle('completeIcon');
    });
    return i;
};

export default checkCompletado;