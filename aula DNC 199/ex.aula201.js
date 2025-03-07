let tasks = {
    'caminhar com o cachorro': true,
    'comprar comida café da manhã': true,
    'preparar o almoço': false,
    'ir para academia': false,
}

for (let key in tasks) {
    console.log (`A tarefa: ${key} está ${tasks[key] ? 'concluída' : 'incompleta'}`)
    // o símbolo de ? e o de : ---> condição ? valor_se_verdadeiro : valor_se_falso;
}