const comidas = ["miojo", "macarrao", "arroz", "feijoada"];
const bebidas = ["coca", "pepsi", "fanta", "agua"];
const sobremesas = ["pudim", "petit", "sorvete", "acai"];
const popUp = document.querySelector(".finalizacao-pedido");
let comidaSelecionada, nomeComidaSelecionada, precoComidaSelecionada;
let bebidaSelecionada, precoBebidaSelecionada, nomeBebidaSelecionada;
let sobremesaSelecionada, nomeSobremesaSelecionada, precoSobremesaSelecionada;
let valorTotal;
let nome = "";
let endereco = "";

setTimeout(function () {
  const paginaCarregando = document.querySelector(".inicio");
  paginaCarregando.classList.add("escondido");
}, 1500);

function marcarEscolha(
  itemSelecionado,
  nomeParaInserirCarrinho,
  precoParaInserirCarrinho
) {
  let nomeItem = document.getElementById(itemSelecionado);
  let string = "#" + itemSelecionado + " .check";
  let nomeCheck = document.querySelector(string);
  zerarEscolhas(itemSelecionado);
  for (i = 0; i < 4; i++) {
    if (itemSelecionado === comidas[i]) {
      comidaSelecionada = true;
      nomeComidaSelecionada = nomeParaInserirCarrinho;
      precoComidaSelecionada = precoParaInserirCarrinho;
      colocarBackground(nomeItem, nomeCheck);
    } else if (itemSelecionado === bebidas[i]) {
      bebidaSelecionada = true;
      nomeBebidaSelecionada = nomeParaInserirCarrinho;
      precoBebidaSelecionada = precoParaInserirCarrinho;
      colocarBackground(nomeItem, nomeCheck);
    } else if (itemSelecionado === sobremesas[i]) {
      sobremesaSelecionada = true;
      nomeSobremesaSelecionada = nomeParaInserirCarrinho;
      precoSobremesaSelecionada = precoParaInserirCarrinho;
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
    return true;
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
      let check = document.querySelector("#" + comidas[i] + " .check");
      if (comida.classList.contains("background-selecionado")) {
        comida.classList.remove("background-selecionado");
        check.classList.add("escondido");
      }
    }
  } else if (bebidas.includes(itemCardapio)) {
    for (i = 0; i < 4; i++) {
      bebida = document.getElementById(bebidas[i]);
      let check = document.querySelector("#" + bebidas[i] + " .check");
      if (bebida.classList.contains("background-selecionado")) {
        bebida.classList.remove("background-selecionado");
        check.classList.add("escondido");
      }
    }
  } else if (sobremesas.includes(itemCardapio)) {
    for (i = 0; i < 4; i++) {
      sobremesa = document.getElementById(sobremesas[i]);
      let check = document.querySelector("#" + sobremesas[i] + " .check");
      if (sobremesa.classList.contains("background-selecionado")) {
        sobremesa.classList.remove("background-selecionado");
        check.classList.add("escondido");
      }
    }
  }
}

function cliqueFinalizarPedido() {
  if (verificaSeJaSelecionouTudo()) {
    const checkComida = document.querySelector(".comida-escolhida h4");
    const precoComida = document.querySelector(".comida-escolhida span");
    const checkBebida = document.querySelector(".bebida-escolhida h4");
    const precoBebida = document.querySelector(".bebida-escolhida span");
    const checkSobremesa = document.querySelector(".sobremesa-escolhida h4");
    const precoSobremesa = document.querySelector(".sobremesa-escolhida span");
    const precoTotal = document.querySelector(".preco-total span");

    checkComida.innerHTML = nomeComidaSelecionada;
    checkBebida.innerHTML = nomeBebidaSelecionada;
    checkSobremesa.innerHTML = nomeSobremesaSelecionada;

    precoComida.innerHTML = precoComidaSelecionada.replace(".", ",");
    precoBebida.innerHTML = precoBebidaSelecionada.replace(".", ",");
    precoSobremesa.innerHTML = precoSobremesaSelecionada.replace(".", ",");

    valorTotal =
      parseFloat(precoComidaSelecionada) +
      parseFloat(precoBebidaSelecionada) +
      parseFloat(precoSobremesaSelecionada);
    valorTotal = valorTotal.toFixed(2);
    precoTotal.innerHTML += valorTotal.replace(".", ",");

    popUp.classList.remove("escondido");
  }
}

function confirmarPedido() {
  nome = prompt("Digite seu nome: ").replace(" ", "%20");
  endereco = prompt("Digite seu endereço: ").replace(" ", "%20");

  window.open(
    `https://wa.me/5583986479932?text=Ol%C3%A1%2C+gostaria+de+fazer+o+pedido%3A%0A-+Prato%3A+${nomeComidaSelecionada}%0A-+Bebida%3A+${nomeBebidaSelecionada}%0A-+Sobremesa%3A+${nomeSobremesaSelecionada}%0ATotal%3A+R%24+${valorTotal}%0A%0ANome%3A+${nome}%0AEndere%C3%A7o%3A+${endereco}`
  );
}

function cancelarPedido() {
  popUp.classList.add("escondido");
}
