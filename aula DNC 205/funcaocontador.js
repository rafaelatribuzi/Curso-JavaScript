function iniciarContador (tempo) {
    let segundosRestantes = tempo;

    const atualizadorContador = setInterval(function () {
        console.log (`Os segundos restantes são ${segundosRestantes}`)
            if (segundosRestantes === 0) {
                clearInterval (atualizadorContador);
            }else {
                segundosRestantes--;
            }
    }, 1000) 
}

//Iniciando o contador regressivo com um tempo de 5 segundos

iniciarContador(5)