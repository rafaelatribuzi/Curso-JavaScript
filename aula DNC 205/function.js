
//Calcule a soma dos números 45, 45, 100, 32, 90, 100 e 200 e imprima o resultado no console.

function somaValores (listaValores) { //Função somaValores que recebe um parâmetro chamado listaValores
    let total = 0; //Defina total como 0, que será usado para guardar a soma dos valores

    for (let valor of listaValores) {
        total += valor; //Para cada valor presente em listaValores, some esse valor ao total
    };

    return total;
}

console.log (somaValores ([45, 45, 100, 32, 90, 100, 200]))