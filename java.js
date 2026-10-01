const modal = document.querySelector('.modal');
const razao = document.getElementById('razao');
const erro = document.getElementById('erro');
const btnEnviar = document.getElementById('btnEnviar');
const btnCancelar = document.getElementById('btnCancelar');
const btnFechar = document.getElementById('btnFechar');

function fechar() {
  razao.value = '';
  limparErro();
  
  console.log('Modal fechado');
}

function limparErro() {
  erro.hidden = true;
  razao.classList.remove('invalido');
}

function enviar() {
  const texto = razao.value.trim();

  if (!texto) {
    erro.hidden = false;
    razao.classList.add('invalido');
    razao.focus();
    return;
  }

  limparErro();
  
  console.log('Motivo enviado:', texto);
  alert('Motivo enviado com sucesso!');
  fechar();
}

razao.addEventListener('input', limparErro);
btnEnviar.addEventListener('click', enviar);
btnCancelar.addEventListener('click', fechar);
btnFechar.addEventListener('click', fechar);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fechar();
});