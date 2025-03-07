/* Você vai criar um sistema que simula o pedido de uma pizza usando Promises e async/await.

Regras:
O pedido demora 2 segundos para ser aceito.
Depois de aceito, a pizza demora 3 segundos para ficar pronta.
Se o cliente pedir "abacaxi na pizza" (eca 🤢), o pedido será rejeitado.
No final, sempre exiba a mensagem: "Pedido Finalizado".

*/

function fazerPedido(sabor) {
    return new Promise ((resolve, reject) => {
        console.log (`Pedido recebido: ${sabor}`);
        setTimeout(() => {
            if (sabor === 'abacaxi') {
                reject ("Pedido recusado! Não fazemos pizza de abacaxi");
            } else {
                resolve ('Pedido aceito!');
            }
        }, 2000);
        
    });
}

function prepararPizza() {
    return new Promise ((resolve) => {
        console.log ("Preparando pizza...");
        setTimeout(() => {
            resolve ('Pizza pronta');
        }, 3000);
    });
}


fazerPedido ("calabresa")
.then ((mensagem) => {
    console.log(mensagem);
    return prepararPizza();
})
.then ((pizza) => {
    console.log (pizza);
})
.catch ((erro) => {
    console.log (erro);
})
.finally (() => {
    console.log ("Pedido finalizado");
});