const armario = ['cuecas', 'camisetas', 'pijamas', 'meias', 'sapatos'];

const armarioEtiquetado = armario.map(item => ({
nome: item,
estaSujo: item === 'sapatos' || item === 'cuecas'
}));

console.log(armarioEtiquetado);


/*

[
{ nome: 'cuecas', estaSujo: false },
{ nome: 'camisetas', estaSujo: false },
{ nome: 'pijamas', estaSujo: false },
{ nome: 'meias', estaSujo: false },
{ nome: 'sapatos', estaSujo: true }
]

*/