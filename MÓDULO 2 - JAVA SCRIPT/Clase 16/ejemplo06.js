const alternar = document.getElementsByClassName('alternar') [0]

alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo')
})

//classList > representa una lista de clases asignadas al elemento. add > agrega una clase. remove > remueve una clase. toggle > cambia una clase.

