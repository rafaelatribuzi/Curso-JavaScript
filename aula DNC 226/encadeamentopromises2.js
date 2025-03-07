/* Criar um sistema de encadeamento de Promises que simule:


Realização do pedido
Processamento do pagamento
Confirmação do envio
*/

function relizarPedido () {
    return new Promise ((resolve, reject) => {
        console.log ('Realizando Pedido');
        setTimeout (() => {
            resolve ('Pedido realizado');
        }, 1000);
    });
}

function processarPagamento () {
    return new Promise ((resolve, reject) => {
        console.log ('Realizando pagamento');
        setTimeout (() => {
            resolve ('Pagamento realizado');
        }, 1000);
    });
}

function confirmarEnvio () {
    return new Promise ((resolve, reject) => {
        console.log ('Confirmando envio');
        setTimeout (() => {
            resolve ('Envio confirmado'); 
        }, 1000);
    });
}

/*relizarPedido ()
.then (() => processarPagamento())
.then (() => confirmarEnvio())
.then (() => console.log ('Pedido realizado com sucesso!'))
.catch (erro => console.error ('Erro no processo:', erro));
*/

relizarPedido()
  .then((resultadoPedido) => {
    console.log(resultadoPedido); // Mostra "Pedido realizado"
    return processarPagamento();
  })
  .then((resultadoPagamento) => {
    console.log(resultadoPagamento); // Mostra "Pagamento realizado"
    return confirmarEnvio();
  })
  .then((resultadoEnvio) => {
    console.log(resultadoEnvio); // Mostra "Envio confirmado"
    console.log('Pedido realizado com sucesso!');
  })
  .catch((erro) => console.error('Erro no processo:', erro));
