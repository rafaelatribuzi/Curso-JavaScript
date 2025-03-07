function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
        // se o início, fim ou passo estiverem vazios, abrir janela de erro.
    } else {
        res.innerHTML = 'Contando:<br> '
        // converter a caixa para número
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if ( p<= 0 ) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f ) {
            // contagem crescente
            for (let c = i; c<= f; c += p) { //contador vai começar no inicio, e enquanto o contador for menor que o fim,  o contador vai receber ele mesmo + o passo.
                res.innerHTML += ` ${c} \✔`
            }
            res.innerHTML += `\u{1F3C1}` // procurar no google unicode emoji list, pegar o código e colocar \u{código}, pode clicar na tecla do window + ponto e escolher o emotion
        } else {
            //contagem regressiva
            for(let c = i; c>=f; c-= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `✔`
        }
        

    } 

}