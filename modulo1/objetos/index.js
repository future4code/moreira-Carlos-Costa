/*---------------------------------- Exercícios de interpretação de código --------------------------------------*/

/*
 1. Leia o código abaixo.

    a)
    Resposta
       O console.log(filme.elenco[0]) retornará a primeira posição do array que é : "Matheus Nachtergaele"
    

    Resposta
       O console.log(filme.elenco[filme.elenco.length - 1]) retornará a última posição do array que é : "Virginia Cavendish".
       O "filme.elenco.length" vai pegar o tamanho da array que é: 4 e diminuir por 1  que vai ficar valendo 3 e passando esse valor
       para filme.elenco[] que recebe 3 passando a valer a posição do elemento na array, sendo assim: "Virginia Cavendish".


    Resposta
       O console.log(filme.transmissoesHoje[2]) retornará todo o objeto da posição 2 da array de objetos "transmissoesHoje": {canal: "Globo", horario: "14h"}
    

    
*/

/* 2. Leia o código abaixo.
  
    a)
    Resposta
        console.log(cachorro): { nome: 'Juca', idade: 3, raca: 'SRD' }
        console.log(gato): { nome: 'Juba', idade: 3, raca: 'SRD' }
        console.log(tartaruga): { nome: 'Jubo', idade: 3, raca: 'SRD' }
    
    b)
    Resposta
        Permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado em um novo objeto.
    

    
*/
/*  3. Leia o código abaixo.
    
    a)
    Resposta
       console.log(minhaFuncao(pessoa, "backender")): false
       console.log(minhaFuncao(pessoa, "altura")): undefined
    

    b)
    Resposta
        console.log(minhaFuncao(pessoa, "backender")): Foi passado dois parametros na função minhaFuncao (objeto, propriedade) recebendo como retorno objeto e propriedade.
        Sendo criado tambem um objeto chamado pessoa: nome, idade, backender. No console.log() é invocada a funçao com os parametros: pessoa que é o objeto e "backender" como a 
        propriedade. É feito uma busca pela chave no caso "backender" e retornando seu valor que é: "False".

        console.log(minhaFuncao(pessoa, "altura")): Foi passado dois parametros na função minhaFuncao (objeto, propriedade) recebendo como retorno objeto e propriedade.
        Sendo criado tambem um objeto chamado pessoa: nome, idade, backender. No console.log() é invocada a funçao com os parametros: pessoa que é o objeto e "backender" como a 
        propriedade. É feito uma busca pela chave no caso "altura" qu e não exixte no objeto, retornando seu valor que é: "Undefined".
*/


/*---------------------------------- Exercícios de escrita de código --------------------------------------*/
/* 1 .Questão
    a)
        const pessoa = {
            nome: "Carlos Henrique", 
            apelidos: ["Henrique", "Rick", "Ricão"]
        }
        const meusApelidos = (objeto) => {
          console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
        }
        meusApelidos(pessoa)

    b)
      
        const pessoa = {
            nome: "Carlos Henrique", 
            apelidos: ["Henrique", "Rick", "Ricão"]
        }
        const novaPessoa = {
          ...pessoa,
          apelidos: ["Copia e cola", "Fonciona na minha maquina", "Só uso Windows"]
        }
        const meusApelidos = (objeto) => {
          console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
        }
        meusApelidos(novaPessoa)
  
*/

/* 2 .Questão
    a)
        const pessoa = [
            {
	            nome: "Carlos Henrique", 
                idade: 35, 
	            profissao: "Desenvolveror FullStack"
            },
            {
	            nome: "Clarice Costa", 
                idade:6, 
	            profissao: "Futura Dev"
            }  
        ]
    
    b)
        const pessoa = [
            {
	            nome: "Carlos Henrique", 
                idade: 35, 
	            profissao: "Desenvolveror FullStack"
            },
            {
	            nome: "Clarice Costa", 
                idade:6, 
	            profissao: "Futura Dev"
            }
        ]
        const pessoaArray = (pessoa, pessoa1) => {
            return [
                 pessoa.nome,pessoa.nome.length, pessoa.idade, pessoa.profissao,pessoa.profissao.length, 
                 pessoa1.nome,pessoa1.nome.length, pessoa1.idade, pessoa1.profissao,pessoa1.profissao.length
                ]
        }
        console.log(pessoaArray(pessoa[0], pessoa[1]))
    
*/

/* 3 .Questão
        const carrinho = []

        const frutas =[
          {
            nome: "Manga",
            disponibilidade: true
          },
          {
            nome: "Laranja", 
            disponibilidade: true
          },
          {
            nome: "Goiaba", 
            disponibilidade: true
          }
        ];
        const addFruta = (objeto) => {
          return carrinho.push(objeto)
        }
        addFruta(frutas)
        console.log(carrinho)
*/  
    


/*----------------------------------  Desafios --------------------------------------*/

/*1 .Questão
   a) 
   
        const pesquisa = () => {
            const nome = prompt("Digite seu nome!")
            const idade = Number(prompt("Digite sua idade!"))
            const profissao = prompt("Digite sua profissão")

            const resposta = {
              nome: nome,
              idade: idade,
              profissao: profissao
            }
            console.log(resposta)
            console.log(typeof resposta)
        }
        pesquisa()

*/

/*2 .Questão
   a) 

        const filmes = [
            {
              nome: "Sem Tempo Para Morrer",
              lancamento: 2021
            },
            {
              nome: "Duna",
              lancamento: 1986
            }
        ]
        const sinopse = (objeto) => {
           console.log(`O primeiro filme foi lançado antes do segundo? ${objeto[0].lancamento < objeto[1].lancamento}`)
           console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${objeto[0].lancamento === objeto[1].lancamento}`)
        }
        sinopse(filmes)
*/ 


/* 3) .Questão
   
        const carrinho = []

        const frutas =[
          {
            nome: "Manga",
            disponibilidade: true
          },
          {
            nome: "Laranja", 
            disponibilidade: true
          },
          {
            nome: "Goiaba", 
            disponibilidade: true
          }
        ];
        const addFruta = (objeto) => {
          return carrinho.push(objeto)
        }
        addFruta(frutas)
        

        const checaFruta = (propriedade) => {
            const verificarFruta = {...frutas[0], 
            disponibilidade: false}
            
            return verificarFruta
        }
        console.log(checaFruta(frutas[0]))
*/