// Operadores Aritméticos

var x = 9
var y = 3

var operator = {
    sum: x + y,
    minus: x - y,
    multiplus: x * y,
    divsion: x / y,
    modulus: x % y
}
console.log(operator.sum)
console.log(operator.minus)
console.log(operator.multiplus)
console.log(operator.divsion)
console.log(operator.modulus)

// Ordem de operadores
// multiplicação
// divisão
// soma
// subtração

resultadoA = x / y * x
resultadoB = (x / y) * x
resultadoC = x - y + x
resultadoD = (x - y) + x

console.log(resultadoA)
console.log(resultadoB)
console.log(resultadoC)
console.log(resultadoD)

// incrementar

x++
console.log(x)

// decrementar

x--
console.log(x)