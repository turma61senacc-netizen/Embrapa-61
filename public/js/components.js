class BotaoExcel extends HTMLElement{
    connectedCallback(){
        const texto = this.innerHTML || "Baixar em Excel";
        const icone = this.getAttribute('icone') || '../../../public/imagens/icone_excel.png';

        this.innerHTML = `<button class="botao-baixar_excel"><img src="${icone}" alt="">${texto}</button>`;
    }
}

customElements.define('botao-excel', BotaoExcel);

class BotaoCancelar extends HTMLElement{
    connectedCallback(){
        const texto = this.innerHTML || "Cancelar";

        this.innerHTML = `<button class="botao-cancelar">${texto}</button>`;
    }
}

customElements.define(`botao-cancelar`, BotaoCancelar);

class BotaoAzul extends HTMLElement{
    connectedCallback(){
        const texto = this.innerHTML || "Confirmar";

        this.innerHTML= `<button class="botao-azul">${texto}</button>`;
    }
}

customElements.define(`botao-azul`, BotaoAzul)

class BotaoVerde extends HTMLElement{
    connectedCallback(){
        const texto = this.innerHTML || "Confirmar";

    this.innerHTML=`<button class="botao-verde">${texto}</button>`
    }
}
customElements.define(`botao-verde`, BotaoVerde)

class TabelaGestaoAcoes extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEvents();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    margin: 20px;
                    background-color: #ffffff;
                }
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .buttons-group {
                    display: flex;
                    gap: 12px;
                }
                .btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 18px;
                    font-size: 14px;
                    font-weight: 600;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: background 0.2s;
                    line-height: 1;
                }
                .btn-primary {
                    background-color: #008744;
                    color: white;
                }
                .btn-primary:hover {
                    background-color: #006b35;
                }
                .btn-secondary {
                    background-color: #ffffff;
                    color: #1a4a75;
                    border: 1px solid #dcdcdc;
                }
                .btn-secondary:hover {
                    background-color: #f7f9fa;
                }
                .btn-icon {
                    width: 30px;
                    height: 30px;
                    object-fit: contain;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    border-radius: 8px 8px 0 0;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                }
                th {
                    background-color: #3b6e9c;
                    color: white;
                    padding: 14px 20px;
                    font-size: 15px;
                    font-weight: 600;
                    text-align: left;
                }
                td {
                    padding: 12px 20px;
                    border-bottom: 1px solid #eef2f5;
                    color: #333333;
                    font-size: 14px;
                }
                tr:nth-child(even) {
                    background-color: #f4f8fb;
                }
                tr:hover {
                    background-color: #e9f1f7;
                }
                select {
                    padding: 6px 10px;
                    border: 1px solid #cccccc;
                    border-radius: 4px;
                    background-color: transparent;
                    color: #555555;
                    cursor: pointer;
                    font-size: 14px;
                }
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 44px;
                    height: 22px;
                }
                .switch input { 
                    opacity: 0;
                    width: 0;
                    height: 0;
                }
                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-color: #ccc;
                    transition: .3s;
                    border-radius: 22px;
                }
                .slider:before {
                    position: absolute;
                    content: "";
                    height: 16px;
                    width: 16px;
                    left: 3px;
                    bottom: 3px;
                    background-color: white;
                    transition: .3s;
                    border-radius: 50%;
                }
                input:checked + .slider {
                    background-color: #008744;
                }
                input:checked + .slider:before {
                    transform: translateX(22px);
                }
            </style>

            <div class="header-container">
                <div class="buttons-group">
                    <button class="btn btn-primary" id="btnNovaAcao">
                        <span>+</span> Nova Ação
                    </button>
                    <button class="btn btn-secondary">
                        <img src="../../../public/imagens/icone_excel.png" class="btn-icon"> Baixar em Excel
                    </button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th style="width: 50%;">Nome</th>
                        <th style="width: 30%;">Setor</th>
                        <th style="width: 20%;">Status</th>
                    </tr>
                </thead>
                <tbody id="tabelaCorpo">
                    <tr>
                        <td>Coordenação de evento REGIONAL</td>
                        <td>
                            <select>
                                <option>NCO</option>
                                <option>SIPT</option>
                                <option>SP</option>
                            </select>
                        </td>
                        <td>
                            <label class="switch"><input type="checkbox"><span class="slider"></span></label>
                        </td>
                    </tr>
                    <tr>
                        <td>Artigos de divulgação na mídia</td>
                        <td>
                            <select>
                                <option>NCO</option>
                                <option>SIPT</option>
                                <option>SP</option>
                            </select>
                        </td>
                        <td>
                            <label class="switch"><input type="checkbox"><span class="slider"></span></label>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
    }

    setupEvents() {
        const btnNovaAcao = this.shadowRoot.getElementById('btnNovaAcao');
        btnNovaAcao.addEventListener('click', () => {
            const eventoAbrirPopup = new CustomEvent('solicitarAberturaPopup', {
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(eventoAbrirPopup);
        });
    }

    adicionarNovaLinha(nomeAcao, setorSelecionado) {
        const tbody = this.shadowRoot.getElementById('tabelaCorpo');
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${nomeAcao}</td>
            <td>
                <select>
                    <option>${setorSelecionado || 'NCO'}</option>
                    <option>SIPT</option>
                    <option>SPAT</option>
                </select>
            </td>
            <td>
                <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider"></span>
                </label>
            </td>
        `;

        tbody.insertBefore(tr, tbody.firstChild);
    }
}

customElements.define('tabela-gestao-acoes', TabelaGestaoAcoes);

