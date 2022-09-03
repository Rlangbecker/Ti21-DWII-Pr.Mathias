let valorCompra = 100;
let isConvenio = false;
let isCartao = true;

const compraQuinzePorCento = (isConvenio, isCartao, valorCompra) =>
  isConvenio && isCartao ? valorCompra - valorCompra * 0.15 : valorCompra;

const compraDezPorCento = (isConvenio, isCartao, valorCompra) =>
  (isConvenio && isCartao) || valorCompra - valorCompra * 0.1;

if (
  (isConvenio === true && isCartao === false) ||
  (isConvenio === false && isCartao === true)
) {
  console.log(compraDezPorCento(isConvenio, isCartao, valorCompra));
} else if (isCartao === true && isConvenio === true) {
  console.log(compraQuinzePorCento(isConvenio, isCartao, valorCompra));
} else {
  console.log(valorCompra);
}
