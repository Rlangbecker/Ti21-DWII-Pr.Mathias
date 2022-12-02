const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  },
];

const somaNotas = alunos.map((aluno) => {
  const { notas } = aluno;
  //const notas = aluno.notas
  const mediaAluno =
    notas.reduce((acc, _nota) => {
      const { nota } = _nota;
      return acc + nota;
    }, 0) / notas.length;
  aluno.mediaGeral = mediaAluno;
  return mediaAluno;
});

//const somaTotal = notas.reduce((acc, _nota) => {
//const { nota } = _nota;
//return acc + nota;
//}, 0);

//const mediaGeral = somaTotal / notas.length;

console.log('Media geral = ' + somaNotas);
