let valorCompra = 100;
let temConvenio = false;
let temCartao = true;

const compraQuinzePorCento = (temConvenio, temCartao, valorCompra) =>
  temConvenio && temCartao ? valorCompra - valorCompra * 0.15 : valorCompra;

const compraDezPorCento = (temConvenio, temCartao, valorCompra) =>
  (temConvenio && temCartao) || valorCompra - valorCompra * 0.1;

if (
  (temConvenio === true && temCartao === false) ||
  (temConvenio === false && temCartao === true)
) {
  console.log(compraDezPorCento(temConvenio, temCartao, valorCompra));
} else if (temCartao === true && temConvenio === true) {
  console.log(compraQuinzePorCento(temConvenio, temCartao, valorCompra));
} else {
  console.log(valorCompra);
}
