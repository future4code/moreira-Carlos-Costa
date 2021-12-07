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

/*2 .Questão

const nome = prompt("Digite seu nome completo!")
const tipoDeJogo = prompt("Digitar IN indica internacional e DO indica doméstico: Digite uma das opções!")
const etapaDeJogo = prompt("SF indica semi-final, DT indica decisão de terceiro lugar e FI indica final: Digite uma das opções!")
const categoria = prompt("Digite uma das opções 1, 2, 3 ou 4")
const quantIngressos = Number(prompt("Digite a quantidade de ingressos que você quer comprar!"))

const jogos = [
    {   
        categoria: "Categoria1",
        jogos : {
            SF : "1.320,00",
            DT : "660,00",
            FI : "1.980,00"

        }
    }
]
const localJogo = (tipoJogo) => {
    if(tipoJogo === "IN"){

        switch (etapaDeJogo) {
            case 'SF':
                console.log("Semi-Final")
                console.log()
                break;
            case 'DT':
                console.log("Decisão de terceiro lugar")
                break;
            case 'FI':
                console.log("Final")
                break;
            default:
                break;
        }
   }
   else if(turno === "DO") {

        console.log("Boa Tarde!")
   }
   else {
        console.log("Por favor tente novamente: Digite M para (matutino) ou V para(Vespertino) ou N para (Noturno)!")
   }
}
console.log(localJogo(tipoDeJogo, etapaDeJogo, categoria, quantIngressos))

*/