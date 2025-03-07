const gaveta = [
    { material: ['algodão', 'elastano']},
    { material: ['algodão', 'poliéster']},
    { material: ['linho']},
    { material: ['algodão']}

];

// Verificando se alguma camiseta contém elastano

const temElastano = gaveta.some (item => item.material.includes ('elastano'));
console.log ('Alguma camisa tem elastano?' , temElastano);

// Verificando se todas as camisetas contêm algodão

const contemAlgodao = gaveta.every (item => item.material.includes ('algodão'));
console.log (contemAlgodao);



const usuarios = [
    { nome: 'Alice', idade: 25, ativo: true },
    { nome: 'Bob', idade: 30, ativo: true },
    { nome: 'Carol', idade: 22, ativo: false }
    ];
    
    // Verificar se todos os usuários são maiores de idade

const maioresDeIdade = usuarios.every (item => item.idade >= 18);
console.log (maioresDeIdade);


// Verificar se há algum usuário inativo

const usuarioInativo = usuarios.some (item => item.ativo === true);
console.log (usuarioInativo);





