const CLASSE_ATIVO = 'pesquisador-pop-relatorio--botao-aba-ativo';
const CLASSE_INATIVO = 'pesquisador-pop-relatorio--botao-aba-inativo';

const BTN_SELECIONAR = document.getElementById('pesquisador-pop-relatorio--botao-selecionar-anos');
const BTN_TODOS = document.getElementById('pesquisador-pop-relatorio--botao-todos-anos');
const CHECKBOXES_ANOS = document.querySelectorAll('input[id^="pesquisador-pop-relatorio--ano-"]');

function ativar_botao(botao_ativo, botao_inativo) {
    botao_ativo.classList.add(CLASSE_ATIVO);
    botao_ativo.classList.remove(CLASSE_INATIVO);
    botao_inativo.classList.add(CLASSE_INATIVO);
    botao_inativo.classList.remove(CLASSE_ATIVO);
}

BTN_TODOS.addEventListener('click', () => {
    CHECKBOXES_ANOS.forEach((checkbox) => (checkbox.checked = true));
    ativar_botao(BTN_TODOS, BTN_SELECIONAR);
});

BTN_SELECIONAR.addEventListener('click', () => {
    CHECKBOXES_ANOS.forEach((checkbox) => (checkbox.checked = false));
    ativar_botao(BTN_SELECIONAR, BTN_TODOS);
});

CHECKBOXES_ANOS.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const todos_marcados = [...CHECKBOXES_ANOS].every((item) => item.checked);
        if (todos_marcados) {
            ativar_botao(BTN_TODOS, BTN_SELECIONAR);
        } else {
            ativar_botao(BTN_SELECIONAR, BTN_TODOS);
        }
    });
});
