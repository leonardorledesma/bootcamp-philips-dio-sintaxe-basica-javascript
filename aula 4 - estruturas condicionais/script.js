// if
var jogador1 = 0;
var jogador2 = 0;
var placar;
if(jogador1 != -1){
    if(jogador1 > 0){
    console.log('jogador 1 marcou ponto')
    }else if(jogador2 > 0){
    console.log('jogador 2 marcou ponto')
    }else{
    console.log('ninguém marcou ponto')}
}
// if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('jogadores são validos') : console.log('jogadores invalidos');

//switch case
switch(placar){
    case placar = jogador1 > jogador2 :
    console.log('jogador 1 ganhou');
    break;
    case placar = jogador2 > jogador1 :
    console.log('jogador 2 ganhou');
    break;
    default:
    console.log('ninguém ganhou');
}

// for - executa uma instrução até que ela seja falsa
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
let object = {propriedade1 : 'valor1', propriedade2 : 'valor2', propriedade3 : 'valor3'}
for(let indice = 0; indice < array.length; indice++){
console.log(indice);
}

// for in - executa uma repetição a partir de uma propriedade
// com array

for(let i in array){
console.log(i);
}

// com object
for(i in object){
console.log(i);
}

// for of - executa a repetição a partir de um valor
// com array
for(i of array){
console.log(i);}

// for of as propriedades variam por isso não são iteraveis por isso tem que passar a propriedade
//com object
for(i of object.propriedade1){
console.log(i);}

// while
var a = 0;
while(a < 10){
a++;
console.log(a)
}

// do while
do {
    a++;
    console.log(a);
}while(a < 7);