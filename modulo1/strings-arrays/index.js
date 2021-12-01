/* ---------------------------------- Exercícios de interpretação de código ---------------------*/

/* 1 .Questão

    let array
    console.log('a. ', array)

    Resposta: A variável foi criado mais não foi definido: undefined.


    array = null
    console.log('b. ', array)

    Resposta: A variável recebe o valor nulo: null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    Resposta: A variável "array" recebe um array de elementos com tamanho: 11.

    let i = 0
    console.log('d. ', array[i])

    Resposta: É declarado uma nova variável "i" e repassado o valor "0", 
    depois repassado parra array o indice "i" que recebeu "0", sendo assim o resultado e: 3

    array[i+1] = 19
    console.log('e. ', array)

    Resposta: A array recebe a variável "i" com a posicão "0" e repassa o valor 19 para posicão 1.

    const valor = array[i+6]
    console.log('f. ', valor)

    Resposta: É declarado uma nova variável "valor" e repassado o array com a variável "i"
     mais aposicão "6" que retorna: o valor 9.

*/    

/* 2 .Questão
    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    Resposta:  Retorna uma nova string em caixa alta(maiuscula) e vai trocar o "A" por "I".
*/

/* ---------------------------------- Exercícios de escrita de código ---------------------*/

/* 1 .Questão
    const emailUsuario = prompt("Digite seu email!")
    const nomeUsuario = prompt("Digite seu nome!")

    console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)

*/

/* 2 .Questão
    a)
      const comidasPreferidas = ["Baiao de dois", "Lazanha", "Carne de Sol", "Panelada", "Escondidinho"]
      console.log(comidasPreferidas)

    b) 
      console.log(`Essas são as minhas comidas preferidas: \n ${comidasPreferidas.join('\n')}`)

    c)
      const comidaUsuario = prompt("Digite sua comida preferida!")
      console.log(comidasPreferidas.splice(1, 1, comidaUsuario))
      console.log('Nova Lista',comidasPreferidas)

*/

/* 3 .Questão
    a)
        let listaDeTarefas = []
    
    b) 
        const primeiraTarefa = prompt("Digite sua primeira tarefa do dia!!")
        const segundaTarefa = prompt("Digite sua segunda tarefa do dia!!")
        const terceiraTarefa = prompt("Digite sua terceira tarefa do dia!!")

        listaDeTarefas.push(primeiraTarefa)
        listaDeTarefas.push(segundaTarefa)
        listaDeTarefas.push(terceiraTarefa)

    c)
        console.log(listaDeTarefas)

    d) 
        const indice = Number(prompt("Digite o índice de uma tarefa que você realizou!!"))

    e) 
        listaDeTarefas.splice(indice - 1)

    f)    
        console.log(listaDeTarefas)

*/


/* ------------------------------------ Desafios -----------------------------------------*/

/* 1 .Questão
    const frase = "Eu gosto muito de programar e estudar"

    const fraseArray = frase.trim().split(" ")
    console.log(fraseArray)
*/

/* 2 .Questão
    const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

    const tamanhoArray = frutas.length
    const buscaFrutas = frutas.find(e => e === "Abacaxi")
    const index = frutas.indexOf(buscaFrutas)
    console.log(` A indice do Abacaxi: ${index + 1} e o tamanho do array : ${tamanhoArray}`)

*/