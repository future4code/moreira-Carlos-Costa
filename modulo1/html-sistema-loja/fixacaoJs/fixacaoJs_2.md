```
function calculaPrecoTotal(quantidade) {
  let unidade = 1.30
  let duzia = 1.00
  
  if(quantidade < 12){
    
     return unidade * quantidade
  }else{
     
     return duzia * quantidade
  }
}

```