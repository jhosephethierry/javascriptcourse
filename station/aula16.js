// Operações em objetos

var person = {
    name: 'jhosephe',
    age: 36
}

person.name = 'jhosephe thierry'
console.log(person)

// Congelando objeto
var person = {
    name: 'jhosephe',
    age: 36
}

Object.freeze(person)

person.name = 'jhosephe thierry'
console.log(person)

// Juntando objetos
var person = {
    name: 'jhosephe',
    age: 36
}

var any = {
    height: 1.83
}

var newObject = Object.assign(person, any)
console.log(newObject)