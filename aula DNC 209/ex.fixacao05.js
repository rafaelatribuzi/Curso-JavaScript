//Escreva uma função chamada maiorNumero que recebe um array de números e retorna o maior número do array.

const numeros = [5,20,60,80,3];
const maiorNumero = numeros.reduce ((maior, numero) => (numero > maior ? numero:maior), numeros [0]);
console.log (maiorNumero); 

ou 

function maiorNumero(numeros) {
    return Math.max(...numeros);
}