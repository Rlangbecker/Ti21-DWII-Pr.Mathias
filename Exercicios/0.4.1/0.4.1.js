const notas = [
  { cadeira: 'DW1', nota: 10 },
  { cadeira: 'DW2', nota: 10 },
  { cadeira: 'DW3', nota: 6 },
];

const somaTotal = notas.reduce((acc, _nota) => {
  const { nota } = _nota;
  return acc + nota;
}, 0);

const mediaGeral = somaTotal / notas.length;

console.log('Media geral = ' + mediaGeral);
