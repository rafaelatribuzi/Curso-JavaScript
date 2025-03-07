const armario = [
{nome: 'calça', cor:'verde'},
{nome: 'bermuda', cor:'marrom'},
{nome: 'vestido', cor:'verde'},
{nome: 'saia', cor:'azul'},
];

const armarioColorido = armario.map ((item)=> 
{
    return {...item, cor: 'colorido'};
});

console.log (armarioColorido);

