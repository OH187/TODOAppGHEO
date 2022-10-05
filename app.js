

let botonAgregar = document.querySelector(".btnCreate");

let iconoEliminar = document.querySelector(".trashIcon");

const crearTarea = (evento) => {
    evento.preventDefault();
    var ul = document.querySelector(".cardsList");
    var input = document.querySelector(".inputForm").value;
    let tarjeta = document.createElement('li');
    
    tarjeta.innerHTML =  `
    <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${input}</span>
    </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `;
    tarjeta.classList.add("card"); //Agregano la clase
    
    console.log(input);

    if(input !== ""){
        ul.appendChild(tarjeta);
        input = '';
    }
    
    
}

botonAgregar.addEventListener('click', crearTarea);
