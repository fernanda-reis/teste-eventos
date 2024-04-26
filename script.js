window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  setCookies();
  getCookies();
});

window.addEventListener("message", (ev) => {
  console.log(
    `Evento Recebido: ${ev.type} | Origem: ${ev.origin} | Tipo: ${ev.data?.type}`
  );
  ev.source.postMessage(ev.data, ev.origin);
});

// function sendMessage(source, origin, tipo) {
//   console.log("[[re-enviando mensagens]]");
//   //window.postMessage({ type: tipo }, origin);
//   window.postMessage({ type: tipo }, source);
//   //   source.postMessage({ type: tipo });
//}

function sendNewMessage() {
  document
    .getElementById("my-iframe")
    .contentWindow.postMessage({ type: "NOVA_MENSAGEM!" }, "*");
}

function setCookies() {
  console.log("[[setando cookies]]");
  document.cookie = "teste=cookie_APP_DE_TESTE; path=/; SameSite=None; Secure";
  document.cookie = "teste=cookie_APP_DE_TESTE2; path=/";
  document.cookie = "teste=cookie_APP_DE_TESTE3";
}

function getCookies() {
  document.getElementById("my-cookies").innerHTML = document.cookie;
}
