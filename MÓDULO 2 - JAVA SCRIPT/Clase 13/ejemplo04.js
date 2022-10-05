const valor1 = prompt('Ingrese su primer numero', '')
const valor2 = prompt('Ingrese su segundo numero', '')

const suma = parseInt(valor1) + parseInt(valor2) // el parseint convierte la variable en numero entero, se podria haber puesto tambien en prompt('Ingrese su primer numero', '') quedando parseInt(prompt('Ingrese su primer numero', '')). si no esta el parseint lo que sucede es que concatena la informacion

const producto = valor1 * valor2 // multiplicar no concatena

console.log(suma)
console.log(producto)