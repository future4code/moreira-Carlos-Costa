/*------------------------------------------------------------------------------------------*/
                            // Exercícios de interpretação de código
/*----------------------------------------------------------------------------------------- */

/*
1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
*/
    let a = 10
    let b = 10

    console.log(b)

    b = 5

    console.log(a, b)

    /*
    Resposta: São declaradas duas variáveis "a" e "b", recebendo os respectivos valores  10 e 10,
    e lançado um console.log(b) com isso o valor retornado sera 10, logo após essa execução é
    passada um novo valor para variável "b", que passa agora a valer 5 com isso é solicitado um 
    novo console.log(a, b) que retorna um novo resultado para "a" e "b" respectivamente 10 e 5.
    */

/*----------------------------------*/

/*
2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
*/
    let a = 10
    let b = 20

    c = a
    b = c
    a = b

    console.log(a, b, c)


/*
    Resposta: São declaradas duas variáveis a e b, recebendo os respectivos valores  10 e 20.
    é tentado passar um valor para uma variável que não existe no caso a "c", logo não receberá 
    o valor de "a"e nem "b", não receberá o valor de "c" e nem "a" o valor de "b". Não sei exatamente
    o que retornaria no console.log(). Talvez "c" não foi definido.

*/

/*--------------------------------*/

/*
3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, 
os nomes não podem começar com números ou caracteres especiais.
*/
    let quantHorasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
    let valorPorDia = prompt("Quanto você recebe por dia?")

    alert(`Voce recebe ${valorPorDia/quantHorasTrabalhadas} por hora`)

    /*
    Resposta: Quanto mais explicativa for o nome da variavel melhor será para futuros programadores
    que irão trabalhar no projeto.

    */


/*------------------------------------------------------------------------------------------*/
                            // Exercícios de escrita de código
/*----------------------------------------------------------------------------------------- */

//1. Construa um programa, seguindo os seguintes passos:

    //a) Declare uma variável para armazenar um nome, sem atribuir um valor.

        let nomeUsuario

    //b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

        let idadeUsuario

    //c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

        console.log(typeof nomeUsuario, typeof idadeUsuario)

    //d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
        
       /* 
            A resposta foi undefined que quer dizer indefinino. As duas variáveis foram criadas mais 
            estam sem valores.
        */
        
    //e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.  

        nomeUsuario = prompt("Qual seu Nome?")
        idadeUsuario = prompt("Qual sua Idade?")
    
    //f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
        
            console.log(typeof nomeUsuario, typeof idadeUsuario)
        
            //A resposta foi string, string. As duas variáveis agora recebem o valor do prompt.
         
    /*
    g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os 
    valores que o usuário inseriu:
    */

        console.log(`Olá ${nomeUsuario},você tem ${idadeUsuario} anos`)


/*----------------------------------------------------------------------------------------- */

/*
 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando 
 uma roupa azul hoje?". Depois, siga os passos: 
*/ 
 
    //a) Crie três novas variáveis, contendo as respostas
        let primeiraPergunta = "Você tem Cachorro em sua casa?"
        let segundaPergunta = "Você tem gato em sua casa"
        let terceiraPergunta = "Você tem Peixe em sua casa"

    //b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas.
        let primeiraResposta = prompt("Você tem Cachorro em sua casa?")
        let segundaResposta = prompt("Você tem gato em sua casa")
        let terceiraResposta = prompt("Você tem Peixe em sua casa")

        console.log(`Primeira Pergunta: ${primeiraResposta} Segunda Pergunta: ${segundaResposta} Terceira Pergunta: ${terceiraResposta}`)

/*------------------------------*/

/* 
3. Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis
 assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). 
*/
    let a = 10
    let b = 25
    let c

    c = a
    a = b
    b = c

    console.log(a, b)


/*------------------------------------------------------------------------------------------*/
                                    // DESAFIOS
/*----------------------------------------------------------------------------------------- */

/*
    Essa seção é OPCIONAL e só deve ser feita se você terminou todos os exercícios propostos anteriormente!

    1. Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados 
    no console da seguinte forma:
*/

    let primeiroNumero = prompt("Digite o primeiro Número")
    let segundoNumero = prompt("Digite o segundo Número")


    console.log(`O primeiro número somado ao segundo número resulta em: ${Number(primeiroNumero) + Number(segundoNumero)}`)
    console.log(`O primeiro número multiplicado pelo segundo número resulta em: ${primeiroNumero * segundoNumero}`)

