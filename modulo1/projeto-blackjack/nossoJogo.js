/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let jogar21 = confirm("Quer iniciar uma nova rodada?")

if (jogar21 === true) {
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
   } else if (pontuacaoComputador > pontuacaoJogador) {
       console.log("O computador ganhou!")
   } else if (pontuacaoJogador === pontuacaoComputador) {
       console.log("Empate!")
   }

} else {
   console.log("O jogo acabou")
}