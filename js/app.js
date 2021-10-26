// function sumardos (x, y) {return x + y};
// function sumartres (x, y, z) {return x + y + z};

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

// ESTE CÓDIGO ANDABA PERO DECIDÍ RESUMIRLO EN productos.js, Y MOVÍ PARTE DEL MISMO A ESE ARCHIVO.

// const button1 = document.querySelector('#item1');
// const button2 = document.querySelector('#item2');
// const button3 = document.querySelector('#item3');
// const button4 = document.querySelector('#item4');
// const button5 = document.querySelector('#item5');
// const button6 = document.querySelector('#item6');

// const Lista = document.querySelector('#lista');


// button1.addEventListener('click', () => {
//     const input = document.createElement('li');
//     input.textContent = (LesPaul.marca + " " + LesPaul.modelo);
//     Cart.appendChild(input);
// });

// button2.addEventListener('click', () => {
//   const input = document.createElement('li');
//   input.textContent = (JazzBass.marca + " " + JazzBass.modelo);
//   Cart.appendChild(input);
// });

// button3.addEventListener('click', () => {
//   const input = document.createElement('li');
//   input.textContent = (Telecaster.marca + " " + Telecaster.modelo);
//   Cart.appendChild(input);
// });

// button4.addEventListener('click', () => {
//   const input = document.createElement('li');
//   input.textContent = (Gretsch.marca + " " + Gretsch.modelo);
//   Cart.appendChild(input);
// });

// button5.addEventListener('click', () => {
//   const input = document.createElement('li');
//   input.textContent = (Steinway.marca + " " + Steinway.modelo);
//   Cart.appendChild(input);
// });

// button6.addEventListener('click', () => {
//   const input = document.createElement('li');
//   input.textContent = (Saxo.marca + " " + Saxo.modelo);
//   Cart.appendChild(input);
// });

// const total = document.querySelector("#total");

// const resultado = document.querySelector("#resultado");

// total.addEventListener('click', () => {
//   const input = document.createElement('li');
//   input.textContent = (precio);
//   Cart.appendChild(input);
// });

