document.addEventListener('DOMContentLoaded', () =>{
    renderProductos(productos);
})

$("img").hide()
$("img").fadeIn(3000);

const listaCart = document.querySelector('#listaCart')

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
            imagen: decision.querySelector('img').src,
            id: decision.querySelector('a').getAttribute('data-id')

        }

        console.log(eleccion);

        cart.push(eleccion);
        console.log(cart)
        actualizarCart()
    };
}

function actualizarCart(){
    cart.forEach(producto =>{
    const fila = document.createElement('tr');
        fila.innerHTML = 
        `<td>
            ${producto.marca}
        </td>
        <td>
            ${producto.modelo}
        </td>
        <td>
            ${producto.precio}
        </td> `

        listaCart.appendChild(fila)

        }
    )
}

function renderProductos(productos) {
    productos.forEach(producto => {
        const html = `
            <div class="mt-5">
                <img src="${producto.imagen}" class="col-md-2 col-sm-4 col-8 foto__img__tamaño img-fluid">
                <h4>${producto.Marca}</h4>
                <h5>${producto.Modelo}</h5>
                <p>${producto.Precio}</p>
                <a href="#" class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</a>
            </div>
            
            `
            listaProductos.innerHTML += html;
    });
}