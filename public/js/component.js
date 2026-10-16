class PopMotivoAcao extends HTMLElement {
  static CLASSE_OCULTO   = 'validador-pop--oculto';
  static CLASSE_INVALIDO = 'validador-pop--campo-invalido';

  connectedCallback() {
    this.fundo = document.createElement('div');
    this.fundo.className = `validador-pop--fundo ${PopMotivoAcao.CLASSE_OCULTO}`;

    const janela = document.createElement('div');
    janela.className = 'validador-pop--janela';
    janela.setAttribute('role', 'dialog');

    const titulo = document.createElement('h2');
    titulo.className = 'validador-pop-titulo';
    titulo.textContent = 'Motivo para rejeição da ação';

    const rotulo = document.createElement('label');
    rotulo.className = 'validador-pop--rotulo';
    rotulo.htmlFor = 'pop-validador-razao';
    rotulo.textContent = 'Razão';

    this.campo = document.createElement('textarea');
    this.campo.className = 'validador-pop--campo-razao';
    this.campo.id = 'pop-validador-razao';
    this.campo.placeholder = 'Explique por que a ação foi rejeitada, disserte sobre.';

    const botoes = document.createElement('div');
    botoes.className = 'validador-pop--botoes';

    const cancelar = document.createElement('button');
    cancelar.type = 'button';
    cancelar.className = 'validador-pop--botao validador-pop--botao-cancelar';
    cancelar.textContent = 'Cancelar';

    const enviar = document.createElement('button');
    enviar.type = 'button';
    enviar.className = 'validador-pop--botao validador-pop--botao-enviar';
    enviar.textContent = 'Enviar';

    botoes.append(cancelar, enviar);
    janela.append(titulo, rotulo, this.campo, botoes);
    this.fundo.append(janela);
    this.append(this.fundo);

    cancelar.addEventListener('click', () => {
      this.fechar();
      this.dispatchEvent(new CustomEvent('cancelar'));
    });

    enviar.addEventListener('click', () => {
      const razao = this.campo.value.trim();
      if (!razao) {
        this.campo.classList.add(PopMotivoAcao.CLASSE_INVALIDO);
        this.campo.focus();
        return;
      }
      this.fechar();
      this.dispatchEvent(new CustomEvent('enviar', { detail: { razao } }));
    });

    this.campo.addEventListener('input', () => {
      this.campo.classList.remove(PopMotivoAcao.CLASSE_INVALIDO);
    });
  }

  abrir() {
    this.fundo.classList.remove(PopMotivoAcao.CLASSE_OCULTO);
    this.campo.focus();
  }

  fechar() {
    this.fundo.classList.add(PopMotivoAcao.CLASSE_OCULTO);
    this.campo.value = '';
    this.campo.classList.remove(PopMotivoAcao.CLASSE_INVALIDO);
  }
}

customElements.define('pop-motivo-acao', PopMotivoAcao);