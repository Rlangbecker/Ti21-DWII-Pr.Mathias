function validadorDesconto( valorTotalDesconto, valorCompra,LIMITE_DESCONTO = 100) {
  if (valorTotalDesconto > LIMITE_DESCONTO) {
    return valorCompra - LIMITE_DESCONTO;
  }
  return valorCompra - valorTotalDesconto;
}

function validadorCompra(valorCompra, isConvenio, isCartao, isPrimeiraCompra) {
  const LIMITE_DESCONTO = 100;
  let valorTotalDesconto;
  if (isPrimeiraCompra) {
    valorTotalDesconto = valorCompra * 0.05;
    return validadorDesconto(valorTotalDesconto, valorCompra);
  } else if (isCartao && isConvenio && !isPrimeiraCompra) {
    valorTotalDesconto = valorCompra * 0.15;
    return validadorDesconto(valorTotalDesconto, valorCompra);
  } else if (isCartao || (isConvenio && !isPrimeiraCompra)) {
    valorTotalDesconto = valorCompra * 0.1;
    return validadorDesconto(valorTotalDesconto, valorCompra);
  } else {
    return valorCompra;
  }
}
console.log(validadorCompra(800, false, false, false));
console.log(validadorCompra(800, false, false, true));
console.log(validadorCompra(800, true, true, false));
console.log(validadorCompra(800, true, false, false));
console.log(validadorCompra(800, false, true, false));
