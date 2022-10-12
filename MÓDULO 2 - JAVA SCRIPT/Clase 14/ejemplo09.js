function validarLargo(text,largorequerido){
    return text.length >= largorequerido
}

function validarform(){
    const nombrevalido = true
    const passwordvalido = validarLargo(document.form1.text1.value, 5)

    const resultado = nombrevalido && passwordvalido
    if (resultado){
        alert('es valido')
    } else {
        alert('no es valido')
    }
}