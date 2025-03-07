/* Produção de Bolo
Regras do exercício:

Preparar os ingredientes: Simula o preparo dos ingredientes com um atraso de 1 segundo.
Assar o bolo: Após os ingredientes estarem prontos, o bolo é assado (simulando um atraso de 3 segundos).
Decorar o bolo: Depois de assar, o bolo é decorado (simulando um atraso de 2 segundos).
Em cada etapa, exiba uma mensagem indicando a conclusão.
Se ocorrer algum erro em qualquer etapa (por exemplo, caso você deseje simular uma falha), capture-o com .catch().
Ao final, utilize .finally() para exibir a mensagem "Processo de produção do bolo finalizado!".

*/


function prepararIngredientes () {
    return new Promise ((resolve, reject) => {
        console.log ('Preparando ingredientes...');
        setTimeout(() => {
            resolve ('Ingredientes Prontos');
        }, 1000);
    });

}

function assarBolo () {
    return new Promise ((resolve, reject) => {
        console.log ('Assando Bolo...');
        setTimeout(() => {
            resolve ('Bolo Assado');
        }, 3000);
    }); 
}


function decorarBolo () {
    return new Promise ((resolve, reject) => {
        console.log ("Decorando Bolo...");
        setTimeout (() => {
            resolve ("Bolo decorado");
        },2000);
    });
}

function produzirBolo () {
    prepararIngredientes ()
    .then ((resultadoPreparacao) => {
        console.log (resultadoPreparacao);
        return assarBolo();
    })

    .then ((resultadoAssar) => {
        console.log (resultadoAssar);
        return decorarBolo();
    })
    .then ((resultadoDecorar) => {
        console.log (resultadoDecorar);
    })
    .catch ((erro) => {
        console.log ("Erro na produção do bolo:", erro);
    })
    .finally (() => {
        console.log ("Pedido finalizado");
    });

}

produzirBolo();



