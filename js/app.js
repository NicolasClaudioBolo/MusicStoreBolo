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

document.addEventListener('DOMContentLoaded', () =>{
    renderProductos(productos);
})

const listaCart = document.querySelector('#listaCart')

const listaProductos = document.querySelector('#lista-productos');

const total = document.querySelector('#resulCart')

let cart = [];

let operacion = [];

let totalGlobal = 0



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

function parsearPrecio(producto) {
    let arrProd = producto.precio.split('')
    arrProd.shift()
    return parseFloat(arrProd.join(''))
}


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


function borrarProducto(index) {
    const productRemoved = cart[index]
    cart.splice(index, 1) // lo saco del cart
    operacion.splice(index, 1)

    listaCart.removeChild(listaCart.childNodes[index]); // lo saco del html
    
    totalGlobal -= parsearPrecio(productRemoved) // resto al total
    actualizarTotal() // refreco total en html
}   


function actualizarTotal(){

    total.removeChild(total.lastChild)
    const resultado = document.createElement('tr');
    resultado.innerHTML = 
        '<td>' + totalGlobal + '</td>'
        total.appendChild(resultado)
}

// const item = document.querySelector("tr")



// document.addEventListener("click", function(){
//     basura.innerHTML =
//     basura.removeChild(item)

//     }
// );

$("img").hide();
$("img").fadeIn(3000);