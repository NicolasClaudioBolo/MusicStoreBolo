// LA CONSOLA ME TIRA "false" CUANDO ELIJO IMÁGENES. PROBÉ CAMBIANDO EL CONTENIDO DE LA FUNCIÓN DE LA LÍNEA 7 PERO NO FUNCIONÓ.

const Cart = document.querySelector('#Cart');

const listaProductos = document.querySelector('#agregar-carrito')

function agregarProducto(e) {
    e.preventDefault();
    console.log(e.target.classList.contains("agregar-carrito"));
}

listaProductos.addEventListener('click', agregarProducto)

$("img").hide()
$("img").fadeIn(3000);