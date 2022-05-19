let formulario = document.querySelector('#formulario');
let nombre = document.querySelector('input[name="nombre"]');
let email    = document.querySelector('input[name="email"]');
let comentarios    = document.querySelector('textarea[name="comentarios"]');
let txtNombre = document.querySelector('#txtNombre');
let txtEmail = document.querySelector('#txtEmail');
let txtComentarios = document.querySelector('#txtComentarios');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault(); //evitar que se dispare el enlace

    limpiarMensaje();
    let flag = true; 
    let datoNombre = nombre.value;
    if (!checkVacio(datoNombre)){
            txtNombre.innerText = 'Complete el campo nombre';
            flag=false;
    }

    let datoEmail = email.value;
    if(!validarEmail(datoEmail)){
        txtEmail.innerText = 'Complete el campo nombre';
        flag=false;
    }

    let datoComentarios = comentarios.value;
    if(!checkVacio(datoComentarios)||datoComentarios.lenght <= 5){
        txtComentarios.innerText = 'Complete el campo nombre';
        flag=false;
    }

    // envio

    if (flag){
        formulario.submit();
    }

}
);
function validarEmail (email) {
    let exp = /\S+@\S+\.\S+/;
    return exp.test(email);
}

function checkVacio(campo){
    if (campo=='' || campo==null){
        return false;
    }
    return true;
}

function limpiarMensaje(){
    txtNombre.innerText='';
    txtEmail.innerText='';
}