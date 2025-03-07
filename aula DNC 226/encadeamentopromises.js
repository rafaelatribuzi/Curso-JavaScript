//simulando o processo de login e busca de fotos no Instagram.

//autenticação do instagram


function autenticarInstagram () {
    return new Promise ((resolve, reject) => {
        console.log ('Iniciando autenticação de usuário');
        setTimeout (() => {
            const sucesso = true;
            if (sucesso){
                resolve ({
                    username: 'fuladodetal',
                    following: ['user1', 'user2', 'user3']
                });
            } else {
                reject ('Erro na autenticação');
            }

        },3000 );
    });
}

// busca de fotos recentes

function buscarFotosRecentes (seguindo) {
    return new Promise ((resolve, reject) => {
        console.log ('Iniciando busca de fotos recentes.')
        setTimeout (() => {
            const sucesso = true; 
            if (sucesso) {
                resolve ([
                    "foto_user1.jpg",
                    "foto_user2.jpg",
                    "foto_user3.jpg"
            ]);
            } else {
                reject ('Erro ao buscar fotos recentes');
            }
        }, 2000);
    });
}

//encadeamento das operações

autenticarInstagram()
.then(resposta => {
    console.log ('Autenticação bem-sucedida:', resposta);
    return buscarFotosRecentes (resposta.following);
})
.then (fotosRecentes => {
    console.log ('Fotos recentes:', fotosRecentes);
})
.catch (erro => {
    console.log ('Ocorreu um erro:', erro)
});


