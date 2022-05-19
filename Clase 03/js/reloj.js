let txt = document.getElementById('txt');

function reloj(){
    let fecha = new Date();
    let horas = fecha.getHours();
    horas= dosCarac(horas);
    let minutos = fecha.getMinutes();
    minutos= dosCarac(minutos);
    let segundos = fecha.getSeconds();
    segundos= dosCarac(segundos);
    txt.innerText = horas + ':' + minutos + ':' + segundos
}

function dosCarac(numero){
    if(numero<10){
        numero = '0' + numero 
    }
    return numero
}

reloj();

setInterval(reloj, 1000, );

