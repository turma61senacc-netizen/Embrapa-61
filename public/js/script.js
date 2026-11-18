const formulario = document.getElementById('form-entrada');
const mensagem = document.getElementById('mensagem');
const inputPin = document.getElementById('pin');
const botaoFechar = document.querySelector('.fechar');

inputPin.addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '');
});

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  const pin = inputPin.value.trim();

  if (pin.length < 4) {
    mensagem.textContent = 'Digite pelo menos 4 números.';
    mensagem.style.color = '#b42318';
    inputPin.focus();
    return;
  }

  mensagem.textContent = 'PIN informado para verificação.';
  mensagem.style.color = '#147c20';
});

botaoFechar.addEventListener('click', function () {
  document.querySelector('.cartao').hidden = true;
});
