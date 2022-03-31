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

