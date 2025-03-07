const armario = [
    { nome: "camiseta", cor: "vermelha" },
    { nome: "calça", cor: "azul" },
    { nome: "meia", cor: "vermelha" },
    { nome: "casaco", cor: "verde" }
    ];

    const roupasVermelhas = armario.filter ((item)=> item.cor === 'vermelha');
       
    console.log (roupasVermelhas);

