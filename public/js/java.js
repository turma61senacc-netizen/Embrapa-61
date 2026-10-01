document.addEventListener('DOMContentLoaded', () => {
    
    const bancoDeDadosDashboard = {
        "2025": { total: 100, aprovadas: 40, analise: 40, negadas: 20 },
        "2026": { total: 35, aprovadas: 15, analise: 15, negadas: 5 },
        "2027": { total: 150, aprovadas: 80, analise: 50, negadas: 20 },
        "2028": { total: 80, aprovadas: 30, analise: 40, negadas: 10 },
        "2029": { total: 220, aprovadas: 110, analise: 55, negadas: 55 },
        "2030": { total: 500, aprovadas: 250, analise: 150, negadas: 100 }
    };

    
    const btnSeletorAno = document.getElementById('btn-seletor-ano');
    const modalSelecaoAno = document.getElementById('modal-selecao-ano');
    const anoAtualTexto = document.getElementById('ano-atual-texto');
    const btnCancelarAno = document.getElementById('btn-cancelar-ano');
    const btnAplicarAno = document.getElementById('btn-aplicar-ano');
    const botoesOpcaoAno = document.querySelectorAll('.opcao-ano-btn');

    
    const txtTotal = document.getElementById('txt-total');
    const txtAprovadas = document.getElementById('txt-aprovadas');
    const txtAnalise = document.getElementById('txt-analise');
    const txtNegadas = document.getElementById('txt-negadas');

    const txtPercAprovadas = document.getElementById('txt-porcentagem-aprovadas');
    const txtPercAnalise = document.getElementById('txt-porcentagem-analise');
    const txtPercNegadas = document.getElementById('txt-porcentagem-negadas');

    const barraAprovadas = document.getElementById('barra-aprovadas');
    const barraAnalise = document.getElementById('barra-analise');
    const barraNegadas = document.getElementById('barra-negadas');

   
    let anoSelecionadoProvisorio = "2026";

    
    btnSeletorAno.addEventListener('click', (evento) => {
        evento.stopPropagation();
        modalSelecaoAno.classList.toggle('elemento-oculto');
    });

    
    botoesOpcaoAno.forEach(botao => {
        botao.addEventListener('click', () => {
            botoesOpcaoAno.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');
            anoSelecionadoProvisorio = botao.getAttribute('data-ano');
        });
    });

    
    btnCancelarAno.addEventListener('click', () => {
        modalSelecaoAno.classList.add('elemento-oculto');
    });

    
    btnAplicarAno.addEventListener('click', () => {
        anoAtualTexto.innerText = anoSelecionadoProvisorio;

        const dadosDoAno = bancoDeDadosDashboard[anoSelecionadoProvisorio];

        if (dadosDoAno) {
            txtTotal.innerText = dadosDoAno.total;
            txtAprovadas.innerText = dadosDoAno.aprovadas;
            txtAnalise.innerText = dadosDoAno.analise;
            txtNegadas.innerText = dadosDoAno.negadas;

            const total = dadosDoAno.total || 1; 
            const percAprovadas = Math.round((dadosDoAno.aprovadas / total) * 100);
            const percAnalise = Math.round((dadosDoAno.analise / total) * 100);
            const percNegadas = Math.round((dadosDoAno.negadas / total) * 100);

            txtPercAprovadas.innerText = `${percAprovadas}%`;
            txtPercAnalise.innerText = `${percAnalise}%`;
            txtPercNegadas.innerText = `${percNegadas}%`;

            barraAprovadas.style.width = `${percAprovadas}%`;
            barraAnalise.style.width = `${percAnalise}%`;
            barraNegadas.style.width = `${percNegadas}%`;
        }

        modalSelecaoAno.classList.add('elemento-oculto');
    });

    
    document.addEventListener('click', (evento) => {
        if (!modalSelecaoAno.contains(evento.target) && !btnSeletorAno.contains(evento.target)) {
            modalSelecaoAno.classList.add('elemento-oculto');
        }
    });
});