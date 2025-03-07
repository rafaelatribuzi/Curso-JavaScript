//Escreva uma função chamada soma que recebe dois números e retorna a soma deles. 
const numero = [2,4];
const soma = numero.reduce ((acumulador, numero) => acumulador + numero, 0);
console.log (soma);

//ou

function soma (a,b) {
    return a + b;
}



function ehPar (numero) {
    return numero % 2 === 0;
}

console.log ehPar (5);
