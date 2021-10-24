// let LesPaul = Number(2000)
// let JazzBass = Number (1500)
// let Telecaster = Number (1400)
// let Gretsch = Number(1000)
// let Steinway = Number(60000)
// let Saxo = Number(400)

// alert("Elige uno o más productos que desees comprar, separando los números en orden ascendente. Ejemplo: 1 2, para los productos Uno y Dos.")

// ("1-Gibson Les Paul 2-Fender Jazz Bass 3-Fender Telecaster 4-Gretsch Gme824p Marquee.")

function sumardos (x, y) {return x + y};
function sumartres (x, y, z) {return x + y + z};

// EL USO DE "if" SERÁ REEMPLAZADO POR UN ARRAY DE OBJETOS CON ID, PARA LLEGAR A UNA SOLUCIÓN ESCALABLE.
// VOY A INCORPORAR LAS FUNCIONES "sumardos" Y "sumartres" A MEDIDA QUE VAYA AVANZANDO.
// EL PRECIO SERÁ PASADO A DÓLARES PARA MANEJAR CIFRAS MÁS PEQUEÑAS Y REDUCIR EL MARGEN DE ERROR.

// if (producto == 1) {
//     alert("Precio: " + LesPaul);
//     } 
//     else { if (producto == 2) {
//     alert("Precio: " + JazzBass);
//     } 
//     else { if (producto == 3) {
//     alert("Precio: " + Telecaster);
//     }
//     else { if (producto == 4) {
//     alert("Precio: " + Gretsch);
//     }
//     else { if (producto == "1 2") {
//     alert("Precio: " + sumardos(LesPaul, JazzBass));
//     }
//     else { if (producto == "1 3") {
//     alert("Precio: " + sumardos(LesPaul, Telecaster));
//     }
//     else { if (producto == "1 4") {
//     alert("Precio: " + sumardos(LesPaul, Gretsch));
//     }
//     else { if (producto == "2 3") {
//     alert("Precio: " + sumardos(JazzBass, Telecaster));
//     }
//     else { if (producto == "2 4") {
//     alert("Precio: " + sumardos(JazzBass, Gretsch));
//     }
//     else { if (producto == "3 4") {
//     alert("Precio: " + sumardos(Telecaster, Gretsch));
//     }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }


function producto (marca, modelo, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

const LesPaul = new producto("Gibson", "Les Paul", 2000);
const JazzBass = new producto("Fender", "Jazz Bass", 1500);
const Telecaster = new producto("Fender", "Telecaster", 1400);
const Gretsch = new producto ("Gretsch", "Gme824p Marquee", 1000);
const Steinway = new producto ("Steinway & Sons", "Negro", 60000);
const Saxo = new producto ("Lacquer Mayer", "Gold Alto", 400);

let Instrumentos = [LesPaul, JazzBass, Telecaster, Gretsch, Steinway, Saxo];

// function carrito (LesPaul, JazzBass, Telecaster, Gretsch, Steinway, Saxo){
//   this.item1 = LesPaul;
//   this.item2 = JazzBass;
//   this.item3 = Telecaster;
//   this.item4 = Gretsch;
//   this.item5 = Steinway;
//   this.item6 = Saxo;
// };

const button1 = document.querySelector('#item1');
const button2 = document.querySelector('#item2');
const button3 = document.querySelector('#item3');
const button4 = document.querySelector('#item4');
const button5 = document.querySelector('#item5');
const button6 = document.querySelector('#item6');

// const Lista = document.querySelector('#lista');

const Cart = document.querySelector('#Cart');

button1.addEventListener('click', () => {
    const input = document.createElement('li');
    input.textContent = (LesPaul.marca + " " + LesPaul.modelo);
    Cart.appendChild(input);
});

button2.addEventListener('click', () => {
  const input = document.createElement('li');
  input.textContent = (JazzBass.marca + " " + JazzBass.modelo);
  Cart.appendChild(input);
});

button3.addEventListener('click', () => {
  const input = document.createElement('li');
  input.textContent = (Telecaster.marca + " " + Telecaster.modelo);
  Cart.appendChild(input);
});

button4.addEventListener('click', () => {
  const input = document.createElement('li');
  input.textContent = (Gretsch.marca + " " + Gretsch.modelo);
  Cart.appendChild(input);
});

button5.addEventListener('click', () => {
  const input = document.createElement('li');
  input.textContent = (Steinway.marca + " " + Steinway.modelo);
  Cart.appendChild(input);
});

button6.addEventListener('click', () => {
  const input = document.createElement('li');
  input.textContent = (Saxo.marca + " " + Saxo.modelo);
  Cart.appendChild(input);
});

const total = document.querySelector("#total");

const resultado = document.querySelector("#resultado");

// total.addEventListener('click', () => {
//   const input = document.createElement('li');
//   input.textContent = (precio);
//   Cart.appendChild(input);
// });


