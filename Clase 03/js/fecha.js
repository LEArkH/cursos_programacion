let txt = document.getElementById('txt');


// Mostrar fecha actual con el formato dd/mm/aaaa

let fecha = new Date();
let diaMes = fecha.getDate();
    if(diaMes < 10){
        diaMes = '0'+diaMes;
    }
let mesAnio = fecha.getMonth()+1;
    if(mesAnio < 10){
        mesAnio = '0'+mesAnio;
    }

let anio = fecha.getFullYear()

txt.innerText = diaMes + '/' + mesAnio + '/' + anio ;