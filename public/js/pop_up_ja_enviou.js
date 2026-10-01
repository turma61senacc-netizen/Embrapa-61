const BOTAO_ABRIR = document.getElementById("pesquisador-popup--btn-abrir");
const POP_UP = document.getElementById("pesquisador-popup--pop-up-enviou");
const BOTAO_CANCELAR = document.getElementById("pesquisador-popup--btn-cancelar");
const BOTAO_CONFIRMAR = document.getElementById("pesquisador-popup--btn-confirmar");

BOTAO_ABRIR.addEventListener("click", function () {
    POP_UP.showModal();
});

BOTAO_CANCELAR.addEventListener("click", function () {
    POP_UP.close();
});

BOTAO_CONFIRMAR.addEventListener("click", function () {
    POP_UP.close();
});