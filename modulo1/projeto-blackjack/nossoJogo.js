console.log("Boas vindas ao jogo de Blackjack!")
let jogar21 = confirm("Quer iniciar uma nova rodada?")

// Aqui agente cria uma funcao iniciar 21 passando a logica para o jogo
const iniciar21 = () =>{
    let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()

   let pontuacaoJogador = cartaUsuario1.valor + cartaUsuario2.valor
   let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${pontuacaoJogador}`)
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`)

   if (pontuacaoJogador > pontuacaoComputador) {

       console.log("O usuário ganhou!")
   } 
   else if (pontuacaoComputador > pontuacaoJogador) {

       console.log("O computador ganhou!")
   } 
   else if (pontuacaoJogador === pontuacaoComputador) {

       console.log("Empate!")
   }
}
// Aqui invocamos a funcao dentro do if que so vai entrar na funcao se o usuario cliclar no ok
if (jogar21 === true) {

   iniciar21()
} 
else {

   console.log("O jogo acabou")
}