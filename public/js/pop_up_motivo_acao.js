const fundo         = document.getElementById('fundo');
const botaoCancelar = document.getElementById('cancelar');
const botaoEnviar   = document.getElementById('enviar');
const campoRazao    = document.getElementById('razao');
const mensagemErro  = document.getElementById('erro');

function abrirPopup() {
  fundo.classList.remove('oculto');
  campoRazao.focus();
}

function fecharPopup() {
  fundo.classList.add('oculto');
  campoRazao.value = '';
  campoRazao.classList.remove('invalido');
  mensagemErro.hidden = true;
}

function enviarRazao() {
  const texto = campoRazao.value.trim();

  if (!texto) {
    campoRazao.classList.add('invalido');
    mensagemErro.hidden = false;
    campoRazao.focus();
    return;
  }

  console.log('Razão enviada:', texto);
  fecharPopup();
}

botaoCancelar.addEventListener('click', fecharPopup);
botaoEnviar.addEventListener('click', enviarRazao);

campoRazao.addEventListener('input', () => {
  campoRazao.classList.remove('invalido');
  mensagemErro.hidden = true;
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharPopup();
});