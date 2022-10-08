const pessoas = [
  {
    nome: 'mathias',
    anoNascimento: '1995-11-29',
    cidades: ['porto alegre'],
  },
  {
    nome: 'Ricardo',
    premium: true,
    anoNascimento: '1994-03-07',
    cidades: ['porto alegre'],
  },
];

// const resultado = pessoas.map((pessoa) => {
//   return pessoa.nome + ' -> ' + pessoa.anoNascimento;
// });

const resultado = pessoas.map((pessoa) => {
  let cor = 'branco';
  if (pessoa.premium) {
    cor = 'dourado';
  }
  return {
    anoNascimento: pessoa.anoNascimento,
    nome: pessoa.nome,
    cor,
  };
});

console.log(resultado);
