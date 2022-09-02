let nome = 'Ricardo';
// let idade = 28;
let isHomem = true;
let religiao = null;
// null = valor nulo, pode ser alterado
// undefined = valor indeterminado, JS não consegue identificar

const conjuntoString = ['Ricardo', 'Cailan'];
const conjuntoNumeros = [28, 19];
// Array ou conjunto, sempre entre [] .
const conjuntoDinamico = ['Ricardo', 28];
// acessar posição no log conjuntoDinamico[0]
// Ex: Const array=object.freeze['ricardo',28] não permite alterações

function exibirDados(idade) {
  console.log(`Nome: ${nome}
    Idade: ${idade} 
    Religiao:  ${religiao} 
    ${conjuntoString} `);
}

exibirDados(28);

//Funciona como uma função instanciada em uma variavel ---->          const vazio = () => {}
// {} = abrir escopo
//function -> modo primitivo            /   arrow function  -> modo atual de utilização de funções
//(Ex: arrow function) const vazio = (p1='ricardo', p2 = 'joao')=> `${p1} ${p2`;     ----> forma de função sem abrir escopo

// Valores falsos -> null, undefinied, ' ' (srting vazia), 0 (zero), NaN (Not a Number), false.

// true && true = true
// true && false = false
// false && false = false

// true || true = true;
//true || false = true;
// false || false = false;

//-------------------------------------------------------------------------------------
//             const condicao = false;
//             console.log(condicao || 'mathias');
//   Se condição for falsa, retorna 'mathias'
// ------------------------------------------------------------------------------------
//             const condicao = false;
//             console.log(condicao ? 'mathias' :null);
//   Se condição for verdadeira, retorna 'mathias', caso falsa, retorna null
//--------------------------------------------------------------------------------------
//             const condicao ;
//             console.log(condicao ?? 'mathias');
//   Se condição for undefined ou null, retorna 'mathias'
