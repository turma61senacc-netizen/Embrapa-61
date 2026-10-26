class CampoPesquisa extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder', 'value'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(nome, antigo, novo) {
    const input = this.querySelector('input');
    if (!input || antigo === novo) return;
    if (nome === 'placeholder') input.placeholder = novo || 'Pesquise...';
    if (nome === 'value') input.value = novo || '';
  }


  get value() {
    return this.querySelector('input')?.value ?? '';
  }
  set value(v) {
    this.setAttribute('value', v);
  }

  render() {
    this.innerHTML = `
      <div class="campo">
        <input type="search" aria-label="Pesquisar" />
        <button type="button" aria-label="Pesquisar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="7"></circle>
            <line x1="15.8" y1="15.8" x2="21" y2="21"></line>
          </svg>
        </button>
      </div>
    `;

    const input = this.querySelector('input');
    const botao = this.querySelector('button');

    input.placeholder = this.getAttribute('placeholder') || 'Pesquise...';
    input.value = this.getAttribute('value') || '';


    input.addEventListener('input', () => this.emitir('digitar', input.value));


    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.emitir('pesquisar', input.value);
    });


    botao.addEventListener('click', () => {
      this.emitir('pesquisar', input.value);
      input.focus();
    });
  }

  emitir(nome, valor) {
    this.dispatchEvent(
      new CustomEvent(nome, { detail: { valor }, bubbles: true })
    );
  }
}

customElements.define('campo-pesquisa', CampoPesquisa);

let temporizador;
document.addEventListener('digitar', (e) => {
  clearTimeout(temporizador);
  temporizador = setTimeout(() => {
    console.log('Digitando:', e.detail.valor);

  }, 300);
});


document.addEventListener('pesquisar', (e) => {
  const termo = e.detail.valor.trim();
  if (!termo) return;

  console.log('Pesquisando por:', termo);

});