const botaoAbrir = document.getElementById("pesquisador-popup--abrir_id");
const popUp = document.getElementById("pesquisador-popup--pop-up-enviou");
const botaoCancelar = document.getElementById("cancelar_id");
const botaoConfirmar = document.getElementById("confirmar_id");

botaoAbrir.addEventListener("click", function () {
    popUp.showModal();
});

botaoCancelar.addEventListener("click", function () {
    popUp.close();
});

botaoConfirmar.addEventListener("click", function () {
    popUp.close();
});