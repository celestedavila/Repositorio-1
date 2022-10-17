const cuadrado = document.getElementsByClassName('caja') [0]
const violeta = document.getElementById('violeta')
const borde = document.getElementById('borde')
const reset = document.getElementById('reset')

violeta.addEventListener('click', function(e){
    cuadrado.classList.add('violeta')
})

borde.addEventListener('click', function(e){
    cuadrado.classList.add('borde')
})

reset.addEventListener('click', function(e){
    cuadrado.classList.remove('violeta', 'borde')
})
