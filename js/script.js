// botão quando os 3 não estiverem marcados:
// Selecione os 3 itens para fechar o pedido

// quando tiver marcado:
// Fechar pedido
// background: #32B72F;

setTimeout(function () {
  let paginaCarregando = document.getElementById("inicio");
  paginaCarregando.style.display = "none";
}, 1500);

const comidas = ["miojo", "macarrao", "arroz", "feijoada"];
const bebidas = ["coca", "pepsi", "fanta", "agua"];
const sobremesas = ["pudim", "petit", "sorvete", "acai"];
let comidaSelecionada = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;

function marcarEscolha(itemSelecionado) {
  zerarEscolhas(itemSelecionado);

  let nomeItem = document.getElementById(itemSelecionado);

  for (i = 0; i < 4; i++) {
    if (itemSelecionado === comidas[i]) {
      comidaSelecionada = true;
      colocarBackground(nomeItem);
    } else if (itemSelecionado === bebidas[i]) {
      bebidaSelecionada = true;
      colocarBackground(nomeItem);
    } else if (itemSelecionado === sobremesas[i]) {
      sobremesaSelecionada = true;
      colocarBackground(nomeItem);
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

function colocarBackground(nomeItem) {
  nomeItem.classList.toggle("background-selecionado");
}

function zerarEscolhas(itemCardapio) {
  let comida;
  let bebida;
  let sobremesa;

  if (comidas.includes(itemCardapio)) {
    for (i = 0; i < 4; i++) {
      comida = document.getElementById(comidas[i]);
      if (comida.classList.contains("background-selecionado")) {
        comida.classList.remove("background-selecionado");
      }
    }
  } else if (bebidas.includes(itemCardapio)) {
    for (i = 0; i < 4; i++) {
      bebida = document.getElementById(bebidas[i]);
      if (bebida.classList.contains("background-selecionado")) {
        bebida.classList.remove("background-selecionado");
      }
    }
  } else if (sobremesas.includes(itemCardapio)) {
    for (i = 0; i < 4; i++) {
      sobremesa = document.getElementById(sobremesas[i]);
      if (sobremesa.classList.contains("background-selecionado")) {
        sobremesa.classList.remove("background-selecionado");
      }
    }
  }
}
