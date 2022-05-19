let galeria = document.querySelector('#galeria');

let fotos = [
    'solsteiz', 'maiten', 'gery',
    'maqui', 'lu', 'dani',
    'anto', 'marco', 'bruno',
    'killq', 'marce', 'marco2'
];
let cantidad = fotos.length;
let contenido = '';

for (let i = 0;i<cantidad;i++){
    contenido += '<article>\n' + '<img src="fotos/' + fotos[i] + '.png">\n' + '</article>'; 
}

galería.innerHTML = contenido;
