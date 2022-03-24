/*
=============== Exercício 1 ==============  


const checaTriangulo = (a:number, b: number, c: number) => {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
console.log(checaTriangulo(2,2,3))  
*/



/*=============== Exercício 2 ============== */  
/*
function imprimeTresCoresFavoritas(cor1: string,cor2: string,cor3: string): string[] {
      
    const arrColors = [];
    arrColors.push(cor1, cor2, cor3);
    return arrColors
  }
  
  console.log(imprimeTresCoresFavoritas("Vermelho", "Preto", "Azul"));
 */



  /*=============== Exercício 3 ============== */  
  /**
function checaAnoBissexto(ano: number): boolean{
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }

 console.log(checaAnoBissexto(2022))
*/



/*=============== Exercício 4 ============== */  
/**
 
function comparaDoisNumeros(num1: number, num2: number): number {
  let maiorNumero: number;
  let menorNumero: number;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca: number = maiorNumero - menorNumero;

  return diferenca;
}

console.log(comparaDoisNumeros(10, 10));
 */



/*=============== Exercício 5 ============== */  
/*
function checaRenovacaoRG(anoAtual: number,anoNascimento: number,anoEmissao: number): string {
    let idade: number = anoAtual - anoNascimento;
    let tempoCarteira: number = anoAtual - anoEmissao;
  
    if (idade <= 20) {
      return tempoCarteira >= 5
        ? "Documento com mais de 5 anos. Importa renová-lo."
        : "Documento com menos 5 anos. Não é necessário renová-lo.";
    } else if (idade >= 20 || idade <= 50) {
      return tempoCarteira >= 10
        ? "Documento com mais de 10 anos. Importa renová-lo."
        : "Documento com menos 10 anos. Não é necessário renová-lo.";
    } else if (idade > 50) {
      return tempoCarteira >= 15
        ? "Documento com mais de 15 anos. Importa renová-lo."
        : "Documento com menos 15 anos. Não é necessário renová-lo.";
    } else {
      return "error";
    }
  }
  
  console.log(checaRenovacaoRG(2022, 1986, 1998))
*/