//objeto mais simples (vazio) const objetoVazio = {};

const pessoa = {};
pessoa.nome = 'Ricardo';
pessoa.vegetariano = false;
pessoa.classe = 'Aluno';

//verificação de propriedade
// if(typeof pessoa.nome === 'string'){ console.log('é string') };

const pessoa2 = {};
pessoa2.nome = 'mathias';
pessoa2.vegetariano = true;
pessoa2.classe = 'Professor';

// nome e vegetariano são propriedades do objeto
//objeto literal é quando as propriedades de um objeto PESSOA1 não coincide com propriedades da PESSOA2

console.log(pessoa, pessoa2);
