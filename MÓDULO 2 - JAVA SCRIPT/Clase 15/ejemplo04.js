function todoslosparrafos(){
    const allparrafos = document.querySelectorAll('p')
    console.log(allparrafos)

    const num = allparrafos.length
    alert(`Hay ${num} elementos <p> dentro de este documento.`)
}

todoslosparrafos()