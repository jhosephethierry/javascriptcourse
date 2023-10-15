// Escopo da funçao

// Escopo global
var car = 'Mercedes'

function showCar() {
    console.log(car)
}
showCar()

// Escopo local
function showCar() {
    var car = 'Volkswagen'
    console.log(car)
}
showCar()
console.log(car)

// Funçao soma
function sum(number1, number2) {
    var result = number1 + number2
    return result
}
console.log(sum(3, 3))

var result = '0'
console.log(result)