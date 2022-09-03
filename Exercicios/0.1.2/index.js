const compraQuinzePorCento = (isConvenio, isCartao, valorCompra) =>
  isConvenio && isCartao ? valorCompra - valorCompra * 0.15 : valorCompra;

const compraDezPorCento = (isConvenio, isCartao, valorCompra) =>
  (isConvenio && isCartao) || valorCompra - valorCompra * 0.1;

function validadorDesconto(valorCompra, isConvenio, isCartao) {
  if (
    (isConvenio === true && isCartao === false) ||
    (isConvenio === false && isCartao === true)
  ) {
    let descontoDez = compraDezPorCento(isConvenio, isCartao, valorCompra);
    return descontoDez;
  } else if (isCartao === true && isConvenio === true) {
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

console.log(validadorDesconto(100, false, false));
