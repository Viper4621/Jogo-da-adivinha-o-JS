alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000; // criamos uma var nova para aumentar numero
//Math.random gera um numero entre 0 e 1
//então multiplicamos * 10 para gerar casa decimal
//como só queremos numero inteiro usamos parseInt
//como gera numeros entre 0 e 1 o maximo seria 9 então colocamos +1 apos multiplicação
// para numeros de 2 casas exemplo 11 a 99 *100
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1); //ao inves de deixar numero chamamos a variavel
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// se chute for igual ao número secreto ok
// se chute > numero secreto - tem que colocar numero menor
// se chute < numero secreto - tem que colocar numero maior
// colocar a condição chute 1 caso contrario da erro e vai dar sempre que você acertou
//vamos colocar o loop para continuar o game
// só repetir enquanto erra
//operador de não igual
// as vezes precisa desativar o live server e ativar novamente estava salvando codigo
// porem estava dando undefined
//sempre criar uma condição para acabar o loop para não ficar infinito
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um valor de 1 a ${numeroMaximo}`); // para informar usuario usamos a variavel 
  //se chute for igual ao numero secreto
  if (chute == numeroSecreto) {
    break;
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
//operador ternario

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(
  `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//   alert(
//     `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
//   );
// } else {
//   alert(
//     `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`
//   );
// }

//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador = 1;
// while (contador <= 10) {
//   console.log(contador);
//   contador++;
// }

//Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador = 10;
// while (contador >= 0);
// {
//   console.log(contador);
//   contador--;
// }

//Crie um programa de contagem regressiva.
// Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.

// let numeroEscolhido = prompt("Digite um numero");

// while ( numeroEscolhido > 0) {
//   console.log(numeroEscolhido);
//   numeroEscolhido--;
// }

// //contagem progressiva

// let numeroEscolhido = prompt("Digite um numero");
// let contador = 0

// while(contador <= numeroEscolhido){
//     console.log(contador);
//     contador++;
// }

// operador de condição para algo e tambem outra condição = && (AND)
// operador para uma ou outra = || (OR)
// operador de negação !
