/*
Pedir que ingrese num
a ese num guardarlo en variable
Pedir que ingrese otro num
a ese otro num guardarlo en otra variable
sumar
mostrar en un span id txt
*/

let numUno = parseInt(prompt('Ingrese un número'));
let numDos = parseInt(prompt('Ingrese un otro número'));

let suma = numUno + numDos;
let txt = document.getElementById('txt');

txt.innerText = 'El resultado es: ' + suma;