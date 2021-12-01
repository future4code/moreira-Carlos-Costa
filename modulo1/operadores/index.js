/*---------------------------------- Exercícios de interpretação de código --------------------------------------*/

/*
 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    Resposta
       O console.log() retornará false porque o operador && precisa que as duas afirmações sejam verdadeiras.
    

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 

    Resposta
       O console.log() retornará false porque o operador && precisa que as três afirmações sejam verdadeiras.
    

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

    Resposta
       O console.log() retornará true porque o operador && de 
       "let resultado = bool1 && bool2 === false" 
       !resultado receberá true 
       (bool1 || bool2) === true
       logo true && true === true,
       dessa forma o resultado será true.
    

    console.log("d. ", typeof resultado)

    Resposta
       O console.log() retornará boolean
    
*/

/* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: 
consegue perceber algum problema? O que será impresso no console?    
  
    const primeiroNumero = prompt("Digite um numero!")
    const segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)

    Resposta
       O console.log() retornará uma concatenação das duas strings se não for 
       passado um Number ele retornará uma String.
    
*/
/*  3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja,
 de fato, a soma dos dois números.    
 
    Resposta
       Depois da declaração da variavel, acrescentar Number "em volta" do prompt assim a string passa a ser um number.
    
*/


/*---------------------------------- Exercícios de escrita de código --------------------------------------*/
/* 1 .Questão
    const suaIdade = Number(prompt("Qual sua Idade?"))
    const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo"))
   
    const diferecaIdade = suaIdade - idadeMelhorAmigo
    console.log(`Sua idade é maior do que a do seu melhor amigo?`, suaIdade > idadeMelhorAmigo)

    d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)
      
       console.log(`Diferença de idade é`, diferencaIdade)
*/

/* 2 .Questão
    let numeroPar = Number(prompt("Digite um número par"))
    
    console.log(numeroPar % 2)

    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
      Resposta: 
          O resultado quando digitado um número par sempre retorna 0.
    
*/

/* 3 .Questão
   const idadeAnos = Number(prompt("Digite sua idade em anos!"))
  
   console.log(`${idadeAnos * 12} meses`)
   console.log(`${idadeAnos * 365} dias`)
   console.log(`${idadeAnos * 8760} horas`)
   
*/

/* 4 .Questão

   const primeiroNumero = Number(prompt("Digite o primeiro número!"))
   const segundoNumero = Number(prompt("Digite o segundo número!"))


   console.log(`O primeiro número é maior que o segundo?`, primeiroNumero > segundoNumero)
   console.log(`O primeiro número igual ao segundo?`, primeiroNumero === segundoNumero)
   console.log(`O primeiro número é divisivel pelo segundo?`, primeiroNumero % segundoNumero === 0)
   console.log(`O segundo numero é divisível pelo primeiro?`, segundoNumero % primeiroNumero === 0)
*/


/*----------------------------------  Desafios --------------------------------------*/

//1 .Questão
   /*a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
      const grausFahrenheit = 77
      const kelvin = ((grausFahrenheit -32) * (5/9)) + 273.15
      console.log(`${grausFahrenheit}°F em Kelvin é: ${kelvin}K`)
   */

   /*b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
      const grausCelsius = 80
      const grausFahrenheit = ((grausCelsius)*(9/5)) + 32
      console.log(`${grausCelsius}°C em Fahrenheit é: ${grausFahrenheit}°F`)
   */

   /*c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
      const grausCelsius = 80
      const grausFahrenheit = ((grausCelsius)*(9/5)) + 32
      const kelvin = ((grausFahrenheit -32) * (5/9))+ 273.15
      console.log(`${grausCelsius}°C em Fahrenheit é: ${grausFahrenheit}°F e ${kelvin}K`)
   */

   /*d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
      const grausCelsius = Number(prompt('Digite um valor em graus Celsius que ele deseja converter!'))
      const grausFahrenheit = ((grausCelsius)*(9/5)) + 32
      const kelvin = ((grausFahrenheit -32) * (5/9))+ 273.15
      console.log(`${grausCelsius}°C em Fahrenheit é: ${grausFahrenheit}°F e em Kelvin ${kelvin}K`)
   */

//2 .Questão
   /*a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora.

      const quilowattHora = 0.05
      const consumoQuilowattHora = 280;
      const valorPago = quilowattHora * consumoQuilowattHora

      console.log(`Valor a ser pago por consumo: R$= ${(valorPago).toFixed(2)}`)
   */

   /*b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.   
      const quilowattHora = 0.05
      const consumoQuilowattHora = 280;
      const desconto = 15
      const valorPago = quilowattHora * consumoQuilowattHora

      console.log(`Valor a ser pago por consumo com desconto de ${desconto}%: R$= ${valorPago - ((valorPago)*(desconto/100))}`)
   */

//3 .Questão
   /*a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma:
   const valorLb = 20
   const taxaMultiplicacao = 0.454;
   const conversao = valorLb * taxaMultiplicacao

   console.log(`${valorLb}lb equivalem a ${conversao}kg`)
   */

   /*b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
      const valorOz = 10.5
      const taxaMultiplicacao = 0.02835;
      const conversao = valorOz * taxaMultiplicacao

      console.log(`${valorOz}oz equivalem a ${conversao}kg`)
   */
  /*c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
      const valorMi = 100
      const taxaMultiplicacao = 1609.34;
      const conversao = valorMi * taxaMultiplicacao

      console.log(`${valorMi} mi equivalem a ${conversao}m`)
   */
   /*d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
      const valorFt = 50
      const taxaMultiplicacao = 0.3048;
      const conversao = valorFt * taxaMultiplicacao

      console.log(`${valorFt} pés equivalem a ${conversao}m`)
   */
   /*e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
      const valorGal = 103.56
      const taxaMultiplicacao = 0.26417;
      const conversao = (valorGal / taxaMultiplicacao).toFixed(2)

      console.log(`${valorGal} galão equivalem a ${conversao}litros`)
   */
   // Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
      const valorXicara = 450
      const taxaMultiplicacao = 0.24
      const conversao = (valorXicara * taxaMultiplicacao.toFixed(2))

      console.log(`${valorXicara} xícara equivalem a ${conversao} litros`)