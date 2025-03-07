//Crie uma função chamada quadrado que recebe um número e retorna o quadrado desse número.

function quadrado(numero) {
    return numero **2;

} 

console.log (quadrado(5));

//Essa função utiliza o operador de exponenciação **, mas você também pode usar Math.pow() se preferir:

function quadrado(numero) {
    return Math.pow(numero, 2); //----> Math.pow(base, expoente)
}

console.log (quadrado(10));


//ou

function quadrado (numero) {
    return numero*numero;
}
 
console.log (quadrado(6));


                    


