// Condicionais

// Define como ativo
var ativo = true
var message = ''

if (ativo) {
    message = 'Está ativo.'
} 
else {
    message = 'Não está ativo.'
}

console.log(message)

// Define como desativo
var ativo = false
var message = ''

if (ativo) {
    message = 'Está ativo.'
} 
else {
    message = 'Não está ativo.'
}

console.log(message)

// Semáforo método if else if
var semaforo = 'Amarelo' // define estado do semáforo
var message = ''

if (semaforo == 'Verde') {
    message = 'Pode passar.'
}
else if (semaforo == 'Vermelho') {
    message = 'Pare.'
}
else if (semaforo == 'Amarelo') {
    message = 'Preste atenção.'
}
else {
    message = 'Valor inválido.'
}

console.log(message)


// Semáforo método switch
var semaforo = 'Verde' // define estado do semáforo
var message = ''

switch (semaforo) {
    case 'Verde':
        message = 'Pode passar.'
        break
    case 'Vermelho':
        message = 'Pare.'
        break
    case 'Amarelo':
        message = 'Atenção.'
        break
    default:
        message = 'Valor inválido.'    
}

console.log(message)