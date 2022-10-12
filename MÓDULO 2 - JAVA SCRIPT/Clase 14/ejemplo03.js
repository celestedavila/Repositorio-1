const nombre = prompt('Ingrese su nombre', '')
const nota = parseInt(prompt('Ingrese la nota', ''))

console.log(nombre)
console.log(nota)

if(Number.isNaN(nota)){
    document.write('La nota ingresada no es valida')
} else if(nota >= 4){
    document.write(`${nombre} esta aprobado con ${nota}.`)
} else{
    document.write(`${nombre} esta desaprobado con ${nota}.`)
}