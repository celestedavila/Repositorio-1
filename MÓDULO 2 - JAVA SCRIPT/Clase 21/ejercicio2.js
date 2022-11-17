const nombre = prompt('Ingrese su nombre', '')
const distancia = parseInt(prompt('Ingrese la distancia en km', ''))
var transporte

if (distancia > 0 && distancia <= 1) {
    transporte = 'pie'
} else if (distancia > 1 && distancia <= 10) {
    transporte = 'bicicleta'
} else if (distancia > 10 && distancia <= 30) {
    transporte = 'colectivo'
} else if (distancia > 30 && distancia <= 100) {
    transporte = 'auto'
} else {
    transporte = 'avion'
}

var mensaje = `${nombre} debe viajar en ${transporte} ya que son ${distancia} km.`
var alerta = `Ingrese un formato valido.`

if (Number.isNaN(distancia)) {
    document.write(alerta)
} else if (distancia == 0) {
    document.write(alerta)
} else {
    document.write(mensaje)
}
