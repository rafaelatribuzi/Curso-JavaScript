let isCorret = false
let selctedNumber = Math.floor (Math.random()*10) +1;
console.log (selctedNumber) 

while(isCorret) {
    let guess = prompt ('Qual o valor o computador escolheu de 1 a 10?')

    if (Number(guess) === selctNumber) isCorret = true;
}