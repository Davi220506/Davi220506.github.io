function contarPalavras() {
  const texto = document.getElementById("texto").value;
  const palavra = document.getElementById("palavra").value;
  const palavras = texto.trim().split(/\s+/);
  const totalPalavras = palavras.length;
  const totalLetras = texto.replace(/\s+/g, '').length;

  const ocorrencias = {};
  for (let i = 0; i < palavras.length; i++) {
    const palavraAtual = palavras[i].toLowerCase();
    if (ocorrencias[palavraAtual]) {
      ocorrencias[palavraAtual]++;
    } else {
      ocorrencias[palavraAtual] = 1;
    }
  }

  const textoMarcado = texto.replace(
    new RegExp(`\\b${palavra}\\b`, "gi"),
    `<mark>${palavra}</mark>`
  );

  // Substituição da palavra digitada
  const textoSubstituido = texto.replace(
    new RegExp(`\\b${palavra}\\b`, "gi"),
    "****"
  );

  const resultados = document.getElementById("resultados");
  resultados.innerHTML = `
    Total de Palavras: ${totalPalavras}<br>
    Total de Letras: ${totalLetras}<br>
    Ocorrências: ${JSON.stringify(ocorrencias)}<br>
    Texto Marcado: <br>${textoMarcado}<br>
    Texto Substituído: <br>${textoSubstituido}
  `;
}