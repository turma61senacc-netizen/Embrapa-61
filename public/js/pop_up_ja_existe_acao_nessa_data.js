const pop_up_acao_existe_nessa_data = document.getElementById('pesquisador-pop--card-acao-existe-nessa-data');
const btn_abrir_pop_up = document.getElementById('pesquisador-pop--botao-abrir-pop-up');
const btn_cancelar_pop_up = document.getElementById('pesquisador-pop--botao-cancelar');

// Abrir o pop-up
btn_abrir_pop_up.addEventListener('click', () => {
  pop_up_acao_existe_nessa_data.showModal();
});

// Fechar o pop-up
btn_cancelar_pop_up.addEventListener('click', () => {
  pop_up_acao_existe_nessa_data.close();
});