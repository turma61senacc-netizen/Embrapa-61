const formularioLogin = document.getElementById('login--formulario--login');
const mensagemStatus = document.getElementById('login--p--mensagem');
const inputEmail = document.getElementById('login--input--email');

/**
 * Limpa o placeholder ao focar no campo.
 */
function manipularFocoInput() {
    this.dataset.placeholder = this.placeholder;
    this.placeholder = '';
}

/**
 * Restaura o placeholder ao sair do campo.
 */
function manipularBlurInput() {
    this.placeholder = this.dataset.placeholder;
}

/**
 * Processa a submissão do formulário de login.
 * @param {Event} evento
 */
function autenticarUsuario(evento) {
    evento.preventDefault();
    const emailInformado = inputEmail.value.trim();

    if (!emailInformado) return;

    // Simulação de ação de autenticação
    mensagemStatus.textContent = 'E-mail informado: ' + emailInformado;
}

// Event Listeners
if (inputEmail) {
    inputEmail.addEventListener('focus', manipularFocoInput);
    inputEmail.addEventListener('blur', manipularBlurInput);
}

if (formularioLogin) {
    formularioLogin.addEventListener('submit', autenticarUsuario);
}
