/*---------------------------------- Exercícios de interpretação de código --------------------------------------*/

/*
 1. Questão
    a)
        Resposta
           O código verifica se o número digitado pelo o usuário é divisivel por 2. Vai entrar na condição
           se o resto da divisão for divisivel por 2 ele imprime "Passou no teste". E se o resto da divisão
           não for divisivel por 2 ele imprime "Não passou no teste".
        
    b)
        Resposta
           Números pares


    c)
        Resposta
           Números impares
*/  

/* 2. Questão
  
    a)
        Resposta
           É utilizado para o usuário pesquisar por uma determinada fruta dentro so switch.

        
    b)
        Resposta
           Se o usuário pesquisar por "Maçâ" vai ser imprimido na tela a seguinte mensagem:
           "O preço da fruta Maçâ é R$ 2.25"

    c) 
        Resposta
            O switch vai percorrer toda condição até encontrar o ultimo break que no caso
            seria o break do default e retornaria: "O preço da fruta Pêra é R$ 5"

*/
/* 3. Questão   

    a)
    
        Resposta
            Está comparando se o número digitado pelo o usuário é maior que zero.
    

    b)
    
        Resposta
            Com valor do imput igual a 10, será imprimido na tela a mensagem: "Esse número passou no teste". 
            Com valor do imput igual a -10, não será imprimido nada no console por que não foi passada determinada
            condição para esse valor. 


    c)
    
        Resposta
            Sim, por que ela está sendo passada dentro do escopo local e sendo imprimida no escopo global.
    
*/


/*---------------------------------- Exercícios de escrita de código --------------------------------------*/

/* 1 .Questão
const idade = Number(prompt("Digite sua idade!"))

const maiorIdade = (idade) => {
   if(idade >= 18){

        console.log("Você pode dirigir.")
   }
   else if(idade < 18){

        console.log("Você não pode dirigir.")
   }
   else {

    console.log("Digite um valor valido!!")
   }
    
}
maiorIdade(idade)
*/
/* 2 .Questão
const turnoAula =prompt("Digite M para (matutino) ou V para(Vespertino) ou N para (Noturno)!")

const maiorIdade = (turno) => {
   if(turno === "M"){

        console.log("Bom Dia!")
   }
   else if(turno === "V") {

        console.log("Boa Tarde!")
   }
   else if(turno === "N") {

        console.log("Boa Noite!")
   }
   else {
        console.log("Por favor tente novamente: Digite M para (matutino) ou V para(Vespertino) ou N para (Noturno)!")
   }
}
maiorIdade(turnoAula.toUpperCase())
    
*/

/* 3 .Questão
const turnoAula =prompt("Digite M para (matutino) ou V para(Vespertino) ou N para (Noturno)!")
let inputUppercase = turnoAula.toUpperCase()
switch (inputUppercase) {
    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break;
        
    default:
        console.log("Por favor tente novamente: Digite M para (matutino) ou V para(Vespertino) ou N para (Noturno)!")
        break;
}
*/

/* 4 .Questão


let generoFilme = confirm("Você vai assistir um filme do gênero fantasia ?")
let valorIngresso = confirm("O ingresso do filme está abaixo de 15 reais ?")

const vemAssistirComMigo = (generoFilme, valorIngresso) => {
    if(generoFilme && valorIngresso) {
        console.log("Bom filme!:)")
    }
    else {
        console.log("Escolha outro filme :(")
    }
}
vemAssistirComMigo(generoFilme, valorIngresso)

*/


/*----------------------------------  Desafios --------------------------------------*/

/*1 .Questão

let generoFilme = confirm("Você vai assistir um filme do gênero fantasia ?")
let valorIngresso = confirm("O ingresso do filme está abaixo de 15 reais ?")

const vemAssistirComMigo = (generoFilme, valorIngresso) => {
    if(generoFilme && valorIngresso) {
        let lanche = prompt("Qual Lanche que você quer comprar?")
        console.log(`Bom filme !:), Aproveite o seu lanchinho: ${lanche}`)
    }
    else {
        console.log("Escolha outro filme :(")
    }
}
vemAssistirComMigo(generoFilme, valorIngresso)
*/

//2 .Questão

const nome = prompt("Digite seu nome completo!")
const tipoDeJogo = prompt("Digitar IN indica internacional e DO indica doméstico: Digite uma das opções!")
const etapaDeJogo = prompt("SF indica semi-final, DT indica decisão de terceiro lugar e FI indica final: Digite uma das opções!")
const categoria = prompt("Digite uma das opções 1, 2, 3 ou 4")
const quantIngressos = Number(prompt("Digite a quantidade de ingressos que você quer comprar!"))

const jogosOD = [
    
    {
        categoria: 1,
        jogos : [
            {SF : 1320},
            {DT : 660},
            {FI : 1980}

        ],
        quantidade: quantIngressos

    },
    {
        categoria: 2,
        jogos : [
            {SF : 880},
            {DT : 440},
            {FI : 1320}

        ],
        quantidade: quantIngressos
    },
    {
        categoria: 3,
        jogos : [
            {SF : 550},
            {DT : 330},
            {FI : 880}

        ],
        quantidade: quantIngressos
    },
    {
        categoria: 4,
        jogos : [
            {SF : 220},
            {DT : 170},
            {FI : 330}

        ],
        quantidade: quantIngressos
    }

]
const jogosIN = [
    
    {
        categoria: 1,
        jogos : [
            {SF : 1320 * 4.10},
            {DT : 660 * 4.10},
            {FI : 1980 * 4.10}

        ],
        quantidade: quantIngressos
    },
    {
        categoria: 2,
        jogos : [
            {SF : 880 * 4.10},
            {DT : 440 * 4.10},
            {FI : 1320 * 4.10}

        ],
        quantidade: quantIngressos
    },
    {
        categoria: 3,
        jogos : [
            {SF : 550 * 4.10},
            {DT : 330 * 4.10},
            {FI : 880 * 4.10}

        ],
        quantidade: quantIngressos
    },
    {
        categoria: 4,
        jogos : [
            {SF : 220 * 4.10},
            {DT : 170 * 4.10},
            {FI : 330 * 4.10}
        ],
        quantidade: quantIngressos
    }

]
const localJogo = (jogosIN, jogosOD) => {
    if(tipoDeJogo === "IN" ){
        
        switch (etapaDeJogo) {
            case 'SF':
                console.log(
                    `Tipo do jogo: Internacional
                    \nEtapa do jogo: Semi-Final
                    \nCategoria: ${jogosIN[categoria].categoria -1}
                    \nQuantidade de Ingressos: ${quantIngressos} 
                    \nValor do ingresso: U$ ${(jogosIN[0].jogos[0].SF).toFixed(2)}
                    \nValor Total: U$ ${(jogosIN[0].jogos[0].SF * quantIngressos).toFixed(2)}`)
                break;
            case 'DT':
                console.log(
                    `Tipo do jogo: Internacional 
                    \nDecisão de terceiro lugar
                    \nCategoria: ${jogosIN[categoria].categoria -1}
                    \nQuantidade de Ingressos: ${quantIngressos} 
                    \nValor do ingresso: U$ ${(jogosIN[1].jogos[1].DT).toFixed(2)}
                    \nValor Total: U$ ${(jogosIN[1].jogos[1].DT * quantIngressos).toFixed(2)}`)

                break;
            case 'FI':
                console.log(
                    `Tipo do jogo: Internacional
                    \nEtapa do jogo: Final
                    \nCategoria: ${jogosIN[categoria].categoria -1}
                    \nQuantidade de Ingressos: ${quantIngressos} 
                    \nValor do ingresso: U$ ${(jogosIN[2].jogos[2].FI).toFixed(2)}
                    \nValor Total: U$ ${(jogosIN[3].jogos[2].FI * quantIngressos).toFixed(2)}`)
                break; 
            default:
                break;
        }
   }else if (tipoDeJogo === "DO"){
    switch (etapaDeJogo) {
        case 'SF':
            console.log(
                `Tipo do jogo: Nascional
                \nEtapa do jogo: Semi-Final
                \nCategoria: ${jogosOD[categoria].categoria -1}
                \nQuantidade de Ingressos: ${quantIngressos} 
                \nValor do ingresso: R$ ${(jogosOD[0].jogos[0].SF).toFixed(2)}
                \nValor Total: R$ ${(jogosOD[0].jogos[0].SF * quantIngressos).toFixed(2)}`)
            break;
        case 'DT':
            console.log(
                `Tipo do jogo: Nascional 
                \nDecisão de terceiro lugar
                \nCategoria: ${jogosOD[categoria].categoria -1}
                \nQuantidade de Ingressos: ${quantIngressos} 
                \nValor do ingresso: R$ ${(jogosOD[1].jogos[1].DT).toFixed(2)}
                \nValor Total: R$ ${(jogosOD[1].jogos[1].DT * quantIngressos).toFixed(2)}`)

            break;
        case 'FI':
            console.log(
                `Tipo do jogo: Nascional
                \nEtapa do jogo: Final
                \nCategoria: ${jogosOD[categoria].categoria -1}
                \nQuantidade de Ingressos: ${quantIngressos} 
                \nValor do ingresso: R$ ${(jogosOD[(jogosOD[categoria].categoria - 2)].jogos[2].FI).toFixed(2)}
                \nValor Total: R$ ${(jogosOD[2].jogos[2].FI * quantIngressos).toFixed(2)}`)
            break; 
        default:
            break;
    }
   }
}
localJogo(jogosIN, jogosOD)
