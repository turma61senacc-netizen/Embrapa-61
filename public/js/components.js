class BotaoExcel extends HTMLElement{
    connectedCallback(){
        const texto = this.innerHTML || "Baixar em Excel";
        const icone = this.getAttribute('icone') || '../../../public/imagens/icone_excel.png';

        this.innerHTML = `<button class="botao-baixar_excel"><img src="${icone}" alt="">${texto}</button>`;
    }
}

customElements.define('botao-excel', BotaoExcel);