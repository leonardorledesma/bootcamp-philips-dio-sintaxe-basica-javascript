// o que são vetores ou arrays

// como declarar um array
let array = ['string', 1, true];
console.log(array);

// array pode agrupar varios tipos de dados
let array_2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array_2[3])

//foreach - itera em cada item
array_2.forEach(function(item, index){console.log(item, index)});

// push - adiciona um item no final
array_2.push('novo item');
console.log(array_2);

// pop - remove o ultimo item do array
array_2.pop(array_2);
console.log(array_2);

// shift - remove item no inicio do array
array_2.shift(array_2);
console.log(array_2);

// unshift - adiciona item no inicio do array
array_2.unshift('novo item no inicio');
console.log(array_2);

// indexOf - mostra o indice de um elemento.
console.log(array_2.indexOf(true));

// splice - remove ou substitui um indice pelo numero
array_2.splice(0, 3);
console.log(array_2);

// slice - retorna uma parte existente do array
let novo_array = array_2.slice(0, 3);
console.log(novo_array);

// object
let object = {string: "string", number: 1, boolean: true, array22:["array"], objectInterno:{objectInterno:'objecto interno'} };
console.log(object);
console.log(object.boolean);
console.log(object.objectInterno);

// desetruturação do object
var string = object.string;
console.log(string);

var arrayInterno = object.array22;
console.log(arrayInterno);

//segunda forma de fazer a desestruturação

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);

