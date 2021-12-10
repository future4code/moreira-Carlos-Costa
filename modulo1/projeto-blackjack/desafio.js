let jogar21 = confirm("Bem-vinde ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")
let verificaCartaAs = false
let usuario = []
let maquina = [] 
let pedirCarta = true
let pedirCartaOk = true
let resultado = ""

// Aqui agente vai verificar se tem repeticoes de "AS" nas cartas tanto do usuario como do maquina
if(jogar21 === true) {
   while (!verificaCartaAs){
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      maquina.push(comprarCarta())
      maquina.push(comprarCarta())
      if ((usuario[0].valor === 11 && usuario[1].valor === 11) ||
         (maquina[0].valor === 11 && maquina[1].valor === 11)) {
            usuario = []
            maquina = []
      } else {
         verificaCartaAs = true
      }
   }
// Aqui o laco adiciona a carta no array usuario se o valor for maior que 21 o laco e finalizado
   while(pedirCarta){
      let textos = ''
      let pontos = 0

      for(let carta of usuario){

         textos +=  carta.texto + " "
         pontos += carta.valor
      }
      if (pontos < 21){

         pedirCartaOk = confirm(
            `Suas cartas são ${textos}. A carta revelada do maquina é ${maquina[0].texto}.` +
            "\n"+ 
            "Deseja comprar mais uma carta?"
         )
      }
      if(pontos > 21){

         pedirCarta = false

      }
      
      if(pedirCartaOk){
         usuario.push(comprarCarta())
      }
      else{
         pedirCarta = false
      }
   }
   
   let pontuacaoMaquina = 0
   let pontuacaoUsuario = 0
   let textosMaquina = ""
   let textosUsuario = ""

for (let carta of maquina){
   pontuacaoMaquina += carta.valor
   textosMaquina += carta.texto + " "
}
for (let carta of usuario){
   pontuacaoUsuario += carta.valor
   textosUsuario += carta.texto + " "
}

// Aqui o laco adiciona a carta no array maquina se o valor da pontuacaoMaquina for menor e pontuacaoMaquina for menor ou igual a 21
if (pontuacaoUsuario <= 21){
   while (pontuacaoMaquina < pontuacaoUsuario && pontuacaoMaquina <= 21){
      maquina.push(comprarCarta())
      pontuacaoMaquina = 0
      textosMaquina = ""
      for (let carta of maquina){
         pontuacaoMaquina += carta.valor
         textosMaquina += carta.texto + " "
      }
   }
}


// Aqui acontece a verificacao se houve um ganhador ou empate
if (pontuacaoUsuario > pontuacaoMaquina && pontuacaoUsuario <= 21){
   resultado = "O usuário ganhou!"
} else if (pontuacaoMaquina > pontuacaoUsuario && pontuacaoMaquina <= 21){
   resultado = "O maquina ganhou!"
} else if (pontuacaoMaquina > 21 && pontuacaoUsuario <= 21){
   resultado = "O usuário ganhou!"
} else if (pontuacaoUsuario > 21 && pontuacaoMaquina <= 21){
   resultado = "O maquina ganhou!"
} else {
   resultado = "Empate!"
}


alert(
   `Usuario - Cartas: ${textosUsuario} - Pontuação: ${pontuacaoUsuario} \n
    maquina - Cartas: ${textosMaquina} - Pontuação: ${pontuacaoMaquina} \n
    ${resultado}`
)

} else {
alert("O jogo acabou.")
}