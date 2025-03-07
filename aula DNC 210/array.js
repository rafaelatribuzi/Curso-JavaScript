let armario = ['camisetas', 'pijamas', 'meias']; {
    armario.unshift("cuecas"); //Adicionando cuecas no início:

}

console.log(armario); // saída -> [ 'cuecas', 'camisetas', 'pijamas', 'meias' ]

//Adicionando blusas no final:

let armario = ['camisetas', 'pijamas', 'meias']; {
    armario.push("blusas"); 

}

console.log(armario); // saída -> [ 'camisetas', 'pijamas', 'meias', 'blusas' ]

//Removendo meias do meio e colocando no início:

let meias = armario.splice(armario.indexOf('meias'), 1)[0];
armario.unshift(meias);

// ['meias', 'cuecas', 'camisetas', 'pijamas', 'blusas']


//Removendo blusas do final:

let blusasRemovidas = armario.pop();
// armario: ['meias', 'cuecas', 'camisetas', 'pijamas']
// blusasRemovidas: 'blusas'


