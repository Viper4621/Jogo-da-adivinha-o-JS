alert("Boas vindas ao jogo do número secreto");

let numeroSecreto = parseInt(Math.random() * 100 +1); // para gerar numero random entre 0 a 1 *100 para 1 a 10
console.log(numeroSecreto);
let chute;
let tentativas = 1; // colocar dentro do loop tentativas++ para alimentar nossa var da qt de tentativas

while (chute != numeroSecreto) { //<=== para deixar um loop até acertar o numero
    chute = prompt("Escolha um valor de 1 a 100");
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
      break; // damos break para parar caso acerte e não continue o codigo
      // alert( temos que remover do while pois o codigo apos break para então não dara mensagem de retorno
      //   `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
      // ); vamos colocar fora do while
    } else {
      if (chute > numeroSecreto) {
        alert(`O numero secreto e menor que ${chute}`);
      } else {
        alert(`O numero secreto e maior que ${chute}`);
      }
      //tentativas = tentativas +1;
      tentativas++;
    }
  }
   // abaixo ternario criamos var para palavra e determinamos que > 1 = tentativas se não tentativa
  let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
 
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);