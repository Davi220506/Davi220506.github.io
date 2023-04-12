const botao = document.getElementById("clique");

function calcularNovoSalario() {
const salarioAtual = parseFloat(document.getElementById("salarioAtual").value);
const percentualReajuste = parseFloat(document.getElementById("percentualReajuste").value);
const novoSalario = parseFloat(salarioAtual * (1 + percentualReajuste / 100));
return novoSalario.toFixed(2);
}

botao.addEventListener("click", function() {
const resultado = document.getElementById("resultado");
resultado.innerHTML = `O novo salário do funcionário é R$ ${calcularNovoSalario()}.`;
});