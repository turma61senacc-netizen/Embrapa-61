const CLASSE_ATIVO = 'administrador-pop-relatorio--botao-aba-ativo';
const CLASSE_INATIVO = 'administrador-pop-relatorio--botao-aba-inativo';
const CLASSE_ABA_ATIVA = 'administrador-pop-relatorio--aba-ativa';

const CONTAINER = document.getElementById('administrador-pop-relatorio--container');
const BTN_FECHAR = document.getElementById('administrador-pop-relatorio--botao-fechar');
const ABAS = document.querySelectorAll('.administrador-pop-relatorio--aba');
const PAINEIS = document.querySelectorAll('.administrador-pop-relatorio--painel');

function ativar_botao(botao_ativo, botao_inativo) {
    botao_ativo.classList.add(CLASSE_ATIVO);
    botao_ativo.classList.remove(CLASSE_INATIVO);
    botao_inativo.classList.add(CLASSE_INATIVO);
    botao_inativo.classList.remove(CLASSE_ATIVO);
}

function abrir_painel(aba_clicada) {
    ABAS.forEach((aba) => {
        const esta_ativa = aba === aba_clicada;
        aba.classList.toggle(CLASSE_ABA_ATIVA, esta_ativa);
        aba.setAttribute('aria-selected', esta_ativa);
    });

    PAINEIS.forEach((painel) => {
        painel.hidden = painel.id !== aba_clicada.dataset.painel;
    });
}

function filtrar_itens(itens, termo, aviso_sem_resultado) {
    let visiveis = 0;

    itens.forEach((item) => {
        const texto = item.querySelector('label').textContent.toLowerCase();
        const corresponde = texto.includes(termo.trim().toLowerCase());
        item.hidden = !corresponde;
        if (corresponde) visiveis++;
    });

    aviso_sem_resultado.hidden = visiveis > 0;
}

function configurar_painel(painel) {
    const BTN_SELECIONAR = painel.querySelector('.administrador-pop-relatorio--botao-selecionar');
    const BTN_TODOS = painel.querySelector('.administrador-pop-relatorio--botao-todos');
    const CAMPO_BUSCA = painel.querySelector('.administrador-pop-relatorio--campo-busca');
    const AVISO_SEM_RESULTADO = painel.querySelector('.administrador-pop-relatorio--sem-resultado');
    const ITENS = painel.querySelectorAll('.administrador-pop-relatorio--lista-itens .administrador-pop-relatorio--item-checkbox');
    const CHECKBOXES = painel.querySelectorAll('.administrador-pop-relatorio--lista-itens input[type="checkbox"]');

    BTN_TODOS.addEventListener('click', () => {
        CHECKBOXES.forEach((checkbox) => (checkbox.checked = true));
        ativar_botao(BTN_TODOS, BTN_SELECIONAR);
    });

    BTN_SELECIONAR.addEventListener('click', () => {
        CHECKBOXES.forEach((checkbox) => (checkbox.checked = false));
        ativar_botao(BTN_SELECIONAR, BTN_TODOS);
    });

    CHECKBOXES.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const todos_marcados = [...CHECKBOXES].every((item) => item.checked);
            if (todos_marcados) {
                ativar_botao(BTN_TODOS, BTN_SELECIONAR);
            } else {
                ativar_botao(BTN_SELECIONAR, BTN_TODOS);
            }
        });
    });

    CAMPO_BUSCA.addEventListener('input', () => {
        filtrar_itens(ITENS, CAMPO_BUSCA.value, AVISO_SEM_RESULTADO);
    });
}

ABAS.forEach((aba) => {
    aba.addEventListener('click', () => abrir_painel(aba));
});

PAINEIS.forEach(configurar_painel);

BTN_FECHAR.addEventListener('click', () => {
    CONTAINER.hidden = true;
});