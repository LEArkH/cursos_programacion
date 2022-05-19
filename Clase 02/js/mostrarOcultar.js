let caja = document.getElementById('caja')
let interruptor = 1;
let i=0;
let x=0;
// declarar funciones

function cambioColor(){
    caja.style.width = '75px' 
    caja.style.height = '250px';
    caja.style.backgroundColor = 'rgb(234, 243, 102)';
}

function oculto(){
    caja.style.display= 'none';
}    
function mostrar(){
    caja.style.display= 'block';
}
/*
function mostrarOcultar(){
    if (interruptor == 0){
        caja.style.display= 'block';
        interruptor = 1;
    } else {
        caja.style.display= 'none';
        interruptor = 0; 

    }    
}
*/
/*
function mostrarOcultar(){
    switch (interruptor){
        case 0:
            caja.style.display= 'block';
            interruptor = 1;
        break;
        case 1:
            caja.style.display= 'none';
            interruptor = 0; 
        break;  
    } 
}

*/

function mostrarOcultar(){
    if(caja.style.display == 'none'){
        caja.style.display= 'block';
    } else{
        caja.style.display= 'none';
    }
}
