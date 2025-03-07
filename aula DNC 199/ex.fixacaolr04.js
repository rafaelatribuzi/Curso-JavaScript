//Escreva um laço for que imprime os números pares de 2 a 20 no console

for (let i = 2; i<=20; i++) {
    if (i % 2 === 0) {
        console.log (i);
    }
}


//pode ser feito da seguinte forma também: 

for (let i = 2; i <= 20; i += 2) { //i += 2; → Incrementa i de 2 em 2, garantindo que apenas números pares sejam impressos
    console.log(i);
}