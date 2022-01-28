// QUANDO SELECIONAR ITEM FAZER ISSO:
// inset 0px 0px 0px 5px #32b72f

// quando clickar em um os outros ficam sem borda

// botão quando os 3 não estiverem marcados:
// Selecione os 3 itens para fechar o pedido

// quando tiver marcado:
// Fechar pedido
// background: #32B72F;

setTimeout(function () {
  let paginaCarregando = document.getElementById("inicio");
  paginaCarregando.style.display = "none";
}, 1500);

const primeiroItem = document.querySelector(".primeiroItem");
const segundoItem = document.querySelector(".segundoItem");
const terceiroItem = document.querySelector(".terceiroItem");
const quartoItem = document.querySelector(".quartoItem");
const comidas = ["miojo", "macarrao", "arroz", "feijoada"];
const bebidas = ["coca", "pepsi", "fanta", "agua"];
const sobremesas = ["pudim", "petit", "sorvete", "acai"];
const listaOpcoes = [primeiroItem, segundoItem, terceiroItem, quartoItem];

function marcarEscolha(itemSelecionado) {
  zerarEscolhas(itemSelecionado);
  let nomeItem = document.getElementById(itemSelecionado);

  for (i = 0; i < 4; i++) {
    if (
      itemSelecionado === comidas[i] ||
      itemSelecionado === bebidas[i] ||
      itemSelecionado === sobremesas[i]
    ) {
      nomeItem.classList.toggle("background-selecionado");
    }
  }
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
