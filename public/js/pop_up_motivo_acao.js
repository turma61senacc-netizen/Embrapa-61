const CLASSE_OCULTO   = 'validador-header--oculto';
const CLASSE_INVALIDO = 'validador-header--campo-invalido';
const TECLA_FECHAR    = 'Escape';

const fundo          = document.getElementById('pop-validador-fundo');
const botao_cancelar = document.getElementById('pop-validador-cancelar');
const botao_enviar   = document.getElementById('pop-validador-enviar');
const campo_razao    = document.getElementById('pop-validador-razao');

function abrir_popup() {
  fundo.classList.remove(CLASSE_OCULTO);
  campo_razao.focus();
}

function fechar_popup() {
  fundo.classList.add(CLASSE_OCULTO);
  campo_razao.value = '';
  campo_razao.classList.remove(CLASSE_INVALIDO);
}

function enviar_razao() {
  const texto = campo_razao.value.trim();

  if (!texto) {
    campo_razao.classList.add(CLASSE_INVALIDO);
    campo_razao.focus();
    return;
  }

  console.log('Razão enviada:', texto);
  fechar_popup();
}

botao_cancelar.addEventListener('click', fechar_popup);
botao_enviar.addEventListener('click', enviar_razao);

campo_razao.addEventListener('input', () => {
  campo_razao.classList.remove(CLASSE_INVALIDO);
});

document.addEventListener('keydown', (e) => {
  if (e.key === TECLA_FECHAR) fechar_popup();
});