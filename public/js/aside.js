class MenuLateral extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.renderizarMenu();
    }

    obterConfiguracaoMenus() {
        return {
            administrador: [
                { texto: 'Painel Principal', icone: 'icone_painel.png', link: '' },
                { texto: 'Calendário', icone: 'icone_calendario.png', link: '' },
                { texto: 'Ações', icone: 'icone_acoes.png', link: '' },
                { texto: 'Empregados', icone: 'icone_empregados.png', link: '' },
                { texto: 'Validadores', icone: 'icone_validadores.png', link: '' }
            ],
            pesquisador: [
                { texto: 'Painel Principal', icone: 'icone_painel.png', link: '' },
                { texto: 'Minhas Ações', icone: 'icone_acoes.png', link: '' }
            ],
            validador: [
                { texto: 'Painel Principal', icone: 'icone_painel.png', link: '' },
                { texto: 'Validações', icone: 'icone_validacoes.png', link: '' }
            ],
            comite: [
                { texto: 'Painel Principal', icone: 'icone_painel.png', link: '' }
            ]
        };
    }

    renderizarMenu() {
        const nomeUsuario = this.getAttribute('nome') || 'Fulano da Silva Rodrigues';
        const cargoBruto = (this.getAttribute('cargo') || 'administrador').toLowerCase();
        const paginaAtual = this.getAttribute('pagina') || '';

        const nomesCargosExibicao = {
            administrador: 'Administrador',
            pesquisador: 'Pesquisador',
            validador: 'Validador',
            comite: 'Comitê'
        };

        const menusPorCargo = this.obterConfiguracaoMenus();
        const itensMenuAtual = menusPorCargo[cargoBruto] || menusPorCargo.administrador;
        const nomeCargoFormatado = nomesCargosExibicao[cargoBruto] || cargoBruto;

        let tituloPaginaAtual = 'Painel Principal';
        const itemEncontrado = itensMenuAtual.find(item => item.link === paginaAtual);
        if (itemEncontrado) {
            tituloPaginaAtual = itemEncontrado.texto;
        }

        const temLinkAtivoExplicito = itensMenuAtual.some(item => item.link === paginaAtual);

        const htmlLinks = itensMenuAtual.map((item, index) => {
            const estaAtivo = (paginaAtual === item.link) || (index === 0 && !temLinkAtivoExplicito);
            const classeLink = estaAtivo ? 'menu-aside--link--ativo' : 'menu-aside--link--inativo';

            return `
                <a href="${item.link}" class="${classeLink}">
                    <img class="menu-aside--icone--link" src="../../public/imagens/${item.icone}" alt="">
                    <p class="menu-aside--texto--link">${item.texto}</p>
                </a>
            `;
        }).join('');

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../../public/css/aside.css">

            <header>
                <div class="menu-header--container--superior">
                    <div class="menu-header--container--elementos">
                        <p class="menu-header--texto--nome" id="menu-header--texto--nome">${nomeUsuario}</p>
                        <p class="menu-header--texto--barra">|</p>
                        <p class="menu-header--texto--funcao">${nomeCargoFormatado}</p>
                    </div>

                    <p class="menu-header--texto--titulo">${tituloPaginaAtual}</p>

                    <div class="menu-header--container--acoes">
                        <a href="notificacoes.php" class="menu-header--link--notificacao">
                            <img src="../../public/imagens/icone_notificacao.png" class="menu-header--icone--notificacao" alt="Notificações">
                        </a>
                        <a href="../../controller/logout.php" class="menu-header--botao--logout menu-header--texto--botao">Logout</a>
                    </div>
                </div>
            </header>

            <aside>
                <nav class="menu-aside--container--menuLateral">
                    <div class="menu-aside--container--logoMenuLateral">
                        <img src="../../public/imagens/logo_embrapa.png" class="menu-aside--imagem--logo" alt="Logo Embrapa">
                    </div>

                    <div class="menu-aside--container--opcoesMenu">
                        ${htmlLinks}
                    </div>
                </nav>
            </aside>
        `;
    }
}

customElements.define('menu-embrapa', MenuLateral);
