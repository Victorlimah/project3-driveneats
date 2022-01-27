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

function marcarPrimeiraEscolha() {
  primeiroItem.classList.toggle("background-selecionado");
}

function marcarSegundaEscolha() {
  segundoItem.classList.toggle("background-selecionado");
}

function marcarTerceiraEscolha() {
  terceiroItem.classList.toggle("background-selecionado");
}

function marcarQuartaEscolha() {
  quartoItem.classList.toggle("background-selecionado");
}
