const buracos = document.querySelectorAll('.hole');
const placar = document.querySelector('.score');
const marmotas = document.querySelectorAll('.mole');
const btSumir = document.querySelector("#sumir");
const btBotar = document.querySelector("#botar");
const jogo = document.querySelector("#game");
let marmotaAtual = null;
let podeClicar = true;

btSumir.addEventListener("click", function() {
  if (marmotaAtual) {
    marmotaAtual.classList.remove("up");
    marmotaAtual = null;
    podeClicar = true;
  }
});

const sorteiaBuraco = () => Math.floor(Math.random() * 6);

function botarMarmota(numeroBuraco) {
  const buraco = document.querySelector(`.hole${numeroBuraco}`);
  buraco.classList.add("up");
  marmotaAtual = buraco;
  podeClicar = true;
  setTimeout(function() {
    retirarMarmota(numeroBuraco);
  }, 550);
}

function retirarMarmota(numeroBuraco) {
  const buraco = document.querySelector(`.hole${numeroBuraco}`);
  buraco.classList.remove("up");
  if (marmotaAtual === buraco) {
    marmotaAtual = null;
    podeClicar = true;
  }
}

btBotar.onclick = function() {
  if (!marmotaAtual) {
    const num = sorteiaBuraco();
    botarMarmota(num);
  }
};

btSumir.onclick = function() {
  if (marmotaAtual) {
    const num = sorteiaBuraco();
    retirarMarmota(num);
  }
};

marmotas.forEach(function(marmota) {
  marmota.addEventListener("click", function(evento) {
    if (podeClicar) {
      console.log("acertou a marmota");
      contabilizarClique();
      podeClicar = false;
      setTimeout(function() {
        if (!marmotaAtual) {
          const num = sorteiaBuraco();
          botarMarmota(num);
        }
      }, 550);
    }
  });
});

function iniciarJogo() {
  placar.innerHTML = "0";
  setInterval(function() {
    if (!marmotaAtual) {
      const num = sorteiaBuraco();
      botarMarmota(num);
    }
  }, 550);
}

const botaoIniciar = document.querySelector("button");
botaoIniciar.addEventListener("click", iniciarJogo);

function contabilizarClique() {
  placar.innerHTML = parseInt(placar.innerHTML) + 1;
}

marmotas.forEach(function(marmota) {
  marmota.addEventListener("click", function(evento) {
    if (podeClicar) {
      console.log("acertou a marmota");
      contabilizarClique();
      podeClicar = false;
      setTimeout(function() {
        if (!marmotaAtual) {
          const num = sorteiaBuraco();
          botarMarmota(num);
        }
      }, 550);
    }
  });
});
