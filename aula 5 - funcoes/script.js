function funcao(){
console.log('essa mensagem veio de uma função');
}
funcao();

// função com parametro

function mensagem(primeiro, segundo){
console.log(primeiro, segundo);
}
mensagem('parametro 1', 'parametro 2');

// funçao declarativa
function funcao1(){
console.log('esta é uma função declarativa');
}
funcao1();

// expressoes de função - são funcões atribuidas a expressoes e a nomeação da  função é opcional
var funcao2 = function funcao3(){
console.log('sou uma função de expressão');
}
funcao2();

//arrow function - funcção de expressão de de sintaxe curta
var funcao4 = () =>{
console.log('sou uma arrow function');
}
funcao4();


// funções aritmeticas
