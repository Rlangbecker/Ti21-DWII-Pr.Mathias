function validadorDesconto(
  valorCompra,
  isConvenio,
  isCartao,
  isPrimeiraCompra
) {
  const compraCincoPorCento = (
    valorCompra,
    isConvenio,
    isCartao,
    isPrimeiraCompra
  ) => valorCompra - valorCompra * 0.05;
  const compraDezPorCento = (isConvenio, isCartao, valorCompra) =>
    valorCompra - valorCompra * 0.1;
  const compraQuinzePorCento = (isConvenio, isCartao, valorCompra) =>
    valorCompra - valorCompra * 0.15;
  if (
    isCartao &&
    isConvenio &&
    valorCompra < 100 &&
    isPrimeiraCompra === false
  ) {
    return compraDezPorCento(isConvenio, isCartao, valorCompra);
  } else if (
    isCartao ||
    (isConvenio && valorCompra < 100 && isPrimeiraCompra === false)
  ) {
    return compraQuinzePorCento(isConvenio, isCartao, valorCompra);
  } else if (isPrimeiraCompra) {
    return compraCincoPorCento(
      valorCompra,
      isConvenio,
      isCartao,
      isPrimeiraCompra
    );
  } else {
    return valorCompra;
  }
}
console.log(validadorDesconto(100, false, false, true));
