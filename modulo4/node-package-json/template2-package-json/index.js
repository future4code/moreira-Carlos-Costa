const operacao = (process.argv[2])
const x1 = Number((process.argv[3]))
const x2 = Number((process.argv[4]))

switch (operacao){
    case '+':
        console.log(x1 + x2)
    break
    case '-':
        console.log(x1 - x2)
    break
    case '*':
        console.log(x1 * x2)
    break
    case '/':
        console.log(x1 / x2)
    break
}