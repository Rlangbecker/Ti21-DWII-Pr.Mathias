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
