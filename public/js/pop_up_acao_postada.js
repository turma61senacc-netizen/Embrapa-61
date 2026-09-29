const pop_up_acao_postada = document.getElementById('pop_up_acao_postada_id');
const btn_abrir = document.getElementById('abrir_id');
const btn_fechar = document.getElementById('fechar_id');

// Abrir o pop-up
btn_abrir.addEventListener('click', () => {
  pop_up_acao_postada.showModal();
});

// Fechar o pop-up
btn_fechar.addEventListener('click', () => {
  pop_up_acao_postada.close();
});