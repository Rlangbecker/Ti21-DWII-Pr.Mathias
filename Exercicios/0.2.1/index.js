//Faça a modelagem e definição de uma lista dos seus filmes favoritos. Cada filme deve conter pelo menos 3 propriedades e pelo menos um deles deve ser um array de `string`.

const filmesFavoritos = [
  {
    id: 1,
    nome: 'Matrix',
    atores: ['Keanu Reeves', 'Carrie Anne'],
    genero: ['Acao', 'Ficcao'],
    anoLancamento: 1999,
    GanhouOscar: true,
  },
  {
    id: 2,
    nome: 'Girl Next Door',
    atores: ['Elisha CUthbert', 'Emile Hirsch'],
    genero: ['Comedia', 'Crime'],
    anoLancamento: 2004,
    GanhouOscar: true,
  },
  {
    id: 3,
    nome: 'No Country For Old Man',
    atores: ['Javier Bardem', 'Tommy Lee Jones'],
    genero: ['Thriler', 'Crime'],
    anoLancamento: 2007,
    GanhouOscar: true,
  },
];

console.log(filmesFavoritos[0]);
