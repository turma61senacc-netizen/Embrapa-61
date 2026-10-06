
const CLASSE_ATIVO = 'pesquisador-pop-relatorio--botao-aba-ativo';
const CLASSE_INATIVO = 'pesquisador-pop-relatorio--botao-aba-inativo';

const btn_selecionar = document.getElementById('pesquisador-pop-relatorio--botao-selecionar-anos');
const btn_todos = document.getElementById('pesquisador-pop-relatorio--botao-todos-anos');
const checkboxes_anos = document.querySelectorAll('input[id^="pesquisador-pop-relatorio--ano-"]');

function ativar_botao(botao_ativo, botao_inativo) {
    botao_ativo.classList.add(CLASSE_ATIVO);
    botao_ativo.classList.remove(CLASSE_INATIVO);
    botao_inativo.classList.add(CLASSE_INATIVO);
    botao_inativo.classList.remove(CLASSE_ATIVO);
}

btn_todos.addEventListener('click', () => {
    checkboxes_anos.forEach((checkbox) => (checkbox.checked = true));
    ativar_botao(btn_todos, btn_selecionar);
});

btn_selecionar.addEventListener('click', () => {
    checkboxes_anos.forEach((checkbox) => (checkbox.checked = false));
    ativar_botao(btn_selecionar, btn_todos);
});

checkboxes_anos.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const todos_marcados = [...checkboxes_anos].every((item) => item.checked);
        if (todos_marcados) {
            ativar_botao(btn_todos, btn_selecionar);
        } else {
            ativar_botao(btn_selecionar, btn_todos);
        }
    });
});