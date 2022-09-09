function validadorDesconto(valorCompra,isConvenio,isCartao,isPrimeiraCompra) {
  const compraCincoPorCento = (valorCompra) => valorCompra - valorCompra * 0.05;
  const compraDezPorCento = (valorCompra) => valorCompra - valorCompra * 0.1;
  const compraQuinzePorCento = (valorCompra) =>    valorCompra - valorCompra * 0.15;

  let valorTotalDesconto;
  if (isPrimeiraCompra) {
    valorTotalDesconto = valorCompra * 0.05;
    if (valorTotalDesconto > 100) {
      return valorCompra - 100;
    } else {
      return compraCincoPorCento(valorCompra);
    }
  } else if (isCartao && isConvenio && !isPrimeiraCompra) {
    valorTotalDesconto = valorCompra * 0.15;
    if (valorTotalDesconto > 100) {
      return valorCompra - 100;
    } else {
      return compraQuinzePorCento(valorCompra);
    }
  } else if (isCartao || (isConvenio && !isPrimeiraCompra)) {
    valorTotalDesconto = valorCompra * 0.15;
    if (valorTotalDesconto > 100) {
      return valorCompra - 100;
    } else {
      return compraDezPorCento(valorCompra);
    }
  } else {
    return valorCompra;
  }
}
console.log(validadorDesconto(800, true, true, false));
