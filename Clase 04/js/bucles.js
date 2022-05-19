let n = 1;
while ( n < 15 ){
    document.write( n + '<br>');
    n++;
}

document.write('<hr>');

let italianos = [
                    'Maseratti', 'Pagani',
                    'Larmborghini', 'Ferrari',
                    'Alfa Romeo', 'Alpine',
                    'Bugatti', 'Lancia',
                    'Fiat', 'Mazzanti',
                    'Fornassari', 'Abarth'
];
let cantidad = italianos.length;
//document.write( italianos[0] );


document.write('<ul>');
for (let n=o;n<cantidad;n++){
    document.write( '<li>' + italianos[n] +'</li>' );
}
document.write('</ul>');

/*
n = 0;
document.write('<ul>');
while ( n < cantidad ){
    
}
document.write('</ul>');
*/