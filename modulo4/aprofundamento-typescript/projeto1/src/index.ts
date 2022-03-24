// a)
// const minhaString: string = 9

// b)
const meuNumero: number | string = "9"

// c) e d)

enum Cores {
    Azul = 'Azul',
    Amarelo = 'Amarelo',
    Verde = 'Verde',
    Vermelho = 'Vermelho'
}

type Person = {
    nome: string;
    idade: number;
    corFavorita: Cores;
  };

  
  const printPerson = (person: Person) => {
    console.log(`Meu nome e ${person.nome}`);
    console.log(`Minha idade e ${person.idade}`);
    console.log(`Cor favorita ${person.corFavorita}`)
  }
   
  printPerson({nome: 'John', idade: 23, corFavorita: Cores.Azul});
