// Operadores lógicos

// Operador E = &&
var user = 'Thierry'
var password = '1234'

if (user === 'Thierry' && password === '1234') {
    console.log('usuário válido')
} 
else {
    console.log('usuário inválido')
}

// Operador OR = ||
var age = 18
var sex = 'Male'

if (age >= 18 || sex === 'Male') {
    console.log('Entrada liberada')
}
else {
    console.log('Entrada proibida')
}

// Operador NOT = !

var sex = 'Femme'

if (!sex === 'Femme') {
    console.log('Entrada Liberada')
}
else {
    console.log('Entreada proibida')
}