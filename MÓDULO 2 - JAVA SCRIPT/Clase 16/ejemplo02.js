const link = document.getElementById('link')

link.addEventListener('click', function(e){ // la e es de evento
    e.preventDefault() // la f frena lo impuesto por default
    alert('Quisiste ir a: ' + e.currentTarget.href)
})