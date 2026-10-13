class PopupConcluido extends HTMLElement {
  static get observedAttributes() {
    return ['titulo', 'mensagem', 'texto-botao'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.4);
          font-family: Arial, Helvetica, sans-serif;
          z-index: 1000;
        }

        .pop-main {
          background: #ffffff;
          border-radius: 16px;
          width: min(92vw, 1000px);
          height: 50vh;
          padding: 3vh 24px 4vh;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
        }

        .pop-main--icone {
          width: min(22vh, 180px);
          height: min(22vh, 180px);
          margin: 0 auto 2.5vh;
          border-radius: 50%;
          background: #c7e2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pop-main--icone svg {
          width: 50%;
          height: 50%;
        }

        .pop-main--titulo {
          margin: 0 0 6px;
          font-size: 26px;
          font-weight: 700;
          color: #000000;
        }

        .pop-main--mensagem {
          margin: 0 0 auto;
          font-size: 16px;
          color: #222222;
        }

        .pop-main--botao {
          width: 100%;
          max-width: 260px;
          padding: 10px 16px;
          border: none;
          border-radius: 20px;
          background: #0f1f6e;
          color: #ffffff;
          font-size: 15px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .pop-main--botao:hover {
          opacity: 0.9;
        }
      </style>

      <div class="pop-main">
        <div class="pop-main--icone">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <polyline points="8,26 20,38 40,12"
              stroke="#3b4a5a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h2 class="pop-main--titulo"></h2>
        <p class="pop-main--mensagem"></p>
        <button class="pop-main--botao" type="button"></button>
      </div>
    `;

    this.shadowRoot
      .querySelector('.pop-main--botao')
      .addEventListener('click', () => this.fechar());
  }

  connectedCallback() {
    this.atualizar();
  }

  attributeChangedCallback() {
    this.atualizar();
  }

  atualizar() {
    // textContent evita injeção de HTML vindo dos atributos
    this.shadowRoot.querySelector('.pop-main--titulo').textContent =
      this.getAttribute('titulo') ?? 'Concluído!';
    this.shadowRoot.querySelector('.pop-main--mensagem').textContent =
      this.getAttribute('mensagem') ?? '';
    this.shadowRoot.querySelector('.pop-main--botao').textContent =
      this.getAttribute('texto-botao') ?? 'Fechar';
  }

  fechar() {
    this.dispatchEvent(new CustomEvent('fechar', { bubbles: true, composed: true }));
    this.remove();
  }
}

customElements.define('popup-concluido', PopupConcluido);