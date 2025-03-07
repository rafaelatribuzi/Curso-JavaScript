//Escreva um laço while que imprime apenas os números ímpares de 1 a 20.

let numero = 1;

while (numero <=20) {
    if(numero % 2 !== 0 ) { // se o resto da divisão for diferente de 0 (número ímpar)
    console.log(numero);
    }
    numero ++;
}


