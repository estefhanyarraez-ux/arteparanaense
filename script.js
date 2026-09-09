const botao=document.querySelector("#botaoMenagem");
const mensagem =document.querySelector("#mensagemInterativa");
botao.addEventListener("click",mostrarMensagem);
function mostrarMensagem(){
    mensagem.textContent =
    "você acabou de criar uma interação com JavaScript"
}
