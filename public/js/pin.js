const pinMainFormulario = document.getElementById('pin-main--formulario');
const pinMainMensagem = document.getElementById('pin-main--mensagem');
const pinMainInput = document.getElementById('pin-main--input');
const pinMainBotaoVoltar = document.getElementById('pin-main--botao-voltar');

if (pinMainInput) {
  pinMainInput.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '');
  });
}

if (pinMainFormulario) {
  pinMainFormulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const pinInformado = pinMainInput.value.trim();

    if (pinInformado.length < 4) {
      pinMainMensagem.textContent = 'Digite pelo menos 4 números.';
      pinMainMensagem.style.color = '#b42318';
      pinMainInput.focus();
      return;
    }

    pinMainMensagem.textContent = 'PIN informado para verificação.';
    pinMainMensagem.style.color = '#147c20';
  });
}

if (pinMainBotaoVoltar) {
  pinMainBotaoVoltar.addEventListener('click', function () {
    window.history.length > 1
      ? window.history.back()
      : window.location.href = '../../../public/pages/tela_login.html';
  });
}
