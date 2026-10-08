const CLASSE_OCULTO   = 'validador-header--oculto';
const CLASSE_INVALIDO = 'validador-header--campo-invalido';
const TECLA_FECHAR    = 'Escape';

const FUNDO          = document.getElementById('pop-validador-fundo');
const BOTAO_CANCELAR = document.getElementById('pop-validador-cancelar');
const BOTAO_ENVIAR   = document.getElementById('pop-validador-enviar');
const CAMPO_RAZAO    = document.getElementById('pop-validador-razao');

function abrir_popup() {
  FUNDO.classList.remove(CLASSE_OCULTO);
  CAMPO_RAZAO.focus();
}

function fechar_popup() {
  FUNDO.classList.add(CLASSE_OCULTO);
 CAMPO_RAZAO.value = '';
 CAMPO_RAZAO.classList.remove(CLASSE_INVALIDO);
}

function enviar_razao() {
  const texto = CAMPO_RAZAO.value.trim();

  if (!texto) {
    CAMPO_RAZAO.classList.add(CLASSE_INVALIDO);
    CAMPO_RAZAO.focus();
    return;
  }

  console.log('Razão enviada:', texto);
  fechar_popup();
}

BOTAO_CANCELAR.addEventListener('click', fechar_popup);
BOTAO_ENVIAR.addEventListener('click', enviar_razao);

CAMPO_RAZAO.addEventListener('input', () => {
  CAMPO_RAZAO.classList.remove(CLASSE_INVALIDO);
});

document.addEventListener('keydown', (e) => {
  if (e.key === TECLA_FECHAR) fechar_popup();
});