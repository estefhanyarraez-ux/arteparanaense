const botao=document.querySelector("#botaoMensagem");
const mensagem =document.querySelector("#mensagemInterativa");
botao.addEventListener("click",mostrarMensagem);
function mostrarMensagem(){
    mensagem.textContent =
    "você acabou de criar uma interação com JavaScript"
}
