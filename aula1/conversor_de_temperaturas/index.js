
function conversaoTemperatura() {
    let temperaturaCelsius = prompt("Digite uma temperatura em graus celsius :");

    temperaturaCelsius = parseInt(temperaturaCelsius);

    let conversaoFahrenheit = (temperaturaCelsius * 9) / 5 + 32;

    let conversaoKelvin = temperaturaCelsius + 273.15;

    alert(
        `A conversão em graus celsius para fahrenheit foi : ${conversaoFahrenheit}°F

  A conversão em graus celsius para kelvin foi : ${conversaoKelvin}K
`
    );
}
