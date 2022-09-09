function validadorDesconto(
  valorCompra,
  isConvenio,
  isCartao,
  isPrimeiraCompra
) {
  const compraCincoPorCento = (valorCompra) => valorCompra - valorCompra * 0.05;
  const compraDezPorCento = (valorCompra) => valorCompra - valorCompra * 0.1;
  const compraQuinzePorCento = (valorCompra) =>
    valorCompra - valorCompra * 0.15;

  let valorTotalDesconto;
  if (isPrimeiraCompra) {
    valorTotalDesconto = compraCincoPorCento(valorCompra);
    if (valorTotalDesconto > 100) {
      return valorCompra - 100;
    } else {
      return valorTotalDesconto;
    }
  } else if (isCartao && isConvenio && !isPrimeiraCompra) {
    valorTotalDesconto = compraDezPorCento(valorCompra);
    if (valorTotalDesconto > 100) {
      return valorCompra - 100;
    } else {
      return valorTotalDesconto;
    }
  } else if (isCartao || (isConvenio && !isPrimeiraCompra)) {
    valorTotalDesconto = compraQuinzePorCento(valorCompra);
    if (valorTotalDesconto > 100) {
      return valorCompra - 100;
    } else {
      return valorTotalDesconto;
    }
  } else {
    return valorCompra;
  }
}
console.log(validadorDesconto(800, false, false, true));
