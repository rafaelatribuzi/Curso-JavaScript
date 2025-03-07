function totalcomprasMercado (listaProdutos) {
    let total = 0 // Inicializa o total da compra como 0


    for (let produto of listaProdutos) {
        total += produto.preco;  // Soma o preço de cada produto ao total
    };

    return total;
}
let carrinho = [
    { nome: "Leite", preco: 4.50 },
    { nome: "Pão", preco: 6.00 },
    { nome: "Café", preco: 12.50 },
    { nome: "Açúcar", preco: 3.00 },
    { nome: "Arroz", preco: 20.00 },
    { nome: "Feijão", preco: 8.00 }
];

console.log (`O total das comprar é ${totalcomprasMercado(carrinho).toFixed(2)}`) // duas casas decimais