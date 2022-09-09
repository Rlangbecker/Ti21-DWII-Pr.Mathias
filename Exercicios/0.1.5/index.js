function validadorDesconto(
  valorCompra,
  isConvenio,
  isCartao,
  isPrimeiraCompra
) {
  const compraQuinzePorCento = (isConvenio, isCartao, valorCompra) =>
    isConvenio && isCartao ? valorCompra - valorCompra * 0.15 : valorCompra;
  const compraDezPorCento = (isConvenio, isCartao, valorCompra) =>
    (isConvenio && isCartao) || valorCompra - valorCompra * 0.1;
  if (isCartao && isConvenio && valorCompra < 100) {
    return compraDezPorCento(isConvenio, isCartao, valorCompra);
  } else if (isCartao || (isConvenio && valorCompra < 100)) {
    return compraQuinzePorCento(isConvenio, isCartao, valorCompra);
  } else {
    return valorCompra;
  }
}

console.log(validadorDesconto(100, true, true));
