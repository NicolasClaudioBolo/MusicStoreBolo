const productos = [
    {"Marca": "Gibson",
     "Modelo": "Les Paul",
     "Precio": 2000,
     "id": 1,
     "imagen": "img/GibsonLesPaul.png"
    },
    {"Marca": "Fender",
     "Modelo": "Jazz Bass",
     "Precio": 1500,
     "id": 2,
     "imagen": "img/FenderJazzBass.png"
    },
    {"Marca": "Fender",
     "Modelo": "Telecaster",
     "Precio": 1400,
     "id": 3,
     "imagen": "img/FenderTelecaster.png"
    },
    {"Marca": "Gretsch",
     "Modelo": "Gme824p Marquee",
     "Precio": 1000,
     "id": 4,
     "imagen": "img/Gretsch.png"
    },
    {"Marca": "Steinway & Sons",
     "Modelo": "Negro",
     "Precio": 60000,
     "id": 5,
     "imagen": "img/Steinway.png"
    },
    {"Marca": "Lacquer Mayer",
     "Modelo": "Gold Alto",
     "Precio": 400,
     "id": 6,
     "imagen": "img/Saxo.png"
    }
]


// RENDERIZACIÓN DEL DOM, CON EL ARRAY DE OBJETOS "productos" EN CONSOLA

document.addEventListener('DOMContentLoaded', () =>{
    renderProductos(productos);
})

// LISTA DEL CARRITO

const listaCart = document.querySelector('#listaCart')


//LISTA DE LOS PRODUCTOS EN PANTALLA AL CARGAR EL SITIO WEB

const listaProductos = document.querySelector('#lista-productos');


// SELECTOR PARA EL RESULTADO DE LA SUMA DE LOS ITEMS DEL CARRITO

const total = document.querySelector('#resulCart')

// ARRAY DE PRODUCTOS EN EL CARRITO, ARRAY DE SUS PRECIOS PARA OPERAR, Y VARIABLE GLOBAL DEL TOTAL DE LA SUMA DE LOS PRODUCTOS DEL CARRITO

let cart = [];

let operacion = [];

let totalGlobal = 0


// FUNCIÓN PARA AGREGAR UN PRODUCTO HACIENDO CLICK SOBRE EL MISMO, MOSTRÁNDOLO EN LA LISTA DEL CARRITO CON TODOS LOS VALORES DEL OBJETO EN CUESTIÓN

listaProductos.addEventListener('click', agregarProducto)

function agregarProducto(e) {
    e.preventDefault();
    let total = 0
    if(e.target.classList.contains("agregar-carrito")){
        const decision = e.target.parentElement;
        const eleccion = {
            imagen: decision.querySelector('img').src,
            modelo: decision.querySelector('h5').textContent,
            marca: decision.querySelector('h4').textContent,
            precio: decision.querySelector('p').textContent,
            
            id: decision.querySelector('button').getAttribute('data-id')

        }

        cart.push(eleccion);
        

        operacion.push(eleccion)
        operacion.forEach(producto =>{
            const precioEnNum = parsearPrecio(producto)
            total = total + precioEnNum
            }
        );

        const almacenamiento = localStorage.setItem(eleccion.modelo, eleccion.precio);

        totalGlobal = total

        actualizarCart()
        actualizarTotal()
    };
}


// FUNCIÓN PARA PASAR A NÚMERO EL STRING DE PRECIO, EVITANDO EL CARACTER "$"

function parsearPrecio(producto) {
    let arrProd = producto.precio.split('')
    arrProd.shift()
    return parseFloat(arrProd.join(''))
}


// FUNCIÓN PARA PREVENIR QUE SE VUELVA A AGREGAR LO QUE EL USUARIO YA HA SELECCIONADO PREVIAMENTE PARA EL CARRITO

function actualizarCart(){
    listaCart.innerHTML = '';
    cart.forEach((producto, index) =>{
    const fila = document.createElement('tr');
        fila.innerHTML += 
        `<td class="letra__celda__tamaño">
            ${producto.marca}
        </td>
        <td class="letra__celda__tamaño">
            ${producto.modelo}
        </td>
        <td class="letra__celda__tamaño">
            ${producto.precio}
        </td> 
        <td class="letra__celda__tamaño">
            <img src="./img/bin.png" class="icono__img__tamaño mb-4" id="basura" onclick="borrarProducto(${index})">
        </td> `

        listaCart.appendChild(fila);
        }
    )
}


// RENDERIZACIÓN DE LOS PRODUCTOS EN EL DOM

function renderProductos(productos) {
    productos.forEach(producto => {
        const html = `
            <div class="mt-5 col-md-2 col-sm-4 col-8">
                <img src="${producto.imagen}" class="col-md-2 col-sm-4 col-8 foto__img__tamaño img-fluid">
                <h4>${producto.Marca}</h4>
                <h5>${producto.Modelo}</h5>
                <p>$ ${producto.Precio}</p>
                <button type="button" class="btn agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
            </div>
            
            `
            listaProductos.innerHTML += html;
    });
}


// FUNCIÓN PARA BORRAR PRODUCTO DEL CARRITO

function borrarProducto(index) {
    const productRemoved = cart[index]
    cart.splice(index, 1) // SACAR DEL CARRITO
    operacion.splice(index, 1)

    listaCart.removeChild(listaCart.childNodes[index]); // SACAR DEL HTML
    
    totalGlobal -= parsearPrecio(productRemoved) // RESTAR AL TOTAL
    actualizarTotal() // REFRESCAR TOTAL EN HTML
}   


// FUNCIÓN PARA MOSTRAR EL TOTAL GLOBAL ACTUALIZADO SIN QUE SE SUMEN PRECIOS DE PRODUCTOS PREVIAMENTE SELECCIONADOS

function actualizarTotal(){

    total.removeChild(total.lastChild)
    const resultado = document.createElement('tr');
    resultado.innerHTML = 
        '<td>' + totalGlobal + '</td>'
        total.appendChild(resultado)
}


// ANIMACIÓN DE FADE IN PARA LAS IMÁGENES COLOCADAS DESDE EL HTML

$("img").hide();
$("img").fadeIn(3000);