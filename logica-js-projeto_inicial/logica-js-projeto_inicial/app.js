alert('Boas Vindas');
let numeroMaximo = 100;
let secreto = parseInt (Math.random() * numeroMaximo + 1)
console.log (secreto);
let guess; 
let tentativas = 1;


while (guess != secreto) {
   guess = prompt('Escolha um numerro de 0 a ' + numeroMaximo);
//Se o chete for igual
    if (guess == secreto) {
        break;

    //Se for diferente
    } else {
        if (guess < secreto) {
            alert('Numero secreto é maior que ' + guess);
        } else {
            alert('Numero secreto é menor que ' + guess);
        }
        
    } tentativas++;
} 

let palavraTentativa = tentativas > 1 ? ' tentativas!!' : ' tentativa!!'
alert('Parabens você acertou ' + secreto + ' com ' + tentativas + palavraTentativa);

