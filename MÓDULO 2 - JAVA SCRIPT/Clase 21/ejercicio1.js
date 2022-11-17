const edad = parseInt(prompt('Ingrese la edad', ''))
const nombre = prompt('Ingrese su nombre', '')

if(Number.isNaN(edad)){
    document.write('El formato ingresado no es válido.')
} else if(edad >= 18){
    document.write(`${nombre} puede conducir con ${edad}.`)
} else{
    document.write(`${nombre} no puede conducir con ${edad}.`)
}