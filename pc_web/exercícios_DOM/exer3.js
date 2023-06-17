const botao = document.getElementById("clique");

function numPrimo() {
    let n1 = parseInt(document.getElementById("n1").value);
    let primo = true;

    for (let i = 2; i < n1; i++) {
        if (n1 % i == 0) {
            primo = false;
            break;
        }
    }

    if (primo && n1 > 1) {
        return `O número ${n1} é primo.`;
    } else {
        return `O número ${n1} não é primo.`;
    }
}

botao.addEventListener("click", function() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = numPrimo();
});
