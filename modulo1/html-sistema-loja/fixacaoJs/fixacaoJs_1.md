```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salarioFixo = 2000
 const comissaoVenda = qtdeCarrosVendidos * 100
 const comissaoValorTotal = (valorTotalVendas/100) * 5

 const salarioFinal = salarioFixo + comissaoVenda + comissaoValorTotal
 return salarioFinal
}
calculaSalario(3,130000).

```