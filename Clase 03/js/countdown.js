let txtDias= document.getElementById('txtDias')
let txtHoras = document.getElementById('txtHoras')
let txtMinutos = document.getElementById('txtMinutos')
let txtSegundos = document.getElementById('txtSegundos')

function dosCarac(numero){
    if(numero<10){
        numero = '0' + numero 
    }
    return numero
}

function countdown(){
    let ahora = new Date();
    let final = new Date(2022, 3, 3);
    let actual = ahora.getTime();
    let evento = final.getTime();
    let diferencia = evento - actual;
    let segundos = Math.trunc(diferencia/1000);
    let minutos = Math.trunc(segundos/60);
    let horas = Math.trunc(minutos/60);
    let dias = Math.trunc(horas/24);

    horas = dosCarac(horas%24);
    minutos = dosCarac(minutos%60);
    segundos = dosCarac(segundos%60);


    txtDias.innerText= dias;
    txtHoras.innerText= horas;
    txtMinutos.innerText= minutos;
    txtSegundos.innerText= segundos;

}

countdown()

setInterval(countdown, 1000)