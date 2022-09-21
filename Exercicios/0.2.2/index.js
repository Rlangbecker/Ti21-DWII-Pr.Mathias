//Faça a modelagem e definição de um objeto que represente o usuário de um sistema. O sistema é um sistema de blog. O objeto deve ter dados básicos de cadastro do usuário e tambén deve conter dados relacionados a  comentários avaliativos de outros usuario.

const usuario = [
  {
    nome: 'Ricardo',
    dataNascimento: '07/03/1994',
    dataCadastro: '21/03/2022',
    sexo: 'Masculino',
    comentarios: [
      {
        conteudo: 'hahahaha muito bom!',
        deuLike: true,
      },
    ],
  },
];

console.log(usuario);
