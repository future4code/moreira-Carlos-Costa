// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
soma(5, 6)

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Digite a Altura do retângulo!'))
  const largura = Number(prompt('Digite a largura do retângulo!'))
  console.log(altura * largura)
  
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual!'))
  const anoNascimento = Number(prompt('Digite o ano de nascimento!'))
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite aqui seu nome!')
  const idade = Number(prompt('Digite aqui sua idade!'))
  const email = prompt('Digite aqui seu email!')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCor = prompt('Digite sua cor favorita!')
  const segundaCor = prompt('Digite sua segunda cor favorita!')
  const terceiraCor = prompt('Digite sua terceira cor favorita!')

  console.log(Array(primeiraCor, segundaCor, terceiraCor))

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]

}

// EXERCÍCIO 11
// implemente sua lógica aqui
function trocaPrimeiroEUltimo(array) {
  let newArray = array.shift()
  let newArray1 = array.pop()
  array.push(newArray)
  array.unshift(newArray1)
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()

  return string1 === string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Digite o Ano Atual!"))
  const anoNascimento = Number(prompt("Digite o ano do seu nascimento!"))
  const anoEmissaoRg = Number(prompt("Digite o ano que foi emitido seu rg!"))

  let idade = anoAtual - anoNascimento
  const idadeRg = anoAtual - anoEmissaoRg

  const renovaRgCincoAnos = idade <= 20 && idadeRg >= 5 
  const renovaRgDezAnos = idade > 20 && idade <= 50 && idadeRg >= 10
  const renovaRgQuinzeAnos = idade > 50 && idadeRg >= 15
  
  const verificaRenovacao = renovaRgCincoAnos || renovaRgDezAnos || renovaRgQuinzeAnos
  console.log(verificaRenovacao )

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anosMultQuatrocentos = (ano % 400 === 0) ||(ano % 4 === 0 && ano % 100 !== 0)

  return anosMultQuatrocentos
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeDezoito = prompt("Você tem mais de 18 anos? sim ou nao") === "sim"
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo? sim ou nao") === "sim"
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? sim ou nao") == "sim"

  console.log(maiorDeDezoito && ensinoMedioCompleto && disponibilidade)

}