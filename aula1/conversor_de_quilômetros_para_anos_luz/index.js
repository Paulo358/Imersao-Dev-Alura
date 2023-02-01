

function conversaoEmAnosLuz() {

    let valorEmQuilometros = prompt("Escreva uma distância em quilômetros : ");

    let anosLuz = 0.0000000000001057;

    valorEmQuilometros = parseInt(valorEmQuilometros);

    let distanciaDaLua = 384.4;
    let anosLuzDaLua = distanciaDaLua * anosLuz;

    let conversorParaAnosLuz = valorEmQuilometros * anosLuz;

    alert(`A distância em anos luz é de : ${conversorParaAnosLuz}
  A distancia da terra a lua em anos luz é de : ${anosLuzDaLua}`);
}