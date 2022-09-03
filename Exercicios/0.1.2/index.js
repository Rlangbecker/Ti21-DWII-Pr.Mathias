const compraQuinzePorCento = (isConvenio, isCartao, valorCompra) =>
  isConvenio && isCartao ? valorCompra - valorCompra * 0.15 : valorCompra;

const compraDezPorCento = (isConvenio, isCartao, valorCompra) =>
  (isConvenio && isCartao) || valorCompra - valorCompra * 0.1;

function validadorDesconto(valorCompra, isConvenio, isCartao) {
  if (
    (isConvenio && isCartao === false) ||
    (isConvenio === false && isCartao)
  ) {
    let descontoDez = compraDezPorCento(isConvenio, isCartao, valorCompra);
    return descontoDez;
  } else if (isCartao && isConvenio) {
    let deconstoQuinze = compraQuinzePorCento(
      isConvenio,
      isCartao,
      valorCompra
    );
    return deconstoQuinze;
  } else {
    return valorCompra;
  }
}

console.log(validadorDesconto(100, true, true));
