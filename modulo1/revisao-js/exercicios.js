// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    return array.sort((a, b) => a - b)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    const arrayPar = array.filter((num) => {
        if(num % 2 === 0){
            return num
        }

    })
    return arrayPar
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    const arrayPar = array.filter((num) => {
        if(num % 2 === 0){
            
            return num
    
        }

    })
    return arrayPar.map(res => res**2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let arraySort = array.sort((a, b) => a - b)
    return arraySort.sort((a, b)=> b - a)[0]
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let array = [num1, num2]
    let arraySort = array.sort((a, b) => a - b)
    const maiorNumero = arraySort.sort((a, b)=> b - a)[0]
    const menorNumero = arraySort.sort((a, b)=> a - b)[0]
    const numeroDivision = maiorNumero % menorNumero === 0
    const numeroDiferenca = maiorNumero - menorNumero

    return {
        "maiorNumero":maiorNumero,
        "maiorDivisivelPorMenor":numeroDivision, 
        "diferenca":numeroDiferenca
    }
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (var i = 0; numerosPares.length < n; i++) {
      if( i % 2 === 0){
        numerosPares.push(i)
      }
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoA === ladoC) {
        return `Equilátero`
    }
    else if(ladoA === ladoB || ladoA === ladoC || ladoC === ladoB){
        return `Isósceles`
    }
    else{
        return `Escaleno`
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    let ordenaMenorMaior = array.sort((a, b) => a - b)

    let ordenaMaiorMenor = ordenaMenorMaior.map((a) => a)
    ordenaMaiorMenor.sort((a,b) => b - a)
    
    
    const segundoMaiorNumero = ordenaMaiorMenor[1]
    const segundoMenorNumero = ordenaMenorMaior[1]

    return [segundoMaiorNumero, segundoMenorNumero]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = filme.atores.join(", ")
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let userAnonimo = pessoa.nome
    userAnonimo = "ANÔNIMO"

    return {
      "nome": userAnonimo,
      "idade": pessoa.idade,
      "email": pessoa.email,
      "endereco": pessoa.endereco
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return  pessoas.filter((result)=> result.nome > "B" && result.nome < "E" && result.idade >= 15 )
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return  pessoas.filter((result)=> result.idade > 10 && result.idade !== 22)

}
// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
        contas.forEach((result) => {
            let totalCompras = 0
            result.compras.forEach((gasto)=> {
                totalCompras += gasto
            })
            
            result.saldoTotal =  result.saldoTotal - totalCompras
            result.compras = []
        })
        return contas
    }

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}