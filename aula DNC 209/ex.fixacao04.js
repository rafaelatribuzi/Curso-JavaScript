//Crie uma função chamada saudacao que receba um nome como argumento e retorne uma saudação com esse nome.

const saudacao = ({nome, idade}) => `Olá, ${nome}! Você tem ${idade} anos.`;
const pessoa = {nome: 'Pedro', idade: 18};
console.log(saudacao(pessoa));

function saudacao(nome) {
    return `Olá, ${nome}!`;
    }
    