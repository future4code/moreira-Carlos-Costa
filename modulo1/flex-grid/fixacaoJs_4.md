```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let arr = arrayDeNumeros.filter((res =>
      res === numeroEscolhido
  ))
  if(arr.length > 0) {
    return (`O número ${numeroEscolhido} aparece ${arr.length}x`)
  }else{
    return (`Número não encontrado`)
  }
}

```