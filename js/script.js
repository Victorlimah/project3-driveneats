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

var itemMiojo = document.getElementById("miojo");
var itemMacarronada = document.getElementById("macarronada");
var itemArroz = document.getElementById("arroz");
var itemFeijoada = document.getElementById("feijoada");

var backgroundSelecionado =
  "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
var backgroundPadrao = "0px 0px 10px -4px rgba(0, 0, 0, 0.25)";

function marcarMiojoEscolha() {
  zerarEscolhasComidas();
  itemMiojo.style.boxShadow = backgroundSelecionado;
}

function marcarMacarraoEscolha() {
  zerarEscolhasComidas();
  itemMacarronada.style.boxShadow = backgroundSelecionado;
}

function marcarArrozEscolha() {
  zerarEscolhasComidas();
  itemArroz.style.boxShadow = backgroundSelecionado;
}

function marcarFeijoadaEscolha() {
  zerarEscolhasComidas();
  itemFeijoada.style.boxShadow = backgroundSelecionado;
}

function zerarEscolhasComidas() {
  let comidas = [itemMiojo, itemMacarronada, itemArroz, itemFeijoada];

  for (i = 0; i < comidas.length; i++) {
    comidas[i].style.boxShadow = backgroundPadrao;
  }
}
