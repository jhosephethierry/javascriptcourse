// Arrays
var array = [1, "Thierry", true, {nome: "Jhosephe", idade:36}];

console.log(typeof array);
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[3].nome);
console.log([array[3].idade]);

var arrayB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayB[8] = 400;
arrayB[9] = 500;
console.log(arrayB);