// FAZER FUNÇÃO DO BOTAO FECHAR PEDIDO (POP-UP)
// COLOCAR ICONE DE V NOS ELEMENTOS SELECIONADOS

setTimeout(function () {
  const paginaCarregando = document.querySelector(".inicio");
  paginaCarregando.classList.add("escondido");
}, 1500);

const comidas = ["miojo", "macarrao", "arroz", "feijoada"];
const bebidas = ["coca", "pepsi", "fanta", "agua"];
const sobremesas = ["pudim", "petit", "sorvete", "acai"];
let comidaSelecionada;
let bebidaSelecionada;
let sobremesaSelecionada;

function marcarEscolha(itemSelecionado) {
  let nomeItem = document.getElementById(itemSelecionado);
  let nomeCheck = document.querySelector("#" + itemSelecionado + ".check");
  zerarEscolhas(itemSelecionado);
  for (i = 0; i < 4; i++) {
    if (itemSelecionado === comidas[i]) {
      comidaSelecionada = true;
      colocarBackground(nomeItem, nomeCheck);
    } else if (itemSelecionado === bebidas[i]) {
      bebidaSelecionada = true;
      colocarBackground(nomeItem, nomeCheck);
    } else if (itemSelecionado === sobremesas[i]) {
      sobremesaSelecionada = true;
      colocarBackground(nomeItem, nomeCheck);
    }
  }
  verificaSeJaSelecionouTudo();
}

function verificaSeJaSelecionouTudo() {
  const elemento = document.querySelector(".mensagem-botao");
  const botao = document.querySelector("footer button");
  if (comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {
    botao.classList.add("background-botao");
    elemento.innerHTML = "Fechar pedido";
  }
}

function colocarBackground(nomeItem, nomeCheck) {
  nomeItem.classList.add("background-selecionado");
  nomeCheck.classList.remove("escondido");
}

function zerarEscolhas(itemCardapio) {
  let comida;
  let bebida;
  let sobremesa;

  if (comidas.includes(itemCardapio)) {
    for (i = 0; i < 4; i++) {
      comida = document.getElementById(comidas[i]);
      let check = document.querySelector("#" + comidas[i] + ".check");
      if (comida.classList.contains("background-selecionado")) {
        comida.classList.remove("background-selecionado");
        check.classList.add("escondido");
      }
    }
  } else if (bebidas.includes(itemCardapio)) {
    for (i = 0; i < 4; i++) {
      bebida = document.getElementById(bebidas[i]);
      let check = document.querySelector("#" + bebidas[i] + ".check");
      if (bebida.classList.contains("background-selecionado")) {
        bebida.classList.remove("background-selecionado");
        check.classList.add("escondido");
      }
    }
  } else if (sobremesas.includes(itemCardapio)) {
    for (i = 0; i < 4; i++) {
      sobremesa = document.getElementById(sobremesas[i]);
      let check = document.querySelector("#" + sobremesas[i] + ".check");
      if (sobremesa.classList.contains("background-selecionado")) {
        sobremesa.classList.remove("background-selecionado");
        check.classList.add("escondido");
      }
    }
  }
}
