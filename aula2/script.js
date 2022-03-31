//tipos primitivos


//boleanos

var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'leonardo';
console.log(typeof(nome));

//function
var funcao = function(){};
console.log(typeof(funcao));

//como declarar
var variavel = 'leonardo';
variavel = 'leo1';
console.log(variavel);

let variavel2 = 'leonardo';
variavel2 = 'leo2'
console.log(variavel2);

const constante = 'leo3';
console.log(constante);

//escopo
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
let escopoLocalInterno = 'local'
console.log(escopoLocalInterno);
};
escopoLocal();

//atribuição
//um valor é atribuido a uma variavel pelo simbolo de igual "="
var atribuicao = 'leonardo';

//comparação
// para fazer a comparação entre 2 valores utilizamos 2 iguais "=="

var comparacao = '0' ==0;
console.log(comparacao);

// comparação identica
// comparação identica além de comparar os valores também compara o tipo usa 3 iguais "==="
var comparacaoIdentica = '0' ===0;
console.log(comparacaoIdentica);

//operadores aritméticos

//adição
 var adicao = 2 + 1;
 console.log(adicao);

 //subtração
 var subtracao = 2 - 1;
 console.log(subtracao);

 //multiplicação
 var multiplicacao = 2 * 3;


 //divisão real
 var divisaoReal = 6 / 2;
 console.log(divisaoReal);

 //divisão interira ou resto

 var divisaoInteira = 5 / 2;
 console.log(divisaoInteira);

 //potenciação

 var potenciacao = 2 ** 10;
 console.log(potenciacao);

 //operadores relacionais

 //maior que
 var maiorQue = 5 > 2;
 console.log(maiorQue);

 // menor que
 var menorQue = 5 < 2;
 console.log(menorQue);

 // maior ou igual
 var maiorOuIgual = 5>= 2;
 console.log(maiorOuIgual);

 //menorOuIgual
 var menorOuIgual = 5<=2;
 console.log(menorOuIgual);

 //operadores lógicos

 // "e" &&
 var e = true && false;
 console.log(e);

 // "ou" ||
 var ou = true || false;
 console.log(ou);

 // "não" !
 var nao = !true;
 console.log(nao);







