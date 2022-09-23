//Faça a modelagem e definição de um objeto que represente o usuário de um sistema. O sistema é um sistema de blog. O objeto deve ter dados básicos de cadastro do usuário e tambén deve conter dados relacionados a  comentários avaliativos de outros usuario.

const ricardo = {
  nome: 'Ricardo',
  dataNascimento: '07/03/1994',
  dataCadastro: '21/03/2022',
  sexo: 'Masculino',
  comentarios: [
    {
      id: 0,
      idPost: 'Show do milhão',
      comentario: 'hahahaha muito bom!',
      deuLike: true,
    },
  ],
};

const usuario = [
  ricardo,
  {
    nome: 'Troglodita',
    dataNascimento: '06/01/2000',
    dataCadastro: '26/06/2022',
    sexo: 'Masculino',
    comentarios: [
      {
        id: 1,
        idPost: 'Show do milhão',
        comentario: 'acho bem bosta!',
        deuLike: false,
      },
      {
        id: 2,
        idPost: 'Show do milhão',
        comentario: 'Até que é mais ou menos',
        deuLike: true,
      },
    ],
  },
  {
    nome: 'Roberta',
    dataNascimento: '02/01/2001',
    dataCadastro: '01/03/2020',
    sexo: 'Feminino',
    comentarios: [
      {
        id: 3,
        idPost: 'Show do milhao',
        comentario: 'Nossa é muito antigo! Gostava de olhar, rachava o bico',
        deuLike: true,
      },
    ],
  },
];

console.log(usuario[0]);
