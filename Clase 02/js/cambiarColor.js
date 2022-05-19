let caja = document.getElementById('caja')

function cambiarColor(elec){
    switch (elec){
        case 1:
            caja.style.backgroundColor = 'rgb(252, 180, 113)'
        break;
        case 2:
            caja.style.backgroundColor = 'rgb(102, 199, 202)'
        break;  
        case 3:
            caja.style.backgroundColor = 'rgb(234, 243, 102)'
        break;
    } 
    
}