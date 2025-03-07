
/*
Somar todos os números de um array

const numeros = [1,2,3,4,5];
    const soma = numeros.reduce ((acumulador,numero) => acumulador + numero, 0);
    console.log (soma); //saída 15


Encontrar o maior número de um array

const numeros = [10, 50, 8, 100, 30];

const maiorNumero = numeros.reduce((maior, numero) => (numero > maior ? numero : maior), numeros[0]);

console.log(maiorNumero); // Saída: 100

A cada iteração, verifica se o numero atual é maior que o maior, armazenando o maior valor encontrado.

*/

//Use o método reduce() e uma arrow function para calcular a soma de todos os elementos do array:

const numero = [10, 20, 30, 40];
const soma = numero.reduce ((acumulador,numero) => acumulador + numero, 0);
console.log (soma);

