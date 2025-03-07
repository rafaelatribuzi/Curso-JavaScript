const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce ((acumulador, numero) => acumulador + numero,0);

console.log (soma);

//contando os itens do armario

const armario = [
    { tipo: "camisetas", quantidade: 25 },
    { tipo: "calças", quantidade: 12 },
    { tipo: "bermudas", quantidade: 6 },
    { tipo: "blusas", quantidade: 7 },
    ];

const totalRoupas = armario.reduce ((total, gaveta) => total + gaveta.quantidade, 0);

console.log (totalRoupas);






