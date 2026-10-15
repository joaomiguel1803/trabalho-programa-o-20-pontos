const perguntas = [
  {
    texto: "A IA ajuda as pessoas?",
    opcoes: ["Sim", "Não"],
    resposta: 0
  },
  {
    texto: "Você usaria IA para estudar?",
    opcoes: ["Sim", "Não"],
    resposta: 0
  },
  {
    texto: "A IA traz oportunidades?",
    opcoes: ["Sim", "Não"],
    resposta: 0
  }
];

let atual = 0;
let pontos = 0;

function iniciar() {
  atual = 0;
  pontos = 0;
  document.getElementById("inicio").hidden = true;
  document.getElementById("resultado").hidden = true;
  document.getElementById("quiz").hidden = false;
  mostrarPergunta();
}

function mostrarPergunta() {
  document.getElementById("pergunta").textContent =
    perguntas[atual].texto;

  const opcoes = document.getElementById("opcoes");
  opcoes.innerHTML = "";

  perguntas[atual].opcoes.forEach((texto, i) => {
    const botao = document.createElement("button");
    botao.textContent = texto;
    botao.onclick = () => responder(i);
    opcoes.appendChild(botao);
  });
}

function responder(i) {
  if (i === perguntas[atual].resposta) pontos++;
  atual++;

  if (atual < perguntas.length) {
    mostrarPergunta();
  } else {
    document.getElementById("quiz").hidden = true;
    document.getElementById("resultado").hidden = false;
    document.getElementById("mensagem").textContent =
      pontos + " de 3 respostas positivas!";
  }
}
