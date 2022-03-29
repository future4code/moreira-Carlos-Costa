
type Person = {
    nome: string;
    dataNasc: string

  };
  
  const printPerson = (person: Person) => {
    const char: string[] = person.dataNasc.split("/")
    console.log(char)
    console.log(`Olá me chamo ${person.nome}, nasci no dia ${char[0]} do mês de ${char[1]} do ano de ${char[2]}`);
  }
   
  printPerson({nome: 'Carlos Henrique', dataNasc: '08/02/1986'});