const tarefas = [
    
        {"descrição": "Finalizar relatório", "prioridade": 1, "status": "pendente"},
        {"descrição": "Responder e-mails", "prioridade": 2, "status": "pendente"},
        {"descrição": "Organizar arquivos", "prioridade": 3, "status": "concluída"},
        {"descrição": "Reunião de marketing", "prioridade": 1, "status": "pendente"},
        {"descrição": "Atualizar documentação", "prioridade": 2, "status": "concluída"},
    
    ];

    tarefas.push ({"descrição": "Fechar folha", "prioridade": 3, "status": "concluída"});
    console.log (tarefas);

    const tarefasPendentes = tarefas.filter (tarefas => tarefas.status === 'pendente');
    console.log (tarefasPendentes);


    const tarefasConcluidas = tarefas.map ((tarefas) => {
        return {...tarefas, status:"concluída"}
    });

    console.log (tarefasConcluidas); 


    tarefas.sort ((a,b) => a.prioridade - b.prioridade);
    tarefas.reverse();
    console.log (tarefas);

    
    
    const pendentes  = tarefas.reduce ((contador, tarefas) => {
        return tarefas.status === 'pendente'? contador + 1 : contador; 
    
    }, 0);
        console.log (`Tarefas pendenstes: ${pendentes}`); 



    const atualizarDocumentacao = tarefas.find ( item => item.descrição === 'Atualizar documentação');

    console.log (atualizarDocumentacao); 


    const todasConcluidas = tarefas.every(tarefa => tarefa.status === "concluída");

    if (todasConcluidas) {
    console.log("Todas as tarefas estão concluídas.");
    } else {
    console.log("Ainda há tarefas pendentes.");
    }



    





    /* 
    Adicionar novas tarefas: Utilizar push() para adicionar tarefas ao final da lista - feito

    Remover tarefas concluídas: Usar filter() para criar uma nova lista sem as tarefas concluídas -  feito
    
    Marcar tarefas como concluídas: Atualizar o status de tarefas pendentes para concluídas - feito
    
    Ordenar tarefas: Utilizar sort() para ordenar as tarefas por prioridade (da mais alta para a mais baixa) - feito
    
    Contar tarefas pendentes: Aplicar reduce() para contar quantas tarefas estão pendentes - feito
    
    Encontrar tarefa específica: Usar find() para localizar uma tarefa pela descrição -  feito
    
    Verificar conclusão de todas as tarefas: Empregar every() para checar se todas as tarefas estão marcadas como concluídas
   
    */

    
