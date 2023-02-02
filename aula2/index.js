
function jogar() {
  var numeroSecreto = 1 + parseInt(Math.random() * 1000);

  var numeroTentativas = 10;

  while (numeroEscolhido != numeroSecreto) {
    var numeroEscolhido = prompt('Digite um numero de 1 a 1000')


    if (numeroEscolhido == numeroSecreto) {
      alert(`Parabéns, você acertou!! o número é : ${numeroSecreto} 
          tentativas restantes : ${numeroTentativas}`);
    } else if (numeroEscolhido < numeroSecreto) {
      alert(`Você errou... o número secreto é maior do que ${numeroEscolhido} 
          tentativas: ${numeroTentativas}`);
    } else if (numeroEscolhido > numeroSecreto) {
      alert(`Você errou... o número secreto é menor do que ${numeroEscolhido}  
          tentativas: ${numeroTentativas}`);
    };


    numeroTentativas -= 1
    if (numeroTentativas === 0) {
      alert(`Tentativas Esgotadas! O número correto era ${numeroSecreto}`)
      break
    }

  }
}

