const botao = document.getElementById("clique");

function calcularHipotenusa() {
    const cateto1 = parseInt(document.getElementById("cateto1").value);
    const cateto2 = parseInt(document.getElementById("cateto2").value);
    const hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
    return hipotenusa;
}

botao.addEventListener("click", function() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `A hipotenusa do triângulo é ${calcularHipotenusa().toFixed(2)}.`;
});
