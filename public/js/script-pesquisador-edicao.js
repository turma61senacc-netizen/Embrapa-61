const INPUT = document.getElementById("editar-acao-arquivos");
const LISTA = document.getElementById("editar-acao-listaArquivos");

let arquivosSelecionados = [];

const ICONE_LIXEIRA = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M4 7h16"/>
    <path d="M9 7V4.5h6V7"/>
    <path d="M6 7l1 13h10l1-13"/>
    <path d="M10 11v6M14 11v6"/>
</svg>`;

const ICONE_DOWNLOAD = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z"/>
    <path d="M14 3v5h5"/>
    <path d="M12 10.5v6M9.5 14l2.5 2.5 2.5-2.5"/>
</svg>`;

INPUT.addEventListener("change", () => {
    for (const ARQUIVO of INPUT.files) {
        arquivosSelecionados.push(ARQUIVO);
    }

    atualizarLista();
    INPUT.value = "";
});

LISTA.addEventListener("click", (evento) => {
    const BOTAO = evento.target.closest("button[data-acao]");
    if (!BOTAO) return;

    const indice = Number(BOTAO.dataset.indice);

    if (BOTAO.dataset.acao === "remover") {
        removerArquivo(indice);
    } else if (BOTAO.ARQUIVOdataset.acao === "baixar") {
        baixarArquivo(indice);
    }
});

function extensaoDoArquivo(nome) {
    const PARTES = nome.split(".");
    return PARTES.length > 1 ? PARTES.pop().toUpperCase().slice(0, 4) : "ARQ";
}

function formatarTamanho(bytes) {
    if (bytes >= 1024 * 1024) {
        return (bytes / 1024 / 1024).toFixed(1) + " mb";
    }
    return Math.max(1, Math.round(bytes / 1024)) + " kb";
}

function criarIconeArquivo(extensao) {
    return `
    <svg class="editar-acao-arquivo-icone" viewBox="0 0 24 32" aria-hidden="true">
        <path d="M2 0h14l8 8v22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#3b74ff"/>
        <path d="M16 0l8 8h-6a2 2 0 0 1-2-2z" fill="#9dbaff"/>
        <text x="12" y="27" text-anchor="middle" font-family="Verdana, sans-serif"
              font-size="7" font-weight="700" fill="#fff">${extensao}</text>
    </svg>`;
}

function atualizarLista() {
    LISTA.innerHTML = "";

    arquivosSelecionados.forEach((arquivo, indice) => {
        const ITEM = document.createElement("div");
        ITEM.className = "editar-acao-arquivo";

        ITEM.innerHTML = `
            ${criarIconeArquivo(extensaoDoArquivo(arquivo.name))}
            <div class="editar-acao-arquivo-info">
                <span class="editar-acao-arquivo-nome"></span>
                <span class="editar-acao-arquivo-tamanho">
                    ${formatarTamanho(arquivo.size)}
                </span>
            </div>
            <div class="editar-acao-arquivo-acoes">
                <button type="button"
                        class="editar-acao"
                        data-acao="remover"
                        data-indice="${indice}"
                        aria-label="Remover arquivo">
                    ${ICONE_LIXEIRA}
                </button>

                <button type="button"
                        class="editar-acao"
                        data-acao="baixar"
                        data-indice="${indice}"
                        aria-label="Baixar arquivo">
                    ${ICONE_DOWNLOAD}
                </button>
            </div>
        `;

        const NOME = ITEM.querySelector(".editar-acao-arquivo-nome");
        NOME.textContent = arquivo.name;
        NOME.title = arquivo.name;

        LISTA.appendChild(ITEM);
    });
}

function removerArquivo(indice) {
    arquivosSelecionados.splice(indice, 1);
    atualizarLista();
}

function baixarArquivo(indice) {
    const arquivo = arquivosSelecionados[indice];
    const url = URL.createObjectURL(arquivo);

    const LINK = document.createElement("a");
    LINK.href = url;
    LINK.download = arquivo.name;
    LINK.click();

    URL.revokeObjectURL(url);
}