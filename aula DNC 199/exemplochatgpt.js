/* Crie um objeto chamado carro com as seguintes propriedades:

marca: "Toyota"
modelo: "Corolla"
ano: 2022


Depois, utilize um loop for...in para percorrer as propriedades do objeto e exibir no console o nome da propriedade e seu respectivo valor.

*/

// Definição do objeto
let veiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,  
}

// Loop for...in para iterar sobre as propriedades do objeto

for (let propriedade in veiculo) {
    console.log (propriedade + ":" + veiculo [propriedade]);
}

