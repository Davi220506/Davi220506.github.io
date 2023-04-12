const botao = document.getElementById("clique");

botao.onclick = function soma () {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let soma = n1 + n2;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Resultado da soma: ${soma}`;
};

