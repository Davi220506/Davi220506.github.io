const botao = document.getElementById("calcular");

function calcularMediaFinal() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
    return mediaFinal.toFixed(2);
}

botao.addEventListener("click", function() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `A média final do aluno é ${calcularMediaFinal()}.`;
});
