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




class BarraPesquisa extends HTMLElement{
    connectedCallback(){
        const placeholder = this.getAttribute('placeholder') || 'Pesquise...';
        const icone = this.getAttribute('icone') || '../../../public/imagens/icone_pesquisa.png';

        this.innerHTML = `
            <div class="barra-pesquisa">
                <input type="text" class="barra-pesquisa--input">
                <button type="button" class="barra-pesquisa--botao" aria-label="Pesquisar">
                    <img alt="">
                </button>
            </div>`;

        const input = this.querySelector('.barra-pesquisa--input');
        const botao = this.querySelector('.barra-pesquisa--botao');
        input.placeholder = placeholder;
        botao.querySelector('img').src = icone;

        const pesquisar = () => {
            this.dispatchEvent(new CustomEvent('pesquisar', {
                detail: { termo: input.value.trim() },
                bubbles: true
            }));
        };

        botao.addEventListener('click', pesquisar);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') pesquisar();
        });
    }
}

customElements.define('barra-pesquisa', BarraPesquisa);