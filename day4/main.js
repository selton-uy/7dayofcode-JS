let maximo = 10
let minimo = 0

let numeroSoteado = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
console.log(numeroSoteado);
let tentativa = 0;

tentativa++;
let palpite = prompt(`Tente adivinhar o numero entre 0 e 10 que eu estou pensando...${tentativa} de 3`);

while (tentativa < 3) {

    if (palpite == numeroSoteado) {

        alert('Parabens você acertou!');
        break;

    } 
    if(tentativa != numeroSoteado) {

        tentativa ++;
        palpite = prompt(`HUMM... Quase lá tente mais uma vez. Você usou ${tentativa} de 3 chances`);
        
    }
    if(tentativa == 3&& palpite==numeroSoteado){
        alert('Na ultima tentativa, PARABÉNS!')
        break;
    }
}

if (tentativa == 3 && palpite != numeroSoteado) {
                
    alert(`Infelizmente usou ${tentativa} de 3 chances, reinicie a pagina e tente novamente`);
    alert(`O número sorteado era ${numeroSoteado}`);
}
