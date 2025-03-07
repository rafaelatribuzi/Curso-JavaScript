let cart = [
    {name: 'casaco', price: 120},
    {name: 'camiseta', price: 50},
    {name: 'sapato', price: 70},
    
];

let total = 0; // Inicializa a variável para armazenar a soma

for (let item of cart) {
    total += item.price; // Soma o preço de cada item

}

console.log("Total da compra: R$" + total);