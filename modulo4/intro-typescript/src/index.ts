
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

/*
function imprimeTresCoresFavoritas() {
    const cor1 = prompt("Insira sua primeira cor favorita")
    const cor2 = prompt("Insira sua segunda cor favorita")
    const cor3 = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 }
 */