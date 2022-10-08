// Faça uma função que retorno o todos os arquivos que existem.
// Pastas não devem ser listadas e todos os filmes devem estar no mesma hierarquia.
// Resultado deve ser equivalente a filmes.

const arquivos = [
  {
    nome: 'Filmes',
    arquivos: [
      {
        nome: 'Comedia',
        arquivos: [
          {
            nome: 'Mr. Bean',
          },
          {
            nome: '2021',
            arquivos: [
              {
                nome: 'Nice Guy',
              },
            ],
          },
        ],
      },
      {
        nome: 'Harry Potter Ordem da Fênix',
      },
    ],
  },
];

const todosArquivos = arquivos.filter((arquivos) => arquivos);

console.log(todosArquivos);
