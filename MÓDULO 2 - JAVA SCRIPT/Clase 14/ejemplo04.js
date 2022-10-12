const valor = parseInt(prompt('ingrese un valor comprendido entre 1 y 5', '')

switch (valor){
    case 1:
        document.write('hola soy el nro 1')
        break;

    case 2:
        document.write('hola soy el nro 2')
        break;

    default:
        document.write('debe ingresar un numero entre el 1 y 5')
        break;
}