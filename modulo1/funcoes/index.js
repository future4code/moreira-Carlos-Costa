/*------------------------------ Exercícios de interpretação de código ------------------------------ */

//1 . Questão
    /* a)
        Resposta: O primeiro console irá imprimir 10 e o segundo 50
    */

    /* b)
        Resposta: O console não retornaria nada.
    */

//2 . Questão
    /* a)
        Resposta: Essa função irá pegar o texto digitado no prompt deixa-lo todo em minusculo
        e procurar por uma palavra expecifica repassada dentro do includes() que vai dizer se
        retornar true que a palavra expecifica se encontra no texto. Se false não foi encontrado 
        no texto.

    */

    /* b)
        Resposta: 
            I. true
            II. true
            III. true
    */


/*------------------------------ Exercícios de escrita de código ------------------------------ */

//1 . Questão
    // As seguintes variáveis são definidas no escopo global
    /* a)
       const nome = "Carlos Henrique"
       const idade = 35
       const nomeCidade = "Piripiri"
       const nomeProficao = "Estudante"

        // Esta função é definida no escopo global
        const apresentacao = () => {

            console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${nomeCidade} e sou ${nomeProficao}`)
        }

        apresentacao()
    */

    /* b)
       
        const apresentacao = (nome, idade, nomeCidade, nomeProficao) => {
            return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${nomeCidade} e sou ${nomeProficao}`)

        }

        console.log(apresentacao("Carlos", 35, "Piripiri", "estudante"))
    */
    
//2 . Questão
    /* a)
        const somaNumeros = (num1, num2) => {
            return num1 + num2
        }
        console.log('a =',somaNumeros(5, 5))
    */
    /* b)
        const somaNumeros = (num1, num2) => {
            return num1 >= num2
        }
        console.log('b =',somaNumeros(5, 5))
    */
    /* c)
        const parImpar = (num) => {
            return num % 2 === 0
        }
    
        console.log(parImpar(4))
    */
    /* d)
        const somaNumeros = (num1, num2) => {
            return num1 >= num2
        }
        console.log('b =',somaNumeros(5, 5))
    
    */
    /* e)
        const frase = (texto) => {
            texto = texto.toUpperCase();
            return texto
            }
            const x = frase("eu sou Jr")
            console.log(x.length, x);
    */
   /* 3 . Questão
        const primeiroNumero = Number(prompt("Digite um Numero!"))
        const segundoNumero = Number(prompt("Digite o segundo Numero!"))
            
        console.log(` Numeros Inseridos${primeiroNumero} e ${segundoNumero}`)
        const soma = (primeiro, segundo) => {
            return (primeiro + segundo)
        }
        const resultsoma = soma(primeiroNumero, segundoNumero)
        console.log('soma =',resultsoma)

        const diferenca = (primeiro, segundo) => {
            return (primeiro - segundo)
        }
        const resultDiferenca = diferenca(primeiroNumero, segundoNumero)
        console.log('Diferenca = ',resultDiferenca)

        const multiplicacao = (primeiro, segundo) => {
            return (primeiro * segundo)
        }
        const resultMultiplicacao = multiplicacao(primeiroNumero, segundoNumero)
        console.log('Multiplicacao = ',resultMultiplicacao)

        const divisao = (primeiro, segundo) => {
            return (primeiro / segundo)
        }
        const resultDivisao = divisao(primeiroNumero, segundoNumero)
        console.log('Divisao = ',resultDivisao)
    */

/*------------------------------  Desafios ------------------------------ */
// 1 . Questão
        /* a)
            const numero = (num1) => {
                return num1 
            }
            console.log(numero(5))
    */
        /* a)
    
            const numero1 = 5
            const numero2 = 6

             const apresentacao = () => {

                return numero1 + numero2
                
             }
         
             console.log(apresentacao())
         */
    
