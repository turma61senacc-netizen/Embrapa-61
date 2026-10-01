const POP_UP_ACAO_EXISTE_NESSA_DATA = document.getElementById('pesquisador-pop--card-acao-existe-nessa-data');
const BOTAO_ABRIR_POP_UP = document.getElementById('pesquisador-pop--botao-abrir-pop-up');
const BOTAO_CANCELAR_POP_UP = document.getElementById('pesquisador-pop--botao-cancelar');

// Abrir o pop-up
BOTAO_ABRIR_POP_UP.addEventListener('click', () => {
  POP_UP_ACAO_EXISTE_NESSA_DATA.showModal();
});

// Fechar o pop-up
BOTAO_CANCELAR_POP_UP.addEventListener('click', () => {
  POP_UP_ACAO_EXISTE_NESSA_DATA.close();
});