const botao = document.getElementById("clique");

function converterTemp() {
const tempF = parseFloat(document.getElementById("tempF").value);
const tempC = (tempF - 32) * 5/9;
return tempC.toFixed(2);
}

botao.addEventListener("click", function() {
const resultado = document.getElementById("resultado");
resultado.innerHTML = `A temperatura em Celsius é ${converterTemp()}°C.`;
});





