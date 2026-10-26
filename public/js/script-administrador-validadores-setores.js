const MENSAGEM_SEM_RESULTADO = "Nenhum setor encontrado.";
const COR_LINHA_CLARA = "var(--cor-linha-clara)";
const COR_LINHA_BRANCA = "var(--cor-linha-branca)";

const BOTAO_NOVO_SETOR = document.querySelector(".administrador-main--botao-novo-setor");
const INPUT_PESQUISA = document.querySelector(".administrador-main--input-pesquisa");
const TABELA_CORPO = document.querySelector(".administrador-main--corpo");
const LINHAS_SETORES = Array.from(TABELA_CORPO.querySelectorAll(".administrador-main--linha"));

const LINHA_SEM_RESULTADO = document.createElement("div");
LINHA_SEM_RESULTADO.className = "administrador-main--linha";
const CELULA_SEM_RESULTADO = document.createElement("div");
CELULA_SEM_RESULTADO.className = "administrador-main--coluna";
CELULA_SEM_RESULTADO.textContent = MENSAGEM_SEM_RESULTADO;
CELULA_SEM_RESULTADO.style.width = "100%";
CELULA_SEM_RESULTADO.style.color = "var(--cor-texto-suave)";
LINHA_SEM_RESULTADO.appendChild(CELULA_SEM_RESULTADO);
LINHA_SEM_RESULTADO.hidden = true;
LINHA_SEM_RESULTADO.style.display = "none";
TABELA_CORPO.appendChild(LINHA_SEM_RESULTADO);

function obter_nome_setor(linha) {
    return linha.querySelector(".administrador-main--coluna").textContent.trim();
}

function filtrar_setores() {
    const TERMO_PESQUISA = INPUT_PESQUISA.value.trim().toLowerCase();
    let quantidade_visivel = 0;

    LINHAS_SETORES.forEach(function (linha) {
        const DEVE_APARECER = obter_nome_setor(linha).toLowerCase().includes(TERMO_PESQUISA);

        linha.style.display = DEVE_APARECER ? "" : "none";

        if (DEVE_APARECER) {
            quantidade_visivel++;

            linha.style.backgroundColor = quantidade_visivel % 2 === 1 ? COR_LINHA_CLARA : COR_LINHA_BRANCA;
        }
    });

    LINHA_SEM_RESULTADO.style.display = quantidade_visivel === 0 ? "flex" : "none";
}

function alterar_status_setor(nome_setor, novo_status) {

    console.log("Setor " + nome_setor + " ativo: " + novo_status);
}

function configurar_toggles() {
    LINHAS_SETORES.forEach(function (linha) {
        const TOGGLE = linha.querySelector(".administrador-main--toggle-status");

        TOGGLE.addEventListener("change", function () {
            alterar_status_setor(obter_nome_setor(linha), TOGGLE.checked);
        });
    });
}

function editar_setor(nome_setor) {

}

function configurar_botoes_editar() {
    LINHAS_SETORES.forEach(function (linha) {
        const BOTAO_EDITAR = linha.querySelector(".administrador-main--botao-editar");

        BOTAO_EDITAR.addEventListener("click", function () {
            editar_setor(obter_nome_setor(linha));
        });
    });
}

function criar_novo_setor() {

}

INPUT_PESQUISA.addEventListener("input", filtrar_setores);
BOTAO_NOVO_SETOR.addEventListener("click", criar_novo_setor);

configurar_toggles();
configurar_botoes_editar();
filtrar_setores();