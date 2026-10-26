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

//Usado na tela_gestao_acoes.html
class TabelaAcoes extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.configurarBotaoAdicionar();
    }

    configurarBotaoAdicionar() {
        const BTN_NOVA_ACAO = document.querySelector('#btn-nova-acao');
        const TABELA_VAZIA = this.shadowRoot.querySelector('#corpo-tabela');

        if (!BTN_NOVA_ACAO) return;

        BTN_NOVA_ACAO.addEventListener('click', () => {
            const tr = document.createElement('tr');
            
            tr.innerHTML = `
                <td contenteditable="true" class="celula-nome" data-placeholder="Digite o nome da ação..."></td>
                <td>
                    <select class="selecionar-setor">
                        <option value="" disabled selected hidden>Setor</option>
                        <option value="sipt">SIPT</option>
                        <option value="spat">SPAT</option>
                        <option value="nco">NCO</option>
                    </select>
                </td>
                <td>
                    <div class="coluna-status">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                        <button class="btn-remover" title="Excluir Linha">×</button>
                    </div>
                </td>
            `;

            TABELA_VAZIA.appendChild(tr);

            tr.querySelector('.celula-nome').focus();
            tr.querySelector('.btn-remover').addEventListener('click', () => tr.remove());
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    max-width: 1000px;
                    margin: 0 auto;
                    background: white;
                    padding: 24px;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                }

                .barra-topo {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .titulo {
                    font-size: 24px;
                    font-weight: bold;
                    color: #000;
                    margin: 0;
                }

                .btn-add {
                    padding: 10px 16px; 
                    background-color: #386799; 
                    color: white; 
                    border: none; 
                    border-radius: 6px; 
                    font-weight: bold; 
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .btn-add:hover {
                    background-color: #2a527a;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                th {
                    background-color: #386799;
                    color: white;
                    font-weight: 600;
                    padding: 14px 20px;
                    text-align: left;
                    font-size: 15px;
                }

                th:first-child { border-top-left-radius: 8px; border-bottom-left-radius: 8px; }
                th:last-child { border-top-right-radius: 8px; border-bottom-right-radius: 8px; }

                td {
                    padding: 16px 20px;
                    border-bottom: 1px solid #eef2f5;
                    color: #333;
                    font-size: 14px;
                }

                tr:nth-child(even) td {
                    background-color: #f4f8fc;
                }

                .celula-nome {
                    outline: none;
                    cursor: text;
                }
                .celula-nome:empty:before {
                    content: attr(data-placeholder);
                    color: #b0b8c1;
                }

                .selecionar-setor {
                    border: none;
                    background: transparent;
                    color: #4a607a;
                    font-weight: 500;
                    font-size: 14px;
                    cursor: pointer;
                    outline: none;
                }

                .coluna-status {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 120px;
                }

                .switch {
                    position: relative;
                    display: inline-block;
                    width: 44px;
                    height: 22px;
                }
                .switch input { opacity: 0; width: 0; height: 0; }
                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-color: #cbd5e1;
                    transition: .3s;
                    border-radius: 22px;
                }
                .slider:before {
                    position: absolute;
                    content: "";
                    height: 16px; width: 16px;
                    left: 3px; bottom: 3px;
                    background-color: white;
                    transition: .3s;
                    border-radius: 50%;
                }
                input:checked + .slider { background-color: #4ade80; }
                input:checked + .slider:before { transform: translateX(22px); }

                .btn-remover {
                    background: transparent;
                    border: none;
                    color: #aaa;
                    font-size: 20px;
                    cursor: pointer;
                    padding: 0 5px;
                }
                .btn-remover:hover { color: #dc3545; }
            </style>

            <table>
                <thead>
                    <tr>
                        <th style="width: 50%;">Nome</th>
                        <th style="width: 30%;">Setor</th>
                        <th style="width: 20%;">Status</th>
                    </tr>
                </thead>
                <tbody id="corpo-tabela">
                    <!-- Inicia limpo e sem linhas -->
                </tbody>
            </table>
        `;
    }
}

customElements.define('gestao-acoes', TabelaAcoes);
