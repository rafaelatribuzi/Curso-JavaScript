//Dado o array abaixo, utilize filter() com uma arrow function para retornar apenas os números maiores que 10.

const valores = [5, 12, 8, 130, 44];
const maioresQue10 = valores.filter (val => val>10);
console.log (maioresQue10);


//Filtrando nomes que começam com uma letra específica

const nomes = ["Ana", "Amanda", "Carlos", "Bruna"];
const nomesComA = nomes.filter(nome => nome.startsWith("A"));
console.log(nomesComA); // ["Ana", "Amanda"]

//Filtrando objetos dentro de um array

const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 800 }
  ];
  
  const produtosCaros = produtos.filter(produto => produto.preco > 500);
  console.log(produtosCaros);
  // [{ nome: "Notebook", preco: 2500 }, { nome: "Monitor", preco: 800 }]

  //Filtrando elementos com base no índice

  const numeros = [10, 20, 30, 40, 50];
    const numerosEmIndicesPares = numeros.filter((_, indice) => indice % 2 === 0);
    console.log(numerosEmIndicesPares); // [10, 30, 50] 