alert('Boas Vindas');
let numeroMaximo = 100;
let secreto = parseInt (Math.random() * numeroMaximo + 1)
console.log (secreto);
let guess; 
let tentativas = 1;


while (guess != secreto) {
   guess = prompt('Escolha um número de 0 a ' + numeroMaximo);
//Se o chete for igual
    if (guess == secreto) {
        break;

    //Se for diferente
    } else {
        if (guess < secreto) {
            alert('Número secreto é maior que ' + guess);
        } else {
            alert('Número secreto é menor que ' + guess);
        }
        
    } tentativas++;
} 

let palavraTentativa = tentativas > 1 ? ' tentativas!!' : ' tentativa!!'
alert('Parabéns você acertou ' + secreto + ' com ' + tentativas + palavraTentativa);

