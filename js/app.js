document.addEventListener('DOMContentLoaded', () =>{
    renderProductos(productos);
})

$("img").hide()
$("img").fadeIn(3000);

const listaProductos = document.querySelector('#lista-productos');

let cart = [];

listaProductos.addEventListener('click', agregarProducto)

function agregarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const decision = e.target.parentElement;
        const eleccion = {
            marca: decision.querySelector('h4').textContent,
            modelo: decision.querySelector('h5').textContent,
            precio: decision.querySelector('p').textContent,
            imagen: decision.previousElementSibling.querySelector('img').src,
            id: decision.querySelector('a').getAttribute('data-id')

        }

        console.log(eleccion);
    };
}

function renderProductos(productos) {
    productos.forEach(producto => {
        const html = `
            <div class="div__galeria__grilla mt-5">
                <img src="${producto.imagen}" class="col-md-2 col-sm-4 col-8 foto__img__tamaño img-fluid">
            </div>
            <div>
                <h4>${producto.Marca}</h4>
                <h5>${producto.Modelo}</h5>
                <p>${producto.Precio}</p>
                <a href="#" class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</a>
            </div>
            
            `
            listaProductos.innerHTML += html;
    });
}