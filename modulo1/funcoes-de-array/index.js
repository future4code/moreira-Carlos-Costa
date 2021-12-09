/*---------------------------------- Exercícios de interpretação de código --------------------------------------*/

/*
 1. Questão

    Resposta

        Vai trazer os três objetos do array e o seus respectivos index e também uma array de objetos.
       
    
*/  

/* 2. Questão
  
        Resposta

            Vai retornar uma nova array com os nomes dos usuários. Foi passado no parametro index, array que 
            não esta sendo chamado dentro da função.
           
        
  
         

/* 3. Questão   
    
        Resposta

            Está retornando todos os objetos que o apelido não seja "Chico".
            
    
    
*/


/*---------------------------------- Exercícios de escrita de código --------------------------------------*/

/* 1 .Questão

    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]
    //a)
        const nomePets = pets.map((pet) => {
            return pet.nome
        })
        console.log(nomePets)

    //b)
    const filterNomePets = pets.filter((pet) => {
        return pet.raca === "Salsicha"
      })
      console.log(filterNomePets)
  //c
      const filterPets = (pet) => {
            if(pet.raca === "Poodle"){
              return true
            }
      }
      const menssagmePet = pets.filter(filterPets).map((menssagem)=>{
        return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${menssagem.nome}!`)
      })
      console.log(menssagmePet)


*/

/* 2 .Questão
        
    const produtos = [

        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    
    ]
        //a)

            const nomeProduto = produtos.map((produto) => {

                return produto.nome

            })

            console.log(nomeProduto)

        //b)

            const produtoDesconto = produtos.map((produto) => {

                const desconto = (produto.preco * 5 / 100)
            
                return (`nome: ${produto.nome}, preço: ${(produto.preco - desconto).toFixed(2)} `)

            })

            console.log(produtoDesconto)
            

        //c) 

            const filterBebidas = produtos.filter((bebida) => {

                return bebida.categoria === "Bebidas"

            })

            console.log(filterBebidas)

            

        //d) 

            const filterprodutoLimpeza = produtos.filter((bebida) => {

                return bebida.nome.includes("Ypê")

            })

            console.log(filterprodutoLimpeza)

       //e)

            const listaString = filterprodutoLimpeza.map((produto) => {

                return (`Compre ${produto.nome} por R$ ${produto.preco} `)

            })

            console.log(listaString)
           
          
*/

  

/*----------------------------------  Desafios --------------------------------------*/

/* 
1 .Questão
       
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

    //a)
        const listaPokemonNome = pokemons.map((pokemon) => {

            return pokemon.nome
        })
        console.log(listaPokemonNome.sort())


    //b)
        const tipoPokemon = pokemons.map((pokemon) => {

            return pokemon.tipo
        })
        const pokemonNaoDuplicado = [...new Set(tipoPokemon)]

        console.log(pokemonNaoDuplicado)
*/        