function calculadora(){
    const operacao = Number(prompt = ('escolha uma opeação:\n 1 - Soma(+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação(**)'));
    console.log(operacao);

    if(!operacao || operacao >=7){
    alert('Erro - selecione uma operação valida');
    calculadora();
    }else(let n1 = Number(prompt('Insira o primeiro valor'));
          let n2 = Number(prompt('Insira o segundo valor'));
          let resultado;

              function soma(){
              resultado = n1 + n2;
              alert(`${n1} + ${n2} = ${resultado}`);
              }
              function subtracao(){
                  resultado = n1 - n2;
                  alert(`${n1} - ${n2} = ${resultado}`);
                  }
              function multiplicacao(){
                  resultado = n1 * n2;
                  alert(`${n1} * ${n2} = ${resultado}`);
                  }
              function divisaoReal(){
                  resultado = n1 / n2;
                  alert(`${n1} / ${n2} = ${resultado}`);
                  }
              function divisaoInteira(){
                  resultado = n1 % n2;
                  alert(` o resto da divisão entre ${n1} e ${n2} é igual a  ${resultado}`);
                  }
              function potenciacao(){
                  resultado = n1 ** n2;
                  alert(`${n1} elevado a  ${n2} é igual a  ${resultado}`);
                  }

              if (operacao == 1){
              soma();
              }else if(operacao == 2){
              subtracao();
              }else if(operacao == 3){
              multiplicacao();
              }else if(operacao == 4){
              divisaoReal();
              }else if(operacao == 5){
              divisaoInteira();
              }else if(operacao == 6){
              potenciacao();
              });
    }

    calculadora();