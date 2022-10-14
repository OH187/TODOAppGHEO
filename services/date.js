//Ayuda a quiutar las fechas repetidas
export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach(task => {
        if(!unique.includes(task.dateFormat)) unique.push(task.dateFormat); //Verifica si existe un elemento repetido para no agregarlo al arreglo
    });
    return unique;
}

export const orderDates = (dates) =>{
    //Ordena las fechas de menor a mayor
    return dates.sort((a, b) => {
        const firstDate = moment(a, 'DD/MM/YYYY')
        const secondDate = moment(b, 'DD/MM/YYYY')
        return  firstDate - secondDate; 
    });
};