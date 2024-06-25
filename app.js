alert('Bem vindo ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10 + 1); 
//Math. random * 10 (gera um nº entre 0 e 1, vezes 10 para mover a casa decimal gerando de 0 a 9, mais 1 para acrescentar o 10 quando for gerar);
//parseInt(irá tornar esse nº gerado em inteiro);

console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    
    if (chute == numeroSecreto) {
        break; // usamos o break para parar a repetição, no caso se acertamos de primeira, executa o que está fora (o próximo if)
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }


}

let palavraTentativa = (tentativas > 1) ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
// uso do Operador Ternário para trocar a palavra conforme for singular ou plural





