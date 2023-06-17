const botao = document.getElementById("clique");

botao.onclick = function() {
let n1 = parseInt(document.getElementById("n1").value);
let n2 = parseInt(document.getElementById("n2").value);

let maior = n1 > n2 ? n1 : n2;

const resultado = document.getElementById("resultado");
resultado.innerHTML = `O maior é: ${maior}`;
};