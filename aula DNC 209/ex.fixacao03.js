//Escreva uma função chamada fatorial que calcula o fatorial de um número.

function fatorial (n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n*fatorial (n-1);
}
let numeros = 5;
let combinacoes = fatorial (numeros);
console.log (`Você pode criar ${combinacoes} de senhas diferentes!`);