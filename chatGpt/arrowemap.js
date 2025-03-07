//exe.01
/*
const subtracao = (a,b) => {
    let resultado = a-b;
    return resultado
}

console.log (subtracao (5,3))

*/

//exe.02
/*
const subtrai = (a,b) => a-b;
console.log (subtrai(7,4));

*/

//exe.03
//Crie uma arrow function chamada multiplicaPorDois que recebe um número e retorna o dobro dele.

/*
const multiplicaPorDois = x => x*2

    console.log (multiplicaPorDois(5))
*/

//exe.04

//Dado um array de números, use map() com uma arrow function para criar um novo array onde cada número é triplicado.


const numeros = [1,2,3,4,5]
const triplicado = numeros.map (num => num*3);
console.log (triplicado); // [ 3, 6, 9, 12, 15 ]




const pessoas = [
    {nome: 'Ana', idade: 25},
    {nome: 'José', idade: 20},
    {nome: 'Carla', idade: 37}
];
const nomes = pessoas.map (pessoas => pessoas.nome);
console.log (nomes);