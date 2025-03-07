const numeros = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6, 9, 6, 9];

const numeroEncontrado = numeros.find(item => item === 9);

console.log (numeroEncontrado); 


//Busca por número maior que um valor:

const primeiroMaiorQueDois = numeros.find(item => item > 2);
console.log (primeiroMaiorQueDois); 

//É importante notar que o find() retorna apenas o primeiro elemento que satisfaz a condição, mesmo que existam outros elementos que também a satisfaçam



const armario = [
    { name: "cuecas", isDirty: false, color: "azul" },
    { name: "camiseta", isDirty: true, color: "azul" },
    { name: "pijamas", isDirty: false, color: "amarelo" },
    { name: "meia", isDirty: true, color: "azul" },
    { name: "sapato", isDirty: false, color: "azul" }
    ];


const itemAmarelo = armario.find(item => item.color === "amarelo");
console.log(itemAmarelo); 


const primeiroItemAzul = armario.find(item => item.color === "azul");
console.log (primeiroItemAzul);






