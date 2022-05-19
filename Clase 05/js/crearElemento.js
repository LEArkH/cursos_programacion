let caja = document.querySelector('#caja');
let boton = document.querySelector('#boton');

let cajaNueva = document.createElement('div');

boton.onclick= function(){
    caja.appendChild(cajaNueva);
    cajaNueva.classList.add('orange');
    cajaNueva.innerText = 'Hola';
}
     