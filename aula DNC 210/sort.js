let guardaRoupa = [
    { tipo: 'camisetas', itens: ['camisa1', 'camisa2', 'camisa3'] },
    { tipo: 'calças', itens: ['calça1', 'calça2'] },
    { tipo: 'meias', itens: ['meia1', 'meia2', 'meia3', 'meia4'] }
    ];

//ordenar as gavetas com base na quantidade de itens

guardaRoupa.sort((a, b) => b.itens.length - a.itens.length);

console.log(guardaRoupa);

