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

function marcarMiojoEscolha() {
  zerarEscolhasComidas();
  let itemSelecionado = document.getElementById("miojo");
  itemSelecionado.style.boxShadow =
    "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
}

function marcarMacarraoEscolha() {
  zerarEscolhasComidas();
  let itemSelecionado = document.getElementById("macarronada");
  itemSelecionado.style.boxShadow =
    "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
}

function marcarArrozEscolha() {
  zerarEscolhasComidas();
  let itemSelecionado = document.getElementById("arroz");
  itemSelecionado.style.boxShadow =
    "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
}

function marcarFeijoadaEscolha() {
  zerarEscolhasComidas();
  let itemSelecionado = document.getElementById("feijoada");
  itemSelecionado.style.boxShadow =
    "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
}

function zerarEscolhasComidas() {
  let itemMiojo = document.getElementById("miojo");
  let itemMacarronada = document.getElementById("macarronada");
  let itemArroz = document.getElementById("arroz");
  let itemFeijoada = document.getElementById("feijoada");
  itemMiojo.style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
  itemMacarronada.style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
}
