//Crea el elemento li para organizar las tareas por fechas
export default (date) => {
    const dateElement = document.createElement('li');
    dateElement.classList.add('date');
    dateElement.innerHTML = date;
    return dateElement;
}