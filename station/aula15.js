// Operações em array

var array = ['jhosephe', 'thierry', 'andrade', 'cacau']

for (var indice = 0; indice < array.length; indice++) {
    console.log(array[indice])
}

var array = ['jhosephe', 'thierry', 'andrade', 'cacau']
var newValue = array.indexOf('thierry')
console.log(newValue)

var array = ['jhosephe', 'thierry', 'andrade', 'cacau']
array.pop()
console.log(array)

var array = ['jhosephe', 'thierry', 'andrade', 'cacau']
console.log(array.pop())

var array = ['jhosephe', 'thierry', 'andrade', 'cacau']
array.push('karov')
console.log(array)

var array = ['jhosephe', 'thierry', 'andrade', 'cacau', 'karov']
var index = array.indexOf('karov')
array.splice(index, 1)
console.log(array)