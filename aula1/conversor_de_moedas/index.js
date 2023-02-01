

function conversao() {

    let seuNome = prompt("Digite seu nome:");

    let valorEmDolar = prompt("Digite um valor : ");
    valorEmDolar = parseInt(valorEmDolar);
    let cotacaoDoDolar = 5.12;
    let cotacaoDoEuro = 0.92;
    let cotacaoDoBitcoin = 0.043;

    let conversaoEmReal = valorEmDolar * cotacaoDoDolar;
    conversaoEmReal = conversaoEmReal.toFixed(2);

    let conversaoEmEuro = valorEmDolar * cotacaoDoEuro;
    conversaoEmEuro = conversaoEmEuro.toFixed(2);

    let conversaoEmBitcoin = valorEmDolar * cotacaoDoBitcoin;
    conversaoEmBitcoin = conversaoEmBitcoin.toFixed(2);

    alert(
        `Olá ${seuNome} o valor convertido de dólar para real é: $ ${conversaoEmReal} 
         o valor convertido de dólar para euro é: € ${conversaoEmEuro} 
         o valor convertido de dólar para bitcoin é: ${conversaoEmBitcoin}`
    );

}

