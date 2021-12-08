/*---------------------------------- Exercícios de interpretação de código --------------------------------------*/

/*
 1. Questão

    Resposta
        // valor = 0
        // valor = 0 + 1
        // valor = 1 + 2,
        // valor = 3 + 3,
        // valor = 6 + 4,
        // valor = 10 
        
        O código vai criar uma condição de continuação a um número e incrementado a uma ação no caso somar 
        o "valor" com "i" até chegar na "condição de continuação" que é "i < 5"

        O resultado que será impresso no console é : 10
    
*/  

/* 2. Questão
  
    a)
        Resposta
           Todos os números contidos no no array maiores que 18.
        
    b)
        Resposta
           Não, para acessar o índice do array agente usa o for...in... .
    

/* 3. Questão   
    
        Resposta
            Como o "*" é uma string haverá uma concatenação e não uma soma na linha = linha + "*". O
            usuário digitando o numero 4 mostrará essa concatenação: "****"
            // linha = "*" + "*"
            // linha = "**" + "*"
            // linha = "***" + "*"
            // linha = "****"
    
    
*/


/*---------------------------------- Exercícios de escrita de código --------------------------------------*/

/* 1 .Questão


    const bichinhoEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))

    let arrayPets = []

    const tenhoPet = () =>{

        if(bichinhoEstimacao === 0){

            console.log("Que pena! Você pode adotar um pet!")

        }else if(bichinhoEstimacao > 0){

            for(let i = 1; i <= bichinhoEstimacao; i++){

                const nomePet = prompt(`digite o nome do seu bichinho Nº ${i}`)
                arrayPets.push(nomePet)
                console.log(arrayPets)
            }
        
        }else{

            console.log("Digite um valor válido!")
        }
    }
    tenhoPet()


*/


/* 2 .Questão
        a)
            const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

            const percorreArray = (array) => {
              for(let i = 0; i < array.length; i++){
                console.log(array[i])
              }
            }
            percorreArray(arrayOriginal)

        b)
            const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

            const percorreArray = (array) => {
              for(let i = 0; i < array.length; i++){
                console.log(array[i] / 2)
              }
            }
            percorreArray(arrayOriginal)

        c) 

            const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            let newArray = []
            const percorreNovaArray = (array) => {
              for(let i = 0; i < array.length; i++){
                if(array[i] % 2 === 0){
                    newArray.push(array[i])
                }
              }
            }
            percorreNovaArray(arrayOriginal)
            console.log(newArray)

        d) 

            const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            let newArray = []
            const percorreNovaArray = (array) => {
              for(let i = 0; i < array.length; i++){

                newArray.push(`O elemento do índex ${i} é : ${array[i]}`)

              }
            }
            percorreNovaArray(arrayOriginal)
            console.log(newArray)

        e)

            const arrayOriginal = [1, 2, 3, 4, 5, -6, 7, 8, 79, 10]
              let maior = 0
              let menor = 1

              const maiorMenorNumero = (array) => {
                for(let i = 0; i < array.length; i++){
                
                    if(array[i] > maior){
                        maior = array[i]

                    }
                    else if (!menor) menor = array[i]
                    else if (array[i] < menor){
                        menor = array[i]

                    }
                
                  }
              }
             maiorMenorNumero(arrayOriginal)
             console.log(`O maior número é ${maior} e o menor é ${menor}`)
          

*/
  