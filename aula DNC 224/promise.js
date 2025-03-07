function pedirCaderno() {
    return new Promise((resolve, reject) => {
    console.log("Amigo: Estou indo comprar o caderno.");
    
    setTimeout(() => {
    const sucesso = true; // Simula se a compra foi bem-sucedida
    
    if (sucesso) {
    resolve("Amigo: Aqui está o seu caderno!");
    } else {
    reject("Amigo: Desculpe, a loja estava fechada.");
    }
    }, 5000); // Simula 5 segundos para ir à loja
    });
    }
    
    console.log("Eu: Preciso de um caderno novo.");
    
    pedirCaderno()
    .then((mensagem) => {
    console.log(mensagem);
    console.log("Eu: Obrigado!");
    })
    .catch((erro) => {
    console.log(erro);
    console.log("Eu: Tudo bem, tentaremos outro dia.");
    });
    
    console.log("Eu: Vou continuar estudando enquanto espero.");