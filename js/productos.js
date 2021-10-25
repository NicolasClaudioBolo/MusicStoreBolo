const Cart = document.querySelector('#Cart');

const listaProductos = document.querySelector('#agregar-carrito')

function agregarProducto(e) {
    e.preventDefault();
    console.log(e.target.classList.contains("agregar-carrito"));
}


listaProductos.addEventListener('click', agregarProducto)