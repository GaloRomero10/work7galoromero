'use strict'
function multiplicar(multiplicando, multiplicador){
    let suma = 0;
    for(let i = 0; i < multiplicador; i++){
        suma = suma + multiplicando;
    }
    return suma;
}
let multipli1 = Number(prompt("Ingrese el multiplicando:"));
let multipli2 = Number(prompt("Ingrese el multiplicador:"));

let resultado = multiplicar(multipli1, multipli2);
alert('El resultado es: ' + resultado);