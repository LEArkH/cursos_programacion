let txtHoras = document.querySelector('#txtHoras');
let txtMinutos = document.querySelector('#txtMinutos');
let txtSegundos = document.querySelector('#txtSegundos');
let txtPuntito = document.querySelectorAll('.txtPuntito')
let cantidad = txtPuntito.length;

function dosCarac(numero){
    if(numero<10){
        numero = '0' + numero 
    }
    return numero
}

let segundos = 0;
let minutos = 0;
let horas = 0;
/*
horas = dosCarac(horas);
minutos = dosCarac(minutos);
segundos = dosCarac(segundos);

function cronometro(){

    if (segundos < 59){
        segundos++;
        segundos = dosCarac(segundos);
    } else {
        segundos = 0;
        segundos = dosCarac(segundos);
        if (minutos < 59){
            minutos++;
            minutos = dosCarac(minutos);
        } else {
            minutos = 0;
            minutos = dosCarac(minutos);
            horas++;
            horas = dosCarac(horas);
        }  
    }

    txtHoras.innerText= horas;
    txtMinutos.innerText= minutos;
    txtSegundos.innerText= segundos;
    
    function mostrarOcultar(){
        if(puntito.style.opacity == 0){
            puntito.style.opacity= 1;
        } else{
            puntito.style.opacity= 0;
        }
    }
    mostrarOcultar()
}
function mostrarOcultar(){
        if(puntito.style.opacity == 0){
            puntito.style.opacity= 1;
        } else{
            puntito.style.opacity= 0;
        }
    }

*/
function mostrarOcultar(num){
    let separador = '';
    if (num%2 == 0){
        separador = ':';
    }
    return separador;
}

function cronometro(){

    segundos++;
    txtSegundos.innerText= dosCarac(segundos%60);
    minutos = Math.trunc(segundos/60);
    txtMinutos.innerText= dosCarac(minutos%60);
    txtHoras = Math.trunc(minutos/60);
    txtHoras.innerText= dosCarac(horas);
    
    let i=0;
    while(i<cantidad){
        txtPuntito[i].innerText=mostrarOcultar(segundos);
        i++
    }
}


cronometro()

setInterval(cronometro, 1000)